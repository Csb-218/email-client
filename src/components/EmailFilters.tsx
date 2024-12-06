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
    <div className="flex space-x-4 py-4 px-20  ">

      <p className = "">Filter By: </p>
      {filters.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => dispatch(setFilter(value as any))}
          className={`px-4  rounded-full  text ${filter === value && 'filter-button border-default ' }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default EmailFilters;
