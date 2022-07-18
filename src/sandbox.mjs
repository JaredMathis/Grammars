import {g_generate_rules} from "./g/generate/rules.mjs";
import {g_explore} from "./g/explore.mjs";
import {list_remove} from "./../node_modules/mykro/src/list/remove.mjs";
import {list_add} from "./../node_modules/mykro/src/list/add.mjs";
import {g_rule_apply_at} from "./g/rule/apply/at.mjs";
import {m_js_arguments_assert} from "./../node_modules/mykro/src/m/js/arguments/assert.mjs";
import {g_rule_apply_get} from "./g/rule/apply/get.mjs";
import {m_js_for_each} from "mykro/src/m/js/for/each.mjs";
export async function sandbox() {
  await g_generate_rules(3, result => console.log(result));
  return;
  let rules = [{
    left: ["a"],
    right: ["a", "a"]
  }, {
    left: ["a"],
    right: ["b"]
  }, {
    left: ["a"],
    right: ["c"]
  }];
  let depth = 2;
  let start = ["a"];
  await g_explore(start, rules, depth, async explored => {
    console.log({
      left: start,
      right: explored
    });
  });
}
