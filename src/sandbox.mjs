import {list_map} from "./../node_modules/mykro/src/list/map.mjs";
import {list_join} from "./../node_modules/mykro/src/list/join.mjs";
import {m_js_for_range} from "./../node_modules/mykro/src/m/js/for/range.mjs";
import {g_generate_rules_depth} from "./g/generate/rules/depth.mjs";
import {m_js_equals_json} from "./../node_modules/mykro/src/m/js/equals/json.mjs";
import {g_generate_rules} from "./g/generate/rules.mjs";
import {g_explore} from "./g/explore.mjs";
import {list_remove} from "./../node_modules/mykro/src/list/remove.mjs";
import {list_add} from "./../node_modules/mykro/src/list/add.mjs";
import {g_rule_apply_at} from "./g/rule/apply/at.mjs";
import {m_js_arguments_assert} from "./../node_modules/mykro/src/m/js/arguments/assert.mjs";
import {g_rule_apply_get} from "./g/rule/apply/get.mjs";
import {m_js_for_each} from "./../node_modules/mykro/src/m/js/for/each.mjs";
import {g_letters_to_number} from "./g/letters/to/number.mjs";
import {g_letters_from_number} from "./g/letters/from/number.mjs";
import {list_index_of} from "./../node_modules/mykro/src/list/index/of.mjs";
import {list_where} from "./../node_modules/mykro/src/list/where.mjs";
import {list_size} from "./../node_modules/mykro/src/list/size.mjs";
import {m_js_comment} from "./../node_modules/mykro/src/m/js/comment.mjs";
import {g_symbols_max} from "./g/symbols/max.mjs";
import {g_rule_symbols} from "./g/rule/symbols.mjs";
import {list_contains} from "mykro/src/list/contains.mjs";
export async function sandbox() {
  Error.stackTraceLimit = Infinity;
  await g_generate_rules_depth([], 1, async rules => {
    if (await list_size(rules) === 1) {
      if (!await m_js_equals_json(rules[0].left, ["a"])) {
        return true;
      }
      let max = await g_symbols_max(rules);
      let skip = false;
      await m_js_for_range(max, async i => {
        i++;
        let symbol = await g_letters_from_number(i);
        let symbols = await list_join(await list_map(rules, async rule => await g_rule_symbols(rule)));
        if (!await list_where(symbols, async s => await m_js_equals_json(symbol, s))) {
          skip = true;
        }
      });
    }
  }, async rules => {
    console.log(rules);
  });
  return;
  await m_js_comment(`all b's
  [
    { left: [ 'a' ], right: [ 'b' ] },
    { left: [ 'a' ], right: [ 'a', 'a' ] }
  ]
  `);
  let case1 = {
    examples_get: () => [["b"], ["b", "b"]],
    counter_examples: [["c"], ["b", "c"], ["c", "b"], ["c", "c"]]
  };
  await m_js_comment(`start with b
  [
    { left: [ 'a' ], right: [ 'b' ] },
    { left: [ 'c' ], right: [ 'a' ] },
    { left: [ 'a' ], right: [ 'b', 'c' ] }
  ]
  `);
  let case2 = {
    examples_get: () => [["b"], ["b", "c"], ["b", "b"]],
    counter_examples: [["c"], ["c", "b"], ["c", "c"]]
  };
  await m_js_comment(`end with b
  [
    { left: [ 'a' ], right: [ 'b' ] },
    { left: [ 'c' ], right: [ 'a' ] },
    { left: [ 'a' ], right: [ 'c', 'b' ] }
  ]
  `);
  let case3 = {
    examples_get: () => [["b"], ["c", "b"], ["b", "b"]],
    counter_examples: [["c"], ["b", "c"], ["c", "c"]]
  };
  await m_js_comment(`any combination of b or c
  [
    { left: [ 'a' ], right: [ 'b' ] },
    { left: [ 'a' ], right: [ 'c' ] },
    { left: [ 'a' ], right: [ 'a', 'a' ] }
  ]
  
  `);
  let case4 = {
    examples_get: () => [["b"], ["c", "b"], ["b", "b"], ["c"], ["b", "c"], ["c", "c"]],
    counter_examples: []
  };
  let _case = case4;
  await g_models(_case.examples_get, _case.counter_examples, 3, 3, rules => {
    console.log(rules);
    process.exit();
  });
}
async function g_models(examples_get, counter_examples, rules_depth, explore_depth, for_each_model) {
  await g_generate_rules_depth([], rules_depth, async rules => {
    let examples = examples_get();
    let counter_example_found = false;
    await g_explore(["a"], rules, explore_depth, async found => {
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
        for_each_model(rules);
      }
    }
  });
}
