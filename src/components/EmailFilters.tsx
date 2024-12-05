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
    <div className="flex space-x-4 p-4 bg-gray-100">
      {filters.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => dispatch(setFilter(value as any))}
          className={`px-4 py-2 rounded ${
            filter === value
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default EmailFilters;
