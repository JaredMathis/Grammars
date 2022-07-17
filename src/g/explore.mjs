import {g_rule_apply} from "./rule/apply.mjs";
import {g_rule_apply_get} from "./rule/apply/get.mjs";
import {m_js_for_each} from "./../../node_modules/mykro/src/m/js/for/each.mjs";
import {m_js_arguments_assert} from "./../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function g_explore(start, rules, depth, for_each_depth_0) {
  if (depth === 0) {
    await for_each_depth_0(start);
    return;
  }
  await m_js_for_each(rules, async rule => {
    await g_rule_apply(start, rule, async applied => {
      console.log({rule, applied})
      await g_explore(applied, rules, depth - 1, for_each_depth_0);
    });
  });
}
