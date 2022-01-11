import "./styles.css";

function CardInCart() {
  const card = [
    {
      heading: "HRX by Hrithik Roshan",
      tag: "Printed T-shirt",
      price: `Rs. 384`,
      off: `45% OFF`,
      size: ["S", "M", "L", "XL", "XXL"],
      quantity: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      soldBy: "Omnitech Retail",
      removeBtn: <button className="r-b">Remove</button>,
      wishBtn: <button className="w-b">Wishlist</button>
    }
  ];

  let [
    {
      heading,
      tag,
      price,
      off,
      size: [s, m, l, xl, xxl],
      quantity: [],
      soldBy,
      removeBtn,
      wishBtn
    }
  ] = card;

  return (
    <>
      <div className="card-boundry">
        <div className="flex-card-box">
          <img
            className="imag"
            src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg"
          />
          <div className="cart-details-box">
            <div className="head">{heading}</div>
            <div className="tag">{tag}</div>
            <div className="sold-by"> Sold By: {soldBy}</div>
          </div>
          <div className="cart-price-details">
            <div className="price">{price}</div>
            <div className="off">{off}</div>
          </div>
        </div>
        <div>
          {" "}
          {removeBtn} {wishBtn}
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <CardInCart />
    </div>
  );
}
