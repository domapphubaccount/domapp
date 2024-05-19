import React, { useState } from 'react';
import 'flag-icons/css/flag-icons.min.css';

function Lang() {
  const [selectedLang, setSelectedLang] = useState('EN');

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === 'EN') {
      setSelectedLang('EN');
    } else if (selectedValue === 'AR') {
      setSelectedLang('AR');
    }
  };

  return (
    <div className="lngg">
      <i className="bi bi-globe-americas"></i>
      <select
        className="lang-selector text-center"
        value={selectedLang}
        onChange={handleChange}
      >
        <option value="EN" className='text-center' disabled hidden>
          {selectedLang}
        </option>
        <option value="AR" className='text-center' disabled hidden>
          {selectedLang}
        </option>
        <option value="EN" className='text-center' style={{ fontSize: '.8rem', padding: '0.5rem' }}>
          English
        </option>
        <option value="AR" className='text-center' style={{ fontSize: '.8rem', padding: '2rem' }}>
          Arabic
        </option>
      </select>
    </div>
  );
}

export default Lang;
