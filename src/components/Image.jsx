/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState } from 'react'
import images from '../assets/images'

export default () => {
  const [image, setImagePath] = useState()
  const [loading, setLoading] = useState(false)

  function setRandomImagePath() {
    const random = [Math.floor(Math.random() * images.length)]
    const path = `${images[random]}`
    setImagePath(path)
  }

  useEffect(() => {
    if (!image) {
      setLoading(true)
      setRandomImagePath()
    }
  }, [image])

  return (
    <div className="image-requester-container">
      <div className="image-container">
        {image && <img className="image" src={image} alt={'Onyxia'} />}
        {!image && loading && <p>Loading...</p>}
      </div>
      <br />
      <button className="another-button" onClick={setRandomImagePath}>
        Another
      </button>
    </div>
  )
}
