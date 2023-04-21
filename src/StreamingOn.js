import React, {useEffect, useState} from "react";
import './App.css'
function StreamingOn(){

    const [loaded, setLoaded] = useState(false);
    const [data,setData] = useState([]);
    const FetchAPI = async ()=> {
        try {
            console.log(data, "*****************************************************************************************")
            const res = await fetch(`https://www.binged.com/wp-json/binged-api/v1/movies?mode=streaming-month&page=1`);
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
            <div >
                {loaded?
                 data['data'].map((currentData)=> {return(
                     <div>
                         {/*<div className="container">*/}
                         {/*    <div className="row" >*/}
                         {/*         <hr/>*/}
                         {/*        <div className={'col-2'}>*/}
                         {/*            <img src={currentData['image']} style={{height:'120',width:120}} alt={currentData['title']}/>*/}
                         {/*        </div>*/}
                         {/*        <div className={'col-2'}>*/}
                         {/*            <p>{currentData['title']}</p>*/}
                         {/*        </div>*/}
                         {/*        <div className={'col'}>*/}
                         {/*            <p>{currentData['platforms'][0]['name']} | <span>{currentData['streaming-date']}</span></p>*/}
                         {/*        </div>*/}

                         {/*    </div>*/}

                         {/*</div>*/}
                         <div className={'flex-container marginContent coverCard'}>
                                <div>
                                    <img src={currentData['image']} style={{height:'120',width:120}} alt={currentData['title']}/>
                                </div>
                                <div className={'flex-container media-flex-container'}>
                                    <div>
                                        <p>{currentData['title']}</p>
                                    </div>

                                    <div>
                                     <p>{currentData['platforms'][0]['name']} | <span>{currentData['streaming-date']}</span></p>
                                    </div>
                                    <div>
                                        <img className={'ottImage'} src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAAB2CAMAAAAJDgSzAAAAaVBMVEUAAACxBg/lCRQ3AgS5BhC8Bg+0Bg/oCRTvCRWABAuZBQwaAQKuBg+LBQxqAwmlBQ6gBQ6UBA4hAQPdCBN6BQvSCBMKAAHEBxFvBApNAgeGBAzXCBPKBxFkBAgmAQRCAgZcAwhVAwcxAQSxKJ/iAAADkklEQVR4nO2cUXOjIBSF0RqJBASiSRRNk+z//5ELxqZ6aWd2+rC7nuG83plOvuFwrwepjCUlJSUlJSUlJSUlbVlWrdUel9W+Xqs7fvd3/l/l+7X4dVl1u2Kly9u/+p0/14XnK+3tslqV2Uq7DRIWzRqRN8sqAmE55mQR+0UVgrCghNmiikBYmIYgNu+fVQhCTXsNbz+rEISZoYTys4pBKAbaTW+vKgahLulI7F5VDEJJew0fX1UMwsye6CK+nj5BCEVkU/dRBSHUinbT8TxXQQilojZt7nMVhVDo7wIGCKG3Ke2mp7nX4BBGKXEe+iiE0uqcEOpnFYUwE9Sm+ZyDYQi1iwJGPVVbGEJr94TwmYNhCKWp6HHNaeo1QISu+DJgtBkKobaCdtNdqMIQZlq4KGCEKg6ht2kUMCpfbaVEIdRKEZvyC8MiFNVAA0bPWCfXiBsmlMJpMhJDwOg0CqHfiMpRm+6OnlDDEGobP7n1rDNAhN6mtJuKiVBiEGbaqCgHN+wq1ou4ZUJpbBvl4AcUod+IhgYM/bDCLG26bUJhW9pNx1oBEXqbVjvaTY2zK5tumTAsohLR0XBlxbKbbp4wChi5U2I59DdO6G0a5WBdrWy6aUI/Ea2jOZifWiDC0E2jgJFb3001DKG3aUZHYrmy6fYJVfyizYVuCkI42XT8wqYohNMiOkkXMfM2fU3ErRNKI5waCOHQLmwKQGjr6MxNKRjCYFPRtbSbFsGmQIQto61mCE/fMITatEySRcyFEyiEYRGr8z226WsjAhDq6vw+0pt8ThkYQqndgUXXMb1NsQivZB/ySyXmmb95Qo+oDoxFT27OaixCEZ25OYNCmEnrCd8p4fgxLwAIs0AY2bSxs01hCF1k03lewBD20d2TCoawFIHwTM/cuO+mKITTGjJ6mLHPFBjhgQxEHzAmmyIQTi5ljL7ByIUFI4wDxmRTIMIj/VehwYIRMnr3hIuwEZEIa7IP+cWCEdIcnOdhIyIRxjbVBozwLQoYFoyQRTf5hAQjVHQRpQYjvNFuOhowwmP85CaxCKOAwUsNRnijN/kGA0YYffck1wUYYUff0VxKMMIz3YgDmkvjF21b/MbQk7Asp48kleV8ijHLBwzOnx9X4mE9+enXP/uhP9bOq5DGura+3h99fzsvisfH9Vp3rRO6GJsJdYOE7f32p9/vOtxqsUHCpKSkpKSkpKSkpKSkpKSkv6nfb1ZDSgVhl9AAAAAASUVORK5CYII='} style={{height:'120',width:120}}/>
                                    </div>
                                </div>

                         </div>

                     </div>


                    )})
                // <h1> h</h1>
                    :<h1> loading...</h1>}
            </div>
        </div>
    )
}

export default StreamingOn;