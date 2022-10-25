import "./category.scss"
const Category =({title,imageUrl})=>(
    
        <div className="category-container" >
        <div className="background-image" style={{background: `url(${imageUrl})`}}></div>
  <div className="category-body">
    <h2>{title}</h2>
    <p>Shop Now</p>
  </div>
          </div>
   
)
export default Category