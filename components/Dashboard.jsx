import { user } from "@/db/content";
import Card from "./card";
import { Suspense } from "react";
import DataTable from "./dataTable";

export const Dashboard = () => {
  return (
    <>
      <h2 className="text-bold text-2xl font-semibold">Users</h2>
      <div className="flex justify-between w-full items-center">
        {user.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            analytics={item.analytics}
            title={item.title}
          />
        ))}
      </div>
      <Suspense fallback={"loading"}>
        <DataTable />
      </Suspense>
    </>
  );
};
