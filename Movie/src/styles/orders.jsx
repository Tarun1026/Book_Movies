import styled from "styled-components";

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
//   .total-icon{
//   margin-top:1rem;
//   }
.total-count{
display:flex;
font-size:1.3rem;
margin-left:0.5rem;
font-weight:800;
}

.price{
margin-top:-0.15rem;
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

@media (max-width: ${({ theme }) => theme.media.mobile}){
.movie-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 0px;
  margin-top: 20px;
}
  .heading{
  font-size:1rem;
  margin-left:0.7rem;
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
width:38px;
height:20px;

&:before{
width:12px;
height: 15px;
}


`;

export const   PageContainer = styled.div`
background-color: ${({ theme }) => theme.backgroundColor};
color: ${({ theme }) => theme.color};
min-height: 100vh;
padding: 20px;

`;
