import styled from 'styled-components';

export const InfoContainer = styled.div`
  width: calc(100% - 330px);
  height: 160px;
  border-radius: 15px;
  background: #ffffff;
  position: absolute;
  z-index: 100;
  padding: 35px 0 35px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1200px) {
    width: calc(100% - 100px);
  }
  @media screen and (max-width: 992px) {
    width: calc(100% - 25px);
  }
  @media screen and (max-width: 768px) {
    padding: 25px 0 25px 0;
    grid-template-columns: 1fr;
    height: 295px;
  }
  @media screen and (max-width: 480px) {
    width: 327px;
  }
  @media screen and (max-width: 320px) {
    width: 250px;
  }
`;

export const InfoCell = styled.div`
  position: relative;
  padding: 0 32px 0 32px;
  &:after {
    content: '';
    position: absolute;
    top: 7px;
    left: 0;
    right: 0;
    bottom: 7px;
    border-right: 1px solid #969696;
  }
  &:last-child:after {
    border-right: none;
  }

  @media screen and (max-width: 992px) {
    padding: 0 20px 0 20px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
    padding-bottom: 24px;

    &:last-child {
      padding-bottom: 0;
    }

    &:after {
      content: none;
    }
  }
`;

export const TitleInfo = styled.h2`
  color: #969696;
  font-weight: 600;
  font-size: 13px;
  text-transform: uppercase;
  line-height: 15px;
  letter-spacing: 0.1em;

  @media screen and (max-width: 768px) {
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.15em;
  }
`;

export const Text = styled.h2`
  color: #2b2b2b;
  font-weight: 500;
  font-size: 26px;
  line-height: 31px;
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 20px;
    line-height: 24px;
  }
`;
