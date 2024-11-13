interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id?: string;
  placeholder: string;
  type?: "text" | "email" | "password" | "search";
}

export const Input = ({
  onChange,
  name,
  id,
  placeholder,
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
          placeholder,
          ...props,
        }}
      />
    </>
  );
};
