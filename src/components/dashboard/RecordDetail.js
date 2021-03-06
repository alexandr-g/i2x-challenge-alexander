import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';
import moment from 'moment';
require ('moment-duration-format');

class RecordDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { created, duration, final_script, rating, url } = this.props.record;

    return (
      <article className="center mw5 mw6-ns hidden ba mv4">
        <h1 className="f4 bg-near-black white mv0 pv2 ph3">
          <StarRatingComponent
            name="rating"
            value={rating}
            editing={false}
            emptyStarColor={'#C7C7C7'}
          />
        </h1>
        <div className="pa3 bt">
          <p className="f6 f5-ns lh-copy measure mv0">
            {final_script}
          </p>
        </div>
        <div className="ph1"><b>Duration:</b> {moment.duration(duration, 'seconds').format('h [hrs], m [minutes]')}</div>
        <div className="ph1 pv3">
          <audio controls="controls" >
            <source src={url} />
          </audio>
        </div>
        <div className="ph1 pv1"><b>Created:</b> {moment(created).format('D.MM.YYYY')}</div>
      </article>
    );
  }
}

RecordDetail.propTypes = {
  record: PropTypes.object.isRequired,
  created: PropTypes.string,
  duration: PropTypes.number,
  final_script: PropTypes.string,
  rating: PropTypes.number,
  url: PropTypes.string
};

export default RecordDetail;
