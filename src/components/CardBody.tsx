import './CardBody.css';
import CardResult from './CardResult';
import data from '../data.json';

const CardBody = () => {
  const getResults = data.map((item, idx) => {
    return (
      <li className='result-item' key={idx}>
        <CardResult
          category={item.category}
          score={item.score}
          icon={item.icon}
        />
      </li>
    );
  });

  return (
    <div className='card-body'>
      <h1>Summary</h1>
      <ul className='summary-list'>{getResults}</ul>
      <button className='continue-btn'>Continue</button>
    </div>
  );
};

export default CardBody;
