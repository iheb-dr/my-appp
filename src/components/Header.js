import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  text-align: center;
`;

function Header() {
  return <HeaderWrapper>Mon Application</HeaderWrapper>;
}
