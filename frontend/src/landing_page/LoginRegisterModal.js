import React, { useState } from 'react';

const LoginRegisterModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswordHints, setShowPasswordHints] = useState(false);

  const passwordHints = [
    { text: 'At least 8 characters', regex: /.{8,}/ },
    { text: 'At least 1 uppercase letter', regex: /[A-Z]/ },
    { text: 'At least 1 lowercase letter', regex: /[a-z]/ },
    { text: 'At least 1 number', regex: /\d/ },
    { text: 'At least 1 special character', regex: /[!@#$%^&*(),.?":{}|<>]/ }
  ];

  const getHintClass = (hint) => {
    return password.match(hint.regex) ? 'valid' : 'invalid';
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <div className="modal-header">
          <button
            className={isLogin ? 'active' : ''}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? 'active' : ''}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>
        <div className="modal-body">
          {isLogin ? (
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Login</button>
            </form>
          ) : (
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <div className="password-container">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setShowPasswordHints(true)}
                  onBlur={() => setShowPasswordHints(false)}
                  required
                />
                {showPasswordHints && (
                  <div className="password-hints">
                    {passwordHints.map((hint, index) => (
                      <div key={index} className={`hint ${getHintClass(hint)}`}>
                        {hint.text}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button type="submit">Register</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterModal;