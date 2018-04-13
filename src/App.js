import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import './horoscopes.jsx';
import Player from './Player.jsx';
//import Outputcomponent from './Outputcomponent.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
    };
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Chuck Norriscopes. A place to kick Horoscope Ass!</h1>
          <hr></hr>
          {/* <div className="mt-4 ml-2">
            <label><strong></strong></label>
          </div> */}
        </header>
        {/* <div className="container"> */}
    
            <Player
              //addTodoHandler={this.getHoroscope}
            />
            {/* <Outputcomponent
            /> */}
          
        {/* </div> */}
      </div>
    );
  }
}

export default App;

//https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-s3.si.com%2Fs3fs-public%2Fimages%2FBobby-Clarke-toothless-smile-001344503.jpg&w=700&q=85

//https://pbs.twimg.com/media/CgL_mWGW8AAk15_.jpg

//http://img.yonhapnews.co.kr/etc/inner/EN/2018/02/19/AEN20180219009800315_01_i.jpg

//http://cdn.smosh.com/sites/default/files/legacy.images/smosh-pit/4/teeth-18.jpg

//https://imgix.ranker.com/user_node_img/64/1270836/original/jaromir-jagr-hockey-players-photo-u5?w=650&q=50&fm=jpg&fit=crop&crop=faces

//http://dentureprofessionals.org.uk/cms/wp-content/uploads/2013/07/Bobby-Hull.jpg

//http://www.yongeeglintondental.com/wp-content/uploads/dustin-brown.jpg