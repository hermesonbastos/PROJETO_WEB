import React from 'react';
import './styles.css';
import Button from '../../components/Button/Button';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="home">
      <h1 className="home__h1">BEM VINDO AO <span className='gradient-text'>TECNOHUB</span></h1>
      <p className="home__p">O ponto de encontro dos estudantes de tecnologia! Aqui, o conhecimento é compartilhado livremente! Explore cursos gratuitos, artigos, eBooks, PDFs e recursos criados pelos próprios alunos. Junte-se a nós para aprender, ensinar e colaborar em projetos de TI que moldam o futuro. A comunidade é nossa força, e o aprendizado é ilimitado. Vamos construir juntos!</p>
      <Button className="btn-primary" label="CADASTRE-SE" onClick={() => navigate("/signup")} />
      <Button className="btn-secondary" label="ENTRAR" onClick={() => navigate("/login")} />
    </div>
  );
};

export default Home;

