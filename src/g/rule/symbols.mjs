import {list_join} from "./../../../node_modules/mykro/src/list/join.mjs";
import {m_js_defined_is} from "./../../../node_modules/mykro/src/m/js/defined/is.mjs";
import {m_js_arguments_assert} from "./../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function g_rule_symbols(rule) {
  await m_js_arguments_assert(m_js_defined_is)(arguments);
  return await list_join([rule.left, rule.right]);
}
