import React from 'react';

const Brand = ({brand}) => {
    return (
        <div className="text-center mb-2">
            <div className="m-auto">
                <img src={brand} className=""  alt="brandImg"/>
            </div>
            
        </div>
    );
};

export default Brand;