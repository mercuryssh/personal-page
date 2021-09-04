import React from "react";
//import Image from "next/image";
import Link from "next/link";
import {media_ico} from "./icons"

class Card extends React.Component<any, any> {
  render() {
    return (
      <div className={'card'}>
        {/*<Image className={'picture'} src={'/face.jpeg'} width={220} height={220}/>*/}
        <img className={'picture'} src={"/face.jpeg"} alt="" width={'200px'} height={'220px'}/>
        <span className={'title'}>Hello, Mashu here✌🏻</span>
        <p className={'body'}>Welcome to my personal website, if you are here because you found one of my works, you can
          get information
          about me and my others projects on this sides</p>
        <div className={'social-icons'}>
          {media_ico.map((item: any, index: number) => {
            return <div className={'inner-icon'} key={index}>
              <a href={item.link} target={'_blank'} >{item.ico}</a>
            </div>
          })}
        </div>
        <Link href={'/'}><a className={'home-link'}>home page</a></Link>
      </div>
    )
  }
}

class About extends React.Component<any, any> {
  render() {
    return (
      <div className={'about-container'} id={'About'}>
        <Card/>
      </div>
    )
  }
}

export default About