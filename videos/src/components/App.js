import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from '../apis/Youtube';


class App extends React.Component {
    state = {videos: [], selectedVideo: null};

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {q: term}
        });
        this.setState({videos: response.data.items})
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    };

    render() {
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                I have {this.state.videos.length} videos.
                <VideoDetail/>
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        );
    }
}

export default App;