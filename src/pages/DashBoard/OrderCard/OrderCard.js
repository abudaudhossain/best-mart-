import React from 'react';
import { Col } from 'react-bootstrap';

const OrderCard = ({ icon, title, amount }) => {
    return (
        <Col md={6} lg={6} xl={3}>
            <div className="d-flex order-card my-3">
                <span className="icon-container">
                    <i className={icon}></i>
                </span>
                <div className="cart-text">
                    <p>{title}</p>
                    <h4 className="">{amount}</h4>
                </div>
            </div>
        </Col>
    );
};

export default OrderCard;