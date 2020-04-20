import React, { Component } from 'react';

import UserActivity from '../UserActivity/UserActivity';
import { userActivity } from '../../Data/activity';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userIdForModal: -1,
            openPopup: false
        };
    }

    handleModalData = user => {
        this.setState({
            ...this.state,
            user: user,
            openPopup: true
        });
    }

    closeModal = () => {
        this.setState({
            openPopup: false
        });
    }
    
    render() {
        return (
            <div className="row m-3">
                {
                    userActivity.members.map(user => (
                        <div key={user.id} className="col-lg-3 col-md-4 col-sm-6 mb-2" onClick={() => this.handleModalData(user)}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{user.real_name}</h5>
                                    <p className="card-text"><strong>Time Zone: </strong>{user.tz}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
                {this.state.openPopup ? <UserActivity {...this.state} closeModal={this.closeModal} users={userActivity.members}/> : null}
            </div>
        );
    }
}

export default Users;