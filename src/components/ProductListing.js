import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

export default function ProductListing() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllProducts = async () => {
      const res = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
          console.log("Fatal error", err);
        });

      dispatch(setProducts(res.data));
    };

    fetchAllProducts();
  }, []);
  console.log("Products :", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}
