import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventList from './components/EventDetail/EventList';
import EventDetail from './components/EventDetail/EventDetail';
import SearchResults from './components/SearchResults/SearchResults';
import Home from './pages/Home'; // Ana sayfa veya diğer bileşenler
import './css/style.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/events" element={<EventList />} />
                <Route path="/event/:eventId" element={<EventDetail />} />
                <Route path="/search-results" element={<SearchResults />} /> 
            </Routes>
        </Router>
    );
}
export default App;
