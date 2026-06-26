"use client";
import { useState } from "react";
import { FiX, FiLoader, FiVideo, FiImage } from "react-icons/fi";

const CLOUD_NAME = "dcfdc10zg";
const UPLOAD_PRESET = "findMyCareer";

interface CloudinaryUploadProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
  accept?: string;
  resourceType?: "image" | "video" | "raw" | "auto";
}

export default function CloudinaryUpload({
  value,
  onChange,
  label = "Upload File",
  accept = "image/*,video/*",
  resourceType = "auto",
}: CloudinaryUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  // Modernized checks that support varied Cloudinary path structures
  const isVideo = (url: string) => {
    if (!url) return false;
    return url.includes("/video/upload/") || !!url.match(/\.(mp4|webm|ogg|mov|avi|mkv)$/i);
  };

  const isImage = (url: string) => {
    if (!url) return false;
    return url.includes("/image/upload/") || !!url.match(/\.(jpg|jpeg|png|webp|gif|svg)$/i);
  };

  const uploadFile = async (file: File) => {
    setUploading(true);
    try {
      let type = resourceType;
      if (type === "auto") {
        if (file.type.startsWith("video/")) type = "video";
        else if (file.type.startsWith("image/")) type = "image";
        else type = "raw";
      }

      const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${type}/upload`;

      const fd = new FormData();
      fd.append("file", file);
      fd.append("upload_preset", UPLOAD_PRESET);

      const res = await fetch(UPLOAD_URL, { method: "POST", body: fd });
      const data = await res.json();

      if (data.secure_url) {
        onChange(data.secure_url);
      } else {
        alert("Upload failed: " + (data.error?.message || "Unknown error"));
      }
    } catch {
      alert("Upload error. Check your Cloudinary settings.");
    } finally {
      setUploading(false);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) uploadFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) uploadFile(file);
  };

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700">{label}</label>
      )}

      {/* Preview Section */}
      {value && (
        <div className="relative inline-block">
          {isVideo(value) ? (
            <video
              src={value}
              controls
              className="w-48 max-h-30 rounded-xl border border-gray-200"
            />
          ) : isImage(value) ? (
            <img
              src={value}
              alt="Preview"
              className="w-24 h-24 rounded-xl object-cover border border-gray-200"
            />
          ) : (
            <div className="flex items-center gap-2 p-3 bg-blue-50 border border-blue-200 rounded-xl text-sm text-blue-700">
              📄 File uploaded
            </div>
          )}
          <button
            type="button"
            onClick={() => onChange("")}
            title="Remove uploaded file"
            aria-label="Remove uploaded file"
            className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600"
          >
            <FiX size={10} />
          </button>
        </div>
      )}

      {/* Upload Drop Zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-xl p-4 text-center transition-colors ${
          dragOver
            ? "border-primary bg-blue-50"
            : "border-gray-300 hover:border-primary/50"
        }`}
      >
        <input
          type="file"
          accept={accept}
          onChange={handleFileInput}
          disabled={uploading}
          title={label}
          aria-label={label}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
        />
        {uploading ? (
          <div className="flex flex-col items-center gap-2 py-2">
            <FiLoader size={20} className="text-primary animate-spin" />
            <p className="text-xs text-gray-500">Uploading to Cloudinary...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1 py-1">
            <div className="flex gap-2 text-gray-400">
              <FiImage size={18} />
              <FiVideo size={18} />
            </div>
            <p className="text-xs text-gray-500">
              {value ? "Click or drag to replace" : "Click or drag to upload image or video"}
            </p>
            <p className="text-xs text-gray-400">JPG, PNG, WEBP, MP4, MOV supported</p>
          </div>
        )}
      </div>

      {/* URL Fallback Input */}
      <div className="flex items-center gap-2">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400">or paste URL</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>
      <input
        type="url"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="https://..."
        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-primary/30 focus:outline-none"
      />
    </div>
  );
}