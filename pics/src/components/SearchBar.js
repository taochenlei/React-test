import React from "react";

class SearchBar extends React.Component {
    state = {term: ''};

    onFormSubmit(event) {
        event.preventDefault();

        this.props.onSubmit(this.state.term)

// warning 1: console log will have this error message: TypeError: Cannot read property 'state' of undefined
//         console.log(this.state.term);
    };

// solution 2 to warning 1:
//     onFormSubmit = event => {
//         event.preventDefault();
//         console.log(this.state.term);
//     };

    render() {
        return (
            <div className='ui segment'>
                {/*<form onSubmit={this.onFormSubmit} className='ui form'>*/}
{/*solution 1 to warning 1: */}
                <form onSubmit={event => this.onFormSubmit(event)} className='ui form'>
                    <div className='field'>
                        <label>Image Search</label>
                        {/*<input type='text' onChange={this.onInputChange} />*/}
                        <input
                            type='text'
                            value={this.state.term}
                            onChange={e => this.setState({term: e.target.value})} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
