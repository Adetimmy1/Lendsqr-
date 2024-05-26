import Logo from "@/public/LendsqrL.svg";
import Lo from "@/public/Lendsqr.svg";
import Image from "next/image";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="h-screen w-full flex justify-between bg-slate-50 p-12 relative">
        <div className="flex-1 h-full w-1/2">
          <Image src={Logo} alt="logo" width={145} height={40} />
          <div className="flex items-center h-full w-1/2 pr-12">
            <Image src={Lo} alt="Pablo" className="w-full" />
          </div>
        </div>

        <div className="flex-1 h-full w-1/2 bg-white absolute right-0 top-0">
          <div className="flex justify-center px-12 h-full flex-col">
            <h3 className="text-3xl font-bold font-prompt text-bold">
              Welcome!
            </h3>
            <small className="text-sm mt-2 font-prompt text-regular">
              Enter details to login.
            </small>
            <LoginForm />
          </div>
        </div>
      </section>
    </main>
  );
}
