import styled from 'styled-components';
import personImg from '../assets/followers.png';

const Followers = () => {
  return (
    <Wrapper className='section'>
      <div className='container'>
        <div className='title'>
          <p>Followers</p>
        </div>
        <div className='container-center'>
          <div className='people-wrapper'>
            <div className='people'>
              <div>
                <img src={personImg} className='person-img' />
              </div>
              <div className='person-info'>
                <p className='name'>Charles</p>
                <p>
                  <a href='#' target='_0'>
                    https://github.com/charlenopires
                  </a>
                </p>
              </div>
            </div>
            {/* delete later */}
            <div className='people'>
              <div>
                <img src={personImg} className='person-img' />
              </div>
              <div className='person-info'>
                <p className='name'>Charles</p>
                <p>
                  <a href='#' target='_0'>
                    https://github.com/charlenopires
                  </a>
                </p>
              </div>
            </div>
            <div className='people'>
              <div>
                <img src={personImg} className='person-img' />
              </div>
              <div className='person-info'>
                <p className='name'>Charles</p>
                <p>
                  <a href='#' target='_0'>
                    https://github.com/charlenopires
                  </a>
                </p>
              </div>
            </div>
            <div className='people'>
              <div>
                <img src={personImg} className='person-img' />
              </div>
              <div className='person-info'>
                <p className='name'>Charles</p>
                <p>
                  <a href='#' target='_0'>
                    https://github.com/charlenopires
                  </a>
                </p>
              </div>
            </div>
            <div className='people'>
              <div>
                <img src={personImg} className='person-img' />
              </div>
              <div className='person-info'>
                <p className='name'>Charles</p>
                <p>
                  <a href='#' target='_0'>
                    https://github.com/charlenopires
                  </a>
                </p>
              </div>
            </div>
            <div className='people'>
              <div>
                <img src={personImg} className='person-img' />
              </div>
              <div className='person-info'>
                <p className='name'>Charles</p>
                <p>
                  <a href='#' target='_0'>
                    https://github.com/charlenopires
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .title {
    text-align: left;
    padding-bottom: 8px;
    font-size: 1.3rem;
    font-weight: 600;
    /* background-color: #fff; */
    border-radius: 5px;
  }
  .person-img {
    width: 50px;
    border-radius: 50%;
  }
  .people {
    display: flex;
    align-items: center;
    margin: 16px 0;
  }
  .person-info {
    margin-left: 16px;
  }
  .people-wrapper {
    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: 30px 16px;
    height: 323px;
    overflow-y: auto;
    border-radius: 5px;
  }
  .container-center {
    overflow: hidden;
    border: 1px solid #fff;
    border-radius: 5px;
  }
  .name {
    font-weight: 600;
  }
  .person-info p a {
    color: grey;
  }
`;

export default Followers;
