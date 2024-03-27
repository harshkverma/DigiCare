import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { DigiStickyHeaderTableProps } from "../interface/DigiStickyHeaderTable";
import style from "../../../assets/styles/_variable.module.scss";
import { capitalize } from "@mui/material";

const cellStyles = {
  backgroundColor: "#f3f3f3", // Light gray background color
  color: "#333", // Darker text color
};

const headerCellStyles = {
  backgroundColor: "#e0e0e0", // Lighter gray background color for header cells
  color: "#333", // Darker text color
  fontWeight: "bold", // Bold font weight for header cells
};

export function DigiStickyHeaderTable<T>({
  columns,
  rows,
}: DigiStickyHeaderTableProps<T>) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: style.doctorHistoryTableHeight }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    ...headerCellStyles, // Apply header cell styles
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row["code" as keyof T] as string}
                  >
                    {columns.map((column) => {
                      const value = row[column.id as keyof T];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={cellStyles} // Apply cell styles
                        >
                          {/* {column.format && typeof value === "number"
                            ? column.format(value)
                            : value} */}
                          {Array.isArray(value)
                            ? (value.join(", ") as string)
                            : capitalize("" + value)}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
