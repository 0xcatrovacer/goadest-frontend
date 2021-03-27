import './App.css';
import Footer from './components/Footer';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Router>
                <Footer />
                <Switch>
                    <Route path='/about' />
                    <Route path='/Contact-Us'/>
                    <Route path='/Help-and-Support'/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
