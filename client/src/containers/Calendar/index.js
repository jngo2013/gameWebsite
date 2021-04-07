import React  from 'react'
import './styles.css';


export default class EventCalendar extends React.Component {

  render() {
    return (
      <div>
      <iframe className="cal" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=azk3NmFkMHBjMXEyN2g2b2NrODU5c3NtdjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23616161&amp;showTitle=0&amp;showDate=0&amp;showPrint=0&amp;showCalendars=0" style={{"border":0}} width="800" height="600" frameborder="0" scrolling="no"></iframe>
      </div>
    )

}
}