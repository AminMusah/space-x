import {Link} from 'react-router-dom';

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-[3] flex justify-between items-center uppercase h-[100px] py-0 px-[30px]">
        <div className="w-52 h-auto">
          <Link to="/">
            <img src="/img/logo.png" alt="SpaceX" className='sm:w-full h-auto w-[150px]'/>
          </Link>
        </div>
      </header>
    )
  }
  
  export default Header;
  