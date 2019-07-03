import React, { Component } from 'react';
import { connect } from 'react-redux';
import startFirebase from '../../services/firebase';
import firebase from 'firebase';

import './styles.scss';

const styles ={
  width: 300,
  heigth: 200,
  objectFit: 'cover'
}

class Home extends Component {

  state = {
    image: null, 
    imageUrl: null,
    porcentagem: null
  }
  
  static routerOptions = {
    path: '/',
    exact: true
  }

  handleChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  }

  onSend = () => {
    const { image } = this.state
    firebase.storage().ref(`images/${image.name}`).put(image).on('state_changed',
      snapshot => {
        const porcentagem = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        this.setState({
          porcentagem
        })
      },
      error => {

      },
      async () => {
        const imageUrl = await firebase.storage().ref('images').child(image.name).getDownloadURL()
        this.setState({
          imageUrl,
          porcentagem: null
        })
      }   
    )
  }

  componentDidMount () {
    startFirebase()
  }
  
  render() {
    const { imageUrl, porcentagem } = this.state
    return (
      <div id="Home">
        {
          imageUrl &&
          <img src={imageUrl} style={styles}/>
        }
        <br/>
        {
          (porcentagem === 0 || porcentagem) &&
          <p>{porcentagem}%</p>
        }
        <br/>
        <input type='file' placeholder='File' onChange={this.handleChange}/>
        <br/>
        <br/>
        <button onClick={this.onSend}>Send</button>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({});

//const mapDispatchToProps = {...Actions};

export default connect(mapStateToProps,null)(Home);
