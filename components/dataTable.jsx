"use client";
import React from "react";
import { Table } from "antd";
import { columns } from "./tableColumn";
import useSWR from "swr";
import { fetchData } from "@/actions/useSwrAction";
import ActionColumn from "@/actions/ActionColumn";
import { useStateContext } from "@/hook/StateContext";

const DataTable = () => {
  const { data, isLoading } = useSWR("https://dummyjson.com/users", fetchData);
  const [currentKey, setCurrentKey] = React.useState(null);
  const {arr} = useStateContext()
  
  const handleRowClick = (key) => {
    setCurrentKey((prevKey) => (prevKey === key ? null : key));
  };

  const updatedColumns = columns.map((column) => {
    if (column.key === "operation") {
      return {
        ...column,
        render: (record) => (
          <ActionColumn
            key={record.key}
            recordKey={record}
            currentKey={currentKey}
            handleRowClick={() => handleRowClick(record.key)}
          />
        ),
      };
    }
    return column;
  });

  const datas = [];
  data?.users?.map((value, index) => {
    const { username, email, birthDate, phone, company } = value;
    const statusIndex = index % arr.length; // Get the index of the status for this user

    datas.push({
      key: index,
      username,
      email,
      birthDate,
      phone,
      department: company.department,
      bloodGroup: arr[statusIndex], // Assign the status to bloodGroup
    });
  });

  return (
    <div className="mt-8">
      <Table
        columns={updatedColumns}
        dataSource={datas}
        loading={isLoading}
        bordered
        scroll={{
          x: 1500,
          y: 300,
        }}
      />
    </div>
  );
};

export default DataTable;
