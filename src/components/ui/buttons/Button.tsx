interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: () => void;
}

export const Button = ({ label, onClick, ...props }: ButtonProps) => {
  return (
    <button className="" onClick={onClick} {...props}>
      {label}
    </button>
  );
};
