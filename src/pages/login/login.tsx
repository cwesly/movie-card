import { useState } from "react";
import Input from "../../components/input";
import { InputType } from "../../types";
import Button from "../../components/button";
import IconNetflix from "../../components/iconNetflex";

const Login = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  return (
    <div className="@apply flex justify-center bg-black/50 h-screen items-center relative">
      <img
        className="@apply h-full w-full absolute z-[-1]"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/f2e98033-57b5-4cf9-993d-ee774904fc5e/CA-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg"
      />
      <IconNetflix size="h-10" className="absolute top-7 left-8 " />
      <form className="@apply flex flex-col justify-center bg-black/75 px-16 pb-32 rounded-3.5 pt-14 gap-4 w-[28.125rem] text-white">
        <h1 className="@apply text-[white] font-semibold text-[1.9375rem] pb-2">
          Sing In
        </h1>
        <Input
          setValue={setInputEmail}
          value={inputEmail}
          typeInput={InputType.Email}
          placeholder="Email or phone number"
        />
        <Input
          setValue={setInputPassword}
          value={inputPassword}
          typeInput={InputType.Password}
          placeholder="Password"
        />
        <Button color="bg-[#e50914]" handleSubmit={() => alert("oi")}>
          Sing In
        </Button>
        <div className="flex justify-center">
          <a
            className=" text-white hover:text-zinc-400 hover:underline"
            href="https://www.netflix.com/ca/LoginHelp"
          >
            Forgot password?
          </a>
        </div>
        <div className="flex gap-3">
          <input type="checkbox" />
          <p>Remember me</p>
        </div>
        <p className="text-gray-300/80">
          New to Netflix?
          <a
            href="https://www.netflix.com/ca/"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            {" "}
            Sign up now.
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
