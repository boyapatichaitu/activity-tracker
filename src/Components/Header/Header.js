import React from 'react';

const header = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2 border-bottom">
            <a href="/#" className="navbar-brand mx-auto">{props.title}</a>
        </nav>
    );
}

export default header;