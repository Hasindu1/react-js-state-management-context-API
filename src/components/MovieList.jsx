import React,{Component} from "react";
import {MovieConsumer} from '../MovieProvider.jsx';
import {MovieContext} from '../MovieProvider';
import Movie from "./Movie";
//Developed by Hasindu Dahanayake
export default class MovieList extends Component{
    state={
        movieList:[],
        sample:null
    }
    componentWillMount() {
       this.setState({movieList:this.context.movies})

    }

    render(){
        return(
        <React.Fragment>

         <div className="container">
             <h1 className="text-center mb-5">Greatest Movies and TV Shows All Time</h1>

             <div className="row">
                 {this.state.movieList.map(movie=>{
                     return(<Movie movie={movie}></Movie>)
                 })}



             </div>
         </div>
        </React.Fragment>
        );
    }

}
MovieList.contextType=MovieContext;