import './Login.scss';
import Logo from "./img/logo.svg";
function Login() {
  return (
    <div className='login'>
      <div className='leftSide'>
        <div className='mainActivity'>
          <div className="logo"><img src={Logo}/><p>TechKnow</p></div>
          <div className="loginText">Log in to your account</div>
          <div className="userInput">
            <div className="userInputText">Username</div>
            <input type="text" placeholder='Enter your username' />
          </div>
          <div className="pswdInput">
            <div className="pswdInputText">Password</div>
            <input type="text" placeholder='Enter your password'/>
          </div>
          <div className="forgotPswd">Forgot Password?</div>
          <div className="submit">Log In</div>
        </div>
      </div>
      <div className='rightSide'></div>
    </div>
  );
}

export default Login;
