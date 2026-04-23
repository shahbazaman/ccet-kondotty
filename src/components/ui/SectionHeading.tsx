interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({ badge, title, subtitle, center = true, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-block bg-accent/10 text-accent font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-4 ${light ? "text-white" : "text-primary"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${center ? "mx-auto" : ""} ${light ? "text-blue-200" : "text-gray-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}