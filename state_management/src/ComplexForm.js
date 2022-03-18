import {useState} from "react";

export default function ComplexForm() {
    const initialFormState = {
      name: "",
      email: "",
    };
    const [formData, setFormData] = useState({ ...initialFormState });
    
    const [users, setusers] = useState([]);

    const handleChange = ({ target }) => {
      setFormData({
        ...formData,
        [target.name]: target.value,
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Submitted:", formData);
      setusers([...users, formData]);
      setFormData({ ...initialFormState });
      console.log(users);
      
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Enter Your Name:
          <input
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </label>
        <br />
        <label htmlFor="email">
          Your Email:
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }