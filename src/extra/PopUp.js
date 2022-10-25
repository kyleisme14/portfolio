import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class PopUp extends React.Component {
  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
      }
    };
  };

  render() {
    return (
      <div>

        <button className='btn btn-success'
          onClick={this.createNotification('success')}>
        </button>
      
        <NotificationContainer/>
      </div>
    );
  }
}

export default PopUp;
