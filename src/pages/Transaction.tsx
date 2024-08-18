import React, { ReactElement, useCallback, useState } from "react";
import AdminSideBar from "../components/AdminSideBar";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  { Header: "User", accessor: "user" },
  { Header: "Amount", accessor: "amount" },
  { Header: "Discount", accessor: "discount" },
  { Header: "Quantity", accessor: "quantity" },
  { Header: "Status", accessor: "status" },
  { Header: "Action", accessor: "action" },
];

const arr: DataType[] = [
  {
    user: "User 1",
    amount: 100,
    discount: 10,
    quantity: 10,
    status: <span className="red">Processing</span>,
    action: <Link to={"/admin/transaction/1"}>Manage</Link>,
  },
  {
    user: "User 2",
    amount: 100,
    discount: 10,
    quantity: 10,
    status: <span className="green">Shipped</span>,
    action: <Link to={"/admin/transaction/2"}>Manage</Link>,
  },
  {
    user: "User 3",
    amount: 100,
    discount: 10,
    quantity: 10,
    status: <span className="puple">Delivered</span>,
    action: <Link to={"/admin/transaction/3"}>Manage</Link>,
  },
];
const Transaction = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Transaction",
      true
    ),
    []
  );

  return (
    <div className="admin-container">
      <AdminSideBar />
      <main>{Table()}</main>
    </div>
  );
};

export default Transaction;
