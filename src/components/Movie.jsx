import React,{Component} from "react";
import '../Movie.css';
//Developed by Hasindu Dahanayake
export default class Movie extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div className="col-md-4 mb-5">


                <div className="card">

                        <img src={this.props.movie.image}alt="product" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.movie.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up
                            the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )


    }
}