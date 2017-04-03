import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import { feedbackDispatchers } from 'api/actions';
import Card from 'components/Card';

class Invites extends React.Component {
  render() {
  	const { myfeedback } = this.props
    const listInvites = myfeedback.getIn(['invites']).toJS();
  	const containerInvites = []
  	containerInvites.push(<Card description={myfeedback.getIn(['test'])} />);

    // for (let inviteID in listInvites){
    // 	for (let feedbackID in listInvites[inviteID]['feedback']){
    //     	containerInvites.push(<Card description={listInvites[inviteID]['feedback'][feedbackID]['description']} surveyDate={listInvites[inviteID]['feedback'][feedbackID]['surveyDate']} />);
   	// 	}
   	// }

    return (
      <div>
      	<h1>
   			Invites
      	</h1>
		    {containerInvites}
      </div>
    );
  }
}

export default connect(({ myfeedback }) => ({ myfeedback }), feedbackDispatchers)(Invites);