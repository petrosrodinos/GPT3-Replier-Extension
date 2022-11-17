import { signInWithGoogle, signInWithFacebook } from "../../services/auth";
import Google from "../../components/auth/Google";
import Facebook from "../../components/auth/Facebook";
import { addNewUser } from "../../services/firestore";
import { useAppDispatch } from "../../types/store";
import { login } from "../../redux/actions/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      signInWithGoogle().then(async (res) => {
        handleLogin(res.user);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      signInWithFacebook().then(async (res) => {
        handleLogin(res.user);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (user: any) => {
    try {
      const loggedUser = await addNewUser(user);
      if (loggedUser) {
        navigate("/settings");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Google onClick={handleGoogleSignIn} />
      <br />
      <Facebook onClick={handleFacebookSignIn} />
    </div>
  );
};

export default Auth;
