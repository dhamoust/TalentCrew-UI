import React, { useContext, useState } from 'react';

const ExperienceForm = () => {
  const [experienceDetails, setExperienceDetails] = useState([{
    companyName: '',
    designation: '',
    startDate: '',
    endDate: ''
  }]);
  //const { theme, toggleTheme } = useContext(ThemeContext);

  const handleAddExperience = (event) => {
    event.preventDefault();
    const newExperience = {
    companyName: '',
    designation: '',
    startDate: '',
    endDate: ''
    };
    setExperienceDetails([...experienceDetails, newExperience]);
  };

  const handleRemoveExperience = (index,event) => {
    event.preventDefault();
    setExperienceDetails(experienceDetails.filter((_, i) => i !== index));
  };

  return (
    <div className="form-group row">
            {/*<div>Current Theme: {theme}</div>
      <button onClick={toggleTheme}>Toggle Theme</button>*/}
      {experienceDetails.map((education, index) => (
    <tr key={index}>
       
        <td style={{paddingLeft: 20}} >
          
          <input
            type="text"
            placeholder="CompanyName"
            value={education.companyName}
            onChange={(e) =>
              setExperienceDetails((prevState) => {
                const updatedDetails = [...prevState];
                updatedDetails[index].companyName = e.target.value;
                return updatedDetails;
              })
            }
          />
        </td>
        <td style={{paddingLeft: 20}}>
          <input
            type="text"
            placeholder="Designation"
            value={education.designation}
            onChange={(e) =>
              setExperienceDetails((prevState) => {
                const updatedDetails = [...prevState];
                updatedDetails[index].designation = e.target.value;
                return updatedDetails;
              })
            }
          />
          </td>
          <td style={{paddingLeft: 20}}>
          <input
            type="text"
            placeholder="StartDate"
            value={education.startDate}
            onChange={(e) =>
              setExperienceDetails((prevState) => {
                const updatedDetails = [...prevState];
                updatedDetails[index].startDate = e.target.value;
                return updatedDetails;
              })
            }
          /></td>
          <td style={{paddingLeft: 20}}>
          <input
            type="text"
            placeholder="EndDate"
            value={education.endDate}
            onChange={(e) =>
              setExperienceDetails((prevState) => {
                const updatedDetails = [...prevState];
                updatedDetails[index].endDate = e.target.value;
                return updatedDetails;
              })
            }
          />
          </td><td style={{paddingLeft: 20}}>
          <button onClick={(e) => handleRemoveExperience(index, e)}>Remove</button>
          </td>
          </tr>
      ))}
      <div>
      <button className='logOutBtn' onClick={handleAddExperience}>Add</button>
      </div>
    </div>
    
  );
};

export default ExperienceForm;
