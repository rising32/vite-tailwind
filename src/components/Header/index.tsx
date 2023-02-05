import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { avatarThumbnail, discordThumbnail, logoGif } from '../../assets/images';
import useHeader from './hooks/useHeader';

const Header = () => {
  const [top, setTop] = useState(true);
  const { user, onResigerClick, onLoginClick } = useHeader();
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header className="fixed w-full z-30 bg-black transition duration-300 ease-in-out h-28">
      <div className="flex flex-row items-center justify-between mx-16 my-4">
        <div className="flex-shrink-0">
          <Link to="/" aria-label="Cruip">
            <img src={logoGif} className="w-20 h-20" />
          </Link>
        </div>
        <nav className="flex flex-grow">
          <ul className="flex flex-grow justify-end flex-wrap items-center">
            <li className="px-4 text-lg font-bold">
              <Link to={'/nodes'} className="flex items-center text-white">
                <p>Buy Node</p>
              </Link>
            </li>
            <li className="px-4 text-lg font-bold">
              <Link to={'#'} className="flex items-center text-white">
                <p>Refer A Friend</p>
              </Link>
            </li>
            <li className="px-4 text-lg font-bold text-white">
              <Link to={'#'} className="flex items-center">
                <img className="h-10 w-10 rounded-full" src={discordThumbnail} alt="Nav" />
              </Link>
            </li>
            <li className="px-4 text-lg font-bold text-white">
              <div className="bg-white h-10" style={{ width: 1 }} />
            </li>
            {!user ? (
              <>
                <li className="px-4 text-lg font-bold">
                  <button
                    className="flex justify-center w-32 py-1 text-white rounded-full bg-transparent border-solid border-2 border-sky-500"
                    onClick={onResigerClick}
                  >
                    <p>Register</p>
                  </button>
                </li>
                <li className="px-4 text-lg font-bold">
                  <button
                    className="flex justify-center w-32 py-1 text-white rounded-full bg-sky-500"
                    onClick={onLoginClick}
                  >
                    <p>Login</p>
                  </button>
                </li>
              </>
            ) : (
              <li className="px-4 text-lg font-bold">
                <Link to={'/accounts'} className="flex items-center text-white">
                  <img className="h-10 w-10 rounded-full mr-4" src={avatarThumbnail} alt="Nav" />
                  <p>VanHung Hoang</p>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
