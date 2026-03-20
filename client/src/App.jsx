import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ name: '', number: '', email: '' });
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: 'sending', msg: 'Processing your request...' });

    try {
      const response = await fetch('https://sophianexusweb.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', msg: 'Success! Check your inbox.' });
        setFormData({ name: '', number: '', email: '' });
      } else {
        setStatus({ type: 'error', msg: 'Error: ' + data.message });
      }
    } catch (error) {
      setStatus({ type: 'error', msg: 'Server is offline. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="glass-card">
        <h1>Let's Connect</h1>
        <p>Send us a message and our team will reach out to you within 24 hours.</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" required placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input 
              type="text" required placeholder="+1 (555) 000-0000"
              value={formData.number}
              onChange={(e) => setFormData({...formData, number: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" required placeholder="john@company.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status.msg && (
          <div className={`status-area ${status.type}`}>
            {status.msg}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
