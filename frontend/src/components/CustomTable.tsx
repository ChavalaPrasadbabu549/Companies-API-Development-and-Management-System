import React, { useCallback, useMemo } from 'react'
import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Tooltip } from '@mui/material'
import type { CustomTableProps, TableAction } from '../types/Type';
import TranslatedText from './TranslatedText';


const CustomTable: React.FC<CustomTableProps> = React.memo(({ columns, rows, rowsPerPageOptions = [5, 10, 25] }) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageOptions[0]);

    const handleChangePage = useCallback((_: unknown, newPage: number) => setPage(newPage), []);

    const handleChangeRowsPerPage = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }, []);

    const paginatedRows = useMemo(() => rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage), [rows, page, rowsPerPage]);

    return (
        <>
            <TableContainer component={Paper}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {columns.map((col, index) => (
                                <TableCell
                                    key={index}
                                    sx={{ width: col.width, textAlign: col.textAlign }}
                                >
                                    <TranslatedText text={col.label} />
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {paginatedRows.length > 0 ? (
                            paginatedRows.map((row, rowIndex) => (
                                <TableRow key={rowIndex}>
                                    {columns.map((col, colIndex) => (
                                        <TableCell key={colIndex} sx={{ textAlign: col.textAlign }}>
                                            {Array.isArray(row[col.field]) ? (
                                                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                                    {(row[col.field] as TableAction[]).map((action, i) => (
                                                        <Tooltip key={i} title={action.label}>
                                                            <IconButton size="small" color={action.color} onClick={action.onClick}>
                                                                {action.icon}
                                                            </IconButton>
                                                        </Tooltip>
                                                    ))}
                                                </Box>
                                            ) : (
                                                <TranslatedText text={String(row[col.field])} />
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} align="center">
                                    <TranslatedText text="No data available" />
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>

                <TablePagination
                    component="div"
                    count={rows.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowsPerPageOptions={rowsPerPageOptions}
                />
            </TableContainer>
        </>
    );
});

export default CustomTable;
