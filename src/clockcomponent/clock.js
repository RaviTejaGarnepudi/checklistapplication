import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const Clock = () => {

    const [clock, setclock] = useState(new Date().toLocaleTimeString() + ' ' + new Date().toLocaleDateString());
    setInterval(
        () => setclock(new Date().toLocaleTimeString() + ' ' + new Date().toLocaleDateString()),
        1000
    );

    return (<div style={{float:'right'}}>
        <Card style={{ width: '17rem', boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
            <h4>{clock}</h4>
        </Card>
    </div>);
}

export default Clock