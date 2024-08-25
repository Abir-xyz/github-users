import Chart from '../charts/Donut';
import styled from 'styled-components';

const Languages = () => {
  return (
    <Wrapper>
      <div className='content'>
        <Chart />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .content {
    text-align: center;
  }
`;

export default Languages;
