import React from 'react';
import Select from 'react-select';
import 'flag-icons/css/flag-icons.min.css';

const options = [
  {
    value: 'http://example.com/',
    label: (
      <div>
        <span className="fi fi-us" style={{ marginRight: 8 }}></span> English
      </div>
    ),
  },
  {
    value: 'http://putaksbocis.cz/',
    label: (
      <div>
        <span className="fi fi-sa" style={{ marginRight: 8 }}></span> العربية
      </div>
    ),
  },
];

function Lang() {
//   const handleChange = (selectedOption) => {
//     window.location.href = selectedOption.value;
//   };

  return (
    <div className="lngg">
      {/* <Select
        defaultValue={options[0]} // Set default to English
        options={options}
        // onChange={handleChange}
        styles={{
            control: (provided) => ({
                ...provided,
                borderRadius: '20px',
              }),
              menu: (provided) => ({
                ...provided,
                borderRadius: '20px',
              }),
          option: (provided) => ({
            ...provided,
            display: 'flex',
            alignItems: 'center',
            borderRadius: '20px'
          }),
          singleValue: (provided) => ({
            ...provided,
            display: 'flex',
            alignItems: 'center',
          }),
        }}
      /> */}
<i class="bi bi-globe-americas"></i>
      <select className='lang-selector text-end'>
        <option className='text-center'>
          EN
        </option>
        <option className='text-center'>
          AR
        </option>
      </select>
    </div>
  );
}

export default Lang;
