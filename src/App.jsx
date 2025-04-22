import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import SignIn from './components/adminAuth/SignIn';
import Dashboard from './components/dashboard/Dashboard';
import AllJonomot from './components/pages/AllJonomot';
import Home from './components/pages/Home';
import JulyBiplob from './components/pages/JulyBiplob';

function App() {
    return (
        <div className=''>
            {/* <Test /> */}
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/all-votes' element={<AllJonomot />} />
                    <Route path='/july-biplob' element={<JulyBiplob />} />
                    <Route path='/sign-in' element={<SignIn />} />
                    <Route path='/dashboard/*' element={<Dashboard />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
