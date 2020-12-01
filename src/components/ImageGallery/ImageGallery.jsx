import React from 'react';
import PropTypes from 'prop-types';

import css from '../ImageGallery/ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({gallery, onClick, getImg}) => (
  <ul className={css.ImageGallery} onClick={onClick}>
    {gallery.map(({id, webformatURL, largeImageURL}) => (
      <ImageGalleryItem key={id.toString()} webformatURL={webformatURL} largeImageURL={largeImageURL} getImg={getImg} />   
    ))}
</ul>
);

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object).isRequired, 
  onClick: PropTypes.func.isRequired
};

export default ImageGallery;
