import React, { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const { user } = useAuth().firebaseInfo;
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://bestmart.herokuapp.com/orders/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    if (!user?.email) {
        return <h2>Please Order Product</h2>
    }
    return (
        <div>
            {
                orders?.map((order, index) => <MyOrder key={index} order={order} />)
            }
        </div>
    );
};

export default MyOrders;