import styled from "styled-components";


export const Container = styled.section`
  margin-top: 20rem;

  header{
    text-align: center;
    h2{
      text-align: center;
      font-size: 4rem;
    }
    p{
      color: var(--green);
      font-weight: 500;
    }
  }

  .contacts{
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 8rem;

    div{
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1 1 24rem;
      max-width: 36rem;
      gap: 1.6rem;
      background-color: var(--green);
      border-radius: 1.4rem;
      padding: 1.6rem 2.4rem;
      transition: background-color 0.25s;
      min-height: 44px;

      img{
        width: 3.6rem;
        flex-shrink: 0;
        filter: brightness(0);
      }
      a{
        color: var(--black);
        font-weight: 500;
        min-width: 0;
        overflow-wrap: break-word;
        word-break: keep-all;
        line-height: 1.35;
        text-align: left;
      }
      &:hover{
        background-color: var(--pink);
        a{
          color: #FFF;
        }
      }
    }
  }


  @media(max-width: 960px){
    .contacts{
      flex-direction: column;
      align-items: center;
      div{
        width: 100%;
        max-width: 100%;
        flex-direction: column;
      }
    }
  }
  
`