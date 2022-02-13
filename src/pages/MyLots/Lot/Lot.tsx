import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox, FormControlLabel } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/bookmarkAdded';
import { SmallDescribe } from '../../../shared/styled/headers/SmallDescribe';
import { StyledCard } from '../../../shared/styled/containers/Card';
import EditIcon from '../../../assets/icons/edit.svg';
import DeleteIcon from '../../../assets/icons/delete.svg';
import { Icon, IconWrapper, LotContent, LotDescription, LotName } from './Styles';
import img from '../../../assets/images/ats_classic_1_large.png';
import { PartImage, PartOrderInfo, PartPrise } from '../../Parts/Components/Part/Styles';
import {
  addLotToCompare,
  removeLot,
  removeLotFromCompare,
  updateLot,
} from '../../../store/lots/lotsActions';

import { LotInterface } from '../../../store/lots/types';
import { LotsModal } from '../LotsModal';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

type SubmitBodyInterface = Omit<LotInterface, 'id'>;

interface PartPropsInterface {
  lot: LotInterface;
}
const Lot: FC<PartPropsInterface> = ({ lot }) => {
  const dispatch = useDispatch();
  const [isOpen, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const onRemovedLot = () => {
    dispatch(removeLot(lot.id));
  };

  const [autocompleteData, setAutocompleteData] = useState(lot.partId);
  const lotsToCompare = useTypedSelector((state) => state.lots.lotsToCompare);

  const onEditLot = () => {
    setOpen(true);
  };

  const onSubmit = (data: SubmitBodyInterface) => {
    dispatch(updateLot(lot.id, { ...lot, ...data, partId: autocompleteData }));
    setOpen(false);
  };
  // const isLotPresentInCompare = lotsToCompare.some((checkedLot) => lot.id === checkedLot.id);

  const [isChecked, setIsChecked] = useState(false);
  const handleCompareClick = () => {
    const updateLotCompare = isChecked ? removeLotFromCompare : addLotToCompare;
    dispatch(updateLotCompare(lot.id));
    setIsChecked(!isChecked);
  };

  return (
    <StyledCard>
      <LotContent>
        <LotsModal
          isOpen={isOpen}
          lot={lot}
          handleClose={handleClose}
          setAutocompleteData={setAutocompleteData}
          onSubmit={onSubmit}
        />
        <FormControlLabel
          control={<Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} />}
          label=""
          checked={lotsToCompare.some((checkedLot) => lot.id === checkedLot)}
          labelPlacement="start"
          onChange={handleCompareClick}
        />
        <PartImage src={img} alt="text" />
        <LotName>{lot.name}</LotName>
        <LotName>{lot.condition}</LotName>
        <LotName>{[lot.models].join(',')}</LotName>
        <SmallDescribe>{[lot.description].join(',')}</SmallDescribe>
        <LotDescription>{lot.description}</LotDescription>
      </LotContent>
      <PartOrderInfo>
        <PartPrise>
          <span>{lot.price}$</span>
        </PartPrise>
      </PartOrderInfo>
      <IconWrapper>
        <Icon
          src={(EditIcon || '').replace(/^\.\//, '/')}
          beforeInjection={(svg: SVGSVGElement) => {
            svg.setAttribute('style', 'width: 24px');
            svg.setAttribute('style', 'height: 24px');
          }}
          onClick={() => {
            onEditLot();
          }}
        />
        <Icon
          src={(DeleteIcon || '').replace(/^\.\//, '/')}
          beforeInjection={(svg: SVGSVGElement) => {
            svg.setAttribute('style', 'width: 24px');
            svg.setAttribute('style', 'height: 24px');
          }}
          onClick={() => {
            onRemovedLot();
          }}
        />
      </IconWrapper>
    </StyledCard>
  );
};

export default Lot;
