import styled from 'styled-components';
import * as palette from '../../styles';

const Main = styled.main`
  background-color: ${palette.COLOR_MAIN};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${palette.COLOR_LIGHT};

  span,
  p {
    text-align: center;
  }

  span {
    font-size: 60px;
    text-shadow: 1px 2px 2px grey;
    font-weight: 600;
  }

  p {
    width: 50vw;
    font-size: 18px;
    line-height: 2rem;

    @media screen and (max-width: 768px) {
      width: 80vw;
    }
  }
`;

export const PageWrapper = (props) => {
  const { children } = props;

  return (
    <>
      <Main>{children}</Main>
    </>
  );
};
