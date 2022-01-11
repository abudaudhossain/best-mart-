import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MyBartChart from '../MyBarChart/MyBartChart';
import MyPieChart from '../MyPieChart/MyPieChart';
import OrderCard from '../OrderCard/OrderCard';
import "./DashBoardHome.css"

const DashBoardHome = () => {
    return (
        <section className="my-3">
            <Container>
                <h3>Dashboard Overview</h3>
                <Row className="mt-3">
                    <OrderCard
                        icon="fas fa-shopping-cart"
                        title="Total Oder"
                        amount="123" />
                    <OrderCard
                        icon="fas fa-sync"
                        title="Order Pending"
                        amount="123" />
                    <OrderCard
                        icon="fas fa-truck-moving"
                        title="Order Processing"
                        amount="123" />
                    <OrderCard
                        icon="far fa-handshake"
                        title="Order Delivered"
                        amount="123" />
                </Row>
                <Row>
                    <Col lg={6}>
                        <div className="order-card my-3">
                            <h4>Conversions This Year</h4>
                            <MyBartChart />
                        </div>
                    </Col>
                    <Col lg={6}>
                    <div className="order-card my-3">
                            <h4>Conversions This Year</h4>
                            <MyPieChart />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default DashBoardHome;