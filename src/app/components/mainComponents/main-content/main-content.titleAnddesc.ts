

export class titleAndDesc {

  title: String = '';
  description: String = '';

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }

  static listOfContent: [string,string][] = [
    ['Barber', 'How I Trim'],
    ['Woodcutter', 'How I Rip']
  ]

  static listOfTitles: titleAndDesc[] = []

  static generateAll() {
    titleAndDesc.listOfContent.forEach(inp => titleAndDesc.listOfTitles.push(new titleAndDesc(inp[0], inp[1])));
    return titleAndDesc.listOfTitles;
  }
}



export var generator = titleAndDesc.generateAll();
