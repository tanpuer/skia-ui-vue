export function convertViewProps(view, props) {
  if (props.onClick) {
	console.log("1111111", "onClick", props.onClick)
	view.setOnClickListener((_view) => {
	  props.onClick();
	});
  }
}

export function convertSVGProps(svg, props) {
  if (props.src) {
	svg.src = props.src;
  }
  convertViewProps(svg, props);
}

export function convertVideoProps(video, props) {
  if (props.url) {
	video.src = props.url;
  }
  convertViewProps(video, props);
}

export function convertButtonProps(button, props) {
  if (props.text) {
	button.text = props.text;
  }
  convertViewProps(button, props);
}
