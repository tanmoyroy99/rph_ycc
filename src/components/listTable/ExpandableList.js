import React, {  Component } from 'react';
import {
    DataTable,
    Table,
    TableBatchAction,
    TableBatchActions,
    TableBody,
    TableCell,
    TableContainer,
    TableExpandHeader,
    TableExpandRow,
    TableExpandedRow,
    TableHead,
    TableHeader,
    TableRow,
    TableSelectAll,
    TableSelectRow,
    TableToolbar,
    TableToolbarAction,
    TableToolbarContent,
    TableToolbarSearch,
    TableToolbarMenu,
    Tag,
    Button
  } from 'carbon-components-react';
  import "./expandableList.scss";
  
import * as carbonIcon from '@carbon/icons-react';

const batchActionClick = (data)=>{
}

class ExpandableList extends Component{

  constructor(props){
    super(props);
    this.state={
      headerList: [],
      rowsData:[],
      filterButtonClick:(data)=>{return data}
    }
  }

  static getDerivedStateFromProps(props, state){
    return {
      headerList: props.headerList,
      rowsData: props.rowsData,
      filterButtonClick: props.myFilterCickProps
    }
  }
  filterButtonClicknew =(event)=>{
    this.state.filterButtonClick('myTestCode');
    console.log('filterButtonClick>>',event);
  }

  getCellByIndex(cellData){
    let index = cellData.info.header;
    let value = cellData.value;
      switch(true){
        case(index == "sevierity" && value != ''): return <Tag type={((value == 'High')?'red':(value == 'Low')?'green':'cyan')}>{value}</Tag>
        case(index == "compliance_status" && value != ''): return <div className={value == 'Non Complaint'?'nonComplaint':(value == 'Complaint')?'complaint':'notScanned'}>{value}</div>
        default: return <div>{value}</div>
      }
  }
  getExpandableCel(cell){
    return  <div className="subExpendable">
        <h6>{cell&&cell['header']?cell['header']:''}</h6>
        <div>{cell&&cell['value']?cell['value']:''}</div>
      </div>
  }

  
    render(){
      const headers = this.state.headerList
      const rowsData    = this.state.rowsData
      return(
            <div className="ExpandableListView">
                <div>
                <DataTable
                  rows={rowsData}
                  headers={headers}
                  isSortable
                  {...this.props}
                  render={({
                    rows,
                    headers,
                    getHeaderProps,
                    getSelectionProps,
                    getToolbarProps,
                    getBatchActionProps,
                    getRowProps,
                    onInputChange,
                    selectedRows,
                    getTableProps,
                    getTableContainerProps,
                  }) => (
                    <TableContainer
                      {...getTableContainerProps()}>
                      <TableToolbar {...getToolbarProps()}>
                        <TableBatchActions {...getBatchActionProps()}>
                          <TableBatchAction
                            renderIcon={carbonIcon.Edit16}
                            iconDescription="Save the selected rows"
                            onClick={batchActionClick(selectedRows)}>
                            Edit
                          </TableBatchAction>
                          <TableBatchAction
                            renderIcon={carbonIcon.Delete16}
                            iconDescription="Delete the selected rows"
                            onClick={batchActionClick(selectedRows)}>
                            Delete
                          </TableBatchAction>
                          <TableBatchAction
                            renderIcon={carbonIcon.Download16}
                            iconDescription="Download the selected rows"
                            onClick={batchActionClick(selectedRows)}>
                            Download
                          </TableBatchAction>
                          <TableBatchAction
                            renderIcon={carbonIcon.Bullhorn16}
                            iconDescription="Download the selected rows"
                            onClick={batchActionClick(selectedRows)}>
                            Notify owner
                          </TableBatchAction>
                        </TableBatchActions>
                        <TableToolbarContent>
                          <TableToolbarSearch onChange={onInputChange} />
                          <Button 
                          hasIconOnly
                          renderIcon={carbonIcon.DocumentExport16}
                          tooltipAlignment="center"
                          tooltipPosition="bottom"
                          iconDescription=""
                          kind='ghost'
                          />
                          <Button 
                          hasIconOnly
                          renderIcon={carbonIcon.Filter16}
                          tooltipAlignment="center"
                          tooltipPosition="bottom"
                          iconDescription=""
                          kind='ghost'
                          onClick={(e)=>{this.filterButtonClicknew(e)} }
                          />
                          <TableToolbarMenu></TableToolbarMenu>
                          
                        </TableToolbarContent>
                      </TableToolbar>
                      <Table {...getTableProps()}>
                        <TableHead>
                          <TableRow>
                            <TableExpandHeader />
                            <TableSelectAll {...getSelectionProps()} />
                            {headers.map((header, i) => (
                              <TableHeader key={i} {...getHeaderProps({ header })}>
                                {header.header}
                              </TableHeader>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row, rowIndex) => (
                            <React.Fragment key={row.id}>
                              <TableExpandRow {...getRowProps({ row })}>
                                <TableSelectRow {...getSelectionProps({ row })} />
                                  {
                                  row.cells.map((cell, index) => {
                                    return(
                                      <TableCell key={cell.id}>
                                      {this.getCellByIndex(cell)}
                                      </TableCell>
                                    )}
                                  )
                                  }
                              </TableExpandRow>
                              <TableExpandedRow colSpan={headers.length + 3} className="demo-expanded-td" >
                                <div className="expendableData">
                                  {
                                    (rowsData[rowIndex]&&rowsData[rowIndex]['subData'])?rowsData[rowIndex]['subData'].map((eCell) => {
                                      return(
                                        this.getExpandableCel(eCell)
                                      )
                                    }):""
                                  }
                                  
                                </div>
                              </TableExpandedRow>
                            </React.Fragment>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  )}
                />
                  
                </div>
            </div>
        )
    }
}


export default ExpandableList;