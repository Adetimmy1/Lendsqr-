import { ImSpinner8 } from "react-icons/im";

export default async function Loading() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <ImSpinner8 color="blue" size={32} className=" animate-spin"/>
    </div>
  )
}

