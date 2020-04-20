import React from 'react';
import './Modal.css';
const modal = (props) => { 
    const user = props.user;
    return (
        <div className="modal fade bd-example-modal-xl show" tabIndex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" style={{"display": "block"}} 
        aria-modal="true">
            <div className="modal-dialog modal-dialog-scrollable modal-xl" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title h4" id="myExtraLargeModalLabel">{user.real_name}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.closeModal}>
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {props.children}
                    </div>
                    
                </div>
            </div>
        </div>
    );  
}  

export default modal;