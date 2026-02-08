import { NextRequest, NextResponse } from "next/server";

// List files from Google Drive using REST API
export async function POST(req: NextRequest) {
  try {
    const { accessToken, folderId = "root", pageToken } = await req.json();

    if (!accessToken) {
      return NextResponse.json(
        { error: "Access token required" },
        { status: 400 }
      );
    }

    // Build query for Google Drive API
    const query = `'${folderId}' in parents and trashed = false`;
    const params = new URLSearchParams({
      pageSize: "50",
      fields: "nextPageToken, files(id, name, mimeType, webViewLink, webContentLink, size, modifiedTime)",
      q: query,
      orderBy: "folder desc, name asc",
    });

    if (pageToken) {
      params.append("pageToken", pageToken);
    }

    // Call Google Drive API
    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files?${params.toString()}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.error("Google Drive API error:", error);
      
      if (response.status === 401) {
        return NextResponse.json(
          { error: "Token expired or invalid" },
          { status: 401 }
        );
      }
      
      return NextResponse.json(
        { error: "Failed to fetch files from Google Drive" },
        { status: response.status }
      );
    }

    const data = await response.json();
    const files = data.files || [];

    // Add shareable links to each file
    const filesWithLinks = files.map((file: any) => ({
      id: file.id,
      name: file.name,
      mimeType: file.mimeType,
      isFolder: file.mimeType === "application/vnd.google-apps.folder",
      size: file.size,
      modifiedTime: file.modifiedTime,
      webViewLink: file.webViewLink,
      downloadUrl: file.webContentLink || `https://drive.google.com/uc?export=download&id=${file.id}`,
    }));

    return NextResponse.json({
      success: true,
      files: filesWithLinks,
      nextPageToken: data.nextPageToken,
    });
  } catch (error) {
    console.error("List files error:", error);
    return NextResponse.json(
      { error: "Failed to list Google Drive files" },
      { status: 500 }
    );
  }
}
