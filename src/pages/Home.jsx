import styled from 'styled-components';
import { Navbar, Search, Content } from '../components/index';

const Home = () => {
  return (
    <Wrapper className='section'>
      <Navbar />
      <div className='contents-wrapper'>
        <Search />
        <Content />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contents-wrapper {
    max-width: 90vw;
    margin: 3rem auto;
  }

  @media screen and (min-width: 992px) {
    .contents-wrapper {
      max-width: 80vw;
      margin: 5rem auto;
    }
  }
  @media screen and (min-width: 1400px) {
    .contents-wrapper {
      max-width: 60vw;
      margin: 5rem auto;
    }
  }
`;

export default Home;
