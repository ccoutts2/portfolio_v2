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
        className="bg-transparent outline-none border-b border-[#191919] dark:border-[#f6f6f6] border-solid"
      />
    </>
  );
};
