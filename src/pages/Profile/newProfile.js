import { Link } from "react-router-dom";
import { useState } from "react";
import skillsData from './countries.json';
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";

const NewProfile = () => {
  
  const [lavendar, setLavender] = useState('lavendar');
  const [gender, setGender] = useState('');
  const [primarySkillSets, setPrimarySkillSets] = useState('');
  const [secondarySkillSets, setSecondarySkillSets] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [formData, setFormData] = useState({
    candidateId: '',
    createdDate: '',
    firstName: '',
    middleName: '',
    lastName: '',
    displayName: '',
    phone: '',
    altPhone: '',
    email: '',
    altEmail: '',
    gender: '',
    primarySkillSets: '',
    secondarySkillSets: '',
    currentCtc: '',
    expectedCtc: '',
    noticePeriod: '',
    totExp: '',
    relExp: '',
    currentLocation: '',
    prefLocation: '',
    dob: '',
    currentOrganization: '',
    highestEducationDegree: '',
    collegeStudied: '',
    universityStudied: '',
    yearOfPassing: '',
    linkedInId: '',
    resumeUpload: '',
    documentType: '',
    docNo: '',
    issueDate: '',
    expiryDate: '',
    documentUpload: '',
    sourceType: '',
    sourceName: '',
    preferredJob: '',
    candidatePicture: ''
  });

  const [errors, setErrors] = useState({});
  const [dob, setDob] = useState({});

  const handlePrimarySkillS = (e) => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    setPrimarySkillSets(value);
  };

  const handleSecondarySkillS = (e) => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    setSecondarySkillSets(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form data
      console.log(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleInputChange = (e) => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form data
      console.log(formData);
    } else {
      setErrors(validationErrors);
    }

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  const handleDobChange = (e) => {
    setDob(e.target.value);
    const validationErrors = validateForm();
    const age = calculateAge(e.target.value);
    if (age < 14) {
      console.log('sdsds');
     // setError('Age must be at least 14 years.');
      errors.dob = 'Should be greater than 14 years';
      //setErrors(validationErrors);
      console.log(errors);
    } else {
      //setError('');
      console.log('Allowed')
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const calculateAge = (dobString) => {
    const today = new Date();
    const birthDate = new Date(dobString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };


  const validateForm = () => {
    const errors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    } else if (!/^[A-Z]/.test(formData.firstName)) {
      errors.firstName = 'First name should start with a capital letter';
    }

    // Middle Name validation
    if (!formData.middleName.trim()) {
      errors.middleName = 'Middle name is required';
    } else if (!/^[A-Z]/.test(formData.middleName)) {
      errors.middleName = 'Middle name should start with a capital letter';
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
     // errors.lastName = 'Last name is required';
    } else if (!/^[A-Z]/.test(formData.lastName)) {
      errors.lastName = 'Last name should start with a capital letter';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Phone number should be 10 digits';
    } else if (/^\d{10}$/.test(formData.phone)) {
      errors.phone = '';
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email format';
    } else if (/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = '';
    }

    /*if (!formData.dob.trim()) {
      //errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email format';
    } else if (/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = '';
    }


    if (!formData.email.trim()) {
      //errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }*/
    // Add more validation rules for other fields

    return errors;
  };

  return (
   
    <div className="registration-container">
   
    <form onSubmit={handleSubmit}>
      
      <div className="row">
      <div className="form-group column">
        <label htmlFor="candidateId">Candidate ID:</label>
        <input
          type="text"
          id="candidateId"
          name="candidateId"
          value={formData.candidateId}
          placeholder="Auto Generated"
          readOnly
        />
      </div>
      
      <div className="form-group column">
      <label htmlFor="linkedInId">LinkedIn ID:</label>
        <input
          type="text"
          id="linkedInId"
          name="linkedInId"
          value={formData.linkedInId}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group column">
        <label htmlFor="createdDate">Created Date:</label>
        <input
          type="date"
          id="createdDate"
          name="createdDate"
          value={formData.createdDate}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group column">
        <label htmlFor="documentUpload">Picture Upload:</label>
        <input
          type="file"
          id="documentUpload"
          name="documentUpload"
          onChange={handleInputChange}
        />
      </div>
      </div>
      <div className="row heading">
        <label htmlFor="candidateId" className='heading'>Basic Info</label>
      </div>
      <div className="row">
      <div className="form-group column">
        <label htmlFor="firstName">First Name*:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="FirstName"
          required
          style={{ borderColor: errors.firstName ? 'red' : '' }}
        />
         {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
      </div>
      <div className="form-group column">
        <label htmlFor="middleName">Middle Name*:</label>
        <input
          type="text"
          id="middleName"
          name="middleName"
          value={formData.middleName}
          onChange={handleInputChange}
          required
          style={{ borderColor: errors.middleName ? 'red' : '' }}
          />
           {errors.middleName && <span style={{ color: 'red' }}>{errors.middleName}</span>}
      </div>
      <div className="form-group column">
        <label htmlFor="lastName">Last Name*:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
          style={{ borderColor: errors.lastName ? 'red' : '' }}
          />
           {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
      </div>
      <div className="form-group column">
        <label htmlFor="displayName">Display Name:</label>
        <input
          type="text"
          id="displayName"
          name="displayName"
          value={formData.displayName}
          onChange={handleInputChange}
        />
      </div>
      </div>
      <div className="row">
      <div className="form-group column">
        <label htmlFor="phone">Phone*:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
          style={{ borderColor: errors.phone ? 'red' : '' }}
          />
           {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
      </div>
      <div className="form-group column">
        <label htmlFor="altPhone">Alt Phone:</label>
        <input
          type="tel"
          id="altPhone"
          name="altPhone"
          value={formData.altPhone}
          onChange={handleInputChange}
          style={{ borderColor: errors.altPhone ? 'red' : '' }}
          />
           {errors.altPhone && <span style={{ color: 'red' }}>{errors.altPhone}</span>}
      </div>
      <div className="form-group column">
        <label htmlFor="email">Email*:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
         {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>
      <div className="form-group column">
        <label htmlFor="altEmail">Alt Email:</label>
        <input
          type="email"
          id="altEmail"
          name="altEmail"
          value={formData.altEmail}
          onChange={handleInputChange}
        />
      </div>
      </div>
      <div className="row">

      <div className="form-group column">
        <label htmlFor="dob">DOB*:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleDobChange}
          required
          style={{ borderColor: errors.dob ? 'red' : '' }}
        />
         {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
      </div>
      <div className="form-group column">
        <label htmlFor="gender">Gender*:</label>
        <select size='3'
          id="gender"
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>   
      </div>
      <div className="form-group column">
        <label htmlFor="primarySkillSets">Primary Skill Sets*:</label>
       
        {/*<select multiple size={3}
          id="primarySkillSets"
          value={primarySkillSets}
          onChange={handlePrimarySkillS}
        >
          <option value="">Select Skill</option>
          <option value="java">java</option>
          <option value="python">python</option>
          <option value="javascript">javascript</option>
  </select>*/}
        <select
          id="primarySkillSets"
          value={primarySkillSets}
          onChange={handlePrimarySkillS}
          multiple
        >
          {skillsData.map((skill) => (
            <option key={skill.code} value={skill.code}>
              {skill.name}
            </option>
          ))}
        </select>

      </div>
      <div className="form-group column">
        <label htmlFor="secondarySkillSets">Secondary Skill Sets*:</label>

       {/* <select multiple size={3}
          id="secondarySkillSets"
          value={secondarySkillSets}
          onChange={handleSecondarySkillS}
        >
          <option value="">Select Skill</option>
          <option value="java">java</option>
          <option value="python">python</option>
          <option value="javascript">javascript</option>
  </select>*/}

        <select
          id="secondarySkillSets"
          value={secondarySkillSets}
          onChange={handleSecondarySkillS}
          multiple
        >
          {skillsData.map((skill) => (
            <option key={skill.code} value={skill.code}>
              {skill.name}
            </option>
          ))}
        </select>
      </div>
      </div>
      <div className="row heading">
        <label htmlFor="candidateId">Experience Info</label>
      </div>
      <div className="row">
      <div className="form-group column">
        <label htmlFor="relExp">Rel Exp*:</label>
        <input
          type="text"
          id="relExp"
          name="relExp"
          value={formData.relExp}
          onChange={handleInputChange}
          required
          style={{ borderColor: errors.middleName ? 'red' : '' }}
          />
           {errors.relExp && <span style={{ color: 'red' }}>{errors.relExp}</span>}
      </div>
      <div className="form-group column">
        <label htmlFor="currentLocation">Current Location*:</label>
        <input
          type="text"
          id="currentLocation"
          name="currentLocation"
          value={formData.currentLocation}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group column">
        <label htmlFor="prefLocation">Pref Location*:</label>
        <input
          type="text"
          id="prefLocation"
          name="prefLocation"
          value={formData.prefLocation}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group column">
      <label htmlFor="currentOrganization">Current Organization*:</label>
        <input
          type="text"
          id="currentOrganization"
          name="currentOrganization"
          value={formData.currentOrganization}
          onChange={handleInputChange}
          required
          style={{ borderColor: errors.currentOrganization ? 'red' : '' }}
          />
           {errors.currentOrganization && <span style={{ color: 'red' }}>{errors.currentOrganization}</span>}
      
      </div>
      </div>
      <div className="row">
      <div className="form-group column">
        <label htmlFor="currentCtc">Current CTC*:</label>
        <input
          type="text"
          id="currentCtc"
          name="currentCtc"
          value={formData.currentCtc}
          onChange={handleInputChange}
          required
          style={{ borderColor: errors.currentCtc ? 'red' : '' }}
          />
           {errors.currentCtc && <span style={{ color: 'red' }}>{errors.currentCtc}</span>}
      </div>
      <div className="form-group column">
        <label htmlFor="expectedCtc">Expected CTC*:</label>
        <input
          type="text"
          id="expectedCtc"
          name="expectedCtc"
          value={formData.expectedCtc}
          onChange={handleInputChange}
          required
          style={{ borderColor: errors.expectedCtc ? 'red' : '' }}
          />
           {errors.expectedCtc && <span style={{ color: 'red' }}>{errors.expectedCtc}</span>}
      </div>
      <div className="form-group column">
        <label htmlFor="noticePeriod">Notice Period*:</label>
        <input
          type="text"
          id="noticePeriod"
          name="noticePeriod"
          value={formData.noticePeriod}
          onChange={handleInputChange}
          required
          style={{ borderColor: errors.noticePeriod ? 'red' : '' }}
          />
           {errors.noticePeriod && <span style={{ color: 'red' }}>{errors.noticePeriod}</span>}
      </div>
      <div className="form-group column">
        <label htmlFor="totExp">Tot Exp*:</label>
        <input
          type="text"
          id="totExp"
          name="totExp"
          value={formData.totExp}
          onChange={handleInputChange}
          required
          style={{ borderColor: errors.totExp ? 'red' : '' }}
          />
           {errors.totExp && <span style={{ color: 'red' }}>{errors.totExp}</span>}
      </div>
      </div>
      
      <div className="row">
      <div className="form-group column">
        <label htmlFor="documentType">Document Type:</label>

        <select
          id="documentType"
          value={documentType}
          onChange={(event) => setDocumentType(event.target.value)}
        >
          <option value="">Select</option>
          <option value="pan">PAN</option>
          <option value="passport">Passport</option>
          <option value="visa">visa</option>
          <option value="other">other</option>
        </select>
      </div>
      <div className="form-group column">
        <label htmlFor="docNo">Doc No:</label>
        <input
          type="text"
          id="docNo"
          name="docNo"
          value={formData.docNo}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group column">
        <label htmlFor="issueDate">Issue Date:</label>
        <input
          type="date"
          id="issueDate"
          name="issueDate"
          value={formData.issueDate}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group column">
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          type="date"
          id="expiryDate"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleInputChange}
        />
      </div>
      
      
      <div className="form-group column">
        <label htmlFor="documentUpload">Document Upload:</label>
        <input
          type="file"
          id="documentUpload"
          name="documentUpload"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group column">
      <label htmlFor="resumeUpload">Resume Upload*:</label>
        <input
          type="file"
          id="resumeUpload"
          name="resumeUpload"
          onChange={handleInputChange}
          required
        />
      </div>
      </div>
      <div className="row">
      <div className="form-group column">
        <label htmlFor="sourceType">Source Type*:</label>
        <input
          type="text"
          id="sourceType"
          name="sourceType"
          value={formData.sourceType}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group column">
        <label htmlFor="sourceName">Source Name*:</label>
        <input
          type="text"
          id="sourceName"
          name="sourceName"
          value={formData.sourceName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group column">
        <label htmlFor="preferredJob">Preferred Job:</label>
        <input
          type="text"
          id="preferredJob"
          name="preferredJob"
          value={formData.preferredJob}
          onChange={handleInputChange}
        />
      </div>
      </div>

      <div className="row heading heading">
        <label>Employment History</label>
      </div>
      <div className="row" style={{borderWidth: 2,backgroundColor:'lavendar'}}>
       <ExperienceForm/>
      </div> 
     
      <div className="row heading heading">
        <label>Education Info</label>
      </div>
      <div className="row" style={{borderWidth: 2,backgroundColor:'lavendar'}}>
       <EducationForm/>
      </div> 
      <div className="row" style={{padding: 10}}>
       
      </div>  
      <div className="form-group" style={{backgroundColor:'lavendar', textAlign: 'center'}}>
        <button type="submit" >Submit</button>
       </div>  
     
    </form>
    </div>
  );
  
};

export default NewProfile;