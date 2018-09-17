import React, {Component} from 'react';
import '../styles/Gallery.css';


class Gallery extends Component {

    constructor(props) {
        super(props);
        this.audio = React.createRef();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.audio !== this.props.audio) {
            this.audio.current.load();
        }
    }

    render() {
        return (
            <div className="gallery">
                <div className="gallery-wrapper">
                    <div className="gallery-svg-frame" dangerouslySetInnerHTML={{__html: this.props.svg}}>

                    </div>
                    <div className="gallery-text-wrapper">
                        <h3>Om bildet</h3>
                        <p>
                            {this.props.text}
                        </p>
                    </div>
                    <div className="gallery-playbar">
                        <audio controls ref={this.audio} autoPlay >
                            <source src={this.props.audio} type="audio/mpeg" />
                            If you see this text, your browser doesn't support the audio tag.
                        </audio>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery;