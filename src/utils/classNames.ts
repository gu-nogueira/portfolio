/**
 * Concatenates the given classes into a single string, ignoring any falsy values.
 *
 * @param {...(string | boolean | undefined | null)} classes - The classes to concatenate.
 * @return {string} The concatenated string of classes.
 */
export default function classNames(
  ...classes: (string | boolean | undefined | null)[]
) {
  return classes.filter(Boolean).join(" ");
}