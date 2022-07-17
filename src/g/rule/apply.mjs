import {list_join} from "./../../../node_modules/mykro/src/list/join.mjs";
import {m_js_string_size} from "./../../../node_modules/mykro/src/m/js/string/size.mjs";
import {list_take} from "./../../../node_modules/mykro/src/list/take.mjs";
import {list_starting_at} from "./../../../node_modules/mykro/src/list/starting/at.mjs";
import {m_js_string_listify} from "./../../../node_modules/mykro/src/m/js/string/listify.mjs";
import {g_rule_is} from "./is.mjs";
import {m_js_number_is} from "./../../../node_modules/mykro/src/m/js/number/is.mjs";
import {m_js_string_is} from "./../../../node_modules/mykro/src/m/js/string/is.mjs";
import {m_js_arguments_assert} from "./../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
import {m_js_equals} from "./../../../node_modules/mykro/src/m/js/equals.mjs";
import {m_js_assert} from "./../../../node_modules/mykro/src/m/js/assert.mjs";
import {m_js_string_to_list} from "./../../../node_modules/mykro/src/m/js/string/to/list.mjs";
export async function g_rule_apply(input, rule, index) {
  await m_js_arguments_assert(m_js_string_is, g_rule_is, m_js_number_is)(arguments);
  let {left: rule_left, right: rule_right} = rule;
  await m_js_string_listify(async l => {
    let offset = await list_starting_at(l, index);
    let replaced = await list_take(offset, rule_left.length);
    await m_js_assert(m_js_equals)(replaced, rule_left);
    let replacement_left = await list_take(l, index);
    let replacement_right = await list_starting_at(l, index + await m_js_string_size(rule_left));
    let replacement = await m_js_string_to_list(rule_right);
    return await list_join([replacement_left, replacement, replacement_right]);
  });
}
