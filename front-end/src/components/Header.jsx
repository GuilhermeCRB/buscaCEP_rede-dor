import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderContainer>
      <img src="./logo.png" alt="Rede D'or" />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  padding: 1% 0;
  background-color: var(--secondary-color);

  img {
    width: 15vh;
  }
`;
