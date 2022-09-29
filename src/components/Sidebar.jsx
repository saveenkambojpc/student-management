import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
        <ul className="space-y-2">
          <li>
            <Link to="/addstudent" className="flex w-full items-center p-2 text-base font-normal text-gray-900 rounded dark:text-white hover:text-white hover:font-semibold hover:bg-red-500 dark:hover:bg-red-700">
              <ion-icon name="people-outline" className="text-2xl"></ion-icon>
              <span className="ml-3">Add Student</span>
            </Link>
          </li>

          <li>
            <Link to="/managestudent" className="flex w-full items-center p-2 text-base font-normal text-gray-900 rounded dark:text-white hover:text-white hover:font-semibold hover:bg-red-500 dark:hover:bg-red-700">
              <ion-icon name="create-outline" className="text-2xl"></ion-icon>

              <span className="ml-3">Manage Student</span>
            </Link>
          </li>

          <li>
            <button className="flex w-full items-center p-2 text-base font-normal text-gray-900 rounded dark:text-white hover:text-white hover:font-semibold hover:bg-red-500 dark:hover:bg-red-700">
              <ion-icon name="log-out-outline" className="text-2xl"></ion-icon>

              <span className="ml-3">Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
