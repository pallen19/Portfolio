import React from 'react';
import {useState} from 'react';

const EmailForm = () => {
  
  const [firstName, setfirstName] = useState(' ');
  const [lastName, setlastName] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [message, setMessage] = useState(' ');
  return (
    <>
      <div className="emailform">
        <h1>Let's Connect!</h1>
        <form>
          <label>
            First Name:
            <input type="text" required='true' name="first-name" id="first-name" value={firstName}
              onChange={(e)=> setfirstName(e.target.value)} />
          </label>

          <label>
            Last Name:
            <input type="text" required name="last-name" id="last-name" value={lastName}
              onChange={(e)=> setlastName(e.target.value)}
              />
          </label>

          <label>
            Email:
            <input type="text"  name="email" id="email" value={email}
              onChange={(e)=> setEmail(e.target.value)}  required />
          </label>

          <label className="message">
            Message:
            <textarea required type="text" name="message" id="message" value={message}
              onChange={(e)=> setMessage(e.target.value)} />
          </label>

          <button className="submit" type="submit" value={"Submit"} onClick={()=> {alert("email sent!")}} />
        </form>
        
      </div>
    </>
  );
};

export default EmailForm;
