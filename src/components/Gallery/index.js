import {Component} from 'react'
import ThumbnailItem from '../ThumbnailItem'
import './index.css'

const imagesList = [
  {
    id: 0,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png',
    imageAltText: 'nature mountain with pond',
    thumbnailAltText: 'nature mountain with pond thumbnail',
  },
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png',
    imageAltText: 'nature sunset',
    thumbnailAltText: 'nature sunset thumbnail',
  },
  {
    id: 2,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png',
    imageAltText: 'nature mountain with ocean',
    thumbnailAltText: 'nature mountain with ocean thumbnail',
  },
  {
    id: 3,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png',
    imageAltText: 'nature mountain with forest',
    thumbnailAltText: 'nature mountain with forest thumbnail',
  },
  {
    id: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png',
    imageAltText: 'nature leaves',
    thumbnailAltText: 'nature leaves thumbnail',
  },
  {
    id: 5,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-tree-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png',
    imageAltText: 'nature tree',
    thumbnailAltText: 'nature tree thumbnail',
  },
  {
    id: 6,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png',
    imageAltText: 'nature waterfall',
    thumbnailAltText: 'nature waterfall thumbnail',
  },
  {
    id: 7,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-river-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png',
    imageAltText: 'nature river',
    thumbnailAltText: 'nature river thumbnail',
  },
]

// Write your code here.

class Gallery extends Component {
  state = {activeImgId: imagesList[0].id}

  changeImg = thumbnailId => {
    this.setState({activeImgId: thumbnailId})
  }

  render() {
    const {activeImgId} = this.state
    const {imageUrl, imageAltText} = imagesList[activeImgId]
    return (
      <div className="app-container">
        <div className="gallery-container">
          <div>
            <img className="gallery-img" src={imageUrl} alt={imageAltText} />
            <h1 className="heading">Nature Photography</h1>
            <p className="description">Nature Photography by Rahul</p>
            <ul className="thumbnails-container">
              {imagesList.map(eachThumbnail => (
                <ThumbnailItem
                  thumnailDetails={eachThumbnail}
                  key={eachThumbnail.id}
                  changeImg={this.changeImg}
                  isActive={eachThumbnail.id === activeImgId}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery

// getFilteredList = () => {
//   const {activeImgId} = this.state
//
//   const filteredList = imagesList.filter(
//     eachImg => eachImg.id === activeImgId,
//   )
//   return filteredList
// }

// const filteredList = this.getFilteredList()

// <ul className="gallery-img-container">
//             {filteredList.map(eachImg => (
//               <li className="img-item" key={eachImg.id}>
//                 <img
//                   className="gallery-img"
//                   src={eachImg.imageUrl}
//                   alt={eachImg.imageAltText}
//                 />
//               </li>
//             ))}
//           </ul>
