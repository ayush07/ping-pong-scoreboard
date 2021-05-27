import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { saveGame, playerOneWin, playerTwoWin } from '../actions/index';
import { connect } from 'react-redux';
import { CSVLink } from 'react-csv';
class Scoreboard extends Component {
  clickMe = () => {
    console.log('HEllo');
  };
  downloadCsv = () => {
    console.log('csv');
    <CSVLink data={this.props.scoreboard.gameData}>Download me</CSVLink>;
  };
  componentDidMount = () => {
    if (this.props.scoreboard.gameCount === 0) {
      this.props.history.push('/');
    }
  };
  render() {
    console.log(this.props.history);
    const { gameCount } = this.props.scoreboard;
    const { gameData } = this.props.scoreboard;
    console.log(this.props.scoreboard);
    return (
      <>
        <div className='outer'>
          <div style={{ height: '700px' }} className='inner'>
            <h3>Scoreboard</h3>
            <div style={{ marginTop: '20px' }} className='form-group'>
              <div>
                <span>
                  Player 1
                  <button onClick={() => this.props.playerOneWin()}>
                    Add win
                  </button>
                </span>
              </div>
              <div>Wins</div>
            </div>
            <div style={{ marginTop: '40px' }} className='form-group'>
              <span>
                Player 2 win
                <button onClick={() => this.props.playerTwoWin()}>
                  Add win
                </button>
              </span>
              <div>Wins</div>
            </div>
            <div>
              <span>
                Current Winner :{' '}
                {(gameData &&
                  gameData[gameCount - 1] &&
                  gameData[gameCount - 1].scoreOne) >
                (gameData &&
                  gameData[gameCount - 1] &&
                  gameData[gameCount - 1].scoreTwo)
                  ? gameData[gameCount - 1].playerOne
                  : gameData &&
                    gameData[gameCount - 1] &&
                    gameData[gameCount - 1].playerTwo}
              </span>
            </div>
            <div>
              <span>
                Win Difference :{' '}
                {(gameData &&
                  gameData[gameCount - 1] &&
                  gameData[gameCount - 1].scoreOne) -
                  (gameData &&
                    gameData[gameCount - 1] &&
                    gameData[gameCount - 1].scoreTwo)}
              </span>
            </div>
            <CSVLink data={this.props.scoreboard.gameData}>
              Download CSV
            </CSVLink>

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
              onClick={this.clickMe}
              type='submit'
              style={{ width: '100%', marginTop: '30px' }}
              className='btn btn-dark btn-lg btn-block'
            >
              Delete All
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
    saveGame: () => dispatch(saveGame()),
    playerOneWin: () => dispatch(playerOneWin()),
    playerTwoWin: () => dispatch(playerTwoWin()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard);
