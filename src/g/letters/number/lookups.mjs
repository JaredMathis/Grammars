import {constant_alphabet} from "./../../../../node_modules/mykro/src/constant/alphabet.mjs";
import {m_js_for_each} from "./../../../../node_modules/mykro/src/m/js/for/each.mjs";
import {list_join} from "./../../../../node_modules/mykro/src/list/join.mjs";
import {list_size} from "./../../../../node_modules/mykro/src/list/size.mjs";
import {list_index_last} from "./../../../../node_modules/mykro/src/list/index/last.mjs";
import {list_take} from "./../../../../node_modules/mykro/src/list/take.mjs";
import {m_js_string_to_list} from "./../../../../node_modules/mykro/src/m/js/string/to/list.mjs";
import {constant_numbers} from "./../../../../node_modules/mykro/src/constant/numbers.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function g_letters_number_lookups() {
  await m_js_arguments_assert()(arguments);
  let letters_as_list = await constant_letters_sorted();
  let numbers = await constant_numbers();
  let numbers_as_list = await m_js_string_to_list(numbers);
  let numbers_without_0 = await list_take(numbers_as_list, await list_index_last(numbers_as_list));
  let letters_without_last_10 = await list_take(letters_as_list, await list_size(letters_as_list) - await list_size(numbers_as_list));
  let target = await list_join([numbers_without_0, letters_without_last_10, ["0"]]);
  let from_letter = {};
  let to_letter = {};
  await m_js_for_each(letters_as_list, (letter, index) => {
    let other = target[index];
    from_letter[letter] = other;
    from_letter[other] = letter;
  });
  return {
    from_letter,
    to_letter
  };
}
async function constant_letters_sorted() {
  let letters = await constant_alphabet();
  let letters_as_list = await m_js_string_to_list(letters);
  letters_as_list.sort();
  return letters_as_list;
}
