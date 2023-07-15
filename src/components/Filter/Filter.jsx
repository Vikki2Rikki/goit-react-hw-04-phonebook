import { useState } from 'react';
import { FilterWrap } from './Filter.styled';
import PropTypes from 'prop-types';
import React from 'react';

const Filter = ({ handelChangeFilter }) => {
  const [filter, setFilter] = useState('');

  const handleChange = evt => {
    console.log('evt.target.value', evt.target.value);
    setFilter(evt.target.value);
    handelChangeFilter(filter);
  };

  return (
    <FilterWrap>
      <label>Find contacts by name</label>
      <input type="text" name="filter" value={filter} onChange={handleChange} />
    </FilterWrap>
  );
};

export default Filter;

Filter.propTypes = { onChangeFilter: PropTypes.func };
