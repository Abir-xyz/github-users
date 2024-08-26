import Chart from '../charts/Bars';
import styled from 'styled-components';

const MostForked = () => {
  return (
    <Wrapper className='section'>
      <div className='content'>
        <Chart />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .content div {
    width: 100% !important;
  }
  .content svg {
    border-radius: 5px !important;
    width: 100% !important;
  }
`;

export default MostForked;
