import React from "react";

const Weather = (props) => {
    return (
        <div className='container text-light'>
            <div className="cards pt-4">
                <h1> {props.city}</h1>
                <h5 className='py-4'>
                    {/* eslint-disable-next-line no-template-curly-in-string */}
                    <i className={`wi ${props.weather_icon} display-1`}/>
                </h5>

                {/*{props.celsius ? (<h1 className='py-2'>{props.temp_celsius}&deg;</h1>) : null}*/}

                <h1 className='py-2'>{props.temp_celsius}&deg;</h1>

                {/*  show min and max Temp  */}
                {minmaxTemp(props.temp_min, props.temp_max)}
                <h4 className='py-3'>{props.description}</h4>
            </div>
        </div>
    )
};

function minmaxTemp(min, max) {
    if (min && max) {
        return (
            <h3>
                <span className="px-4">{min}&deg;</span>
                -
                <span className="px-4">{max}&deg;</span>
            </h3>
        );
    }
}

export default Weather;