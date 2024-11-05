import React, { useRef, useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import {
  useNavigate,
  useLocation,
  useSearchParams,
  useParams,
} from "react-router-dom";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";
import { useOutsideClick } from "../../utils";

export const Search = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [filterMenu, setFilterMenu] = useState(false);
  console.log(filterMenu, "fsda");

  const navigate = useNavigate();
  const location = useLocation();

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Allow only numeric characters
    // if (/^\d*$/.test(value)) {
    setQuery(value);
    // }
  };

  const handleSearch = () => {
    const params = new URLSearchParams(location.search);
    if (query) {
      params.set("search", query);
    } else {
      params.delete("search");
    }
    setSearchParams(params);
    navigate({ search: params.toString() });
  };

  const handleClearSearch = () => {
    setQuery("");
    searchParams.set("search", "");
    const params = new URLSearchParams(location.search);
    params.delete("search");
    navigate({ search: params.toString() });
  };
  let searchEvent = null;
  const handleKeyPress = (e) => {
    // console.log('49',query)
    // if(searchEvent){
    //  clearTimeout(searchEvent);
    // }
    // searchEvent=setTimeout(()=>{
    //   console.log('54',query)
    //   handleSearch();
    //   searchEvent=null;
    // },2000)

    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const filterMenuRef = useRef();

  const handleFilterMenu = () => {
    setFilterMenu(!filterMenu);
  };

  useOutsideClick(filterMenuRef, handleFilterMenu);

  return (
    <div
      className={`${
        props.containerClassName
          ? props.containerClassName
          : "flex items-center justify-center gap-2 my-2"
      } bg-[#F4F5F8] dark:bg-slate-900 min-w-60 rounded`}
    >
      <div className="relative shadow-sm">
        <LuSearch
          size={18}
          className="absolute top-1/2 -translate-y-1/2 left-2 dark:text-white text-gray-400 "
        />
        <input
          className={`${
            props?.inputClassName ? props.inputClassName : "p-2 h-[49px]"
          } bg-[#F4F5F8] dark:bg-slate-900 dark:text-white rounded-md pl-8`}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder={props?.placeholder}
        />
        {searchParams.get("search") && (
          <button
            className={`${
              props.filter ? "right-6" : "right-2"
            } absolute top-1/2 -translate-y-1/2 dark:text-white`}
            onClick={handleClearSearch}
          >
            <RxCross2 size={18} />
          </button>
        )}
        {props.filter && (
          <div className="absolute top-4 right-2">
            <div className="relative">
              <button onClick={() => setFilterMenu(!filterMenu)}>
                <HiOutlineAdjustmentsHorizontal size={18} />
              </button>
              {filterMenu && <div ref={filterMenuRef}>{props.filter}</div>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
