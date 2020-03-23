import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return (
        <div>
            PageOne
            <Link to='/p2'>Navigate to page two</Link>
        </div>
    );
}

const PageTwo = () => {
    return (
        <div>
            PageTwo
            <Link to='/'>Navigate to page one</Link>
        </div>
    );}
    
    const App = () => {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path='/' exact component={PageOne} />
                        <Route path='/p2' exact component={PageTwo} />
                    </div>
                </BrowserRouter>
            </div>
    );
};

export default App;
