import React, { ChangeEvent, useState } from "react";
import AdminSideBar from "../../components/AdminSideBar";

const NewProduct = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [stock, setStock] = useState<number>();
  const [photo, setPhoto] = useState<string>();

  const changeImgHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPhoto(reader.result as string);
      };
    }
  };

  return (
    <div className="admin-container">
      <AdminSideBar />
      <main className="product-management">
        <article>
          <form method="post">
            <h2>New Product</h2>
            <div>
              <label htmlFor="">Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="">Price</label>
              <input
                type="number"
                required
                value={price}
                onChange={(e) => setPrice(+e.target.value)}
                placeholder="Price"
              />
            </div>
            <div>
              <label htmlFor="">Stock</label>
              <input
                type="number"
                required
                value={stock}
                onChange={(e) => setStock(+e.target.value)}
                placeholder="Stock"
              />
            </div>
            <div>
              <label htmlFor="">Photo</label>
              <input type="file" required onChange={changeImgHandler} />
            </div>

            {photo && <img src={photo} alt="New Photo" />}
            <button type="submit">Create</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default NewProduct;
