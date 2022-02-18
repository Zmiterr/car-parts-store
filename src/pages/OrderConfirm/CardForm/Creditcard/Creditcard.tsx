import React, { FC } from 'react';

interface CreditcardProps {
  cardNumber: string;
  name: string;
  expirationDate: string;
  securityCode: string;
  cardType: string;
}
const image =
  '<svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny" width="47.4" height="40.65" viewBox="21 18.5 158 135.5"><path d="M25,50 l150,0 0,100 -150,0 z" stroke-width="4" stroke="black" fill="rgb(128,224,255)" fill-opacity="1" ></path><path d="M25,50 L175,150 M25,150 L175,50" stroke-width="4" stroke="black" fill="black" ></path><g transform="translate(0,0)" stroke-width="4" stroke="black" fill="none" ><circle cx="100" cy="30" r="7.5" fill="black" ></circle><circle cx="70" cy="30" r="7.5" fill="black" ></circle><circle cx="130" cy="30" r="7.5" fill="black" ></circle></g></svg>';
const Creditcard: FC<CreditcardProps> = ({
  cardNumber,
  name,
  expirationDate,
  securityCode,
  cardType,
}) => {
  return (
    <div className="creditcard">
      <div className="front">
        <div id="ccsingle">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="750px"
            height="471px"
            viewBox="0 0 750 471"
            enableBackground="new 0 0 750 471"
            xmlSpace="preserve"
          >
            <title>Slice 1</title>
            <desc>Created with Sketch.</desc>
            <g id="visa">
              <path
                id="Shape"
                fill="#0E4595"
                d="M278.198,334.228l33.36-195.763h53.358l-33.384,195.763H278.198L278.198,334.228z"
              />
              <path
                id="path13"
                fill="#0E4595"
                d="M524.307,142.687c-10.57-3.966-27.135-8.222-47.822-8.222c-52.725,0-89.863,26.551-90.18,64.604c-0.297,28.129,26.514,43.821,46.754,53.185c20.77,9.597,27.752,15.716,27.652,24.283c-0.133,13.123-16.586,19.116-31.924,19.116c-21.355,0-32.701-2.967-50.225-10.274l-6.877-3.112l-7.488,43.823c12.463,5.466,35.508,10.199,59.438,10.445c56.09,0,92.502-26.248,92.916-66.884c0.199-22.27-14.016-39.216-44.801-53.188c-18.65-9.056-30.072-15.099-29.951-24.269c0-8.137,9.668-16.838,30.559-16.838c17.447-0.271,30.088,3.534,39.936,7.5l4.781,2.259L524.307,142.687"
              />
              <path
                id="Path"
                fill="#0E4595"
                d="M661.615,138.464h-41.23c-12.773,0-22.332,3.486-27.941,16.234l-79.244,179.402h56.031c0,0,9.16-24.121,11.232-29.418c6.123,0,60.555,0.084,68.336,0.084c1.596,6.854,6.492,29.334,6.492,29.334h49.512L661.615,138.464L661.615,138.464z M596.198,264.872c4.414-11.279,21.26-54.724,21.26-54.724c-0.314,0.521,4.381-11.334,7.074-18.684l3.607,16.878c0,0,10.217,46.729,12.352,56.527h-44.293V264.872L596.198,264.872z"
              />
              <path
                id="path16"
                fill="#0E4595"
                d="M232.903,138.464L180.664,271.96l-5.565-27.129c-9.726-31.274-40.025-65.157-73.898-82.12l47.767,171.204l56.455-0.064l84.004-195.386L232.903,138.464"
              />
              <path
                id="path18"
                fill="#F2AE14"
                d="M131.92,138.464H45.879l-0.682,4.073c66.939,16.204,111.232,55.363,129.618,102.415l-18.709-89.96C152.877,142.596,143.509,138.896,131.92,138.464"
              />
            </g>
          </svg>

          {/* //TODO fix error with svg string */}
          {/* <img alt={cardType} src={`data:image/svg+xml;utf8,${cardLogo[cardType]}`} /> */}
        </div>
        <svg
          version="1.1"
          id="cardfront"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 750 471"
          xmlSpace="preserve"
        >
          <g id="Front">
            <g id="CardBackground">
              <g id="Page-1_1_">
                <g id="amex_1_">
                  <path
                    id="Rectangle-1_1_"
                    className="lightcolor grey"
                    d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                            C0,17.9,17.9,0,40,0z"
                  />
                </g>
              </g>
              <path
                className="darkcolor greydark"
                d="M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40,40h670C732.1,471,750,453.1,750,431z"
              />
            </g>
            <text
              transform="matrix(1 0 0 1 60.106 295.0121)"
              id="svgnumber"
              className="st2 st3 st4"
            >
              {cardNumber || '0123 4567 8910 1112'}
            </text>
            <text transform="matrix(1 0 0 1 54.1064 428.1723)" id="svgname" className="st2 st5 st6">
              {name || 'JOHN DOE'}
            </text>
            <text transform="matrix(1 0 0 1 54.1074 389.8793)" className="st7 st5 st8">
              cardholder name
            </text>
            <text transform="matrix(1 0 0 1 479.7754 388.8793)" className="st7 st5 st8">
              expiration
            </text>
            <text transform="matrix(1 0 0 1 65.1054 241.5)" className="st7 st5 st8">
              card number
            </text>
            <g>
              <text
                transform="matrix(1 0 0 1 574.4219 433.8095)"
                id="svgexpire"
                className="st2 st5 st9"
              >
                {expirationDate || '01 / 23'}
              </text>
              <text transform="matrix(1 0 0 1 479.3848 417.0097)" className="st2 st10 st11">
                VALID
              </text>
              <text transform="matrix(1 0 0 1 479.3848 435.6762)" className="st2 st10 st11">
                THRU
              </text>
              <polygon className="st2" points="554.5,421 540.4,414.2 540.4,427.9 		" />
            </g>
            <g id="cchip">
              <g>
                <path
                  className="st2"
                  d="M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,8.3-18.5,18.5-18.5h85.3
                        c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,135.3,178.3,143.6,168.1,143.6z"
                />
              </g>
              <g>
                <g>
                  <rect x="82" y="70" className="st12" width="1.5" height="60" />
                </g>
                <g>
                  <rect x="167.4" y="70" className="st12" width="1.5" height="60" />
                </g>
                <g>
                  <path
                    className="st12"
                    d="M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3
                            c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3
                            C143.9,122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,0.5
                            c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5
                            c3.1-3.2,4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z"
                  />
                </g>
                <g>
                  <rect x="82.8" y="82.1" className="st12" width="25.8" height="1.5" />
                </g>
                <g>
                  <rect x="82.8" y="117.9" className="st12" width="26.1" height="1.5" />
                </g>
                <g>
                  <rect x="142.4" y="82.1" className="st12" width="25.8" height="1.5" />
                </g>
                <g>
                  <rect x="142" y="117.9" className="st12" width="26.2" height="1.5" />
                </g>
              </g>
            </g>
          </g>
          <g id="Back" />
        </svg>
      </div>
      <div className="back">
        <svg
          version="1.1"
          id="cardback"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 750 471"
          xmlSpace="preserve"
        >
          <g id="Front">
            <line className="st0" x1="35.3" y1="10.4" x2="36.7" y2="11" />
          </g>
          <g id="Back">
            <g id="Page-1_2_">
              <g id="amex_2_">
                <path
                  id="Rectangle-1_2_"
                  className="darkcolor greydark"
                  d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                        C0,17.9,17.9,0,40,0z"
                />
              </g>
            </g>
            <rect y="61.6" className="st2" width="750" height="78" />
            <g>
              <path
                className="st3"
                d="M701.1,249.1H48.9c-3.3,0-6-2.7-6-6v-52.5c0-3.3,2.7-6,6-6h652.1c3.3,0,6,2.7,6,6v52.5
                    C707.1,246.4,704.4,249.1,701.1,249.1z"
              />
              <rect x="42.9" y="198.6" className="st4" width="664.1" height="10.5" />
              <rect x="42.9" y="224.5" className="st4" width="664.1" height="10.5" />
              <path
                className="st5"
                d="M701.1,184.6H618h-8h-10v64.5h10h8h83.1c3.3,0,6-2.7,6-6v-52.5C707.1,187.3,704.4,184.6,701.1,184.6z"
              />
            </g>
            <text transform="matrix(1 0 0 1 621.999 227.2734)" id="svgsecurity" className="st6 st7">
              {securityCode || '985'}
            </text>
            <g className="st8">
              <text transform="matrix(1 0 0 1 518.083 280.0879)" className="st9 st6 st10">
                security code
              </text>
            </g>
            <rect x="58.1" y="378.6" className="st11" width="375.5" height="13.5" />
            <rect x="58.1" y="405.6" className="st11" width="421.7" height="13.5" />
            <text
              transform="matrix(1 0 0 1 59.5073 228.6099)"
              id="svgnameback"
              className="st12 st13"
            >
              John Doe
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Creditcard;
