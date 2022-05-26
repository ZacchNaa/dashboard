import { FC } from 'react'
import "./TextTruncate.css";

type TextTruncateProps = {
    text: string,
}


const TextTruncate:FC<TextTruncateProps> = ({text}) => {
  return (
    <div className='wrapper'>
      <p>{ text }</p>
    </div>
  )
}

export default TextTruncate