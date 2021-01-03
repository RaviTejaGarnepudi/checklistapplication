import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import WeatherStats from './weatherStats';

function WeatherReport() {
    const AppKey = 'cb37cdc14570b523ec72acea723a85ee';
    const [cityName, setCityName] = useState('');
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
            });
        setWeather({
            data: data
        });
    }

    return (
        <div className="container">
            <Card style={{ width: '20rem', boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
                <form className="container form-group ui form" onSubmit={submitCityName}>
                    <Card.Body>
                        <Card.Title>Weather Report</Card.Title>
                        <div class="field">
                            <label>Enter City/State Name</label>
                            <input type="text" name="cityName" onChange={handleChange} placeholder="Enter City/State Name"
                                className="cityName form-control" value={cityName} />
                        </div>
                        <div class="field" colSpan="2" style={{ textAlign: 'center' }}>
                            <Button type="submit">Submit</Button>
                            </div>
                    </Card.Body>
                </form>
                {weather.data !== undefined ? <WeatherStats data={weather.data} /> : null}
            </Card>
        </div>
    )
}

export default WeatherReport
