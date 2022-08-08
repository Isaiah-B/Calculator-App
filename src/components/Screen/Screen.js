import './screen.css';

const Screen = ({ display }) => {
  return (
    <div className="screen">
      <div className="output">
        <span>{display}</span> 
      </div>
    </div>
  )
}

export default Screen;