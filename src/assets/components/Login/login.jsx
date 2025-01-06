// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false); // To toggle form visibility

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;

    if (username === '' || password === '') {
      setError('Username aur password dono zaroori hain!');
      return;
    }

    // Backend API call ke liye yahan code likhein
    console.log('Login Details:', formData);
    setError('');
    alert('Login successful!');
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible); // Toggle form visibility
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', background:"white"}}>
      <h2>Login Section</h2>
      <button 
        onClick={toggleFormVisibility} 
        style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', marginBottom: '20px' }}
      >
        {isFormVisible ? 'Hide Login Form' : 'Show Login Form'}
      </button>

      {isFormVisible && (
        <div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="username" style={{ display: 'block', marginBottom: '5px',  }}>Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box', border: '1px solid #ccc'}}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box', border: '1px solid #ccc' }}
              />
            </div>
            <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px' }}>
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
