import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import MainLayout from './Components/MainLayout';
import { DataFile } from './Assets/Data/Data';
import { selection } from './Assets/Constants';
import './Styles/Main.css';
function App() {
    const [data, setData] = useState();
    useEffect(() => {
        const selected = DataFile.find((item) => item.TITLE === selection);
        setData(selected);
    }, []);

    return (
        <div className='main'>
            <Header data={data} />
            <MainLayout data={data} />
        </div>
    );
}

export default App;
