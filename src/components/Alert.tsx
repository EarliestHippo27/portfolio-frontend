import type { ReactNode } from "react";

interface AlertProps {
  children: ReactNode; // children in this case are usually a string or other elements
}

const Alert = ({ children }: AlertProps) => {
  return (
    <div className="alert alert-primary" role="alert">
      {children}
    </div>
  );
};

export default Alert;
