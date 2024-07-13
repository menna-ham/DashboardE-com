import React, { useState } from 'react'

type Props = {}

const PreviewImage = ({file}) => {
    let [preview, setPreview] = useState(null)
    let reader = new FileReader()
    reader.readAsDataURL(file);
    reader.onload= ()=>{
        setPreview(reader.result)
    }
  return (
    <div>
        <img src={preview} alt="preview" />
    </div>
  )
}

export default PreviewImage