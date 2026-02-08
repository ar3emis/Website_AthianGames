"use client";

import { useState, useCallback, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  FileText,
  Folder,
  Download,
  X,
  LogOut,
  ChevronRight,
  Loader2,
} from "lucide-react";

interface GoogleDriveFile {
  id: string;
  name: string;
  mimeType: string;
  isFolder: boolean;
  size?: string;
  downloadUrl?: string;
}

interface SelectedFile {
  id: string;
  name: string;
  downloadUrl: string;
  mimeType: string;
}

interface GoogleDrivePickerProps {
  onFilesSelected: (files: SelectedFile[]) => void;
  selectedFiles?: SelectedFile[];
  defaultFolderId?: string; // Optional folder ID to start with
  defaultFolderName?: string; // Optional folder name for breadcrumb
}

export function GoogleDrivePicker({
  onFilesSelected,
  selectedFiles = [],
  defaultFolderId = "root",
  defaultFolderName = "My Drive",
}: GoogleDrivePickerProps) {
  const searchParams = useSearchParams();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [files, setFiles] = useState<GoogleDriveFile[]>([]);
  const [loading, setLoading] = useState(false);
  const [folderPath, setFolderPath] = useState<Array<{ id: string; name: string }>>([
    { id: defaultFolderId, name: defaultFolderName },
  ]);
  const [localSelected, setLocalSelected] = useState<SelectedFile[]>(selectedFiles);

  // Load files from Google Drive
  const loadDriveFiles = useCallback(
    async (token: string, folderId: string) => {
      try {
        setLoading(true);
        const response = await fetch("/api/admin/google-drive/files", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            accessToken: token,
            folderId: folderId,
          }),
        });

        const data = await response.json();

        if (data.success) {
          setFiles(data.files);
          console.log(`✅ Loaded ${data.files.length} files from Google Drive`);
        } else {
          console.error("Failed to load files:", data.error);
          
          // If token is invalid/expired, clear storage and show connect button
          if (response.status === 401) {
            console.log("🔑 Token expired, clearing storage...");
            localStorage.removeItem("google_drive_token");
            setAccessToken(null);
            setIsAuthenticated(false);
          } else {
            alert("Failed to load Google Drive files: " + data.error);
          }
        }
      } catch (error) {
        console.error("Failed to load files:", error);
        alert("Failed to load Google Drive files");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // Check for saved token on component mount
  useEffect(() => {
    const savedToken = localStorage.getItem("google_drive_token");
    if (savedToken) {
      console.log("💾 Found saved Google Drive token");
      setAccessToken(savedToken);
      setIsAuthenticated(true);
      console.log(`📁 Auto-loading Google Drive folder: ${defaultFolderId}...`);
      loadDriveFiles(savedToken, defaultFolderId);
    }
  }, [defaultFolderId, loadDriveFiles]);

  // Check for token in URL params (after OAuth callback)
  useEffect(() => {
    console.log("Checking for token in URL...");
    const token = searchParams.get("token");
    console.log("Token from URL:", token ? "✅ Found" : "❌ Not found");
    
    if (token) {
      console.log("🔑 Setting access token and authenticating...");
      
      // Save token to localStorage for persistence
      localStorage.setItem("google_drive_token", token);
      console.log("💾 Token saved to localStorage");
      
      setAccessToken(token);
      setIsAuthenticated(true);
      
      // Clean up URL - remove token from browser history
      window.history.replaceState({}, document.title, window.location.pathname);
      console.log("🧹 URL cleaned");
      
      // Load files from default folder
      console.log(`📁 Loading Google Drive folder: ${defaultFolderId}...`);
      loadDriveFiles(token, defaultFolderId);
    }
  }, [searchParams, loadDriveFiles, defaultFolderId]);

  // Connect to Google Drive
  const handleConnectGoogleDrive = async () => {
    try {
      // Get current URL path to return to after OAuth
      const currentPath = window.location.pathname;
      console.log("🔗 Current page:", currentPath);
      
      const response = await fetch(`/api/admin/google-drive/auth?returnUrl=${encodeURIComponent(currentPath)}`);
      const data = await response.json();

      if (data.authorizeUrl) {
        console.log("🚀 Redirecting to Google OAuth...");
        // Redirect to Google OAuth page
        window.location.href = data.authorizeUrl;
      } else {
        alert("Failed to get authorization URL");
      }
    } catch (error) {
      console.error("Auth error:", error);
      alert("Failed to connect to Google Drive");
    }
  };


  // Navigate to folder
  const handleOpenFolder = (folder: GoogleDriveFile) => {
    setCurrentFolderId(folder.id);
    setFolderPath([
      ...folderPath,
      { id: folder.id, name: folder.name },
    ]);
    loadDriveFiles(accessToken!, folder.id);
  };

  // Go back to parent folder
  const handleNavigatePath = (index: number) => {
    const newPath = folderPath.slice(0, index + 1);
    const folderId = newPath[newPath.length - 1].id;

    setFolderPath(newPath);
    setCurrentFolderId(folderId);
    loadDriveFiles(accessToken!, folderId);
  };

  // Select/deselect file
  const handleToggleFile = (file: GoogleDriveFile) => {
    const isSelected = localSelected.some((f) => f.id === file.id);

    if (isSelected) {
      setLocalSelected(localSelected.filter((f) => f.id !== file.id));
    } else {
      if (!file.isFolder && file.downloadUrl) {
        setLocalSelected([
          ...localSelected,
          {
            id: file.id,
            name: file.name,
            downloadUrl: file.downloadUrl,
            mimeType: file.mimeType,
          },
        ]);
      }
    }
  };

  // Remove selected file
  const handleRemoveFile = (fileId: string) => {
    setLocalSelected(localSelected.filter((f) => f.id !== fileId));
  };

  // Save selections
  const handleSaveSelection = () => {
    onFilesSelected(localSelected);
  };

  // Disconnect
  const handleDisconnect = () => {
    console.log("🔓 Disconnecting Google Drive...");
    
    // Clear localStorage token
    localStorage.removeItem("google_drive_token");
    console.log("💾 Token removed from localStorage");
    
    setAccessToken(null);
    setIsAuthenticated(false);
    setFiles([]);
    setFolderPath([{ id: defaultFolderId, name: defaultFolderName }]);
    setLocalSelected([]);
  };

  if (!isAuthenticated) {
    return (
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Connect Google Drive</h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Connect to your Google Drive to select downloadable files for this product.
          </p>
          <Button
            onClick={handleConnectGoogleDrive}
            disabled={loading}
            size="lg"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Connecting...
              </>
            ) : (
              <>
                <FileText className="w-4 h-4 mr-2" />
                Connect Google Drive
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="font-semibold text-blue-900">✅ Connected to Google Drive</p>
            <p className="text-sm text-blue-700">Select files and folders to use as downloads</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleDisconnect}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Disconnect
          </Button>
        </CardContent>
      </Card>

      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-sm p-4 bg-muted rounded-lg">
        {folderPath.map((folder, index) => (
          <div key={folder.id} className="flex items-center gap-2">
            <button
              onClick={() => handleNavigatePath(index)}
              className="text-primary hover:underline"
            >
              {folder.name}
            </button>
            {index < folderPath.length - 1 && (
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            )}
          </div>
        ))}
      </div>

      {/* Files List */}
      <Card>
        <CardHeader>
          <h3 className="font-semibold">
            Available Files {loading && <Loader2 className="w-4 h-4 animate-spin inline-block ml-2" />}
          </h3>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">
              <Loader2 className="w-8 h-8 animate-spin mx-auto text-muted-foreground" />
            </div>
          ) : files.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              No files found in this folder
            </p>
          ) : (
            <div className="space-y-2">
              {files.map((file) => {
                const isSelected = localSelected.some((f) => f.id === file.id);
                const canSelect = !file.isFolder && file.downloadUrl;

                return (
                  <div
                    key={file.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      isSelected
                        ? "bg-primary/10 border-primary"
                        : "bg-muted hover:bg-muted/80 border-border"
                    } ${!canSelect && !file.isFolder ? "opacity-50" : ""}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleToggleFile(file)}
                          disabled={!canSelect}
                          className="w-4 h-4"
                        />
                        {file.isFolder ? (
                          <Folder className="w-5 h-5 text-yellow-500" />
                        ) : (
                          <FileText className="w-5 h-5 text-blue-500" />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{file.name}</p>
                          {file.size && (
                            <p className="text-xs text-muted-foreground">
                              {parseInt(file.size) / 1024 / 1024 > 1
                                ? `${(parseInt(file.size) / 1024 / 1024).toFixed(2)} MB`
                                : `${(parseInt(file.size) / 1024).toFixed(2)} KB`}
                            </p>
                          )}
                        </div>
                      </div>

                      {file.isFolder ? (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleOpenFolder(file)}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      ) : (
                        <Badge variant={isSelected ? "primary" : "outline"}>
                          {isSelected ? "Selected" : "File"}
                        </Badge>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Selected Files Summary */}
      {localSelected.length > 0 && (
        <Card className="bg-green-50 border-green-200">
          <CardHeader>
            <h3 className="font-semibold text-green-900">
              Selected Files ({localSelected.length})
            </h3>
          </CardHeader>
          <CardContent className="space-y-3">
            {localSelected.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between p-3 bg-white rounded-lg border border-green-200"
              >
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-green-600" />
                  <div>
                    <p className="font-medium text-sm">{file.name}</p>
                    <p className="text-xs text-muted-foreground truncate max-w-xs">
                      {file.downloadUrl}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveFile(file.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}

            <Button
              onClick={handleSaveSelection}
              className="w-full mt-4"
              size="lg"
            >
              Save Selected Files
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
