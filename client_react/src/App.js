import React, { useState } from 'react';
import AllRoutes from './AllRoutes';

function App() {
    const [slidein, setSlidein] = useState(false);

    const handleslidein = () => {
        setSlidein(!slidein);
    };

    return (
        <div>
            <AllRoutes slidein={slidein} handleslidein={handleslidein} />
        </div>
    );
}

export default App;
