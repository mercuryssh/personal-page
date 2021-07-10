interface IProps {
  active: Boolean
  toggleActive: () => void
}

export default function Hamburger(props: IProps) {
  return (
    <div className={'navigation-item'}>
      <button onClick={props.toggleActive} className={'hamburger-box ' + (props.active ? 'hamburger-box-active' : '')} type={'button'}
              aria-label={'Menu'}
              aria-controls={'Menu'}>
        <span className={'hamburger-inner'}/>
        <span className={'hamburger-inner'}/>
        <span className={'hamburger-inner'}/>

      </button>
    </div>
  )
}