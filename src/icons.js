import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faSpinner,
    faMapMarkerAlt,
    faMap,
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faSpinner,
    faMapMarkerAlt,
    faMap,
);

Vue.component('icon', FontAwesomeIcon);