import styled from 'styled-components';

const Wrapper = styled.main.attrs({
  role: 'main',
})`
  @media (min-width: 1rem) {
    padding: 0px;
  }
  @media (min-width: 64rem) {
    padding: 0px;
  }
`;

export default Wrapper;
