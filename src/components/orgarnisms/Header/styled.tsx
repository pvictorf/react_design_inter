import styled from "styled-components";

export const Header = styled.header`
  display: grid;
  grid-template-columns: 95px 1fr auto auto;
  grid-gap: 1.6rem;
  padding: 1rem 1.8rem;
  align-items: center;
`;

export const Actions = styled.div`
  display: grid;
  grid-gap: 0.8rem;
  grid-auto-flow: column;
`;

export const Flags = styled.div`
  display: flex;
  justify-content: space-evenly;

  & > img {
    width: 1.6rem;
    padding: 0 5px;
  }
`;
