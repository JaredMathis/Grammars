import {list_map} from "./../../../../node_modules/mykro/src/list/map.mjs";
import {m_js_string_listify} from "./../../../../node_modules/mykro/src/m/js/string/listify.mjs";
import {g_letters_number_lookups} from "./../number/lookups.mjs";
import {m_js_string_is} from "./../../../../node_modules/mykro/src/m/js/string/is.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function g_letters_to_number(s) {
  await m_js_arguments_assert(m_js_string_is)(arguments);
  let {from_letter} = await g_letters_number_lookups();
  let mapped_as_string = await m_js_string_listify(s, async l => {
    await list_map(l, async letter => {
      return from_letter[letter];
    });
  });
  return parseInt(mapped_as_string, 26);
}
