import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
const ContactForm = () => {
    const formRef = useRef(null);

    useEffect(() => {
        const form = formRef.current;

        const handleSubmit = (event) => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        };

        if (form) {
            form.addEventListener('submit', handleSubmit);
        }
        return () => {
            if (form) {
                form.removeEventListener('submit', handleSubmit);
            }
        };
    }, []);

    return (
        <form
            id="contactForm"
            ref={formRef}
            className="needs-validation"
            noValidate
        >
            <div className="row">
                <div className="col-md-6 mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First Name*"
                        required
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name*"
                        required
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email*"
                        required
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone*"
                        required
                    />
                </div>
            </div>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Message*"
                    required
                ></textarea>
            </div>
            <button type="submit" className="btn bg-primary text-white ">
                SEND MESSAGE
            </button>
        </form>
    );
};

const Contact = () => {
    return (
        <>
            <style>
                {`
                .container {
                    max-width: 1200px;
                }
                #col-md-4{
                margin-top: 200px;
                margin-left:-20px;
                }
                #col-md-8{
                padding-left:40px ;
                padding-right:40px;
                padding-bottom:50px;
                padding-top:20px
                height: 100px;
                }
                #col-md-8, #col-md-4{
                box-shadow: 10px 10px 30px -12px rgba(8, 8, 8, 0.7);
                }
                #col-md-4,#col-md-8 {
  transform: translate(0, -1.3rem);
  transition: transform 500ms ease-in-out , box-shadow 1s;
}
    #col-md-8:hover,#col-md-4:hover {
        transform: translate(-1rem, -5rem);
        box-shadow: 10px 10px 30px 12px rgba(83, 151, 151, 0.7);
        }
                `}
            </style>
            <h1 className="cursor typewriter-animation">Contact Us</h1>
            <div className="container mt-5 p-4">
                <div className="row">
                    <div className="col-md-8 pt-5 rounded" id="col-md-8">
                        <h2 className="mb-4">SEND US A MESSAGE</h2>
                        <ContactForm />
                    </div>
                    <div className="col-md-4 bg-primary text-white p-4 rounded mb-5 " id="col-md-4">
                        <h3 className="mb-4"> OUR  CONTACT</h3>
                        <h5 className="mt-4">Our Addresses </h5>
                        <a href="https://maps.app.goo.gl/FioxXApTfxTgkeQW9" alt="Elcolab" className="text-white " class="a"> Elcolab Sfax</a>
                        <h5 className="mt-4">Call Us</h5>
                        <p>
                            Tel: 56 493 426</p><p> Email: innovators.ittt@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contact;