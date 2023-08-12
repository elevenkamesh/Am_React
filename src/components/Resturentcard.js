const Resturentcard = (props)=>{
    const {resdata} = props;
    const { name ,cloudinaryImageId,avgRating , costForTwo , cuisines , locality}= resdata?.info;
    console.log(resdata);
    return (
         <div className="res-card">
              <img className="img-res"
              src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
              <h3>{name}</h3>
              <h4>{cuisines.join(", ") } </h4>
              <h4>{avgRating} </h4>
              <h4>{locality}</h4>
         </div>

    );
};


export default Resturentcard;