if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'Decision-Cruncher'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Decision-Cruncher'.");
}
this['Decision-Cruncher'] = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main(args) {
    println('Hello, Gradle!');
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('Decision-Cruncher', _);
  return _;
}(typeof this['Decision-Cruncher'] === 'undefined' ? {} : this['Decision-Cruncher'], kotlin);
