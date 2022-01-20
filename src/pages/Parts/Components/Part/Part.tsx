import React, { FC } from 'react';
import img from '../../../../assets/images/ats_classic_1_large.png';
import { H5 } from '../../../../shared/styled/headers/H5';
import {
  PartDealer,
  PartImage,
  PartLocation,
  PartOrderInfo,
  PartPrise,
  PartSpecifications,
  PartSpecificationsAdditional,
} from './Styles';
import { StyledCard } from '../../../../shared/styled/containers/Card';
import { SmallDescribe } from '../../../../shared/styled/headers/SmallDescribe';
import { LotInterface } from '../../../MyLots/MyLots';
import { PrimaryButton } from '../../../../shared/styled/Elements/PrimaryButton';

interface PartPropsInterface {
  lot: LotInterface;
}

const Part: FC<PartPropsInterface> = ({ lot }) => {
  return (
    <StyledCard>
      <PartImage src={img} alt="text" />
      <PartSpecifications>
        <H5>{lot.name}</H5>
        <ul>
          {lot.models.map((model: string) => (
            <li key={model}>
              Alfa romeo: <span>{model}</span>
            </li>
          ))}
        </ul>
        <PartSpecificationsAdditional>
          <SmallDescribe>{lot.description}</SmallDescribe>
        </PartSpecificationsAdditional>
      </PartSpecifications>
      <PartOrderInfo>
        <PartPrise>
          <span>{lot.price}</span>
        </PartPrise>
        <PartLocation>
          <SmallDescribe>Los-santos</SmallDescribe>
        </PartLocation>
        <PartDealer>
          <span>Dealer name</span>
        </PartDealer>
        <PrimaryButton>Add to cart</PrimaryButton>
      </PartOrderInfo>
    </StyledCard>
  );
};

export default Part;
