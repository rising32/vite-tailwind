import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import ErrorPage from './pages/ErrorPage';
import LandingPage from './pages/LandingPage';
import NodesPage from './pages/NodesPage';
import AccountLayout from './layout/AccountLayout';
import ProfilePicture from './pages/account/ProfilePicture';
import DisplayName from './pages/account/DisplayName';
import AccountPassword from './pages/account/AccountPassword';
import EmailAddress from './pages/account/EmailAddress';
import PhoneNumber from './pages/account/PhoneNumber';
import LinkedAccounts from './pages/account/LinkedAccounts';
import MyNode from './pages/account/MyNode';
import CreditCards from './pages/account/CreditCards';
import Notifications from './pages/account/Notifications';
import TwoFatorAuthentication from './pages/account/TwoFatorAuthentication';
import TransferCode from './pages/account/TransferCode';
import PrivateKey from './pages/account/PrivateKey';
import DeleteAccount from './pages/account/DeleteAccount';
import Core from './layout/Core';

const AppRoute = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/nodes',
        element: <NodesPage />,
      },
      {
        path: '/accounts',
        element: <AccountLayout />,
        children: [
          {
            path: '',
            element: <ProfilePicture />,
          },
          {
            path: '/accounts/settings=picture',
            element: <ProfilePicture />,
          },
          {
            path: '/accounts/settings=display-name',
            element: <DisplayName />,
          },
          {
            path: '/accounts/settings=password',
            element: <AccountPassword />,
          },
          {
            path: '/accounts/settings=email',
            element: <EmailAddress />,
          },
          {
            path: '/accounts/settings=phone',
            element: <PhoneNumber />,
          },
          {
            path: '/accounts/settings=linked-accounts',
            element: <LinkedAccounts />,
          },
          {
            path: '/accounts/settings=mynode',
            element: <MyNode />,
          },
          {
            path: '/accounts/settings=credit-cards',
            element: <CreditCards />,
          },
          {
            path: '/accounts/settings=notifications',
            element: <Notifications />,
          },
          {
            path: '/accounts/settings=2fa',
            element: <TwoFatorAuthentication />,
          },
          {
            path: '/accounts/settings=transfer-code',
            element: <TransferCode />,
          },
          {
            path: '/accounts/settings=private-key',
            element: <PrivateKey />,
          },
          {
            path: '/accounts/settings=delete-account',
            element: <DeleteAccount />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={AppRoute} />
      <Core />
    </>
  );
}

export default App;
