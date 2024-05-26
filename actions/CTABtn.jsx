import Image from "next/image";
import Eye from "@/public/view.svg";
import userCheck from "@/public/user-check.svg";
import userDel from "@/public/delete-friend.svg";
import Link from "next/link";


export function CTA({ ctaAction, array, setShow }) {
    const handleBlacklistUser = () => {
      setShow(false)
      const status = array[ctaAction - 1];
      if (status === "active" || status === "inactive") {
        array[ctaAction - 1] = "blacklisted";
      }
    };
  
    const handleActivateUser = () => {
      setShow(false)
      const status = array[ctaAction - 1];
      if (status === "inactive" || status === "blacklisted") {
        array[ctaAction - 1] = "active";
      }
    };
  
    return (
      <div className="z-50 w-[400px] h-[70] cta absolute shadow-md rounded-sm">
        <Link
          href={`?user=${ctaAction}`}
          replace
          className="cursor-pointer flex justify-center gap-3 items-center capitalize text-regular"
        >
          <Image src={Eye} alt="eye" />
          <small>view details</small>
        </Link>
        <p
          onClick={handleBlacklistUser}
          className="cursor-pointer flex justify-center gap-3 items-center capitalize text-regular"
        >
          <Image src={userDel} alt="eye" />
          <small>blacklist user</small>
        </p>
        <p
          onClick={handleActivateUser}
          className=" cursor-pointer flex justify-center gap-3 items-center capitalize text-regular"
        >
          <Image src={userCheck} alt="eye" />
          <small>activate user</small>
        </p>
      </div>
    );
  }