import styled from 'styled-components';

export const UserInfoFormSection = styled.section`
  position: relative;
  text-align: left;
  display: block;
  box-sizing: border-box;

  .form {
    position: relative;
    font-size: 1rem;
    height: auto;
  }

  .input {
    display: block;
    width: 100%;
    padding: 10px 12px;
    background-image: none;
    background-clip: padding-box;
    border: 1px #b3b3b3 solid;
    border-radius: 3px;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  }

  .btn {
    text-decoration: none;
    border-color: #454545;
    color: #454545;
    background-color: transparent;
    outline-width: 0;
    margin: 0;
    font-style: initial;
    white-space: nowrap;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
    text-align: center;
    padding: 10px 30px;
    border-radius: 0;
    align-self: flex-start;
    transition: all 0.5s;

    &:hover {
      border-color: #3e3e3e;
      color: #3e3e3e;
      background-color: #dedede;
    }
  }

  .user-form {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    margin-left: -10px;
    width: calc(100% + 10px);
  }

  .user-form .form-group {
    margin-bottom: 10px;
    padding-left: 10px;
  }
  @media (min-width: 400px) {
    .user-form .form-partition-factor-2 {
      width: 50%;
    }
  }
  .label {
    margin-left: 5px;
    color: #999999;
  }
`;
