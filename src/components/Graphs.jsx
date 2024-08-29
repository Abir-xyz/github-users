import styled from 'styled-components';
import {
  LanguagesByPie,
  PopularByColumn,
  StarsByDoughnut,
  ForkedByBar,
} from '../charts/index';
import { useUserContext } from '../context/UserContext';

const Graphs = () => {
  const { repos } = useUserContext();

  // Statistics
  const DataOfLanguages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) {
      return total;
    }
    if (!total[language]) {
      total[language] = {
        label: language,
        value: 1,
        stars: stargazers_count,
      };
    } else {
      total[language].value += 1;
      total[language].stars += stargazers_count;
    }
    return total;
  }, {});

  // stats 2
  let { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = { label: name, value: stargazers_count };
      total.forks[forks] = { label: name, value: forks };
      return total;
    },
    {
      stars: {},
      forks: {},
    }
  );

  stars = Object.values(stars).slice(-5).reverse();
  forks = Object.values(forks).slice(-5).reverse();

  // Most Used Languages/ Pie
  const languagesData = Object.values(DataOfLanguages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  // stars / doughnut
  const starsData = Object.values(DataOfLanguages)
    .sort((a, b) => b.stars - a.stars)
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);

  // Most Popular Repos

  return (
    <Wrapper className='section'>
      <div className='container'>
        <LanguagesByPie data={languagesData} />
        <PopularByColumn data={stars} />
        <StarsByDoughnut data={starsData} />
        <ForkedByBar data={forks} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container div {
    width: 100% !important;
    margin: 2.8rem 0;
  }

  .container svg {
    border-radius: 5px !important;
    width: 100% !important;
  }
`;

export default Graphs;
