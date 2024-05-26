import Image from "next/image";
import { MdArrowDropDown } from "react-icons/md";

async function Profile() {
  const profileAPI = await (await fetch("https://dummyjson.com/users")).json();
  const rand = Math.floor(Math.random() * profileAPI.users.length + 1);
  const user = profileAPI.users[rand];
  if (user !== "undefined") {
    const { firstName, image } = user;

    return (
      <div className="flex justify-center items-center">
        <div className="aspect-square h-12 w-12 overflow-hidden rounded-full p-1.5 border">
          <Image
            src={image}
            alt={firstName}
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <small className="capitalize text-semi font-semibold mx-2 flex items-center gap-2">
          {firstName}
          <MdArrowDropDown size={20} className="cursor-pointer" />
        </small>
      </div>
    );
  }
}

export default Profile;
