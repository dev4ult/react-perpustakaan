import InputGroup from '../components/InputGroup';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <form action="" className="w-fit p-4 border m-4 d-flex flex-column gap-3">
        <InputGroup label="Email" type="email" name="email" />
        <InputGroup label="Password" type="password" name="password" placeholder="password123" />
        <div>
          <Button type="submit" className="w-100">
            Test
          </Button>
          <p>
            Don't have an account yet? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
