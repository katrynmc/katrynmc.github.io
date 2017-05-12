import React from 'react';

import R from 'ramda';
import PORTFOLIO from 'Config/images_index';

const { propEq, pipe, find } = R;

const findImage = (imageSlug) => {
  return find(propEq('slug', imageSlug))(PORTFOLIO)
}

const ArtShow = ({ match }) => {
  const image = findImage(match.params.image);

  return (
    <div className='art'>
      <div className='details-panel'>
        <h6>{image.medium}</h6>
        <h3>{`${image.title}, ${image.year}`}</h3>
        <p className='description'>{image.description}</p>
      </div>
      <div className='image-container'>
      </div>
    </div>
  );
};

export default ArtShow;
