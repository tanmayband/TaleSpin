import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";

import Tabletest from './tabletest';
import Testpad from './testpad';

function RouterMain()
{
    return(
        <Router>
            <div>
                {/* A <Routes> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Routes>
                    <Route path="/todo" element={<Tabletest timeline="ToDo"/>}/>
                    <Route path="/" element={<Tabletest timeline="MainStory"/>}/>
                    <Route path="/testpad" element={<Testpad/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default RouterMain;