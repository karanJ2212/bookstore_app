// Action type for checking the status
const CHECK_STATUS = 'CHECK_STATUS';

// Initial state
const initialState = {
  categories: [],
  status: '',
};

// Action creators
export function checkStatus() {
  return { type: CHECK_STATUS };
}

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return { ...state, status: 'Under construction' };
    default:
      return state;
  }
}
