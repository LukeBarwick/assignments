import { connect } from 'react-redux';

import App from '../App';

const mapStateToProps = state => ({
    message: state.mesaage,


});

const Game = connect(
    mapStateToProps,

)(App);

export default Game;
