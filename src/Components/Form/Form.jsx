import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

function Form() {
  const [name, setName] = useState('');
  const [courseDetails, setCourseDetails] = useState('');
  const [duration, setDuration] = useState('');
  const [courseId, setCourseId] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/Certificate', {state: {name: name, courseDetails: courseDetails, duration: duration, courseId: courseId}});
  };

  return (
    <div className='Form-container'>
          <div className="Certificate-page">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Course Details"
          value={courseDetails}
          onChange={(e) => setCourseDetails(e.target.value)}
        />
        <input
          type="text"
          placeholder="Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <input
          type="text"
          placeholder="Course ID"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
        />
        <button type="submit">Generate Certificate</button>
      </form>
    </div>
    </div>
  );
}

export default Form;
