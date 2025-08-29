interface ToastProps {
  children: React.ReactNode;
}

export const Toast = ({ children }: ToastProps) => {
  return (
    <div
      className="absolute bottom-0 right-0 flex w-fit max-w-xs items-center space-x-4 divide-x divide-gray-200 rounded-lg bg-[#c8c2cf] p-4 text-[#f3eee8] shadow-sm rtl:divide-x-reverse"
      role="alert"
    >
      {children}
    </div>
  );
};
