import { useEffect, useState } from "react";
import localeDB from "../utilities/localeDB";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    let productCategory = [];
    const categories = [];

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(req => req.json())
            .then(data => setProducts(data));
    }, [])

    products.forEach((product) =>{
        if(!productCategory.includes(product.category)){
            productCategory.push(product.category);
            categories.push({categoryName: product.category, categoryImg: product.img})
        }

    })

    const {getAllProductQuantity} = localeDB();
    
    const [quantity, setQuantity] = useState(getAllProductQuantity());
    
  


    return { products: products,productCategory:categories, quantity, setQuantity  }
}

export default useProducts;

