import React from 'react';

const Subs = (props) => {
  const subsList = props.subEvents.map(event => (
    <p key={event.id}>{event.player} sub {event.time}</p>
  ))

  return (
    <div className="subs">
      {subsList}
    </div>
  )
}

export default Subs;
