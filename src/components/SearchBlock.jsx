import React, { useEffect, useState } from 'react';
import { Button, Input, Search } from '../styles/headerStyle';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addSearchAction } from '../store/reducers/searchResultReduser';
import { Arrow } from '../assets/svg/arrow';

function SearchBlock() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.search);

  const [searchValue, setSearchValue] = useState('');
  const [userIP, setUserIP] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('https://api.ipify.org?format=json');
      setUserIP(data.ip);

      if (userIP) {
        const { data } = await axios.get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_2bqWkvzhgS2vlV9xeEWBBSjIRn7NN&ipAddress=${userIP}`,
        );
        dispatch(addSearchAction({ ...data }));
      }
    };
    fetchData();
  }, [userIP]);

  const onClickSearch = async (e) => {
    e.preventDefault();

    if (searchValue) {
      const { data } = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_2bqWkvzhgS2vlV9xeEWBBSjIRn7NN&ipAddress=${searchValue}`,
      );
      dispatch(addSearchAction({ ...data }));
      setSearchValue('');
    }
  };

  return (
    <Search>
      <form onSubmit={onClickSearch}>
        <Input
          type="text"
          placeholder="Search for IP"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button type="submit">
          <Arrow color={'#fff'} />
        </Button>
      </form>
    </Search>
  );
}

export default SearchBlock;
