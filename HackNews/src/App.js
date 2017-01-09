import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stories: [],
        };
    }

    componentDidMount() {
        $.ajax({
            url: "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty",
            method: "GET"
        }).done((response) => {
            let stories = response.item;
            //binds variable pokemon to state pokemon not sure which is which...
            this.setState({ stories: stories });
            console.log(response);
            //response is slow possible beacuse of limit amount
        });
    }

    //Another api call needs to be made using index
    // it is setting a 'currentPokemon' property in state
    // ui is added to render that currentPokemon details

    selectStory(index) {
        this.setState({ currentTopStory: this.state.stories[index] });
    }


    render() {
        // onClick takes a function and when the element that onClick is
        // bound to, that function is called.

        let headLines = this.state.stories.map((TopStories, i) => {
                return ( < li key={ i }
                    onClick={
                        ()=>{ this.selectStory(i) } } > { TopStories.title} </li>);
                });



            let headLine
            let content
            if (this.state.currentTopStory) {
                headLine=this.state.currentTopStory.title;
                content='Content: ' + this.state.currentTopStory.text;
            } else {
                headLine="Your Selected News Story";
            }

            return ( < div className="App" >
                < h1 > Hacker News: Top Stories... < /h1>
                < div className="planets-list-container" >
                < ul className="list" > { headLines }
                < /ul>
                < /div>
                < hr / >
                < div className="selected" >
                { headLine }
                < div className="content" >
                { content } < /div>
                < /div>
                < /div>
            );
        }
    }


    export default App;
