import * as type from './mutations_types.js';
import * as func from '../function';

export default {
	[type.POSTUSERLIST](states, obj){
        states.userlist = obj.items;
    },
    login(states, obj){
    	states.userinfo = obj.user;
    	states.token = obj.token;
    },
    register(states, obj) {
    	states.userinfo = obj.user;
    	states.token = obj.token;
    }

}