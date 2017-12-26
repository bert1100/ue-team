import * as type from './mutations_types.js';
import * as func from '../function';

export default {
	[type.ADDTAGEVENT](states, obj){
        states.selectTag = obj.items;
    },
    [type.UPLOADTAGEVENT](states, obj){
        states.tagsList = obj.items;
    }
}