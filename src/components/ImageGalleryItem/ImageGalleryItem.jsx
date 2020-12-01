import React from 'react';
import PropTypes from 'prop-types';

import css from '../ImageGalleryItem/ImageGalleryItem.module.css';


const ImageGalleryItem = (props) => {

  const {webformatURL, largeImageURL, getImg} = props
  
const getLargeImg = () =>{
 getImg(largeImageURL);
}

return (
    <li className={css.ImageGalleryItem}>
    <img src={webformatURL} alt="" className={css.ImageGalleryItem_image} onClick={getLargeImg}/>
  </li>
)
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired
};

export default ImageGalleryItem;
