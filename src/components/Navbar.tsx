import { useState } from "react";
import { Navbar } from "./ui/resizable-navbar";
import { Input } from "./ui/input";

function Navbar2() {
  // Menu items.

  const [open, setOpen] = useState(false);

  // search logic with optimization
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your search logic here
  };
  return (
    <>
      <Navbar className="bg-transparent pt-5 sm:py-5 fixed top-0 left-0 w-full shadow-md ">
        <div className=" flex items-center justify-between">
          <div className="pl-5 sm:pl-8 font-bold text-xl flex gap-2 items-center text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-brain-icon lucide-brain size-6 sm:size-8"
            >
              <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
              <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
              <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
              <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
              <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
              <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
              <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
              <path d="M6 18a4 4 0 0 1-1.967-.516" />
              <path d="M19.967 17.484A4 4 0 0 1 18 18" />
            </svg>
            <span className="font-black text-lg sm:text-3xl dark:text-white ">
              Brainly
            </span>
          </div>
          <div className="flex items-center">
            {/* Desktop Menu */}
            <div className="flex sm:items-center">
              <div className="flex gap-3 sm:gap-6 pr-6 items-center">
                <form
                  onSubmit={handleSearch}
                  className="w-80 border hidden  sm:flex  justify-between  rounded-lg drop-shadow-lg"
                >
                  {" "}
                  <Input
                    placeholder="Search ...."
                    className="outline-none border-none w-80  dark:text-slate-300"
                  />
                  <button
                    type="submit"
                    className=" py-1.5 px-2 rounded-full bg-gray-100 hover:bg-gray-200 hover:text-blue-500 duration-300  dark:bg-[#242424] dark:hover:bg-[#242424] dark:text-slate-200 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-search-icon lucide-search size-5 "
                    >
                      <path d="m21 21-4.34-4.34" />
                      <circle cx="11" cy="11" r="8" />
                    </svg>
                  </button>
                </form>
                {/* input button  */}
                <button
                  className="py-2 px-2 rounded-full bg-gray-100 hover:bg-gray-200 hover:text-blue-500 duration-300 sm:hidden  dark:bg-[#242424] dark:hover:bg-[#242424] dark:text-slate-200 "
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(!open);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-search-icon lucide-search size-5 "
                  >
                    <path d="m21 21-4.34-4.34" />
                    <circle cx="11" cy="11" r="8" />
                  </svg>
                </button>
                <button className="py-2 px-2 rounded-full bg-gray-100 hover:bg-gray-200 hover:text-blue-500 duration-300 dark:bg-[#242424] dark:hover:bg-[#242424] dark:text-slate-200 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-sun-icon lucide-sun size-5 "
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </svg>
                </button>
                <button className="py-2 px-2  rounded-full bg-gray-100 hover:bg-gray-200 hover:text-blue-500 duration-300 dark:bg-[#242424] dark:hover:bg-[#242424] dark:text-slate-200 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-42 pr-5 mt-5 sm:hidden ">
          {open && (
            <form
              onSubmit={handleSearch}
              className="w-60 border flex  rounded-lg drop-shadow-lg"
            >
              {" "}
              <Input
                placeholder="Search ...."
                className="outline-none border-none w-80  dark:text-slate-300"
              />
              <button
                type="submit"
                className=" py-1.5 px-2 rounded-full bg-gray-100 hover:bg-gray-200 hover:text-blue-500 duration-300  dark:bg-[#242424] dark:hover:bg-[#242424] dark:text-slate-200 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-search-icon lucide-search size-5 "
                >
                  <path d="m21 21-4.34-4.34" />
                  <circle cx="11" cy="11" r="8" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </Navbar>
    </>
  );
}
export default Navbar2;
