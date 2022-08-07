import { Type } from "class-transformer"

export class Character {
  readonly id: number | undefined;
  name?: string;
  description?: string;

  @Type(() => Date)
  modified?: Date

  thumbnail: any
  resourceURI: any
  comics: any
  series: any
  stories: any
  events: any
  urls: any

  constructor(data: Partial<Character> = {}) {
    Object.assign(this, data);
  }
}
