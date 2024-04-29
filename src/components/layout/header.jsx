import { useSelector } from "react-redux"
import useScroll from "../../hooks/useScroll"
import useWindowSize from "../../hooks/useWindowSize"
import { mergeClasses, scrollIntoView } from "../../lib/utils"
import Typography from "../general/typography"
import { NavbarLinks } from "../../lib/configurables"
import ThemeSwitcher from "../general/theme-switcher"
import CustomLink from "../general/custom-link"
import IconButton from "../general/icon-button"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "../general/drawer"
import Logo from "../general/logo"
import DownloadCV from "../general/download-cv"

const Header = () => {
  const scrolled = useScroll(40)
  const windowSize = useWindowSize()
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    if (windowSize?.width && windowSize?.width > 767 && isOpen) {
      setIsOpen(false);
    }
  }, [windowSize, isOpen]);
  const theme = useSelector((state) => state.theme.theme)

  return (
    <header id="header" className={mergeClasses(
      'sticky top-0 z-30 w-full border-b border-transparent bg-gray max-md:border-gray-100 transition-colors duration-300',
      theme,
      scrolled ? 'bg-gray/25 backdrop-blur-xl md:border-gray-100' : '',
    )}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8">
        <Logo />
        <div className="hidden items-center gap-6 md:flex">
          <ul className={mergeClasses("flex list-none items-center gap-6", theme === "dark" ? "text-white" : "text-black")}>
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                <CustomLink to={link.href}
                  // className={isLinkActive(link.href)?"text-gray-900":""} 
                  onClick={() => scrollIntoView(link.href)}>{link.label}</CustomLink>
              </li>
            ))}
          </ul>
          <div className="h-6 w-0.5 bg-gray-100"></div>
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <DownloadCV /> 
          </div>
        </div>
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild className="flex md:hidden">
            <IconButton aria-label={"menu-icon-open"}
                role="button"
                id={"menu-icon-open"}>
              <Menu />
            </IconButton>
          </DrawerTrigger>
          <DrawerContent className={theme}>
            <div className="flex items-center justify-between border-b border-gray-100 p-4">
              <Logo />
              <DrawerClose asChild>
                <IconButton aria-label={"menu-icon-close"}
                role="button"
                id={"menu-icon-close"}>
                  <X />
                </IconButton>
              </DrawerClose>
            </div>
            <div className="border-b border-gray-100 p-4">
              <ul className="flex list-none flex-col gap-4">
                {NavbarLinks.map((link, index) => (
                  <li key={index}>
                    <CustomLink
                      to={link.href}
                      onClick={() => {
                        const timeoutId = setTimeout(() => {
                          setIsOpen(false);
                          scrollIntoView(link.href, true);
                          clearTimeout(timeoutId);
                        }, 200);
                      }}
                    >
                      {link.label}
                    </CustomLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4 p-4">
              <div className="flex items-center justify-between">
                <Typography>Switch Theme</Typography>
                <ThemeSwitcher />
              </div>
              <DownloadCV /> 
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  )
}

export default Header