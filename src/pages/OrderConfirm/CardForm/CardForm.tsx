import React, { FC } from 'react';
import MaskedInput from 'react-text-mask';
import { CardFormStyledComponent } from './styles';
import CreditCard from './Creditcard/Creditcard';
import {
  stripeCardNumberValidation,
  stripeCardExpirValidation,
  textWithSpacesOnly,
  minLength,
} from './utils/validations';
import { AMERICANEXPRESS, CVC, EXPIRYDATE, OTHERCARDS } from './Creditcard/constants';

interface StateInterface {
  card: string;
  expiry: string;
  securityCode: string;
  cardHolder: string;
}

const CardForm: FC = () => {
  // const [name, setName] = useState('');
  // const [cardnumber, setCardNumber] = useState('');
  // const [expirationdate, setExpirationdate] = useState('');
  // const [securitycode, setSecuritycode] = useState('');
  // const [ccicon, setCcicon] = useState('');
  // const [ccsingle, setCcsingle] = useState('');

  const [cardType, setCardType] = React.useState();
  const [error, setError] = React.useState({});

  const generatecard = () => {
    const testCards = [
      '4000 0566 5566 5556',
      '5200 8282 8282 8210',
      '3714 4963 5398 431',
      '6011 0009 9013 9424',
      '3056 9309 0259 9424',
      '3566 0020 2036 0505',
      '6200 0000 0000 0005',
      '6759 6498 2643 8453',
    ];
    const randomNumber = Math.floor(Math.random() * testCards.length);
    // setCardNumber(testCards[randomNumber]);
    dispatch({ type: 'card', data: testCards[randomNumber] });
  };
  const reducer = (state: StateInterface, action) => {
    switch (action.type) {
      case 'card':
        return { ...state, card: action.data };
      case 'expiry':
        return { ...state, expiry: action.data };
      case 'securityCode':
        return { ...state, securityCode: action.data };
      case 'cardHolder':
        return { ...state, cardHolder: action.data };
      case 'cleanState':
        return { ...action.data };
      default:
        return state;
    }
  };

  function handleClickGenerate() {}
  const [state, dispatch] = React.useReducer(reducer, {
    card: '',
    expiry: '',
    securityCode: '',
    cardHolder: '',
  });
  function findDebitCardType(cardNumber: string) {
    const regexPattern = {
      MASTERCARD: /^5[1-5][0-9]{1,}|^2[2-7][0-9]{1,}$/,
      VISA: /^4[0-9]{2,}$/,
      AMERICAN_EXPRESS: /^3[47][0-9]{5,}$/,
      DISCOVER: /^6(?:011|5[0-9]{2})[0-9]{3,}$/,
      DINERS_CLUB: /^3(?:0[0-5]|[68][0-9])[0-9]{4,}$/,
      JCB: /^(?:2131|1800|35[0-9]{3})[0-9]{3,}$/,
      UNION_PAY: /^62\\d{0,14}$/,
      MAESTRO: /^(?:5[0678]\\d{0,2}|6304|67\\d{0,2})\\d{0,12}$/,
    };
    // for (const card in regexPattern) {
    Object.keys(regexPattern).forEach((card) => {
      if (cardNumber.replace(/[^\d]/g, '').match(regexPattern[card])) return card;
    });
    return '';
  }
  const handleValidations = (type, value) => {
    let errorText;
    switch (type) {
      case 'card':
        setCardType(findDebitCardType(value));
        errorText = stripeCardNumberValidation(value);
        setError({ ...error, cardError: errorText });
        break;
      case 'cardHolder':
        errorText = value === '' ? 'Required' : textWithSpacesOnly(value);
        setError({ ...error, cardHolderError: errorText });
        break;
      case 'expiry':
        errorText = value === '' ? 'Required' : stripeCardExpirValidation(value);
        setError({ ...error, expiryError: errorText });
        break;
      case 'securityCode':
        errorText = value === '' ? 'Required' : minLength(3)(value);
        setError({ ...error, securityCodeError: errorText });
        break;
      default:
        break;
    }
  };

  const handleInputData = (e) => {
    dispatch({ type: e.target.name, data: e.target.value });
    // handleValidations(e.target.name, e.target.value);
  };

  const handleBlur = (e) => {
    handleValidations(e.target.name, e.target.value);
  };

  return (
    <CardFormStyledComponent>
      <div className="container preload">
        <CreditCard
          cardNumber={state.card}
          name={state.cardHolder}
          expirationDate={state.expiry}
          securityCode={state.securityCode}
          cardType={cardType}
        />
      </div>
      <div className="form-container">
        <div className="field-container">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            maxLength={50}
            type="text"
            name="cardHolder"
            value={state.cardHolder}
            onChange={handleInputData}
            onBlur={handleBlur}
            // value={name}
            // onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="field-container">
          <label htmlFor="cardnumber">Card Number</label>
          <span
            role="button"
            tabIndex={0}
            className="generatecard"
            onKeyDown={handleClickGenerate}
            onClick={generatecard}
          >
            generate random
          </span>
          <MaskedInput
            id="cardnumber"
            name="card"
            required
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            mask={
              ['37', '34'].includes(state && state.card.split('').splice(0, 2).join(''))
                ? AMERICANEXPRESS
                : OTHERCARDS
            }
            guide={false}
            value={state.card}
            onChange={handleInputData}
            onBlur={handleBlur}
            // value={cardnumber}
            // onChange={(event) => setCardNumber(event.target.value)}
          />
          {error && error.cardError && error.cardError.length > 1 && <span>{error.cardError}</span>}
          <svg
            id="ccicon"
            className="ccicon"
            width="750"
            height="471"
            viewBox="0 0 750 471"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          />
        </div>
        <div className="field-container">
          <label htmlFor="expirationdate">Expiration (mm/yy)</label>
          <MaskedInput
            id="expirationdate"
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            mask={EXPIRYDATE}
            name="expiry"
            value={state.expiry}
            onChange={handleInputData}
            onBlur={handleBlur}
            // value={expirationdate}
            // onChange={(event) => setExpirationdate(event.target.value)}
          />
        </div>
        <div className="field-container">
          <label htmlFor="securitycode">Security Code</label>
          <MaskedInput
            id="securitycode"
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            name="securityCode"
            mask={CVC}
            guide={false}
            value={state.securityCode}
            onChange={handleInputData}
            onBlur={handleBlur}
            // value={securitycode}
            // onChange={(event) => setSecuritycode(event.target.value)}
          />
        </div>
      </div>
    </CardFormStyledComponent>
  );
};

export default CardForm;
