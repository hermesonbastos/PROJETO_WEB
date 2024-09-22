import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import useForm from '../../hooks/useForm';
import './styles.css';

const Signup = () => {

  const name = useForm();
  const email = useForm("email");
  const password = useForm("password");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/feed");
  }

  return <div className='signup'>
    <div className='signup-container'>
      <h1>CRIAR CONTA</h1>
      <form onSubmit={handleSubmit}>
        <Input label="nome" type="text" name="username" {...name} />
        <Input label="email" type="email" name="email" {...email} />
        <Input label="senha" type="password" name="password" {...password} />
        <Button className="btn-primary" label="CONHECER" />
      </form>
    </div>
  </div>
}

export default Signup;