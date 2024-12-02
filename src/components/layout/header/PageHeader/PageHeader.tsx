interface PaheHeaderProps {
  label: string;
}

export const PageHeader = ({ label }: PaheHeaderProps) => {
  return (
    <header className="p-4">
      <h1 className="text-clampHeader bg-[#ED1C24] p-2 text-[#f6f6f6] italic w-fit h-fit font-bold">
        {label}
      </h1>
    </header>
  );
};
