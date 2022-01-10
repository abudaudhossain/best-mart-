import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Product from '../Shared/Product/Product';

const CategoryProducts = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    //================================//
    // ==  get category products ==//
    //================================//
    useEffect(() => {
        fetch(`https://bestmart.herokuapp.com/products/${category}`)
            .then(req => req.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <section className="Products py-5">
            <Container>
                <h2 className='title'>Our available {category} products</h2>
                <Row gap={3}>

                    {
                        products?.map(product => <Col sm={6} md={4} lg={3}

                            key={product._id}>
                            < Product product={product} name={product.name} />
                        </Col>)
                    }

                </Row>
            </Container>
        </section>
    );
};

export default CategoryProducts;