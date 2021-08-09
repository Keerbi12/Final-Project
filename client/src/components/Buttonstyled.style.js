import styled from 'styled-components'
export const Buttonstyled = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  &:hover {
    color: red;
    }
`;

export const Btncucumber = styled(Buttonstyled)`
  background-color: greenyellow;
  color: white;
  text-decoration: none;
`;