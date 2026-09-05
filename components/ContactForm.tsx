"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/Button";
import ContactIllustration from "@/components/ContactIllustration";
import Reveal from "@/components/Reveal";

const inputClasses =
  "w-full bg-surface border border-line rounded-lg px-4 py-3 text-ink placeholder:text-ink-muted focus:outline-none focus:border-aurora-violet transition-colors";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
    // TODO: replace with your real Web3Forms access key from web3forms.com
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="pt-36 pb-16">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <h1 className="font-display text-4xl sm:text-5xl leading-tight">
                Have a project in mind?
              </h1>
              <p className="mt-6 text-ink-muted leading-relaxed max-w-md">
                Tell us what you&apos;re building and what you&apos;re
                hoping to achieve — we&apos;ll take it from there.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <form onSubmit={handleSubmit} className="mt-12 space-y-6 max-w-md">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className={inputClasses}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={inputClasses}
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className={inputClasses}
                    placeholder="What are you building, who's it for, and what are you hoping to achieve?"
                  />
                </div>
                <Button type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send message"}
                </Button>
                {status === "success" && (
                  <p className="text-aurora-teal text-sm">
                    Thanks — we&apos;ll be in touch soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-aurora-rose text-sm">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </Reveal>
          </div>

          <Reveal delay={100} variant="scale">
            <div className="relative aspect-[3/2] rounded-2xl border border-line overflow-hidden bg-surface">
              <ContactIllustration />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
