import { useState } from 'react';
import styled from 'styled-components';
import { useUserContext } from '../context/UserContext';

const Search = () => {
  const [user, setUser] = useState('');
  const { searchUser, requests, errorMsg } = useUserContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchUser(user);
  };

  return (
    <Wrapper className='section'>
      <div>{errorMsg && <p className='err'>{errorMsg}</p>}</div>
      <div className='search-wrapper'>
        <div className='search-form'>
          <form className='form' onSubmit={handleSubmit}>
            <input
              type='text'
              className='search-input'
              placeholder='Enter Github User'
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
            <button type='submit' className='btn global-btn'>
              <span className='btn-text'>Search</span>
              <span>
                <i className='fa-solid fa-magnifying-glass'></i>
              </span>
            </button>
          </form>
        </div>
        <div className='search-request'>
          <p className='requests'>
            Requests : <span id='remaining-request'>{`${requests} / 60`}</span>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .search-wrapper {
    margin-bottom: 3rem;
  }
  .search-input {
    width: 100%;
    padding: 5px;
    border: 1px solid var(--violet);
    border-radius: 5px;
    outline: none;
    font-size: 1rem;
    background: transparent;
    color: var(--txtWhite);
  }
  .btn {
    display: flex;
    align-items: center;
    margin-left: 16px;
  }
  .btn-text {
    margin-right: 10px;
  }
  .form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: #ebebeb; */
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .requests {
    font-size: 1.1rem !important;
  }

  .err {
    color: red;
    letter-spacing: 1px;
  }

  @media screen and (min-width: 800px) {
    .search-input {
      padding: 10px;
      font-size: 1.1rem;
    }
    .btn {
      padding: 10px 20px;
    }
    .requests {
      font-size: 1.4rem;
    }
  }

  @media screen and (min-width: 768px) {
    .search-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    .search-form {
      width: 70%;
    }
  }
  @media screen and (min-width: 1300px) {
    .search-form {
      width: 78%;
    }
  }
`;

export default Search;
