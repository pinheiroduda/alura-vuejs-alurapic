export default class PhotoService {
  constructor(resource) {
    this._resource = resource("v1/fotos{/id}");
  }

  list() {
    return this._resource.query().then(
      res => res.json(),
      err => {
        console.log(err);
        throw new Error("Não foi possível obter as fotos.");
      }
    );
  }

  register(photo) {
    if (photo._id) {
      return this._resource.update({ id: photo._id }, photo);
    } else {
      return this._resource.save(photo);
    }
  }

  delete(id) {
    return this._resource.delete({ id });
  }

  search(id) {
    return this._resource.get({ id }).then(res => res.json());
  }
}
