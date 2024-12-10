interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id?: string;
  type?: "text" | "email" | "password" | "search";
}

export const Input = ({
  onChange,
  name,
  id,
  type = "text",
  ...props
}: InputProps) => {
  return (
    <>
      <input
        {...{
          name,
          id,
          onChange,
          type,
          ...props,
        }}
        className=" bg-transparent border-b border-[#191919] dark:border-[#f6f6f6] border-solid min-h-10 outline-none"
      />
    </>
  );
};
