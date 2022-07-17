import {g_rule_apply_at} from "./apply/at.mjs";
import {list_size} from "./../../../node_modules/mykro/src/list/size.mjs";
import {list_range} from "./../../../node_modules/mykro/src/list/range.mjs";
import {m_js_for_each} from "./../../../node_modules/mykro/src/m/js/for/each.mjs";
import {g_rule_is} from "./is.mjs";
import {list_is} from "./../../../node_modules/mykro/src/list/is.mjs";
import {m_js_function_is} from "./../../../node_modules/mykro/src/m/js/function/is.mjs";
import {m_js_arguments_assert} from "./../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function g_rule_apply(input, rule, for_each_apply) {
  await m_js_arguments_assert(list_is, g_rule_is, m_js_function_is)(arguments);
  await m_js_for_each(await list_range(await list_size(input)), async index => {
    try {
      let result = await g_rule_apply_at(input, rule, index);
      await for_each_apply(result);
    } catch (e) {}
  });
}
