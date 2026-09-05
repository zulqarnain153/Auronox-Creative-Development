import Image from "next/image";

export default function BrowserFrame({
  src,
  alt,
  url,
  href,
  className = "",
}: {
  src: string;
  alt: string;
  url?: string;
  href?: string;
  className?: string;
}) {
  const frame = (
    <div
      className={`group/frame rounded-2xl overflow-hidden border border-line bg-surface transition-colors ${href ? "hover:border-aurora-violet/50" : ""} ${className}`}
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
        {href && (
          <div className="absolute inset-0 bg-void/0 group-hover/frame:bg-void/20 transition-colors flex items-center justify-center">
            <span className="opacity-0 group-hover/frame:opacity-100 transition-opacity text-sm font-semibold text-white bg-void/70 backdrop-blur-sm px-4 py-2 rounded-full">
              Visit live site ↗
            </span>
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {frame}
      </a>
    );
  }

  return frame;
}
