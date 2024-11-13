import { cloneElement, ReactElement } from "react";

interface FieldProps {
  children: ReactElement;
  label: string;
  id: string;
  labelHidden?: boolean;
}

export const Field = ({ children, label, id, labelHidden = false }: FieldProps) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id} hidden={labelHidden} className="Field__label">
        {label}
      </label>
      {cloneElement(children, {
        id,
      })}
    </div>
  );
};
