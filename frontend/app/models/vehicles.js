import DS from 'ember-data';

export default DS.Model.extend({
    nome: DS.attr('string'),
    placa: DS.attr('string'),
    marca: DS.attr('string'),
    modelo: DS.attr('string'),
    versao: DS.attr('string'),
    ano: DS.attr('string')
});
