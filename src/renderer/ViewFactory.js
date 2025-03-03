import {convertStyles} from "@/renderer/StyleUtils.js";
import {convertButtonProps, convertSVGProps, convertVideoProps, convertViewProps} from "@/renderer/PropsUtils.js";

const {
  Page, SVGView, VideoView, ScrollView, View, Button
} = SkiaUI;

export function createView(type, vnodeProps) {
  if (type === "view") {
	const view = new View();
	convertStyles(view, vnodeProps.style);
	convertViewProps(view, vnodeProps);
	return view;
  } else if (type === "button") {
	const button = new Button();
	convertStyles(button, vnodeProps.style);
	convertButtonProps(button, vnodeProps);
	return button;
  } else if (type === "page") {
	const page = new Page();
	convertStyles(page, vnodeProps.style);
	return page;
  } else if (type === "scroll") {
	const scrollView = new ScrollView();
	convertStyles(scrollView, vnodeProps.style);
	return scrollView;
  } else if (type === "svg") {
	const svg = new SVGView();
	convertStyles(svg, vnodeProps.style);
	convertSVGProps(svg, vnodeProps);
	return svg;
  } else if (type === "video") {
	const videoView = new VideoView();
	convertStyles(videoView, vnodeProps.style);
	convertVideoProps(videoView, vnodeProps);
	return videoView
  }
  return null;
}
