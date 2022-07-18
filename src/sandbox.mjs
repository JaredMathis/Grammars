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
export async function sandbox() {
  await g_generate_rules([{
    left: ["a"],
    right: ["a"]
  }], async rules => {
    await g_generate_rules(rules, async rules => {
      let examples = ["b", "bb"];
      let counter_examples = ["c", "bc", "cb", "cc"];
      await g_explore(["a"], rules, 3, async found => {
        console.log(found);
        if (await m_js_equals_json(found, ["b"])) {
          console.log(found);
          process.exit();
        }
      });
    });
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
