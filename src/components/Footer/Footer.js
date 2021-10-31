import React from 'react';
import './Footer.css';
const Footer = () => {
    const footerImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmk371QMmQH_Chj9X7V_So_wamdyhJuO_6hw&usqp=CAU";
    return (
        <div className="mt-3 footer">
            <div className="d-flex my-2 py-3 justify-content-center row row-cols-sm-2 row-cols-md-6  ps-5 ms-5">
                <div className="p-3">
                    {/* quick links section */}
                    <p className="pb-2 text-purple fw-bold">Quick Links</p>
                    <p><i className="far fa-hand-point-right text-purple"></i> Home</p>
                    <p><i className="far fa-hand-point-right text-purple"></i> Services</p>
                    <p><i className="far fa-hand-point-right text-purple"></i> My Services</p>
                    <p><i className="far fa-hand-point-right text-purple"></i> Pick Up</p>
                    <p><i className="far fa-hand-point-right text-purple"></i> Membership</p>
                </div>

                {/* contact info section */}
                <div className="p-3">
                    <p className="pb-2 text-purple fw-bold">Contact Info</p>
                    <p><i className="fas fa-phone text-purple"></i> +123-1234-6780</p>
                    <p><i className="fab fa-whatsapp-square text-purple"></i> +333-7889-578</p>
                    <p><i className="fas fa-at text-purple"></i> e.exit@gmail.com</p>
                    <p><i className="fab fa-instagram-square text-purple"></i> express_exit</p>
                    <p><i className="fas fa-map-marker-alt text-purple"></i> Dhaka,Bangladesh</p>
                </div>

                {/* follow us section */}
                <div className="p-3 mx-3">
                    <p className="pb-2  text-purple fw-bold">Follow Us</p>
                    <p><i className="fab fa-facebook-square text-purple"></i> Facebook</p>
                    <p><i className="fab fa-twitter-square text-purple"></i> Twitter</p>
                    <p><i className="fab fa-instagram-square text-purple"></i> Instagram</p>
                    <p><i className="fab fa-linkedin text-purple"></i> Linkedin</p>
                    <p><i className="fab fa-pinterest-square text-purple"></i> Pinterest</p>
                </div>
                <div>
                    <img src={footerImg} alt="" className="h-75 pt-5" />
                </div>
            </div>
            {/* copyright */}
            <div className="border text-center py-1">
                <i className="far fa-copyright"></i> All <span className="text-purple fw-bolder">Rights</span> Reserved
            </div>
        </div>
    );
};

export default Footer;