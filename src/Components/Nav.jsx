import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="flex items-center justify-between text-base text-gray-300 mt-4 bg-slate-600 w-full max-w-xl">
      <Link to={`/`}>
        <li>
          <a
            className=" hover:text-black font-medium text-lg py-2 px-4"
            href=""
          >
            Home
          </a>
        </li>
      </Link>
      <Link to={`/services`}>
        <li>
          <a
            className=" hover:text-black font-medium text-lg py-2 px-4"
            href=""
          >
            Services
          </a>
        </li>
      </Link>
      <li>
        <a className=" hover:text-black font-medium text-lg py-2 px-4" href="">
          About
        </a>
      </li>
      <Link to={`../Pages/renderinglists`}>
        <li>
          <a
            className=" hover:text-black font-medium text-lg py-2 px-4"
            href=""
          >
            Rendering Lists
          </a>
        </li>
      </Link>
    </ul>
  );
};

export default Nav;
