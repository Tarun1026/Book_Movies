import styled from "styled-components";

export const FavouriteMovies = styled.div`

// display:flex;
  
  margin-top:1rem;
  
  border-radius: 8px;
  



.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  margin-right:1rem;
}

button:hover {
  background-color: #0056b3;
}

.btn-cart-icon{
background-color:black;
}
.right-end {
  margin-left: auto;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
.container{
display:flex;
justify-content:center;
}

button{
// display:flex;
margin-right:1rem;
font-size:0.7rem;

}


border: none;
  padding: 0;
  margin: 0;
  background: transparent;

 
}


`;