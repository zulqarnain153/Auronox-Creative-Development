import AuroraGlow from "@/components/AuroraGlow";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-32 overflow-hidden">
      <AuroraGlow className="w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] min-w-[360px] min-h-[360px] -top-1/4 -right-1/4" />
      <div className="relative z-10 max-w-content mx-auto px-6 sm:px-8 text-center">
        <div className="kicker flex justify-center">404</div>
        <h1 className="mt-5 font-display text-4xl sm:text-5xl leading-tight">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-6 text-ink-muted max-w-md mx-auto leading-relaxed">
          The page you&apos;re looking for may have been moved or never
          existed. Let&apos;s get you back on track.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="/">Back to home</Button>
        </div>
      </div>
    </section>
  );
}
