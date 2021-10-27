 
import Ember from 'ember'; 
export default Ember.Route.extend({ 
    model(params){    
         this.store.findRecord("post", params.id).then(() => this.transitionTo('vehicles'));
    } 
});

