import React, { Component } from 'react';
import '../styles/CustomRadioButton.css';
import PropTypes from 'prop-types';

class CustomRadioButton extends Component {

    componentDidMount() {
        if (this.props.checked) {
            let radio = this.refs[this.props.value];
            radio.checked = true;
        }
    }

    render() {
        return (
            <label>
                {this.props.title}
                <input type='radio' className="sidebar-radio" name={this.props.groupname} value={this.props.value}
                       ref={this.props.value} />
                <span className="custom-radio" />
            </label>
        );
    }

    static propTypes={
        title: PropTypes.string,
        groupname: PropTypes.string,
        value: PropTypes.string,
        checked: PropTypes.bool,
    }

}

export default CustomRadioButton;