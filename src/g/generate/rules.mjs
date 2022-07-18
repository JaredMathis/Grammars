import {list_is} from "./../../../node_modules/mykro/src/list/is.mjs";
import {m_js_number_is} from "./../../../node_modules/mykro/src/m/js/number/is.mjs";
import {m_js_arguments_assert} from "./../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function g_generate_rules(grammars, rule_count) {
  await m_js_arguments_assert(list_is, m_js_number_is)(arguments);
}
