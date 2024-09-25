import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import useForm from '../../hooks/useForm';
import './styles.css';
import { SIGNUP } from '../../api';
import useFetch from '../../hooks/useFetch';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Signup = () => {

  const { loading, request, error } = useFetch();
  const { userLogin } = useContext(UserContext);

  const name = useForm();
  const email = useForm("email");
  const password = useForm("password");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { url, options } = SIGNUP({
      name: name.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(email.value, password.value);
    if (response?.ok) navigate("/feed");
  }

  return <div className='signup'>
    <div className='signup-container'>
      <h1>CRIAR CONTA</h1>
      <form onSubmit={handleSubmit}>
        <Input label="nome" type="text" name="username" {...name} />
        <Input label="email" type="email" name="email" {...email} />
        <Input label="senha" type="password" name="password" {...password} />
        
        {loading ? (
          <Button className="btn-primary" label="CARREGANDO..." disabled/>
        ) : (
          <Button className="btn-primary" label="CONHECER" />
        )}
      </form>
    </div>
  </div>
}

export default Signup;