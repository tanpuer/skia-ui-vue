import {TAG} from "./const.js";

export function convertStyles(view, styles) {
  console.log(JSON.stringify(styles));
  Object.keys(styles).forEach(key => {
	setStyle(view, key, styles[key]);
  })
  view.setAttribute = function (key, value) {
	//TODO!
  }

}

export function comparePrevStylesAndNextStyles(view, prevStyles, nextStyles) {
  console.log(JSON.stringify(prevStyles), JSON.stringify(nextStyles));
  Object.keys(nextStyles).forEach(key => {
	if (nextStyles[key] !== prevStyles[key]) {
	  console.log(TAG, "patchProp-style", key, nextStyles[key]);
	  setStyle(view, key, nextStyles[key]);
	}
  });
}

function setStyle(view, key, value) {
  if (key === "width") {
	view.width = Number(value.split("px")[0]);
  } else if (key === "height") {
	view.height = Number(value.split("px")[0]);
  } else if (key === "justify-content") {
	view.justifyContent = value;
  } else if (key === "align-items") {
	view.alignItems = value;
  } else if (key === "background-color") {
	view.backgroundColor = value;
  } else if (key === "margin-left") {
	view.marginLeft = Number(value.split("px")[0]);
  } else if (key === "margin-right") {
	view.marginRight = Number(value.split("px")[0]);
  } else if (key === "margin-top") {
	view.marginTop = Number(value.split("px")[0]);
  } else if (key === "margin-bottom") {
	view.marginBottom = Number(value.split("px")[0]);
  } else if (key === "font-size") {
	view.textSize = Number(value.split("px")[0]);
  }
}
