import React,{Component} from 'react';

const MovieContext = React.createContext();//Creation of the context object
class MovieListContext extends Component{

    state={
        movies:[

            {id:1,
                name:"Game of Thrones",
             price:"$15"


            },
            {
                id:2,
                name:"Lord of the Rings",
                price:"$10"
            },
            {
                id:3,
                name:"Breaking Bad",
                price:"$20"
            }


            ]

    }

}