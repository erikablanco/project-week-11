import faker from 'faker';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
Avatar,
Grid,
Typography,
TablePagination,
TableFooter
 } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    tableContainer: {
        fontFamily: 'Playfair Display',
        borderRadius: 15,
        margin: '80px 80px',
        maxWidth: 950
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        fontFamily: 'Playfair Display',
        backgroundColor: theme.palette.common.black,
        color: theme.palette.getContrastText(theme.palette.common.black)
    },
    avatar: {
        backgroundColor: theme.palette.common.black,
        fontFamily: 'Playfair Display',
        color: theme.palette.getContrastText(theme.palette.common.black)
    },
    name: {
        fontWeight: 'bold',
        fontFamily: 'Playfair Display',
        color: theme.palette.common.black
    },
    status: {
        fontFamily: 'Playfair Display',
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'common.black',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    }
  }));

let Users = [], SetUses = ['Active', 'Pending', 'Blocked'];
for(let i=0;i<14;i++) {
    Users[i] = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        jobTitle: faker.name.jobTitle(),
        company: faker.company.companyName(),
        joinDate: faker.date.past().toLocaleDateString('en-US'),
        status: SetUses[Math.floor(Math.random() * SetUses.length)]
    }
}

function DataTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>User Info</TableCell>
            <TableCell className={classes.tableHeaderCell}>Job Info</TableCell>
            <TableCell className={classes.tableHeaderCell}>Joining Date</TableCell>
            <TableCell className={classes.tableHeaderCell}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.name}>
              <TableCell>
                  <Grid container>
                      <Grid item lg={2}>
                          <Avatar alt={row.name} src='.' className={classes.avatar}/>
                      </Grid>
                      <Grid item lg={10}>
                          <Typography className={classes.name}>{row.name}</Typography>
                          <Typography color="textSecondary" variant="body2">{row.email}</Typography>
                          <Typography color="textSecondary" variant="body2">{row.phone}</Typography>
                      </Grid>
                  </Grid>
                </TableCell>
              <TableCell>
                  <Typography color="common.black" variant="subtitle2">{row.jobTitle}</Typography>
                  <Typography color="textSecondary" variant="body2">{row.company}</Typography>
                </TableCell>
              <TableCell>{row.joinDate}</TableCell>
              <TableCell>
                  <Typography 
                    className={classes.status}
                    style={{
                        backgroundColor: 
                        ((row.status === 'Active' && 'blue') ||
                        (row.status === 'Pending' && 'grey') ||
                        (row.status === 'Blocked' && 'red'))
                    }}
                  >{row.status}</Typography>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
        <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={Users.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default DataTable;