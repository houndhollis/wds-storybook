interface TagButtonProps {
  children: string;
  isChecked: boolean;
  onClick: () => void;
}

export default function TagButton({
  children,
  isChecked,
  onClick,
}: TagButtonProps) {
  const buttonsStyle = isChecked
    ? "bg-white text-primary"
    : "text-white bg-dark-opacity";

  return (
    <button
      className={`px-[10px] h-[33px] text-sm font-medium rounded-[18px] border border-white ${buttonsStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
