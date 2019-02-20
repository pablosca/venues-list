import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faSpinner,
    faMapMarkerAlt,
    faMap,
    faLocationArrow,
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faSpinner,
    faMapMarkerAlt,
    faMap,
    faLocationArrow,
);

Vue.component('icon', FontAwesomeIcon);