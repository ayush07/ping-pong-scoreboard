import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { playerOneWin, playerTwoWin } from '../actions/index';
import { connect } from 'react-redux';
import { CSVLink } from 'react-csv';
class Scoreboard extends Component {
  clickMe = () => {
    console.log('HEllo');
  };

  componentDidMount = () => {
    if (this.props.scoreboard.gameCount === 0) {
      this.props.history.push('/');
    }
  };
  handleDelete = () => {
    this.props.history.push('/');
  };
  render() {
    console.log(this.props.history);
    const { gameCount } = this.props.scoreboard;
    const { gameData } = this.props.scoreboard;
    return (
      <>
        <div className='outer'>
          <div style={{ height: '700px' }} className='inner'>
            <h3>Scoreboard</h3>
            <div style={{ marginTop: '20px' }} className='form-group'>
              <div>
                <span className='font'>
                  Player 1 :{' '}
                  {gameData &&
                    gameData[gameCount - 1] &&
                    gameData[gameCount - 1].playerOne}
                  <button
                    style={{ float: 'right' }}
                    className='btn btn-success'
                    onClick={() => this.props.playerOneWin()}
                  >
                    Add win
                  </button>
                </span>
              </div>
              <div>
                <span className='font'>
                  Wins :{' '}
                  {gameData &&
                    gameData[gameCount - 1] &&
                    gameData[gameCount - 1].scoreOne}
                </span>
              </div>
            </div>
            <div style={{ marginTop: '40px' }} className='form-group'>
              <span className='font'>
                Player 2 :{' '}
                {gameData &&
                  gameData[gameCount - 1] &&
                  gameData[gameCount - 1].playerTwo}
                <button
                  style={{ float: 'right' }}
                  className='btn btn-success'
                  onClick={() => this.props.playerTwoWin()}
                >
                  Add win
                </button>
              </span>
              <div>
                <span className='font'>
                  Wins :{' '}
                  {gameData &&
                    gameData[gameCount - 1] &&
                    gameData[gameCount - 1].scoreTwo}
                </span>
              </div>
            </div>
            <div style={{ marginTop: '30px' }}>
              <h4 style={{ textAlign: 'center' }}>
                {' '}
                <span>
                  Current Winner :{' '}
                  {(gameData &&
                    gameData[gameCount - 1] &&
                    gameData[gameCount - 1].scoreOne) >
                  (gameData &&
                    gameData[gameCount - 1] &&
                    gameData[gameCount - 1].scoreTwo)
                    ? gameData[gameCount - 1].playerOne
                    : ''}
                  {(gameData &&
                    gameData[gameCount - 1] &&
                    gameData[gameCount - 1].scoreOne) <
                  (gameData &&
                    gameData[gameCount - 1] &&
                    gameData[gameCount - 1].scoreTwo)
                    ? gameData[gameCount - 1].playerTwo
                    : ''}
                </span>
              </h4>
            </div>
            <div>
              <h4 style={{ textAlign: 'center' }}>
                <span>
                  Win Difference :{' '}
                  {Math.abs(
                    (gameData &&
                      gameData[gameCount - 1] &&
                      gameData[gameCount - 1].scoreOne) -
                      (gameData &&
                        gameData[gameCount - 1] &&
                        gameData[gameCount - 1].scoreTwo),
                  )}
                </span>
              </h4>
            </div>
            <div style={{ marginTop: '40px' }}>
              <CSVLink data={this.props.scoreboard.gameData}>
                <h6 style={{ textAlign: 'center' }}>Download Scoresheet</h6>
              </CSVLink>
            </div>
            <Link to='/'>
              <button
                type='submit'
                style={{ width: '100%', marginTop: '30px' }}
                className='btn btn-dark btn-lg btn-block'
              >
                New Game
              </button>
            </Link>
            <button
              onClick={this.handleDelete}
              type='submit'
              style={{ width: '100%', marginTop: '30px' }}
              className='btn btn-dark btn-lg btn-block'
            >
              Delete Scoreboard
            </button>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    scoreboard: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    playerOneWin: () => dispatch(playerOneWin()),
    playerTwoWin: () => dispatch(playerTwoWin()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard);
