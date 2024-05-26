import React from "react";
import { AuthenticateUser } from "./Authentication";
import { handleChange } from "@/actions/loginFormHandle";
import { useStateContext } from "@/hook/StateContext";

const LoginForm = () => {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const [show, setShow] = React.useState(false);
  const [auth, setAuth] = React.useState(false);
  const [error, setError] = React.useState(false);
  const { setAuthentication } = useStateContext();

  const loginSubmit = (e) => {
    e.preventDefault();
    const isAuthenticated = AuthenticateUser(form);
    if (isAuthenticated) {
      setAuthentication(isAuthenticated);
      localStorage.setItem("Lend", isAuthenticated)
    } else {
      setError(!error);
    }
  };

  return (
    <form className="mt-8" onSubmit={(e) => loginSubmit(e)}>
      <input
        type="email"
        placeholder="Email"
        name="email"
        className="w-full my-3 px-2 py-3 outline rounded-md outline-[#545f7d7e] text-xs"
        required
        onChange={(e) => {
          handleChange(e, setForm, setAuth);
        }}
      />
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          placeholder="Password"
          name="password"
          minLength={8}
          className="w-full my-3 px-2 py-3 outline rounded-md outline-[#545f7d7e] text-xs"
          required
          onChange={(e) => handleChange(e, setForm)}
        />
        <small
          onClick={() => setShow(!show)}
          className="absolute right-6 uppercase text-teal-400 cursor-pointer bottom-6 font-semibold font-prompt text-xs"
        >
          {show ? "hide" : "show"}
        </small>
      </div>
      {error && (
        <small className="text-red-500 text-center w-full flex justify-center font-semibold">
          Incorrect Password
        </small>
      )}
      <p className="uppercase text-xs py-4 text-teal-400 font-medium font-prompt cursor-pointer">
        Forgot Password?
      </p>

      <button className="w-full py-2 bg-teal-500 rounded-md text-white font-prompt uppercase">
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
