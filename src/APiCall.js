import React, {useEffect} from "react";

function APiCall(){
//     fetch('http://localhost:8000/rated-movie-users', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     "movieID":2,
//     "rated":7,
//     "user_name":"dk899097"
// })
// })


    useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
    "movieID":"2",
    "rated":7,
    "user_name":"dk899097"
})
    };
    fetch('http://localhost:8000/rated-movie-users', requestOptions)
        .then(response => response.json())
        .then(data => console.log('response',data));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);


console.log('gg')
    return(
        <div>
            Hi Deepak Saini
        </div>
    )
}
export default APiCall;