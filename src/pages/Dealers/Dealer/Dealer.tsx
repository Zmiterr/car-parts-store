import React, { FC, useRef } from 'react';
import { DealerInfo, DealerLogo, DealerReport, ReportButton } from '../styles';
import { StyledCard } from '../../../shared/styled/containers/Card';
import emptyCartImg from '../../../assets/dealer-logo.jpg';

const Dealer: FC = () => {
  const img = useRef(emptyCartImg);
  return (
    <StyledCard>
      <DealerLogo>
        <img src={img.current} alt="dealer" />
      </DealerLogo>
      <DealerInfo>
        <ul>
          <li>
            Lorem ipsum: <span>lorem</span>
          </li>
          <li>
            Lorem ipsum: <span>lorem</span>
          </li>
          <li>
            Lorem ipsum: <span>lorem</span>
          </li>
        </ul>
      </DealerInfo>
      <DealerReport>
        <ReportButton>Send message</ReportButton>
      </DealerReport>
    </StyledCard>
  );
};

export default Dealer;
