import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // مبلغ کل سبد خرید

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // افزودن محصول به سبد خرید

  const addToCart = (product) => {
    setCart((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // اگر محصول قبلاً در سبد بود، تعداد آن را افزایش می‌دهیم
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // اگر محصول جدید است، آن را به سبد اضافه می‌کنیم
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // حذف محصول از سبد خرید

  const removeFromCart = (productId) => {
    setCart((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // کاهش تعداد محصول در سبد خرید

  const decreaseQuantity = (productId) => {
    setCart((prevItems) => {
      return prevItems.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, decreaseQuantity,totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
