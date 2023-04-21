import React, {useEffect, useState} from "react";

function TrendingMovies(){

    const [loaded, setLoaded] = useState(false);
    const [data,setData] = useState([]);
    const FetchAPI = async ()=> {
        try {
            console.log(data, "*****************************************************************************************")
            const res = await fetch(`http://localhost:8000/popular-content`);
            const jsonData = await res.json();

            setData(jsonData)
            console.log('fetchapi', data)
            setLoaded(true)

        } catch (error) {

            console.log(error,'-------------------------------------------------------------deepak');
        }
    }

    useEffect(()=>{

            FetchAPI()
        console.log(data,'--------------------------------------------------------------------')


    },[loaded]);

    return(
        <div>
            {loaded?

                data['popularMoviesShows'].map((currentData)=>{
                    return(
                        <div>

                            <div className="container">
                                <div className="row">
                                    <div ><img src={'https://www.justwatch.com/images'.concat(currentData['image_url'])} alt={currentData['name']}/></div>
                                </div>
                            </div>


                        </div>
                    )
                })
                :<h1>Loading....</h1>}
        </div>
    )
}

export default TrendingMovies;