import {g_generate_rules_depth} from "./g/generate/rules/depth.mjs";
import {m_js_equals_json} from "./../node_modules/mykro/src/m/js/equals/json.mjs";
import {g_generate_rules} from "./g/generate/rules.mjs";
import {g_explore} from "./g/explore.mjs";
import {list_remove} from "./../node_modules/mykro/src/list/remove.mjs";
import {list_add} from "./../node_modules/mykro/src/list/add.mjs";
import {g_rule_apply_at} from "./g/rule/apply/at.mjs";
import {m_js_arguments_assert} from "./../node_modules/mykro/src/m/js/arguments/assert.mjs";
import {g_rule_apply_get} from "./g/rule/apply/get.mjs";
import {m_js_for_each} from "mykro/src/m/js/for/each.mjs";
import {g_letters_to_number} from "./g/letters/to/number.mjs";
import {g_letters_from_number} from "./g/letters/from/number.mjs";
import {list_index_of} from "mykro/src/list/index/of.mjs";
import {list_where} from "mykro/src/list/where.mjs";
import {list_size} from "mykro/src/list/size.mjs";
export async function sandbox() {
  await g_generate_rules_depth([{
    left: ["a"],
    right: ["a"]
  }], 0, async rules => {
    console.log(rules);
    return;
    let examples = [["b"], ["b", "b"]];
    let counter_examples = [["c"], ["b", "c"], ["c", "b"], ["c", "c"]];
    let counter_example_found = false;
    await g_explore(["a"], rules, 3, async found => {
      let matches_examples = await list_where(examples, async e => await m_js_equals_json(found, e));
      await m_js_for_each(matches_examples, async e => {
        await list_remove(examples, e);
      });
      let matches_counter = await list_where(counter_examples, async e => await m_js_equals_json(found, e));
      if (await list_size(matches_counter) >= 1) {
        counter_example_found = true;
      }
    });
    if (!counter_example_found) {
      if (await list_size(examples) === 0) {
        console.log(rules);
        process.exit();
      }
    }
  });
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
