import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../components/Loader';
import { startSetMeals } from '../actions/meals';
import { filterMeals } from '../helpers';
import MealListItem from '../components/MealListItem';
import './MealList.css';

export const MealsList = ({ meals, startSetMeals }) => {
  const [isLoading, setIsLoading] = useState(meals.length === 0);

  const getTenMeals = (index = 0) => {
    const result = [];
    let i = index;

    while (i < meals.length && i < index + 12) {
      result.push(meals[i]);
      i += 1;
    }

    return result;
  };

  const [localMeals, setLocalMeals] = useState([]);
  const [lastIndex, setLastIndex] = useState(0);

  const handleClick = () => {
    setLocalMeals(
      prevState => [...prevState, ...getTenMeals(lastIndex)],
    );
    setLastIndex(prevIndex => prevIndex + 12);
  };

  useEffect(() => {
    if (meals.length === 0) {
      setIsLoading(true);
      startSetMeals()
        .then(() => {
          setIsLoading(false);
        });
    }
  }, []);

  useEffect(() => {
    setLocalMeals(getTenMeals(0));
    setLastIndex(12);
  }, [meals]);

  return (
    <div className="content-container">
      {
        isLoading
          ? <Loader />
          : (
            <div className="meals-container">
              <div className="meals">
                {
                  localMeals.map(meal => (
                    <MealListItem
                      key={meal.id}
                      meal={meal}
                    />
                  ))
                }
                {
                  (localMeals.length + 1) % 3 === 0
                  && (<div className="meal hidden" />)
                }
              </div>
              {
                meals.length > localMeals.length
                  ? (
                    <button
                      type="button"
                      onClick={handleClick}
                      className="add-button"
                    >
                      Load More
                    </button>
                  )
                  : (
                    <p className="warning">No More Meals</p>
                  )
              }
            </div>
          )
      }
    </div>
  );
};

MealsList.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  startSetMeals: PropTypes.func.isRequired,
};

const mapStateToProps = ({ meals, filters }) => ({
  meals: filterMeals(meals, filters),
});

const mapDispatchToProps = { startSetMeals };

export default connect(mapStateToProps, mapDispatchToProps)(MealsList);
