import React from 'react';

const SectionHeader = ({ title, subtitle, buttons }) => {
  return (
    <div className="section-header">
      <h1 className="section-title">{title}</h1>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      {buttons && (
        <div className="section-buttons">
          {buttons.map((button, index) => (
            <button key={index} onClick={button.onClick} className="section-button">
              {button.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
