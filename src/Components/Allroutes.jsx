import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import Taskpage from '../Taskpage/Taskpage';
import Notespage from '../Notespage/Notespage';

const Allroutes = () => {
    
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/taskpage" element={<Taskpage/>} />
                <Route path="/notespage" element={<Notespage />} />
            </Routes>
        </div>
    );
};

export default Allroutes;