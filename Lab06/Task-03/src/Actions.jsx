import { useState } from 'react';
import './Actions.css';

const COLORS = [
  '#1a1a2e', '#16213e', '#0f3460', '#533483',
  '#e94560', '#06d6a0', '#118ab2', '#ffd166',
  '#ef476f', '#073b4c', '#264653', '#2a9d8f',
];

function Actions() {
  const [message, setMessage] = useState('');
  const [bgColor, setBgColor] = useState('#1a1a2e');
  const [hovered, setHovered] = useState(null);

  const showMessage = () => setMessage('🎉 Hello! You clicked the Show Message button!');
  const changeBg = () => {
    const random = COLORS[Math.floor(Math.random() * COLORS.length)];
    setBgColor(random);
  };
  const showAlert = () => alert('⚡ Alert! You triggered a browser alert!');

  const hoverColors = ['#f72585', '#4cc9f0', '#7209b7'];

  return (
    <div className="actions-wrapper" style={{ backgroundColor: bgColor }}>
      <div className="actions-container">
        <h1 className="actions-title">Interactive Buttons</h1>
        <p className="actions-subtitle">Hover over buttons for effects, click to trigger actions</p>

        <div className="btn-grid">
          {[
            { label: '💬 Show Message', action: showMessage, id: 0 },
            { label: '🎨 Change Background', action: changeBg, id: 1 },
            { label: '⚡ Show Alert', action: showAlert, id: 2 },
          ].map(({ label, action, id }) => (
            <button
              key={id}
              className="action-btn"
              onClick={action}
              style={{ color: hovered === id ? hoverColors[id] : '#ffffff' }}
              onMouseOver={() => setHovered(id)}
              onMouseOut={() => setHovered(null)}
            >
              {label}
            </button>
          ))}
        </div>

        {message && (
          <div className="message-box">
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Actions;
