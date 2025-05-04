import { Button } from "./ui/button";

interface CardProps {
  title?: string;
  logo?: React.ReactNode;
  date?: string;
  description?: string;
}

const Card = ({ ...props }: CardProps) => {
  const name = (
    <h1 className="text-xl font-semibold text-blue-500">{props.title}</h1>
  ); //// needs to be changes with the content type
  const logo = (
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
      className="lucide lucide-link-icon lucide-link size-5 dark:text-white/80"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ); // need to change this too with the content type logo

  const handleShare = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // they should be completed
  };
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // they should be completed
  };
  return (
    <div className="w-[300px] h-[350px] bg-white/90 dark:bg-[#0F0F0F]  rounded-lg shadow-sm dark:shadow-white p-4 flex flex-col gap-4 justify-between ">
      <div className="flex flex-col gap-4">
        <div className="flex  justify-between items-center">
          <div className="flex gap-2 items-center">
            {logo} {name}
          </div>
          <div className="flex gap-2 items-center">
            <Button
              className=" rounded-full  flex items-center justify-center hover:bg-transparent hover:text-blue-500 duration-300 dark:text-white/80"
              variant={"ghost"}
              onClick={handleShare}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                />
              </svg>
            </Button>
            <Button
              className=" rounded-full  flex items-center justify-center hover:bg-transparent hover:text-red-500 duration-300 dark:text-white/80"
              variant={"ghost"}
              onClick={handleDelete}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </Button>
          </div>
        </div>
        <div className="text-3xl font-bold underline dark:text-slate-300  text-slate-950">
          {props.title}
        </div>
        <div className="space-y-1">
          <ul className="list-disc list-inside space-y-1 text-slate-800 dark:text-slate-300 text-sm">
            {props.description}
          </ul>
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="tags flex justify-start items-center gap-4 ">
          <div className="tag bg-blue-100 dark:bg-blue-700/8 text-blue-500 px-3 py-1 rounded-full text-sm">
            #Productivity
          </div>
          <div className="tag bg-blue-100 dark:bg-blue-700/8 text-blue-500 px-3 py-1 rounded-full text-sm">
            #first tag
          </div>
        </div>
        <div className="flex justify-start items-center mt-3 text-[12px] text-slate-800 dark:text-slate-400">
          created on {props.date}
        </div>
      </div>
    </div>
  );
};

export default Card;
