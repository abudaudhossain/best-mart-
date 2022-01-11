import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {Outlet } from 'react-router-dom';
import DashBardTopNav from '../DashBardTopNav/DashBardTopNav';
import DashBoardSideNav from '../DashBoardSideNav/DashBoardSideNav';

const DashBoard = () => {
    return (
        <section className="" style={{overflow: "hidden"}}>
            <DashBardTopNav />
            <Row>
                <Col lg={3} style={{ background: "#161880"}} className="d-none d-lg-block p-0 h-100">
                    <DashBoardSideNav />
                </Col>
                <Col sm={12} lg={9} >

                    <Outlet />
                </Col>
            </Row>
        </section>
    );
};

export default DashBoard;