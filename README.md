# Gadget Solution: E-Commerce Platform

This project done as an assignment.

- [Gadget Solution](https://ns-gadget-solution.web.app/)


## Description

Gadget Solution is an e-commerce platform built for learning and exercise React Fundamental Core concept, React Router DOM, Dynamic Routing, Context API, LocalStorage, Firebase Hosting etc. The platform allows users to explore fake data of various gadgets, add them to their cart or wishlist, and manage these items seamlessly. The website is designed inspired by Figma.

---

## Key Features

1. **Structured Navigation Bar**:
   - Includes Logo, Brand Name, Dashboard, and Stats.
   - Active route indication for better user navigation.

2. **Home Page**:
   - Attractive banner with a call-to-action button leading to the Dashboard.
   - Sidebar for category filtering with gadgets displayed dynamically.
   - Gadgets displayed as cards with images, names, prices, and a "Details" button.

3. **Product Details Page**:
   - Displays comprehensive information about the selected product.
   - Includes buttons to add items to the cart and wishlist with restrictions.
   - Prevents adding duplicate items to the wishlist.

4. **Dashboard**:
   - Two tabs: Cart and Wishlist.
   - Cart tab includes total price calculation and sorting by price.
   - Wishlist includes an option to move items to the cart with checks for price limits.

5. **Smooth User Experience**:
   - Persistent data using Context API and LocalStorage.
   - Dynamic page titles and favicon for improved branding.
   - Reloading the page doesn't cause errors or loss of functionality.
   - Modals for actions like purchase confirmation.

---

## Requirements Fulfillment

### **Navbar**
- The Navbar includes required menu items and indicates the active route.
- Persistent across all pages with dynamic styling.

### **Home Page**
- Displays a banner section with navigation to the Dashboard.
- Sidebar dynamically filters categories: Computers, Phones, Smart Watches, Chargers, and Power Banks.

### **Details Page**
- Comprehensive details about the selected product.
- Functional buttons for adding to cart and wishlist.
- Restricts duplicate wishlist additions and handles button state updates.

### **Dashboard**
- Two tabs for managing Cart and Wishlist.
- Cart includes a "Sort by Price" feature and calculates the total price.
- Modals for purchase confirmation with navigation to the home page.

---

## Technologies Used

### **React Fundamentals**
- React Router for navigation and nested layouts.
- Context API for global state management (cart and wishlist).
- LocalStorage for data persistence between sessions.
- Hooks (`useLocation`, `useNavigate`, `useContext`,`useState`,`useEffect`, etc).
- Dynamic states and conditional rendering.

### **Packages & Tools**
- React Rating components for star ratings.
- Recharts for the Statistics page (Composed Chart).
- Toast notifications for user actions.

---
