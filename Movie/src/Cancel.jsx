import React from 'react'
import styled from 'styled-components';

const FailMessage = styled.div`
  background-color: #4caf50;
  color: white;
  padding: 20px;
  text-align: center;
  margin: 20px auto;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
const Cancel = () => {
  return (
    <FailMessage>
      Order Not Placed
    </FailMessage>
  )
}

export default Cancel
