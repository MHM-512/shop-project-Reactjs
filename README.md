  <p align="center">
<img width="400" alt="image" src="https://github.com/user-attachments/assets/9bbb4026-cb48-43dc-8b2e-27788ddb8a1f" />
<img width="400"  alt="image" src="https://github.com/user-attachments/assets/e0bedee9-0269-4ed8-80f8-4e437fd230bb" />
<img width="400 "  alt="image" src="https://github.com/user-attachments/assets/ad561135-1a4c-4821-a522-9697a810bf78" />
  </p>

### React Authentication & Dashboard Project
This project is a React-based web application focused on implementing robust authentication, protected routing, and efficient state management. It serves as a practical implementation of modern React development patterns.

## 🚀 Key Features
Authentication Flow: Secure user login and persistent session management using localStorage. Protected Routes: Automatic redirection of unauthorized users to the signup/login page. Form Management: Integrated react-hook-form for high-performance input handling and validation. UI Components: Built with Material-UI (MUI) for a modern, responsive, and accessible interface. Navigation Logic: Advanced routing with react-router-dom, including passing state between routes via useNavigate and useLocation. Notification System: A custom, reusable, and dynamic Alert component for user feedback.

## 🛠 Tech Stack
React.js (Core Library) React Router v6 (Navigation & Routing) React Hook Form (Form Handling) Material-UI (MUI) (Component Library) JavaScript (ES6+)

## 📂 Project Structure

```text
src/
├── component/
│    ├──AlertVariousStates.jsx
│    │──MediaCard.jsx
│    │──MenuAppBar.jsx  
│
├── context/
│    ├──CartContext.jsx
│
├── page/
│    ├──dataList1.jsx
│    ├──dataList2.jsx
│    ├──dataList3.jsx
│    ├──Footer.jsx
│    ├──Home.jsx
│    ├──Login.jsx
│    ├──Profile.jsx
│    ├──ShoppingCart.jsx
│    ├──SignUp.jsx
│    ├──SignUp.jsx
│
├── App.tsx
└── main.tsx
```

## 📂 Getting Started

1. Clone the repository:
```git
git clone https://github.com/MHM-512/ShopSite.git
```
```cjs
2. Install dependencies:
```
```cjs
npm install
```
```cjs
3. Run the development server:
```
```cjs
npm start
```

## 💡 Key Learning Outcomes
Managing Side-effects using useEffect effectively. Understanding the lifecycle of components and handling Conditional Rendering. Implementing Navigation State to pass data seamlessly between views. Best practices for persistent storage (localStorage) in React.