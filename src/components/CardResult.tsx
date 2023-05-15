import './CardResult.css';

interface ResultProps {
  category: string;
  score: number;
  icon: string;
}

const CardResult = ({ category, score, icon }: ResultProps) => {
  return (
    <div className='result'>
      <div className='category-container'>
        <img src={icon} alt={`${category} icon`} />
        <p className='category-text'>{category}</p>
      </div>
      <p className='score'>
        {score} <span>/ 100</span>
      </p>
    </div>
  );
};

export default CardResult;
