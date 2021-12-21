import React from 'react';


const OrderSummary = () => {
    return (

        <div className="border my-5">
            <h4 className="text-center">Order Summary</h4>
            <div className="d-flex justify-content-around">
                <h5>Total Order : </h5>
                <h5>98</h5>
            </div>
            <div className="d-flex justify-content-around">
                <h5>Total Price : </h5>
                <h5>98</h5>
            </div>
            <div className="d-flex justify-content-around">
                <h5>Shipping Cost : </h5>
                <h5>98</h5>
            </div>
            <div className="d-flex justify-content-around">
                <h5>Total cost :</h5>
                <h5>98</h5>
            </div>
        </div>
    );
};

export default OrderSummary;