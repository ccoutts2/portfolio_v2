interface PaheHeaderProps {
  label: string;
}

export const PageHeader = ({ label }: PaheHeaderProps) => {
  return (
    <header className="p-4">
      <h1 className="text-[5rem] md:text-[10rem]">{label}</h1>
    </header>
  );
};
