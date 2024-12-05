import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { RootState } from '../store/store';
import { toggleFavorite } from '../store/emailSlice';
import { Email_Body } from '../types/email';

const EmailBody: React.FC = () => {
  const dispatch = useDispatch();
  const { emails, selectedEmail } = useSelector(
    (state: RootState) => state.email
  );
  const [emailBody, setEmailBody] = useState<Email_Body | null>(null);

  const selectedEmailData = emails.find((email) => email.id === selectedEmail);

  useEffect(() => {
    const fetchEmailBody = async () => {
      if (selectedEmail) {
        const response = await fetch(
          `https://flipkart-email-mock.now.sh/?id=${selectedEmail}`
        );
        const data = await response.json();
        setEmailBody(data);
      }
    };

    fetchEmailBody();
  }, [selectedEmail]);

  if (!selectedEmail || !selectedEmailData || !emailBody) {
    return (
      <div className="w-full lg:w-1/2 p-8 flex items-center justify-center text-gray-500">
        Select an email to view its contents
      </div>
    );
  }

  return (
    <div className="w-full lg:w-1/2 p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{selectedEmailData.subject}</h2>
        <button
          onClick={() => dispatch(toggleFavorite(selectedEmail))}
          className={`px-4 py-2 rounded ${
            selectedEmailData.favorite
              ? 'bg-yellow-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          {selectedEmailData.favorite ? 'Favorited' : 'Mark as Favorite'}
        </button>
      </div>
      <div className="mb-4 text-gray-600">
        {format(new Date(selectedEmailData.date), 'dd/MM/yyyy hh:mm a')}
      </div>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: emailBody.body }}
      />
    </div>
  );
};

export default EmailBody;
