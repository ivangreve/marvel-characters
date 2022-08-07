import { Type } from "class-transformer"

export class Character {
  readonly id: number;
  name: string;
  description: string;

  @Type(() => Date)
  modified: Date;

  @Type(() => Thumbnail)
  thumbnail: Thumbnail
  resourceURI: any
  comics: any
  series: any
  stories: any
  events: any
  urls: any

  constructor(data: Partial<Character> = {}) {
    this.thumbnail = new Thumbnail()
    this.modified = new Date();
    Object.assign(this, data);
  }
}


export class Thumbnail {
  constructor(data: Partial<Thumbnail> = {}) {
    Object.assign(this, data);
  }
  public path: string;
  public extension: string;
}
