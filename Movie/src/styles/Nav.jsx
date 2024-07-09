import styled from "styled-components";

export const Nav = styled.nav`
// width: 100%;
// display:flex;
// justify-content:space-between;
// margin-top:20px;
.navbar {
  display: flex;
  align-items: center;
  margin-top: -10px;
  width:100%;
}

.wrap{
display:flex;
// width:100rem;
}
.input-search {
  width:79%;
  height: 2.5rem;
  margin-top: 0rem;
  background-color: #d3d3d3;
  border-radius: 50px;
  border: none;
  padding: 0 1rem;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.dropdownBackground};
  font-size: 1rem;
}

.image {
  width: 4rem;
  height: 4rem;
  margin-top: 0.5rem;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {

.wrap{
display:contents;
}

  .navbar {
    // margin-top: -16px;
  }
  .input-search {
    width: 38%;
    height: 2rem;
    margin-top: 5px;
    margin-left: 5px;
  }

  .image {
    width: 3rem;
    height: 3rem;
  }

}
@media (min-width: ${({ theme }) => theme.media.mobile2}) and (max-width: ${({ theme }) => theme.media.tab}){
    .input-search{
    width:60%;
}
    }
@media (min-width: ${({ theme }) => theme.media.mobile}) and (max-width: ${({ theme }) => theme.media.mobile2}){

.input-search{
width:46%
}

.wrap{
display:contents;
}
}
@media (min-width: ${({ theme }) => theme.media.tab}) and (max-width: ${({ theme }) => theme.media.minLaptop}){

.input-search{
width:70%
}
}
`;