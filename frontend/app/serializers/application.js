import JSONAPISerializer from '@ember-data/serializer/json-api';
import DS from 'ember-data';
 
export default class ApplicationSerializer extends DS.JSONAPISerializer {
    modelNameFromPayloadKey(payloadKey) {
      if (payloadKey === "vehicles") {
        return payloadKey;
      } else {
        return super.modelNameFromPayloadKey(payloadKey);
      }
    }
  }
