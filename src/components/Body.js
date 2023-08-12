import Resturentcard from "./Resturentcard";
import resList from "../../utils/mockData";
const Body = () =>{
    return (
         <div className="body">
              <div className="search">
                  <input type="text" placeholder="Enter Dish Name..."></input>  
                  <button>Search</button>
              </div>
              <div className="res-container">
                 
                    {resList.map((resto) =>
                    (
                        <Resturentcard key= "resto.id" resdata={resto}/>
                    ))}

              </div>



         </div>

    )
}

export default Body;