import {g_generate_rules} from "./../rules.mjs";
import {m_js_function_is} from "./../../../../node_modules/mykro/src/m/js/function/is.mjs";
import {m_js_number_is} from "./../../../../node_modules/mykro/src/m/js/number/is.mjs";
import {list_is} from "./../../../../node_modules/mykro/src/list/is.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function g_generate_rules_depth(rules, depth, for_each_generated) {
  await m_js_arguments_assert(list_is, m_js_number_is, m_js_function_is)(arguments);
  if (depth === 0) {
    await for_each_generated(rules);
    return;
  }
  await g_generate_rules(rules, async rules => {
    await g_generate_rules_depth(rules, depth - 1, for_each_generated);
  });
}
