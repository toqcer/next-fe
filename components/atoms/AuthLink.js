import Link from 'next/link';
import propTypes from 'prop-types';

function AuthLink({ href, title }) {
  return (
    <Link href={href} passHref>
      <a className="text-muted hover:text-white">{title}</a>
    </Link>
  );
}

AuthLink.propTypes = {
  title: propTypes.string,
  href: propTypes.string,
};

export default AuthLink;
