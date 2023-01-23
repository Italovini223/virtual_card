import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background: ${({theme}) => theme.COLORS.LINEAR_500};
`;

export const UserImg = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;


  padding-top: 12rem;
`;

export const UserName = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  margin-top: 10px;

  > h2 {
    color: white;
    font-weight: 700;
    font-size: 3rem;
  }
`;

export const UserProfession = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 3rem;

  p {
    color: white;
    
    font-weight: 400;
    font-size: 1.7rem;

    text-align: center;

  }
`;

export const UserContacts = styled.div`

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 3rem;

  > h2 {
    font-size: 1.8rem;
    font-weight: 500;
    color: white;
  }

  > div {
    display: flex;
    gap: 3rem;
    margin-top: 1rem;

    .whatsApp {
      

      height: 50px;
      width: 50px;

      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      background: ${({theme}) => theme.COLORS.GREEN_500};
      color: white;
      
      svg {
        font-size: 2rem;
      }

      a {
        text-decoration: none;
      }
    }

    .userNumber {
      height: 50px;
      width: 50px;

      border: none;
      border-radius: 50%;

      background: white;

      cursor: pointer;

      svg {
        font-size: 2rem;
        color: ${({theme}) => theme.COLORS.BLUE_500};
      }

    }
  }
`;

export const SocialMedia = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 3rem;

  > h2 {
    font-size: 1.8rem;
    font-weight: 500;
    color: white;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    
    text-align: center;
    margin-top: 2rem;

    @media(max-width: 350px){
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export const StorageLogo = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 3rem;

  > img {
    width: 20rem;
    height: 20rem,;
  }

`;