interface IProps {
  active: Boolean
  toggleActive: () => void
}

export default function Hamburger(props: IProps) {
  return (
      <div onClick={props.toggleActive} className={'menu-btn ' + (props.active ? 'open' : '')} >
        <div className="menu-btn-burger">
        </div>
    </div>
  )
}
