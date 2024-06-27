import { useState } from "react"

function Card2({cart, setCart}){
let [toggle, setToggle] = useState(true)
  return <div className="col mb-5">
  <div className="card h-100">
      <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
      <img className="card-img-top" src="https://tse1.mm.bing.net/th?id=OIP.wkiGCNa4ZWyFg1WIufkoEwHaFj&pid=Api&P=0&h=180" alt="img" width={450} height={300}/>
      <div className="card-body p-4">
          <div className="text-center">
              <h5 className="fw-bolder">Samsung Air COnditioner</h5>
              <span className="text-muted text-decoration-line-through">$500.00</span>
              $450.00
          </div>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {
            toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
              setCart(cart+1) 
              setToggle(false)
              }}>
              Add to Cart
            </button>:<button className="btn btn-outline-dark mt-auto" onClick={()=>{
              setCart(cart-1) 
              setToggle(true)
              }}>
              Remove from Cart
            </button>
            }
      </div>
      </div>
  </div>
</div>       
}
export default Card2