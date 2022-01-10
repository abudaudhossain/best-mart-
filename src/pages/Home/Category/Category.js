import React from 'react';
import { Link } from 'react-router-dom';
import "./Category.css"

const Category = ({ category }) => {
    console.log(category)
    return (
        <div className="text-center">
            <Link to={`/categoryProducts/${category.categoryName}`}>
                <img className="category-img-area" src={category?.categoryImg} alt="categoryImage" />

                <h6>{category?.categoryName}</h6>

            </Link>
        </div>
    );
};

export default Category;