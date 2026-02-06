import CardList from "../components/CardList";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "flowbite-react";

export default function Products() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  async function getDataProducts() {
    const url = "https://api.escuelajs.co/api/v1/products";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      // isi state categoryProducts dengan data dari Api ( result )
      setProducts(result);
      // mengganti loading state jadi false untuk menghilangkan spiner
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  // memamnggil atau menjalan api pas baru di buka
  useEffect(() => {
    getDataProducts();
  }, []);

  if (loading == true) {
    return (
      <div className="block mx-auto mt-50 w-100">
        <Spinner /> Sedang memuat data...
      </div>
    );
  }

  return (
    <>
      <h1 className="font-bold text-2xl mt-5 ms-5">Daftar Lengkap Produk</h1>
      <div className="mx-15 my-5">
        <CardList data={products} type={"products"}>
          <div className="flex justify-between mt-15">
            <h1 className="text-2xl font-bold">Daftar Produk Populer</h1>
            <Link to="/products"></Link>
          </div>
        </CardList>
      </div>
    </>
  );
}
