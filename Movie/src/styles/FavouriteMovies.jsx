import styled from "styled-components";

export const FavouriteMovies = styled.div`

// display:flex;
  
  margin-top:1rem;
  
  border-radius: 8px;
  



.container {
  display: flex;
  margin-top:-15px;
  // align-items: center;
}
.right-end{
display:flex;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 6px 15px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  // margin-right:1rem;
}

.btn-fav-mov{
width:90%;
font-size:0.8rem;
margin-right:20px;

}

button:hover {
  background-color: #0056b3;
}

.btn-cart-icon{
background-color:black;
padding: 7px 20px;

}
.right-end {
  margin-left: 0rem;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {

.container{
display:flex;
justify-content: flex-start;
margin-top:2rem;
}

.btn-fav-mov{
width:80%;
margin-left:10px;

}


button{
// display:flex;
margin-right:1rem;
font-size:0.7rem;

}

.btn-cart-icon{

text-align:center;
align-items:center;
height:2.5rem;
// padding-bottom:2.2rem;

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

@media (min-width: ${({ theme }) => theme.media.mobile}) and (max-width: ${({ theme }) => theme.media.mobile2}){

.container{
margin-top:0rem;
}
.btn-fav-mov{
width:80%;
margin-left:7px;

}
}

`;