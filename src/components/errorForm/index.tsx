import { CiCircleRemove } from "react-icons/ci";

type ErrorFormProp = {
  children: string;
};

function ErrorForm({ children }: ErrorFormProp) {
  return (
    <div className="text-red-600 flex items-center text-sm gap-2">
      <CiCircleRemove className="w-5 h-5 flex-shrink-0" />
      <p>{children}</p> 
    </div>
  );
}

export default ErrorForm;
