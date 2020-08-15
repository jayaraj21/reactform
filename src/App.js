import React from 'react';
import './App.css';

function ValidationMessage(props) {
  if (!props.valid) {
    return(
      <div className='error-msg'>{props.message}</div>
    )
  }
  return null;
}

class App extends React.Component {
  state = {
    username: '', usernameValid: false,
    lastname: '', lastnameValid: false,
    phonenumber: '', phonenumberValid: false,
    email: '', emailValid: false,
    password: '', passwordValid: false,
    passwordConfirm: '', passwordConfirmValid: false,
    formValid: false,
    errorMsg: {}
  }

  validateForm = () => {
    const {usernameValid, lastnameValid, phonenumberValid , emailValid, passwordValid, passwordConfirmValid} = this.state;
    this.setState({
      formValid: usernameValid && lastnameValid && phonenumberValid && emailValid && passwordValid && passwordConfirmValid
    })

  }


   //first name

  updateUsername = (username) => {
    this.setState({username}, this.validateUsername)
  }
 
  validateUsername = () => {
    const {username} = this.state;
    let usernameValid = true;
    let errorMsg = {...this.state.errorMsg}

    if (username === "") {
      usernameValid = false;
      errorMsg.username = 'Please enter the First Name'
    }

    this.setState({usernameValid, errorMsg}, this.validateForm)
  }

  //lastname
  updateLastname = (lastname) => {
    this.setState({lastname}, this.validateLastname)
  }

  validateLastname = () => {
    const {lastname} = this.state;
    let lastnameValid = true;
    let errorMsg = {...this.state.errorMsg}

    if (lastname=== "") {
      lastnameValid = false;
      errorMsg.lastname = 'Please enter the Last Name'
    }

    this.setState({lastnameValid, errorMsg}, this.validateForm)
  }
//phonenumber
updatePhoneNumber = (phonenumber) => {
  this.setState({phonenumber}, this.validatePhoneNumber)
}

validatePhoneNumber = () => {
  const {phonenumber} = this.state;
  let phonenumberValid = true;
  let errorMsg = {...this.state.errorMsg}

  if(isNaN(phonenumber)){
    phonenumberValid = false;
    errorMsg.phonenumber = 'Please enter a vaild Phone Number'
  } 
  else if(phonenumber.length <= 10 ) {
    phonenumberValid = false;
    errorMsg.phonenumber = 'Please enter minimum 10 digits'
  }

  this.setState({phonenumberValid, errorMsg}, this.validateForm)
}


//email validation

  updateEmail = (email) => {
    this.setState({email}, this.validateEmail)
  }

  validateEmail = () => {
    const {email} = this.state;
    let emailValid = true;
    let errorMsg = {...this.state.errorMsg}

    // checks for format _@_._
    if (email === ""){
      emailValid = false;
      errorMsg.email = 'Please enter the Email ID'
    }
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      emailValid = false;
      errorMsg.email = ' Please enter a valid email address'
    }

    this.setState({emailValid, errorMsg}, this.validateForm)
  }


  //password

  updatePassword = (password) => {
    this.setState({password}, this.validatePassword);
  }

  validatePassword = () => {
    const {password} = this.state;
    let passwordValid = true;
    let errorMsg = {...this.state.errorMsg}
  
    


    if (password === "") {
      passwordValid = false;
      errorMsg.password = ' please Enter password';
    }
    else if (password.length >= 6  && password.length <=8) {
      passwordValid = false;
      errorMsg.password = 'poor password';
    }
         else if (!/\d/.test(password)){
          passwordValid = false;
          errorMsg.password = 'Invalid Password';
    
        }
         else if (!/[A-Z]/.test(password)){
          passwordValid = false;
          errorMsg.password = 'Invalid Password';
        }
        else if (!/[!@#$%^&*]/.test(password)){
          passwordValid = false;
          errorMsg.password = 'Invalid Password';
        }
         
        // else if (password.length > 8 ){
        //   passwordValid = false;
        //   errorMsg.password = 'strong password';
        // }

    this.setState({passwordValid, errorMsg}, this.validateForm);
  }

//re-enter password

  updatePasswordConfirm = (passwordConfirm) => {
    this.setState({passwordConfirm}, this.validatePasswordConfirm)
  }

  validatePasswordConfirm = () => {
    const {passwordConfirm, password} = this.state;
    let passwordConfirmValid = true;
    let errorMsg = {...this.state.errorMsg}

    if (password !== passwordConfirm) {
      passwordConfirmValid = false;
      errorMsg.passwordConfirm = 'Passwords do not match'
    }

    this.setState({passwordConfirmValid, errorMsg}, this.validateForm);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.validateForm) {
        console.log(this.state);
        
      
    } else {
        return ""
    }
}

  //render method

  render() {
    return (
       <div className="body">
        <h1 >Logo</h1>
        <div className = "container" >
        <div className="register"> </div>	
        
      
		     <div className="form-box">   

          <form onSubmit={this.handleSubmit}>
          <div className="form">
          <div className="heading"> <h2>Registration</h2> </div> 
            
            

            
            <div className="form-group">
              <input type='text' id='username' name='username' className='form-field'
              value={this.state.username} onChange={(e) => this.updateUsername(e.target.value)} placeholder="First Name"/>
               < ValidationMessage valid={this.state.usernameValid} message={this.state.errorMsg.username}  />
            </div>
            <div className='form-group'>
              
             
              <input type='text' id='lastname' name='lastname' className='form-field'
              value={this.state.lastname} onChange={(e) => { e.preventDefault(); this.updateLastname(e.target.value)}} placeholder="Last Name"/>
               < ValidationMessage valid={this.state.lastnameValid} message={this.state.errorMsg.lastname}  />
            </div>
            <div className='form-group'>
            
              <input type='text' id='phonenumber' name='phonenumber' className='form-field'
              value={this.state.phonenumber} onChange={(e) => this.updatePhoneNumber(e.target.value)} placeholder="Phone Number"/>
               < ValidationMessage valid={this.state.phonenumberValid} message={this.state.errorMsg.phonenumber}  />
            </div>


            <div className='form-group'>
  
              
              <input type='email' id='email' name='email' className='form-field'
              value={this.state.email} onChange={(e) => this.updateEmail(e.target.value)} placeholder="Email ID"/>
              < ValidationMessage valid={this.state.emailValid} message={this.state.errorMsg.email} />
            </div>
            <div className='form-group'>
              
             
              <input type='password' id='password' name='password' className='form-field'
              value={this.state.password} onChange={(e) => this.updatePassword(e.target.value)} placeholder="Password"/>
               < ValidationMessage valid={this.state.passwordValid} message={this.state.errorMsg.password} />
            </div>
            <div className='form-group'>
             
              
              <input type='password' id='password-confirmation' name='password-confirmation' className='form-field' value={this.state.passwordConfirm} onChange={(e) => this.updatePasswordConfirm(e.target.value)} placeholder="Re enter Password"/>
              < ValidationMessage valid={this.state.passwordConfirmValid} message={this.state.errorMsg.passwordConfirm} />
            </div>
            <input type="checkbox"  name="terms" required />
            <label > By signing up, I accept terms and conditions</label>
 
              

            <div className='form-controls'>
              <button className='register-btn' type='submit' disabled={!this.state.formValid}>Register</button>
            </div>
            </div>
          </form>
          </div>
        </div>

        <div className="navbar">
        <a  className="active">Help | </a>
        <a >Privacy | </a>
        <a >Terms and Conditions</a>
        </div>

        
        <div className="footer">
          <h3>Copyright 2019</h3>
        </div>


        </div>
    );
  }
}

export default App;