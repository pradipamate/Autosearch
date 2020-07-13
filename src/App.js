import React, { Component } from "react";
import {initialData,FetchingRequest} from "./practice/actions/PuzzleAction";
import {Col,Row,Container,Table} from "react-bootstrap";
import { connect } from "react-redux";


class App extends Component {
    constructor(props) {
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(initialData());
    }
    onChangeHandler(event) {
        console.log("evenet",event.target.value)
        if(event.target.value.length!==0){
            this.props.dispatch(FetchingRequest(event.target.value));
        }
        else{
            this.props.dispatch(initialData());
        }
    }
    
    render() {  
     
          var Data = this.props.Datafetch;
          var data=Data.DataFetch;
          console.log("data",data);
          if(data !==undefined){
           var List=data.map((item)=>
                <tr>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.gender}</td>
                </tr>
            )
          }
        return (
            <div>
              <Container fluid={true}>
                    <Row>
                        <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                </tr>
                                <tr>
                                <th><input type="text" onChange={this.onChangeHandler}/></th>
                                <th><input type="text" /></th>
                                <th><input type="text" /></th>
                                </tr>
                            </thead>
                            <tbody>
                                {List}
                            </tbody>
                          </Table>
                         </div>
                      </Row>
               </Container>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        Datafetch: state.DataFetch
    };
};
export default connect(mapStateToProps)(App);
