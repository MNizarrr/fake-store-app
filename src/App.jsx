import NavbarComp from "./components/NavbarComp";
import BannerComp from "./components/BannerComp";
import CardComp from "./components/CardComp";
import CardList from "./components/CardList";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function App() {
  const [categoryProducts, setCategoryProducts] = useState([]);

  const [products, setProducts] = useState([]);

  async function getDataCategories() {
    const url = "https://api.escuelajs.co/api/v1/categories";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      // isi state categoryProducts dengan data dari Api ( result ) 
      setCategoryProducts(result.slice(0,4));
    } catch (error) {
      console.error(error.message);
    }
  }

  
  async function getDataProducts() {
    const url = "https://api.escuelajs.co/api/v1/products";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      
      const result = await response.json();
      // isi state categoryProducts dengan data dari Api ( result ) 
      setProducts(result.slice(0,4));
    } catch (error) {
      console.error(error.message);
    }
  }

  // memamnggil atau menjalan api pas baru di buka
  useEffect(() => {
    getDataCategories();
    getDataProducts();
  }, []);

  return (
    <>
      <div className="mx-15 my-5">
        <BannerComp />
        <CardList data={categoryProducts} type={"category"} />
        <CardList data={products} type={"products"}>
          <div className="flex justify-between mt-15">
            <h1 className="text-2xl font-bold">Daftar Produk Populer</h1>
            <Link to="/products">
              <Button className="bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 text-gray-900 hover:bg-gradient-to-br focus:ring-lime-300 dark:focus:ring-lime-800">
                Lebih Banyak
              </Button>
            </Link>
          </div>
        </CardList>
      </div>
    </>
  );
}
