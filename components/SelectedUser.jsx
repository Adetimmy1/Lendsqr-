"server-only"
import { fetchData } from "@/actions/useSwrAction";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import useSWR from "swr";

const SelectedUser = () => {
  const search = useSearchParams();
  const id = search.get("user");
  const { data, isLoading } = useSWR(
    `https://dummyjson.com/users/${id}`,
    fetchData
  );
  // console.log(data)
  return (
    <div className="text-3xl">
      <Link href={"/Dashboard"} replace className="w-max">
        back {id}
      </Link>
    </div>
  );
};

export default SelectedUser;
