import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startSetMealDetails, emptyMealDetails } from '../actions/mealDetails';
import './MealPage.css';

export const MealPage = ({
  match, startSetMealDetails, mealDetails: {
    title, area, youtubeVideo, instructions, image, ingredients,
  },
}) => {
  useEffect(() => {
    startSetMealDetails(match.params.id);

    return () => {
      emptyMealDetails();
    };
  }, []);

  return (
    <div className="content-container page-container">
      <div
        className="heading"
      >
        <h1
          className="title"
        >
          {title}
        </h1>
        <p
          className="area"
        >
          {`${area} Food`}
        </p>
      </div>
      {
        youtubeVideo
        && (
          <div className="video-container">
            <iframe
              className="video"
              title={title}
              src={youtubeVideo}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="headline">
              {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
              👇 👇 👇 Instructions below 👇 👇 👇
            </div>
          </div>
        )
      }
      <div
        className="preparation"
      >
        <img
          className="image"
          src={image}
          alt={`${title} thumbnail`}
        />
        <div
          className="ingredients"
        >
          <h4>Ingredients</h4>
          <ul>
            {
              ingredients.map(item => (
                <li
                  key={item}
                  className="ingredients__item"
                >
                  {item}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <div
        className="instructions"
      >
        <h1>Instructions</h1>
        <p>
          {instructions}
        </p>
      </div>
    </div>
  );
};

MealPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  startSetMealDetails: PropTypes.func.isRequired,
  mealDetails: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = ({ mealDetails }) => ({
  mealDetails,
});

const mapDispatchToProps = { startSetMealDetails, emptyMealDetails };

export default connect(mapStateToProps, mapDispatchToProps)(MealPage);
