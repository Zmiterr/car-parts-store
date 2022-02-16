import React, { FC, useState } from 'react';
import { CardFormStyledComponent } from './styles';
import CreditCard from './Creditcard/Creditcard';

const CardForm: FC = () => {
  const [name, setName] = useState('');
  const [cardnumber, setCardNumber] = useState('');
  const [expirationdate, setExpirationdate] = useState('');
  const [securitycode, setSecuritycode] = useState('');
  const [ccicon, setCcicon] = useState('');
  const [ccsingle, setCcsingle] = useState('');

  const generatecard = () => {
    const testCards = [
      '4000056655665556',
      '5200828282828210',
      '371449635398431',
      '6011000990139424',
      '30569309025904',
      '3566002020360505',
      '6200000000000005',
      '6759649826438453',
    ];
    const randomNumber = Math.floor(Math.random() * testCards.length);
    setCardNumber(testCards[randomNumber]);
  };

  return (
    <CardFormStyledComponent>
      <div className="container preload">
        <CreditCard
          cardNumber={cardnumber}
          name={name}
          expirationDate={expirationdate}
          securityCode={securitycode}
        />
      </div>
      <div className="form-container">
        <div className="field-container">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            maxLength={50}
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="field-container">
          <label htmlFor="cardnumber">Card Number</label>
          <span className="generatecard" onClick={generatecard}>
            generate random
          </span>
          <input
            id="cardnumber"
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            value={cardnumber}
            onChange={(event) => setCardNumber(event.target.value)}
          />
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
          <input
            id="expirationdate"
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            value={expirationdate}
            onChange={(event) => setExpirationdate(event.target.value)}
          />
        </div>
        <div className="field-container">
          <label htmlFor="securitycode">Security Code</label>
          <input
            id="securitycode"
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            value={securitycode}
            onChange={(event) => setSecuritycode(event.target.value)}
          />
        </div>
      </div>
    </CardFormStyledComponent>
  );
};

export default CardForm;
