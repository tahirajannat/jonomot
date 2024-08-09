import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Dashboard from './components/dashboard/Dashboard';
import AllJonomot from './components/pages/AllJonomot';
import Home from './components/pages/Home';

function App() {
    return (
        <div className='bg-gray-100'>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/all-votes' element={<AllJonomot />} />
                    <Route path='/dashboard/*' element={<Dashboard />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
