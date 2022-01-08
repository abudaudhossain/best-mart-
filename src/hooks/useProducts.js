import { useEffect, useState } from "react";
import localeDB from "../utilities/localeDB";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [myOrderProducts, setMyOrderProducts] = useState([]);
    let productCategory = [];
    const categories = [];

    //======================================//
    // ==  add order Products in local DB ==//
    //=====================================//
    useEffect(() => {
        if (myOrderProducts.length > 1) {
            const cart_item = {};
            myOrderProducts.map(product => cart_item[product.productId] = product.quantity)
            console.log("Saved local", cart_item)
            localStorage.setItem("addToCartProduct", JSON.stringify(cart_item));
            setAllProductsQuantity(getAllProductQuantity());
        }

    }, [myOrderProducts])

    //================================//
    // ==  load all products ==//
    //================================//

    useEffect(() => {
        fetch("https://bestmart.herokuapp.com/products")
            .then(req => req.json())
            .then(data => setProducts(data));
    }, [])
    //================================//
    // ==  get categories products ==//
    //================================//
    products.forEach((product) => {
        if (!productCategory.includes(product.category)) {
            productCategory.push(product.category);
            categories.push({ categoryName: product.category, categoryImg: product.img })
        }

    })

    const { getAllProductQuantity } = localeDB();

    const [allProductsQuantity, setAllProductsQuantity] = useState(getAllProductQuantity());

    //================================//
    // ==  for order summary  ==//
    //================================//
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalOrderQuantity, setTotalOrderQuantity] = useState(allProductsQuantity);
    const [shippingCost, setShippingCost] = useState(0);



    return { products: products, productCategory: categories, allProductsQuantity, setAllProductsQuantity, myOrderProducts, setMyOrderProducts, totalOrderQuantity, setTotalOrderQuantity, totalPrice, setTotalPrice, shippingCost, setShippingCost }
}

export default useProducts;

