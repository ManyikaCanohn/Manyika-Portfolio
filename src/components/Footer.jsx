import React from "react";
import { FaMapMarkerAlt, FaMapMarkedAlt, FaEnvelopeOpenText, FaPhoneAlt, FaLinkedin, FaGithub, FaWhatsapp, FaTwitter, FaFacebook, FaInstagram, FaInstagramSquare } from "react-icons/fa";

const  Footer = () => {
  return (
    <footer className=" text-light pt-5 pb-3 mt-5"  style={{ backgroundColor: " #06053d" }} id="contact">
      <div className="container">
        <div className="row">

          {/* About / Reference */}
          <div className="col-md-4 mb-3">
            <h3 className="text-uppercase text-decoration-underline">References</h3>
            <div>
              <p className="mb-0"> <strong>
                Edah Nzima
                </strong>
              </p>
              <p className="mb-0"> Head of Session </p>
              <p className="mb-0"> Evelyn Hone College of Applied Arts and Commerce. </p>
              <p className="mb-0"> Computer Studies Department </p>
              <p className="m">  Tel: +260 977129413  </p>
            </div>
            <hr />
            <div>
              <p className="mb-0"> <strong>
                Iness Kamudole
                </strong>
              </p>
              <p className="mb-0"> Youth Leader </p>
              <p className="mb-0"> New Apostolic Church. </p>
              <p className="mb-0"> Chelstone Green Congregation </p>
              <p className="mb-0"> Tel: +260 979 802816 </p>
            </div>
          </div>

          {/* Location */}
          <div className="col-md-4 mb-3">
            <h3 className="text-uppercase text-decoration-underline">Location</h3>
            <p><FaMapMarkerAlt size={25} className="me-2" /> Chelstone, Kamanga</p>
            <p><FaMapMarkedAlt size={25} className="me-2" /> Lusaka, Zambia</p>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h3 className="text-uppercase text-decoration-underline">Contact</h3>
            <p><FaEnvelopeOpenText size={25} className="me-2" /> manyikamunyinda4@gmail.com</p>
            <p><FaPhoneAlt size={25} className="me-2" /> +260 774 283 579</p>
            <div className="d-flex gap-3 mt-2">
              <a href="https://www.linkedin.com/in/munyinda-manyika-901388342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
                <FaLinkedin title="LinkedIn" size={24} color="#ffffffff" />
              </a>
              <a href="https://github.com/ManyikaCanohn" target="_blank" rel="noreferrer">
                <FaGithub title="Github" size={24} color="#fff" />
              </a>
              <a href="tel:+260774283579" target="_blank" rel="noreferrer">
                <FaWhatsapp title="WhatsApp" size={24} color="#fff" />
              </a>
              <a href="https://x.com/ManyikaMunyinda?t=w9BXFnDOQbkATxaKdSt0BA&s=08" target="_blank" rel="noreferrer">
                <FaTwitter title="Twitter" size={24} color="#fff" />
              </a>
              <a href="https://www.instagram.com/manyika_canohn?igsh=MWZwcGdoMXl6MnMzdw==" target="_blank" rel="noreferrer">
                <FaInstagram title="Instagram" size={24} color="#fff" />
              </a>
            </div>
          </div>

        </div>

        <hr className="bg-secondary" />

        <p className="text-center text-muted mb-0 small">
          &copy; {new Date().getFullYear()} Manyika Munyinda. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;