import styled from "styled-components";

export const MovieCard = styled.div`
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
  margin: 10px;
  width: 17rem;
  
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
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
    height: 12.5rem;
    position: relative;
  }

  .title {
    margin-top: 10px;
    align-items: flex-end;
    margin-left: 8px;
    font-size: 1.5rem;
    font-weight: 900;
  }
.rel{
font-size:1rem;
margin-top:5px;
}
  .release_date {
    display: flex;
    justify-content: space-between;
    margin-left: 8px;
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: 400;
    // margin-top:2rem;
    // color: ${({ theme }) => theme.releaseDateColor};
  }

  .fav-icon {
    // position: absolute;
    bottom: 10px;
    right: 10px;
    margin-right:1rem;
  }
    .cart {
    position: absolute;
    bottom: 10px;
    left: 10px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
  }

  .icon-cart {
    font-size: 1.1rem;
    margin-right: 2px;
  }

  .aTC-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-right:2.5rem;
  }

  .btn-cart {
    padding: 8px 16px;
    // margin-left:30px;

    align-items: center;
    background-color: #f0c14b;
    color: #111;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    font-weight: bold;

    &:hover {
      background-color: #ddb347;
    }
  }

  .btn-fav {
  color: ${({ theme }) => theme.addButtonColor};
    background-color: transparent;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    font-size: inherit;
    font-family: inherit;
    text-decoration: underline;
    font-weight:800;
  }

.btn-fav:hover{
color:green;
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
    margin-left: -10px;

    .vote {
      margin-top: 12px;
    }
    .vote-avg {
      padding-top: 5px;
    }
    .movie-poster {
      height: 14rem;
      max-width: 100.5%;
    }

    .aTC-btn {
    margin-right:5rem;
    }
      .btn-cart{
      
      margin-left:2.8rem;
      }
  }
      @media (min-width: ${({ theme }) => theme.media.mobile2}) and (max-width: ${({ theme }) => theme.media.tab}) {
      
      width:15rem;
      }
@media (min-width: ${({ theme }) => theme.media.mobile}) and (max-width: ${({ theme }) => theme.media.mobile2}) {

width:auto;

}
      @media (min-width: ${({ theme }) => theme.media.tab}) and (max-width: ${({ theme }) => theme.media.minLaptop}) {
      
      
      width:auto;

      .title{
      font-size:1.2rem;
      }
      }
      

`;
