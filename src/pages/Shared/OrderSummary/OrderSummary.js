import React, { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';


const OrderSummary = () => {
    const { totalOrderQuantity, myOrderProducts, totalPrice, setTotalPrice, shippingCost, setShippingCost } = useAuth().ProductsInfo;
    const getTotalPrice = (myOrderProducts) => {
        let price = 0;
        myOrderProducts.forEach(product => {
            price += product.totalPrice;
        });
        return price;
    }

    setTotalPrice(getTotalPrice(myOrderProducts));
    useEffect(() => {

        if (totalOrderQuantity < 5) {
            setShippingCost(totalOrderQuantity * 10);
        } else if (totalOrderQuantity < 10) {
            setShippingCost(totalOrderQuantity * 8);
        } else {
            setShippingCost(80)
        }

    }, [totalOrderQuantity])

    // console.log(totalOrderQuantity)

    return (

        <div className="border my-5">
            <h4 className="text-center">Order Summary</h4>
            <div className="d-flex justify-content-around">
                <h5>Total Order : </h5>
                <h5>{totalOrderQuantity}</h5>
            </div>
            <div className="d-flex justify-content-around">
                <h5>Total Price : </h5>
                <h5>{totalPrice.toFixed(2)}</h5>
            </div>
            <div className="d-flex justify-content-around">
                <h5>Shipping Cost : </h5>
                <h5>{shippingCost.toFixed(2)}</h5>
            </div>
            <div className="d-flex justify-content-around">
                <h5>Total cost :</h5>
                <h5>{(totalPrice + shippingCost).toFixed(2)}</h5>
            </div>
        </div>
    );
};

export default OrderSummary;