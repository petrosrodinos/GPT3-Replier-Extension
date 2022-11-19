import Facebook from "./Facebook";
import Google from "./Google";
import { signInWithGoogle, signInWithFacebook } from "../../services/auth";
import { addNewUser } from "../../services/user";
import { useNavigate } from "react-router-dom";
import { FC } from "react";

interface IProps {
  onUserLogin: () => void;
}

const AuthHandler: FC<IProps> = ({ onUserLogin }) => {
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
        onUserLogin();
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
