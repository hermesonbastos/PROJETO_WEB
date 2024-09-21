import React from 'react';
import './css/home.css';
import Button from './components/Button';

const Home = () => {
  const irParaCadastro = () => {
    console.log('Ir para Cadastro');
    // Lógica de navegação para a tela de cadastro
  };

  const irParaLogin = () => {
    console.log('Ir para Login');
    // Lógica de navegação para a tela de login
  };

  return (
    <div className="home">
      <h1 className="home__h1">BEM VINDO AO -- </h1>
      <p className="home__p">Encontre cursos gratuitos e Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac felis vel arcu consequat gravida. Nulla facilisi. Nam id mauris vitae libero fermentum aliquam. Phasellus sodales nunc eu mi ultrices, ut vulputate sapien venenatis. Curabitur scelerisque justo sed justo dapibus, a viverra orci tincidunt. Mauris ac massa in enim mollis placerat. Donec in nibh dui. Quisque vehicula urna at purus euismod, id sagittis nisl porttitor. Cras convallis accumsan turpis at vehicula. Vivamus placerat nisl orci, vel dapibus mauris condimentum id.</p>
      <Button className="home__btn__c" label="CADASTRE-SE" onClick={irParaCadastro} />
      <Button className="home__btn__e" label="ENTRAR" onClick={irParaLogin} />
    </div>
  );
};

export default Home;

