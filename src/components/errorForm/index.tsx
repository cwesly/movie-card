import { VscError } from "react-icons/vsc";

type ErrorFormProp = {
  children: string;
};

function ErrorForm({ children }: ErrorFormProp) {
  return (
    <div className="text-red-600 flex items-center" > 
      <VscError/>
      <p>{children}</p>
    </div>
  );
}

export default ErrorForm;
