import Image from 'next/image'

export default function CoverImage(props:{cover:string}){
    return(
        <div className="cover-img">
            <img src={props.cover} alt="" />
        </div>
    )
}