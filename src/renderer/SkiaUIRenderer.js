import {createRenderer} from '@vue/runtime-core'
import {TAG} from "@/renderer/const.js";
import {createView} from "@/renderer/ViewFactory.js";
import {comparePrevStylesAndNextStyles} from "@/renderer/StyleUtils.js";

const appStack = [];
const pageStack = [];

const render = createRenderer({
  patchProp(
	  el,
	  key,
	  prevValue,
	  nextValue,
	  isSVG = false,
	  prevChildren,
	  parentComponent,
	  parentSuspense,
	  unmountChildren
  ) {
	debugger;
	console.log(TAG, 'patchProp', key, isSVG);
	if (key === "style" && prevValue && nextValue) {
	  comparePrevStylesAndNextStyles(el, prevValue, nextValue);
	}
  },
  insert(child, parent, anchor) {
	console.log(TAG, 'insert', child.name, parent != null ? parent.name : null);
	if (child.name === "Page") {
	  child.push(new SkiaUI.EnterExitInfo(SkiaUI.innerWidth, 0));
	  return;
	}
	parent.addView(child);
  },
  remove(child) {
	console.log(TAG, "remove", child.name);
	const parent = child.parentNode
	if (parent) {
	  parent.removeChild(child)
	}
  },
  createElement(type, namespace, isCustomizedBuiltIn, vnodeProps) {
	console.log(TAG, "createElement", type, isCustomizedBuiltIn, JSON.stringify(vnodeProps));
	const element = createView(type, vnodeProps);
	if (type === "page") {
	  pageStack.push(element);
	}
	return element;
  },
  createText(text) {
	console.log(TAG, "createText", text);
  },
  createComment(text) {
	console.log(TAG, "createComment", text);
  },
  setText(node, text) {
	console.log(TAG, 'setText', node.name, text);
  },
  setElementText(el, text) {
	console.log(TAG, 'setElementText', text);
  },
  parentNode(node) {
	return node.parentNode;
  },
  nextSibling(node) {
	return node.nextSibling;
  },
  querySelector(selector) {
	return null;
  },
  setScopeId(el, id) {
	el.setAttribute(id, '');
  },
  cloneNode(el) {
	return el.cloneNode(true);
  },
  insertStaticContent() {
	console.log('insertStaticContent')
	return [];
  }
});

export function createApp(...args) {
  console.log(TAG, "createApp");
  const app = render.createApp(...args);
  appStack.push(app);
  return app.mount({});
}

export function pop() {
  console.log(TAG, "pop");
  const app = appStack.pop();
  if (app) {
	app.unmount();
  }
  const page = pageStack.pop();
  if (page) {
	page.pop(new SkiaUI.EnterExitInfo(0, SkiaUI.innerWidth));
  }
}

SkiaUI.setBackPressedCallback(() => {
  console.log(TAG, "onBackPressed");
  const app = appStack.pop();
  if (app) {
	app.unmount();
  }
  const page = pageStack.pop();
});
