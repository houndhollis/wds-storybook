type PrimaryButtonTheme = "dark" | "light" | "social" | "text";

interface PrimaryButtonProps {
  theme: PrimaryButtonTheme;
  children: React.ReactNode;
  isDisabled: boolean;
  onClick: () => void;
}

const dark = "bg-primary text-white";
const light = "bg-white text-primary";
const social = "bg-social text-white";
const text = "bg-transparent text-white";
const disabled = "bg-mono100 text-mono200";

const color: Record<PrimaryButtonTheme, string> = {
  dark,
  light,
  social,
  text,
};

export default function PrimaryButton({
  theme,
  onClick,
  children,
  isDisabled,
}: PrimaryButtonProps) {
  return (
    <button
      className={`w-full h-[59px] rounded-[5px] ${
        isDisabled ? disabled : color[theme]
      }`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
