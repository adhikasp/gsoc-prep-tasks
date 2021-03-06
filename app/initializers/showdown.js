export function initialize() {
  showdown.setFlavor('github');
  showdown.extension("issueWrap", function() {
      return [{
        type: 'html',
        regex: '<pre>',
        replace: '<pre style="white-space: pre-wrap">'
      },
      {
        type: 'html',
        regex: '<p>',
        replace: '<p style="overflow-wrap: break-word;">'
      }];
    });
}

export default {
  name: 'showdown',
  initialize
};
