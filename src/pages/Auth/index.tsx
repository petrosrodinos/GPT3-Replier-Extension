import AuthIndicator from "../../components/auth/AuthIndicator";

const Auth = () => {
  return (
    <>
      <AuthIndicator
        redirect="home"
        label="Sign Up to use AI Generated Replies"
      />
    </>
  );
};

export default Auth;
