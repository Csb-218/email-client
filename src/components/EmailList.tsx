import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { RootState } from '../store/store';
import { selectEmail } from '../store/emailSlice';
import { Email } from '../types/email';
import { getInitial } from '../utils/helpers';


const EmailList: React.FC = () => {


  const [filteredEmails,setfilteredEmails] = React.useState<Email[]>([])

  const dispatch = useDispatch();
  const { emails, selectedEmail, filter ,readEmails,favouritedEmails} = useSelector(
    (state: RootState) => state.email
  );


  function ifRead(thisEmail:Email){

    const isRead = readEmails.find(email => email.id === thisEmail.id)
    if(isRead)return true
    else return false
  }

  function ifFavourite(thisEmail:Email){

    const isRead = favouritedEmails.find(email => email.id === thisEmail.id)
    if(isRead)return true
    else return false
  }

  React.useEffect(()=>{

    switch(filter){
      case('unread'):

        const unreadEmails = emails.filter(email => readEmails.find(read_email => read_email.id === email.id))
        setfilteredEmails(unreadEmails);
      case('favorite'):
        setfilteredEmails(favouritedEmails);
      case('read'):
        setfilteredEmails(readEmails);
      default:
        setfilteredEmails(emails);

    }


  },[filter])


  

  return (
    <div className={` ${selectedEmail ? 'lg:w-1/3' : 'w-full'} space-y-4 h-screen overflow-scroll no-scrollbar`}>
      {emails.map((email: Email) => (
        <div
          key={email.id}
          className={`p-4  cursor-pointer rounded-lg 
           ${ifRead(email) ? 'read-background' : 'bg-white'} 
           ${ifRead(email) ? 'accent-border' :'border-default'}`}
          onClick={() => dispatch(selectEmail(email))}
        >
          <div className="flex  space-x-4 content-center">
            {/* email sender logo  */}
            <div className="w-12 h-12 rounded-full accent flex items-center justify-center  text-white font-bold">
              { getInitial(email.from.name)}
            </div>
            {/* email intro details */}
            <div className="flex-1 ">
              {/* from : name <email> */}
              <div className="text-sm text-default">
                  From :<span className="font-semibold "> {email.from.name} {`<${email.from.email}>`}</span>
              </div>
              {/* subject : lorem ipsum */}
              <div className="text-sm text-default">
                  Subject :<span className="font-semibold "> {email.subject}</span>
              </div>
             
              <p className=" text-default text-sm my-2 ">
                {
                email.short_description.length >= 40 
                ? 
                email.short_description.slice(0,40)+'...' 
                : 
                email.short_description 
                }
              </p>

              <div className="text-sm text-default flex space-x-5 ">
                  {<p className='lowercase '>{format(new Date(email.date), 'dd/MM/yyyy hh:mm a')}</p>}
                  {ifFavourite(email) && <p className ='accent-text'>Favourite</p> }
              </div>

            </div>

          </div>
         
          
        </div>
      ))}
    </div>
  );
};

export default EmailList;
