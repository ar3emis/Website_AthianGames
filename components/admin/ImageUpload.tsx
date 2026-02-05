"use client";

import { useState, useRef, DragEvent, ChangeEvent } from "react";
import { Upload, X, Loader2, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ImageUploadProps {
  value?: string;
  onChange: (url: string) => void;
  label?: string;
  aspectRatio?: "video" | "square" | "auto";
  maxSizeMB?: number;
}

export function ImageUpload({
  value,
  onChange,
  label = "Image",
  aspectRatio = "video",
  maxSizeMB = 10,
}: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(value || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    auto: "",
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      await uploadFile(files[0]);
    }
  };

  const handleFileSelect = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      await uploadFile(files[0]);
    }
  };

  const uploadFile = async (file: File) => {
    setError(null);
    setIsUploading(true);

    try {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        setError("Please select an image file");
        setIsUploading(false);
        return;
      }

      // Validate file size
      const maxSizeBytes = maxSizeMB * 1024 * 1024;
      if (file.size > maxSizeBytes) {
        setError(`File size must be less than ${maxSizeMB}MB`);
        setIsUploading(false);
        return;
      }

      // Create FormData
      const formData = new FormData();
      formData.append("file", file);

      // Upload to server
      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Upload failed");
      }

      if (data.success && data.url) {
        setPreviewUrl(data.url);
        onChange(data.url);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemove = () => {
    setPreviewUrl(null);
    onChange("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleManualUrlChange = (url: string) => {
    setPreviewUrl(url);
    onChange(url);
  };

  return (
    <div className="space-y-3">
      {/* Manual URL Input */}
      <div>
        <label className="block text-sm font-medium mb-2">{label} URL</label>
        <input
          type="text"
          value={value || ""}
          onChange={(e) => handleManualUrlChange(e.target.value)}
          className="w-full px-4 py-2 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none"
          placeholder="/images/product.jpg or https://..."
        />
        <p className="text-xs text-muted-foreground mt-1">
          Enter a URL or upload a file below
        </p>
      </div>

      {/* Upload Area */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Or Upload from Computer
        </label>
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`relative border-2 border-dashed rounded-lg transition-colors ${
            isDragging
              ? "border-primary bg-primary/5"
              : "border-border bg-muted/50"
          } ${isUploading ? "pointer-events-none opacity-50" : ""}`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
            disabled={isUploading}
          />

          {previewUrl ? (
            <div className="relative">
              <div
                className={`relative ${aspectClasses[aspectRatio]} w-full bg-background rounded-lg overflow-hidden`}
              >
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23333' width='400' height='300'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='14' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EImage not found%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div className="absolute top-2 right-2 flex gap-2">
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={handleRemove}
                  className="shadow-lg"
                >
                  <X className="w-4 h-4 mr-1" />
                  Remove
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                  className="shadow-lg"
                >
                  <Upload className="w-4 h-4 mr-1" />
                  Replace
                </Button>
              </div>
            </div>
          ) : (
            <div
              onClick={() => !isUploading && fileInputRef.current?.click()}
              className="p-8 text-center cursor-pointer hover:bg-muted/70 transition-colors rounded-lg"
            >
              {isUploading ? (
                <div className="flex flex-col items-center gap-3">
                  <Loader2 className="w-12 h-12 animate-spin text-primary" />
                  <p className="text-sm text-muted-foreground">
                    Uploading...
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">
                      Drop image here or click to browse
                    </p>
                    <p className="text-xs text-muted-foreground">
                      PNG, JPG, GIF, WebP up to {maxSizeMB}MB
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {error && (
          <p className="text-sm text-destructive mt-2 flex items-center gap-1">
            <X className="w-4 h-4" />
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
