import React, { ChangeEvent, FormEvent, useState } from "react";
import AdminSideBar from "../../components/AdminSideBar";

const img =
  "https://th.bing.com/th/id/R.d517ca7838e27df01decc9d70f292071?rik=bI4yhKuy7dDAyg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fshoes-png-sneaker-png-transparent-image-2500.png&ehk=kyWee4brz%2frLtbcCcpd%2flVSuWY6gQv%2b7nouzn%2f%2fsues%3d&risl=&pid=ImgRaw&r=0";
// "https://1.bp.blogspot.com/-5Mh3q1vFzbw/W2QKYT0IbDI/AAAAAAAAQfo/Jwrly7xzGFcKQp8gz7xwPAcu-G-jeO8VgCLcBGAs/s1600/indian-beautiful-girls-hd-photos-3.jpg";

const ProductManagement = () => {
  const [name, setName] = useState<string>("puma shoes");
  const [price, setPrice] = useState<number>(2999);
  const [stock, setStock] = useState<number>(10);
  const [photo, setPhoto] = useState<string>(img);

  const [nameUpdate, setNameUpdate] = useState<string>(name);
  const [priceUpdate, setPriceUpdate] = useState<number>(price);
  const [stockUpdate, setStockUpdate] = useState<number>(stock);
  const [photoUpdate, setPhotoUpdate] = useState<string>(photo);

  const changeImgHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPhotoUpdate(reader.result as string);
      };
    }
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(nameUpdate);
    setPrice(priceUpdate);
    setStock(stockUpdate);
    setPhoto(photoUpdate);
  };

  return (
    <div className="admin-container">
      <AdminSideBar />
      <main className="product-management">
        <section>
          <strong>ID - bhuwneshwar640</strong>
          <img src={photo} alt="product img" />
          <p>{name}</p>
          {stock > 0 ? (
            <span className="green">{stock} Available</span>
          ) : (
            <span className="red">Not Available</span>
          )}
          <h3>${price}</h3>
        </section>

        <article>
          <form method="post" onSubmit={submitHandler}>
            <h2>Manage </h2>
            <div>
              <label htmlFor="">Name</label>
              <input
                type="text"
                required
                value={nameUpdate}
                onChange={(e) => setNameUpdate(e.target.value)}
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="">Price</label>
              <input
                type="number"
                required
                value={priceUpdate}
                onChange={(e) => setPriceUpdate(+e.target.value)}
                placeholder="Price"
              />
            </div>
            <div>
              <label htmlFor="">Stock</label>
              <input
                type="number"
                required
                value={stockUpdate}
                onChange={(e) => setStockUpdate(+e.target.value)}
                placeholder="Stock"
              />
            </div>
            <div>
              <label htmlFor="">Photo</label>
              <input type="file" required onChange={changeImgHandler} />
            </div>

            {photoUpdate && <img src={photoUpdate} alt="New Photo" />}
            <button type="submit">Update</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default ProductManagement;
