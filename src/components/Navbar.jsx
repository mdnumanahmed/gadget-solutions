import { Link, NavLink } from "react-router-dom";
import navbarLogo from "../assets/logo/logo_img.png";
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("");

  const handleTheme = () => {
    setTheme((theme) => !theme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme ? "synthwave" : "winter");
    document
      .querySelector("html")
      .setAttribute("data-theme", theme ? "synthwave" : "winter");
  }, [theme]);

  const navLinks = (
    <>
      <li className="flex">
        <NavLink
          to={"/"}
          className="flex items-center px-4 -mb-1 border-2 border-transparent border-b-gray-200 dark:border- text-black/70 font-medium dark:border-purple-600 dark:text-gray-200 hover:bg-gray-200 hover:text-purple-600 hover:border-gray-200 hover:border-t-2 rounded-t-2xl"
        >
          Home
        </NavLink>
      </li>
      <li className="flex">
        <NavLink
          to={"/dashboard"}
          className="flex items-center px-4 -mb-1 text-black/70 font-medium border-b-2 dark:border- dark:text-gray-200"
        >
          Dashboard
        </NavLink>
      </li>
      <li className="flex">
        <NavLink
          to={"/statistics"}
          className="flex items-center px-4 -mb-1 text-black/70 font-medium  border-b-2 dark:border- dark:text-gray-200"
        >
          Statistics
        </NavLink>
      </li>
      <li className="flex">
        <NavLink
          to={"/profile"}
          className="flex items-center px-4 -mb-1 text-black/70 font-medium border-b-2 dark:border- dark:text-gray-200"
        >
          Profile
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <header className="p-4  dark:text-gray-800">
        <div className="container flex justify-between h-14 lg:h-16 mx-auto ">
          <ul className="items-stretch hidden space-x-3 lg:flex">{navLinks}</ul>
          <Link
            to={"/"}
            aria-label="Back to homepage"
            className="flex flex-shrink lg:flex-shrink-0 items-center p-2 w-14 lg:w-16 bg-white/90 border border-purple-800 rounded-full transition hover:ring-2 ring-offset-2 hover:bg-blue-100 duration-500"
          >
            <img src={navbarLogo} alt="" className="" />
          </Link>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:inline-block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  title="Search"
                  className="p-1 focus:outline-none focus:ring"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 dark:text-gray-800"
                  >
                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="Search"
                placeholder="Search..."
                className="w-24 py-2 pl-10 text-sm border rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50"
              />
            </div>
            {/* Cart Icon */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-outline bg-white border-2 btn-circle hover:bg-purple-600 hover:border-white hover:text-white dark:bg-purple-600"
            >
              <div className="indicator">
                <GrCart className="text-2xl" />
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-outline bg-white border-2 btn-circle hover:bg-purple-600 hover:border-white hover:text-white dark:bg-purple-600"
            >
              <div className="indicator">
                <FaRegHeart className="text-2xl" />
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            {/* Login logout */}
            <button
              type="button"
              className="hidden px-6 py-2 font-semibold bg-white text-purple-600 border rounded-2xl lg:block dark:bg-purple-600 dark:text-gray-50 hover:bg-purple-600 hover:text-white"
            >
              Log in
            </button>
            <button
              type="button"
              className="hidden px-6 py-2 font-semibold border bg-white text-purple-600 rounded-2xl lg:block dark:bg-purple-600 dark:text-gray-50 hover:bg-purple-600 hover:text-white"
            >
              Log Out
            </button>

            {/* Theme Controller */}
            <label className="grid cursor-pointer place-items-center">
              <input
                type="checkbox"
                checked={theme}
                onChange={handleTheme}
                value="synthwave"
                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
              />
              <svg
                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
          <div className="text-right">
            <button title="Open menu" type="button" className="p-4 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 dark:text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <ul className="absolute items-end flex flex-col space-y-3 hidden">
              {navLinks}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
