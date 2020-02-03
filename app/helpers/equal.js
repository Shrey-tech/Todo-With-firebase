import {
  helper
} from '@ember/component/helper';

export function equal(v1, v2) {
  if (v1 === v2) {
    return true
  } else {
    return false
  }
}

export default helper(equal);
