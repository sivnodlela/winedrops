"use client";
import React, { useEffect, useState } from "react";
import Product from "../Product";
import { BASE_URL, SALES_ENDPOINTS } from "@/app/constants";
import Spinner from "../Spinner";
import { Input } from "@/components/ui/input";

function Revenue() {
  const [wineProducts, setWineProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredWineProducts, setFilteredWineProducts] = useState<any>([]);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      let url = BASE_URL + SALES_ENDPOINTS.ByRevenue;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const result = await response.json();
      setWineProducts(result);
      setFilteredWineProducts(result);
    } catch (e) {
      alert(`Could not fetch data. ${JSON.stringify(e)}`);
    } finally {
      setIsLoading(false);
    }
  };

  const filterWineProducts = (searchTerm: string) => {
    if (!searchTerm || searchTerm == "") setFilteredWineProducts(wineProducts);
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    setFilteredWineProducts(
      wineProducts.filter((product) =>
        product.product_name.toLowerCase().includes(lowercasedSearchTerm)
      )
    );
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterWineProducts(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="w-full flex flex-row justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div>
          <Input
            onChange={handleQueryChange}
            className="mb-4"
            placeholder="Search for a product"
          />
          {filteredWineProducts.map((p: any) => (
            <Product
              isBottomTen={p.isBottomTen}
              isTopTen={p.isTopTen}
              product_name={p.product_name}
              amount={`£${p.total_amount}`}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Revenue;
