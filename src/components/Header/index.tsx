import React from 'react';
import { Link } from 'react-router-dom';
import { avatarThumbnail, discordThumbnail, logoGif } from '../../assets/images';
import useHeader from './hooks/useHeader';

const Header = () => {
  const { user, onResigerClick, onLoginClick } = useHeader();

  return (
    <header className="fixed w-full z-30 bg-black shadow-lg">
      <div className="w-full px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0 mr-4">
            <Link to="/" className="block" aria-label="Cruip">
              <img src={logoGif} className="w-20 h-20" />
            </Link>
          </div>
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center font-bold text-lg gap-4">
              <li>
                <Link to={'/nodes'} className="text-white hover:text-blue-600">
                  <p>Buy Node</p>
                </Link>
              </li>
              <li>
                <Link to={'#'} className="text-white hover:text-blue-600">
                  <p>Refer A Friend</p>
                </Link>
              </li>
              <li>
                <Link to={'#'}>
                  <img className="h-10 w-10 rounded-full" src={discordThumbnail} alt="Nav" />
                </Link>
              </li>
              <li>
                <div className="bg-white h-10" style={{ width: 1 }} />
              </li>
              {!user ? (
                <>
                  <li>
                    <button
                      className="flex justify-center w-32 py-1 text-white rounded-full bg-transparent border-solid border-2 border-sky-500"
                      onClick={onResigerClick}
                    >
                      <p>Register</p>
                    </button>
                  </li>
                  <li>
                    <button
                      className="flex justify-center w-32 py-1 text-white rounded-full bg-sky-500"
                      onClick={onLoginClick}
                    >
                      <p>Login</p>
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link to={'/accounts'} className="text-white hover:text-blue-600 flex items-center">
                    <img className="h-10 w-10 rounded-full mr-4" src={avatarThumbnail} alt="Nav" />
                    <p>{user.firstName + user.lastName}</p>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
