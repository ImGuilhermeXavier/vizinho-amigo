import React from 'react'
import { isMobile } from 'react-device-detect'
import Loading from '../Loading/Loading'
import './Button.scss'


function Button({
    children,
    className,
    loading,
    size,
    buttonType,
    ...props
}) {
    return (
        <button
            {...props}
            className={`button button--${buttonType} button--${size} ${
                className ? className : ''
            }`}
            style={{ opacity: loading ? 0.7 : 1 }}
        >
            {loading ? <Loading /> : children}
        </button>
    )
}

Button.defaultProps = {
    size: isMobile ? 'md' : 'sm',
}

export default React.memo(Button)
