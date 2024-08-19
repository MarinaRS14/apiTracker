import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Button, PageWrapper } from '../../shared/ui';

export const StartPage = () => {
  return (
    <PageWrapper>
      <span>
        <Typewriter words={['Welcome to IP Tracker!']} cursor cursorStyle="|" typeSpeed={100} />
      </span>

      <p>
        Use the IP tracker with an IP address to identify and collect details based on the IP
        number. Find place on the map using IP Tracker.
      </p>

      <div>
        <Button text={'get started'} />
        <Button text={'documentation'} outlined />
      </div>
    </PageWrapper>
  );
};