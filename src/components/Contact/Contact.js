import React from 'react'
import '../Contact/Contact.css'

function Contact(props) {
  return (
    <footer>
    <div className='contact-row' ref={props.contactref}>
      <div className="container">
        <div className="row">contact</div>
      </div>
    </div>
    </footer>
  )
}

export default Contact