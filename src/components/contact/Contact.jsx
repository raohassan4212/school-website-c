import React, { useState } from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  // Component States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [className, setClassName] = useState("");
  const [messaage, setMessage] = useState("");

  // Component Functions
  const handleName = (name) => {
    setName(name.target.value);
  };

  const handleEmail = (email) => {
    setEmail(email.target.value);
  };

  const handleSubject = (subject) => {
    setSubject(subject.target.value);
  };

  const handleClassName = (subject) => {
    setClassName(subject.target.value);
  };

  const handleMessage = (message) => {
    console.log(message.target.value);
    setMessage(message.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch(event.target.action, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData).toString(),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("Email sent successfully");
        // Your form submission success logic here
      })
      .catch((error) => {
        console.error("There was a problem sending the email", error);
        // Your form submission error logic here
      });
    alert("Thanks For Contacting Us We Will Connect You Soon.");
  };
  // const map =
  //   'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ';
  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>
                  Arya Sr. Sec. School, P.O-Ahirka.jind Dist. f.Teh-Ahirka,
                  Haryana
                </p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p> Arya.School@gmail.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>Wazir Ser (M.D) 94165-04375</p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              action="https://formsubmit.co/12b8ddcdbfab3cc7e25fa3e9e8591d12"
              method="POST"
            >
              <div className="flexSB">
                <input type="text" placeholder="Name" onChange={handleName} />
                <input
                  type="email"
                  placeholder="Email"
                  onChange={handleEmail}
                />
              </div>
              {/*  */}
              <div className="flexSB">
                <input
                  type="text"
                  placeholder="Subject"
                  onChange={handleSubject}
                />
                <input
                  type="text"
                  placeholder="Class"
                  onChange={handleClassName}
                />
              </div>
              {/* <input
                type="text"
                placeholder="Class"
                onChange={handleSubject}
              /> */}
              <textarea cols="30" rows="10" onChange={handleMessage}>
                Create a message here...
              </textarea>
              {/* <button className="primary-btn contact-btn">SEND MESSAGE</button> */}
              <input
                type="submit"
                value="SEND MESSAGE"
                className="primary-btn contact-btn"
              />
              {/* <input type="submit" className="submit-newsletter" /> */}
            </form>

            {/* <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span> */}
            <div className="contact-number">
              <div>
                <div>
                  <b> MRS. SUDHA SHARMA </b>(PRINCIPAL) 99962-44390
                </div>
                <div>
                  <b> Bhim Singh </b> (Transport) 80530-88964
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
