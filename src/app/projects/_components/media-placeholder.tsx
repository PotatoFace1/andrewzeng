import Image from "next/image";

type MediaPlaceholderProps = {
  /** Optional image until real media is added */
  src?: string;
  alt?: string;
  className?: string;
  /** "hero" = large project top; "card" = small thumbnail */
  variant?: "hero" | "card";
};

export default function MediaPlaceholder({
  src,
  alt = "Project media",
  className = "",
  variant = "hero",
}: MediaPlaceholderProps) {
  const isCard = variant === "card";

  if (src) {
    return (
      <div
        className={`relative overflow-hidden rounded-md border border-zinc-800/80 bg-zinc-950 ${isCard ? "aspect-[4/3]" : "aspect-video"} ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={isCard ? "(max-width:768px) 100vw, 33vw" : "(max-width:768px) 100vw, 80vw"}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center rounded-md border border-dashed border-zinc-700/80 bg-zinc-950/50 text-center ${isCard ? "aspect-[4/3] min-h-[140px]" : "aspect-video min-h-[200px]"} ${className}`}
    >
      <span className="label text-zinc-600">Media</span>
      <p className="mt-2 max-w-[14rem] px-4 text-xs leading-snug text-zinc-500">
        Image, GIF, or video — add files to <code className="text-zinc-600">/public</code>{" "}
        and wire the path here.
      </p>
    </div>
  );
}
