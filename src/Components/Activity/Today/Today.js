import React from 'react';

const today = props => {
    const activities = [
        ...props.user.activity_periods.filter(period =>{
            var now = new Date();
            var date = Date.parse(now.toLocaleDateString());
            return date === Date.parse(period.start_time.split("  ")[0])
        })
    ]

    return (
        <div className="tab-pane fade show active m-4" id="today" role="tabpanel" aria-labelledby="todays-activity">
            {activities.length ? 
            <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Activity</th>
                <th scope="col">Start Time</th>
                <th scope="col">End Time</th>
                </tr>
            </thead>
            {activities.map(( period, index ) => (
            <tbody key={index}>
                <tr>
                <th scope="row">{index+1}</th>
                <td>{period.start_time}</td>
                <td>{period.end_time}</td>
                </tr>
            </tbody>
            ))}
            </table> 
            : "There's no activity recorded for today."}
        </div>
        
    );
}

export default today;