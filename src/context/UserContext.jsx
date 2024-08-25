import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';

// root url
const URL = 'https://api.github.com';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [requests, setRequests] = useState(0);
  const [githubUser, setGithubUser] = useState('');
  const [followers, setFollowers] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const searchUser = async (user) => {
    try {
      const response = await axios(`${URL}/users/${user}`);
      const data = await response.data;
      setGithubUser(data);
      // set followers
      if (data) {
        const { login, followers_url } = data;
        const followersResponse = await axios(`${followers_url}?per_page=100`);
        const followersData = await followersResponse.data;
        if (followersData) {
          setFollowers(followersData);
          console.log(followers);
        }
      }
    } catch (error) {
      console.log(error);
    }
    checkRequest();
  };

  // check remaining requests
  const checkRequest = async () => {
    try {
      const response = await axios(`${URL}/rate_limit`);
      const data = await response.data;
      if (data) {
        const value = data.resources.core.remaining;
        if (value === 0) {
          setErrorMsg('No more requests available now!');
        }
        setRequests(value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useState(() => {
  //   searchUser('gaearon');
  // }, []);

  return (
    <UserContext.Provider
      value={{
        githubUser,
        requests,
        searchUser,
        requests,
        followers,
        errorMsg,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
