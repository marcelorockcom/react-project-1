import { Component } from "react";
import './styles.css'

export default class Button extends Component {
    render() {
        const { onClick, text, disabled } = this.props
        return (
            <button
                text={text}
                onClick={onClick}
                disabled={disabled}
                className='button'>
                {text}
            </button>
        )
    }
}