import styled from 'styled-components';

export const CompareButtonArea = styled.div`
  display: block;
  position: fixed;
  right: 50px;
  bottom: 0;
  z-index: 1000;
  .compare-button {
    padding: 10px;
    background-color: #fddd3a;
    box-shadow: 0 12px 15px 0 rgb(128 85 0 / 30%), 0 2px 3px 0 rgb(128 85 0 / 50%);
    border-radius: 3px 3px 0 0;
    opacity: 0.8;
    cursor: pointer;
    transition: opacity 0.05s ease, transform 0.1s ease-out;
    &:hover {
      background-color: #fde837;
    }
  }
`;
