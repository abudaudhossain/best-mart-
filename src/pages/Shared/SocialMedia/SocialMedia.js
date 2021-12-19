import React from 'react';

const SocialMedia = () => {
    return (
        <div class="mb-4">
            {/* <!-- Facebook --> */}
            <a class="btn btn-outline-light btn-floating my-1 " href="#!" role="button"
            ><i class="fab fa-facebook-f"></i
            ></a>

            {/* <!-- Twitter --> */}
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-twitter"></i
            ></a>

            {/* <!-- Google --> */}
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-google"></i
            ></a>

            {/* <!-- Instagram --> */}
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-instagram"></i
            ></a>

            {/* <!-- Linkedin --> */}
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-linkedin-in"></i
            ></a>

            {/* <!-- Github --> */}
            <a class="btn  btn-outline-drak btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-github"></i
            ></a>
        </div>
    );
};

export default SocialMedia;