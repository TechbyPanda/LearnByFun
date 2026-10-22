/** `word` in the right number for `count`: plural(1, "card") is "card", plural(3, "card") is "cards". */
export function plural(count: number, word: string, pluralWord = `${word}s`): string {
  return count === 1 ? word : pluralWord;
}
