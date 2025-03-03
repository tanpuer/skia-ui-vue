// css-parser.js
import postcss from 'postcss';
import selectorParser from 'postcss-selector-parser';

export function parseCSS(cssText) {
  const styleMap = {};

  // 1. 解析 CSS
  const root = postcss.parse(cssText);

  // 2. 遍历所有规则
  root.walkRules((rule) => {
    // 3. 处理选择器
    selectorParser((selectors) => {
      selectors.walkClasses((classNode) => {
        const className = `.${classNode.value}`;
        const styles = {};

        // 4. 提取样式声明
        rule.walkDecls((decl) => {
          styles[decl.prop] = decl.value;
        });

        // 5. 存储到 styleMap
        styleMap[className] = styles;
      });
    }).processSync(rule.selector);
  });

  return styleMap;
}
