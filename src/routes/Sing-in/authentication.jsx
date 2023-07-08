import SignInForm from "../../components/signInForm/SignInForm";
import SignUpForm from "../../components/signUpForm/singUpForm";
import { AuthenticationContainer } from "./authenticationStyles";

export default function Authentication() {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
}
