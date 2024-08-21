import styled from 'styled-components';
import loginSvg from '../assets/loginSvg.svg';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper className='section'>
      <div className='login-center'>
        <div className='img-wrapper'>
          <img src={loginSvg} className='login-img' />
        </div>
        <div className='btn-wrapper'>
          <button className='login-btn' onClick={() => loginWithRedirect()}>
            <span className='btn-text'>Login / Sign Up</span>
            <span>
              <i class='fa-solid fa-arrow-right-to-bracket'></i>
            </span>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .login-center {
    max-width: 90vw;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .login-img {
    width: 100%;
  }
  .btn-wrapper {
    margin-top: 3rem;
  }
  .login-btn {
    background: var(--themeClr);
    color: #fff;
    font-size: 1.1rem;
    padding: 8px 18px;
    border-radius: 10rem;
    border: none;
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    align-items: center;
  }
  .btn-text {
    margin-right: 10px;
  }
  .login-btn:hover {
    background-color: var(--hoverClr);
  }
`;

export default Login;
