import React,{useState} from "react";
import { useFormik } from 'formik';

function FinalWorkForm(props) {
    const [name,SetName] = useState("");
    const [email,SetEmail] = useState("");
    const [GraduationYear,SetGraduationYear] = useState("");
    const [title, SetTitle] = useState("");
    const [description, SetDescription] = useState("");
    const [category, SetCategory] = useState("");

    const validate = (values) => {
        const errors = {}
      
        if (!values.email) {
          errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address'
        }
      
        return errors
      }
      const formik = useFormik({
        initialValues: {
          email: '',
        },
        validate,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2))
        },
      })
function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      name,
      email,
      GraduationYear,
      title,
      description,
      category
    };
    props.onSubmit(formData);
  }


  function handleNameChange(event) {
    SetName(event.target.value);
  }

  function handleEmailChange(event) {
    SetEmail(event.target.value);
  }

  function handleGraduationYearChange(event) {
    SetGraduationYear(event.target.value);
  }

  function handleTitleChange(event) {
    SetTitle(event.target.value);
  }

  function handleDescriptionChange(event) {
    SetDescription(event.target.value);
  }

  function handleCategoryChange(event) {
    SetCategory(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>
      <label>
        Year of Graduation:
        <input
          type="number"
          value={GraduationYear}
          onChange={handleGraduationYearChange}
          required
        />
      </label>
      <label>
        Title of Final Work:
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          required
        />
      </label>
      <label>
        Category:
        <select value={category} onChange={handleCategoryChange} required>
          <option value="">--Select a category--</option>
          <option value="Web & App">Web & App</option>
          <option value="Alternate Reality">Alternate Reality</option>
          <option value="Smart Technologies">Smart Technologies</option>
          <option value="Motion">Motion</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
  }

export default FinalWorkForm;
