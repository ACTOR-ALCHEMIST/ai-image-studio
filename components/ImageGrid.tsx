"use client";

type ImageGridProps = {
  images: { url: string; alt?: string }[];
  columns?: number;
};

export default function ImageGrid({ images, columns = 4 }: ImageGridProps) {
  // 计算补齐空白格
  const rows = Math.ceil(images.length / columns);
  const totalCells = rows * columns;
  const blanks = totalCells - images.length;

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${columns} gap-4`}>
      {images.map((img, i) => (
        <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img.url} alt={img.alt || ""} className="object-cover w-full h-full" />
        </div>
      ))}
      {/* 补齐空白格 */}
      {Array.from({ length: blanks }).map((_, i) => (
        <div key={`blank-${i}`} className="aspect-square bg-transparent" />
      ))}
    </div>
  );
}
