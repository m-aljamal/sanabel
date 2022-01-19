import { Link } from "gatsby"
import React from "react"
import logo from "../assets/icons/logo.png"
import navOpen from "../assets/icons/iconfinder.svg"

import Drawer from "react-modern-drawer"
import "react-modern-drawer/dist/index.css"
import { links } from "../data/links"
import LanguageSelector from "./LanguageSelector"
import { useLang } from "../context/lang-context"

const Header = ({ location }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState)
  }

  return (
    <header className="container flex justify-center   ">
      <div className="  absolute rounded-br-2xl  gap-16 rounded-bl-2xl z-10  px-10 items-center flex  bg-AppBack">
        <div className=" w-24 md:w-36 ">
          <img src={logo} alt="logo" />
        </div>

        <NavLinks location={location} />

        <img
          src={navOpen}
          alt="navopen"
          className=" w-12  md:hidden inline-block mr-20  "
          onClick={toggleDrawer}
        />
      </div>

      <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
        <h2 className=" text-center  bg-AppDark text-white py-4 ">
          سنابل الأمل
        </h2>
        <NavLinks location={location} mobile />
      </Drawer>
    </header>
  )
}

export default Header

const NavLinks = ({ location, mobile }) => {
  const fullScreenStyle = "text-white gap-8 text-lg md:flex  hidden"
  const mobileStyle = "text-center space-y-5 mt-8 text-lg md:hidden"
  const [lang] = useLang()

  return (
    <ul className={mobile ? mobileStyle : fullScreenStyle}>
      {links.map((link, i) => (
        <li key={i}>
          <Link
            activeClassName="text-AppGreen"
            to={lang === "ar" ? link.link : `/${lang}${link.link}`}
          >
            {link[lang]}
          </Link>
        </li>
      ))}
      <LanguageSelector location={location} />
    </ul>
  )
}
