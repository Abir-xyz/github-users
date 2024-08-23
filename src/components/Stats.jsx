import styled from 'styled-components';

const Stats = () => {
  return (
    <Wrapper className='section'>
      <div className='content'>
        <div className='container-center'>
          <div className='container'>
            <div className='icon-wrapper'>
              <span className='repos'>
                <i className='fa-solid fa-file'></i>
              </span>
            </div>
            <div className='info-wrapper'>
              <p className='numbers'>34</p>
              <p className='title'>Repos</p>
            </div>
          </div>
          <div className='container'>
            <div className='icon-wrapper'>
              <span className='followers'>
                <i className='fa-solid fa-people-group'></i>
              </span>
            </div>
            <div className='info-wrapper'>
              <p className='numbers'>100</p>
              <p className='title'>Followers</p>
            </div>
          </div>
          <div className='container'>
            <div className='icon-wrapper'>
              <span className='following'>
                <i className='fa-solid fa-user'></i>
              </span>
            </div>
            <div className='info-wrapper'>
              <p className='numbers'>1</p>
              <p className='title'>Following</p>
            </div>
          </div>
          <div className='container'>
            <div className='icon-wrapper'>
              <span className='gists'>
                <i className='fa-solid fa-file-code'></i>
              </span>
            </div>
            <div className='info-wrapper'>
              <p className='numbers'>0</p>
              <p className='title'>Gists</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .icon-wrapper span {
    font-size: 1.5rem;
  }
  .numbers {
    font-size: 1rem;
    font-weight: 700;
  }
  .title {
    font-size: 1rem;
    color: grey;
  }
  .container-center {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
  .container {
    flex: 0 0 calc(50% - 10px);
    background-color: #fff;
    margin: 10px 0;
    padding: 20px 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
  }
  .info-wrapper {
    margin-left: 10px;
  }

  .icon-wrapper span i {
    color: grey;
  }

  /* .followers {
    color: #c8b6ff;
  }
  .following {
    color: #ee9b00;
  }
  .repos {
    color: #386641;
  }
  .gists {
    color: #8c2f39;
  } */

  @media screen and (min-width: 800px) {
    .container {
      flex: 0 0 calc(25% - 10px);
      justify-content: space-around;
    }
    .icon-wrapper span {
      font-size: 1.8rem;
    }
    .info-wrapper .title {
      font-size: 1.1rem;
    }
    .numbers {
      font-size: 1.4rem;
    }
  }
`;

export default Stats;
