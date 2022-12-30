import React, {useState} from "react";
import {Button} from "@mui/material";
function PeopleInfo({actor}) {
// actor['peopleInfo'][0]['biography'].slice(0,250)
    console.log(actor['peopleInfo'])
    const [expand, setExpand] = useState('Read More');
    const expandText = (e) => {
          e.preventDefault()
        if (expand === 'Read More') {
            setExpand('Read less');
        } else {
            setExpand('Read More')
        }}

        return (
            <div>
                <div className={'container'} style={{height:'500px',position:'relative'}}>
                    <div className={'row'} style={{marginTop: '20px'}}>
                        <div className={'col-3'}>
                            <div style={{height: '240px', width: '240px'}}
                                 className="card-img card-img--lg position-relative">
                                <img
                                    src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${actor['peopleInfo'][0]['profile_path']}`}
                                    className={'transitionImage card'}/>
                            </div>
                        </div>
                        <div className={'col-9'}>
                            <h3>
                                {actor['peopleInfo'][0]['name']}
                            </h3>

                            <div className={'card'}>
                                <h5>
                                    Bio
                                </h5>
                                {actor['peopleInfo'][0]['biography'].length > 0 ?

                                    <div>
                                        {actor['peopleInfo'][0]['biography'].length > 250 ? <span>
                                            {expand==='Read More'?<span>{actor['peopleInfo'][0]['biography'].slice(0,250)}...
                                            <span onClick={()=>setExpand('Read less')} style={{color:'blue',cursor:'pointer'}}>{expand}</span>
                                            </span>:<span> {actor['peopleInfo'][0]['biography']}
                                                <span onClick={()=>setExpand('Read More')} style={{color:'blue',cursor:'pointer'}}>{expand}</span></span>}
                                  </span> : <span>{actor['peopleInfo'][0]['biography']}</span>}
                                    </div>

                                    : <h6 style={{color: 'red'}}> not found bio</h6>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'container'} style={{marginTop:'1px'}}>
                    <div className={'row'}>
                        <div className={'col-3'}>
                         <div className={'people-bio-info'}>
                             <h4>
                              Personal Info
                             </h4>
                             <div>
                                 <b>Famous For</b> <br/>
                                 {actor['peopleInfo'][0]['known_for_department']}
                             </div>
                              <br/>
                             <div>
                                 <b>Birthday</b> <br/>
                                 {actor['peopleInfo'][0]['birthday']}
                                 {actor['peopleInfo'][0]['death_day']!=='None'?<div><b>Birthday</b> <br/>
                                 {actor['peopleInfo'][0]['death_day']}</div>:<div></div>}
                             </div>
                              <br/>
                             <div>
                                 <b>Place of Birth</b> <br/>
                                 {actor['peopleInfo'][0]['place_of_birth']}
                             </div>

                             <div>
                                 <b>Gender</b> <br/>
                                 {actor['peopleInfo'][0]['gender']===1?<div>Female</div>:<div>Male</div>}
                             </div>

                         </div>

                        </div>
                    </div>
                </div>

            </div>
        )

}
export default PeopleInfo;