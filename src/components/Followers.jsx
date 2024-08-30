import styled from 'styled-components';
import personImg from '../assets/followers.png';
import { useUserContext } from '../context/UserContext';

const Followers = () => {
  const { followers } = useUserContext();

  return (
    <Wrapper className='section'>
      <div className='container'>
        <div className='title'>
          <p>Followers</p>
        </div>
        {followers.length > 0 ? (
          <div className='container-center tiles'>
            <div className='people-wrapper tiles'>
              {/*  */}
              {followers &&
                followers.map((user) => {
                  return (
                    <div className='people' key={user.id}>
                      <div>
                        <img src={user.avatar_url} className='person-img' />
                      </div>
                      <div className='person-info'>
                        <p className='name'>{user.login}</p>
                        <p>
                          <a
                            href={`https://github.com/${user.login}`}
                            target='_0'
                          >
                            {` https://github.com/${user.login}`}
                          </a>
                        </p>
                      </div>
                    </div>
                  );
                })}
              {/*  */}
            </div>
          </div>
        ) : (
          <div>
            <p>No followers</p>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    margin-bottom: 5rem;
  }
  .title {
    text-align: left;
    padding-bottom: 8px;
    font-size: 1.2rem;
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
    padding: 10px 16px;
    height: 323px;
    overflow-y: auto;
    border-radius: 5px;
  }
  .container-center {
    overflow: hidden;
    /* border: 1px solid #fff; */
    scrollbar-color: grey rgba(44, 44, 44, 0.2);
  }
  .name {
    font-weight: 600;
  }
  .person-info p a {
    color: grey;
  }
  @media screen and (min-width: 800px) {
    .title {
      font-size: 1.3rem;
    }
  }
`;

export default Followers;
