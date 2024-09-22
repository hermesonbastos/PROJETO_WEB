import React from 'react';
import './styles.css';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const irParaLogin = () => {
    console.log('Ir para Login');
    // Lógica de navegação para a tela de login
  };

  return (
    <div className="home">
      <h1 className="home__h1">BEM VINDO AO <span className='gradient-text'>TECNOHUB</span></h1>
      <p className="home__p">O ponto de encontro dos estudantes de tecnologia da Universidade Federal do Ceará. Aqui, o conhecimento é compartilhado livremente! Explore cursos gratuitos, artigos, eBooks, PDFs e recursos criados pelos próprios alunos. Junte-se a nós para aprender, ensinar e colaborar em projetos de TI que moldam o futuro. A comunidade é nossa força, e o aprendizado é ilimitado. Vamos construir juntos!</p>
      <Button className="btn-primary" label="CADASTRE-SE" onClick={() => navigate("/signup")} />
      <Button className="btn-secondary" label="ENTRAR" onClick={irParaLogin} />
    </div>
  );
};

export default Home;

