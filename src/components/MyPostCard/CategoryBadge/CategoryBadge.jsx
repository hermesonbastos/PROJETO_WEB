import './styles.css';

const Categorybadge = ({ category }) => {
  return <div className="category-container">
    <span className='category-span'>{category}</span>
  </div>
}

export default Categorybadge;