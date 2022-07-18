import {g_rule_symbols} from "./../rule/symbols.mjs";
import {g_letters_to_number} from "./../letters/to/number.mjs";
import {list_size} from "./../../../node_modules/mykro/src/list/size.mjs";
import {list_map} from "./../../../node_modules/mykro/src/list/map.mjs";
import {list_join} from "./../../../node_modules/mykro/src/list/join.mjs";
import {list_unique} from "./../../../node_modules/mykro/src/list/unique.mjs";
import {list_is} from "./../../../node_modules/mykro/src/list/is.mjs";
import {m_js_arguments_assert} from "./../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function g_symbols_max(rules) {
  await m_js_arguments_assert(list_is)(arguments);
  let symbols = await list_unique(await list_join(await list_map(await rules, async rule => await g_rule_symbols(rule))));
  if (await list_size(symbols) === 0) {
    symbols = ["a"];
  }
  let symbols_mapped = await list_map(symbols, async s => await g_letters_to_number(s));
  let max = Math.max(...symbols_mapped, 0);
  return {
    max,
    symbols
  };
}
