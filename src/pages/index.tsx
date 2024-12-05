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
  const { currentPage } = useSelector((state: RootState) => state.email);

  useEffect(() => {
    const fetchEmails = async () => {
      const response = await axios.get(
        `https://flipkart-email-mock.now.sh?page=${currentPage}`
      );
      console.log(
        'dispatched',
        `https://flipkart-email-mock.now.sh?page=${currentPage}`,
        response.data
      );
      const data = response.data;
      dispatch(setEmails(data.list));
    };

    fetchEmails();
  }, [currentPage, dispatch]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-4xl font-bold text-white">Email Client</h1>
      </header>

      <EmailFilters />

      <main className="container mx-auto">
        <div className="flex flex-col lg:flex-row bg-white shadow-lg">
          <EmailList />
          <EmailBody />
        </div>

        <div className="flex justify-center p-4 space-x-4">
          <button
            onClick={() => dispatch(setPage(1))}
            className={`px-4 py-2 rounded ${
              currentPage === 1 ? 'bg-blue-500 text-white' : 'bg-white'
            }`}
          >
            Page 1
          </button>
          <button
            onClick={() => dispatch(setPage(2))}
            className={`px-4 py-2 rounded ${
              currentPage === 2 ? 'bg-blue-500 text-white' : 'bg-white'
            }`}
          >
            Page 2
          </button>
        </div>
      </main>
    </div>
  );
}
