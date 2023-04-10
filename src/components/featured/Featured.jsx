import useFetch from "../../hooks/useFetch";
import "./featured.css"

export const Featured = () => {

    const { data, loading, error } = useFetch("/hotels/countByCity?cities=Berlin,Dublin,Lviv");

  return (
	<div className="featured">
		{loading ? (
			"Loding please wait"
		) : (
		<>
		   <div className="featuredItem">
			    <img src="https://cf.bstatic.com/xdata/images/hotel/270x200/304587453.jpg?k=8014fc0a5c746e0568f869b03b8da0668bf9c6c262c2968b72a9a7b1bd5384e2&o=" alt="" className="featuredImg" />
			    <div className="featuredTitles">
				  <h1>Berlin</h1>
				  <h2>{data[0]} properties</h2>
			    </div>
		    </div>
		    <div className="featuredItem">
			    <img src="https://cdn4.picryl.com/photo/2014/01/01/the-historic-driskill-hotel-in-downtown-austin-texas-a-romanesque-style-building-1024.jpg" alt="" className="featuredImg" />
			    <div className="featuredTitles">
				   <h1>Dublin</h1>
				   <h2>{data[1]} properties</h2>
			    </div>
		    </div>
		    <div className="featuredItem">
			    <img src="https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/79478330.jpg?k=ccab96c0ce8d9efd74647949486bd21f4058f3def419e1652673b03c4235f101&o=" alt="" className="featuredImg" />
			    <div className="featuredTitles">
				   <h1>Lviv</h1>
				   <h2>{data[2]} properties</h2>
			   </div>
		    </div>
		</>)}
	</div>
  );
};
