import React, {Component} from 'react';
import '../styles/Gallery.css';
import PropTypes from 'prop-types';

class Gallery extends Component {

    // Constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="gallery">
                <div className="gallery-wrapper">
                    <div className="gallery-svg-frame" dangerouslySetInnerHTML={{__html: this.props.svg}}>

                    </div>
                    <div className="gallery-text-wrapper">
                        <h3>Om bildet:</h3>
                        <p>
                            {this.props.text}
                        </p>
                    </div>
                    <div className="gallery-playbar">
                        <audio controls src={this.props.audio} autoPlay >
                            If you see this text, your browser doesn't support the audio tag.
                        </audio>
                    </div>
                </div>
            </div>
        )
    }

    static propTypes = {
        svg: PropTypes.string,
        text: PropTypes.string,
        audio: PropTypes.string,
    }
}

export default Gallery;