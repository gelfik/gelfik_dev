import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

@inject('jsonServerStore')
@inject('userStore')
@observer
export default class Home extends Component {
  props: any;
  state: any;
  myRef: any;

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      inputName: ''
    }
    // this.myRef = React.createRef();
  }

  changeUserName = () => {
    // this.props.jsonServerStore.changeUserName({name: this.state.inputName}).then(
    //   this.props.jsonServerStore.getProfile().then(response => {
    //     this.props.userStore.setUser(response.data)
    //     this.setState({
    //       user: response.data
    //     })
    //   })
    //     .catch((err)=>{
    //       console.log(err)
    //     })
    // )
    //   .catch((error)=>{
    //     console.log(error)
    //   })
  }

  changeInputName = (event) => {
    this.setState({
      inputName: event.target.value
    })
  }

  // changeInputNameRef = () => {
  //   this.setState({
  //     inputName: this.myRef.current.value
  //   })
  // }

  componentDidMount() {
    // console.log(this.props.jsonServerStore.getProfile())
    // console.log(this.props.jsonServerStore.getPostById(1))
    // console.log(this.props.jsonServerStore.getPostById(2))
    // console.log(this.props.jsonServerStore.getPostById(3))
    // this.props.jsonServerStore.getProfile().then(response => {
    //   console.log(response)
    //   this.props.userStore.setUser(response.data)
    //   this.setState({
    //     user: response.data
    //   })
    // })
  }

  render() {
    return (
      <div>
        {/*{this.state.user?.name}*/}
        <button onClick={this.changeUserName}>Change Name</button>
        <input type="text" onChange={this.changeInputName} value={this.state.inputName}/>
        {/*<input type="text" onChange={this.changeInputNameRef} ref={this.myRef} value={this.state.inputName}/>*/}
      </div>
    )
  }
}
