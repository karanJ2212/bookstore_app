import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { checkStatus } from '../redux/categories/categories';

const Category = () => {
  const statusState = useSelector((state) => state.categories.status);
  const dispatch = useDispatch();

  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="category">
      <div className="category-content">
        <div className="category-info">
          <h2 className="category-name">{statusState}</h2>

          <div className="action-buttons">
            <button className="button-outline" type="button" onClick={handleCheckStatus}>
              Check status
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
