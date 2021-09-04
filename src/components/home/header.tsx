import Hamburger, { menuProps } from '../hamburger'

export default function Header({ active, toggleActive }: menuProps) {

  return (
    <header className={"header " + (active ? 'bg-white' : '')}>
      <div>
        <Hamburger
          active={active}
          toggleActive={toggleActive}
        />
      </div>
    </header>
  )
};