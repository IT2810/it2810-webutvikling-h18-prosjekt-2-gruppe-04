import React, { Component } from 'react';
import '../styles/CustomRadioButton.css';
import PropTypes from 'prop-types';

class CustomRadioButton extends Component {

    // Checks the checkbox using JavaScrips since using the 'checked' tag in HTML
    // gave weird results. Also calls Ajax to fetch initial svg, text and audio.
    componentDidMount() {
        if (this.props.defaultChecked) {
            let radio = this.refs[this.props.value];
            radio.checked = true;
            this.props.onChange(this.props.group, this.props.value);
        }
    }

    render() {
        return (
            <label>
                {this.props.title}
                <input type='radio' className="sidebar-radio" name={this.props.group} value={this.props.value}
                       ref={this.props.value} onChange={()=>this.props.onChange(this.props.group, this.props.value)} />
                <span className="custom-radio" />
            </label>
        );
    }

    static propTypes = {
        title: PropTypes.string,
        group: PropTypes.string,
        value: PropTypes.string,
        defaultChecked: PropTypes.bool,
        onChange: PropTypes.func,
    }

}

export default CustomRadioButton;