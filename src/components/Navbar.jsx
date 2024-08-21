import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import { useUserContext } from '../context/UserContext';
import { useEffect } from 'react';

const Navbar = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Wrapper className='section'>
      <div className='nav-container'>
        <div className='nav-center'>
          <div className='user-info-wrapper'>
            {isAuthenticated && (
              <div className='greet-wrapper'>
                <div>
                  <img
                    src={user.picture}
                    alt={user.name}
                    className='user-img'
                  />
                </div>
                <div>
                  <p className='greet-text'>Hi, {user.name}</p>
                </div>
              </div>
            )}
          </div>
          <div className='logout-wrapper'>
            <button
              className='logout-btn'
              onClick={() => {
                logout({ logoutParams: { returnTo: window.location.origin } });
              }}
            >
              <span className='logout-text'>Logout</span>
              <span>
                <i className='fa-solid fa-right-from-bracket'></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .nav-container {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: 20px;
  }

  .nav-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 1rem;
  }
  .greet-text {
    font-size: 1.1rem;
  }
  .greet-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .logout-wrapper {
    margin-left: 50px;
  }
  .logout-btn {
    background: var(--themeClr);
    color: #fff;
    padding: 8px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    transition: var(--transition);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .logout-btn:hover {
    background-color: var(--hoverClr);
  }
  .logout-text {
    margin-right: 10px;
  }
`;

export default Navbar;
