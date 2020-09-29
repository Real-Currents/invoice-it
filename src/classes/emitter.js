import Common from './common';

export default class Emitter extends Common {
  constructor(emitter) {
    super();
    this.name = (emitter) ? emitter.name : '';
    this.first_name = (emitter) ? emitter.first_name : '';
    this.last_name = (emitter) ? emitter.last_name : '';
    this.name = (emitter) ? emitter.name : '';
    this.street_number = (emitter) ? emitter.street_number : '';
    this.street_name = (emitter) ? emitter.street_name : '';
    this.zip_code = (emitter) ? emitter.zip_code : '';
    this.city = (emitter) ? emitter.city : '';
    this.phone = (emitter) ? emitter.phone : '';
    this.mail = (emitter) ? emitter.mail : '';
    this.website = (emitter) ? emitter.website : '';
    this.hydrate(emitter, this._itemsToHydrate());
  }

  get name() {
    return this._company_name;
  }

  set name(value) {
    this._company_name = value;
  }

  get first_name() {
    return this._first_name;
  }

  set first_name(value) {
    this._first_name = value;
  }

  get last_name() {
    return this._last_name;
  }

  set last_name(value) {
    this._last_name = value;
  }

  get street_number() {
    return this._street_number;
  }

  set street_number(value) {
    this._street_number = value;
  }

  get street_name() {
    return this._street_name;
  }

  set street_name(value) {
    this._street_name = value;
  }

  get zip_code() {
    return this._zip_code;
  }

  set zip_code(value) {
    this._zip_code = value;
  }

  get city() {
    return this._city;
  }

  set city(value) {
    this._city = value;
  }

  get country() {
    return this._country;
  }

  set country(value) {
    this._country = value;
  }

  get phone() {
    return this._phone;
  }

  set phone(value) {
    this._phone = value;
  }

  get mail() {
    return this._mail;
  }

  set mail(value) {
    this._mail = value;
  }

  get website() {
    return this._website;
  }

  set website(value) {
    this._website = value;
  }

  _itemsToHydrate() {
    return ['name', 'first_name', 'last_name', 'street_number', 'street_name', 'zip_code', 'city', 'country', 'phone', 'mail', 'website'];
  }
}
