"use client";

interface BurgerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  status: string;
}

export const BurgerButton = ({
  onClick,
  status,
  ...props
}: BurgerButtonProps) => {
  if (status === "closed") {
    return (
      <div className="lg:hidden relative flex cursor-pointer items-center gap-4 px-4 py-2 text-[#191919] dark:text-[#e4e8ed] z-100000">
        <span className="flex h-2 w-2 items-center justify-center rounded-[20rem] bg-[#2ed84a]"></span>
        <button onClick={onClick} {...props}>
          Menu
        </button>

        <svg
          className="absolute top-0 left-0"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0.5" y1="0.5" x2="0.499999" y2="20.5" stroke="#666666" />
          <line x1="21" y1="1" x2="1" y2="1" stroke="#666666" />
        </svg>

        <svg
          className="absolute bottom-0 right-0"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="20.5"
            y1="20"
            x2="20.5"
            y2="-6.55671e-08"
            stroke="#666666"
          />
          <line x1="4.37114e-08" y1="19.5" x2="20" y2="19.5" stroke="#666666" />
        </svg>
      </div>
    );
  }
  if (status === "open") {
    return (
      <div className="md:hidden relative flex cursor-pointer items-center gap-4 px-4 py-2 text-[#191919] dark:text-[#e4e8ed] z-100000">
        <span className="flex h-2 w-2 items-center justify-center rounded-[20rem] bg-[#d82e2e]"></span>
        <button onClick={onClick} {...props}>
          Close
        </button>
        <svg
          className="absolute top-0 left-0"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0.5" y1="0.5" x2="0.499999" y2="20.5" stroke="#666666" />
          <line x1="21" y1="1" x2="1" y2="1" stroke="#666666" />
        </svg>

        <svg
          className="absolute bottom-0 right-0"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="20.5"
            y1="20"
            x2="20.5"
            y2="-6.55671e-08"
            stroke="#666666"
          />
          <line x1="4.37114e-08" y1="19.5" x2="20" y2="19.5" stroke="#666666" />
        </svg>
      </div>
    );
  }
};
