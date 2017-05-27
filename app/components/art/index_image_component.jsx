import React from 'react';
import { Link } from 'react-router-dom';

import ArtShow from './art_show_component';

function unBlur(e) {
  console.log(e.target)
}

class IndexImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHovered: false
    }

    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    this.setState(prevState => ({
      isHovered: !prevState.isHovered
    }));
  }

  render() {
    const { image } = this.props;
    return (
      <div key={image.title} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        <Link to={`/art/${image.slug}`}>
          <img
            className='portfolio-image'
            src={this.state.isHovered ? image.inFocusIndex : image.blurredIndex}
            alt={image.indexAltText} />
        </Link>
      </div>
    );
  }
}

export default IndexImage;
