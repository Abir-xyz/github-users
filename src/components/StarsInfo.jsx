import Chart from '../charts/Pie';
import styled from 'styled-components';

const StarsInfo = () => {
  return (
    <Wrapper className='section'>
      <div className='content'>
        <Chart />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .content {
    text-align: center;
    margin: 2rem 0;
  }
`;

export default StarsInfo;
