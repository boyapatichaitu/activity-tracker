import React from 'react';

import Modal from '../Modal/Modal';
import Today from '../Activity/Today/Today';
import Complete from '../Activity/Complete/Complete';

const userActivity = props => {
 return (
    <Modal {...props} closeModal={() => props.closeModal()} >
      <ul className="nav nav-tabs">
          <li className="nav-item">
              <a className="nav-link active" id="todays-activity" data-toggle="tab" aria-controls="today" href="#today" role="tab" aria-selected="true" >
                  Today's Activity
              </a>
          </li>
          <li className="nav-item">
              <a className="nav-link" id="complete-activity" data-toggle="tab" aria-controls="complete" href="#complete" role="tab" aria-selected="false" >
                  Complete Activity
              </a>
          </li>
          {/* <li className="nav-item">
              <a className="nav-link disabled" href="/#" data-toggle="tab" tabIndex="-1" aria-disabled="true" role="tab" aria-selected="false" >
                  Disabled
              </a>
          </li> */}
      </ul>
      <div className="tab-content" id="myTabContent">
              <Today {...props} />
              <Complete {...props} />
      </div>
    </Modal>
 );
}

export default userActivity;