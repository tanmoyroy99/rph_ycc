import react, {Component} from 'react';
import { DataTable,
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
    OverflowMenuItem,
    Button,
    Modal,
    ComposedModal, 
    ModalHeader,
    ModalBody,
    ModalFooter,
}  from 'carbon-components-react';
import {connect} from 'react-redux';
import {setStudentHeader} from '../../action/index'

import Student from './Student'

    const rows = [
        {
          id: 'a',
          name: 'Load Balancer 3',
          protocol: 'HTTP',
          port: 3000,
          rule: 'Round robin',
          attached_groups: 'Kevin’s VM Groups',
          status: 'Disabled',
          enabled: "true",
        },
        {
          id: 'b',
          name: 'Load Balancer 1',
          protocol: 'HTTP',
          port: 443,
          rule: 'Round robin',
          attached_groups: 'Maureen’s VM Groups',
          status: 'Starting',
          enabled: "true",
        },
        {
          id: 'c',
          name: 'Load Balancer 2',
          protocol: 'HTTP',
          port: 80,
          rule: 'DNS delegation',
          attached_groups: 'Andrew’s VM Groups',
          status: 'Active',
          enabled: "false",
        },
        {
          id: 'd',
          name: 'Load Balancer 1',
          protocol: 'HTTP',
          port: 443,
          rule: 'Round robin',
          attached_groups: 'Maureen’s VM Groups',
          status: 'Starting',
          enabled: "true",
        },
      ];
    
      

class UserList extends Component{
  constructor(props){
    super(props);
    this.state={
      isOpen: false
    }
  }
  newTestClick(event){
    console.log("test Click new")
  }
    render(){
      console.log("this.props>>> ", this.props)
      const  headers = this.props.studentHeader;
        return(
            <div>
                <h3>UserList Content</h3>
                <div>
                  <Student open={this.state.isOpen} testClick={()=>{this.setState({isOpen: false})}} />
                </div>
                <div className="user-list">
                    <DataTable rows={rows} headers={headers} isSortable >
                        {({ 
                          rows, 
                          headers, 
                          getHeaderProps, 
                          getRowProps, 
                          getTableProps,
                          getBatchActionProps,
                          onInputChange
                        }) => (
                        <TableContainer title="DataTable">
                            <TableToolbar>
                              <TableToolbarContent>
                              <TableToolbarSearch
                                defaultExpanded
                                  tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}
                                  onChange={onInputChange}
                                />
                              <Button
                                tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}
                                size="small"
                                kind="primary"
                                onClick={()=>{this.setState({isOpen: true})}}
                                >
                                Add new +
                              </Button>
                              </TableToolbarContent>
                            </TableToolbar>
                            <Table {...getTableProps()}>
                            <TableHead>
                                <TableRow>
                                {headers.map((header, key) => (
                                  
                                    <TableHeader key={header.key} {...getHeaderProps({ header })}>
                                    {header.header} - {key} -- {header.key}
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
                                        <OverflowMenuItem>Edit</OverflowMenuItem>
                                        <OverflowMenuItem>Delete</OverflowMenuItem>
                                        <OverflowMenuItem>Action 3</OverflowMenuItem>
                                    </OverflowMenu>
                                    </TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                            </Table>
                        </TableContainer>
                        )}
                    </DataTable>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
  console.log('state>>>', state)
  return {
    studentHeader : state.studentHeader
  }
}

export default connect(mapStateToProps, null)(UserList);