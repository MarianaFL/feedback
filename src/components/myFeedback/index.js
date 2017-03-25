import React, { PropTypes } from 'react'

class MyFeedback extends React.Component {
  render() {

  	const styles = {
  		color:'black',
  		textAlign: 'center'
  	};

    return (
      <div>
      	<h1 style={styles}>
  			Feedback
      	</h1>
		<body className="mdc-theme--dark">
		  <div className="mdc-card">
		    <section className="mdc-card__primary">
			      <h1 className="mdc-card__title mdc-card__title--large" style={styles}>Preciso que vocês me avaliem.</h1>
			      <h2 className="mdc-card__subtitle" style={styles}>25/03/2017</h2>
		    </section>
		  </div>
		</body>
		<body className="mdc-theme--dark">
		  <div className="mdc-card">
		    <section className="mdc-card__primary">
			      <h1 className="mdc-card__title mdc-card__title--large" style={styles}>Preciso que vocês me avaliem.</h1>
			      <h2 className="mdc-card__subtitle" style={styles}>25/03/2017</h2>
		    </section>
		  </div>
		</body>
		<body className="mdc-theme--dark">
		  <div className="mdc-card">
		    <section className="mdc-card__primary">
			      <h1 className="mdc-card__title mdc-card__title--large" style={styles}>Preciso que	 vocês me avaliem.</h1>
			      <h2 className="mdc-card__subtitle" style={styles}>25/03/2017</h2>
		    </section>
		  </div>
		</body>
      </div>
    );
  }
}

export default MyFeedback;
