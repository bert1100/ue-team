import * as type from './mutations_types.js';
import * as func from '../function';

export default {
	[type.ADDEVENT](states, obj){
        states.article = obj.items;
    },
    [type.EDITEVENT](states, obj){
        states.article = obj.items;
    }
}