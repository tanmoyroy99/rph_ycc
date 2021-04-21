import React, { useState, Component } from 'react';
import { 
    ComposedModal, 
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Form,
    FormGroup,
    TextInput,
    Select,
    SelectItem,
    Toggle,
    FileUploader
}  from 'carbon-components-react';


class Student extends Component{
    constructor(props){
        super(props);

    }
    oncloseData(){
        console.log("Close Modul")
    }
    render(){
        console.log('--->>>',this.props)
        return(
            <div>
                
                {/* <input onChange={this.props.onTitleChange}  /> */}
                {/* <Button onClick={this.props.testClick}> Test Button </Button> */}

                <ComposedModal open={this.props.open} onClose={this.props.testClick}>
                <ModalHeader label="Account resources" title="Add a custom domain" />
                    <ModalBody>
                    <p style={{ marginBottom: '1rem' }}>
                        Custom domains direct requests for your apps in this Cloud Foundry
                        organization to a URL that you own. A custom domain can be a shared
                        domain, a shared subdomain, or a shared domain and host.
                    </p>
                    <div>
                        <Form>
                            <FormGroup>
                                <TextInput
                                labelText= "user Name"
                                placeholder= "User Name" />
                            </FormGroup>

                            <FormGroup className='some-class' >
                                <Select id="select-1" defaultValue="placeholder-item">
                                    <SelectItem
                                        disabled
                                        hidden
                                        value="placeholder-item"
                                        text="Choose an option"
                                    />
                                    <SelectItem value="option-1" text="Option 1" />
                                    <SelectItem value="option-2" text="Option 2" />
                                    <SelectItem value="option-3" text="Option 3" />
                                </Select>
                            </FormGroup>

                            <FormGroup className='some-class'  >
                                <Toggle id="toggle-1" labelText="Status" />
                            </FormGroup>

                            <FormGroup className='some-class' legendText="File Uploader" >
                                <FileUploader
                                    buttonLabel="Add files"
                                    id="file-1"
                                    labelDescription="Choose Files..."
                                />
                            </FormGroup>
                        </Form>
                    </div>
                    </ModalBody>
                <ModalFooter secondaryButtonText="Cancel">
                    <Button >Create Best Practice</Button>
                </ModalFooter>
                </ComposedModal>
            </div>
        )
    }
}

export default Student;