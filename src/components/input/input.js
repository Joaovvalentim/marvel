import './input.css';
import React from 'react'
import { MdError } from "react-icons/md";
import InputMask from 'react-input-mask';



const Input = ({ name, handleOnBlur, error, onChange,value,placeholder }) => {


    return (
        <>
            <div className="input"> 
                <InputMask
                    className={error?.some((val) =>
                        val.prop === name
                    ) ? "inputcsserror" : "inputcss"}
                    // autoComplete="off"
                    name={name}
                    onChange={onChange }
                    value={value}
                    onBlur={handleOnBlur && ((event) => handleOnBlur(event, name))}
                    placeholder={placeholder}
                />
            </div>
            {error?.some((val) => val.prop === name)
             && (
             <div className="renderClss">
                <MdError
                    className='svgerror' />
                <div className='spacechinactive'></div>
                <p className='textchinactive'>{error?.find((val) =>val.prop === name)?.errorMessage}</p>
            </div>)}
        </>
    );
}

export default Input;