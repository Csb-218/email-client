import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { setFilter } from '../store/emailSlice';

const EmailFilters: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { filter } = useSelector((state: RootState) => state.email);

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'unread', label: 'Unread' },
    { value: 'read', label: 'Read' },
    { value: 'favorite', label: 'Favorites' },
  ];

  return (
    <div className="flex space-x-4 py-4 px-20 bg-gray-100 ">

      <p className = "py-1">Filter By: </p>
      {filters.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => dispatch(setFilter(value as any))}
          className={`px-4 py-1 rounded-full ${
            filter === value
              ? 'filter-button text-gray-700  border-gray-700'
              : ' '
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default EmailFilters;
