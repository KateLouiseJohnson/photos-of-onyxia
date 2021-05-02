import { useEffect, useState } from 'react'
import images from '../assets/images'

export default () => {
  const [image, setImagePath] = useState()

  function setRandomImagePath() {
    const random = [Math.floor(Math.random() * images.length)]
    const path = `${images[random]}`
    setImagePath(path)
  }

  useEffect(() => {
    if (!image) {
      setRandomImagePath()
    }
  })

  return (
    <div className="image-requester-container">
      <div className="image-container">
        <img className="image" src={image} />
      </div>
      <br />
      <button className="another-button" onClick={setRandomImagePath}>
        Another
      </button>
    </div>
  )
}
