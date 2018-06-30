import React from 'react';
import Match from '../components/Match'

const Matches = (props) => {
  if(!props.allMatches) return null;
  let matches = [];

  props.allMatches.forEach(function(element){
    matches.push(<Match matchInfo={element} key={element.fifa_id}/>)
  })

  return (
  <ul>{matches}</ul>
  )
}

export default Matches;
