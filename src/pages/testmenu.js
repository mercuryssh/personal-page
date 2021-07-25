import {useState} from "react";

export default function Menu() {
  const [state, setState] = useState(false)

  return (
      <div className="test-box">
        <div onClick={() => setState(!state)} className={'menu-btn ' + (state ? 'open' : '')}>
          <div className="menu-btn-burger">
          </div>
        </div>
      </div>
  )
}