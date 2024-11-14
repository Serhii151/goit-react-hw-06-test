import { Label } from 'components/ContactForm/ContactForm.styled';
import React from 'react';
import { FilterInput } from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <Label>
    Find contacts by name
    <FilterInput
      type="text"
      value={filter}
      onChange={handleFilterChange}
      />
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;