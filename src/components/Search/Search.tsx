import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../../store/query';
import { getQuery } from '../../store';
import { useLocation } from 'react-router-dom';

export const Search = () => {
  const query = useSelector(getQuery);
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <input
      className="header__input"
      type="text"
      placeholder={`Search in ${location.pathname.slice(1)}...`}
      value={query}
      onChange={(event) => dispatch(setQuery(event.target.value))}
    />
  );
};
