// Principal Component
import React, { Component } from 'react';
import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';

class App extends Component {

    getWeather = e => {
        const {city, country} = e.target.elements; //get elements "city and country " to inputs in weatherForm

        //save this elements in const

        const cityValue = city.value;
        const countryValue = country.value;
        console.log(cityValue, countryValue) // show values in console
        e.preventDefault(); // cancel reload 
    }
    render (){
        return (
            // html code
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <WeatherForm getWeather={this.getWeather}/>
                        <WeatherInfo/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;