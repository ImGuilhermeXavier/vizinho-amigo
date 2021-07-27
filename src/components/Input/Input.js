import React from 'react'
import { isMobile } from 'react-device-detect'

import './Input.scss'

function Input({
    id,
    value,
    type,
    onChange,
    label,
    inputSize,
    error,
    remake,
    onBlur,
    placeholder,
    disabled,
    hideErrorMessage,
    autoCapitalize,
}) {
    return (
        <div className='input__block'>
            {label && (
                <label htmlFor={id} className='input__label'>
                    {label}
                </label>
            )}
            <input
                type={type}
                className={`input ${
                    error ? 'input--error' : ''
                } input--${inputSize} ${remake && 'input--remake'}`}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                disabled={disabled}
                autoCapitalize={autoCapitalize}
            />
            {error && !hideErrorMessage && (
                <p className='input__error'>{error}</p>
            )}
        </div>
    )
}

Input.defaultProps = {
    inputSize: isMobile ? 'md' : 'sm',
}

export default React.memo(Input)
