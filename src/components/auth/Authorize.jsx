import { useSelector } from 'react-redux';
import { GoogleLogin } from './GoogleLogin';

// eslint-disable-next-line react/prop-types
export const Authorize = ({ children }) => {
  const authenticated = useSelector(({ auth }) => {
    return auth.authenticated;
  });

  if (!authenticated) {
    return (
      <div className="flex justify-center">
        <GoogleLogin></GoogleLogin>
      </div>
    );
  }

  return children;
};
