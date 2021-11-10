
import React,{useState, useEffect} from 'react'

function Page1() {

    const [data, setData] = useState([])
    useEffect(() => {
        const url = "https://api.github.com/users"
        fetch(url)
        .then(resp => resp.json())
        .then(resp => setData(resp))
      }, [])
    return (
        <div>
            <h1>Page 1</h1>
            <div>
            <div className="container-fluid mt-5">
                <div className="row text-center">   
                {
                    data.map((elem) => {
                        
                    return (
                        <div className="col-10 col-md-4 mt-5" key={elem.id}>
                        <div className="card p-2">
                            <div className="d-flex align-items-center">
                                <div className="image"> <img src={ elem.avatar_url } className="rounded" width="155" /> </div>
                                <div className="ml-3 w-100">
                                    <h1 className="mb-0 mt-0 textLeft">{elem.login}  </h1>
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

export default Page1
