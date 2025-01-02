
import { useState } from "react";
import axios from "axios";

function App() {

let[searchtxt,searchbarelement] = useState('');
let[searchdata,buttondata]   = useState([]);



function searchbartxt(e){

  searchbarelement(e.target.value)




}

async function getdata(){

     try{
        let urllink = 'https://dummyjson.com/products/search?q=' + searchtxt

        let mainurl = await axios.get(urllink)

        buttondata(mainurl.data.products)}

      catch (ex){
        alert(ex.message("invalid input"))

      };
}




  return (

    <div className="container">


      <div className="row justify-content-center mt-4">
          <div className="col-6">

             <input type="text" className="form-control" placeholder="Search" onChange={e => (searchbartxt(e))}  />


          </div>
          <div className="col-3">
            <button className="btn btn-warning" onClick={e => (getdata()) }>Search</button><br/>
          



          </div>


          








      </div>

      {searchdata.map(product =>(
                <div className="row mt-4">

                  <div className="col-3 mb-">

                    <img src={product.thumbnail} className="image-fluid"/>
                  </div>
                  <div className="col-6 mt-4 ml-2 mr-5">

                    <h1>{product.brand}</h1>
                    <p>{product.description}</p>
                    <p>{product.price}$</p>
                  </div>









                </div>




          ))}





    </div>
    
       
  )
}

export default App;
