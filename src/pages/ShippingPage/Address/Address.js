import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import localeDB from '../../../utilities/localeDB';

const Address = () => {
    const { register, handleSubmit } = useForm();
    const OrderProducts = JSON.parse(sessionStorage.getItem("myOrderProducts"));
    const { totalOrderQuantity, setAllProductsQuantity, totalPrice, shippingCost } = useAuth();
    const { clearStorageData } = localeDB();
    let navigate = useNavigate()

    const onSubmit = orderInfo => {
        orderInfo.products = OrderProducts;
        orderInfo.totalProducts = totalOrderQuantity;
        orderInfo.totalCost = totalPrice + shippingCost;

        axios.post('https://bestmart.herokuapp.com/order', orderInfo)
            .then(function (response) {


                if (response.data.acknowledged) {
                    alert("Your order successfully added")
                    clearStorageData();
                    setAllProductsQuantity(0);
                    navigate("/");
                }

            })
            .catch(function (error) {
                console.log(error);
            });

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="my-5">
            <div className="form-floating mb-3">
                <input className="form-control" defaultValue="test" {...register("name", { required: true })} />
                <label for="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">

                <input className="form-control"  {...register("email", { required: true })} />
                <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">

                <input className="form-control"  {...register("phonNumber", { required: true })} />
                <label for="floatingInput">Phone Number</label>
            </div>


            <div className="form-floating mb-3">

                <input className="form-control"  {...register("district", { required: true })} />
                <label for="floatingInput">District Name</label>
            </div>


            <div className="form-floating mb-3">

                <input className="form-control"  {...register("upazila", { required: true })} />
                <label for="floatingInput">Upazila Name</label>
            </div>


            <input className="my-btn p-3 w-100" type="submit" value="conform Order" />
        </form>
    );
};

export default Address;