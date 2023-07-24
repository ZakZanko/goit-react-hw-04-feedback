import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <>
      <p>{message}</p>
    </>
  );
};

Notification.propTypes = {
  massage: PropTypes.string.isRequired,
};

export default Notification;
