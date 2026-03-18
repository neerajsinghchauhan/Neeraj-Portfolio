import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:neerajsinghchauhan0000@gmail.com" data-cursor="disable">
                neerajsinghchauhan0000@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>BTech in Computer Science</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/neerajsinghchauhan"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/neeraj-singh-chauhan-0269322a9/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            {/* Removed Twitter and Instagram as they are not on resume */}
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Neeraj Singh Chauhan</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
