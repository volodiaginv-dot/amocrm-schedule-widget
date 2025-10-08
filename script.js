define(['jquery'], function($){
  return function(){
    var self = this;
    this.render = function(){
      self.$el.html('<div style="padding:10px;font-family:Arial">Виджет установлен. Добавьте плитку на Рабочем столе.</div>');
      return true;
    };
    this.init = function(){ return true; };
    this.bind_actions = function(){ return true; };
    this.settings = function(){ return true; };
    this.onSave = function(){ return true; };
    this.destroy = function(){ return true; };
  };
});