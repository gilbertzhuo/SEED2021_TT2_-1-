import React from 'react';
import { withRouter } from 'react-router-dom';

function Home() {

    return (
        <div>
            <h1> This is the homepage! </h1>
        </div>
    )
}

export default withRouter(Home)