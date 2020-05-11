import React, { useState } from 'react';
    
    
const Form = (props) => {
    const {inputs, setInputs} = props;
    
    const [firstName, setFirstName] = useState("");
    const [firstNameErrors, setFirstNameErrors] = useState("");
    
    const onChange = e =>{
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };
    
    const handleFirstName = value => {
        setFirstName(value);
        if (value.length < 3){
            setFirstNameErrors("Must be more than 2 characters");
        }
        else if (value.length > 2){
            setFirstNameErrors('');
        }
    };
    
    const [lastName, setlastName] = useState("");
    const [LastErrors, setLastErrors] = useState("");
    const handleLastName = value => {
        setlastName(value);
        if (value.length < 3){
            setLastErrors("Must be more than 2 characters");
        }
        else if (value.length > 2){
            setLastErrors('');
        }
    };

    const [email, setemail] = useState("");
    const [emailErrors, setemailErrors] = useState("");
    const handleEmail = value => {
        setemail(value);
        if (value.length < 5){
            setemailErrors("Email must be at least 5 characters");
        }
        else if (value.length > 4){
            setemailErrors('');
        }
    };

    const [password, setpassword] = useState("");
    const [passwordErrors, setpasswordErrors] = useState("");
    const handlePW = value => {
        setpassword(value);
        if (value.length < 8){
            setemailErrors("Password must be at least 8 characters");
        }
        else if (value.length > 7){
            setemailErrors('');
        }
    };

    const [confirm, setconfirm] = useState("");
    const [confirmErrors, setconfirmErrors] = useState("");
    const handleconfirm = value => {
        setconfirm(value);
        if (value != password){
            setconfirmErrors("Passwords do not match.");
        }
        else if (value == password){
            setconfirmErrors("");
        }
    };




    return(
    <form onSubmit= { (e) => e.preventDefault() }>
        <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input className="form-control" onChange={e => handleFirstName(e.target.value)} value={ firstName } type="text" name="firstName"></input>
        {firstNameErrors ? <p style={{color:'red'}}>{ firstNameErrors }</p> :''}
        </div>
        <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input className="form-control" onChange={e => handleLastName(e.target.value)} value= { lastName }type="text" name="lastName"></input>
        {LastErrors ? <p style={{color:'red'}}>{ LastErrors }</p> :''}
        </div>
        <div className="form-group">
        <label htmlFor="email">Email</label>
        <input className="form-control" onChange={e => handleEmail(e.target.value)} value={email} type="text" name="email"></input>
        {emailErrors ? <p style={{color:'red'}}>{ emailErrors }</p> :''}
        </div>
        <div className="form-group">
        <label htmlFor="password">Password</label>
        <input className="form-control" onChange={e => handlePW(e.target.value)} value={password} type="password" name="password"></input>
        {passwordErrors ? <p style={{color:'red'}}>{ passwordErrors }</p> :''}
        </div>
        <div className="form-group">
        <label htmlFor="confirmPassword">Confirm PW</label>
        <input className="form-control" onChange={e => handleconfirm(e.target.value)} value={confirm} type="password" name="confirm"></input>
        {confirmErrors ? <p style={{color:'red'}}>{ confirmErrors }</p> :''}
        </div>
    </form>
    );
};
export default Form;