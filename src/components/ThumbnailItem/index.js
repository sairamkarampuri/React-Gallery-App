// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumnailDetails, changeImg, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumnailDetails

  const onClickThumbnail = () => {
    changeImg(id)
  }
  const thumbnailActiveClassName = isActive ? 'active-thumbnail' : ''
  return (
    <li className="thumbnail-item">
      <button type="button" className="button" onClick={onClickThumbnail}>
        <img
          className={`thumbnail ${thumbnailActiveClassName}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
