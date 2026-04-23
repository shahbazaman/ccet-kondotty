interface BadgeProps {
  text: string;
  variant?: "primary" | "accent" | "green" | "gray";
}

const variants = {
  primary: "bg-blue-100 text-primary",
  accent: "bg-amber-100 text-amber-700",
  green: "bg-green-100 text-green-700",
  gray: "bg-gray-100 text-gray-600",
};

export default function Badge({ text, variant = "primary" }: BadgeProps) {
  return (
    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest ${variants[variant]}`}>
      {text}
    </span>
  );
}