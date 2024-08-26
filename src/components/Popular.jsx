import Chart from '../charts/Column';
import styled from 'styled-components';

const Popular = () => {
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
    margin: 2rem 0;
  }
  .content div {
    width: 100% !important;
  }
  .content svg {
    border-radius: 5px !important;
    width: 100% !important;
  }
`;

export default Popular;
