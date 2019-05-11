const drag = (event) => {
  event.dataTransfer.setData('span', event.target.id);
};

const allowDrop = (event) => {
  event.preventDefault();
};

const drop = (event) => {
  const id = event.dataTransfer.getData('span');
  event.target.appendChild(document.getElementById(id));
};
