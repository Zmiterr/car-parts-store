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
      border-color: #3e3e3e !important;
      color: #3e3e3e !important;
      background-color: #dedede;
    }
  }
  .input-rectangle {
    border-radius: 0;
  }

  .form-vertical.form-spacing-10 {
    margin-left: -10px;
    width: calc(100% + 10px);
  }

  .form-vertical {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
  }

  .form-vertical.form-spacing-10 .form-group {
    margin-bottom: 10px;
    padding-left: 10px;
  }

  .form-vertical .form-partition-factor-2 {
    width: 50%;
  }

  .button-style.border-grey-dark-1:hover,
  .button-style.border-grey-dark-1:focus {
    border-color: #3e3e3e !important;
    color: #3e3e3e !important;
    background-color: transparent !important;
  }

  .align-center {
    text-align: center;
  }

  .label {
    margin-left: 5px;
    color: #999999;
  }

  .border-grey-30,
  .separator-grey-30:after {
    border-color: #b3b3b3;
  }
  .border-1 {
    border-width: 1px;
  }
`;
