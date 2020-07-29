export function removerAcentos(newStringComAcento: string) {
  var string = newStringComAcento;
  var mapaAcentosHex: any = {
    a: /[\xE0-\xE6]/g,
    A: /[\xC0-\xC6]/g,
    e: /[\xE8-\xEB]/g,
    E: /[\xC8-\xCB]/g,
    i: /[\xEC-\xEF]/g,
    I: /[\xCC-\xCF]/g,
    o: /[\xF2-\xF6]/g,
    O: /[\xD2-\xD6]/g,
    u: /[\xF9-\xFC]/g,
    U: /[\xD9-\xDC]/g,
    c: /\xE7/g,
    C: /\xC7/g,
    n: /\xF1/g,
    N: /\xD1/g,
  };

  for (var letra in mapaAcentosHex) {
    var expressaoRegular = mapaAcentosHex[letra];
    string = string.replace(expressaoRegular, letra);
  }

  return string;
}

export function parseCsv(csvText: string) {
  let lines: any[] = csvText.split("\n").splice(2);
  const header = lines.shift().split(";");
  lines.shift(); // get rid of definitions
  return lines.map((line: string) => {
    const bits = line.split(";");
    let obj: any = {};
    header.forEach(
      (h: string, i: number) =>
        (obj[h.toLowerCase().split(" ").join("_")] = bits[i])
    ); // or use reduce here
    return obj;
  });
}
