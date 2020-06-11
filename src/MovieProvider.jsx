import React,{Component} from 'react';

const MovieContext = React.createContext();//Creation of the context object
//Developed by Hasindu Dahanayake
class MovieProvider extends Component{

    state={
        movies:[

            {id:1,
                name:"Game of Thrones",
             price:"$15",
                image:"images/gameofthrones.jpg"


            },
            {
                id:2,
                name:"Lord of the Rings",
                price:"$10",
                image:"images/lordoftherings.jpg"
            },
            {
                id:3,
                name:"Breaking Bad",
                price:"$20",
                image:"images/breakingbad.jpg"
            }
            ,
            {id:4,
                name:"Harry Potter",
                price:"$15",
                image:"images/harrypotter.jpg"


            },
            {
                id:5,
                name:"Salt",
                price:"$10",
                image:"images/salt.jpg"
            },
            {
                id:6,
                name:"Taken",
                price:"$20",
                image:"images/taken.jpg"
            }





        ]

    }
    render(){
        return(<MovieContext.Provider value={
            {...this.state

            }
        }>

            {this.props.children}
        </MovieContext.Provider>);
    }
}

const MovieConsumer = MovieContext.Consumer;
export{MovieConsumer,MovieProvider,MovieContext};//exporting the consumer and class



