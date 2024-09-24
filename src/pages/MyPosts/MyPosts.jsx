import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

const MyPosts = () => {
  const navigate = useNavigate();

  const handlePublic = () => {
    navigate('/publicar');
  }

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <div className="myposts">
      <div className="myposts-container">
        <div className="myposts-header">
          <h1 className="myposts-title">Minhas Publicações</h1>
          <div className="button-group">
            <button 
              className="btn-public" 
              onClick={handlePublic}> 
              + Publicar
            </button>
            <button 
              className="btn-public-back" 
              onClick={handleBack}> 
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPosts;