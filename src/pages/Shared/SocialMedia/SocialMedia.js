import React from 'react';

const SocialMedia = () => {
    return (
        <div className="mb-4">
            {/* <!-- Facebook --> */}
            <a className="btn btn-outline-light btn-floating my-1 " href="#!" role="button"
            ><i className="fab fa-facebook-f"></i
            ></a>

            {/* <!-- Twitter --> */}
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fab fa-twitter"></i
            ></a>

            {/* <!-- Google --> */}
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fab fa-google"></i
            ></a>

            {/* <!-- Instagram --> */}
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fab fa-instagram"></i
            ></a>

            {/* <!-- Linkedin --> */}
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fab fa-linkedin-in"></i
            ></a>

            {/* <!-- Github --> */}
            <a className="btn  btn-outline-drak btn-floating m-1" href="#!" role="button"
            ><i className="fab fa-github"></i
            ></a>
        </div>
    );
};

export default SocialMedia;