import Image from "next/image";

export default function BrowserFrame({
  src,
  alt,
  url,
  className = "",
}: {
  src: string;
  alt: string;
  url?: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl overflow-hidden border border-line bg-surface ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-void/60">
        <span className="w-2.5 h-2.5 rounded-full bg-ink-muted/30" />
        <span className="w-2.5 h-2.5 rounded-full bg-ink-muted/30" />
        <span className="w-2.5 h-2.5 rounded-full bg-ink-muted/30" />
        {url && (
          <div className="ml-3 flex-1 text-xs text-ink-muted bg-void/50 rounded-md px-3 py-1.5 truncate">
            {url}
          </div>
        )}
      </div>
      <div className="relative w-full aspect-[16/10]">
        <Image src={src} alt={alt} fill className="object-cover object-top" />
      </div>
    </div>
  );
}
