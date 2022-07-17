import {g_rule_apply_at} from "./g/rule/apply/at.mjs";
import {m_js_arguments_assert} from "./../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function sandbox() {
  await m_js_arguments_assert()(arguments);
  let rule = {
    left: ["a"],
    right: ["a", "a"]
  };
  let input = ["a", "b", "b"];
  let result = await g_rule_apply_at(input, rule, 0);
  console.log(result);
}
