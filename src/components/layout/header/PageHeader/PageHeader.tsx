interface PaheHeaderProps {
  label: string;
}

export const PageHeader = ({ label }: PaheHeaderProps) => {
  return (
    <header className="p-4">
      <h1 className="text-clampHeader px-4 italic w-fit h-fit">{label}</h1>
    </header>
  );
};
