import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import WeatherStats from './weatherStats';

function WeatherReport() {
    const AppKey = 'cb37cdc14570b523ec72acea723a85ee';
    const [cityName, setCityName] = useState('');
    const [cityTemp, setCityTemp] = useState();
    const [weather, setWeather] = useState([]);

    const handleChange = (e) => {
        setCityName(e.target.value);
    }

    const submitCityName = async (e) => {
        e.preventDefault();
        const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${AppKey}&units=metric`)
            .then(response => response.json())
            .then(data => (data))
            .catch(function (error) {
                console.log('There has been a problem with your fetch operation: ',
                    error.message);
                setCityTemp();
            });
        setWeather({
            data: data
        });
    }

    return (
        <div>
            <Card style={{ width: '20rem', boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
                <form className="container form-group" onSubmit={submitCityName}>
                    <h3>Weather Report</h3>
                    <div>
                        <input type="text" name="cityName" onChange={handleChange} placeholder="Add City Name"
                            className="cityName form-control" value={cityName} />
                    </div>
                    <div colSpan="2" style={{ textAlign: 'center' }}><Button type="submit">Submit</Button></div>
                </form>
            </Card>
            {weather.data != undefined ? <WeatherStats data={weather.data} /> : null}

        </div>
    )
}

export default WeatherReport
