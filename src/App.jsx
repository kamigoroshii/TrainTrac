import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LiveStatus from './components/LiveStatus';
import PNRStatus from './components/PNRStatus';
import TrainSearch from './components/TrainSearch';
import TrainSchedule from './components/TrainSchedule';
import SeatAvailability from './components/SeatAvailability';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/live-status" element={<LiveStatus />} />
            <Route path="/pnr-status" element={<PNRStatus />} />
            <Route path="/train-search" element={<TrainSearch />} />
            <Route path="/train-schedule" element={<TrainSchedule />} />
            <Route path="/seat-availability" element={<SeatAvailability />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;