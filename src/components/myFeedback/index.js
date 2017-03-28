import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import { feedbackDispatchers } from 'api/actions';
import Card from 'components/Card';

class MyFeedback extends React.Component {
  render() {
  	const { myfeedback } = this.props
    const listFeedbacks = myfeedback.getIn(['feedbacks']).toJS();

   let containerFeedback = []
    for (let object in listFeedbacks){
      containerFeedback.push(<Card description={listFeedbacks[object]['description']} surveyDate={listFeedbacks[object]['surveyDate']} />);
    }
     return (
       <div>
         <h1 >
           Feedback
         </h1>
         {containerFeedback}
       </div>
    );
  }
}

export default connect(({ myfeedback }) => ({ myfeedback }), feedbackDispatchers)(MyFeedback);
