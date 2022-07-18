import {list_add} from "./../../../node_modules/mykro/src/list/add.mjs";
import {m_js_for_range} from "./../../../node_modules/mykro/src/m/js/for/range.mjs";
import {m_js_function_is} from "./../../../node_modules/mykro/src/m/js/function/is.mjs";
import {m_js_number_is} from "./../../../node_modules/mykro/src/m/js/number/is.mjs";
import {m_js_arguments_assert} from "./../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function g_generate_side(rows, for_each_generated) {
  await m_js_arguments_assert(m_js_number_is, m_js_function_is)(arguments);
  let symbol = 0;
  let results = [];
  await m_js_for_range(rows, async row => {
    let result = {};
    result.pair = [++symbol + "", ++symbol + ""];
    await list_add(results, result);
  });
  await m_js_for_range(rows * 2, async s => {});
  await for_each_generated(result);
}
