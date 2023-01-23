import {Platform} from "./platform";

export class Game {
  id: number;
  title: string;
  value: number;
  description: string;
  pegi: number;
  platform: Platform;
  _rented: boolean;
  _reserved: boolean;
  imgpath: string;


  constructor(id: number, title: string, value: number, description: string, pegi: number, platform: Platform, is_rented: boolean, is_reserved: boolean, imgpath: string) {
    this.id = id;
    this.title = title;
    this.value = value;
    this.description = description;
    this.pegi = pegi;
    this.platform = platform;
    this._rented = is_rented;
    this._reserved = is_reserved;
    this.imgpath = imgpath;
  }
}
