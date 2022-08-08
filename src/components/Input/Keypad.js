import { KeyFunc, KeyMain, KeyOutput } from './Key';
import './input.css';

const Keypad = ({ handleInput, handleFunc, handleOutput }) => {
  return (
    <div className="keypad">
      <KeyMain symbol={7} handleInput={handleInput}/>
      <KeyMain symbol={8} handleInput={handleInput}/>
      <KeyMain symbol={9} handleInput={handleInput}/>
      <KeyFunc func={'del'} handleFunc={handleFunc}/>
      <KeyMain symbol={4} handleInput={handleInput}/>
      <KeyMain symbol={5} handleInput={handleInput}/>
      <KeyMain symbol={6} handleInput={handleInput}/>
      <KeyMain symbol={'+'} handleInput={handleInput}/>
      <KeyMain symbol={1} handleInput={handleInput}/>
      <KeyMain symbol={2} handleInput={handleInput}/>
      <KeyMain symbol={3} handleInput={handleInput}/>
      <KeyMain symbol={'-'} handleInput={handleInput}/>
      <KeyMain symbol={'.'} handleInput={handleInput}/>
      <KeyMain symbol={0} handleInput={handleInput}/>
      <KeyMain symbol={'/'} handleInput={handleInput}/>
      <KeyMain symbol={'x'} handleInput={handleInput}/>
      <KeyFunc func={'reset'} isWide={true} handleFunc={handleFunc}/>
      <KeyOutput handleOutput={handleOutput}/>
    </div>
  )
}

export default Keypad;