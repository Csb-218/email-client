import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { RootState } from '../store/store';
import { selectEmail } from '../store/emailSlice';
import { Email } from '../types/email';

const EmailList: React.FC = () => {
  const dispatch = useDispatch();
  const { emails, selectedEmail, filter } = useSelector(
    (state: RootState) => state.email
  );

  const filteredEmails = emails.filter((email) => {
    switch (filter) {
      case 'read':
        return email.read;
      case 'unread':
        return !email.read;
      case 'favorite':
        return email.favorite;
      default:
        return true;
    }
  });

  const getInitial = (name: string) => name.charAt(0).toUpperCase();

  return (
    <div className="w-full lg:w-1/2 border-r">
      {filteredEmails.map((email: Email) => (
        <div
          key={email.id}
          className={`p-4 border-b cursor-pointer ${
            email.read ? 'bg-gray-50' : 'bg-white'
          } ${selectedEmail === email.id ? 'border-l-4 border-blue-500' : ''}`}
          onClick={() => dispatch(selectEmail(email.id))}
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              {getInitial(email.from.name)}
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-semibold">{email.from.name}</h3>
                <span className="text-sm text-gray-500">
                  {format(new Date(email.date), 'dd/MM/yyyy hh:mm a')}
                </span>
              </div>
              <h4 className="font-medium">{email.subject}</h4>
              <p className="text-gray-600 text-sm">{email.short_description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmailList;
