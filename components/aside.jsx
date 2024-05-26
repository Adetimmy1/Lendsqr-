import { business, customers, setting } from "@/db/content";
import Image from "next/image";
import brief from "@/public/briefcase 1.svg";
import dashboard from "@/public/dashboard.svg";
import { MdArrowDropDown } from "react-icons/md";

export function Aside() {
  return (
    <>
      <ul>
        <li className="flex gap-2 items-center px-8 py-2 text-bold mt-4">
          <Image src={brief} alt="icon" className="w-4" />
          Switch Organization <MdArrowDropDown size={20} />
        </li>
        <li className="flex gap-2 items-center px-8 py-2 opacity-70 text-bold my-4">
          <Image src={dashboard} alt="icon" className="w-4" />
          Dashboard
        </li>
      </ul>

      <small className="px-8 mt-3 font-semibold text-bold">CUSTOMERS</small>
      {customers.map((value, index) => {
        return (
          <ul key={index} className="font-work">
            <li
              className={`flex px-8 relative py-2 item-center gap-2 capitalize cursor-pointer  text-bold ${
                value.title.includes("karma") ? "mb-4" : ""
              } ${
                index == 0
                  ? "opacity-[1] bg-teal-300/15 after:contents-[''] after:absolute after:w-1 after:h-full after:bg-teal-500 after:top-0 after:left-0"
                  : "hover:bg-teal-300/15 opacity-70"
              }`}
            >
              <Image src={value.icon} alt="icon" className="w-4" />
              {value.title}
            </li>
          </ul>
        );
      })}

      <small className="px-8 mt-3 text-bold font-semibold">BUSINESSESS</small>
      {business.map((value, index) => {
        return (
          <ul key={index} className="font-work">
            <li
              className={`flex item-center px-8 py-2 opacity-70 gap-2 capitalize cursor-pointer hover:bg-teal-300/15 text-bold ${
                index == business.length - 1 ? "mb-4" : ""
              }`}
            >
              <Image src={value.icon} alt="icon" className="w-4" />
              {value.title}
            </li>
          </ul>
        );
      })}

      <small className="px-8 text-bold font-semibold">SETTINGS</small>
      {setting.map((value, index) => {
        return (
          <ul key={index} className="font-work">
            <li
              className={`flex item-center px-8 py-2 opacity-70 gap-2 capitalize cursor-pointer hover:bg-teal-300/15 text-bold `}
            >
              <Image src={value.icon} alt="icon" className="w-4" />
              {value.title}
            </li>
          </ul>
        );
      })}
    </>
  );
}
