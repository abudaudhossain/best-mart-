import React from 'react';
import "./Category.css"

const Category = ({category}) => {
    // console.log(category)
    return (
        <div className="text-center">
              <img className="category-img-area" src={category?.categoryImg} alt="categoryImage" />
            
            <h6>{category?.categoryName}</h6>

        </div>
    );
};

export default Category;