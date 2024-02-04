import React, { useEffect, useState } from "react";

export const Contact = () => {
  class Message {
    constructor(email, msg, timestamp){
      this.email=email;
      this.msg=msg;
      this.timestamp=timestamp;
    }
  }

  const [userEmail,setUserEmail]=useState(null)
  const [userMsg,setUserMsg]=useState(null)


  const handleSubmit=(event)=>{
    event.preventDefault()
    const now=new Date()
    const msgTimestamp={
      year: now.getFullYear(),
      month: now.getMonth()+1,
      day: now.getDate(),
    }
    const newMessage= new Message(userEmail,userMsg,msgTimestamp)
    console.log(newMessage)
  }



  return (
    <div className="container-fluid py-5 blurred-bg d-flex justify-content-center">
      <div className="article_content p-3">
          <h1 className="text-center">Contact us!</h1>
        <form>
          <label htmlFor="email" className="form-label">Your e-mail address</label>
          <input type="email" className="form-control" name="email" id="email" onChange={(event)=>setUserEmail(event.target.value)} />
          <label htmlFor="msg" className="form-label">Your message</label>
          <textarea name="msg" id="msg" cols="30" rows="10" className="form-control" onChange={(event)=>setUserMsg(event.target.value)}></textarea>
          <button type="submit" className="m-2" onClick={handleSubmit}>submit</button>
        </form>
      </div>
    </div>
  );
};
