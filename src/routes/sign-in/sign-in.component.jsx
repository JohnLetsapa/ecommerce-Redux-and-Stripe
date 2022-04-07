import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import './sign-in.styles.scss';


const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup(); // {user} comes from destructuring the response object to target only the info we require
    createUserDocumentFromAuth(user)
  };
  
  return (
    <div>
      <h1>The SignIn page</h1>
      <button onClick={logGoogleUser}>SignIn with GooglePopup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
