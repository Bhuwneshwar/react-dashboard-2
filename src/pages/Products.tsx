import React, { ReactElement, useCallback, useState } from "react";
import AdminSideBar from "../components/AdminSideBar";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  { Header: "Photo", accessor: "photo" },
  { Header: "Name", accessor: "name" },
  { Header: "Price", accessor: "price" },
  { Header: "Stock", accessor: "stock" },
  { Header: "Action", accessor: "action" },
];

const arr: DataType[] = [
  {
    photo: (
      <img
        src="https://th.bing.com/th/id/R.d517ca7838e27df01decc9d70f292071?rik=bI4yhKuy7dDAyg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fshoes-png-sneaker-png-transparent-image-2500.png&ehk=kyWee4brz%2frLtbcCcpd%2flVSuWY6gQv%2b7nouzn%2f%2fsues%3d&risl=&pid=ImgRaw&r=0"
        alt="product 1"
      />
    ),
    name: "Product 1",
    price: 659,
    stock: 10,
    action: <Link to="/admin/product/1">Manage</Link>,
  },

  {
    photo: (
      <img
        src="https://th.bing.com/th/id/R.588c91bfba1ed32b8b0ae41dc7fb7c4d?rik=2cAi1QHrzWsBpQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fshoes-png--1200.png&ehk=LDK2zKZ4gGD3lYE7ncWJOb8tGdJLrU046BiOz1wqbAQ%3d&risl=&pid=ImgRaw&r=0"
        alt="product 2"
      />
    ),
    name: "Product 2",
    price: 659,
    stock: 10,
    action: <Link to="/admin/product/2">Manage</Link>,
  },
  {
    photo: (
      <img
        src="https://th.bing.com/th/id/R.d517ca7838e27df01decc9d70f292071?rik=bI4yhKuy7dDAyg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fshoes-png-sneaker-png-transparent-image-2500.png&ehk=kyWee4brz%2frLtbcCcpd%2flVSuWY6gQv%2b7nouzn%2f%2fsues%3d&risl=&pid=ImgRaw&r=0"
        alt="product 1"
      />
    ),
    name: "Product 1",
    price: 659,
    stock: 10,
    action: <Link to="/admin/product/1">Manage</Link>,
  },
  {
    photo: (
      <img
        src="https://th.bing.com/th/id/R.588c91bfba1ed32b8b0ae41dc7fb7c4d?rik=2cAi1QHrzWsBpQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fshoes-png--1200.png&ehk=LDK2zKZ4gGD3lYE7ncWJOb8tGdJLrU046BiOz1wqbAQ%3d&risl=&pid=ImgRaw&r=0"
        alt="product 2"
      />
    ),
    name: "Product 2",
    price: 659,
    stock: 10,
    action: <Link to="/admin/product/2">Manage</Link>,
  },
  {
    photo: (
      <img
        src="https://th.bing.com/th/id/R.d517ca7838e27df01decc9d70f292071?rik=bI4yhKuy7dDAyg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fshoes-png-sneaker-png-transparent-image-2500.png&ehk=kyWee4brz%2frLtbcCcpd%2flVSuWY6gQv%2b7nouzn%2f%2fsues%3d&risl=&pid=ImgRaw&r=0"
        alt="product 1"
      />
    ),
    name: "Product 1",
    price: 659,
    stock: 10,
    action: <Link to="/admin/product/1">Manage</Link>,
  },
  {
    photo: (
      <img
        src="https://th.bing.com/th/id/R.588c91bfba1ed32b8b0ae41dc7fb7c4d?rik=2cAi1QHrzWsBpQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fshoes-png--1200.png&ehk=LDK2zKZ4gGD3lYE7ncWJOb8tGdJLrU046BiOz1wqbAQ%3d&risl=&pid=ImgRaw&r=0"
        alt="product 2"
      />
    ),
    name: "Product 2",
    price: 659,
    stock: 10,
    action: <Link to="/admin/product/2">Manage</Link>,
  },
  {
    photo: (
      <img
        src="https://th.bing.com/th/id/R.d517ca7838e27df01decc9d70f292071?rik=bI4yhKuy7dDAyg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fshoes-png-sneaker-png-transparent-image-2500.png&ehk=kyWee4brz%2frLtbcCcpd%2flVSuWY6gQv%2b7nouzn%2f%2fsues%3d&risl=&pid=ImgRaw&r=0"
        alt="product 1"
      />
    ),
    name: "Product 1",
    price: 659,
    stock: 10,
    action: <Link to="/admin/product/1">Manage</Link>,
  },
  {
    photo: (
      <img
        src="https://th.bing.com/th/id/R.588c91bfba1ed32b8b0ae41dc7fb7c4d?rik=2cAi1QHrzWsBpQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fshoes-png--1200.png&ehk=LDK2zKZ4gGD3lYE7ncWJOb8tGdJLrU046BiOz1wqbAQ%3d&risl=&pid=ImgRaw&r=0"
        alt="product 2"
      />
    ),
    name: "Product 2",
    price: 659,
    stock: 10,
    action: <Link to="/admin/product/2">Manage</Link>,
  },
  {
    photo: (
      <img
        src="https://th.bing.com/th/id/R.d517ca7838e27df01decc9d70f292071?rik=bI4yhKuy7dDAyg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fshoes-png-sneaker-png-transparent-image-2500.png&ehk=kyWee4brz%2frLtbcCcpd%2flVSuWY6gQv%2b7nouzn%2f%2fsues%3d&risl=&pid=ImgRaw&r=0"
        alt="product 1"
      />
    ),
    name: "Product 1",
    price: 659,
    stock: 10,
    action: <Link to="/admin/product/1">Manage</Link>,
  },
  {
    photo: (
      <img
        src="https://th.bing.com/th/id/R.588c91bfba1ed32b8b0ae41dc7fb7c4d?rik=2cAi1QHrzWsBpQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fshoes-png--1200.png&ehk=LDK2zKZ4gGD3lYE7ncWJOb8tGdJLrU046BiOz1wqbAQ%3d&risl=&pid=ImgRaw&r=0"
        alt="product 2"
      />
    ),
    name: "Product 2",
    price: 659,
    stock: 10,
    action: <Link to="/admin/product/2">Manage</Link>,
  },
];

const Products = () => {
  const [data, setData] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC<DataType>(columns, data, "dashboard-product-box", "Product", true),
    []
  );

  return (
    <div className="admin-container">
      <AdminSideBar />
      <main>{Table()}</main>
      <Link to="/admin/product/new" className="create-product-btn">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Products;
