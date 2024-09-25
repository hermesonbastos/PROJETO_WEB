import { useContext } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import useForm from '../../hooks/useForm';
import './styles.css';
import { UserContext } from '../../context/UserContext';

const Login = () => {

  const { userLogin } = useContext(UserContext);

  const email = useForm();
  const password = useForm("password");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.validate()) {
      userLogin(email.value, password.value);
    }
  }

  return <div className='login'>
    <div className='login-container'>
      <h1>ENTRAR</h1>
      <form onSubmit={handleSubmit}>
        <Input label="email" type="email" name="email" {...email} />
        <Input label="senha" type="password" name="password" {...password} />
      </form>
      <Button className="btn-primary" label="ACESSAR" onClick={handleSubmit} />
    </div>
  </div>
}

export default Login;