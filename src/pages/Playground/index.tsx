import { useAppSelector } from "../../types/store";
import AuthIndicator from "../../components/auth/AuthIndicator";
import "./style.css";

const Playground = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  return (
    <div>
      {isLoggedIn ? (
        <div>grgrg</div>
      ) : (
        <AuthIndicator
          redirect="playground"
          label="Sign Up to Use PlayGround"
        />
      )}
    </div>
  );
};

export default Playground;
