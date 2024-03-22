import { Fragment } from "react";
import {
  MdCalendarMonth,
  MdCoPresent,
  MdDiversity1,
  MdInsertChartOutlined,
} from "react-icons/md";

import { Link } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";

const SideMenu = () => {
  return (
    <Fragment>
      <sidebar className="md:flex hidden text-white  flex-col justify-between gap-8  bg-primary h-screen  w-80 p-4 overflow-y-auto">
        <section>
          <div className="logo flex items-center flex-col gap-4 mb-8">
            <p className="font-bold uppercase text-center text-3xl  w-full break-all antialiased">
              "THORFIN"
            </p>

            <div>
              <h3 className="font-bold  text-2xl ">Jailer vega meza</h3>
              <h3 className="font-bold  text-2xl ">Orlando seoanes</h3>
            </div>
          </div>

          <ul className="mt-4 mb-8">
            <li>
              <Link
                to="menu"
                className="flex items-center gap-4 p-2 hover:bg-accent transition-colors rounded-lg"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
                  />
                </svg>

                <span>Entrenamiento</span>
              </Link>
            </li>
            <li>
              <Link
                to="inbox"
                className="flex items-center gap-4 p-2 hover:bg-accent transition-colors rounded-lg"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm5.495.93A.5.5 0 0 0 6.5 13c0 1.19.644 2.438 1.618 3.375C9.099 17.319 10.469 18 12 18c1.531 0 2.9-.681 3.882-1.625.974-.937 1.618-2.184 1.618-3.375a.5.5 0 0 0-.995-.07.764.764 0 0 1-.156.096c-.214.106-.554.208-1.006.295-.896.173-2.111.262-3.343.262-1.232 0-2.447-.09-3.343-.262-.452-.087-.792-.19-1.005-.295a.762.762 0 0 1-.157-.096ZM8.99 8a1 1 0 0 0 0 2H9a1 1 0 1 0 0-2h-.01Zm6 0a1 1 0 1 0 0 2H15a1 1 0 1 0 0-2h-.01Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span>Simulacion</span>
              </Link>
            </li>
          </ul>
        </section>
      </sidebar>

      <div className="navbar bg-base-100 md:hidden ">
        <div className="flex-none">
          <div className="drawer lg:drawer-open z-40">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center"></div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">IA SUPERTOPANGURREN</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default SideMenu;
