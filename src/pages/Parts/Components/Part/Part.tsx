import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox, FormControlLabel } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/BookmarkAdded';
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
import { PrimaryButton } from '../../../../shared/styled/Elements/PrimaryButton';
import { LotInterface } from '../../../../store/lots/types';
import { addLotToCompare, removeLotFromCompare } from '../../../../store/lots/lotsActions';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';

interface PartPropsInterface {
  lot: LotInterface;
}

const Part: FC<PartPropsInterface> = ({ lot }) => {
  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState(false);
  const handleCompareClick = () => {
    const updateLotCompare = isChecked ? removeLotFromCompare : addLotToCompare;
    dispatch(updateLotCompare(lot.id));
    setIsChecked(!isChecked);
  };

  const lotsToCompare = useTypedSelector((state) => state.lots.lotsToCompare);

  return (
    <StyledCard>
      <FormControlLabel
        control={<Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} />}
        label=""
        checked={lotsToCompare.some((checkedLot) => lot.id === checkedLot)}
        labelPlacement="start"
        onChange={handleCompareClick}
      />
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
          <span>{lot.price}$</span>
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
