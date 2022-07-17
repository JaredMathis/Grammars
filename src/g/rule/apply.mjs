import {list_size} from "./../../../node_modules/mykro/src/list/size.mjs";
import {list_is} from "./../../../node_modules/mykro/src/list/is.mjs";
import {m_js_equals_json} from "./../../../node_modules/mykro/src/m/js/equals/json.mjs";
import {list_join} from "./../../../node_modules/mykro/src/list/join.mjs";
import {list_take} from "./../../../node_modules/mykro/src/list/take.mjs";
import {list_starting_at} from "./../../../node_modules/mykro/src/list/starting/at.mjs";
import {g_rule_is} from "./is.mjs";
import {m_js_number_is} from "./../../../node_modules/mykro/src/m/js/number/is.mjs";
import {m_js_arguments_assert} from "./../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
import {m_js_assert} from "./../../../node_modules/mykro/src/m/js/assert.mjs";
export async function g_rule_apply(input, rule, index) {
  await m_js_arguments_assert(list_is, g_rule_is, m_js_number_is)(arguments);
  let {left: rule_left, right: rule_right} = rule;
  let offset = await list_starting_at(input, index);
  let replaced = await list_take(offset, rule_left.length);
  await m_js_assert(m_js_equals_json)(replaced, rule_left);
  let replacement_left = await list_take(input, index);
  let replacement_right = await list_starting_at(input, index + await list_size(rule_left));
  return await list_join([replacement_left, rule_right, replacement_right]);
}
await m_js_assert(m_js_equals_json)(await g_rule_apply(["a", "b", "b"], {
  left: ["a"],
  right: ["a", "a"]
}, 0), ["a", "a", "b", "b"]);
