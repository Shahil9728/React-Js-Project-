import React, { useState } from 'react'

const Contact = () => {


  const [data, setData] = useState({
    email: "",
    number: "",
    message: "",
  })

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  }

  const formsubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
    setData({
      email: "",
      number: "",
      message: "",
    })
  }

  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className='container contact-div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formsubmit}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  name='email'
                  value={data.email}
                  onChange={inputEvent} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label for="exampleInputphone" className="form-label">Phone Number</label>
                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  name='number'
                  value={data.number}
                  onChange={inputEvent} />
              </div>
              <div className="mb-3">
                <label for="exampleInputphone" className="form-label">Message</label>
                <textarea className='form-control' id='exampleFormControlTextarea1' rows={3}
                  name='message'
                  value={data.message}
                  onChange={inputEvent}></textarea>
              </div>
              <button type="submit" className="btn btn-outline-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact