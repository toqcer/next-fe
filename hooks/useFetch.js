import { useReducer, useState, useRef, useEffect } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return;
    case 'fetching':
      return;
    default:
      return state;
  }
}

const initialState = {
  data: [{}],
};

export default async function useFetch() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    // do Something later
  }, []);
}
