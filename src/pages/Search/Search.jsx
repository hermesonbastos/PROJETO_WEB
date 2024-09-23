import React from 'react';
import './styles.css';
import lupaImg from '../../assets/lupa.png';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  return (
    <div className="search">
      <div className="search__container">
        <h1 className="search__title">Áreas de Conhecimento</h1>
      </div>
      <div className="search__bar">
          <Input 
            type="text" 
            name="search" 
            placeholder="ex: react" 
            className="search-input" 
          />
          <Button label={<img src={lupaImg} alt="Lupa" className="lupa-icon" />} className="btn-search" />
        </div>
    </div>
  );
};

export default Search;
