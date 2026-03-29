import { useState } from 'react';
import './UserForm.css';

function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <div className="form-container">
      <h1 className="form-title">User Form</h1>
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {submitted && (
        <div className="result-card">
          <h2>Submitted Data</h2>
          <p><span>Name:</span> {submitted.name}</p>
          <p><span>Email:</span> {submitted.email}</p>
        </div>
      )}
    </div>
  );
}

export default UserForm;
