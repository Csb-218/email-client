import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { RootState } from '../store/store';
import { toggleFavorite ,selectEmail } from '../store/emailSlice';
import { Email_Body } from '../types/email';
import { getInitial } from '../utils/helpers';
import { Loader } from './Loader';


const EmailBody: React.FC = () => {
  const dispatch = useDispatch();
  const { readEmails,emails,unReadEmails, selectedEmail , filter} = useSelector(
    (state: RootState) => state.email
  );
  const [emailBody, setEmailBody] = useState<Email_Body | null>(null);

  const selectedEmailData = readEmails.find((email) => email.id === selectedEmail);

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

 


  if (!selectedEmail || !selectedEmailData || !emailBody  ) {
    return (
      <div className="w-full lg:w-2/3 h-screen p-8 flex items-center justify-center text-gray-500">
        <Loader/>
      </div>
    );
  }

  return (
    <>
      <div className="w-full lg:w-2/3 h-full flex p-8 border-default rounded-lg bg-white ">

        {/* email logo */}
        <section className="w-1/12">
          <span className="w-12 h-12  rounded-full accent flex items-center justify-center  text-white font-bold">
            {getInitial(selectedEmailData.from.name)}
          </span>
        </section>

        {/* email body and details */}
        <section className=' w-10/12  overflow-scroll no-scrollbar'>

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-default">{selectedEmailData.subject}</h2>
            <button
              onClick={() => dispatch(toggleFavorite(selectedEmail))}
              className={`px-4 py-2 rounded-full  ${selectedEmailData.favorite
                ? 'accent-text'
                : 'accent text-white'
                }`}
            >
              {selectedEmailData.favorite ? 'Favorited' : 'Mark as Favorite'}
            </button>
          </div>


          <div className="my-4 text-default text-sm">
            {format(new Date(selectedEmailData.date), 'dd/MM/yyyy hh:mm a')}
          </div>

          <div
            className="prose max-w-none "
            dangerouslySetInnerHTML={{ __html: emailBody.body }}
          >
          </div>
        </section>

      </div>
    </>

  );
  
};

export default EmailBody;
