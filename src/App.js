import React,{Component} from 'react';
import MovieList from "./components/MovieList";

export default class App extends Component{
    render(){
        return(
            <React.Fragment>
              <MovieList/>
            </React.Fragment>
        )
    }
}
