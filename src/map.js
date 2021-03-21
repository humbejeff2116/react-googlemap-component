 import { ensureArgumentIsObject, setMapToDom, ensureObjIsNotNullOrUndefined } from './utils'
 
 export default funtion map(args) {
   ensureArgumentIsObject(args);
   ensureObjIsNotNullOrUndefined(args);
   return setMapToDom(args);
 }