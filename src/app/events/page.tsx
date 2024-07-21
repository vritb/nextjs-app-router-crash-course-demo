import React from 'react';
import EventsList from './EventsList';

export default function Events() {
  return (
    <div>
      <p className="text-center">Please select an event</p>
      <EventsList/>
    </div>
  );
}
