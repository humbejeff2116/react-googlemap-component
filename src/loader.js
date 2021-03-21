import { Loader } from "@googlemaps/js-api-loader";
import { ensureArgumentIsObject ,setLoader, ensureObjIsNotNullOrUndefined } from './utils';

export default function mapLoader(args = {}) {
  ensureArgumentIsObject(args);
ensureObjIsNotNullOrUndefined(args);
  return setLoader(args, Loader);
}