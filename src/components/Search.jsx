import styled from 'styled-components';

const Search = () => {
  return (
    <Wrapper className='section'>
      <div className='search-wrapper'>
        <div className='search-form'>
          <form className='form'>
            <input
              type='text'
              className='search-input'
              placeholder='Enter Github User'
            />
            <button type='submit' className='btn'>
              <span className='btn-text'>Serach</span>
              <span>
                <i class='fa-solid fa-magnifying-glass'></i>
              </span>
            </button>
          </form>
        </div>
        <div className='search-request'>
          <p className='requests'>
            Requests : <span id='remaining-request'>10 / 50</span>
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
    border-radius: 5px;
    outline: none;
    border: 1px solid;
    font-size: 1rem;
  }
  .btn {
    font-size: 1rem;
    padding: 5px 20px;
    border-radius: 5px;
    border: none;
    background-color: var(--themeClr);
    color: #fff;
    cursor: pointer;
    transition: var(--transition);
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 20px;
    display: flex;
    align-items: center;
  }
  .btn:hover {
    background-color: var(--hoverClr);
  }
  .btn-text{
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
    font-size: 1.1rem;
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
