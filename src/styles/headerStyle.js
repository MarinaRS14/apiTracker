import styled from 'styled-components';
import bgImg from '../assets/img/pattern-bg.png';

export const InfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 48px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding-top: 23px;
  }
`;

export const HeaderStyle = styled.div`
  width: 100vw;
  height: 280px;
  background-image: url(${bgImg});
  background-size: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 768px) {
    height: calc(166px + 0.5 * 295px);
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-weight: 600;
  font-size: 31px;
  padding-top: 30px;

  @media screen and (max-width: 600px) {
    font-weight: 500;
    font-size: 25px;
    letter-spacing: 0.01em;
    padding-top: 26px;
  }
`;

export const Button = styled.button`
  width: 58px;
  height: 58px;
  background-color: #000;
  border: none;
  border-radius: 0 15px 15px 0;
  &:hover {
    cursor: pointer;
  }
  & > img {
    right: 58px;
  }
`;

export const Input = styled.input`
  width: calc(555px - 58px);
  height: 100%;
  border: none;
  border-radius: 15px 0 0 15px;

  padding-left: 24px;
  font-weight: 400;
  font-size: 18px;
  color: #2b2b2b;
  outline: none;

  @media screen and (max-width: 600px) {
    width: calc(400px - 58px);
  }

  @media screen and (max-width: 480px) {
    width: calc(327px - 58px);
  }

  @media screen and (max-width: 320px) {
    width: calc(250px - 58px);
  }
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  height: 58px;
  margin-top: 28px;
`;
