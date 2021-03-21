export function ensureArgumentIsObject(args) {
  if(typeof args !== 'object') {
    throw new Error("function arguments should be an object");
  }
}

export function ensureObjIsNotNullOrUndefined(obj) {
  if(obj === null || obj === undefined ) {
    throw new Error("argument should not be null or undefined");
  }
}

export function setLoader(args, _loader) {
  return _loader({
    apiKeys : args.apiKey,
    version : args.version
  }).load();
}

export function setMapToDom(args) {
  let { id, latitude, longitude, zoom } = args;
  let DOMElement = document.getElementById(id);
  map = new google.maps.Map(DOMElement, {
    center :{ lat : latitude, 
              long : longitude
    }
    zoom : zoom
  });
}