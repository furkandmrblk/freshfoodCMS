import styled from 'styled-components';
import { maxdevice } from '../theme/mediaQueries';

// Product Containers

export const ProductDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 10rem;

  @media ${maxdevice.tablet} {
    flex-direction: column;
  }
`;
export const ProductItemDiv = styled.div`
  display: flex;
  flex-direction: column;

  height: 20rem;

  margin-left: 2rem;

  @media ${maxdevice.tablet} {
    margin-left: 0;
    align-items: center;
  }
`;

// Product Items

export const ProductImage = styled.img`
  height: 40rem;
  width: 30rem;
  object-fit: contain;

  filter: drop-shadow(5px 5px 7px rgba(0, 0, 0, 0.7));

  @media ${maxdevice.laptopL} {
    height: 30rem;
    width: 20rem;
  }
  @media ${maxdevice.laptop} {
    height: 25rem;
    width: 15rem;
  }
  @media ${maxdevice.tablet} {
    height: 23rem;
    width: 13rem;
  }
`;

export const ProductTitle = styled.h1`
  font-size: 3.5rem;

  margin-bottom: 5rem;

  @media ${maxdevice.laptopL} {
    font-size: 3rem;
    margin-top: 2rem;
  }
  @media ${maxdevice.laptop} {
    font-size: 2.5rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }
  @media ${maxdevice.tablet} {
    margin-top: 0;
    font-size: 2rem;
  }
  @media ${maxdevice.mobileS} {
    font-size: 1.7rem;
  }
`;
export const ProductSubtitle = styled.h1`
  font-size: 2rem;
  color: #5f4141;

  margin-bottom: 3rem;

  @media ${maxdevice.laptopL} {
    font-size: 1.8rem;
  }
  @media ${maxdevice.laptop} {
    font-size: 1.6rem;
    max-width: 19rem;
  }
  @media ${maxdevice.tablet} {
    text-align: center;
    font-size: 1.4rem;
    max-width: 17rem;
  }
  @media ${maxdevice.mobileS} {
    font-size: 1.2rem;
  }
`;
export const ProductDescriptionTitle = styled.h1`
  font-size: 1.5rem;
  color: #5f4141;

  @media ${maxdevice.laptopL} {
    font-size: 1.4rem;
  }
  @media ${maxdevice.laptop} {
    max-width: 19rem;
  }
  @media ${maxdevice.tablet} {
    font-size: 1.3rem;
    text-align: center;
    max-width: 17rem;
  }
  @media ${maxdevice.mobileS} {
    font-size: 1.2rem;
  }
`;
export const ProductDescription = styled.h1`
  font-size: 1.5rem;
  color: #5f4141;

  @media ${maxdevice.laptopL} {
    font-size: 1.4rem;
  }
  @media ${maxdevice.laptop} {
    max-width: 19rem;
  }
  @media ${maxdevice.tablet} {
    font-size: 1.3rem;
    text-align: center;
    max-width: 17rem;
  }
  @media ${maxdevice.mobileS} {
    font-size: 1.2rem;
  }
`;
