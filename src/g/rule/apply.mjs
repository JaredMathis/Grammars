import {m_js_equals_json} from "./../../../node_modules/mykro/src/m/js/equals/json.mjs";
import {m_js_assert} from "./../../../node_modules/mykro/src/m/js/assert.mjs";
import {list_size} from "./../../../node_modules/mykro/src/list/size.mjs";
import {list_range} from "./../../../node_modules/mykro/src/list/range.mjs";
import {g_rule_is} from "./is.mjs";
import {list_is} from "./../../../node_modules/mykro/src/list/is.mjs";
import {m_js_arguments_assert} from "./../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
import {m_js_for_each} from "./../../../node_modules/mykro/src/m/js/for/each.mjs";
import {g_rule_apply_at} from "./apply/at.mjs";
export async function g_rule_apply(input, rule) {
  await m_js_arguments_assert(list_is, g_rule_is)(arguments);
  let success = false;
  let result;
  await m_js_for_each(await list_range(await list_size(input)), async index => {
    try {
      result = await g_rule_apply_at(input, rule, index);
      success = true;
      return true;
    } catch (e) {}
  });
  return {
    success,
    result
  };
}
const rule = {
  left: ["a"],
  right: ["a", "a"]
};
let test_cases = [{
  input: [["a"], rule],
  output: ["a", "a"]
}, {
  input: [["a", "b"], rule],
  output: ["a", "a", "b"]
}, {
  input: [["a", "b", "b"], rule],
  output: ["a", "a", "b", "b"]
}, {
  input: [["a", "b", "c"], rule],
  output: ["a", "a", "b", "c"]
}, {
  input: [["d", "a", "b", "c"], rule],
  output: ["d", "a", "a", "b", "c"]
}, {
  input: [["d", "e", "a"], rule],
  output: ["d", "e", "a", "a"]
}];
await m_js_for_each(test_cases, async test_case => {
  await m_js_assert(m_js_equals_json)((await g_rule_apply(...test_case.input)).result, test_case.output);
});
