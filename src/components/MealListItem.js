import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { truncate } from '../helpers';

const MealListItem = ({ meal }) => (
  <Link
    className="meal"
    to={`/meal/${meal.id}`}
  >
    <img
      className="meal__image"
      src={meal.image}
      alt={meal.title}
    />
    <div className="meal__info">
      <h4 className="meal__info__title">{truncate(meal.title, 35)}</h4>
      <span className="meal__info__category">{meal.category}</span>
    </div>
  </Link>
);

MealListItem.propTypes = {
  meal: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MealListItem;
