import Reveal from "./Reveal";

export function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`max-w-3xl ${alignment}`}>
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="font-display text-3xl font-semibold leading-[1.08] tracking-tightest text-white sm:text-4xl md:text-[2.85rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 text-base leading-relaxed text-[#9AA3B2] sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
