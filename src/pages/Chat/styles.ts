import styled from 'styled-components';

export const ChatContainer = styled.div`
  display: flex;
  height: 70%;
`;

export const ChatList = styled.aside`
  width: 260px;
  color: black;
  background-color: #f8f8f8;
  display: inline-block;
  font-size: 15px;
  vertical-align: top;
  border-right: 1px solid #dee2e6;

  ul {
    padding-left: 0;
    margin: 0;
    list-style-type: none;
    height: calc(100vh - 180px);
  }

  li {
    padding: 10px 0;
  }

  li:hover {
    background-color: #5e616a;
  }

  h2,
  h3 {
    margin: 0;
  }

  li img {
    border-radius: 50%;
    margin-left: 20px;
    margin-right: 8px;
  }

  li div {
    display: inline-block;
    vertical-align: top;
    margin-top: 12px;
  }

  li h2 {
    font-size: 14px;
    color: black;
    font-weight: normal;
    margin-bottom: 5px;
  }

  li h3 {
    font-size: 12px;
    color: #7e818a;
    font-weight: normal;
  }
`;

export const Main = styled.main`
  min-height: 700px;
  display: inline-block;
  font-size: 15px;
  vertical-align: top;
`;

// export const ChatHeader = styled.div`
//   padding: 30px 20px;
//
//   * {
//     display: inline-block;
//     vertical-align: top;
//   }
//
//   img:first-child {
//     border-radius: 50%;
//   }
//
//   img:last-child {
//     width: 24px;
//     margin-top: 8px;
//   }
//
//   div {
//     margin-left: 10px;
//     margin-right: 145px;
//   }
//
//   h2 {
//     font-size: 16px;
//     margin-bottom: 5px;
//   }
// `;

export const ChatSearch = styled.input.attrs({ type: 'text', placeholder: 'search' })`
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding: 0 50px 0 20px;
  background-color: #afafb4;
  border: none;
  border-radius: 3px 3px 0 0;
  color: #fff;
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_search.png);
  background-repeat: no-repeat;
  background-position: 190px;
  background-size: 40px;

  &::placeholder {
    color: #fff;
  }
`;

export const Messages = styled.ul`
  padding-left: 0;
  margin: 0;
  list-style-type: none;
  overflow-y: scroll;
  height: calc(100vh - 300px);
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
`;

export const StyledMessage = styled.li`
  padding: 10px 30px;
  ${(props) => props.myMessage && `text-align:right;}`}

  .message {
    padding: 10px;
    color: #fff;
    line-height: 25px;
    max-width: 90%;
    display: inline-block;
    text-align: left;
    border-radius: 5px;
    background-color: ${(props) => (props.myMessage ? `#58b666` : `#6fbced`)};
  }

  h2,
  h3 {
    display: inline-block;
    font-size: 13px;
    font-weight: normal;
  }

  h3 {
    color: #bbb;
  }
  .triangle {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent ${(props) => (props.myMessage ? `#58b666` : `#6fbced`)}
      transparent;
    margin-left: ${(props) => (props.myMessage ? `600px ` : `15px`)};
  }

  .entete {
    margin-bottom: 5px;
  }

  h3 {
    display: inline-block;
    font-size: 13px;
    font-weight: normal;
  }
`;

export const InputArea = styled.div`
  height: 155px;
  padding: 20px 30px 10px 20px;

  textarea {
    resize: none;
    display: block;
    width: 100%;
    height: 80px;
    border-radius: 3px;
    padding: 20px;
    font-size: 13px;
    margin-bottom: 13px;
    border: 2px solid gray;
    &::placeholder {
      color: #ddd;
    }
  }

  img {
    height: 30px;
    cursor: pointer;
  }

  button {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    color: #6fbced;
    background-color: transparent;
    border: none;
    vertical-align: top;
    margin-left: auto;
    margin-top: 5px;
    display: inline-block;
  }
`;
