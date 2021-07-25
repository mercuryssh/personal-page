import React from "react";

const CardList = (props) => {
  return (
    <div className={'card-list'}>
      {props.children}
    </div>
  )
}


export default class Card extends React.Component<any, any> {
  render() {
    return (
      <section className={'card-container'}>
        <span>Hello Jahy</span>

      </section>
    )
  }
}

export {
  CardList
}