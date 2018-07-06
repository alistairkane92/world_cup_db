import React from 'react'
import './styles/MatchView.css'

const MatchInfoPane = ({stageName, location, venue, kickOff, attendance, weather, officials}) => {
  const liOfficials = officials.map(official => {
    return (<li key={official} className="footerLi">{official}</li>)
  })

  return(
    <div id="matchInfoPane">
      <div id="matchInfoPaneHeader">
        <p>{stageName}</p>
        <p>{location} - {venue}</p>
        <p>{kickOff}</p>
        <p>Attendance: {attendance}</p>
      </div>
      <div id="matchInfoPaneFooter">
        <p>Weather:</p>
        <ul>
          <li className="footerLi">{weather.description}</li>
          <li className="footerLi">{weather.temp_celsius}°C ({weather.temp_farenheit}°F)</li>
        </ul>
        <p>Officials: </p>
        <ul>
          {liOfficials}
        </ul>
      </div>
    </div>
  )
}

export default MatchInfoPane
