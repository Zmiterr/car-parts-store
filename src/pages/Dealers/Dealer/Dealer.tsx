import React, { FC } from 'react';
import { DealerInfo, DealerLogo, DealerReport, ReportButton } from '../Styles';
import { StyledCard } from '../../../shared/styled/containers/Card';
import emptyCartImg from '../../../assets/images/dealer-logo.jpg';

const Dealer: FC = () => {
  return (
    <StyledCard>
      <DealerLogo>
        <img src={emptyCartImg} alt="dealer" />
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
