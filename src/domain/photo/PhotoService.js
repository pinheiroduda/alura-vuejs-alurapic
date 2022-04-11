export default class PhotoService {
  constructor(resource) {
    this._resource = resource("v1/fotos{/id}");
  }

  list() {
    return this._resource.query().then(res => res.json());
  }

  register(photo) {
    return this._resource.save(photo);
  }

  delete(id) {
    return this._resource.delete({ id });
  }

  search(id) {
    return this._resource.get({ id }).then(res => res.json());
  }
}
