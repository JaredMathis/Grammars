import {list_remove} from "./../../../node_modules/mykro/src/list/remove.mjs";
import {list_add} from "./../../../node_modules/mykro/src/list/add.mjs";
import {m_js_function_is} from "./../../../node_modules/mykro/src/m/js/function/is.mjs";
import {list_is} from "./../../../node_modules/mykro/src/list/is.mjs";
import {m_js_arguments_assert} from "./../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
import { list_join } from "mykro/src/list/join.mjs";
export async function g_generate_rules(rules, for_each_generated) {
  await m_js_arguments_assert(list_is, m_js_function_is)(arguments);
  let symbols = await list_unique(await list_join(await list_map(await rules, rule => await list_join([rule.left, rule.right]))));
  console.log(symbols);
  return;
  let possible_symbols = [];
  await math_choose(possible_symbols, 2, async choice => {
    await generate_with_rule({
      left: [choice[0]],
      right: [choice[1]]
    });
  });
  await math_choose(possible_symbols, 3, async choice => {
    await generate_with_rule({
      left: [choice[0], choice[1]],
      right: [choice[2]]
    });
    await generate_with_rule({
      left: [choice[0]],
      right: [choice[1], choice[2]]
    });
  });
  async function generate_with_rule(rule) {
    await list_add(rules, rule);
    await for_each_generated(rules);
    await list_remove(rules, rule);
  }
}
