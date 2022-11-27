import React, {useEffect, useState} from "react";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";


const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
     };

function Dialogue() {
    const [data, setData] = useState([]);
    const [isLoaded, setLoaded] = useState(false);
    const [page, setPage] = useState(0);
    const API = `https://www.watchnow.com/redesign/json/browse_results.php?type=show&index=${page * 20 + 1}&limit=20`
    console.log(API);
    const fetchAPI = async () => {
        try {
            const res = await fetch(API);
            const data1 = await res.json();
            setData(data.concat(data1['response']))
            setLoaded(true);
            // console.log(data['response'][0].name,'khj');
        } catch (error) {
            console.log(error);
        }
    };



    useEffect(() => {
        fetchAPI(page)
        console.log('clicked')
    }, [page]);
    const fetchMoreData = () => {
        setPage(page + 1);
    }

    return (
        <div>
            <h1>demo: react-infinite-scroll-component</h1>
            <hr/>
            {isLoaded?<div>

                        <InfiniteScroll
                            dataLength={data.length}
                            next={fetchMoreData}
                            hasMore={true}
                            loader={<h4>Loading...</h4>}
                        >
                            {data.map((i, index) => (
                                <div style={style} key={index}>
                                    div - #{index}
                                </div>
                            ))}
                        </InfiniteScroll>
                     </div>:<div>Loading.....</div>
            }



        </div>
    )
}
export default Dialogue;



