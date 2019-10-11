// form to user complete de information
import React from 'react';

const WeatherForm = props => (
    <div className="card card-body">
        <form onSubmit={props.getWeather}>
            <div className="form-group">
                <input type="text" name="city" placeholder="your city name" className="form-control" autoFocus/>
            </div>
            <div className="form-group">
                <input type="text" name="country" placeholder="set your country"className="form-control"/>
            </div>
            <button className="btn btn-success btn-block">
                Get Weather !
            </button>
        </form>
    </div>
);

export default WeatherForm ;