import React from 'react';
import './Footer.css'

const Footer = () => {
    const footerImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmk371QMmQH_Chj9X7V_So_wamdyhJuO_6hw&usqp=CAU";
    return (
        <div className="mt-3 footer">
            <div className="d-flex my-2 py-3 justify-content-center row row-cols-sm-2 row-cols-md-6  ps-5 ms-5">
                <div className="p-3">
                    {/* quick links section */}
                    <p className="pb-2 fw-bold text-white">Quick Links</p>
                    <p><i className="far fa-hand-point-right text-white"></i> Home</p>
                    <p><i className="far fa-hand-point-right text-white"></i> Services</p>
                    <p><i className="far fa-hand-point-right text-white"></i> My Services</p>
                    <p><i className="far fa-hand-point-right text-white"></i> Pick Up</p>
                    <p><i className="far fa-hand-point-right text-white"></i> Membership</p>
                </div>

                {/* contact info section */}
                <div className="p-3">
                    <p className="pb-2 text-white fw-bold">Contact Info</p>
                    <p><i className="fas fa-phone text-white"></i> +123-1234-6780</p>
                    <p><i className="fab fa-whatsapp-square text-white"></i> +333-7889-578</p>
                    <p><i className="fas fa-at text-white"></i> e.exit@gmail.com</p>
                    <p><i className="fab fa-instagram-square text-white"></i> express_exit</p>
                    <p><i className="fas fa-map-marker-alt text-white"></i> Dhaka,Bangladesh</p>
                </div>

                {/* follow us section */}
                <div className="p-3 mx-3">
                    <p className="pb-2  text-white fw-bold">Follow Us</p>
                    <p><i className="fab fa-facebook-square text-white"></i> Facebook</p>
                    <p><i className="fab fa-twitter-square text-white"></i> Twitter</p>
                    <p><i className="fab fa-instagram-square text-white"></i> Instagram</p>
                    <p><i className="fab fa-linkedin text-white"></i> Linkedin</p>
                    <p><i className="fab fa-pinterest-square text-white"></i> Pinterest</p>
                </div>
                <div>
                    <img src={footerImg} alt="" className="h-75 pt-5" />
                </div>
            </div>
            {/* copyright */}
            <div className="border text-center py-1">
                <i className="far fa-copyright"></i> All <span className="text-white">Rights</span> Reserved
            </div>
        </div>
    );
};

export default Footer;