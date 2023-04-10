import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css"

export const FeaturedProperties = () => {

	const { data, loading, error } = useFetch("/hotels?featared=true");

  return (
	<div className="fp">
	  {loading ? ("loading") : (
	  <>  
		{data.map((item) => (
		    <div className="fpItem" key={item._id}>
			   <img src={item.photos[0]} alt="" className="fpImg" />
			   <span className="fpName">{item.name}</span>
			   <span className="fpCity">{item.cite}</span>
			   <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
			   {item.rating && 
			       <div className="fpRating">
				      <button>{item.rating}</button>
				      <span>Excellent</span>
			        </div>
				}
		    </div>))
		}
	  </>)}
	</div>
  )
}
