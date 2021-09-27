import { useHistory } from 'react-router';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    let url =
      'https://react-getting-started-d23e9-default-rtdb.firebaseio.com/meetups.json';
    let config = {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch(url, config).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
