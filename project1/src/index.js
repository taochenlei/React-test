// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click on me!';
}

// Create a react component
const App = () => {
    const buttonText = {text: 'Click Me!'};
    const buttonStyle = {backgroundColor: 'blue', color: 'white'};
    const labelText = 'Enter name:';

    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text"/>
            <button style={buttonStyle} >
                {buttonText.text}
            </button>
        </div>
    );
};

// class App extends React.Component {
//     method1() {
//         if(this.props.showMe === true) {
//             return <div>In</div>;
//         }
//     }
//
//     render() {
//         return (
//             <React.Fragment>
//                 <p>Something</p>
//                 {this.method1()}
//             </React.Fragment>
//         );
//     }
// }

// Take the react component and show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);