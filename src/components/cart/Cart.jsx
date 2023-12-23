import "./cart.css";
import img1 from "../../images/product-details/01.jpg";
import img2 from "../../images/product-details/02.jpg";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import CheckOut from "../checkout/CheckOut";

const Cart = ({ cartItems, deleteProduct , total }) => {
  return (
    <div className="cart container">
      <div className="cart-left">
        {cartItems.length == 0 && (
          <h2 className="no-product">
            No There Any Products Added In The Cart
          </h2>
        )}
        {cartItems.map(function (item) {
          total = total + item.price
          return (
            <div className="cart-product">
              <img src={item.image ? item.image : item.thumbnail} alt="" />
              {/* <h4> <FaTimes/> 2</h4> */}
              {/* <div>
             <button onClick={() => addToCart(item)}><FaPlus/></button>
             <h2>{item.qty}</h2>
             <button onClick={() => deacreaseQty(item)}><FaMinus/></button>
            </div> */}
              <h2>{item.title.slice(0, 10)}</h2>
              <h3>Price : {item.price}$</h3>
              <button
                className="remove-product"
                onClick={() => deleteProduct(item)}
              >
                Remove-Product
              </button>
            </div>
          );
        })}
      </div>
      <div className="cart-right">
        <div>
          <h2>Total</h2>
          <p>{total} $</p>
        </div>
        <hr />
        <Link to='/check-out'>
        <button>CheckOut</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
