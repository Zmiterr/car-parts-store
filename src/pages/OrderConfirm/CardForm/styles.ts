import styled from 'styled-components';

export const CardFormStyledComponent = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  .payment-title {
    width: 100%;
    text-align: center;
  }

  .form-container .field-container:first-of-type {
    grid-area: name;
  }

  .form-container .field-container:nth-of-type(2) {
    grid-area: number;
  }

  .form-container .field-container:nth-of-type(3) {
    grid-area: expiration;
  }

  .form-container .field-container:nth-of-type(4) {
    grid-area: security;
  }

  .field-container input {
    box-sizing: border-box;
  }

  .field-container {
    position: relative;
  }

  .form-container {
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: auto auto;
    grid-template-rows: 90px 90px 90px;
    grid-template-areas: 'name name' 'number number' 'expiration security';
    max-width: 400px;
    padding: 20px;
    color: #707070;
  }

  label {
    padding-bottom: 5px;
    font-size: 13px;
  }

  input {
    margin-top: 3px;
    padding: 15px;
    font-size: 16px;
    width: 100%;
    border-radius: 3px;
    border: 1px solid #dcdcdc;
  }

  .ccicon {
    height: 38px;
    position: absolute;
    right: 6px;
    top: calc(50% - 17px);
    width: 60px;
  }

  /* CREDIT CARD IMAGE STYLING */
  .preload * {
    -webkit-transition: none !important;
    -moz-transition: none !important;
    -o-transition: none !important;
  }

  .container {
    width: 100%;
    max-width: 400px;
    max-height: 251px;
    height: 54vw;
    padding: 20px;
  }

  #ccsingle {
    position: absolute;
    right: 15px;
    top: 20px;
  }

  #ccsingle svg {
    width: 100px;
    max-height: 60px;
  }

  .creditcard svg#cardfront,
  .creditcard svg#cardback {
    width: 100%;
    box-shadow: 1px 5px 6px 0 black;
    border-radius: 22px;
  }

  .generatecard {
    cursor: pointer;
    float: right;
    font-size: 12px;
    color: #fff;
    padding: 2px 4px;
    background-color: #909090;
    border-radius: 4px;
  }

  /* CHANGEABLE CARD ELEMENTS */
  .creditcard .lightcolor,
  .creditcard .darkcolor {
    transition: fill 0.5s;
  }

  .creditcard .lightblue {
    fill: #03a9f4;
  }

  .creditcard .lightbluedark {
    fill: #0288d1;
  }

  .creditcard .red {
    fill: #ef5350;
  }

  .creditcard .reddark {
    fill: #d32f2f;
  }

  .creditcard .purple {
    fill: #ab47bc;
  }

  .creditcard .purpledark {
    fill: #7b1fa2;
  }

  .creditcard .cyan {
    fill: #26c6da;
  }

  .creditcard .cyandark {
    fill: #0097a7;
  }

  .creditcard .green {
    fill: #66bb6a;
  }

  .creditcard .greendark {
    fill: #388e3c;
  }

  .creditcard .lime {
    fill: #d4e157;
  }

  .creditcard .limedark {
    fill: #afb42b;
  }

  .creditcard .yellow {
    fill: #ffeb3b;
  }

  .creditcard .yellowdark {
    fill: #f9a825;
  }

  .creditcard .orange {
    fill: #ff9800;
  }

  .creditcard .orangedark {
    fill: #ef6c00;
  }

  .creditcard .grey {
    fill: #bdbdbd;
  }

  .creditcard .greydark {
    fill: #616161;
  }

  /* FRONT OF CARD */
  #svgname {
    text-transform: uppercase;
  }

  #cardfront .st2 {
    fill: #ffffff;
  }

  #cardfront .st3 {
    font-family: 'Source Code Pro', monospace;
    font-weight: 600;
  }

  #cardfront .st4 {
    font-size: 54.7817px;
  }

  #cardfront .st5 {
    font-family: 'Source Code Pro', monospace;
    font-weight: 400;
  }

  #cardfront .st6 {
    font-size: 33.1112px;
  }

  #cardfront .st7 {
    opacity: 0.6;
    fill: #ffffff;
  }

  #cardfront .st8 {
    font-size: 24px;
  }

  #cardfront .st9 {
    font-size: 36.5498px;
  }

  #cardfront .st10 {
    font-family: 'Source Code Pro', monospace;
    font-weight: 300;
  }

  #cardfront .st11 {
    font-size: 16.1716px;
  }

  #cardfront .st12 {
    fill: #4c4c4c;
  }

  /* BACK OF CARD */
  #cardback .st0 {
    fill: none;
    stroke: #0f0f0f;
    stroke-miterlimit: 10;
  }

  #cardback .st2 {
    fill: #111111;
  }

  #cardback .st3 {
    fill: #f2f2f2;
  }

  #cardback .st4 {
    fill: #d8d2db;
  }

  #cardback .st5 {
    fill: #c4c4c4;
  }

  #cardback .st6 {
    font-family: 'Source Code Pro', monospace;
    font-weight: 400;
  }

  #cardback .st7 {
    font-size: 27px;
  }

  #cardback .st8 {
    opacity: 0.6;
  }

  #cardback .st9 {
    fill: #ffffff;
  }

  #cardback .st10 {
    font-size: 24px;
  }

  #cardback .st11 {
    fill: #eaeaea;
  }

  #cardback .st12 {
    font-family: 'Rock Salt', cursive;
  }

  #cardback .st13 {
    font-size: 37.769px;
  }

  /* FLIP ANIMATION */
  .container {
    perspective: 1000px;
  }

  .creditcard {
    width: 100%;
    max-width: 400px;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    cursor: pointer;
  }

  .creditcard .front,
  .creditcard .back {
    position: absolute;
    width: 100%;
    max-width: 400px;
    backface-visibility: hidden;
    color: #47525d;
  }

  .creditcard .back {
    transform: rotateY(180deg);
    transition: all 1s;
  }

  .creditcard:hover {
    transform: rotateY(180deg);
  }
`;
