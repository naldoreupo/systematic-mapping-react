import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const DenseTablePapers = (props)  => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Source</TableCell>
            <TableCell>Update</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.dataPapers.map((row) => (
            <TableRow key={row.name}>
                <TableCell component="th" scope="row" align="left">
                {row.id}
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                {row.source}
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                {row.lastUpdate}
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                    {row.title}
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  <a href={row.id}>edit</a> 
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DenseTablePapers;