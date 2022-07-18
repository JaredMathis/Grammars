import {g_letters_from_number} from "./../letters/from/number.mjs";
import {list_without} from "./../../../node_modules/mykro/src/list/without.mjs";
import {m_js_for_each} from "./../../../node_modules/mykro/src/m/js/for/each.mjs";
import {list_take} from "./../../../node_modules/mykro/src/list/take.mjs";
import {list_map} from "./../../../node_modules/mykro/src/list/map.mjs";
import {list_unique} from "./../../../node_modules/mykro/src/list/unique.mjs";
import {list_remove} from "./../../../node_modules/mykro/src/list/remove.mjs";
import {list_add} from "./../../../node_modules/mykro/src/list/add.mjs";
import {m_js_function_is} from "./../../../node_modules/mykro/src/m/js/function/is.mjs";
import {list_is} from "./../../../node_modules/mykro/src/list/is.mjs";
import {m_js_arguments_assert} from "./../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
import {list_join} from "./../../../node_modules/mykro/src/list/join.mjs";
import {g_letters_to_number} from "./../letters/to/number.mjs";
export async function g_generate_rules(rules, for_each_generated) {
  await math_choose([1,2],1,c => console.log(c), []);
  return
  await m_js_arguments_assert(list_is, m_js_function_is)(arguments);
  let symbols = await list_unique(await list_join(await list_map(await rules, async rule => await list_join([rule.left, rule.right]))));
  let symbols_mapped = await list_map(symbols, async s => await g_letters_to_number(s));
  let max = Math.max(...symbols_mapped);
  let next_2 = [max + 1, max + 2];
  next_2 = await list_map(next_2, async s => await g_letters_from_number(s));
  let possible_symbols = await list_join([symbols, await list_take(next_2, 1)]);
  await math_choose_duplicates(possible_symbols, 2, async choice => {
    await generate_with_rule({
      left: [choice[0]],
      right: [choice[1]]
    });
  }, []);
  possible_symbols = await list_join([symbols, next_2]);
  await math_choose_duplicates(possible_symbols, 3, async choice => {
    await generate_with_rule({
      left: [choice[0], choice[1]],
      right: [choice[2]]
    }, []);
    await generate_with_rule({
      left: [choice[0]],
      right: [choice[1], choice[2]]
    });
  }, []);
  async function generate_with_rule(rule) {
    await list_add(rules, rule);
    await for_each_generated(rules);
    await list_remove(rules, rule);
  }
}
async function math_choose(possible_symbols, choices_count, for_each_choice, parent_choice) {
  if (choices_count === 0) {
    await for_each_choice(parent_choice);
  }
  await m_js_for_each(possible_symbols, async s => {
    let possible_symbols_remaining = await list_without(possible_symbols, [s]);
    await math_choose(possible_symbols_remaining, choices_count - 1, for_each_choice, await list_join([parent_choice, [s]]));
  });
}

async function math_choose_duplicates(possible_symbols, choices_count, for_each_choice, parent_choice) {
  if (choices_count === 0) {
    await for_each_choice(parent_choice);
  }
  await m_js_for_each(possible_symbols, async s => {
    await math_choose_duplicates(possible_symbols, choices_count - 1, for_each_choice, await list_join([parent_choice, [s]]));
  });
}
