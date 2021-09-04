import Hamburger, { menuProps } from '../hamburger'

export default function Header({ active, toggleActive }: menuProps) {

  return (
    <header className="header">
      <span className="title-lg" style={{ marginLeft: '0.5em' }}>Joseph Blog</span>
      <div>
        <Hamburger
          active={active}
          toggleActive={toggleActive}
        />
      </div>
    </header>
  )
};