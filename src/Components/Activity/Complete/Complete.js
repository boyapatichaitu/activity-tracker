import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import processDateAndTime from '../../../Utils/DateNTimeUtil';

const localizer = momentLocalizer(moment);

const complete = props => {
  let myEventsList = [];
    props.user.activity_periods.map(( period, index ) => (myEventsList.push(processDateAndTime(period, index))));
    return (
      <div className="tab-pane fade m-4" id="complete" role="tabpanel" aria-labelledby="complete-activity">
        {props.user.activity_periods.length ? 
        <Calendar
        events={myEventsList}
        step={60}
        views={[ "week", "day"]}
        defaultView="week"
        startAccessor='start'
        endAccessor='end'
        localizer={localizer}
        /> 
        : "There's no activity recorded for this user."}
      </div>
    )
}

export default complete;