import Vue from 'vue'
import { mount } from './module';
import './global.css';

Vue.config.productionTip = false

const el = document.getElementById('app');
mount({ el });
