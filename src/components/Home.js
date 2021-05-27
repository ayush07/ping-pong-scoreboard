import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { newGame } from '../actions/index';
import { connect } from 'react-redux';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: '',
      playerTwo: '',
    };
  }

  handleChange = (name) => (e) => {
    console.log('FIRE');
    this.setState({ [name]: e.target.value });
  };
  handleNewGame = () => {
    console.log('NEW GAME');
    const { playerOne, playerTwo } = this.state;
    const payload = {
      playerOne: playerOne,
      playerTwo: playerTwo,
      scoreOne: 0,
      scoreTwo: 0,
    };
    this.props.newGame(payload);
  };
  render() {
    console.log(this.state);
    return (
      <div className='outer'>
        <div className='inner'>
          <form>
            <h3>Player Details</h3>

            <div style={{ marginTop: '20px' }} className='form-group'>
              <input
                onChange={this.handleChange('playerOne')}
                value={this.state.playerOne}
                type='text'
                className='form-control'
                placeholder='Player 1 name'
              />
            </div>

            <div style={{ marginTop: '40px' }} className='form-group'>
              <input
                onChange={this.handleChange('playerTwo')}
                value={this.state.playerTwo}
                type='text'
                className='form-control'
                placeholder='Player 2 name'
              />
            </div>
            {this.state.playerOne && this.state.playerTwo ? (
              <Link onClick={this.handleNewGame} to='/scoreboard'>
                <button
                  type='button'
                  style={{ width: '100%', marginTop: '30px' }}
                  className='btn btn-dark btn-lg btn-block'
                >
                  Continue
                </button>
              </Link>
            ) : (
              <button
                type='button'
                href='scoreboard'
                style={{ width: '100%', marginTop: '30px' }}
                className='btn btn-dark btn-lg btn-block'
                disabled
              >
                Continue
              </button>
            )}
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    newGame: (payload) => dispatch(newGame(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
