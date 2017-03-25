import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import { feedbackDispatchers } from 'api/actions';



class MyFeedback extends React.Component {
  render() {
  	const { myfeedback } = this.props
	const feedbackContainer = myfeedback.getIn(['feedbacks']).map((object) => (

		<div>
			{object.get('description')}
		</div> 
		//TODO
  	))

     return (
      <div>
      	<h1 >
  			Feedback
      	</h1>

      		
		  <div className="mdc-card">
		    <section className="mdc-card__primary">
			      <h1 className="mdc-card__title mdc-card__title--large">Preciso que vocês me avaliem.</h1>
			      <h2 className="mdc-card__subtitle" >25/03/2017</h2>
		    </section>
		  </div>
		  <div className="mdc-card">
		    <section className="mdc-card__primary">
			      <h1 className="mdc-card__title mdc-card__title--large" >Preciso que vocês me avaliem.</h1>
			      <h2 className="mdc-card__subtitle" >25/03/2017</h2>
		    </section>
		  </div>
		  <div className="mdc-card">
		    <section className="mdc-card__primary">
			      <h1 className="mdc-card__title mdc-card__title--large" >Preciso que vocês me avaliem.</h1>
			      <h2 className="mdc-card__subtitle">25/03/2017</h2>
		    </section>
		  </div>
      </div>
    );
  }
}

export default connect(({ myfeedback }) => ({ myfeedback }), feedbackDispatchers)(MyFeedback);
