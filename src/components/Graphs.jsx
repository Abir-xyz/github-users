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
        <LanguagesByPie data={languagesData} className='chart pie' />
        <PopularByColumn data={stars} className='chart column' />
        <StarsByDoughnut data={starsData} className='chart doughnut' />
        <ForkedByBar data={forks} className='chart bar' />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container div {
    width: 100% !important;
    margin: 2rem 0 !important;
  }

  .container svg {
    width: 100% !important;
  }

  .container svg {
    background-color: rgba(44, 44, 44, 0.2) !important;
    border-radius: 8px !important;
  }

  @media screen and (min-width: 992px) {
    .container {
      display: grid;
      grid-template-columns: 40% 60%;
      grid-template-rows: 50% 50%;
      gap: 0 16px;
      height: 100vh;
    }

    .chart {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 16px;
    }

    .column,
    .bar {
      grid-column: 1;
    }

    .pie,
    .doughnut {
      grid-column: 2;
    }

    .column,
    .bar {
      grid-row: span 2;
    }

    .pie,
    .doughnut {
      grid-row: span 1;
    }
  }
`;

export default Graphs;
