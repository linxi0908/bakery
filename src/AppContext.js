/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import swal from "sweetalert";
import bread_1 from "../src/components/products/imgs/Bread/bread_1.jpg";
import bread_2 from "../src/components/products/imgs/Bread/bread_2.jpg";
import bread_3 from "../src/components/products/imgs/Bread/bread_3.jpg";
import bread_4 from "../src/components/products/imgs/Bread/bread_4.jpg";
import bread_5 from "../src/components/products/imgs/Bread/bread_5.jpg";
import bread_6 from "../src/components/products/imgs/Bread/bread_6.jpg";
import bread_7 from "../src/components/products/imgs/Bread/bread_7.jpg";
import cake_1 from "../src/components/products/imgs/Cake/cake_1.jpg";
import cake_2 from "../src/components/products/imgs/Cake/cake_2.jpg";
import cake_3 from "../src/components/products/imgs/Cake/cake_3.jpg";
import cake_4 from "../src/components/products/imgs/Cake/cake_4.jpg";
import cookie_1 from "../src/components/products/imgs/Cookie/cookie_1.jpg";
import cookie_2 from "../src/components/products/imgs/Cookie/cookie_2.jpg";
import cookie_3 from "../src/components/products/imgs/Cookie/cookie_3.jpg";
import cookie_4 from "../src/components/products/imgs/Cookie/cookie_4.jpg";
import pastry_1 from "../src/components/products/imgs/Pastry/pastry_1.jpg";
import pastry_2 from "../src/components/products/imgs/Pastry/pastry_2.jpg";
import pastry_3 from "../src/components/products/imgs/Pastry/pastry_3.jpg";
// import { products } from '../src/ProductData';
export const AppContext = createContext({});
export const AppProvider = ({ children }) => {
  const form = useRef();
  const [toggle, setToggle] = useState(false);
  const [index, setIndex] = useState(0);
  const [check, setCheck] = useState(0);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    {
      id: "1",
      product_name: "Amaretti cookie",
      price: 12.95,
      category: "Cookies",
      weight: "5.0 lbs",
      dimensions: "4 x 2 x 1 in",
      description:
        "Channeling the old-world techniques of our Grandma Grace and her unwavering ability to produce hand-crafted cookies consistently both delicious and ornate, her much beloved amaretti cookie recipe will take you to straight into the doors of the authentic bakeries of Lipari, Italy and their intoxicating aromas. Created carefully with the same love, attention and high-quality, real ingredients we know our nonna would only approve of, our fresh amaretto cookie dough is hand-dipped with care in crystallized sugar and adorned with a whole almond just before it’s placed into our oven to gently bake to perfection. The final result is a rich, bold, dense cookie adored by the whole famiglia.",
      img: [cookie_1],
    },
    {
      id: "2",
      product_name: "Black forest",
      price: 34.0,
      category: "Cakes",
      weight: "5.0 lbs",
      dimensions: "4 x 2 x 1 in",
      description:
        "Flourless chocolate with cherry filling, decorated with whipped cream and chocolate shavings.",
      img: [cake_1],
    },
    {
      id: "3",
      product_name: "Blueberry danish round",
      price: 5.5,
      category: "Pastries",
      weight: "5.0 lbs",
      dimensions: "4 x 2 x 1 in",
      description: " ",
      img: [pastry_1],
    },
    {
      id: "4",
      product_name: "Cappuccino cheesecake",
      price: 51.0,
      category: "Cakes",
      weight: "5.0 lbs",
      dimensions: "4 x 2 x 1 in",
      description:
        "Creamy style Cappuccino cheesecake, with chocolate nibs on the outside.",
      img: [cake_2],
    },
    {
      id: "5",
      product_name: "Carrot cake",
      price: 58.0,
      category: "Cakes",
      weight: "5.0 lbs",
      dimensions: "2 x 1 x 1 in",
      description: " ",
      img: [cake_3],
    },
    {
      id: "6",
      product_name: "Chocolate tarts",
      price: 19.0,
      category: "Cookies",
      weight: "5.0 lbs",
      dimensions: "4 x 2 x 1 in",
      description: " ",
      img: [cookie_2],
    },
    {
      id: "7",
      product_name: "Ciabatta",
      price: 4.5,
      category: "Breads",
      weight: "3.5 lbs",
      dimensions: "4 x 2 x 1.5 in",
      description:
        "This dense loaf comes in rounds and loaves and has been a huge hit in German and Russian communities. Thinly sliced and served with a sliver of ham or a robust cheese, it is the perfect accompaniment to a tall, cold glass of dark beer.",
      img: [bread_1],
    },
    {
      id: "8",
      product_name: "Closed cheese pocket",
      price: 7.25,
      category: "Pastries",
      weight: "5.0 lbs",
      dimensions: "4 x 2 x 1 in",
      description: " ",
      img: [pastry_2],
    },
    {
      id: "9",
      product_name: "Croissant",
      price: 3.5,
      category: "Pastries",
      weight: "5.0 lbs",
      dimensions: "4 x 2 x 1 in",
      description: " ",
      img: [pastry_3],
    },
    {
      id: "10",
      product_name: "Flatbread",
      price: 5.5,
      category: "Breads",
      weight: "2.35 lbs",
      dimensions: "3.1 x 2.3 x 5.5 in",
      description:
        "Cracker bread made with semolina flour and fresh rosemary, brushed with olive oil and sprinkled with sea salt. Break it apart and dip it in our fabulous spreads!",
      img: [bread_2],
    },
    {
      id: "11",
      product_name: "German chocolate cake",
      price: 65.0,
      category: "Cakes",
      weight: "5.0 lbs",
      dimensions: "4 x 1 x 1 in",
      description:
        "Mocha cake, traditional brown sugar, coconut and pecan filling, glazed with ganache.",
      img: [cake_4],
    },
    {
      id: "12",
      product_name: "Hard dough bread",
      price: 5.25,
      category: "Breads",
      weight: "2.35 lbs",
      dimensions: "3.1 x 2.3 x 5.5 in",
      description:
        "Same bread, different shapes, they are both lighter and crustier than our other French-style breads. The Francese stick is a good table bread, and is the best bread to use for crostini or bruschetta. The Italiano is a 1/2 pound loaf that’s best cut in chunks and served with butter or a good olive oil.",
      img: [bread_3],
    },
    {
      id: "13",
      product_name: "Macaroon cookie",
      price: 14.95,
      category: "Cookies",
      weight: "5.0 lbs",
      dimensions: "4 x 2 x 1 in",
      description: " ",
      img: [cookie_3],
    },

    {
      id: "14",
      product_name: "Round bread",
      price: 6.9,
      category: "Breads",
      weight: "2.90 lbs",
      dimensions: "3 x 2 x 1 in",
      description:
        "Our award winning muesli bread made with rolled oats, walnuts, mixed seeds & mixed fruits.",
      img: [bread_4],
    },
    {
      id: "15",
      product_name: "Rye bread",
      price: 6.25,
      category: "Breads",
      weight: "1.75 lbs",
      dimensions: "2 x 3 x 8 in",
      description:
        "This dense loaf comes in rounds and loaves and has been a huge hit in German and Russian communities. Thinly sliced and served with a sliver of ham or a robust cheese, it is the perfect accompaniment to a tall, cold glass of dark beer.",
      img: [bread_5],
    },
    {
      id: "16",
      product_name: "Sourdough",
      price: 5.0,
      category: "Breads",
      weight: "1.0 lbs",
      dimensions: "150 x 90 x 90 in",
      description:
        "Crispy crust and moist interior, with a robust and distinctive sourdough flavor. Our light sourdough with dried, unsulphured Turkish apricots, roasted walnuts and pecans. Slightly sweet.",
      img: [bread_6],
    },
    {
      id: "17",
      product_name: "Sprinkle cookies",
      price: 14.95,
      category: "Cookies",
      weight: "5.0 lbs",
      dimensions: "4 x 2 x 1 in",
      description: " ",
      img: [cookie_4],
    },

    {
      id: "18",
      product_name: "Whole wheat bread",
      price: 5.0,
      category: "Breads",
      weight: "5.0 lbs",
      dimensions: "4 x 2 x 3 in",
      description:
        "66% whole wheat, 33% King Arthur never bleached, never bromated flour, with a touch of honey to balance the flavor.",
      img: [bread_7],
    },
  ]);

  const handle_toggle = () => {
    setToggle(!toggle);
    if (window.innerWidth > 768) {
      setToggle(true);
    }
  };
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const filterList = (list) => {
    if (check == 1) {
      return [list[0], list[1], list[2], list[7], list[10], list[17]];
    }
    if (check == 2) {
      return [list[8]];
    }
    if (check == 3) {
      return [list[10]];
    } else {
      return list;
    }
  };
  const popularList = (list) => {
    return [list[0], list[1], list[2], list[7], list[10], list[17]];
  };
  const breadList = (list) => {
    return [list[6], list[9], list[11], list[13], list[14], list[16], list[17]];
  };
  const cakeList = (list) => {
    return [list[1], list[3], list[4], list[10]];
  };
  const cookieList = (list) => {
    return [list[0], list[5], list[12], list[16]];
  };
  const pastryList = (list) => {
    return [list[2], list[7], list[8]];
  };
  const [sort, setSort] = useState("");
  const handle_sort = (e) => {
    const selectedValue = e.target.value;
    setSort(selectedValue);
    let sortedProducts = [];

    if (selectedValue === "AZ") {
      sortedProducts = [...products].sort((a, b) =>
        a.product_name.localeCompare(b.product_name)
      );
    } else if (selectedValue === "ZA") {
      sortedProducts = [...products].sort((a, b) =>
        b.product_name.localeCompare(a.product_name)
      );
    } else if (selectedValue === "asc") {
      sortedProducts = [...products].sort((a, b) => a.price - b.price);
    } else if (selectedValue === "desc") {
      sortedProducts = [...products].sort((a, b) => b.price - a.price);
    } else {
      sortedProducts = products;
    }
    setProducts(sortedProducts);
  };
  const [totalQuantity, setTotalQuantity] = useState(0);
  const handleAddToCart = (id, quantity) => {
    const kq = cart.find((item) => item.id === id);
    if (kq) {
      const newList = cart.map((item) =>
        item.id === id
          ? { ...item, qty: parseFloat(item.qty) + quantity }
          : item
      );
      setCart(newList);
      localStorage.setItem("cart_list", JSON.stringify(newList));
    } else {
      setCart([
        ...cart,
        { ...products.find((item) => item.id === id), qty: quantity },
      ]);
      localStorage.setItem(
        "cart_list",
        JSON.stringify([
          ...cart,
          { ...products.find((item) => item.id === id), qty: quantity },
        ])
      );
    }
    swal({
      title: "Success!",
      text: "Product has been added to cart.",
      icon: "success",
      button: "OK",
    });
    const cartList = JSON.parse(localStorage.getItem("cart_list")) || [];

    // calculate total quantity
    const initialTotalQuantity = cartList.reduce(
      (total, item) => total + item.qty,
      0
    );
    setTotalQuantity(initialTotalQuantity);
  };
  // console.log(cart);

  const changeQty = (id, num) => {
    const kq = cart.map((item) =>
      item.id == id && !(num == -1 && item["qty"] == 1)
        ? { ...item, qty: item["qty"] + num }
        : item
    );
    setCart(kq);
    localStorage.setItem("cart_list", JSON.stringify(kq));
    const cartList = JSON.parse(localStorage.getItem("cart_list")) || [];

    // calculate total quantity
    const initialTotalQuantity = cartList.reduce(
      (total, item) => total + item.qty,
      0
    );
    setTotalQuantity(initialTotalQuantity);
  };

  const removeItem = (id) => {
    const newList = cart.filter((item) => item.id !== id);
    setCart(newList);
    localStorage.setItem("cart_list", JSON.stringify(newList));
    const newTotalQuantity = newList.reduce(
      (total, item) => total + item.qty,
      0
    );
    setTotalQuantity(newTotalQuantity);
  };
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart_list");

    // update total quantity
    setTotalQuantity(0);
  };
  const totalPrice = cart.reduce((accumulator, current) => {
    return accumulator + current.price * current.qty;
  }, 0);
  const calculateTotalPrice = () => {
    return cart.reduce((accumulator, current) => {
      return accumulator + current.price * current.qty;
    }, 0);
  };

  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0nekl9b",
        "template_xtlicqg",
        form.current,
        "UrX82IPKg0mXBxhuc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    console.log(form.current);

    e.target.reset();
  };
  const date = moment("2023-06-24");
  const formattedDate = date.format("MMMM Do, YYYY");
  const [orderCount, setOrderCount] = useState(2000);
  const handlePlaceOrderClick = () => {
    setOrderCount(orderCount + 1);
    console.log(orderCount);
    localStorage.setItem("order-num", JSON.stringify(orderCount));
  };
  let list = `Order number: ${
    orderCount + 1
  } \nGrand total: $${totalPrice.toFixed(2)}`;
  let productlist = "";
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    productlist += `Name: ${item.product_name}\n - Price: $${item.price.toFixed(
      2
    )}\n - Quantity: ${item.qty}\n - Total: $${(
      parseFloat(item.qty) * item.price
    ).toFixed(2)}\n\n`;
  }

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const cartCopy = [...cart];
    localStorage.removeItem("cart_list");
    setCart([]);
    handlePlaceOrderClick();
    sendEmail(e);
    const totalPrice = calculateTotalPrice();
    navigate("/product/order", {
      state: { cart: cartCopy, totalPrice: totalPrice },
    });
    clearCart();
  };
  //
  const backtoShop = ()=>{
    navigate(`/product`)
  }
  //
  const checkOut = ()=>{
    navigate(`/product/checkout`)
  }
  //
  const viewCart = ()=>{
    navigate(`/product/cart`)
  }
  //
  const returnHome = ()=>{
    navigate(`/`)
  }
  //
  const cartList = JSON.parse(localStorage.getItem("cart_list"));
const proceedToCheckoutButton =
    (cart.length > 0 || cartList > 0) ? (
      <button onClick={checkOut}>
          <span>PROCEED TO CHECKOUT</span>
      </button>
    ) : null;
  //
  const placeOrder =
    cart.length > 0 ? <button type="submit">PLACE ORDER</button> : null;
  //
  useEffect(() => {
    if (localStorage.getItem("cart_list")) {
      setCart(JSON.parse(localStorage.getItem("cart_list")));
    }
  }, []);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [cart]);
  useEffect(() => {
    // get cart list from localStorage
    const cartList = JSON.parse(localStorage.getItem("cart_list")) || [];

    // calculate total quantity
    const initialTotalQuantity = cartList.reduce(
      (total, item) => total + item.qty,
      0
    );
    setTotalQuantity(initialTotalQuantity);

    // set cart state
    setCart(cartList);
  }, [totalQuantity]);
  // console.log(totalQuantity)
  useEffect(() => {
    handle_toggle();
    filterList();
    window.addEventListener("resize", handle_toggle);
    return () => window.removeEventListener("resize", handle_toggle);
  }, []);
  // console.log(toggle);
  return (
    <AppContext.Provider
      value={{
        toggle,
        setToggle,
        handle_toggle,
        index,
        setIndex,
        handleSelect,
        products,
        setProducts,
        check,
        setCheck,
        filterList,
        popularList,
        breadList,
        cakeList,
        cookieList,
        pastryList,
        cart,
        setCart,
        // addCart,
        changeQty,
        removeItem,
        totalPrice,
        calculateTotalPrice,
        sort,
        setSort,
        handle_sort,
        form,
        formattedDate,
        handlePlaceOrderClick,
        orderCount,
        setOrderCount,
        sendEmail,
        list,
        productlist,
        handleSubmit,
        quantity,
        setQuantity,
        handleQuantityChange,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        handleAddToCart,
        totalQuantity,
        setTotalQuantity,
        clearCart,
        proceedToCheckoutButton,
        placeOrder,
        backtoShop,
        checkOut,
        viewCart,
        returnHome
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
