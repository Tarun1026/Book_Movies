import styled from "styled-components";

export const Favourite = styled.div`
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
  .cart{
  position:absolute;
    margin-top:1rem;
    display:flex;
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

}
`;

export const Right2 = styled.div`
.movie-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0px;
  margin-top: 20px;
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