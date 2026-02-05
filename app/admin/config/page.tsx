"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Save, Youtube, Film } from "lucide-react";

export default function AdminConfigPage() {
  const [config, setConfig] = useState({
    youtube: {
      channelId: "",
      channelHandle: ""
    },
    patreon: {
      username: "",
      url: ""
    },
    trailer: {
      videoId: "",
      title: ""
    }
  });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadConfig();
  }, []);

  const loadConfig = async () => {
    try {
      const response = await fetch("/api/admin/config");
      const data = await response.json();
      if (data.config) {
        setConfig(data.config);
      }
    } catch (error) {
      console.error("Failed to load config:", error);
    }
  };

  const saveConfig = async () => {
    setSaving(true);
    setMessage("");

    try {
      const response = await fetch("/api/admin/config", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(config)
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Configuration saved successfully!");
      } else {
        setMessage(`Error: ${data.error || "Failed to save configuration"}`);
      }
    } catch (error) {
      setMessage(`Error: ${error instanceof Error ? error.message : "Failed to save"}`);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Site Configuration</h1>
        <p className="text-muted-foreground">
          Manage your site configuration. Changes made here will update the live website.
        </p>
      </div>

      {/* YouTube Configuration */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Youtube className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold">YouTube Configuration</h2>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Channel ID
            </label>
            <input
              type="text"
              value={config.youtube.channelId}
              onChange={(e) =>
                setConfig({
                  ...config,
                  youtube: { ...config.youtube, channelId: e.target.value }
                })
              }
              className="w-full px-4 py-2 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none"
              placeholder="UCgJwbyzi0jrX5BuwLS_pJ1A"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Channel Handle
            </label>
            <input
              type="text"
              value={config.youtube.channelHandle}
              onChange={(e) =>
                setConfig({
                  ...config,
                  youtube: { ...config.youtube, channelHandle: e.target.value }
                })
              }
              className="w-full px-4 py-2 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none"
              placeholder="@athiangames"
            />
          </div>
        </CardContent>
      </Card>

      {/* Patreon Configuration */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.386.524c-4.764 0-8.64 3.876-8.64 8.64 0 4.75 3.876 8.613 8.64 8.613 4.75 0 8.614-3.864 8.614-8.613C24 4.4 20.136.524 15.386.524M.003 23.537h4.22V.524H.003" />
            </svg>
            <h2 className="text-2xl font-bold">Patreon Configuration</h2>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Patreon Username
            </label>
            <input
              type="text"
              value={config.patreon.username}
              onChange={(e) =>
                setConfig({
                  ...config,
                  patreon: { ...config.patreon, username: e.target.value }
                })
              }
              className="w-full px-4 py-2 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none"
              placeholder="athiangames"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Patreon URL
            </label>
            <input
              type="url"
              value={config.patreon.url}
              onChange={(e) =>
                setConfig({
                  ...config,
                  patreon: { ...config.patreon, url: e.target.value }
                })
              }
              className="w-full px-4 py-2 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none"
              placeholder="https://patreon.com/athiangames"
            />
          </div>
        </CardContent>
      </Card>

      {/* Trailer Configuration */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Film className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold">Homepage Trailer</h2>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              YouTube Video ID
            </label>
            <input
              type="text"
              value={config.trailer.videoId}
              onChange={(e) =>
                setConfig({
                  ...config,
                  trailer: { ...config.trailer, videoId: e.target.value }
                })
              }
              className="w-full px-4 py-2 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none"
              placeholder="zTLjtnlbFjU"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Trailer Title
            </label>
            <input
              type="text"
              value={config.trailer.title}
              onChange={(e) =>
                setConfig({
                  ...config,
                  trailer: { ...config.trailer, title: e.target.value }
                })
              }
              className="w-full px-4 py-2 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none"
              placeholder="Athian Games Showreel"
            />
          </div>

          {config.trailer.videoId && (
            <div className="mt-4">
              <p className="text-sm font-medium mb-2">Preview:</p>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${config.trailer.videoId}/maxresdefault.jpg`}
                  alt="Trailer preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex items-center gap-4">
        <Button
          onClick={saveConfig}
          disabled={saving}
          size="lg"
          className="flex items-center gap-2"
        >
          <Save className="w-5 h-5" />
          {saving ? "Saving..." : "Save Configuration"}
        </Button>

        {message && (
          <p
            className={`text-sm ${
              message.startsWith("Error") ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
