import styled from "styled-components";

export const Book = styled.div`
position: relative;
display: flex;
flex-direction: column;

border-radius: 10px;
background: linear-gradient(
  135deg,
  rgba(255, 255, 255, 0.2),
  rgba(255, 255, 255, 0.1)
);
box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
background-color: ${({ theme }) => theme.backgroundColor};
color: ${({ theme }) => theme.color};
margin: 1rem;
width: 16rem;
// height:29rem;
transition: transform 0.2s ease-in-out;
// margin-left:4rem;
&:hover {
  transform: scale(1.05);
  // z-index:1;
}

.movie-poster {
  max-width: 100%;
  height: 13rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.vote {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  padding: 0 10px;

  border-radius: 3px;
  font-size: 1rem;
  font-weight: 900;
}
.vote-avg {
  background-color: rgb(208, 240, 192);
  color: rgb(0, 128, 0);
  width: 4rem;
  height: 1.5rem;
  text-align: center;
  border-radius: 5px;
}
.language {
  background-color: #fd5c63;
  color: black;
  border-radius: 5px;
  font-size: 1.5rem;
  text-align: center;
  width: 2.5rem;
}


.movie-title {
  margin-top: 0px;
  height: 11.5rem;
}

.title {
  margin-top: 10px;
  align-items: flex-end;
  // text-align: center;
  margin-left: 8px;
  font-size: 1.5rem;
  font-weight: 900;
}
.release_date {
  display:flex;
justify-content:space-between;
  margin-left: 8px;
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.releaseDateColor};
}
  .fav-icon {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  .cart {
    position: absolute;
    bottom: 3px;
    left: 3px;
    display: flex;
    align-items: center;
  }

  .icon-cart {
    font-size: 1.5rem;
    // margin-right: 5px;
  }

  .rs {
    font-size: 1.5rem;
    // margin-right: 5px;
  }
.btn-rmv {
    // position: relative;
    bottom: 10px;
    left: 10px;
    padding: 8px 16px;
    background-color: #fd5c63;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
    .btn-rmv:hover{
    background-color:red;
    color:black;
    }

.movie-poster-b {
  width: 3rem;
  height: 3rem;
  margin-top: 5px;
  margin-left: 1rem;
  border-radius: 50%;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  width: -webkit-fill-available;
  margin-left: 15px;
height:28.5rem;
  .vote {
    margin-top: 12px;
  }
.vote-avg{
padding-top:5px;
}
  .movie-poster {
    height: 15rem;
    max-width:100.5%;
  }

  .cart{
  
  bottom:10px;
  left:10px;
  }

   .icon-cart {
    font-size: 1.2rem;
    margin-right: 5px;
  }


}
  @media (min-width: ${({ theme }) => theme.media.mobile2}) and (max-width: ${({ theme }) => theme.media.tab}){
  width:18rem;
  margin-left:3rem;
  
  .movie-poster {

  height: 15rem;

}
  }
 @media (min-width: ${({ theme }) => theme.media.mobile}) and (max-width: ${({ theme }) => theme.media.mobile2}){
  width:15rem;
  margin-left:0rem;
  
  .movie-poster {

  height: 13rem;

}
  }
`;

export const Right2 = styled.div`

.div-divide {
    // display: flex;
    // flex-direction: row ;
    // align-items: center;
  }

  .sub-total {
   display:flex;
    font-size: 1.5rem;
    // font-weight:800;
    margin-left:1rem;
    margin-top: 1rem;
  }
.vl {
  border: 2px solid black;
  width: auto; /* changed from fixed height to 100% */
  margin-top: 2rem;
//   margin-right:2rem;
}
.movie-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0px;
  margin-top: 20px;
  
}
  .total-icon{
  margin-top:0.3rem;
  }
.total-count{
display:flex;
font-size:1.3rem;
margin-left:0.5rem;
font-weight:800;
}

.price{
margin-top:0rem;
}

.btn-pay{
margin-left:1rem;
background-color: #f0c14b;
  border: 1px solid #a88734;
  border-radius: 3px;
  color: #111;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #ddb347;
    border-color: #9c7e31;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.3);
  }
}
.dark-mode{
display: flex;
 
}

.dark-mode {
  margin-left: auto; 
  display: flex;
  align-items: center;
  font-size:1rem;
}

.heading{
display:flex;

text-align:center;
margin-left:1rem;
font-size:1.5rem;
color: ${({ theme }) => theme.color};
}

.loadingGif {
  width: 12rem;
  height: 12rem;
 
}

@media (max-width: ${({ theme }) => theme.media.mobile}){
.movie-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 0px;
  margin-top: 20px;
}
  .heading{
  font-size:1rem;
  }
 .btn-pay{
 margin-top:0.5rem;
 }

 .price{
  margin-left:2px;
  margin-top:2px;
 
 }

 .total-icon{
  // margin-top:1rem;
  }

}
      @media (min-width: ${({ theme }) => theme.media.mobile2}) and (max-width: ${({ theme }) => theme.media.tab}){
.movie-grid{
grid-template-columns:repeat(2,1fr);
}
.heading{
margin-left:3rem;
}
.sub-total{
margin-left:3rem;
}
.btn-pay{
margin-left:3rem;


    }
}
         @media (min-width: ${({ theme }) => theme.media.mobile}) and (max-width: ${({ theme }) => theme.media.mobile2}){
.movie-grid{
grid-template-columns:repeat(2,1fr);
}
.heading{
margin-left:0rem;
}

.sub-total{
margin-left:0rem;
}
.btn-pay{
margin-left:0rem;


    }
    }
     @media (min-width: ${({ theme }) => theme.media.tab}) and (max-width: ${({ theme }) => theme.media.minLaptop}) {
 .movie-grid{
grid-template-columns:repeat(3,1fr);
}
 }
`;

export const SwitchContainer = styled.div`
display: flex;
justify-content:space-between;
align-items: center;
cursor: pointer;


`;

export const SwitchLabel = styled.span`
margin-left: 10px;

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  font-size: 0.7rem;
}
`;

export const SwitchButton = styled.div`

width: 50px;
height: 25px;

background: ${({ isOn }) => (isOn ? "#4caf50" : "#ccc")};
border-radius: 25px;
position: relative;
margin-left: 10px;
transition: background 0.3s;

&:before {
  content: "";
  position: absolute;
  top: 2.5px;
  left: ${({ isOn }) => (isOn ? "25px" : "2.5px")};
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  transition: left 0.3s;
}
 

@media (max-width: ${({ theme }) => theme.media.mobile}){
width:40px;
height:20px;

&:before{
width:13px;
height: 15px;
}


`;