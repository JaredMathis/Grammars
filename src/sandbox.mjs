import {list_remove} from "./../node_modules/mykro/src/list/remove.mjs";
import {list_add} from "./../node_modules/mykro/src/list/add.mjs";
import {g_rule_apply_at} from "./g/rule/apply/at.mjs";
import {m_js_arguments_assert} from "./../node_modules/mykro/src/m/js/arguments/assert.mjs";
import {g_rule_apply} from "./g/rule/apply.mjs";
import {m_js_for_each} from "mykro/src/m/js/for/each.mjs";
export async function sandbox() {
  let rules = [{
    left: ["a"],
    right: ["a", "a"]
  }, {
    left: ["a"],
    right: ["1"]
  }, {
    left: ["a"],
    right: ["0"]
  }];
  let depth = 0;
  let start = ["a"];
  await m_js_for_each(rules, async rule => {
    let applies = await g_rule_apply(start, rule);
    await m_js_for_each(applies, async applied => {
      let rule_new = {
        left: start,
        right: applied
      };
      await list_add(rules, rule_new);
      console.log(rules);
      await list_remove(rules, rule_new);
    });
  });
}
