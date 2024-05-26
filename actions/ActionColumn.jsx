import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useStateContext } from "@/hook/StateContext";
import { CTA } from "./CTABtn";


const ActionColumn = ({ recordKey, currentKey, handleRowClick }) => {
  const [show, setShow] = React.useState(currentKey === recordKey.key);
  const { arr } = useStateContext();
  React.useEffect(() => {
    setShow(currentKey === recordKey.key);
  }, [currentKey, recordKey.key]);

  return (
    <>
      <BiDotsVerticalRounded
        className="cursor-pointer"
        onClick={() => {
          handleRowClick(recordKey);
          setShow(!show);
        }}
      />
      {show && <CTA array={arr} ctaAction={recordKey.key + 1} setShow={setShow}/>}
    </>
  );
};

export default ActionColumn;
