import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const Clock = () => {

    const [clock, setclock] = useState(new Date().toLocaleTimeString() + ' ' + new Date().toLocaleDateString());
    setInterval(
        () => setclock(new Date().toLocaleTimeString() + ' ' + new Date().toLocaleDateString()),
        1000
    );

    return (<div>
        <h4>{clock}</h4>
    </div>);
}

export default Clock