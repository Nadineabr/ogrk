export function highlightText(
  text: string | number,
  query: string,
) {
  const reg = new RegExp(query, 'gi');

  return query && reg.test(String(text))
    ? String(text).replace(new RegExp(query, 'gi'), '<mark>$&</mark>') : text;
}
