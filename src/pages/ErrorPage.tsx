import React from 'react';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return <div>404 Page</div>;
}

export default ErrorPage;
