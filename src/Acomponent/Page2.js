
import React,{useState, useEffect} from 'react'

function Page2() {

    const [data, setData] = useState([])
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/users"
        fetch(url)
        .then(resp => resp.json())
        .then(resp => setData(resp))
      }, [])
    return (
        <div>
            <h1>Page 1</h1>
            <div id="user">
            <div className="container-fluid mt-5">
                <div className="row text-center">   
                {
                    data.map((elem) => {
                        
                    return (
                        <div className="col-10 col-md-4 mt-5" key={elem.id}>
                        <div className="card p-2">
                            <div className="d-flex align-items-center">
                                <div className="ml-3 w-100">
                                <div className="ml-3 w-100">
                                <h1 className="mb-0 mt-0 textLeft">{elem.name} </h1>
                                <h4><span>UserName:-</span>{elem.username} </h4>
                                <h4><span>Phone:-</span>{elem.phone} </h4>
                                <h4><span>Email:-</span>{elem.email} </h4>
                                
                                 <div>
                                 <address> 
                                    <span>Visit us at:</span><a href="" className="mb-0 mt-0 textLeft">Website:-{elem.website} </a><br />
                                    <h1>Address</h1>
                                    <span>street:</span><i>{elem.address.street}</i><br/>
                                    <span>suite:</span><i>{elem.address.suite}</i><br/>
                                    <span>city:</span><i>{elem.address.city}</i><br/>
                                    <span>zipcode:</span><i>{elem.address.zipcode}</i><br/>
                                    
                                    </address>
                                 </div>
                              </div>
                                </div>
                            </div>
                      </div>
                    </div>
                        )
                })        

                }
                    
                </div>
            </div>
        </div>
            </div>
    )
}

export default Page2

