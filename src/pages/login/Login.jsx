import "./Login.scss";
import Logo from "./img/logo.svg";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { authenticate } from "../../store/auth";


function Login() {
  const nav = useNavigate();
  // const [showPassword, setShowPassword] = useState(false);

  // const handleTogglePassword = () => {
  //   setShowPassword((prevShowPassword) => !prevShowPassword);
  // };
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
  } = useForm({
    mode: "onTouched",
  });

  const postLogin = async (data) => {
    try {
      await axios.post("api/Login", data);
      dispatch(authenticate());
      nav("/dahsboard");
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className="login">
      <ToastContainer />
      <div className="leftSide">
        <div className="mainActivity">
          <div className="logo">
            <img src={Logo} />
            <p>TechKnow</p>
          </div>
          <div className="loginText">Log in to your account</div>
          <form onSubmit={handleSubmit(postLogin)}>
            <div className="userInput">
              <div className="userInputText">Username</div>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="*Username"
                {...register("username")}
              />
            </div>
            <div className="pswdInput">
              <div className="pswdInputText">Password</div>
              <input
                id="password"
                type={"password"}
                name="password"
                placeholder="*Password"
                {...register("password")}
              />
            </div>
            <div className="forgotPswd">Forgot Password?</div>
            <button
              type="submit"
              style={{ cursor: "pointer" }}
              className="submit"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
      <div className="rightSide"></div>
    </div>
  );
}

export default Login;
