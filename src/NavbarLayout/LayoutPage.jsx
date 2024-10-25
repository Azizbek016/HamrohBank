import { Link, Outlet } from "react-router-dom"
import logo from '../img/logoOrginal.png';
import sunIcon from '../img/sun.png';
import moonIcon from '../img/moon.png';
import React, { useState } from 'react';
import comment from '../img/ijj.png'
import mylogo from '../img/Mylogo.png'
function LayoutPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode);
      document.body.classList.toggle('dark-mode', newMode);
      return newMode;
    });
  };
  React.useEffect(() => {
    const savedMode = JSON.parse(localStorage.getItem('darkMode'));
    if (savedMode) {
      setIsDarkMode(savedMode);
      document.body.classList.toggle('dark-mode', savedMode);
    }
  }, []);



  
  
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="navChild1">

              <Link to='/' onClick={() => handleClick(0)}>
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="navChild2">
              <ul>
                <Link to='about' onClick={() => handleClick(1)}>
                  <li className={activeIndex === 1 ? 'active' : ''}>BANK HAQIDA</li>
                </Link>
                <Link to='credit' onClick={() => handleClick(2)}>
                  <li className={activeIndex === 2 ? 'active' : ''}>KREDITLAR</li>
                </Link>
                <Link to='deposit' onClick={() => handleClick(3)}>
                  <li className={activeIndex === 3 ? 'active' : ''}>OMONATLAR</li>
                </Link>
                <Link to='cards' onClick={() => handleClick(4)}>
                  <li className={activeIndex === 4 ? 'active' : ''}>KARTALAR</li>
                </Link>
                <Link to='contact' onClick={() => handleClick(5)}>
                  <li className={activeIndex === 5 ? 'active' : ''}>BOG`LANISH</li>
                </Link>
              </ul>

            </div>
            <div className="navChild3">
              <Link to='Signin' onClick={() => handleClick(6)}>
                <button className={`btn1 ${activeIndex === 6 ? 'active' : ''}`}>
                  Tizimga kirish
                </button>
              </Link>
              <Link to='Signup' onClick={() => handleClick(7)}>
                <button className={`btn2 ${activeIndex === 7 ? 'active' : ''}`}>
                  Ro`yxatdan o`tish
                </button>
              </Link>
            </div>
            <div className="navChild4" onClick={toggleDarkMode}>
              <img src={isDarkMode ? sunIcon : moonIcon} alt="Toggle Dark Mode" />
            </div>

          </nav>
          <Link to='/network'><div className="commentBtn">
            <img src={comment} alt="" />
            <h2>Ijtimoiy tarmoqlarimiz</h2>
          </div></Link>
        </div>
      </header>
      <main>
        <Outlet />

      </main>
      <footer>
        <div className="NavPage">
          <div className="NavPageW">
            <div className="NavPageBox1">
              
            <Link to='/' onClick={() => handleClick(0)}>
                <img src={logo} alt="" />
              </Link>
              <h2>+998 33 303 03 43
                <p>Aloqa markazi</p>

              </h2>
              <h2>+998 90 008 81 46
                <p>Ishonch telefoni
                </p>

              </h2>
            </div>
            <div className="NavPageBox2">
              <ul>
              <Link to='about' onClick={() => handleClick(1)}>
                  <li className={activeIndex === 1 ? 'active' : ''}>BANK HAQIDA</li>
                </Link>
                <Link to='credit' onClick={() => handleClick(2)}>
                  <li className={activeIndex === 2 ? 'active' : ''}>KREDITLAR</li>
                </Link>
                <Link to='deposit' onClick={() => handleClick(3)}>
                  <li className={activeIndex === 3 ? 'active' : ''}>OMONATLAR</li>
                </Link>

              </ul>
            </div>
            <div className="NavPageBox3">
                <ul>
                <Link to='cards' onClick={() => handleClick(4)}>
                  <li className={activeIndex === 4 ? 'active' : ''}>KARTALAR</li>
                </Link>
                <Link to='contact' onClick={() => handleClick(5)}>
                  <li className={activeIndex === 5 ? 'active' : ''}>BOG`LANISH</li>
                </Link>
              <Link to="network" onClick={() =>handleClick(6)}><li className="li">Ijtimoiy <br /> tarmoqlarimiz</li></Link>
                </ul>
            </div>
            <div className="NavPageBox4">
              <div className="IshlabC">
                <article>
                  <h4>Ishlab <br /> chiquvchi:</h4>
                </article>
                <article>
                  <a href="https://web.telegram.org/a/#5156680646">
                    <img src={mylogo} alt="" />
                  </a>
                </article>

              </div>
            </div>
          </div>
          <div className="NavPageWW">
            <span><h3>Hamroh Bank </h3><p> «Saytdagi ma’lumotlardan foydalanilganda hamrohbank.uz veb-saytiga havola qilish majburiy»</p></span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default LayoutPage;