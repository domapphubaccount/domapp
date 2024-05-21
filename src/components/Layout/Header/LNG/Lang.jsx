import React, { useState, useRef, useEffect } from 'react';
import 'flag-icons/css/flag-icons.min.css';

function Lang() {
  const [selectedLang, setSelectedLang] = useState('EN');
  const [langToggle, setLangToggle] = useState(false);
  const langRef = useRef(null);

  const handleChange = (event) => {
    const selectedValue = event.target.id;
    setSelectedLang(selectedValue);
    setLangToggle(false); // Close the dropdown after selection
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangToggle(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [langRef]);

  return (
    <div className='lngg' ref={langRef}>
      <i className="bi bi-globe-americas"></i>
      <div className="lang-selector text-center" onClick={() => setLangToggle(!langToggle)}>
        {selectedLang}
        <i className="bi bi-chevron-down"></i>
      </div>
      {langToggle &&
        <div className='position-absolute w-100' style={{ top: '30px' }}>
          <div className='m-0 p-0 w-100 bg-light'>
            <div className='m-0 py-2 text-center lng-option' id="EN" onClick={handleChange}>
              English
            </div>
            <div className='m-0 py-2 text-center lng-option' id="AR" onClick={handleChange}>
              Arabic
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Lang;
