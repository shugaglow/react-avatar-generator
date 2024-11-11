import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ initials, bgColor, textColor, size, pattern }) => {
const styles = {
    backgroundColor: bgColor,
    color: textColor,
    width: size,
    height: size,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: size / 2,
    borderRadius: '50%',
};

return (
    <div style={styles}>
        {initials}
    </div>
    );
};

Avatar.propTypes = {
    initials: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    size: PropTypes.number,
    pattern: PropTypes.string,
};

Avatar.defaultProps = {
    bgColor: '#ccc',
    textColor: '#fff',
    size: 50,
    pattern: null,
};

export default Avatar;
