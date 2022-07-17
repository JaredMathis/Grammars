import {g_rule_apply} from "./g/rule/apply.mjs";
import {m_js_arguments_assert} from "./../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function sandbox() {
  await m_js_arguments_assert()(arguments);
  let rule = {
    left: ["a"],
    right: ["aa"]
  };
  let input = "abb";
  let result = await g_rule_apply(input, rule, 0);
  console.log(result);
}
