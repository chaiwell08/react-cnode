import React from "react";
import ReactDOM from "react-dom";

const Loading = () => {
  return (
    <div className="spinner">
      <div className="rect1" />
      <div className="rect2" />
      <div className="rect3" />
      <div className="rect4" />
      <div className="rect5" />
    </div>
  );
};

Loading.globalLoading = () => {
  if (Loading.isLoading()) {
    return;
  }

  const divEle = document.createElement("div");
  divEle.style.position = "fixed";
  divEle.style.width = "100%";
  divEle.style.height = "100%";
  divEle.style.top = "0px";
  divEle.style.left = "0px";
  divEle.style.backgroundColor = "rgba(0,0,0,.5)";

  document.body.appendChild(divEle);

  ReactDOM.render(<Loading />, divEle);

  Loading.divEle = divEle;
};

Loading.stopGlobalLoading = () => {
  if (!Loading.isLoading()) {
    return;
  }

  const { divEle } = Loading;
  const unmountResult = ReactDOM.unmountComponentAtNode(divEle);
  if (unmountResult && divEle.parentNode) {
    divEle.parentNode.removeChild(divEle);
  }
  Loading.divEle = null;
};

Loading.isLoading = () => {
  return !!Loading.divEle;
};

window.Loading = Loading;

export default Loading;
