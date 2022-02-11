import React, { FC, useEffect } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { LotInterface } from '../../../store/lots/types';
import { getLots } from '../../../store/lots/lotsActions';

interface CompareTableProps {
  lots: LotInterface[];
}

const CompareTable: FC<CompareTableProps> = ({ lots }: CompareTableProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLots());
  }, [dispatch]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Part</TableCell>
            <TableCell align="right">Part</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Condition</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lots.map((lot: LotInterface) => (
            <TableRow key={lot.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {lot.name}
              </TableCell>
              <TableCell align="right">{lot.name}</TableCell>
              <TableCell align="right">{lot.description}</TableCell>
              <TableCell align="right">{lot.condition}</TableCell>
              <TableCell align="right">{lot.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CompareTable;
