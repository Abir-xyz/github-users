import styled from 'styled-components';
import personImg from '../assets/dan.png';
import { useUserContext } from '../context/UserContext';

const UserInfo = () => {
  const { githubUser } = useUserContext();

  return (
    <Wrapper className='section'>
      <div className='container'>
        <div className='title'>
          <p>User</p>
        </div>
        <div className='container-center tiles'>
          <div className='user-personal'>
            <div className='user-img-wrapper'>
              <div className='user-img'>
                <span>
                  <img src={githubUser.avatar_url} className='img' />
                </span>
              </div>
              <div className='user-head'>
                <span className='user-name'>{githubUser.name}</span>
                <span className='user-username'>{githubUser.login}</span>
              </div>
            </div>
            <div>
              <a
                href={`https://github.com/${githubUser.login}`}
                target='_blank'
                className='follow-btn'
              >
                Follow
              </a>
            </div>
          </div>
          <div className='user-office'>
            <div>
              <p className='bio'>{githubUser.bio}</p>
            </div>
          </div>
          <div className='user-more'>
            {githubUser.company ? (
              <div className='user-icons'>
                <span>
                  <i className='fa-regular fa-building'></i>
                </span>
                <span>{githubUser.company}</span>
              </div>
            ) : (
              ''
            )}

            {githubUser.location ? (
              <div className='user-icons'>
                <span>
                  <i className='fa-solid fa-location-dot'></i>
                </span>
                <span>{githubUser.location}</span>
              </div>
            ) : (
              ''
            )}

            {githubUser.blog ? (
              <div className='user-icons'>
                <span>
                  <i className='fa-solid fa-link'></i>
                </span>
                <a href={`${githubUser.blog}`} target='_0'>
                  {githubUser.blog}
                </a>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    margin: 3rem 0;
  }
  .title {
    text-align: left;
    padding-bottom: 8px;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 5px;
  }
  .container-center {
    background-color: #fff;
    padding: 30px 20px;
    border-radius: 5px;
  }
  .img {
    width: 80px;
    border-radius: 50%;
  }
  .user-img-wrapper {
    display: flex;
    align-items: center;
  }
  .user-head {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
  }
  .user-personal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  .user-name {
    font-size: 1.1rem;
    font-weight: 600;
  }
  .user-username {
    color: grey;
    margin-top: 5px;
    font-size: 1rem;
  }
  .user-office {
    margin-bottom: 16px;
  }
  .user-icons {
    padding: 5px 0;
  }

  .user-icons a{
    color: cadetblue;
  }

  .user-icons span i {
    padding-right: 8px;
    font-size: 1.1rem;
  }

  .follow-btn {
    background: rgba(101, 80, 185, 0.35);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.2px);
    -webkit-backdrop-filter: blur(6.2px);
    border: 1px solid rgba(101, 80, 185, 0.35);
    font-size: 1.1rem;
    padding: 6px 16px;
    border-radius: 5px;
    color: #ebebeb;
    cursor: pointer;
    transition: var(--transition);
    text-decoration: none;
  }

  .follow-btn:hover {
    background: rgba(101, 80, 185, 0.808);
  }

  @media screen and (min-width: 800px) {
    .title {
      font-size: 1.3rem;
    }
  }
`;

export default UserInfo;
