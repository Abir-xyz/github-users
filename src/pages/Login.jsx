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
          <button className='global-btn' onClick={() => loginWithRedirect()}>
            <span className='btn-text'>Login / Sign Up</span>
            <span>
              <i className='fa-solid fa-arrow-right-to-bracket'></i>
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

  .btn-text {
    margin-right: 10px;
  }
`;

export default Login;
