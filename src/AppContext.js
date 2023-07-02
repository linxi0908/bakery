/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import swal from "sweetalert";
import { Table } from "react-bootstrap";
import products from '../src/ProductData';
export const AppContext = createContext({});
export const AppProvider = ({ children }) => {
  const form = useRef();
  const [toggle, setToggle] = useState(false);
  const [index, setIndex] = useState(0);
  const [check, setCheck] = useState(0);
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState(products);

  const handle_toggle = () => {
    setToggle(!toggle);
    if (window.innerWidth > 768) {
      setToggle(true);
    }
  };
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  //
  const popularList = (list) => {
    return list.filter(products => products.popular)
  };
  const breadList = products.filter(product => product.category === "Breads");
  const cakeList = products.filter(product => product.category === "Cakes");
  const cookieList = products.filter(product => product.category === "Cookies");
  const pastryList = products.filter(product => product.category === "Pastries");
  const muffinList = products.filter(product => product.category === "Muffins");
  //
  const [sort, setSort] = useState("");
  const handle_sort = (e) => {
    const selectedValue = e.target.value;
    setSort(selectedValue);
    let sortedProducts = [];

    if (selectedValue === "AZ") {
      sortedProducts = [...product].sort((a, b) =>
        a.product_name.localeCompare(b.product_name)
      );
    } else if (selectedValue === "ZA") {
      sortedProducts = [...product].sort((a, b) =>
        b.product_name.localeCompare(a.product_name)
      );
    } else if (selectedValue === "asc") {
      sortedProducts = [...product].sort((a, b) => a.price - b.price);
    } else if (selectedValue === "desc") {
      sortedProducts = [...product].sort((a, b) => b.price - a.price);
    } else {
      sortedProducts = product;
    }
    setProduct(sortedProducts);
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
    } 
    else {
      setCart([
        ...cart,
        { ...product.find((item) => item.id === id), qty: quantity },
      ]);
      localStorage.setItem("cart_list",JSON.stringify([...cart,{ ...product.find((item) => item.id === id), qty: quantity },]));
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
    emailjs.sendForm("service_0nekl9b","template_xtlicqg",
    form.current,"UrX82IPKg0mXBxhuc")
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
  const date = moment();
  const formattedDate = date.format("MMMM Do, YYYY");
  const [orderCount, setOrderCount] = useState(2000);
  const handlePlaceOrderClick = () => {
    setOrderCount(orderCount + 1);
    console.log(orderCount);
    localStorage.setItem("order-num", JSON.stringify(orderCount));
  };
  //
  let list = `Order number: ${orderCount + 1} \nGrand total: $${totalPrice.toFixed(2)}`;
  
  //
  let productlist = "";
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    productlist += `Name: ${item.product_name}\n - Price: $${item.price.toFixed(
      2
    )}\n - Quantity: ${item.qty}\n - Total: $${(
      parseFloat(item.qty) * item.price
    ).toFixed(2)}\n\n`;
  }
//
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
  const backtoShop = () => {
    navigate('/product', { replace: true });
    window.location.reload();
  }
  //
  const checkOut = () => {
    navigate(`/product/checkout`)
  }
  //
  const viewCart = () => {
    navigate(`/product/cart`)
  }
  //
  const returnHome = () => {
    navigate(`/`)
  }
  //
  const [checkout, setCheckout] = useState(true)
  const [placeorder, setPlaceorder] = useState(true)
 
  //
  const tablecarttotal =
    (cart.length > 0) ? (
      <Table responsive="lg" className="table2">
        <tbody>
          <tr className="order-total">
            <th style={{ width: "40%" }}>TOTAL</th>
            <td style={{ width: "60%" }}>
              <span className="Price-amount">
                <span className="currencySymbol">$</span>
                {totalPrice.toFixed(2)}
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
    ) : null;
  //
  const tablecart =
    (cart.length > 0) ? (
      <thead>
        <tr>
          <th className="product-remove" style={{ width: "5%" }}>
            &nbsp;
          </th>
          <th className="product-thumbnail" style={{ width: "10%" }}>
            &nbsp;
          </th>
          <th
            className="product-name"
            style={{ width: "30%", textAlign: "left" }}
          >
            PRODUCT
          </th>
          <th className="product-price" style={{ width: "15%" }}>
            PRICE
          </th>
          <th className="product-quantity" style={{ width: "20%" }}>
            QUANTITY
          </th>
          <th className="product-subtotal" style={{ width: "20%" }}>
            TOTAL
          </th>
        </tr>
      </thead>
    ) : null;
  //
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 8;
  const filterList = (list, page) => {
    const startIndex = page * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    if (!Array.isArray(list)) {
      return [];
    }
    if (check === 1) {
      return list.filter(products => products.popular).slice(startIndex, endIndex);
    }
    
    if (check === 2) {
      const sortedList = list.sort((a, b) => a.price - b.price);
      const minPrice = sortedList[0].price;
      return sortedList.filter(products => products.price === minPrice).slice(startIndex, endIndex);
    }

    if (check === 3) {
      const sortedList = list.sort((a, b) => b.price - a.price);
      const maxPrice = sortedList[0].price;
      return sortedList.filter(products => products.price === maxPrice).slice(startIndex, endIndex);
    }
    
    return list.slice(startIndex, endIndex);
  };
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    window.scrollTo(0, 0);
  };
  //
  const currentProducts = filterList(product, currentPage)
  //
  const handleGoBack = () => {
    navigate('/product', { replace: true });
    window.location.reload();
  };

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
        product,
        setProduct,
        check,
        setCheck,
        filterList,
        popularList,
        breadList,
        cakeList,
        cookieList,
        pastryList,
        muffinList,
        cart,
        setCart,
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
        backtoShop,
        checkOut,
        viewCart,
        returnHome,
        tablecarttotal,
        tablecart,
        checkout,
        setCheckout,
        placeorder,
        setPlaceorder,
        currentPage,
        setCurrentPage,
        productsPerPage,
        handlePageClick,
        currentProducts, 
        handleGoBack
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
