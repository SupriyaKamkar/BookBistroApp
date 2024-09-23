import { URL } from "url";

interface IBookDetails {
  _id: string;
  name: string;
  imageLink: URL;
}

export default class BookDetails implements IBookDetails {
  constructor(_id: string, name: string, imageLink: URL) {
    this._id = _id;
    this.name = name;
    this.imageLink = imageLink;
  }
  _id: string;
  name: string;
  imageLink: URL;
}
