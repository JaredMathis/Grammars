import {m_js_string_to_list} from "./../../../../node_modules/mykro/src/m/js/string/to/list.mjs";
import {constant_alphabet} from "./../../../../node_modules/mykro/src/constant/alphabet.mjs";
import {m_js_string_is} from "./../../../../node_modules/mykro/src/m/js/string/is.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function g_letters_to_number(s) {
  await m_js_arguments_assert(m_js_string_is)(arguments);
  let letters = await constant_alphabet();
  let letters_as_list = await m_js_string_to_list(letters);
  letters.sort();
  console.log(letters);
}
