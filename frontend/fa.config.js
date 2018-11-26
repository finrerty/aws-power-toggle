import {
  library,
} from '@fortawesome/fontawesome-svg-core';
import {
  faPlay,
  faStop,
  faSpinner,
  faMemory,
  faMicrochip,
  faServer,
  faAngleDoubleDown,
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon,
} from '@fortawesome/vue-fontawesome';
import {
  faAws,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faPlay,
  faStop,
  faSpinner,
  faAws,
  faMemory,
  faMicrochip,
  faServer,
  faAngleDoubleDown,
);

const faComponentName = 'font-awesome-icon';

export default function registerFontAwesome(Vue) {
  if (faComponentName in Vue.options.components) {
    // already registered
    return;
  }
  Vue.component(faComponentName, FontAwesomeIcon);
}
