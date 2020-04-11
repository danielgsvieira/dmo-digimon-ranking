export default class LinkExtractor {
  static getDigimonLinks(html: string): string[] {
    const linksDiv: string = html.split('mw-pages')[1].split('printfooter')[0];

    const linksSplited = linksDiv.split('href').map((el, index) => {
      if (index > 0) {
        return el.split('"/')[1].split('"')[0];
      }

      return undefined;
    });

    const links = LinkExtractor.removeUndef(linksSplited);

    return links;
  }

  static removeUndef(array: (string | undefined)[]): string[] {
    const result: string[] = [];

    array.forEach((el) => {
      if (el !== undefined) {
        result.push(el);
      }
    });

    return result;
  }
}
