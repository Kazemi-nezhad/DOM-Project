window.onload = function () {
  const container = document.getElementById("container");
  let points = {};
  /**************/
  function randomBg() {
    return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)})`;
  }
  let mouseUp = (e) => {
    if (!e.ctrlKey) {
      points["endX"] = e.clientX;
      points["endY"] = e.clientY;
      const someDiv = document.createElement("div");
      someDiv.className = "some-div";
      someDiv.style.left =
        points.startX < points.endX ? `${points.startX}px` : `${points.endX}px`;
      someDiv.style.top =
        points.startY < points.endY ? `${points.startY}px` : `${points.endY}px`;
      someDiv.style.width = `${Math.abs(points.endX - points.startX)}px`;
      someDiv.style.height = `${Math.abs(points.endY - points.startY)}px`;
      someDiv.style.backgroundColor = randomBg();
      container.appendChild(someDiv);
    } else {
      container.onmousemove = null;
    }
  };
  let mouseMove = (e) => {
    if (e.target.className == "some-div") {
      e.target.style.left = `${
        e.clientX - Math.floor(e.target.offsetWidth / 2)
      }px`;
      e.target.style.top = `${
        e.clientY - Math.floor(e.target.offsetHeight / 2)
      }px`;
    }
  };
  /**************/
  container.onmousedown = (e) => {
    points["startX"] = e.clientX;
    points["startY"] = e.clientY;
    container.onmouseup = mouseUp;
    container.onmousemove = e.ctrlKey ? mouseMove : null;
  };
};
