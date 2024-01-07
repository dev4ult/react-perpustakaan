import { Link } from 'react-router-dom';
import Button from '../components/Button';
import InputGroup from '../components/InputGroup';
import TextareaGroup from '../components/TextareaGroup';

function Register() {
  return (
    <div>
      <form action="" className="w-fit m-4 p-4 border d-grid gap-3">
        <InputGroup label="Fullname" name="full_name" placeholder="John Doe" />
        <InputGroup label="Credential Number" type="number" name="credential_number" placeholder="210000000000" />
        <InputGroup label="Email" type="email" name="email" />
        <InputGroup label="Password" type="password" name="password" placeholder="john!s23s1" />
        <InputGroup label="Phone Number" type="number" name="phone_number" placeholder="8123456789" />
        <TextareaGroup label="Address" name="address" placeholder="Sesame street no 54" />
        <div>
          <Button type="submit" className="w-100">
            Register
          </Button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
