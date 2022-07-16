import { BiLoaderAlt } from 'react-icons/bi';
import propTypes from 'prop-types';

function Button({
  children,
  color = 'bg-orange',
  className,
  isDisabled = false,
  isLoading = false,
  ...rest
}) {
  return (
    <button
      className={`uppercase w-full font-bold py-2 px-2 hover:shadow-md ${color} ${className} hover:brightness-90
            ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={isDisabled || isLoading}
      {...rest}
    >
      {isLoading ? (
        <BiLoaderAlt className="animate-spin" size={24} />
      ) : (
        children
      )}
    </button>
  );
}

Button.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
  color: propTypes.string,
  className: propTypes.string,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
};

export default Button;
