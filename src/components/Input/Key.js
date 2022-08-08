import './input.css';

export const KeyMain = ({ symbol, handleInput }) => {
  return (
    <button 
      className="key key-main" 
      aria-label={`${symbol}`} 
      onClick={() => handleInput(symbol)}
    >
      <span>{symbol}</span>
    </button>
  )
}

export const KeyFunc = ({ func, isWide=false, handleFunc }) => {
  return (
    <button 
      className={`key key-func${isWide ? ' key-wide' : ''}`} 
      aria-label={`${func}`} 
      onClick={() => handleFunc(func)}
    >
      <span>{func}</span>
    </button> 
  )
}

export const KeyOutput = ({ handleOutput }) => {
  return (
    <button 
      className="key key-wide key-output" 
      aria-label='equals' 
      onClick={handleOutput}
    >
      <span>{'='}</span>
    </button>
  )
}