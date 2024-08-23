import styled from 'styled-components';
import personImg from '../assets/dan.png';

const UserInfo = () => {
  return (
    <Wrapper className='section'>
      <div className='container'>
        <div className='title'>
          <p>User</p>
        </div>
        <div className='container-center'>
          <div className='user-personal'>
            <div className='user-img-wrapper'>
              <div className='user-img'>
                <span>
                  <img src={personImg} className='img' />
                </span>
              </div>
              <div className='user-head'>
                <span className='user-name'>Dan</span>
                <span className='user-username'>@john doe</span>
              </div>
            </div>
            <div>
              <button className='follow-btn'>Follow</button>
            </div>
          </div>
          <div className='user-office'>
            <div>
              <p className='bio'>Creator of Coding Addict</p>
            </div>
          </div>
          <div className='user-more'>
            <div className='user-icons'>
              <span>
                <i class='fa-regular fa-building'></i>
              </span>
              <span>Meta</span>
            </div>
            <div className='user-icons'>
              <span>
                <i class='fa-solid fa-location-dot'></i>
              </span>
              <span>Earth</span>
            </div>
            <div className='user-icons'>
              <span>
                <i class='fa-solid fa-link'></i>
              </span>
              <a href='https://johnsmilga.com/' target='_0'>
                www.johnsmilga.com
              </a>
            </div>
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
    font-size: 1.3rem;
    font-weight: 600;
    /* background-color: #fff; */
    border-radius: 5px;
  }
  .container-center {
    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
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
  .user-icons span i {
    padding-right: 8px;
    font-size: 1.1rem;
  }
  .follow-btn {
    background: transparent;
    border: 1px solid var(--themeClr);
    font-size: 1rem;
    padding: 6px 12px;
    font-weight: 500;
    color: var(--themeClr);
    border-radius: 5px;
    transition: var(--transition);
    cursor: pointer;
  }
  .follow-btn:hover {
    background-color: var(--hoverClr);
    color: #fff;
  }
`;

export default UserInfo;
