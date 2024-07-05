import React, { useState,useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { FaRupeeSign } from "react-icons/fa";
import { Right2,SwitchContainer, SwitchLabel, SwitchButton,PageContainer  } from "./styles/orders";

import { Link } from "react-router-dom";


const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    fetch("https://backend-1-gsu0.onrender.com/api/orders")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched orders:", data); 
        setOrders(data);
      })
      .catch((error) => console.error("Error fetching orders:", error));
  }, []);

  const calculateSubtotal = (products) => {
    return products.reduce((total, product) => total + (product.vote_count || 0), 0);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <PageContainer>
        <Right2>
          <div className="heading">
            <h2>Your Orders</h2>
            <div className="dark-mode">
               <Link to='/'> <HomeButton className="Home">Home</HomeButton></Link>
              <SwitchContainer onClick={toggleDarkMode}>
                <SwitchButton isOn={isDarkMode} />
                <SwitchLabel>Dark Mode</SwitchLabel>
              </SwitchContainer>
            </div>
          </div>
          <OrdersGrid>
            {orders.map((order) => (
              <OrderCard key={order.id}>
                <OrderTitle>Order ID: <span>{order.id}</span></OrderTitle>
                <ProductsGrid>
                  {order.products.map((product) => (
                    <ProductCard key={product.title}>
                      <ProductImage src={`https://image.tmdb.org/t/p/w500${product.poster_path}`} alt={product.title} />
                      <ProductDetails>
                        <ProductName>{product.title}</ProductName>
                        <ProductVoteCount>
                          <p className="p">Price:</p>
                          <div><FaRupeeSign className="icon" /></div>
                          {product.vote_count}
                        </ProductVoteCount>
                      </ProductDetails>
                    </ProductCard>
                  ))}
                </ProductsGrid>
                <OrderSubtotal>
                  Subtotal: <div><FaRupeeSign className="icon" /></div>
                  <div className="sub-total">{calculateSubtotal(order.products)}</div>
                </OrderSubtotal>
              </OrderCard>
            ))}
          </OrdersGrid>
        </Right2>
      </PageContainer>
    </ThemeProvider>
  );
};

const darkTheme = {
  backgroundColor: "#0b0b0d",
  color: "white",
  dropdownBackground: "#222831",
  releaseDateColor: "#90f6d7",
};

const lightTheme = {
  backgroundColor: "white",
  color: "black",
  dropdownBackground: "#d3d3d3",
  releaseDateColor: "blue",
};

const OrdersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  
`;

const OrderCard = styled.div`
  padding: 10px;
`;

const OrderTitle = styled.h3`
  display: flex;
  margin-top: 10px;
  margin-bottom:10px;
  margin-left: 0.1rem;
  font-size: 1.5rem;

  .id {
    font-weight: 400;
    margin-left: 0.5rem;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
  
`;

const ProductCard = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.media.mobile}){
  
  display:inline;
 
//   flex-direction:column;
  }
`;

const ProductImage = styled.img`
  width: 15rem;
  height: auto;
  margin-right: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

   @media (max-width: ${({ theme }) => theme.media.mobile}){
   width:85vw;
   }
`;

const ProductDetails = styled.div`
  flex: 1;

   @media (max-width: ${({ theme }) => theme.media.mobile}){
margin-left:0.5rem;
margin-top:10px;
}
`;

const ProductName = styled.h4`
  margin-bottom: 5px;
  font-size: 1.5rem;
`;

const ProductVoteCount = styled.p`
  font-size: 1.3rem;
display:flex;
  .p {
    color: black;
    font-style: bold;
  }
  .icon {
    color: black;
    margin-top: 0.1rem;
  }

   @media (max-width: ${({ theme }) => theme.media.mobile}){
   margin-top:10px;
.p{
margin-left:0.3rem;
}
   .icon{
   margin-left:0.4rem;
   }
}
`;

const OrderSubtotal = styled.div`
  margin-top: 10px;
  font-size: 1.5rem;
  margin-left: 1rem;
  display: flex;

  .sub-total {
    font-weight: bold;
    margin-top:0rem;
    margin-left:0rem;
  }

  
`;
const HomeButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.color};
  border: 1px solid ${({ theme }) => theme.color};
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius:5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.backgroundColor};
  }
    @media (max-width: ${({ theme }) => theme.media.mobile}){
    width:4rem;
    height:2rem;
    margin-right:4px;
    text-align:center;
    padding: 5px 10px;
`;


export default OrdersPage;
