import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox, FormControlLabel } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/BookmarkAdded';
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
import {
  addLotToCart,
  addLotToCompare,
  removeLotFromCart,
  removeLotFromCompare,
} from '../../../../store/lots/lotsActions';
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

  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const addToCart = () => {
    const updateLotCart = !isAddedToCart ? addLotToCart : removeLotFromCart;
    dispatch(updateLotCart(lot.id));
    setIsAddedToCart(!isAddedToCart);
  };

  const lotsToCompare = useTypedSelector((state) => state.lots.lotsToCompare);
  const lotsInCart = useTypedSelector((state) => state.lots.lotsInCart);
  const userRole = useTypedSelector((state) => state.user.user?.[0]?.role);

  return (
    <StyledCard>
      <FormControlLabel
        control={<Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} />}
        label=""
        checked={lotsToCompare.some((checkedLot) => lot.id === checkedLot)}
        labelPlacement="start"
        onChange={handleCompareClick}
      />
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
        {userRole !== 'dealer' && (
          <PrimaryButton onClick={addToCart}>
            {!lotsInCart.some((checkedLot) => lot.id === checkedLot) ? `Add to cart` : `Remove`}
          </PrimaryButton>
        )}
      </PartOrderInfo>
    </StyledCard>
  );
};

export default Part;
