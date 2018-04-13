import React, { Component } from 'react';
import axios from "axios";

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            full_name: "",
            birthdate: 0,
            sign: '',
            toughness: '',
            chuck: '',
            horoscope: ''
        };
        this.getHoroscope = this.getHoroscope.bind(this)
        this.getPlayer = this.getPlayer.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
        this.adButton = this.adButton.bind(this)
        this.chuckCheck = this.chuckCheck.bind(this)
    }

    getHoroscope() {
        axios
            .post('https://aztro.sameerkumar.website/?sign=' + this.state.sign + '&day=today')
            .then(response => this.setState({ horoscope: response.data.description }))
        //.then(horoscopes => this.setState({ horoscopes }), () => console.log(this.state.horoscopes));
    }

    getPlayer() {
        axios
            .get('https://api.chucknorris.io/jokes/random')
            .then(response => this.setState({ chuck: response.data.value },()=> this.chuckCheck))
            if (this.state.toughness === "Chuck Norris") {
                alert("Slow Down! You're no Chuck")
            }
    }
    chuckCheck() {
        if (this.state.toughness === "Chuck Norris") {
            alert("Slow Down! You're no Chuck")
        }
    }

    changeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    adButton() {
        var person = prompt("Please enter your name and give us money.");
        person;
    }



    render() {
        return (
            <div className="container row ml-4">
                <div className="card bg-light mt-4 col-md-4">
                    <div className="mt-4 ml-4 bg-muted">
                        <label><strong>Pick your Sign. Chuck would.</strong></label>
                    </div>
                    <div className="card-block">
                        <div className="p-2">
                            <select name="sign" className="col-lg-12 create-todo-priority" onChange={this.changeHandler}>
                                <option>Select Your Chuckstroligical sign...</option>
                                <option value="Aquarius">Aquarius</option>
                                <option value="Pisces">Pisces</option>
                                <option value="Aries">Aries</option>
                                <option value="Taurus">Taurus</option>
                                <option value="Gemini">Gemini</option>
                                <option value="Cancer">Cancer</option>
                                <option value="Leo">Leo</option>
                                <option value="Virgo">Virgo</option>
                                <option value="Libra">Libra</option>
                                <option value="Scorpio">Scorpio</option>
                                <option value="Sagittarius">Sagittarius</option>
                                <option value="Capricorn">Capricorn</option>
                            </select>
                        </div>
                        <div className="card-footer mt-4 bg-muted">
                            <h3 className="card-header ">Don't wait for your fortune to find you.</h3>
                            <p>Klick below and show it who's boss!</p>
                            <button className='btn btn-danger' onClick={this.getHoroscope}>Taking over Destiny Button</button>
                        </div>
                    </div>

                    <div className="card mt-4">
                        <div className="card-body">
                            <div className="card-header bg-muted">
                                <div className="mt-4 ml-2">
                                    <label><strong>Chuck senses you need some custom Chuck type advice.</strong></label>
                                </div>
                            </div>
                            <div className="card-block">
                                <h5><strong>Describe your feelings in Chuck terms</strong></h5>
                                <div className="p-2">
                                    <select name="toughness" className="col-lg-12 create-todo-priority" onChange={this.changeHandler}>
                                        <option>Select Your Toughness level at Once...</option>
                                        <option value="Chuck Norris">Chuck Norris</option>
                                        <option value="Chuck's Pinky Tough">Chuck's Pinky Tough</option>
                                        <option value="Superman">Superman</option>
                                        <option value="Kitty Tough">Kitty Tough</option>
                                        <option value="Not Tough">Not Tough</option>
                                        <option value="Floyd Mayweather Tough">Floyd Mayweather Tough</option>
                                    </select>
                                    <button className='btn btn-secondary btn-block mt-4' onClick={this.getPlayer}>Roundhouse here for wisdom.</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mt-4">
                        <div className="card-body">
                            <div className="card-header bg-muted">
                                <div className="mt-4 ml-2">
                                    <h3><strong>Ad space available.</strong></h3>
                                </div>
                            </div>
                            <div className="card-block mb-2">
                                <button className="btn btn-primary btn-block" onClick={this.adButton}> Contact us for a price quote!</button>
                                <div className="p-2">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="card">
                        <h1 className="card-header bg-secondary">W W C D</h1>
                        <div className="card-body bg-muted" name="outputDiv">
                            <div className="mt-3">
                                <img src={'https://media.giphy.com/media/UfWNh56hWaleo/giphy.gif'} />
                            </div>
                            <hr></hr>
                            {
                                <div>
                                    <p>{this.state.horoscope}</p>
                                    <hr></hr>
                                    <p>{this.state.chuck}</p>
                                </div>
                            }
                        </div>
                    </div>
                    
                </div>
            </div>



        );
    }
}

export default Player;

//Bonus info button. retrieve a song chuck would want you to listen to. type in your mood
//put in your mood and get a song reccomendsation and a daily horoscope.
// .on a scale of not tough if input equals not so tough, kitty tough to. chuck's pinky tough how was your day. select a mood.
//then give them a random song for the mood, a horoscope, and a random chuck fact because you need to know.
//sorry you feel that way. chuck would want you to listen to this song 5 times and come back tomorrow like someone chuck wouldnt kick.
//maybe link a headshot of him with the reccomendation. 
//and he wanted you to know.  this is the saddest song chuck knows. 
//chuck is always stoked for tough positivity. check this song out you badass mofo
//set an alert with the song with some advice on how many times to listen
//On a scale of 1 to Chuck how do you feel?
//chicken soup for the non chuck soul
//'heres a fortune for your sensitive non chuck' + {this.state.sign} + 'soul'
//chuckstrology says + {this.state.sign}'.'
//One of the most notorious and highly sought-after unreleased albums ever made was the legendary collaboration between Chuck Norris and Michael Jackson, 'Moonwalker: Texas Ranger'.