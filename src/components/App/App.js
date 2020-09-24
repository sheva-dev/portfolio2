import React from 'react';
import Sections from '../../sections/Sections/Sections';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Sections />
            </BrowserRouter>
        </div>
    );
}

export default App;
