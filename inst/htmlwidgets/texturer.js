appendStyle = function(css) {
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');

  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  head.appendChild(style);
}


HTMLWidgets.widget({
  name: "r2d3",
  type: "output",

  factory: function(el, width, height) {
    return {
      renderValue: function(args) {
        var d3args = args.d3args;
        var css = args.css;
        appendStyle(css);
        console.log(d3args);

        var current = d3;
        var tryToGetFunctions = function(value) {
          try {
            var evaluated = eval("(" + value + ")");
            if (typeof evaluated === "function") {
              return evaluated;
            }
            return value;
          } catch(e) {}
          return value;
        }

        for(var i = 0; i < d3args.length; ++i) {
          var elem = d3args[i];
          current = current[elem.command].apply(current, elem.args.map(tryToGetFunctions));
        }
      },

      resize: function(width, height) {
      },

      // Make the sigma object available as a property on the widget
      // instance we're returning from factory(). This is generally a
      // good idea for extensibility--it helps users of this widget
      // interact directly with sigma, if needed.
      // r2d3: sig
    };
  }
});
