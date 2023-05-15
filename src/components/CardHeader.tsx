import './SummaryCard.css';

const CardHeader = () => {
  return (
    <div className='container header-bg'>
      <div className='card-header'>
        <h1>Your Result</h1>
        <div className="card-result">
          <h2>76<span><br />of 100</span></h2>
        </div>
        <div className='header-text'>
          <h3>Great</h3>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
