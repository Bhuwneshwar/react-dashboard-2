import React, { ReactElement, useCallback, useState } from "react";
import AdminSideBar from "../components/AdminSideBar";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

interface DataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  { Header: "Avatar", accessor: "avatar" },
  { Header: "Name", accessor: "name" },
  { Header: "Email", accessor: "email" },
  { Header: "Gender", accessor: "gender" },
  { Header: "Role", accessor: "role" },
  { Header: "Action", accessor: "action" },
];
const arr: DataType[] = [
  {
    avatar: (
      <img
        style={{ borderRadius: "50%" }}
        src="https://2.bp.blogspot.com/-WRzqJhit7W8/W7W7p8g0ONI/AAAAAAAABhk/8qO2SpDEaysH1W1HajmEZsKC2afdRCiyQCLcBGAs/s1600/IMG_20180925_223020_305.jpg"
        alt="avatar"
      />
    ),
    name: "Customer 1",
    email: "Customer 1",
    gender: "Female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        style={{ borderRadius: "50%" }}
        src="https://wallpapercave.com/wp/wp6805206.jpg"
        alt="avatar"
      />
    ),
    name: "Customer 2",
    email: "Customer 2",
    gender: "Male",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];
const Customers = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Customers",
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

export default Customers;
