interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick, ...props }: ButtonProps) => {
  return (
    <button
      className="flex items-center gap-2 border border-solid px-[12px] bg-[#F4F4F4] justify-center py-[6px] w-full md:max-w-fit rounded-[30px] text-sm cursor-pointer"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
