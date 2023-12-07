import "./App.css";
import React, {useState, useEffect} from "react";

function App() {
    //const intialValues = {username:"", email: "", password:""};
    const [formValues, setFormValues] = useState(intialValues);
    //const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) =>{
        console.log(e.target);
        const{name , value} = e.target;
        setFormValues({...formValues, [name]: value});
        console.log(formValues);
    }

    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formErrors);
        }
    }, [])

    const handleSubmit =(e) =>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
    const validate =(values)=>{
        const errors = {};
        const regex = /^[^\\$@]+@[^\\$@]+\\.[^\\$@]{2,}$/i;
        
        if (!values.username){
            errors.username = "Username is required!";
        }

        if(!values.email){
            errors.email= "Email is required!";
        }else if(!regex.test(values.email)){
            errors.email = "This is not a valid email format!";
        }

        if(!values.password){
            errors.password= "Password is required!";
        } else if(values.password <4){
            errors.password = "Password must be more than 4 characters";
        } else if(values.password>16){
            errors.password = "Password cannot be more than 16 characters";
        }
        return errors;
    }

  return (<>
    
    <div className="container">
    
      <form onSubmit={handleSubmit}>
      {Object.keys(formErrors).length === 0 && isSubmit ? <p>successful</p>: <p>unsuccessful</p>} 
        <h1>Login Form</h1>
        <div className="ui-divider"></div>
        <div className="ui-form">
          <div className="field">
            <label>Username</label>
            <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            value={formValues.username}
            onChange={handleChange} />
          </div>
          <p>{ formErrors.username}</p>
          <div className="field">
            <label>email</label>
            <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formValues.email}
            onChange={handleChange} />
          </div>
          <p>{ formErrors.email}</p>
          <div className="field">
            <label>password</label>
            <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={formValues.password}
            onChange={handleChange}
            />
          </div>
          <p>{ formErrors.password}</p>
          <button className="fbtn">Submit</button>
        </div>
      </form>
    </div></>
  );
}

export default App;