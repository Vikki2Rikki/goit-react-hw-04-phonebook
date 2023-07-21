import { useEffect, useState } from 'react';
import { FilterWrap } from './Filter.styled';
import PropTypes from 'prop-types';
import React from 'react';

const Filter = ({ handelChangeFilter }) => {
  const [filter, setFilter] = useState('');

  const handleChange = evt => {
    const filterText = evt.target.value;
    setFilter(filterText);
  };

  useEffect(() => {
    handelChangeFilter(filter);
  }, [handelChangeFilter, filter]);

  // або варіант 2
  // const handleChange = evt => {
  //   const filterText = evt.target.value;
  //   setFilter(filterText);
  //   handelChangeFilter(filterText);
  // };

  return (
    <FilterWrap>
      <label>Find contacts by name</label>
      <input type="text" name="filter" value={filter} onChange={handleChange} />
    </FilterWrap>
  );
};

export default Filter;

Filter.propTypes = { onChangeFilter: PropTypes.func };
