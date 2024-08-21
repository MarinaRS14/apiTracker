import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Button, PageWrapper } from '../../shared/ui';
import { Link } from 'react-router-dom';

export const StartPage = () => {
  const DOC_URL = process.env.REACT_APP_DOC_URL;

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
        <Link to={'/main'}>
          <Button text={'get started'} />
        </Link>
        <a href={DOC_URL} target={'_blank'} rel="noreferrer">
          <Button text={'documentation'} outlined />
        </a>
      </div>
    </PageWrapper>
  );
};
