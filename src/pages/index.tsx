import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setEmails, setPage } from '../store/emailSlice';
import EmailList from '../components/EmailList';
import EmailBody from '../components/EmailBody';
import EmailFilters from '../components/EmailFilters';
import axios from 'axios';

export default function Home() {

  const dispatch = useDispatch();
  const { currentPage, selectedEmail } = useSelector((state: RootState) => state.email);

  useEffect(() => {
    const fetchEmails = async () => {
      const response = await axios.get(
        `https://flipkart-email-mock.now.sh?page=${currentPage}`
      );
      const data = response.data;
      dispatch(setEmails(data.list));
    };

    fetchEmails();
  }, [currentPage, dispatch]);

  return (
    <div className="max-h-screen pt-3 ">
      {/* <header className="accent text-white p-4">
        <h1 className="text-4xl font-bold text-white">Email Client</h1>
      </header> */}

      {/* email filters */}
      <EmailFilters />

      
      <main className="container mx-auto">
        {/* email list and body */}
        <div className="flex flex-col lg:flex-row h-screen overflow-scroll space-x-5">
          <EmailList />
          {selectedEmail && <EmailBody />}

        </div>

      {/* page buttons */}
      {
        // filter === 'all' && 
        <div className="flex justify-center p-4 space-x-4">
          <button
            onClick={() => dispatch(setPage(1))}
            className={`px-4 py-2 rounded-full ${
              currentPage === 1 ? 'accent text-white' : 'bg-white'
            }`}
          >
             1
          </button>
          <button
            onClick={() => dispatch(setPage(2))}
            className={`px-4 py-2 rounded-full ${
              currentPage === 2 ? 'accent text-white' : 'bg-white'
            }`}
          >
             2
          </button>
        </div>
      }
        
      </main>
    </div>
  );
}
