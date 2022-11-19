import Facebook from "./Facebook";
import Google from "./Google";
import { signInWithGoogle, signInWithFacebook } from "../../services/auth";
import { addNewUser } from "../../services/user";
import { useNavigate } from "react-router-dom";

const AuthHandler = () => {
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

export default AuthHandler;
