import React from 'react';

const RecordDetail = ({ record }) => {
  const { created, duration, final_script, rating, url } = record;

  return (
      <article className="center mw5 mw6-ns hidden ba mv4">
        <h1 className="f4 bg-near-black white mv0 pv2 ph3">{rating}</h1>
        <div className="pa3 bt">
          <p className="f6 f5-ns lh-copy measure mv0">
            {final_script}
          </p>
        </div>
        <div>Duration: {duration}</div>
        <div>URL: {url}</div>
        <div>CREATED: {created}</div>
      </article>
  );
};

export default RecordDetail;