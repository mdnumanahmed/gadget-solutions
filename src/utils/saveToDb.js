import Swal from "sweetalert2";

const getStoredData = (key) => {
  const storedData = localStorage.getItem(key);
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};

const saveToLocalStorage = (id, key) => {
  const storedData = getStoredData(key);
  const exists = storedData.includes(id);
  if (!exists) {
    storedData.push(id);
    localStorage.setItem(key, JSON.stringify(storedData));
    Swal.fire({
      position: "center",
      icon: "success",
      titleText: `${
        key === "cart"
          ? "Added in Cart Successfully"
          : "Added in Wishlist Successfully"
      }`,
      text: `${
        key === "cart"
          ? "Thanks for adding Product in your Cart."
          : "Thanks for adding Product in your Wishlist."
      }`,
      showConfirmButton: false,
      timer: 2000,
      showClass: {
        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
      },
      hideClass: {
        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
      },
    });
    return;
  } else {
    Swal.fire({
      position: "center",
      icon: "error",
      title: `${key === "cart" ? "Already added!" : "Already added!"}`,
      text: `${
        key === "cart"
          ? "Already added this product in Cart!"
          : "Already added this product in Wishlist!"
      }`,
      showConfirmButton: false,
      timer: 2000,
      showClass: {
        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
      },
      hideClass: {
        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
      },
    });
    return;
  }
};

const deleteFromStorage = (id) => {
  let storedIds = getStoredData("cart");
  const exists = storedIds.includes(id);
  if (exists) {
    storedIds = storedIds.filter((storedId) => storedId !== id);
    localStorage.setItem("cart", JSON.stringify(storedIds));
    return;
  }
};

export { saveToLocalStorage, getStoredData, deleteFromStorage };
