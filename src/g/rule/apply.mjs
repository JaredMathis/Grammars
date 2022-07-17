import {g_rule_is} from "./is.mjs";
import {list_is} from "./../../../node_modules/mykro/src/list/is.mjs";
import {m_js_arguments_assert} from "./../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function g_rule_apply(input, rule) {
  await m_js_arguments_assert(list_is, g_rule_is)(arguments);
}
