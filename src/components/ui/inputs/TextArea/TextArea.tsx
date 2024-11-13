interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  id?: string;
}

export const TextArea = ({ onChange, name, id, ...props }: TextAreaProps) => {
  return (
    <>
      <textarea
        {...{
          name,
          id,
          onChange,
          ...props,
        }}
        className="bg-transparent outline-none border-b border-black border-solid"
      />
    </>
  );
};
