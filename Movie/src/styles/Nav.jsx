import styled from "styled-components";

export const Nav = styled.nav`
.navbar {
  display: flex;
  align-items: center;
  margin-top: -20px;
}

.input-search {
  width: 82%;
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
  .navbar {
    margin-top: -16px;
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
`;