import './themeSwitch.css';

const ThemeSwitch = ({ toggleTheme }) => {
  return (
    <div className="theme-switch">
      <div className="switch-top">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <div className="switch-bottom">
        <span className="switch-text">Theme</span>
        <div className="switch-bar">
          <button 
            className="switch-bar-btn" 
            aria-label='theme one' 
            onClick={() => toggleTheme('theme-1')}>
          </button>

          <button 
            className="switch-bar-btn" 
            aria-label='theme two' 
            onClick={() => toggleTheme('theme-2')}>
          </button>

          <button 
            className="switch-bar-btn" 
            aria-label='theme three' 
            onClick={() => toggleTheme('theme-3')}>
          </button>
          
          <div className="switch-circle" aria-hidden></div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSwitch;