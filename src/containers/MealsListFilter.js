import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setTextFilter, setCategoryFilter } from '../actions/filters';
import './MealsListFilter.css';

export const MealsListFilter = ({
  categories, text, category, setTextFilter, setCategoryFilter,
}) => {
  const handleTextChange = event => {
    setTextFilter(event.target.value);
  };

  const handleCategoryChange = event => {
    setCategoryFilter(event.target.value);
  };

  const handleClearClick = () => {
    setTextFilter('');
    setCategoryFilter('');
  };

  return (
    <div className="content-container">
      <div className="filter">
        <input
          type="text"
          placeholder="Search by Title"
          className="filter__input"
          value={text}
          onChange={handleTextChange}
        />
        <select
          onChange={handleCategoryChange}
          value={category}
          className="filter__selector"
        >
          <option value="">All</option>
          {
            categories.map(category => (
              <option key={category}>
                {category}
              </option>
            ))
          }
        </select>
        <button
          className="filter__button"
          type="button"
          onClick={handleClearClick}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

MealsListFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  setTextFilter: PropTypes.func.isRequired,
  setCategoryFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ categories, filters }) => ({
  categories,
  text: filters.text,
  category: filters.category,
});

const mapDispatchToProps = { setCategoryFilter, setTextFilter };

export default connect(mapStateToProps, mapDispatchToProps)(MealsListFilter);
