import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  GetAllSurah,
} from "../../actions/qurans";

import UserImage06 from '../../images/user-32-06.jpg';
import UserImage08 from '../../images/user-32-08.jpg';

const ProfileSidebar = () => {
  const qurans = useSelector(state => state.qurans);
  const [profileSidebarOpen, setProfileSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllSurah());
  }, []);

  return (
    <div
      id="profile-sidebar"
      className={`absolute z-20 top-0 bottom-0 w-full md:w-auto md:static md:top-auto md:bottom-auto -mr-px md:translate-x-0 transform transition-transform duration-200 ease-in-out ${profileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      {console.log(qurans)}
      <div className="sticky top-16 bg-white overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 border-r border-slate-200 md:w-72 xl:w-80 h-[calc(100vh-64px)]">

        {/* Profile group */}
        <div>
          {/* Group body */}
          <div className="px-5 py-4">
            {/* Search form */}
            <form className="relative">
              <label htmlFor="profile-search" className="sr-only">Search</label>
              <input id="profile-search" className="form-input w-full pl-9 focus:border-slate-300" type="search" placeholder="Search…" />
              <button className="absolute inset-0 right-auto group" type="submit" aria-label="Search">
                <svg className="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                  <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                </svg>
              </button>
            </form>
            {/* Team members */}
            <div className="mt-4">
              <div className="text-xs font-semibold text-slate-400 uppercase mb-3">List Data</div>
              <ul className="mb-6">
                {Object.values(qurans.data).map((item,index) => {
                  return (
                     <li className="-mx-2" key={index}>
                       <button className="w-full p-2 rounded hover:bg-indigo-50" onClick={() => setProfileSidebarOpen(false)}>
                         <div className="flex items-center truncate">
                           <div className="relative mr-2">
                             <span className="text-sm font-medium text-slate-800">{item.number}</span>
                           </div>
                           <div className="truncate">
                             <span className="text-sm font-medium text-slate-800">{item.name}</span>
                           </div>
                         </div>
                       </button>
                     </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProfileSidebar;
