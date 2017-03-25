import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { authDispatchers } from 'api/actions';
import Invites from 'components/invites'


class Toolbar extends React.Component {
  render() {
    return (
      <header className="mdc-toolbar mdc-toolbar--fixed">
        <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
          <a className="material-icons">menu</a>
          <span className="mdc-toolbar__title">Feedback</span>
        </section>

        <section className="mdc-toolbar__section">
          <Link to="/invites">Invites</Link>

        </section>

        <section className="mdc-toolbar__section mdc-toolbar__section--align-end" role="toolbar">
          <button ><i className="material-icons">exit_to_app</i></button>
        </section>
      </header>
    );
  }
}

export default connect(null, authDispatchers)(Toolbar);
