import React from 'react'

function WeatherStats(props) {
    const { data } = props;

    return (
        <div class="ui cards">
            <div class="card">
                <div class="content">
                    {data.cod === 200 ? <>
                        <div class="header">{data.name}, {data.sys.country} .Weather</div>
                        <div class="meta">As of now {new Date().toLocaleTimeString()}</div>
                        <div class="description">{data.main.temp}<sup>o</sup> C</div>
                    </> : <>
                            <div class="header">Not Found</div>
                        </>}
                </div>
            </div>
        </div >
    )
}

export default WeatherStats
