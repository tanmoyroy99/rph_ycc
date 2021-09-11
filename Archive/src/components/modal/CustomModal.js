import React, {  Component } from 'react';
import {
    ComposedModal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button
  } from 'carbon-components-react';

class CustomModal extends Component{
    constructor(props){
        super(props);
        this.state={
            isModulOpen:false,
            testClick: ()=>{}
          }
    }
    static getDerivedStateFromProps(props, state){
        return {
            isModulOpen: props.myOpenButton,
            testClick: props.testClick
        }
      }
    render(){
        return(
            <>
            {/* <Button onClick={this.state.testClick} >Launch composed modal</Button> */}

            <ComposedModal open={this.state.isModulOpen} onClose={() => this.setState({ isModulOpen:false })}>
                <ModalHeader label="Account resources" title="Add a custom domain" />
                <ModalBody>
                    <p style={{ marginBottom: '1rem' }}>
                    Custom domains direct requests for your apps in this Cloud Foundry
                    organization to a URL that you own. A custom domain can be a
                    shared domain, a shared subdomain, or a shared domain and host.
                    </p>
                </ModalBody>
                <ModalFooter primaryButtonText="Add" secondaryButtonText="Cancel" />
            </ComposedModal>
            </>
        )
    }
}

export default CustomModal;