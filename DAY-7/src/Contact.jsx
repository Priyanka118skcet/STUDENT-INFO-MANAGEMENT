import React, { useState } from "react";
import "./styles/contact.css";

const Form = () => {
  //     const [info, setinfo] = useState({
  //       name: "",
  //       phone: "",
  //       email: "",
  //       subject: "",
  //       message: ""
  //     });

  //     const InputChnage = (event) => {
  //       console.log(event.target.value);
  //       console.log(event.target.name);

  //       const { value, name } = event.target;

  //       setinfo((preValue) => {
  //         return {
  //           ...preValue,
  //           [name]: value
  //         };
  //       });

  //       const onChange =() =>{
  //           event.preventDefault();
  //       }

  return (
    <>
      {/* <p>Hello, {}</p> */}
      <div className="zx">
      <div className="containercon">
        <div className="contact-box">
          <div className="contact-left">
            <h4>Connect With Us</h4>
            <form>
              <div className="contact-row">
                <div className="contact-group">
                  <label className="mn">Name</label>
                  <input className="gh" type="text" placeholder="Your Name" name="name" />
                </div>
                <div className="contact-group">
                  <label className="mn">Phone</label>
                  <input 
                  className="gh"
                    type="text"
                    placeholder="Your Phone No."
                    name="phone"
                  />
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-group">
                  <label className="mn">Email</label>
                  <input className="gh" type="email" placeholder="Your email" name="email" />
                </div>
                <div className="contact-group">
                  <label className="mn">Subject</label>
                  <input
                  className="gh"
                    type="text"
                    placeholder="Please write Subject here"
                    name="message"
                  />
                </div>
              </div>
              <label className="mn">Message</label>
              <textarea className="bn" rows="5" placeholder="your message..."></textarea>

              <button className="as" type="submit">Send</button>
            </form>
          </div>
          <div className="contact-right">
            <h4>Reach Us</h4>
            <table >
              <tr className="data1">
                <td className="er">Email</td>
                <td className="er">contact@example.com</td>
              </tr>
              <tr className="data2">
                <td className="er">Phone</td>
                <td className="er">+1 5544 666</td>
              </tr>
              <tr className="data3">
                <td className="er">Adress</td>
                <td className="er">
                  #212,Any Commercial bulding
                  <br />
                  near some place, some road
                  <br />
                  some city,Country 695893{" "}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Form;
