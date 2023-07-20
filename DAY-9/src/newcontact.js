import React from "react";
import { useSelector, useDispatch } from "react-redux";
import './Contactus.css';

const Form = () => {
  const { name, contactNumber, email, message } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch({ type: 'UPDATE_NAME', payload: e.target.value });
  };

  const handleContactNumberChange = (e) => {
    dispatch({ type: 'UPDATE_CONTACT_NUMBER', payload: e.target.value });
  };

  const handleEmailChange = (e) => {
    dispatch({ type: 'UPDATE_EMAIL', payload: e.target.value });
  };

  const handleMessageChange = (e) => {
    dispatch({ type: 'UPDATE_MESSAGE', payload: e.target.value });
  };

  const handleSubmit = () => {
    // Add your submit logic here
  };

  return (
    <div className='back'>
      <div className="arch_contact_us_duplicate">
        <div className="responsive-container-block big-container">
          <div className="responsive-container-block container">
            <div className="responsive-cell-block wk-mobile-12 wk-desk-5 wk-tab-10 wk-ipadp-5" id="ih6s">
              <p className="text-blk section-head">
                <b>Any Queries?</b>
              </p>
              <p className="text-blk section-subhead"></p>
            </div>
            <div className="responsive-cell-block wk-ipadp-6 wk-mobile-12 wk-desk-5 wk-tab-9" id="i6df">
              <div className="form-wrapper">
                <input className="input input-element" name="Name" placeholder="Name" value={name} onChange={handleNameChange} />
                <input className="input input-element" name="Contact Number" placeholder="Contact Number" value={contactNumber} onChange={handleContactNumberChange} />
                <input className="input input-element" name="Email" placeholder="Email" value={email} onChange={handleEmailChange} />
                <textarea className="textinput input-element" placeholder="Message" value={message} onChange={handleMessageChange}></textarea>
                <button className="logb1" onClick={handleSubmit}>SEND</button>
              </div>
              <div className="social-media-icon-container">
                {/* Social media icons */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;