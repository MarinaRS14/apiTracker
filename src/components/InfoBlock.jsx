import React from 'react';
import { InfoContainer, TitleInfo, Text, InfoCell } from '../shared/styles';
import { useSelector } from 'react-redux';

function InfoBlock() {
  const { ip, location, timezone, isp } = useSelector((state) => state.search);

  return (
    <InfoContainer>
      <InfoCell>
        <TitleInfo>IP ADDRESS</TitleInfo>
        {ip ? <Text>{ip}</Text> : <Text>&mdash;</Text>}
      </InfoCell>
      <InfoCell>
        <TitleInfo>LOCATION</TitleInfo>
        {ip ? <Text>{location}</Text> : <Text>&mdash;</Text>}
      </InfoCell>
      <InfoCell>
        <TitleInfo>TIMEZONE</TitleInfo>
        {ip ? <Text>{timezone}</Text> : <Text>&mdash;</Text>}
      </InfoCell>
      <InfoCell>
        <TitleInfo>ISP</TitleInfo>
        {ip ? <Text>{isp}</Text> : <Text>&mdash;</Text>}
      </InfoCell>
    </InfoContainer>
  );
}

export default InfoBlock;
