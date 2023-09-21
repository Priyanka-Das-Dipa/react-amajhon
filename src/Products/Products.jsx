import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import ProductCard from "./ProductCard";

const Products = () => {

    // const [products, setProducts] = useState([])
    // useEffect(()=>{
    //     fetch(`https://dummyjson.com/products`)
    //     .then(res=> res.json())
    //     .then(data => setProducts(data))
    // },[])
    // console.log(products)
    // instant of line 5-12 write useLoader() which load ur data

    const {products} = useLoaderData()
    console.log(products)

    return (
        <div className="">
            <div className="grid grid-cols-3 gap-5 p-5">
            {
                products?.map(product => <ProductCard key={product.id} product = {product}></ProductCard>)
            }
            </div>
        </div>
    );
};

export default Products;