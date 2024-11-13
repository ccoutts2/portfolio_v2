interface BurgerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  status: string;
}

export const BurgerButton = ({ onClick, status, ...props }: BurgerButtonProps) => {
  if (status === "closed") {
    return (
      <div className="md:hidden flex cursor-pointer items-center gap-4 rounded-[20rem] bg-[#191919] px-4 py-2 text-[#e4e8ed]">
        <button onClick={onClick} {...props}>
          Menu
        </button>
        <span className="flex h-[0.5rem] w-[0.5rem] items-center justify-center rounded-[20rem] bg-[#2ed84a]"></span>
      </div>
    );
  }
  if (status === "open") {
    return (
      <div className="md:hidden flex cursor-pointer items-center gap-4 rounded-[20rem] bg-[#191919] px-4 py-2 text-[#e4e8ed]">
        <button onClick={onClick} {...props}>
          Close
        </button>
        <span className="flex h-[0.5rem] w-[0.5rem] items-center justify-center rounded-[20rem]  bg-[#d82e2e]"></span>
      </div>
    );
  }
};
