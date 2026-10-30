// Splits "plain [[highlighted]] plain" into parts so [[…]] can be rendered with the marker style.
export function splitMarkers(text: string) {
  return text.split(/\[\[(.+?)\]\]/).map((part, i) => ({ text: part, marked: i % 2 === 1 }));
}
