'use client';

import Link from "next/link";
import { useAuth } from "@/lib/auth-context";

export default function Home() {
  const { user } = useAuth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">AI Image Studio</h1>
        <p className="mb-6 text-gray-600">
          欢迎使用 AI Image Studio！这是一个基于 AI 的图片生成与管理平台。
        </p>
        {!user && (
          <div className="flex justify-center gap-4">
            <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              登录
            </Link>
            <Link href="/register" className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">
              注册
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
