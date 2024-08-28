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
  // console.log(repos[0].language);

  const data = [
    {
      label: 'Ice Cream Sandwich',
      value: '1067550000',
    },
    {
      label: 'Jelly Bean',
      value: '572550000',
    },
    {
      label: 'Kitkat',
      value: '544500000',
    },
    {
      label: 'Lollipop',
      value: '290760000',
    },
    {
      label: 'Marshmallow',
      value: '197670000',
    },
  ];

  return (
    <Wrapper className='section'>
      <div className='container'>
        <LanguagesByPie data={data} />
        <PopularByColumn data={data} />
        <StarsByDoughnut data={data} />
        <ForkedByBar data={data} />
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
