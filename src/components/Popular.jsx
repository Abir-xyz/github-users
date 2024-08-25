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
    text-align: center;
    margin: 2rem 0;
  }
`;

export default Popular;
