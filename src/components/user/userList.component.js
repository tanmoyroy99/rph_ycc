import React, { Component } from 'react';
import {
    DataTable,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
    TableToolbar,
    TableToolbarAction,
    TableToolbarContent,
    TableToolbarSearch,
    TableToolbarMenu,
    OverflowMenu,
    OverflowMenuItem
  } from "carbon-components-react";
  import MainHeaderControl from '../header/MainHeader.component'

class UserListControl extends Component {
    render() {
        return (
            <div className="userList">
            <h2>User List</h2>
            <h2>User List</h2>
            <h2>User List</h2>
            <h2>User List</h2>
            <h2>User List</h2>
                {/* <DataTable rows={rows} headers={headers} isSortable>
                    {({ rows, headers, getHeaderProps, getRowProps, getTableProps }) => (
                    <TableContainer title="DataTable" description="With overflow menu">
                        <Table {...getTableProps()}>
                        <TableHead>
                            <TableRow>
                            {headers.map((header) => (
                                <TableHeader key={header.key} {...getHeaderProps({ header })}>
                                {header.header}
                                </TableHeader>
                            ))}
                            <TableHeader />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                            <TableRow key={row.id} {...getRowProps({ row })}>
                                {row.cells.map((cell) => (
                                <TableCell key={cell.id}>{cell.value}</TableCell>
                                ))}
                                <TableCell className="bx--table-column-menu">
                                <OverflowMenu light flipped>
                                    <OverflowMenuItem>Action 1</OverflowMenuItem>
                                    <OverflowMenuItem>Action 2</OverflowMenuItem>
                                    <OverflowMenuItem>Action 3</OverflowMenuItem>
                                </OverflowMenu>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                        </Table>
                    </TableContainer>
                    )}
                </DataTable> */}
            </div>
        )
    }
}

export default UserListControl;