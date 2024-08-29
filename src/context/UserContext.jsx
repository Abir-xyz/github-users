import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import mockUserData from './MockUser';
import MockFollowers from './MockFollowers';
import MockRepos from './MockRepos';
// root url
const URL = 'https://api.github.com';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [requests, setRequests] = useState(0);
  const [githubUser, setGithubUser] = useState(mockUserData);
  const [followers, setFollowers] = useState(MockFollowers);
  const [repos, SetRepos] = useState(MockRepos);
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
        const reposResponse = await axios(
          `${URL}/users/${login}/repos?per_page=100`
        );
        const reposData = await reposResponse.data;
        if (followersData) {
          setFollowers(followersData);
        }
        if (reposData) {
          SetRepos(reposData);
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
      const value = data.resources.core.remaining;
      if (value === 0) {
        setErrorMsg('No more requests available now!');
      }
      setRequests(value);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkRequest();
  }, []);

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
        repos,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
