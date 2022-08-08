import './header.css';
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const Header = ({ toggleTheme }) => {
  return (
    <div className="header">
      <span className="title">calc</span>
      <ThemeSwitch toggleTheme={toggleTheme}/>
    </div>
  )
}

export default Header;