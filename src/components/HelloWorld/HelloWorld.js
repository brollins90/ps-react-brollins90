import PropTypes from 'prop-types';
import React from 'react';

/** A super lame component that says Hello with a custom message. */
function HelloWorld({ message }) {
    return <div>Hello {message}</div>;
}

HelloWorld.propTypes = {
    /** Message to display */
    message: PropTypes.string,
};

HelloWorld.defaultProps = {
    message: 'World',
};

export default HelloWorld;
