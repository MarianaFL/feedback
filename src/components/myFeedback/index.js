import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import { feedbackDispatchers } from 'api/actions';
import Card from 'components/Card';

class MyFeedback extends React.Component {
  render() {
  	const { myfeedback } = this.props
    const listFeedbacks = myfeedback.getIn(['feedbacks']).toJS();

/*
    //Não funcionou
    const containerFeedback = listFeedbacks.map((object) => (
      <Card description={object.get('description')} surveyDate={object.get('surveyDate')} />
  	))
*/
    let containerFeedback = []
    for (let object in listFeedbacks){
      containerFeedback.push(<Card description={listFeedbacks[object]['description']} surveyDate={listFeedbacks[object]['surveyDate']} />);
      /*
      //Funciona
      containerFeedback.push(<div className="mdc-card">
        <section className="mdc-card__primary">
          <h1 className="mdc-card__title mdc-card__title--large">{listFeedbacks[object]['description']}</h1>
          <h2 className="mdc-card__subtitle" >{listFeedbacks[object]['surveyDate']}</h2>
        </section>
      </div>)
      */
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
