import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
    const [state, handleSubmit] = useForm("mdovjrdn");
    if (state.succeeded) {
        return (
        <div className='success-modal'>
            <h5 className="thank-you-message">
              Thanks for the message!
            </h5>
          </div>
        )
    }
    return (
        <form className='contact-form' onSubmit={handleSubmit}>
          <h3>Send us a message</h3>
    <div className="form-input">
               <label htmlFor="name">
                 Full name
                 </label>
               <input
                 id="name"
                 type="text" 
                 name="name"
               />
    </div>
    <div className="form-input">
        <label htmlFor="email">
          Email Address
          </label>
        <input
          id="email"
          type="email" 
          name="email"
        />
        </div>
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
    <div className="form-input">
         <label htmlFor="message">
          Your message
          </label>
        <textarea
          id="message"
          name="message"
        />
        </div>
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" className='form-btn' disabled={state.submitting}>
          Submit
        </button>
      </form>
    );
}
export default ContactForm;