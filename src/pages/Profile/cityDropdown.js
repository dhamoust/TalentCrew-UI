import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CityDropdown = () => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchTerm.length >= 2) {
      fetchOptions(searchTerm);
    } else {
      setOptions([]);
    }
  }, [searchTerm]);

  const fetchOptions = async (search) => {
    try {
      const response = await axios.post('https://api.talentcrew.tekishub.com/getEntityOptions', {
        iFeildId: 73,
        rfeild: 176,
        rquery: "",
        sSearch: search
      });
      setOptions(response.data);
    } catch (err) {
      setError('Failed to fetch options');
      console.error('Error fetching options:', err);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setSearchTerm(event.target.options[event.target.selectedIndex].text);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Type to search cities..."
      />
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select a city</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.value}
          </option>
        ))}
      </select>
      {selectedOption && <p>Selected city ID: {selectedOption}</p>}
    </div>
  );
};

export default CityDropdown;