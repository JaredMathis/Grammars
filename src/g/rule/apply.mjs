import {m_js_number_is} from "./../../../node_modules/mykro/src/m/js/number/is.mjs";
import {m_js_string_is} from "./../../../node_modules/mykro/src/m/js/string/is.mjs";
import {m_js_arguments_assert} from "./../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function g_rule_apply(input, rule, index) {
  await m_js_arguments_assert(m_js_string_is, g_rule_is, m_js_number_is)(arguments);
}
