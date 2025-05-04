import { Button } from "./ui/button";

const Button2 = () => {
  const logoOne = (
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
      className="lucide lucide-file-plus-icon lucide-file-plus size-5"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M9 15h6" />
      <path d="M12 18v-6" />
    </svg>
  );

  return (
    <>
      <Button className="bg-blue-500 hover:bg-blue-500 text-md">
        {logoOne}Add Content{" "}
      </Button>
    </>
  );
};

const Button3 = () => {
  const logoTwo = (
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
      className="size-5 lucide lucide-share2-icon lucide-share-2"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </svg>
  );
  <Button className="bg-blue-200 hover:bg-blue-200 text-blue-600 text-md">
    {logoTwo}Share{" "}
  </Button>;
};

export { Button2, Button3 };
