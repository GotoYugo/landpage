interface HeroProps {
  title: string;
  subtitle: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="min-h-[60vh] flex items-center">
      <div className="w-full max-w-[1280px] mx-auto px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-semibold tracking-tight mb-6">{title}</h1>
          <p className="text-lg text-gray-400 leading-relaxed">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}