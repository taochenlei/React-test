// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from "./ApprovalCard";

function getTime() {
    // return (new Date()).toLocaleTimeString();
    return (faker.date());
}

// Create a react component
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:00PM" blogContent="Nice blog!" avatar={faker.image.avatar()} />
            </ApprovalCard>

            <CommentDetail author="Sam" timeAgo="Today at 4:00PM" blogContent="Nice blog!" avatar={faker.image.avatar()} />
            <CommentDetail author="Sam" timeAgo="Today at 4:00PM" blogContent="Nice blog!" avatar={faker.image.avatar()} />
            <CommentDetail author="Sam" timeAgo="Today at 4:00PM" blogContent="Nice blog!" avatar={faker.image.avatar()} />
            <CommentDetail author="Sam" timeAgo="Today at 4:00PM" blogContent="Nice blog!" avatar={faker.image.avatar()} />
            <CommentDetail author="Sam" timeAgo="Today at 4:00PM" blogContent="Nice blog!" avatar={faker.image.avatar()} />

        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);