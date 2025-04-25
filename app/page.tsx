"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import ImageGrid from "@/components/ImageGrid";
import PromptInput from "@/components/PromptInput";

const initialImages = [
  { url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", alt: "Sample 1" },
  { url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", alt: "Sample 2" },
  { url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", alt: "Sample 3" },
  { url: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=400&q=80", alt: "Sample 4" },
];

export default function PlaygroundImages() {
  const [collapsed, setCollapsed] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [images, setImages] = useState(initialImages);

  // 新增：已上传图片列表
  const [imagesList, setImagesList] = useState<{ url: string; name: string }[]>([]);

  // 模拟发送prompt
  const handleSend = () => {
    if (prompt.trim()) {
      setImages([
        { url: `https://source.unsplash.com/400x400/?${encodeURIComponent(prompt)}`, alt: prompt },
        ...images,
      ]);
      setPrompt("");
      setImagesList([]); // 发送后清空上传图片
    }
  };

  // 上传图片
  const handleUpload = (file: File) => {
    const url = URL.createObjectURL(file);
    setImagesList((prev) => [...prev, { url, name: file.name }]);
  };

  // 删除已上传图片
  const handleRemoveImage = (idx: number) => {
    setImagesList((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} />
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 flex flex-col relative overflow-y-auto px-2 md:px-8 pt-4 pb-32">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Images</h2>
            <div className="flex gap-2">
              <button className="text-gray-400 hover:text-gray-700" title="Clear">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l8 8M6 14L14 6" />
                </svg>
              </button>
              <button className="text-gray-400 hover:text-gray-700" title="History">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="10" cy="10" r="8" />
                  <path d="M10 6v4l2 2" />
                </svg>
              </button>
            </div>
          </div>
          <ImageGrid images={images} columns={4} />
        </main>
        <PromptInput
          value={prompt}
          onChange={setPrompt}
          onSend={handleSend}
          onUpload={handleUpload}
          images={imagesList}
          onRemoveImage={handleRemoveImage}
        />
      </div>
    </div>
  );
}
