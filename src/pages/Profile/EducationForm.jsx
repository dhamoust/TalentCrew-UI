import React, { useContext, useState } from 'react';

const EducationForm = () => {
  const [educationDetails, setEducationDetails] = useState([{
    degree: '',
    institution: '',
    score: '',
    yearOfPassing: '',
    university: ''
  }]);
  //const { theme, toggleTheme } = useContext(ThemeContext);

  const handleAddEducation = (event) => {
    event.preventDefault();
    const newEducation = {
      degree: '',
      institution: '',
      score: '',
      yearOfPassing: '',
      university: ''
    };
    setEducationDetails([...educationDetails, newEducation]);
  };

  const handleRemoveEducation = (index,event) => {
    event.preventDefault();
    setEducationDetails(educationDetails.filter((_, i) => i !== index));
  };

  return (
    <div className="form-group row">
            {/*<div>Current Theme: {theme}</div>
      <button onClick={toggleTheme}>Toggle Theme</button>*/}
      {educationDetails.map((education, index) => (
        <tr key={index}>
          <td>
        {/*<div className='form-group column' key={index}>*/}
          <input
            type="text"
            placeholder="Course"
            value={education.degree}
            onChange={(e) =>
              setEducationDetails((prevState) => {
                const updatedDetails = [...prevState];
                updatedDetails[index].degree = e.target.value;
                return updatedDetails;
              })
            }
          />
          </td>
          <td>
          <input
            type="text"
            placeholder="Institution"
            value={education.institution}
            onChange={(e) =>
              setEducationDetails((prevState) => {
                const updatedDetails = [...prevState];
                updatedDetails[index].institution = e.target.value;
                return updatedDetails;
              })
            }
          />
          </td>
          <td>
          <input
            type="text"
            placeholder="Score"
            value={education.score}
            onChange={(e) =>
              setEducationDetails((prevState) => {
                const updatedDetails = [...prevState];
                updatedDetails[index].score = e.target.value;
                return updatedDetails;
              })
            }
          /></td>
          <td>
          <input
            type="month" pattern="\d{2}/\d{4}"
            placeholder="Year of Passing"
            value={education.yearOfPassing}
            onChange={(e) =>
              setEducationDetails((prevState) => {
                const updatedDetails = [...prevState];
                updatedDetails[index].yearOfPassing = e.target.value;
                return updatedDetails;
              })
            }
          /></td>
          <td>
          <input
            type="text"
            placeholder="University"
            value={education.university}
            onChange={(e) =>
              setEducationDetails((prevState) => {
                const updatedDetails = [...prevState];
                updatedDetails[index].university = e.target.value;
                return updatedDetails;
              })
            }
          /></td><td  style={{padding: 10}}>
          <button onClick={(e) => handleRemoveEducation(index, e)}>Remove</button>
          </td><td>
          <button onClick={handleAddEducation}>Add</button>
          </td>
          </tr>
      ))}
     
    </div>
  );
};

export default EducationForm;
