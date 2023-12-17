/* Default imports */
import {Link, useMatch} from 'react-router-dom';

// Code ...
const CustomLink = ({to, children, ...props}) => {
  const match = useMatch(to);

  return (
      <Link
          style={{
            color: match ? 'orange' : 'white',
          }}
          to={to}
          {...props}>
        {children}
      </Link>
  );
};

export default CustomLink;
