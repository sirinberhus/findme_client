import React from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import EventList from '../components/EventList';
import Contact from '../components/Contact';

function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <SearchBar />
        <EventList />
        <Contact />
      </main>
    </div>
  );
}

export default Home;
