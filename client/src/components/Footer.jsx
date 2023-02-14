import { Link } from "react-router-dom";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="flex justify-center items-center flex-col m-4">
      <div className="flex items-center">
        <h1 className="font-light text-gray-300 text-xs uppercase">SpaceX </h1>
        <span className="font-light text-gray-300 text-[18px] pb-[3px] pl-[4px]">&copy;</span>
        <span className="font-light text-gray-300 text-xs pl-[4px]">{year}</span>
      </div>
      <ul className="flex items-center flex-wrap w-full justify-between">
        <li>
          <Link to="/" className="text-white uppercase m-4 text-xs">
            Twitter
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white uppercase text-xs m-4">Youtube</Link>
        </li>
        <li>
          <Link to="/" className="text-white uppercase text-xs m-4">Instagran</Link>
        </li>
        <li>
          <Link to="/" className="text-white uppercase text-xs m-4">Flickr</Link>
        </li>
        <li>
          <Link to="/" className="text-white uppercase text-xs m-4">LinkedIn</Link>
        </li>
        <li>
          <Link to="/" className="text-white uppercase text-xs m-4">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/" className="text-white uppercase text-xs m-4">Suppliers</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
