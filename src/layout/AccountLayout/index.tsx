import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const AccountLayout = () => {
  const sideNavList = [
    {
      text: 'ACCOUNT',
      childNavList: [
        {
          text: 'Profile Picture',
          to: '/accounts/settings=picture',
        },
        {
          text: 'Display Name',
          to: '/accounts/settings=display-name',
        },
        {
          text: 'Account Password',
          to: '/accounts/settings=password',
        },
        {
          text: 'Email Address',
          to: '/accounts/settings=email',
        },
        {
          text: 'Phone Number',
          to: '/accounts/settings=phone',
        },
        {
          text: 'Linked Accounts',
          to: '/accounts/settings=linked-accounts',
        },
        {
          text: 'My Node',
          to: '/accounts/settings=mynode',
        },
        {
          text: 'Credit Cards',
          to: '/accounts/settings=credit-cards',
        },
        {
          text: 'Notifications',
          to: '/accounts/settings=notifications',
        },
      ],
    },
    {
      text: 'Security',
      childNavList: [
        {
          text: 'Two-Fator Authentication',
          to: '/accounts/settings=2fa',
        },
        {
          text: 'Transfer Code',
          to: '/accounts/settings=transfer-code',
        },
        {
          text: 'Private Key',
          to: '/accounts/settings=private-key',
        },
        {
          text: 'Delete Account',
          to: '/accounts/settings=delete-account',
        },
      ],
    },
    {
      text: 'Support',
      childNavList: [
        {
          text: 'Submit A Ticket',
          to: '/dfsd',
        },
        {
          text: 'Support Center',
          to: '/dfsd',
        },
      ],
    },
    {
      text: 'Logout',
    },
  ];
  return (
    <div className="bg-white">
      <div className="mx-56 mt-16">
        <p className="text-5xl font-bold">Settings</p>
        <p className="text-xl mt-2 mb-6">Your rametron settings are synced across all products</p>
        <div className="flex flex-row">
          <div className="border-solid border border-slate-200 rounded-3xl mr-6 py-2 flex flex-col w-1/3">
            <ul className="">
              {sideNavList.map((item, i) => (
                <li key={i.toString()} className="py-2">
                  <div className="border-b border-slate-200 border-solid px-4 pb-4">
                    <p className="text-lg font-medium uppercase">{item.text}</p>
                  </div>
                  {
                    <ul className="">
                      {item.childNavList?.map((item, j) => (
                        <li key={i.toString() + j.toString()} className="">
                          <NavLink
                            to={item.to}
                            className={({ isActive }) => {
                              return `flex ${isActive ? 'bg-blue-200 text-blue-700' : 'text-black'}`;
                            }}
                          >
                            <div className="px-4 font-medium py-2">
                              <p className="text-2xl capitalize">{item.text}</p>
                            </div>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  }
                </li>
              ))}
            </ul>
          </div>
          <div className="flex w-2/3 border-solid border border-gray-200 rounded-3xl">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountLayout;
