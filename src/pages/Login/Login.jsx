import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import useForm from '../../hooks/useForm';
import './styles.css';

const Login = () => {

  const email = useForm("email");
  const password = useForm("password");

  const handleSubmit = () => {

  }

  return <div className='login'>
    <div className='login-container'>
      <h1>ENTRAR</h1>
      <form onSubmit={handleSubmit}>
        <Input label="email" type="email" name="email" {...email} />
        <Input label="senha" type="password" name="password" {...password} />
      </form>
      <Button className="btn-primary" label="ACESSAR" />
    </div>
  </div>
}

export default Login;