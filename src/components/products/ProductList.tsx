import React, { useEffect, useState } from "react";

type Products = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    image: string;
  };
};

export default function ProductList() {
  const [products, setProducts] = useState<Products[]>([]);
  const [filters, setFilters] = useState<Products[]>(products);
  const [value, setValue] = useState("");
  const url = "https://api.escuelajs.co/api/v1/products";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => error);
  }, []);
  useEffect(() => {
    const results = products.filter((product) =>
      product.title.toLocaleLowerCase().includes(value)
    );
    setFilters(results);
  }, [value, products]);
  const onChangehandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <h1>ProductList</h1>
      <input
        type="text"
        placeholder="find your product"
        onChange={onChangehandler}
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr " }}>
        {filters.map((product) => {
          return (
            <div key={product.id}>
              <p>{product.title}</p>
              <p>{product.price}</p>
              <img src={product.category.image} style={{ width: "200px" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
