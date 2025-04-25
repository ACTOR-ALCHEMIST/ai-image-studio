"use client";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function PromptInput({
  value,
  onChange,
  onSend,
  onUpload,
  images = [],
  onRemoveImage,
}: {
  value: string;
  onChange: (v: string) => void;
  onSend: () => void;
  onUpload: (file: File) => void;
  images?: { url: string; name: string }[];
  onRemoveImage?: (idx: number) => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center z-30 pointer-events-none">
      <div className="w-full max-w-2xl m-4 pointer-events-auto">
        <div className="bg-white rounded-2xl shadow-lg border flex items-center px-4 py-2 gap-2 min-h-[56px]">
          {/* 上传图片按钮 */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Upload image"
            onClick={() => fileRef.current?.click()}
            className="shrink-0"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16.5 17.5v-2a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={e => {
              if (e.target.files && e.target.files[0]) onUpload(e.target.files[0]);
              e.target.value = "";
            }}
          />
          {/* 图片缩略图 */}
          {images && images.length > 0 && (
            <div className="flex gap-2 items-center">
              {images.map((img, idx) => (
                <div key={idx} className="relative w-10 h-10 rounded overflow-hidden border bg-gray-100 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.url} alt={img.name} className="object-cover w-full h-full" />
                  {onRemoveImage && (
                    <button
                      type="button"
                      className="absolute -top-1 -right-1 bg-white rounded-full border border-gray-300 w-5 h-5 flex items-center justify-center text-xs text-gray-500 hover:text-red-500"
                      onClick={() => onRemoveImage(idx)}
                      tabIndex={-1}
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
          {/* prompt 输入框 */}
          <Input
            className="flex-1 border-none focus:ring-0 focus:outline-none bg-transparent min-h-[40px]"
            style={{ minWidth: 0 }}
            placeholder="Describe what you want to see..."
            value={value}
            onChange={e => onChange(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                onSend();
              }
            }}
          />
          {/* 其他参数按钮（占位） */}
          <Button variant="ghost" size="icon" aria-label="Settings" className="shrink-0">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="10" cy="10" r="8" />
              <path d="M10 6v4l2 2" />
            </svg>
          </Button>
          <Button variant="ghost" size="icon" aria-label="Count" className="shrink-0">
            <span className="font-bold text-gray-500">1x</span>
          </Button>
          {/* 发送按钮 */}
          <Button
            size="icon"
            className="bg-emerald-400 hover:bg-emerald-500 text-white rounded-full shadow"
            aria-label="Send"
            onClick={onSend}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 18l14-7-14-7v6l10 1-10 1z" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
