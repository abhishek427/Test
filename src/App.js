import "./App.css";
import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(type, brand) {
  return { type, brand };
}

const rows = [createData("bike", "Pulser"), createData("bike", "FZ"), createData("bike", "R15"), createData("bike", "Ninja"), createData("bike", "Pulser")];
const App = () => {
  const [occ, setOcc] = useState([]);
  function findOcc(arr, key) {
    let arrayTwo = [];

    arr.forEach((x) => {
      if (
        arrayTwo.some((val) => {
          return val[key] == x[key];
        })
      ) {
        arrayTwo.forEach((k) => {
          if (k[key] === x[key]) {
            k["occurrence"]++;
          }
        });
      } else {
        let a = {};
        a[key] = x[key];
        a["occurrence"] = 1;
        arrayTwo.push(a);
      }
    });

    return arrayTwo;
  }

  let key = "brand";
  useEffect(() => {
    setOcc(findOcc(rows, key));
  }, [rows]);
  console.log(findOcc(rows, key));
  return (
    <div style={{ margin: "5%" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">type</TableCell>
              <TableCell align="center">brand</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.type} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row" align="center">
                  {row.type}
                </TableCell>
                <TableCell align="center">{row.brand}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="data-container">
        {occ.map((item) => {
          return (
            <div className="data-sub-container">
              <strong>{item.brand} - </strong>
              <strong>{item.occurrence}</strong>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default App;
