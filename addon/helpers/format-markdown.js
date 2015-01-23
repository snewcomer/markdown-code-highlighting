import Ember from 'ember';

export function formatMarkdown(value, options) {
  if(!value || !options){ return; }

  marked.setOptions({
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    }
  });

  return new Ember.Handlebars.SafeString(window.marked(value));
}

export default Ember.Handlebars.makeBoundHelper(formatMarkdown);
