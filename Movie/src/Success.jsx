import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SuccessMessage = styled.div`
display:flex;
  background-color: #4caf50;
  color: white;
  padding: 20px;
  text-align: center;
  margin: 20px auto;
  max-width: 35rem;
  border-radius: 8px;
  font-size:1.3rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  .order-link{
  margin-left:1rem;
  color:blue;
  font-size:1.3rem;
  // margin-top:3px;
  // background-color:blue;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
  
  max-width:18rem;
  font-size:1rem;
  
  .order-link{
  font-size:1rem;
  }
`;

const Success = () => {
  return (
    <SuccessMessage>
      Your order has been placed successfully!
      <Link to='/order' className='order-link'>Go To orders</Link>
    </SuccessMessage>
  );
};

export default Success;
