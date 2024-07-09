import styled from "styled-components";

export const FavouriteMovies = styled.div`
  margin-top: 1rem;
  border-radius: 8px;

  .container {
    display: flex;
    margin-top: -15px;
    align-items: center; // Align items center vertically
  }

  .right-end {
    display: flex;
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
  }

  .btn-fav-mov {
    width: 90%;
    font-size: 0.8rem;
    margin-right: 20px;
    height: 40px; // Set a consistent height
  }

  button:hover {
    background-color: #0056b3;
  }

  .btn-cart-icon {
    background-color: black;
    padding: 7px 20px;
    height: 40px; // Set a consistent height
    display: flex;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .container {
      justify-content: flex-start;
      margin-top: 1rem;
    }

    .btn-fav-mov {
      width: 80%;
      margin-left: 18px;
      height: 40px; 
    }

    .btn-cart-icon {
      height: 40px; 
    }

    border: none;
    padding: 0;
    margin: 0;
    background: transparent;
  }

  @media (min-width: ${({ theme }) => theme.media.mobile}) and (max-width: ${({ theme }) => theme.media.mobile2}) {
    .container {
      margin-top: 0rem;
    }

    .btn-fav-mov {
      width: 80%;
      margin-left: 7px;
      height: 40px; // Consistent height for this media query
    }

    .btn-cart-icon {
      height: 40px; 
    }
  }
`;
