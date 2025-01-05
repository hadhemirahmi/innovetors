import React from "react";

const Footer = () => {
  return (
    <footer className="text-white py-4">
      <style>
        {`
          .footer {
            background-color: #0066FF;
            color: white;
          }
          .footer h5 {
            font-size: 1.25rem;
            margin-bottom: 1rem;
          }
          .footer p, .footer a {
            font-size: 0.875rem;
          }
          .footer a {
            color: white;
            text-decoration: none;
            display:block;
          }
          .footer a:hover {
            text-decoration: underline;
          }
          @media (max-width: 767px) {
            .footer .row {
              display: flex;
              flex-direction: column;
            }
            .footer .col-md-4 {
              margin-bottom: 1.5rem;
            }
          }
        `}
      </style>
      <div className="footer row mx-0">
        <div className="col-md-4 px-3">
          <h5>About Us</h5>
          <p>
            We are at the forefront of innovation, providing creative and sustainable solutions for a better future.
          </p>
        </div>
        <div className="col-md-4 px-3">
          <h5>Quick links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="/about">Who are we</a>
            </li>
            <li>
              <a href="/why">Services</a>
            </li>
            <li>
              <a href="/contact">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 px-3">
          <h5>Our contacts</h5>
          <div>
            <a
              href="https://www.facebook.com/innovatorsproject?locale=fr_FR"
              aria-label="facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
              Innovators Project
            </a>
            <a
              href="https://www.instagram.com/innovators.ittt?fbclid=IwZXh0bgNhZW0CMTAAAR29m_D17hZm_2fqv8s6rVZqar75nQyzZJ2_OX3rjU4LuXaRlgXlBZ7qwmc_aem_VoBQ3J3i5my171SeZ4xSQw"
              aria-label="instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
              Innovators Project
            </a>
            <a
              href="mailto:innovators.ittt@gmail.com"
              aria-label="email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-envelope-at-fill"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
              </svg>
              Innovators.ittt@gmail.com
            </a>
          </div>
        </div>
      <div className="text-center mt-4">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Innovators. All rights reserved.
        </p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
