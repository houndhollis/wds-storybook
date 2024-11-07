interface ILabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

export default function Label({ children, htmlFor }: ILabelProps) {
  return <label htmlFor={htmlFor}>{children}</label>;
}
