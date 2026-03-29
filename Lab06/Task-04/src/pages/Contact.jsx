import { useState } from 'react';
import './pages.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="page contact-page">
      <div className="page-header">
        <h1>Contact <span className="highlight">Us</span></h1>
        <p className="page-subtitle">We'd love to hear from you</p>
      </div>
      <div className="contact-wrap">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" placeholder="Write your message..." rows={5} value={form.message} onChange={handleChange} />
          </div>
          <button type="submit" className="cta-btn">Send Message →</button>
        </form>
        {sent && (
          <div className="success-msg">
            ✅ Thanks! Your message has been sent.
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
