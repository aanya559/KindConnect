// import React, { useState } from 'react';
// import './Help.css';
// import { FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa';

// const faqs = [
//   {
//     q: "How do I register as a volunteer?",
//     a: "Click on the Register button on the homepage, fill in your details, and you're ready to start exploring events!"
//   },
//   {
//     q: "Is KindConnect free to use?",
//     a: "Absolutely. Our platform is free for all volunteers and organizers. We believe kindness should have no cost."
//   },
//   {
//     q: "How do I get a certificate?",
//     a: "Once you complete a volunteering event, you can download your certificate from the dashboard section."
//   },
//   {
//     q: "Can I create my own volunteering event?",
//     a: "Yes! If you want to lead an initiative, just head over to the 'Create Event' section in the dashboard and fill in the form."
//   },
//   {
//     q: "How will I be notified of events?",
//     a: "You will receive email updates and can always check the Events section for the latest opportunities."
//   }
// ];

// const Help = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   return (
//     <div className="help-hero">
//       <div className="help-glass">
//         <div className="help-header">
//           <h1>Need Help?</h1>
//           <p>We're here to support your journey with <strong>KindConnect</strong>. Whether you’re a first-time volunteer or a regular change-maker, we’ve got your back!</p>
//         </div>

//         <div className="help-content">
//           <div className="help-left">
//             <h2> Contact Us</h2>
//             <p>If you have a question, suggestion, or just want to say hi — send us a message!</p>
//             <form className="contact-form">
//               <input type="text" placeholder="Full Name" required />
//               <input type="email" placeholder="Email" required />
//               <textarea rows="5" placeholder="Your message..." required></textarea>
//               <button type="submit">Send Message</button>
//             </form>

//             <p className="social-text">Connect with us on social media:</p>
//             <div className="social-links">
//               <a href="#"><FaInstagram /></a>
//               <a href="#"><FaWhatsapp /></a>
//               <a href="#"><FaFacebookF /></a>
//             </div>
//           </div>

//           <div className="help-right">
//             <h2> Frequently Asked Questions</h2>
//             <div className="faq-list">
//               {faqs.map((item, index) => (
//                 <div
//                   key={index}
//                   className={`faq-item ${index === activeIndex ? 'open' : ''}`}
//                   onClick={() => toggleFAQ(index)}
//                 >
//                   <div className="faq-question">{item.q}</div>
//                   {index === activeIndex && (
//                     <div className="faq-answer">{item.a}</div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Help;
import React, { useState } from 'react';
import './Help.css';
import { FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa';

const faqs = [
  {
    q: "How do I register as a volunteer?",
    a: "Click on the Register button on the homepage, fill in your details, and you're ready to start exploring events!"
  },
  {
    q: "Is KindConnect free to use?",
    a: "Absolutely. Our platform is free for all volunteers and organizers. We believe kindness should have no cost."
  },
  {
    q: "How do I get a certificate?",
    a: "Once you complete a volunteering event, you can download your certificate from the dashboard section."
  },
  {
    q: "Can I create my own volunteering event?",
    a: "Yes! If you want to lead an initiative, just head over to the 'Create Event' section in the dashboard and fill in the form."
  },
  {
    q: "How will I be notified of events?",
    a: "You will receive email updates and can always check the Events section for the latest opportunities."
  },
  {
    q: "Can I edit my profile details?",
    a: "Yes, you can manage your profile including name, photo, and interests from your dashboard settings."
  },
  {
    q: "Do I need prior experience to volunteer?",
    a: "No experience needed! We welcome everyone with a heart to help. Every small effort matters."
  }
];

const Help = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="help-hero">
      <div className="help-glass">
        <div className="help-header">
          <h1>Need Help?</h1>
          <p>
            We’re here to guide you through your KindConnect journey. Whether you’re just getting started or want to dive deeper into making an impact, we’ve got the answers and support you need.
          </p>
        </div>

        <div className="help-content">
          <div className="help-left">
            <h2> Contact Us</h2>
            <p>Got questions, feedback, or ideas? Drop us a message and we’ll respond soon!</p>
            <form className="contact-form">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <textarea rows="5" placeholder="Your message..." required></textarea>
              <button type="submit">Send Message</button>
            </form>

            <p className="social-text">Connect with us on social media:</p>
            <div className="social-links">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaWhatsapp /></a>
              <a href="#"><FaFacebookF /></a>
            </div>
          </div>

          <div className="help-right">
            <h2> Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqs.map((item, index) => (
                <div
                  key={index}
                  className={`faq-item ${index === activeIndex ? 'open' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="faq-question">{item.q}</div>
                  {index === activeIndex && (
                    <div className="faq-answer">{item.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
