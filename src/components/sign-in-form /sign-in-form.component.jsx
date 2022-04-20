import { useState } from 'react';
import {
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in-form.styles.scss';

// use this object to track all inputs for th four form fields instead of using useState four times -> Cleaner
const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value }); // [name] dynamically takes the name of the relevant input
    // therefore, this line updates all properties formFields properties
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup(); // {user} comes from destructuring the response object to target only the info we require
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('wrong password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>

      <FormInput
        label="email"
        type="email"
        required
        onChange={handleChange}
        name="email"
        value={email}
      />

      <FormInput
        label="Password"
        type="password"
        required
        onChange={handleChange}
        name="password"
        value={password}
      />
      <div className="buttons-container">
        <Button type="submit" onClick={handleSubmit}>
          Sign In
        </Button>
        <br />
        <br />
        <br />
      </div>
      <div>
        <h2 className="google-signin">Sign in with Google</h2>
        <Button type="button" buttonType="google" onClick={signInWithGoogle}>
          Google Sign In
        </Button>
      </div>
    </div>
  );
};

export default SignInForm;
