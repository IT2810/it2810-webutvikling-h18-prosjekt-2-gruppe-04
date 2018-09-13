import React, {Component} from 'react';
import '../styles/Gallery.css';


class Gallery extends Component {
    render() {
        return (
            <div className="gallery">
                <div className="gallery-wrapper">
                    <svg className="gallery-svg-frame">
                        <rect width="100%" height="100%" fill="#dde"></rect>
                    </svg>
                    <div className="gallery-text-wrapper">
                        <h3>Tittel på bildet</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi sem, porta ut
                            hendrerit sit amet, lacinia a tortor. Aliquam erat volutpat. Cras vitae eros urna. Donec non
                            dolor feugiat, pulvinar turpis blandit, sodales augue. Mauris lorem leo, tempor et faucibus
                            nec, pharetra vitae risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                            tempus dapibus lorem, sit amet iaculis orci varius vel. Nulla facilisi.
                        </p>
                    </div>
                    <div className="gallery-playbar">Playbar</div>
                </div>
            </div>
        )
    }
}

export default Gallery;