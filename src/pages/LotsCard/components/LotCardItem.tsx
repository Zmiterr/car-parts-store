import React, { FC } from 'react';
import {
  PartDealer,
  PartImage,
  PartLocation,
  PartOrderInfo,
  PartPrise,
  PartSpecifications,
  PartSpecificationsAdditional,
} from '../../Parts/Components/Part/Styles';
import { H5 } from '../../../shared/styled/headers/H5';
import { SmallDescribe } from '../../../shared/styled/headers/SmallDescribe';
import { StyledCard } from '../../../shared/styled/containers/Card';
import { LotInterface } from '../../../store/lots/types';

interface LotCardItemProps {
  lot: LotInterface;
}

const LotCardItem: FC<LotCardItemProps> = ({ lot }) => {
  return (
    <StyledCard>
      <PartImage src={lot.photoUrl || lot.defaultImageUrl} alt="text" />
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
          <span>{lot.price}$</span>
        </PartPrise>
        <PartLocation>
          <SmallDescribe>Los-santos</SmallDescribe>
        </PartLocation>
        <PartDealer>
          <span>
            {lot.firstName} {lot.lastName}
          </span>
        </PartDealer>
      </PartOrderInfo>
    </StyledCard>
  );
};

export default LotCardItem;
