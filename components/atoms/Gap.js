import propTypes from 'prop-types';

function Gap({ width, height }) {
  return <div style={{ width, height }}></div>;
}

Gap.propTypes = {
  width: propTypes.number,
  height: propTypes.number,
};

export default Gap;
