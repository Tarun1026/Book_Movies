import styled from "styled-components";

export const Right = styled.div`
.right-left-div {
  display: flex;
  margin-left: 2rem;
}

.left-div {
  width: 18rem;
  font-size: 2rem;
  margin-top: 0.5rem;

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    padding: 5px 0;
    font-size: 1.2rem;
  }

  .category-item {
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }

  .category-name {
    margin-left: 10px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    color: ${({ theme }) => theme.color};
    font-size: inherit;
    font-family: inherit;
    text-decoration: underline;
  }

  .category-image {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    font-size: 2rem;
  }
}

.right-div {
  width: 100%;
}

.movie-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin-top: 10px;
}
.left-p {
  font-weight: 900;
}
.right-p {
  font-size: 3rem;
  font-weight: 900;
}

.dropdown {
  height: 2.5rem;
  width: 12.1rem;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 5px;
  background-color: ${({ theme }) => theme.dropdownBackground};
  color: ${({ theme }) => theme.color};
  font-size: 1.2rem;
}

.dropdown-2 {
  height: 2.5rem;
  width: 15rem;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 15px;
  background-color: ${({ theme }) => theme.dropdownBackground};
  color: ${({ theme }) => theme.color};
  font-size: 1.2rem;
}

.loading-gif {
  width: 12rem;
  height: 12rem;
 
}

.movie-grid-2 {
  display: grid;
  grid-gap: 10px;
  margin-top: 10px;
  overflow-x: auto;
  padding-bottom: 20px;
}

.movie-grid-2-category {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  gap: 10px;
  margin-top: 10px;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .right-p {
    font-size: 2rem;
    margin-left: -0.8rem;
    margin-top:1.5rem;
  }

  .movie-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    margin-top: 1.3rem;
  }

  .left-div {
    display: none;
  }

  .dropdown {
    width: 44.5%;
    margin-left: -10px;
    font-size: 0.8rem;
    margin-top: 1.5rem;
  }
  .dropdown-2 {
    margin-left: 15px;
    width: 51%;
    font-size: 0.8rem;
    margin-top: 1.5rem;
  }
}

  @media (min-width: ${({ theme }) => theme.media.mobile2}) and (max-width: ${({ theme }) => theme.media.tab}) {

.movie-grid{
grid-template-columns: repeat(2, 1fr);
}
.right-left-div{
margin-top:1.5rem;
}
.left-div{

margin-right:2rem;}
}
 @media (min-width: ${({ theme }) => theme.media.mobile}) and (max-width: ${({ theme }) => theme.media.mobile2}) {
.dropdown{

width:40%;
}
  .left-div {
    display: none;
  }
.right-left-div{
margin-top:1.5rem;
}
  .movie-grid{
  grid-template-columns:repeat(2,1fr);
  grid-gap:0px;
  }

.right-left-div{
margin-left:0rem;}
}

@media (min-width: ${({ theme }) => theme.media.tab}) and (max-width: ${({ theme }) => theme.media.minLaptop}) {

 .movie-grid{
 grid-template-columns:repeat(3,1fr);
  grid-gap:0px;
  }
  .right-left-div{
margin-top:1.5rem;
}

//   .right-left-div{
// margin-left:1rem;  
// }
// .right-div{
// margin-left:2rem;
// }
}
`;
