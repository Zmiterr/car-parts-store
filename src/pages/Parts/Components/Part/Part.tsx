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
  PartToCartButton,
} from './Styles';
import { StyledCard } from '../../../../shared/styled/containers/Card';
import { SmallDescribe } from '../../../../shared/styled/headers/SmallDescribe';

const Part: FC = () => {
  return (
    <StyledCard>
      <PartImage src={img} alt="text" />
      <PartSpecifications>
        <H5>Part</H5>
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
        <PartSpecificationsAdditional>
          <SmallDescribe>Lorem ipsum dolor sit amet.</SmallDescribe>
        </PartSpecificationsAdditional>
      </PartSpecifications>
      <PartOrderInfo>
        <PartPrise>
          <span>5000$</span>
        </PartPrise>
        <PartLocation>
          <SmallDescribe>Los-santos</SmallDescribe>
        </PartLocation>
        <PartDealer>
          <span>Seller name</span>
        </PartDealer>
        <PartToCartButton>Add to cart</PartToCartButton>
      </PartOrderInfo>
    </StyledCard>
  );
};

export default Part;
