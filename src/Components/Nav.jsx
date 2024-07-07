import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="flex items-center justify-between text-base text-gray-300 mt-4 bg-slate-600 w-full max-w-xl">
      <Link to={`/`}>
        <li>
          <p
            className=" hover:text-black font-medium text-lg py-2 px-4"
            href=""
          >
            Home
          </p>
        </li>
      </Link>
      <Link to={`/services`}>
        <li>
          <p
            className=" hover:text-black font-medium text-lg py-2 px-4"
            href=""
          >
            Services
          </p>
        </li>
      </Link>
      <li>
        <p
          onClick={() => alert("Sorry! This page is under maintenance!")}
          className=" hover:text-black font-medium text-lg py-2 px-4"
          href=""
        >
          About
        </p>
      </li>
      <Link to={`../Pages/renderinglists`}>
        <li>
          <p
            className=" hover:text-black font-medium text-lg py-2 px-4"
            href=""
          >
            Rendering Lists
          </p>
        </li>
      </Link>
    </ul>
  );
};

export default Nav;
