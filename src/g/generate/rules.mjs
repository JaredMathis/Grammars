import {m_js_number_is} from "./../../../node_modules/mykro/src/m/js/number/is.mjs";
import {m_js_arguments_assert} from "./../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function g_generate_rules(rule_count) {
  await m_js_arguments_assert(m_js_number_is)(arguments);
}
