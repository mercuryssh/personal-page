export interface menuProps {
  active: Boolean
  toggleActive: () => void
}

export default function Hamburger(props: menuProps) {
  return (
      <div onClick={props.toggleActive} className={'menu-btn ' + (props.active ? 'open' : '')} >
        <div className="menu-btn-burger">
        </div>
    </div>
  )
}
