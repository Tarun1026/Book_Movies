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
padding: 7px 20px;

}
.right-end {
  margin-left: auto;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
.container{
display:flex;
justify-content:center;
margin-top:1rem;
}

button{
// display:flex;
margin-right:1rem;
font-size:0.7rem;

}

.btn-cart-icon{
margin-top:0.5rem;
text-align:center;
align-items:center;
height:2.15rem;
// padding-bottom:2.2rem;
// padding-top:-2rem;
// padding-left:2rem;
width:auto;
}
.shop-cart-icon{
text-align:center;
align-items:center;
// margin-right:2rem;
height:1rem;
width:1.5rem;
}

border: none;
  padding: 0;
  margin: 0;
  background: transparent;

 
}


`;