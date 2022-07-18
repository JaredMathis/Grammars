import {constant_alphabet_sorted} from "./../../../../node_modules/mykro/src/constant/alphabet/sorted.mjs";
import {list_map} from "./../../../../node_modules/mykro/src/list/map.mjs";
import {m_js_string_listify} from "./../../../../node_modules/mykro/src/m/js/string/listify.mjs";
import {g_letters_number_lookups} from "./../number/lookups.mjs";
import {m_js_number_is} from "./../../../../node_modules/mykro/src/m/js/number/is.mjs";
import {list_size} from "mykro/src/list/size.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function g_letters_from_number(n) {
  await m_js_arguments_assert(m_js_number_is)(arguments);
  let {to_letter} = await g_letters_number_lookups();
  let a = n.toString(await list_size(await constant_alphabet_sorted()));
  let result = await m_js_string_listify(a, async l => {
    return await list_map(l, async letter => {
      return to_letter[letter];
    });
  });
  return result;
}
