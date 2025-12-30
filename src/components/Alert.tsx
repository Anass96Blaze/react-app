import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onColseClick: () => void;
}

const Alert = ({ children, onColseClick }: Props) => {
  return (
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onColseClick}
      ></button>
    </div>
  );
};

export default Alert;
