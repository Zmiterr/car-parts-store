import styled from 'styled-components';

export const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: fit-content;
  min-width: 0;
  margin: 1rem 1.5rem;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
`;

export const CardBody = styled.div`
  padding: 1rem;
`;
