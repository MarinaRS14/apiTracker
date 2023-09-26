import React from 'react';
import { HeaderStyle, Title, InfoWrapper } from '../styles/headerStyle';

import InfoBlock from './InfoBlock';
import SearchBlock from './SearchBlock';

function Header() {
  return (
    <HeaderStyle>
      <Title>IP Address Tracker</Title>
      <SearchBlock />
      <InfoWrapper>
        <InfoBlock />
      </InfoWrapper>
    </HeaderStyle>
  );
}

export default Header;
