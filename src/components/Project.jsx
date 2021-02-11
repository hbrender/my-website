import React, {useState} from 'react';

function Project(props) {
  const [currImgIndex, setCurrImgIndex] = useState(0);

  function backwardClick(e) {
    setCurrImgIndex(getPreviousIndex());
  }

  function forwardClick(e) {
    setCurrImgIndex(getFutureIndex());
  }

  function getPreviousIndex() {
    if (currImgIndex > 0) {
      return currImgIndex - 1;
    } else {
      return props.images.length - 1;
    }
  }

  function getFutureIndex() {
    if (currImgIndex < props.images.length - 1) {
      return currImgIndex + 1;
    } else {
      return 0;
    }
  }

  return (
    <div className="project">
      <div>
        <h3>{props.name}</h3>
        <a target="_blank" rel="noreferrer" className="code-link" href={props.srcCode}><i className="fab fa-2x fa-github"></i></a>
        <p>{props.description}</p>
        <div className="img-carousel">
        <div onClick={backwardClick} className="carousel-btn"><i onClick={backwardClick} className="fas fa-2x fa-angle-left"></i></div>
          <img className="img-preview img-left" src={"images/" + props.images[getPreviousIndex()]} alt="1"></img>
          <img className="img-main" src={"images/" + props.images[currImgIndex]} alt="2"></img>
          <img className="img-preview img-right" src={"images/" + props.images[getFutureIndex()]} alt="3"></img>
          <div onClick={forwardClick} className="carousel-btn"><i className="fas fa-2x fa-angle-right"></i></div>
        </div>
      </div>
    </div>
  );
}

export default Project;
