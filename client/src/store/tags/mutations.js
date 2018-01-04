import * as type from './mutations_types.js';
import * as func from '../function';

export default {
	[type.ADDTAGEVENT](states, obj){
        states.newTag = obj.items._id;
    },
    [type.UPLOADTAGEVENT](states, obj){
        states.tagsList = obj.items;
    },
    deltags (states){
        states.newTag = '';
    }
}