import React, {  Component } from 'react';
import {connect} from 'react-redux';
import { Grid, Row } from 'carbon-components-react';
import Pagination from 'carbon-components-react/lib/components/Pagination';
import ExpandableList from './../components/listTable/ExpandableList'
import Banner from './../components/banner/banner';
import CustomModal from './../components/modal/CustomModal'


class InventoryList extends Component{
    constructor(props){
        super(props);
        this.state={
            bannerData:{
                "title":"URL inventory data",
                "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit Morbi aliquam, arcu tincidunt porttitor"
            },
            inventoryHeader: [],
            rowsData:[],
            currentPage: 1,
            postsPerPage: 10,
            totalItems: 0,
            newRowsData:[]

        }
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps")
        return {
            rowsData        : props.inventoryData,
            inventoryHeader : props.inventoryHeader,
            totalItems      : props.inventoryData.length
        }
    }
    componentDidMount(){
        console.log("componentDidMount");
        this.findData(this.state.rowsData,this.state.currentPage,this.state.postsPerPage);
    }


    onChangePagination(event){
        console.log(event);
        let page        = event.page;
        let pageSize    = event.pageSize;
        this.findData(this.state.rowsData,page,pageSize);
    }
    
    findData(posts, currentPage, postsPerPage){
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
        this.setState({newRowsData: currentPosts});
    }

    mytestFunction(e){
        console.log('mytestFunction',e)
    }
    myFilterCickProps(e){
        console.log('myFilterCickProps',e)
    }

    render(){
        return(
            <div className="InventoryListView">
                <Banner banner={this.state.bannerData} />
                <Grid fullWidth>
                    <Row>
                        <CustomModal myOpenButton={true} testClick={(e)=>{this.mytestFunction(e)}}></CustomModal>
                        <ExpandableList headerList={this.state.inventoryHeader} rowsData={this.state.newRowsData} myFilterCickProps={(e)=>{this.myFilterCickProps(e)}}  />
                        <Pagination  
                            backwardText="Previous page"
                            forwardText="Next page"
                            itemsPerPageText="Items per page:"
                            page={this.state.currentPage}
                            pageNumberText="Page Number"
                            pageSize={this.state.postsPerPage}
                            pageSizes={[
                                10,
                                20,
                                30,
                                40,
                                50
                            ]}
                            totalItems={this.state.totalItems}
                            onChange={(data)=>{this.onChangePagination(data)}}
                        />
                    </Row>
                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('state>>>', state)
    return {
        inventoryHeader : state.inventoryHeader,
        inventoryData : state.inventoryData
    }
  }

export default connect(mapStateToProps, null)(InventoryList);
