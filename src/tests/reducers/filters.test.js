import filtersReducer from '../../reducers/filters';

const defaultFilter = {
  text: '',
  category: '',
};

it('should initialize state correclty', () => {
  const action = {
    type: '@@INIT',
  };

  const state = filtersReducer(undefined, action);

  expect(state).toEqual(defaultFilter);
});

it('should update text state with the new value', () => {
  const newText = 'new Text';
  const action = {
    type: 'SET_TEXT_FILTER',
    text: newText,
  };

  const state = filtersReducer(defaultFilter, action);

  expect(state.text).toBe(newText);
});

it('should update category state with the new value', () => {
  const newCategory = 'new category';
  const action = {
    type: 'SET_CATEGORY_FILTER',
    category: newCategory,
  };

  const state = filtersReducer(defaultFilter, action);

  expect(state.category).toBe(newCategory);
});
