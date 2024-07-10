import styled from "styled-components";

export const FavouriteAndCartMovies = styled.div`
  margin-top: 1rem;
  border-radius: 8px;

  .container {
    display: flex;
    margin-top: -10px;
    align-items: center; // Align items center vertically
  }

  .right-end {
    display: flex;
    margin-top:2px;
    // margin-right:-1rem;
  }

  // button {
  //   background-color: #007bff;
    
  // }
.cIcon{
margin-right:1rem;
}
  .btn-fav-mov {
   color: ${({ theme }) => theme.fColor};
    border: none;
    // padding: 6px 15px;
    // font-size: 16px;
    font-weight:600;
    cursor: pointer;
    border-radius: 4px;
    text-align:center;
  text-decoration:none;
    
    font-size:1rem;
    margin-left: 10px;
    height: 40px; // Set a consistent height
  }

  .btn-fav-mov:hover {
    color: #0056b3;
  }

  .btn-cart-icon {
    // background-color: black;
    color: ${({ theme }) => theme.color};
    // padding: 7px 20px;
    height: 40px; // Set a consistent height
    // display: flex;
    // align-items: center;
  }

    .btn-cart-icon :hover{
    
    color:#0056b3;
    }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .container {
      justify-content: flex-start;
      margin-top: 1rem;
    }

    .btn-fav-mov {
      width: 80%;
      margin-left: -1px;
      height: 40px; 
    }
      .cIcon{
margin-left:-1.5rem;
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
            .cIcon{
margin-left:-1.5rem;
}

    .btn-fav-mov {
      width: 80%;
      margin-left:-4px;
      height: 40px; // Consistent height for this media query
    }

    .btn-cart-icon {
      height: 40px; 
    }
  }

   @media (min-width: ${({ theme }) => theme.media.mobile2}) and (max-width: ${({ theme }) => theme.media.tab}) {
   
    .right-end {
    display: flex;
    margin-top:2px;
    margin-right:0rem;
  }
   
   }
`;
