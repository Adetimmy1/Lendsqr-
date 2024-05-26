import ActionColumn from "@/actions/ActionColumn";

export const columns = [
  {
    title: "Department",
    width: 100,
    dataIndex: "department",
    key: "name",
  },
  {
    title: "Username",
    width: 100,
    dataIndex: "username",
    key: "age",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "1",
    width: 150,
  },
  {
    title: "Phone Number",
    dataIndex: "phone",
    key: "2",
    width: 100,
  },
  {
    title: "Date Joined",
    dataIndex: "birthDate",
    key: "3",
    width: 100,
  },
  {
    title: "Status",
    dataIndex: "bloodGroup",
    key: "4",
    render: (text) => <p className={`${text == "pending"? "text-pending bg-pending/25":text == "inactive"? "text-inactive bg-inactive/25": text == "active"? "text-active bg-active/25" : "text-blacklist bg-blacklist/25"} px-3 py-2 rounded-3xl capitalize`}>{text}</p>,
    width: 100,
  },
  {
    title: "",
    key: "operation",
    width: 30,
    render: (record) => <ActionColumn key={record.key} recordKey={record.key}/>    
  },
];
