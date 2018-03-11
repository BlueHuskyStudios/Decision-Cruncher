if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'Decision Cruncher'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Decision Cruncher'.");
}
this['Decision Cruncher'] = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Unit = Kotlin.kotlin.Unit;
  var equals = Kotlin.equals;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var toList = Kotlin.kotlin.collections.toList_abgq59$;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var toBoxedChar = Kotlin.toBoxedChar;
  var hashCode = Kotlin.hashCode;
  var Iterator = Kotlin.kotlin.collections.Iterator;
  var throwCCE = Kotlin.throwCCE;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var Any = Object;
  var ReadWriteProperty = Kotlin.kotlin.properties.ReadWriteProperty;
  var ObservableProperty = Kotlin.kotlin.properties.ObservableProperty;
  var toString = Kotlin.toString;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var indexOf = Kotlin.kotlin.text.indexOf_8eortd$;
  var unboxChar = Kotlin.unboxChar;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var isWhitespace = Kotlin.kotlin.text.isWhitespace_myv2d0$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Throwable = Error;
  var ensureNotNull = Kotlin.ensureNotNull;
  var toList_0 = Kotlin.kotlin.collections.toList_us0mfu$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var toShort = Kotlin.toShort;
  MutableDecision.prototype = Object.create(Decision.prototype);
  MutableDecision.prototype.constructor = MutableDecision;
  observing$ObjectLiteral.prototype = Object.create(ObservableProperty.prototype);
  observing$ObjectLiteral.prototype.constructor = observing$ObjectLiteral;
  FiniteAmountSummary$all.prototype = Object.create(FiniteAmountSummary.prototype);
  FiniteAmountSummary$all.prototype.constructor = FiniteAmountSummary$all;
  FiniteAmountSummary$some.prototype = Object.create(FiniteAmountSummary.prototype);
  FiniteAmountSummary$some.prototype.constructor = FiniteAmountSummary$some;
  FiniteAmountSummary$none.prototype = Object.create(FiniteAmountSummary.prototype);
  FiniteAmountSummary$none.prototype.constructor = FiniteAmountSummary$none;
  Ternary.prototype = Object.create(Enum.prototype);
  Ternary.prototype.constructor = Ternary;
  HttpRequest$RequestParameter$Usage.prototype = Object.create(Enum.prototype);
  HttpRequest$RequestParameter$Usage.prototype.constructor = HttpRequest$RequestParameter$Usage;
  HttpRequest$RequestParameter$genericHeader.prototype = Object.create(HttpRequest$RequestParameter.prototype);
  HttpRequest$RequestParameter$genericHeader.prototype.constructor = HttpRequest$RequestParameter$genericHeader;
  HttpResponse$InteractionStage.prototype = Object.create(Enum.prototype);
  HttpResponse$InteractionStage.prototype.constructor = HttpResponse$InteractionStage;
  CssParameterForAttributeSelector$exactly.prototype = Object.create(CssParameterForAttributeSelector.prototype);
  CssParameterForAttributeSelector$exactly.prototype.constructor = CssParameterForAttributeSelector$exactly;
  CssParameterForAttributeSelector$listContainsExactly.prototype = Object.create(CssParameterForAttributeSelector.prototype);
  CssParameterForAttributeSelector$listContainsExactly.prototype.constructor = CssParameterForAttributeSelector$listContainsExactly;
  CssParameterForAttributeSelector$languageSubCode.prototype = Object.create(CssParameterForAttributeSelector.prototype);
  CssParameterForAttributeSelector$languageSubCode.prototype.constructor = CssParameterForAttributeSelector$languageSubCode;
  CssParameterForAttributeSelector$startsWith.prototype = Object.create(CssParameterForAttributeSelector.prototype);
  CssParameterForAttributeSelector$startsWith.prototype.constructor = CssParameterForAttributeSelector$startsWith;
  CssParameterForAttributeSelector$endsWith.prototype = Object.create(CssParameterForAttributeSelector.prototype);
  CssParameterForAttributeSelector$endsWith.prototype.constructor = CssParameterForAttributeSelector$endsWith;
  CssParameterForAttributeSelector$contains.prototype = Object.create(CssParameterForAttributeSelector.prototype);
  CssParameterForAttributeSelector$contains.prototype.constructor = CssParameterForAttributeSelector$contains;
  SelectorCombiner$BinaryCombinator.prototype = Object.create(SelectorCombiner.prototype);
  SelectorCombiner$BinaryCombinator.prototype.constructor = SelectorCombiner$BinaryCombinator;
  SelectorCombiner$either.prototype = Object.create(SelectorCombiner$BinaryCombinator.prototype);
  SelectorCombiner$either.prototype.constructor = SelectorCombiner$either;
  SelectorCombiner$container.prototype = Object.create(SelectorCombiner$BinaryCombinator.prototype);
  SelectorCombiner$container.prototype.constructor = SelectorCombiner$container;
  SelectorCombiner$sibling.prototype = Object.create(SelectorCombiner$BinaryCombinator.prototype);
  SelectorCombiner$sibling.prototype.constructor = SelectorCombiner$sibling;
  SelectorCombiner$immediateSibling.prototype = Object.create(SelectorCombiner$BinaryCombinator.prototype);
  SelectorCombiner$immediateSibling.prototype.constructor = SelectorCombiner$immediateSibling;
  JSTernaryCheckboxTreeController.prototype = Object.create(TernaryCheckboxTree.prototype);
  JSTernaryCheckboxTreeController.prototype.constructor = JSTernaryCheckboxTreeController;
  function AppViewController(htmlElement) {
    this.htmlElement = htmlElement;
  }
  AppViewController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AppViewController',
    interfaces: []
  };
  function DecisionCrunchEngine() {
    DecisionCrunchEngine_instance = this;
  }
  function DecisionCrunchEngine$crunch$lambda(closure$allRequirements, this$DecisionCrunchEngine) {
    return function (decision, option) {
      this$DecisionCrunchEngine.crunch_0(decision, closure$allRequirements, option);
      return Unit;
    };
  }
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  DecisionCrunchEngine.prototype.crunch_n1qnm0$ = function (allRequirements, allOptions) {
    return reduceInto(allOptions, new MutableDecision(LinkedHashMap_init()), DecisionCrunchEngine$crunch$lambda(allRequirements, this)).immutableCopy();
  };
  DecisionCrunchEngine.prototype.crunch_0 = function ($receiver, allRequirements, option) {
    var $receiver_0 = $receiver.pieChart;
    var value = this.fitness_0(option, allRequirements);
    $receiver_0.put_xwzc9p$(option, value);
  };
  function DecisionCrunchEngine$fitness$lambda(closure$allRequirements) {
    return function (fitness, f) {
      var requirementId = f.key;
      var conformance = f.value;
      var tmp$;
      var $receiver = closure$allRequirements;
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_0;
        tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if (equals(element.id, requirementId)) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }
        }
        firstOrNull$result = null;
      }
       while (false);
      tmp$ = firstOrNull$result;
      if (tmp$ == null) {
        return fitness;
      }
      var requirement = tmp$;
      fitness + requirement.importance * conformance;
      return fitness;
    };
  }
  DecisionCrunchEngine.prototype.fitness_0 = function ($receiver, allRequirements) {
    return reduceTo($receiver.requirementConformance.entries, 0.0, DecisionCrunchEngine$fitness$lambda(allRequirements));
  };
  DecisionCrunchEngine.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DecisionCrunchEngine',
    interfaces: []
  };
  var DecisionCrunchEngine_instance = null;
  function DecisionCrunchEngine_getInstance() {
    if (DecisionCrunchEngine_instance === null) {
      new DecisionCrunchEngine();
    }
    return DecisionCrunchEngine_instance;
  }
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  function main$lambda() {
    var requirements = listOf([new Requirement('c', 'Cost', 1.0), new Requirement('d', 'Distance to QT', 0.6)]);
    var options = listOf([new Option('Century Skyline', mapOf([to('c', 0.5), to('d', 0.9)])), new Option('Somewhere Else A', mapOf([to('c', 0.7), to('d', 0.7)])), new Option('Somewhere Else B', mapOf([to('c', 1.0), to('d', 0.4)]))]);
    console.log(copyToArray(toList(DecisionCrunchEngine_getInstance().crunch_n1qnm0$(requirements, options).pieChart)));
    return Unit;
  }
  function main(args) {
    $(main$lambda);
  }
  function Decision(pieChart) {
    this.pieChart_rze03y$_0 = pieChart;
  }
  Object.defineProperty(Decision.prototype, 'pieChart', {
    get: function () {
      return this.pieChart_rze03y$_0;
    }
  });
  Decision.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Decision',
    interfaces: []
  };
  function MutableDecision(pieChart) {
    Decision.call(this, emptyMap());
    this.pieChart_fwhxwc$_0 = pieChart;
  }
  Object.defineProperty(MutableDecision.prototype, 'pieChart', {
    get: function () {
      return this.pieChart_fwhxwc$_0;
    },
    set: function (pieChart) {
      this.pieChart_fwhxwc$_0 = pieChart;
    }
  });
  var toMap = Kotlin.kotlin.collections.toMap_abgq59$;
  MutableDecision.prototype.immutableCopy = function () {
    return new Decision(toMap(this.pieChart));
  };
  MutableDecision.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MutableDecision',
    interfaces: [Decision]
  };
  var immutableCopy = defineInlineFunction('Decision Cruncher.DecisionCruncher.immutableCopy_5rvit3$', wrapFunction(function () {
    var toMap = Kotlin.kotlin.collections.toMap_abgq59$;
    return function ($receiver) {
      return toMap($receiver);
    };
  }));
  function DecisionCruncherState(allRequirements, allOptions, preCalculatedResult) {
    if (preCalculatedResult === void 0)
      preCalculatedResult = null;
    this.allRequirements = allRequirements;
    this.allOptions = allOptions;
    this.result_mzytf0$_0 = lazy(DecisionCruncherState$result$lambda(preCalculatedResult, this));
  }
  Object.defineProperty(DecisionCruncherState.prototype, 'result', {
    get: function () {
      return this.result_mzytf0$_0.value;
    }
  });
  function DecisionCruncherState$result$lambda(closure$preCalculatedResult, this$DecisionCruncherState) {
    return function () {
      return closure$preCalculatedResult != null ? closure$preCalculatedResult : DecisionCrunchEngine_getInstance().crunch_n1qnm0$(this$DecisionCruncherState.allRequirements, this$DecisionCruncherState.allOptions);
    };
  }
  DecisionCruncherState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DecisionCruncherState',
    interfaces: []
  };
  function DecisionInput() {
  }
  DecisionInput.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DecisionInput',
    interfaces: []
  };
  function Serializable() {
  }
  Serializable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Serializable',
    interfaces: []
  };
  function SerializableDecisionCruncherState(id, allOptions, allRequirements) {
    this.i_smazkr$_0 = toBoxedChar(id);
    this.o = allOptions;
    this.r = allRequirements;
  }
  Object.defineProperty(SerializableDecisionCruncherState.prototype, 'i', {
    get: function () {
      return toBoxedChar(this.i_smazkr$_0);
    }
  });
  SerializableDecisionCruncherState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerializableDecisionCruncherState',
    interfaces: [Serializable]
  };
  function SerializableOption(id, name, requirementConformance) {
    this.i_xuvh0z$_0 = toBoxedChar(id);
    this.n = name;
    this.c = requirementConformance;
  }
  Object.defineProperty(SerializableOption.prototype, 'i', {
    get: function () {
      return toBoxedChar(this.i_xuvh0z$_0);
    }
  });
  SerializableOption.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerializableOption',
    interfaces: [Serializable]
  };
  function SerializableRequirement(id, name) {
    this.i_1fuv9p$_0 = toBoxedChar(id);
    this.n = name;
  }
  Object.defineProperty(SerializableRequirement.prototype, 'i', {
    get: function () {
      return toBoxedChar(this.i_1fuv9p$_0);
    }
  });
  SerializableRequirement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerializableRequirement',
    interfaces: [Serializable]
  };
  function Option(name, requirementConformance) {
    this.name_qhnkfi$_0 = name;
    this.requirementConformance = requirementConformance;
  }
  Object.defineProperty(Option.prototype, 'name', {
    get: function () {
      return this.name_qhnkfi$_0;
    }
  });
  Option.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Option',
    interfaces: [DecisionInput]
  };
  function Requirement(id, name, importance) {
    if (id === void 0)
      id = IdManager_getInstance().generateNewShortId();
    this.id = id;
    this.name_tyzx70$_0 = name;
    this.importance = importance;
  }
  Object.defineProperty(Requirement.prototype, 'name', {
    get: function () {
      return this.name_tyzx70$_0;
    }
  });
  Requirement.prototype.hashCode = function () {
    return hashCode(this.id);
  };
  Requirement.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, Requirement))
      return false;
    if (!equals(this.id, other.id))
      return false;
    return true;
  };
  Requirement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Requirement',
    interfaces: [DecisionInput]
  };
  var asList = defineInlineFunction('Decision Cruncher.jQueryInterface.asList_9ufosi$', wrapFunction(function () {
    var asList = Kotlin.kotlin.collections.asList_us0mfu$;
    return function ($receiver) {
      return asList($receiver.toArray());
    };
  }));
  function mapNotNull$lambda(closure$mapper, closure$newArray) {
    return function (index, element) {
      var mapped = closure$mapper(index, element);
      if (mapped != null) {
        closure$newArray.v = closure$newArray.v.concat([mapped]);
      }
      return Unit;
    };
  }
  function mapNotNull($receiver, mapper) {
    var newArray = {v: []};
    forEachIndexed($receiver, mapNotNull$lambda(mapper, newArray));
    return newArray.v;
  }
  function iterator$ObjectLiteral(this$iterator) {
    this.this$iterator = this$iterator;
    this.iteratorIndex = 0;
  }
  iterator$ObjectLiteral.prototype.hasNext = function () {
    return this.iteratorIndex < this.this$iterator.length;
  };
  iterator$ObjectLiteral.prototype.next = function () {
    var next = this.this$iterator.get(this.iteratorIndex);
    this.iteratorIndex = this.iteratorIndex + 1 | 0;
    return next;
  };
  iterator$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Iterator]
  };
  function iterator_0($receiver) {
    if ($receiver.length === 0) {
      return Kotlin.arrayIterator([]);
    }
    return new iterator$ObjectLiteral($receiver);
  }
  function forEach($receiver, iterator) {
    var tmp$;
    tmp$ = iterator_0($receiver);
    while (tmp$.hasNext()) {
      var it = tmp$.next();
      iterator(it);
    }
  }
  function forEachIndexed($receiver, iterator) {
    var tmp$;
    var index = 0;
    tmp$ = iterator_0($receiver);
    while (tmp$.hasNext()) {
      var it = tmp$.next();
      iterator(index, it);
      index = index + 1 | 0;
    }
  }
  var booleanAttr = defineInlineFunction('Decision Cruncher.jQueryInterface.booleanAttr_pl09c0$', wrapFunction(function () {
    var toBooleanOrNull = _.org.bh.tools.base.util.toBooleanOrNull_s8jyvk$;
    return function ($receiver, name) {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = $receiver.prop(name)) != null ? toBooleanOrNull(tmp$) : null) != null ? tmp$_0 : false;
    };
  }));
  function booleanAttr_0($receiver, name, newValue) {
    var tmp$, tmp$_0;
    if (newValue === true) {
      tmp$_0 = $receiver.prop(name, name);
    }
     else {
      $receiver.prop(name, (tmp$ = null) == null || typeof tmp$ === 'string' ? tmp$ : throwCCE());
      tmp$_0 = $receiver.removeProp(name);
    }
    return tmp$_0;
  }
  var disabled = defineInlineFunction('Decision Cruncher.jQueryInterface.disabled_9ufosi$', wrapFunction(function () {
    var toBooleanOrNull = _.org.bh.tools.base.util.toBooleanOrNull_s8jyvk$;
    return function ($receiver) {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = $receiver.prop('disabled')) != null ? toBooleanOrNull(tmp$) : null) != null ? tmp$_0 : false;
    };
  }));
  var disabled_0 = defineInlineFunction('Decision Cruncher.jQueryInterface.disabled_5laha2$', wrapFunction(function () {
    var booleanAttr = _.jQueryInterface.booleanAttr_86h6l4$;
    return function ($receiver, newValue) {
      return booleanAttr($receiver, 'disabled', newValue);
    };
  }));
  var checked = defineInlineFunction('Decision Cruncher.jQueryInterface.checked_9ufosi$', wrapFunction(function () {
    var toBooleanOrNull = _.org.bh.tools.base.util.toBooleanOrNull_s8jyvk$;
    return function ($receiver) {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = $receiver.prop('checked')) != null ? toBooleanOrNull(tmp$) : null) != null ? tmp$_0 : false;
    };
  }));
  function checked_0($receiver, newValue) {
    $receiver.prop('indeterminate', false);
    return booleanAttr_0($receiver, 'checked', newValue);
  }
  var indeterminate = defineInlineFunction('Decision Cruncher.jQueryInterface.indeterminate_9ufosi$', wrapFunction(function () {
    var toBooleanOrNull = _.org.bh.tools.base.util.toBooleanOrNull_s8jyvk$;
    return function ($receiver) {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = $receiver.prop('indeterminate')) != null ? toBooleanOrNull(tmp$) : null) != null ? tmp$_0 : false;
    };
  }));
  var indeterminate_0 = defineInlineFunction('Decision Cruncher.jQueryInterface.indeterminate_5laha2$', function ($receiver, newValue) {
    return $receiver.prop('indeterminate', newValue);
  });
  var checkedNotIndeterminate = defineInlineFunction('Decision Cruncher.jQueryInterface.checkedNotIndeterminate_9ufosi$', wrapFunction(function () {
    var toBooleanOrNull = _.org.bh.tools.base.util.toBooleanOrNull_s8jyvk$;
    return function ($receiver) {
      var tmp$, tmp$_0;
      var tmp$_1 = (tmp$_0 = (tmp$ = $receiver.prop('checked')) != null ? toBooleanOrNull(tmp$) : null) != null ? tmp$_0 : false;
      if (tmp$_1) {
        var tmp$_2, tmp$_3;
        tmp$_1 = !((tmp$_3 = (tmp$_2 = $receiver.prop('indeterminate')) != null ? toBooleanOrNull(tmp$_2) : null) != null ? tmp$_3 : false);
      }
      return tmp$_1;
    };
  }));
  var jq = defineInlineFunction('Decision Cruncher.jQueryInterface.jq_1u92oz$', wrapFunction(function () {
    var jq = $;
    return function (cssSelector) {
      return jq(cssSelector.cssSelectorString);
    };
  }));
  var jq_0 = defineInlineFunction('Decision Cruncher.jQueryInterface.jq_3qujwq$', wrapFunction(function () {
    var jq = $;
    return function (cssSelector, context) {
      return jq(cssSelector.cssSelectorString, context);
    };
  }));
  var jq_1 = defineInlineFunction('Decision Cruncher.jQueryInterface.jq_ch0s56$', wrapFunction(function () {
    var jq = $;
    return function (cssSelector, context) {
      return jq(cssSelector.cssSelectorString, context);
    };
  }));
  var jq_2 = defineInlineFunction('Decision Cruncher.jQueryInterface.jq_5358jw$', wrapFunction(function () {
    var jq = $;
    return function (cssSelector, context) {
      var context_0 = jq(context.cssSelectorString);
      return jq(cssSelector.cssSelectorString, context_0);
    };
  }));
  var get_jq = defineInlineFunction('Decision Cruncher.jQueryInterface.get_jq_dzaqfo$', wrapFunction(function () {
    var jq = $;
    return function ($receiver) {
      return jq($receiver.cssSelectorString);
    };
  }));
  var addClass = defineInlineFunction('Decision Cruncher.jQueryInterface.addClass_u9bwps$', function ($receiver, class_0) {
    return $receiver.addClass(class_0.className);
  });
  var removeClass = defineInlineFunction('Decision Cruncher.jQueryInterface.removeClass_u9bwps$', function ($receiver, class_0) {
    return $receiver.removeClass(class_0.className);
  });
  var data = defineInlineFunction('Decision Cruncher.jQueryInterface.data_b7bhqf$', function ($receiver, data) {
    return $receiver.data(data.dataName);
  });
  var data_0 = defineInlineFunction('Decision Cruncher.jQueryInterface.data_l9wfl1$', function ($receiver, data, value) {
    return $receiver.data(data.dataName, value);
  });
  var attr = defineInlineFunction('Decision Cruncher.jQueryInterface.attr_phnjxj$', function ($receiver, attribute) {
    return $receiver.attr(attribute.htmlAttributeName);
  });
  var attr_0 = defineInlineFunction('Decision Cruncher.jQueryInterface.attr_2ul80f$', function ($receiver, attribute, value) {
    return $receiver.attr(attribute.htmlAttributeName, value);
  });
  var attr_1 = defineInlineFunction('Decision Cruncher.jQueryInterface.attr_db73uc$', function ($receiver, attribute, value) {
    return $receiver.attr(attribute.htmlAttributeName, value);
  });
  var attr_2 = defineInlineFunction('Decision Cruncher.jQueryInterface.attr_mpifw4$', function ($receiver, attribute, value) {
    return $receiver.attr(attribute.htmlAttributeName, value);
  });
  var onChangeData = defineInlineFunction('Decision Cruncher.jQueryInterface.onChangeData_x0svav$', function ($receiver, action) {
    $receiver.on('changeData', void 0, action);
  });
  var get_parentElement = defineInlineFunction('Decision Cruncher.jQueryInterface.get_parentElement_s15u7w$', function ($receiver) {
    return $receiver.parentElement;
  });
  function delay(seconds, then) {
    window.setTimeout(then, roundToInt(seconds * 1000));
  }
  function delay_0(seconds, then) {
    window.setTimeout(then, seconds.multiply(Kotlin.Long.fromInt(1000)));
  }
  function indexOfFirstOrNull($receiver, evaluator) {
    var indexOfFirst$result;
    indexOfFirst$break: do {
      var tmp$;
      var index = 0;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        if (evaluator(item)) {
          indexOfFirst$result = index;
          break indexOfFirst$break;
        }
        index = index + 1 | 0;
      }
      indexOfFirst$result = -1;
    }
     while (false);
    var it = indexOfFirst$result;
    return it < 0 ? null : it;
  }
  var get_first = defineInlineFunction('Decision Cruncher.org.bh.tools.base.collections.extensions.get_first_4mqhgw$', wrapFunction(function () {
    var first = Kotlin.kotlin.collections.first_7wnvza$;
    return function ($receiver) {
      return first($receiver);
    };
  }));
  var get_firstOrNull = defineInlineFunction('Decision Cruncher.org.bh.tools.base.collections.extensions.get_firstOrNull_4mqhgw$', wrapFunction(function () {
    var firstOrNull = Kotlin.kotlin.collections.firstOrNull_7wnvza$;
    return function ($receiver) {
      return firstOrNull($receiver);
    };
  }));
  var get_last = defineInlineFunction('Decision Cruncher.org.bh.tools.base.collections.extensions.get_last_4mqhgw$', wrapFunction(function () {
    var last = Kotlin.kotlin.collections.last_7wnvza$;
    return function ($receiver) {
      return last($receiver);
    };
  }));
  var get_lastOrNull = defineInlineFunction('Decision Cruncher.org.bh.tools.base.collections.extensions.get_lastOrNull_4mqhgw$', wrapFunction(function () {
    var lastOrNull = Kotlin.kotlin.collections.lastOrNull_7wnvza$;
    return function ($receiver) {
      return lastOrNull($receiver);
    };
  }));
  var removeFirst = defineInlineFunction('Decision Cruncher.org.bh.tools.base.collections.extensions.removeFirst_vvxzk3$', function ($receiver) {
    return $receiver.removeAt_za3lpa$(0);
  });
  function Triad(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  Triad.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Triad',
    interfaces: []
  };
  Triad.prototype.component1 = function () {
    return this.a;
  };
  Triad.prototype.component2 = function () {
    return this.b;
  };
  Triad.prototype.component3 = function () {
    return this.c;
  };
  Triad.prototype.copy_1l1jfh$ = function (a, b, c) {
    return new Triad(a === void 0 ? this.a : a, b === void 0 ? this.b : b, c === void 0 ? this.c : c);
  };
  Triad.prototype.toString = function () {
    return 'Triad(a=' + Kotlin.toString(this.a) + (', b=' + Kotlin.toString(this.b)) + (', c=' + Kotlin.toString(this.c)) + ')';
  };
  Triad.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.a) | 0;
    result = result * 31 + Kotlin.hashCode(this.b) | 0;
    result = result * 31 + Kotlin.hashCode(this.c) | 0;
    return result;
  };
  Triad.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.a, other.a) && Kotlin.equals(this.b, other.b) && Kotlin.equals(this.c, other.c)))));
  };
  function get_left($receiver) {
    return $receiver.a;
  }
  function get_center($receiver) {
    return $receiver.b;
  }
  function get_right($receiver) {
    return $receiver.c;
  }
  var firstOrNullComparingTriads = defineInlineFunction('Decision Cruncher.org.bh.tools.base.collections.extensions.firstOrNullComparingTriads_csic9r$', wrapFunction(function () {
    var Triad_init = _.org.bh.tools.base.collections.extensions.Triad;
    return function ($receiver, triadComparator) {
      var iterator = $receiver.iterator();
      if (!iterator.hasNext())
        return null;
      var previousCenter = iterator.next();
      if (!iterator.hasNext())
        return null;
      var previousRight = iterator.next();
      while (iterator.hasNext()) {
        var left = previousCenter;
        var center = previousRight;
        var right = iterator.next();
        var triad = new Triad_init(left, center, right);
        if (triadComparator(triad)) {
          return triad;
        }
         else {
          previousCenter = center;
          previousRight = right;
        }
      }
      return null;
    };
  }));
  var firstOrNullComparingPairs = defineInlineFunction('Decision Cruncher.org.bh.tools.base.collections.extensions.firstOrNullComparingPairs_cf0iqu$', wrapFunction(function () {
    var Pair_init = Kotlin.kotlin.Pair;
    return function ($receiver, pairComparator) {
      var iterator = $receiver.iterator();
      if (!iterator.hasNext())
        return null;
      var previousRight = iterator.next();
      while (iterator.hasNext()) {
        var left = previousRight;
        var right = iterator.next();
        var pair = new Pair_init(left, right);
        if (pairComparator(pair)) {
          return pair;
        }
         else {
          previousRight = right;
        }
      }
      return null;
    };
  }));
  function reduceTo($receiver, startingValue, reducer) {
    var runningValue = {v: startingValue};
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      runningValue.v = reducer(runningValue.v, element);
    }
    return runningValue.v;
  }
  function reduceInto($receiver, startingValue, reducer) {
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      reducer(startingValue, element);
    }
    return startingValue;
  }
  var safeReduce = defineInlineFunction('Decision Cruncher.org.bh.tools.base.collections.extensions.safeReduce_lrrcxv$', wrapFunction(function () {
    var count = Kotlin.kotlin.collections.count_7wnvza$;
    var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
    return function ($receiver, operation) {
      var tmp$;
      if (count($receiver) < 1)
        tmp$ = null;
      else {
        var iterator = $receiver.iterator();
        if (!iterator.hasNext())
          throw UnsupportedOperationException_init("Empty collection can't be reduced.");
        var accumulator = iterator.next();
        while (iterator.hasNext()) {
          accumulator = operation(accumulator, iterator.next());
        }
        tmp$ = accumulator;
      }
      return tmp$;
    };
  }));
  var safeReduce_0 = defineInlineFunction('Decision Cruncher.org.bh.tools.base.collections.extensions.safeReduce_w5eg7r$', wrapFunction(function () {
    var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
    return function ($receiver, operation) {
      var tmp$;
      if ($receiver.isEmpty())
        tmp$ = null;
      else {
        var iterator = $receiver.iterator();
        if (!iterator.hasNext())
          throw UnsupportedOperationException_init("Empty collection can't be reduced.");
        var accumulator = iterator.next();
        while (iterator.hasNext()) {
          accumulator = operation(accumulator, iterator.next());
        }
        tmp$ = accumulator;
      }
      return tmp$;
    };
  }));
  function toString_0($receiver, prefix, glue, suffix) {
    if (prefix === void 0)
      prefix = '';
    if (suffix === void 0)
      suffix = '';
    return joinToString($receiver, glue, prefix, suffix);
  }
  var nonEmpty = defineInlineFunction('Decision Cruncher.org.bh.tools.base.collections.extensions.nonEmpty_b5o7sk$', wrapFunction(function () {
    var count = Kotlin.kotlin.collections.count_7wnvza$;
    return function ($receiver) {
      return count($receiver) > 0 ? $receiver : null;
    };
  }));
  var get_nonEmpty = defineInlineFunction('Decision Cruncher.org.bh.tools.base.collections.extensions.get_nonEmpty_yfwuwe$', wrapFunction(function () {
    var count = Kotlin.kotlin.collections.count_7wnvza$;
    return function ($receiver) {
      return count($receiver) > 0 ? $receiver : null;
    };
  }));
  function Observing(initialValue, shouldSet, willSet, didSet) {
    if (shouldSet === void 0)
      shouldSet = NullSSB();
    if (willSet === void 0)
      willSet = NullWSB();
    if (didSet === void 0)
      didSet = NullDSB();
    this.initialValue = initialValue;
    this.shouldSet = shouldSet;
    this.willSet = willSet;
    this.didSet = didSet;
    this.syncLock = new Any();
  }
  Observing.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return this.initialValue;
  };
  Observing.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    if (this.shouldSet(this.initialValue, value)) {
      var oldValue = this.initialValue;
      this.willSet(oldValue, value);
      this.initialValue = value;
      this.didSet(oldValue, value);
    }
  };
  Observing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Observing',
    interfaces: [ReadWriteProperty]
  };
  function NullWSB$lambda(f, f_0) {
    return Unit;
  }
  function NullWSB() {
    return NullWSB$lambda;
  }
  function NullSSB$lambda(f, f_0) {
    return true;
  }
  function NullSSB() {
    return NullSSB$lambda;
  }
  function NullDSB$lambda(f, f_0) {
    return Unit;
  }
  function NullDSB() {
    return NullDSB$lambda;
  }
  function observing$ObjectLiteral(closure$shouldSet, closure$willSet, closure$didSet, initialValue) {
    this.closure$shouldSet = closure$shouldSet;
    this.closure$willSet = closure$willSet;
    this.closure$didSet = closure$didSet;
    ObservableProperty.call(this, initialValue);
  }
  observing$ObjectLiteral.prototype.beforeChange_jxtfl0$ = function (property, oldValue, newValue) {
    if (this.closure$shouldSet(oldValue, newValue)) {
      this.closure$willSet(oldValue, newValue);
      return true;
    }
     else {
      return false;
    }
  };
  observing$ObjectLiteral.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$didSet(oldValue, newValue);
  };
  observing$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ObservableProperty]
  };
  function observing(initialValue, willSet, shouldSet, didSet) {
    if (willSet === void 0)
      willSet = NullWSB();
    if (shouldSet === void 0)
      shouldSet = NullSSB();
    if (didSet === void 0)
      didSet = NullDSB();
    return new observing$ObjectLiteral(shouldSet, willSet, didSet, initialValue);
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function JsMap(values, valueClass) {
    this.valueClass_0 = valueClass;
    var destination = ArrayList_init(collectionSizeOrDefault(values, 10));
    var tmp$;
    tmp$ = values.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(toString(item.first), item.second));
    }
    this.internal_0 = json(copyToArray(destination).slice());
  }
  JsMap.prototype.toString = function () {
    return this.internal_0.toString();
  };
  JsMap.prototype.get_11rb$ = function (key) {
    var tmp$, tmp$_0;
    tmp$ = this.internal_0[toString(key)];
    if (tmp$ == null) {
      return undefined;
    }
    var v = tmp$;
    return (tmp$_0 = as_(v, this.valueClass_0)) != null ? tmp$_0 : undefined;
  };
  JsMap.prototype.set_y77fpw$ = function (key, value) {
    this.internal_0[toString(key)] = value;
  };
  JsMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsMap',
    interfaces: []
  };
  function as_($receiver, targetClass) {
    var tmp$;
    return targetClass.isInstance_s8jyv4$($receiver) ? Kotlin.isType(tmp$ = $receiver, Any) ? tmp$ : throwCCE() : null;
  }
  var toString_1 = defineInlineFunction('Decision Cruncher.org.bh.tools.base.jsShim.toString_798l30$', function ($receiver, base) {
    return $receiver.toString(base);
  });
  var toString_2 = defineInlineFunction('Decision Cruncher.org.bh.tools.base.jsShim.toString_di2vk2$', function ($receiver, base) {
    return $receiver.toString(base);
  });
  var toString_3 = defineInlineFunction('Decision Cruncher.org.bh.tools.base.jsShim.toString_dqglrj$', function ($receiver, base) {
    return $receiver.toString(base);
  });
  var toString_4 = defineInlineFunction('Decision Cruncher.org.bh.tools.base.jsShim.toString_if0zpk$', function ($receiver, base) {
    return $receiver.toString(base);
  });
  var replace = defineInlineFunction('Decision Cruncher.org.bh.tools.base.jsShim.replace_he2ph6$', function ($receiver, regExp, replacer) {
    return $receiver.replace(regExp, replacer);
  });
  function toBase($receiver, baseCharacters) {
    var result = '';
    var x = $receiver;
    var b = baseCharacters.length;
    do {
      result = x.modulo(Kotlin.Long.fromInt(b)).toString() + result;
      x = x.div(Kotlin.Long.fromInt(b));
    }
     while (x.compareTo_11rb$(Kotlin.Long.fromInt(0)) > 0);
    return result;
  }
  var Math_0 = Math;
  function fromBase($receiver, baseCharacters) {
    var tmp$;
    var result = Kotlin.Long.ZERO;
    var position = $receiver.length;
    tmp$ = iterator($receiver);
    while (tmp$.hasNext()) {
      var ch = unboxChar(tmp$.next());
      var value = indexOf(baseCharacters, ch);
      var tmp$_0 = result;
      var $receiver_0 = baseCharacters.length;
      var n = (position = position - 1 | 0, position);
      result = tmp$_0.add(Kotlin.Long.fromNumber(value * Math_0.pow($receiver_0, n)));
    }
    return result;
  }
  function isUpperCase($receiver) {
    return unboxChar(String.fromCharCode($receiver).toLowerCase().charCodeAt(0)) !== $receiver;
  }
  function isLowerCase($receiver) {
    return unboxChar(String.fromCharCode($receiver).toUpperCase().charCodeAt(0)) !== $receiver;
  }
  function toAbbreviation($receiver, delimiter) {
    if (delimiter === void 0)
      delimiter = '';
    var ret = new StringBuilder();
    var shouldAdd = {v: false};
    var tmp$;
    tmp$ = iterator($receiver);
    while (tmp$.hasNext()) {
      var element = unboxChar(tmp$.next());
      var c = toBoxedChar(element);
      if (isWhitespace(unboxChar(c))) {
        shouldAdd.v = true;
      }
       else if (shouldAdd.v || isUpperCase(unboxChar(c))) {
        var $receiver_0 = unboxChar(c);
        plusAssign(ret, plus_0(toBoxedChar(unboxChar(String.fromCharCode($receiver_0).toUpperCase().charCodeAt(0))), delimiter));
        shouldAdd.v = false;
      }
    }
    return ret;
  }
  function plusAssign($receiver, rhs) {
    $receiver.append_s8jyv4$(rhs);
  }
  function plus($receiver, rhs) {
    return $receiver.toString() + rhs;
  }
  function plus_0($receiver, rhs) {
    return concat($receiver, rhs);
  }
  function concat(lhs, rhs) {
    if (typeof lhs === 'string') {
      var casted = lhs;
      return casted + toString(rhs);
    }
     else if (Kotlin.isType(lhs, StringBuilder)) {
      var casted_0 = lhs;
      return casted_0.append_gw00v9$(rhs);
    }
     else {
      return (new StringBuilder()).append_s8jyv4$(lhs).append_gw00v9$(rhs);
    }
  }
  function containsIgnoreCase($receiver, cs) {
    return contains($receiver.toString().toLowerCase(), cs.toString().toLowerCase());
  }
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  function differingCharacters($receiver, other) {
    if (equals($receiver, other)) {
      return emptyList();
    }
    var endList = ArrayList_init();
    var a = $receiver.length;
    var b = other.length;
    var tmp$;
    tmp$ = until(0, Math_0.min(a, b)).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var thisChar = $receiver.charCodeAt(element);
      var otherChar = other.charCodeAt(element);
      if (thisChar !== otherChar) {
        var element_0 = new DifferingCharacter(element, thisChar, otherChar);
        endList.add_11rb$(element_0);
      }
    }
    if ($receiver.length > other.length) {
      var offset = other.length;
      var endIndex;
      endIndex = $receiver.length;
      var $receiver_0 = Kotlin.subSequence($receiver, offset, endIndex).toString();
      var destination = ArrayList_init($receiver_0.length);
      var tmp$_0, tmp$_0_0;
      var index = 0;
      tmp$_0 = iterator($receiver_0);
      while (tmp$_0.hasNext()) {
        var item = unboxChar(tmp$_0.next());
        destination.add_11rb$(new DifferingCharacter((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0) + offset | 0, unboxChar(toBoxedChar(item)), null));
      }
      addAll(endList, destination);
    }
     else if (other.length > $receiver.length) {
      var offset_0 = $receiver.length;
      var endIndex_0;
      endIndex_0 = other.length;
      var $receiver_1 = Kotlin.subSequence(other, offset_0, endIndex_0).toString();
      var destination_0 = ArrayList_init($receiver_1.length);
      var tmp$_1, tmp$_0_1;
      var index_0 = 0;
      tmp$_1 = iterator($receiver_1);
      while (tmp$_1.hasNext()) {
        var item_0 = unboxChar(tmp$_1.next());
        destination_0.add_11rb$(new DifferingCharacter((tmp$_0_1 = index_0, index_0 = tmp$_0_1 + 1 | 0, tmp$_0_1) + offset_0 | 0, null, unboxChar(toBoxedChar(item_0))));
      }
      addAll(endList, destination_0);
    }
    return endList;
  }
  function DifferingCharacter(index, left, right) {
    this.index = index;
    this.left = toBoxedChar(left);
    this.right = toBoxedChar(right);
  }
  DifferingCharacter.prototype.toString = function () {
    var sb = new StringBuilder('{index: ' + this.index);
    if (unboxChar(this.left) != null) {
      var tmp$;
      plusAssign(sb, ", left: '" + ((tmp$ = unboxChar(this.left)) === null ? null : String.fromCharCode(tmp$)) + "'");
    }
    if (unboxChar(this.right) != null) {
      var tmp$_0;
      plusAssign(sb, ", right: '" + ((tmp$_0 = unboxChar(this.right)) === null ? null : String.fromCharCode(tmp$_0)) + "'");
    }
    return plus(sb, '}');
  };
  DifferingCharacter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DifferingCharacter',
    interfaces: []
  };
  DifferingCharacter.prototype.component1 = function () {
    return this.index;
  };
  DifferingCharacter.prototype.component2 = function () {
    return this.left;
  };
  DifferingCharacter.prototype.component3 = function () {
    return this.right;
  };
  DifferingCharacter.prototype.copy_1t7jmm$ = function (index, left, right) {
    return new DifferingCharacter(index === void 0 ? this.index : index, left === void 0 ? this.left : left, right === void 0 ? this.right : right);
  };
  DifferingCharacter.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    result = result * 31 + Kotlin.hashCode(this.left) | 0;
    result = result * 31 + Kotlin.hashCode(this.right) | 0;
    return result;
  };
  DifferingCharacter.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.index, other.index) && Kotlin.equals(this.left, other.left) && Kotlin.equals(this.right, other.right)))));
  };
  var isNeitherNullNorEmpty = defineInlineFunction('Decision Cruncher.org.bh.tools.base.strings.isNeitherNullNorEmpty_5cw0du$', function ($receiver) {
    return !($receiver == null || $receiver.length === 0);
  });
  var isNeitherNullNorBlank = defineInlineFunction('Decision Cruncher.org.bh.tools.base.strings.isNeitherNullNorBlank_5cw0du$', wrapFunction(function () {
    var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
    return function ($receiver) {
      return !($receiver == null || isBlank($receiver));
    };
  }));
  function FiniteAmountSummary(exactAmount) {
    FiniteAmountSummary$Companion_getInstance();
    this.exactAmount = exactAmount;
  }
  function FiniteAmountSummary$all(maximumPossibleAMount) {
    FiniteAmountSummary.call(this, maximumPossibleAMount);
  }
  FiniteAmountSummary$all.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'all',
    interfaces: [FiniteAmountSummary]
  };
  function FiniteAmountSummary$some(exactAmount, maximumPossibleAmount) {
    FiniteAmountSummary.call(this, exactAmount);
    this.maximumPossibleAmount = maximumPossibleAmount;
  }
  FiniteAmountSummary$some.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'some',
    interfaces: [FiniteAmountSummary]
  };
  function FiniteAmountSummary$none() {
    FiniteAmountSummary.call(this, null);
  }
  FiniteAmountSummary$none.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'none',
    interfaces: [FiniteAmountSummary]
  };
  function FiniteAmountSummary$Companion() {
    FiniteAmountSummary$Companion_instance = this;
  }
  FiniteAmountSummary$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FiniteAmountSummary$Companion_instance = null;
  function FiniteAmountSummary$Companion_getInstance() {
    if (FiniteAmountSummary$Companion_instance === null) {
      new FiniteAmountSummary$Companion();
    }
    return FiniteAmountSummary$Companion_instance;
  }
  FiniteAmountSummary.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FiniteAmountSummary',
    interfaces: []
  };
  function invoke($receiver, exactAmount, maximumPossibleAmount) {
    var tmp$;
    if (equals(exactAmount, maximumPossibleAmount))
      tmp$ = new FiniteAmountSummary$all(maximumPossibleAmount);
    else if (equals(exactAmount, 0))
      tmp$ = new FiniteAmountSummary$none();
    else
      tmp$ = new FiniteAmountSummary$some(exactAmount, maximumPossibleAmount);
    return tmp$;
  }
  function invoke_0($receiver, approximateAmount, maximumPossibleAmount) {
    var tmp$;
    if (approximateAmount === maximumPossibleAmount)
      tmp$ = new FiniteAmountSummary$all(maximumPossibleAmount);
    else if (approximateAmount === 0.0)
      tmp$ = new FiniteAmountSummary$none();
    else
      tmp$ = new FiniteAmountSummary$some(roundToInt(approximateAmount), maximumPossibleAmount);
    return tmp$;
  }
  function Ternary(name, ordinal, asBoolean) {
    Enum.call(this);
    this.asBoolean = asBoolean;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Ternary_initFields() {
    Ternary_initFields = function () {
    };
    Ternary$true_instance = new Ternary('true', 0, true);
    Ternary$false_instance = new Ternary('false', 1, false);
    Ternary$indeterminate_instance = new Ternary('indeterminate', 2, null);
    Ternary$Companion_getInstance();
  }
  var Ternary$true_instance;
  function Ternary$true_getInstance() {
    Ternary_initFields();
    return Ternary$true_instance;
  }
  var Ternary$false_instance;
  function Ternary$false_getInstance() {
    Ternary_initFields();
    return Ternary$false_instance;
  }
  var Ternary$indeterminate_instance;
  function Ternary$indeterminate_getInstance() {
    Ternary_initFields();
    return Ternary$indeterminate_instance;
  }
  function Ternary$Companion() {
    Ternary$Companion_instance = this;
  }
  Ternary$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Ternary$Companion_instance = null;
  function Ternary$Companion_getInstance() {
    Ternary_initFields();
    if (Ternary$Companion_instance === null) {
      new Ternary$Companion();
    }
    return Ternary$Companion_instance;
  }
  Ternary.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ternary',
    interfaces: [Enum]
  };
  function Ternary$values() {
    return [Ternary$true_getInstance(), Ternary$false_getInstance(), Ternary$indeterminate_getInstance()];
  }
  Ternary.values = Ternary$values;
  function Ternary$valueOf(name) {
    switch (name) {
      case 'true':
        return Ternary$true_getInstance();
      case 'false':
        return Ternary$false_getInstance();
      case 'indeterminate':
        return Ternary$indeterminate_getInstance();
      default:throwISE('No enum constant org.bh.tools.base.struct.Ternary.' + name);
    }
  }
  Ternary.valueOf_61zpoe$ = Ternary$valueOf;
  function invoke_1($receiver, fromBoolean) {
    if (fromBoolean === true)
      return Ternary$true_getInstance();
    else if (fromBoolean === false)
      return Ternary$false_getInstance();
    else
      return Kotlin.noWhenBranchMatched();
  }
  function invoke_2($receiver, fromBoolean) {
    if (fromBoolean === true)
      return Ternary$true_getInstance();
    else if (fromBoolean === false)
      return Ternary$false_getInstance();
    else if (fromBoolean == null)
      return Ternary$indeterminate_getInstance();
    else
      return Kotlin.noWhenBranchMatched();
  }
  function toBooleanOrNull($receiver) {
    if (typeof $receiver === 'boolean')
      return $receiver;
    else if (typeof $receiver === 'string') {
      if ($receiver.length === 0)
        return null;
      else {
        switch ($receiver.toLowerCase()) {
          case 'true':
          case 't':
          case 'yes':
          case 'y':
          case '1':
          case 'on':
            return true;
          case 'false':
          case 'f':
          case 'no':
          case 'n':
          case '0':
          case 'off':
            return false;
          default:return null;
        }
      }
    }
     else if (typeof $receiver === 'number') {
      switch ($receiver) {
        case 0:
          return false;
        case 1:
          return true;
        default:return null;
      }
    }
     else
      return null;
  }
  function deepCopy($receiver) {
    return JSON.parse(JSON.stringify($receiver));
  }
  function safeTry(closure) {
    try {
      return closure();
    }
     catch (_) {
      if (Kotlin.isType(_, Throwable)) {
        return null;
      }
       else
        throw _;
    }
  }
  function IdManager() {
    IdManager_instance = this;
    this.lastShortIdBasis_0 = Kotlin.Long.ZERO;
  }
  IdManager.prototype.generateNewShortId = function () {
    var currentShortIdBasis = this.lastShortIdBasis_0;
    this.lastShortIdBasis_0 = this.lastShortIdBasis_0.add(Kotlin.Long.fromInt(1));
    return toBase(currentShortIdBasis, shortIds_v1);
  };
  IdManager.prototype.registerEncounteredShortId_61zpoe$ = function (encounteredShortId) {
    var a = this.lastShortIdBasis_0;
    var b = fromBase(encounteredShortId, shortIds_v1);
    this.lastShortIdBasis_0 = a.compareTo_11rb$(b) >= 0 ? a : b;
  };
  IdManager.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'IdManager',
    interfaces: []
  };
  var IdManager_instance = null;
  function IdManager_getInstance() {
    if (IdManager_instance === null) {
      new IdManager();
    }
    return IdManager_instance;
  }
  var shortIds_v1;
  var alsoLog = defineInlineFunction('Decision Cruncher.org.bh.tools.io.logging.alsoLog_vxumlc$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var getCallableRef = Kotlin.getCallableRef;
    return function ($receiver, message, logger) {
      if (logger === void 0)
        logger = getCallableRef('consoleLogString', function (message) {
          console.log(message);
          return Unit;
        });
      logger(message + ('\t' + $receiver));
      return $receiver;
    };
  }));
  var log = defineInlineFunction('Decision Cruncher.org.bh.tools.io.logging.log_hyc7mn$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var getCallableRef = Kotlin.getCallableRef;
    return function (message, logger) {
      if (logger === void 0)
        logger = getCallableRef('consoleLogString', function (message) {
          console.log(message);
          return Unit;
        });
      logger(message);
    };
  }));
  var log_0 = defineInlineFunction('Decision Cruncher.org.bh.tools.io.logging.log_7uhc0p$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var getCallableRef = Kotlin.getCallableRef;
    return function (object, logger) {
      if (logger === void 0)
        logger = getCallableRef('consoleLog', function (object) {
          console.log(object);
          return Unit;
        });
      logger(object);
    };
  }));
  var consoleLogString = defineInlineFunction('Decision Cruncher.org.bh.tools.io.logging.consoleLogString_61zpoe$', function (message) {
    console.log(message);
  });
  var consoleLog = defineInlineFunction('Decision Cruncher.org.bh.tools.io.logging.consoleLog_mh5how$', function (object) {
    console.log(object);
  });
  function HttpRequest(url, parameters) {
    if (parameters === void 0)
      parameters = HttpRequest$RequestParameters$Companion_getInstance().empty;
    this.url = url;
    this.parameters = parameters;
  }
  HttpRequest.prototype.get_ht4p2j$ = function (asynchronous, responseListener) {
    if (asynchronous === void 0)
      asynchronous = true;
    this.send_yew6y6$('GET', void 0, asynchronous, responseListener);
  };
  HttpRequest.prototype.post_svp6kg$ = function (body, asynchronous, responseListener) {
    if (body === void 0)
      body = null;
    if (asynchronous === void 0)
      asynchronous = true;
    this.send_yew6y6$('POST', body, asynchronous, responseListener);
  };
  function HttpRequest$send$lambda(closure$bestResponseSoFar, closure$request, closure$responseListener) {
    return function (it) {
      closure$bestResponseSoFar.v = mostInformative(closure$bestResponseSoFar.v, HttpResponse_init(closure$request));
      if (closure$request.readyState === XMLHttpRequest.DONE) {
        closure$responseListener(ensureNotNull(closure$bestResponseSoFar.v));
      }
      return Unit;
    };
  }
  HttpRequest.prototype.send_yew6y6$ = function (method, body, asynchronous, responseListener) {
    if (body === void 0)
      body = null;
    if (asynchronous === void 0)
      asynchronous = true;
    var request = new XMLHttpRequest();
    var bestResponseSoFar = {v: null};
    request.onreadystatechange = HttpRequest$send$lambda(bestResponseSoFar, request, responseListener);
    var requestUrlString = this.generateFullRequestUrlString_0();
    var actualBody = body != null ? body : this.generatePostBody_0();
    var message = 'Will send ' + method + ' request:';
    console.log(message);
    console.log(requestUrlString);
    console.log(actualBody);
    request.open(method, requestUrlString, asynchronous);
    var tmp$;
    tmp$ = this.parameters.justHeaders.allParameters.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      request.setRequestHeader(element.key, element.valueAsRequestString);
    }
    var message_0 = request.getAllResponseHeaders();
    console.log(message_0);
    try {
      request.send(actualBody);
    }
     catch (error) {
      if (Kotlin.isType(error, Throwable)) {
        responseListener(new HttpResponse(error.toString(), -1 | 0, 'Failed to send request', null));
      }
       else
        throw error;
    }
  };
  HttpRequest.prototype.generatePostBody_0 = function () {
    return jsonString(this.parameters.justPostBodyJson.toRequestJson());
  };
  HttpRequest.prototype.generateFullRequestUrlString_0 = function () {
    return this.generateFullRequestUrl_0().toString();
  };
  HttpRequest.prototype.generateFullRequestUrl_0 = function () {
    return withSearchParams(this.url, this.parameters.justUrlParameters);
  };
  function HttpRequest$RequestParameters(allParameters) {
    HttpRequest$RequestParameters$Companion_getInstance();
    this.allParameters = allParameters;
  }
  function HttpRequest$RequestParameters$toRequestJson$lambda(requestJson, parameter) {
    requestJson[parameter.key] = parameter.valueAsRequestString;
    return requestJson;
  }
  HttpRequest$RequestParameters.prototype.toRequestJson = function () {
    if (this.allParameters.isEmpty()) {
      return json([]);
    }
     else {
      return reduceTo(this.allParameters, json([]), HttpRequest$RequestParameters$toRequestJson$lambda);
    }
  };
  function HttpRequest$RequestParameters$toRequestUriParameterString$lambda(it) {
    return it.key + '=' + it.valueAsRequestString;
  }
  HttpRequest$RequestParameters.prototype.toRequestUriParameterString = function () {
    return '?' + joinToString(this.allParameters, '&', void 0, void 0, void 0, void 0, HttpRequest$RequestParameters$toRequestUriParameterString$lambda);
  };
  Object.defineProperty(HttpRequest$RequestParameters.prototype, 'justUrlParameters', {
    get: function () {
      var $receiver = this.allParameters;
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.usage === HttpRequest$RequestParameter$Usage$urlParameter_getInstance())
          destination.add_11rb$(element);
      }
      return new HttpRequest$RequestParameters(destination);
    }
  });
  Object.defineProperty(HttpRequest$RequestParameters.prototype, 'justPostBodyJson', {
    get: function () {
      var $receiver = this.allParameters;
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.usage === HttpRequest$RequestParameter$Usage$postBodyJson_getInstance())
          destination.add_11rb$(element);
      }
      return new HttpRequest$RequestParameters(destination);
    }
  });
  Object.defineProperty(HttpRequest$RequestParameters.prototype, 'justHeaders', {
    get: function () {
      var $receiver = this.allParameters;
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.usage === HttpRequest$RequestParameter$Usage$header_getInstance())
          destination.add_11rb$(element);
      }
      return new HttpRequest$RequestParameters(destination);
    }
  });
  function HttpRequest$RequestParameters$Companion() {
    HttpRequest$RequestParameters$Companion_instance = this;
    this.empty = new HttpRequest$RequestParameters(emptyList());
  }
  HttpRequest$RequestParameters$Companion.prototype.invoke_bgp2as$ = function (allParameters) {
    return new HttpRequest$RequestParameters(toList_0(allParameters));
  };
  HttpRequest$RequestParameters$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var HttpRequest$RequestParameters$Companion_instance = null;
  function HttpRequest$RequestParameters$Companion_getInstance() {
    if (HttpRequest$RequestParameters$Companion_instance === null) {
      new HttpRequest$RequestParameters$Companion();
    }
    return HttpRequest$RequestParameters$Companion_instance;
  }
  HttpRequest$RequestParameters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RequestParameters',
    interfaces: []
  };
  function HttpRequest$RequestParameter(key, value, usage, requestValueGenerator) {
    this.key = key;
    this.value = value;
    this.usage = usage;
    this.valueAsRequestString_3t57w8$_0 = lazy(HttpRequest$RequestParameter$valueAsRequestString$lambda(requestValueGenerator, this));
  }
  Object.defineProperty(HttpRequest$RequestParameter.prototype, 'valueAsRequestString', {
    get: function () {
      return this.valueAsRequestString_3t57w8$_0.value;
    }
  });
  function HttpRequest$RequestParameter$Usage(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function HttpRequest$RequestParameter$Usage_initFields() {
    HttpRequest$RequestParameter$Usage_initFields = function () {
    };
    HttpRequest$RequestParameter$Usage$urlParameter_instance = new HttpRequest$RequestParameter$Usage('urlParameter', 0);
    HttpRequest$RequestParameter$Usage$postBodyJson_instance = new HttpRequest$RequestParameter$Usage('postBodyJson', 1);
    HttpRequest$RequestParameter$Usage$header_instance = new HttpRequest$RequestParameter$Usage('header', 2);
  }
  var HttpRequest$RequestParameter$Usage$urlParameter_instance;
  function HttpRequest$RequestParameter$Usage$urlParameter_getInstance() {
    HttpRequest$RequestParameter$Usage_initFields();
    return HttpRequest$RequestParameter$Usage$urlParameter_instance;
  }
  var HttpRequest$RequestParameter$Usage$postBodyJson_instance;
  function HttpRequest$RequestParameter$Usage$postBodyJson_getInstance() {
    HttpRequest$RequestParameter$Usage_initFields();
    return HttpRequest$RequestParameter$Usage$postBodyJson_instance;
  }
  var HttpRequest$RequestParameter$Usage$header_instance;
  function HttpRequest$RequestParameter$Usage$header_getInstance() {
    HttpRequest$RequestParameter$Usage_initFields();
    return HttpRequest$RequestParameter$Usage$header_instance;
  }
  HttpRequest$RequestParameter$Usage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Usage',
    interfaces: [Enum]
  };
  function HttpRequest$RequestParameter$Usage$values() {
    return [HttpRequest$RequestParameter$Usage$urlParameter_getInstance(), HttpRequest$RequestParameter$Usage$postBodyJson_getInstance(), HttpRequest$RequestParameter$Usage$header_getInstance()];
  }
  HttpRequest$RequestParameter$Usage.values = HttpRequest$RequestParameter$Usage$values;
  function HttpRequest$RequestParameter$Usage$valueOf(name) {
    switch (name) {
      case 'urlParameter':
        return HttpRequest$RequestParameter$Usage$urlParameter_getInstance();
      case 'postBodyJson':
        return HttpRequest$RequestParameter$Usage$postBodyJson_getInstance();
      case 'header':
        return HttpRequest$RequestParameter$Usage$header_getInstance();
      default:throwISE('No enum constant org.bh.tools.io.net.HttpRequest.RequestParameter.Usage.' + name);
    }
  }
  HttpRequest$RequestParameter$Usage.valueOf_61zpoe$ = HttpRequest$RequestParameter$Usage$valueOf;
  function HttpRequest$RequestParameter$genericHeader(key, value) {
    HttpRequest$RequestParameter.call(this, key, value, HttpRequest$RequestParameter$Usage$header_getInstance(), HttpRequest$RequestParameter$HttpRequest$RequestParameter$genericHeader_init$lambda);
  }
  function HttpRequest$RequestParameter$HttpRequest$RequestParameter$genericHeader_init$lambda(it) {
    return it;
  }
  HttpRequest$RequestParameter$genericHeader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'genericHeader',
    interfaces: [HttpRequest$RequestParameter]
  };
  function HttpRequest$RequestParameter$valueAsRequestString$lambda(closure$requestValueGenerator, this$RequestParameter) {
    return function () {
      return closure$requestValueGenerator(this$RequestParameter.value);
    };
  }
  HttpRequest$RequestParameter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RequestParameter',
    interfaces: []
  };
  HttpRequest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpRequest',
    interfaces: []
  };
  function HttpRequest_init(urlString, parameters, $this) {
    if (parameters === void 0)
      parameters = HttpRequest$RequestParameters$Companion_getInstance().empty;
    $this = $this || Object.create(HttpRequest.prototype);
    HttpRequest.call($this, new URL(urlString), parameters);
    return $this;
  }
  function withSearchParams($receiver, searchParams) {
    if (searchParams.allParameters.isEmpty()) {
      return $receiver;
    }
     else {
      var copy_0 = copy($receiver);
      copy_0.search = asSearchString(searchParams);
      return copy_0;
    }
  }
  function asSearchString$lambda(it) {
    return get_urlEncoded(it.key) + '=' + get_urlEncoded(toString(it.value));
  }
  function asSearchString($receiver) {
    return '?' + joinToString($receiver.allParameters, '&', void 0, void 0, void 0, void 0, asSearchString$lambda);
  }
  function send($receiver, method, url, headers, async, username, password) {
    if (headers === void 0)
      headers = emptyMap();
    if (username === void 0)
      username = null;
    if (password === void 0)
      password = null;
    $receiver.open(method, url, async, username, password);
    var tmp$;
    tmp$ = headers.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver.setRequestHeader(element.key, element.value);
    }
  }
  function HttpResponse(text, status, statusText, interactionStage) {
    this.text = text;
    this.status = status;
    this.statusText = statusText;
    this.interactionStage = interactionStage;
  }
  Object.defineProperty(HttpResponse.prototype, 'wasSuccessful', {
    get: function () {
      return this.status === toShort(200);
    }
  });
  function HttpResponse$InteractionStage(name, ordinal, xmlHttpRequestReadyState) {
    Enum.call(this);
    this.xmlHttpRequestReadyState = xmlHttpRequestReadyState;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function HttpResponse$InteractionStage_initFields() {
    HttpResponse$InteractionStage_initFields = function () {
    };
    HttpResponse$InteractionStage$notStarted_instance = new HttpResponse$InteractionStage('notStarted', 0, XMLHttpRequest.UNSENT);
    HttpResponse$InteractionStage$opened_instance = new HttpResponse$InteractionStage('opened', 1, XMLHttpRequest.OPENED);
    HttpResponse$InteractionStage$headersReceived_instance = new HttpResponse$InteractionStage('headersReceived', 2, XMLHttpRequest.HEADERS_RECEIVED);
    HttpResponse$InteractionStage$loading_instance = new HttpResponse$InteractionStage('loading', 3, XMLHttpRequest.LOADING);
    HttpResponse$InteractionStage$completed_instance = new HttpResponse$InteractionStage('completed', 4, XMLHttpRequest.DONE);
    HttpResponse$InteractionStage$Companion_getInstance();
  }
  var HttpResponse$InteractionStage$notStarted_instance;
  function HttpResponse$InteractionStage$notStarted_getInstance() {
    HttpResponse$InteractionStage_initFields();
    return HttpResponse$InteractionStage$notStarted_instance;
  }
  var HttpResponse$InteractionStage$opened_instance;
  function HttpResponse$InteractionStage$opened_getInstance() {
    HttpResponse$InteractionStage_initFields();
    return HttpResponse$InteractionStage$opened_instance;
  }
  var HttpResponse$InteractionStage$headersReceived_instance;
  function HttpResponse$InteractionStage$headersReceived_getInstance() {
    HttpResponse$InteractionStage_initFields();
    return HttpResponse$InteractionStage$headersReceived_instance;
  }
  var HttpResponse$InteractionStage$loading_instance;
  function HttpResponse$InteractionStage$loading_getInstance() {
    HttpResponse$InteractionStage_initFields();
    return HttpResponse$InteractionStage$loading_instance;
  }
  var HttpResponse$InteractionStage$completed_instance;
  function HttpResponse$InteractionStage$completed_getInstance() {
    HttpResponse$InteractionStage_initFields();
    return HttpResponse$InteractionStage$completed_instance;
  }
  function HttpResponse$InteractionStage$Companion() {
    HttpResponse$InteractionStage$Companion_instance = this;
  }
  HttpResponse$InteractionStage$Companion.prototype.invoke_mq22fl$ = function (xmlHttpRequestReadyState) {
    var $receiver = HttpResponse$InteractionStage$values();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (element.xmlHttpRequestReadyState === xmlHttpRequestReadyState) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  };
  HttpResponse$InteractionStage$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var HttpResponse$InteractionStage$Companion_instance = null;
  function HttpResponse$InteractionStage$Companion_getInstance() {
    HttpResponse$InteractionStage_initFields();
    if (HttpResponse$InteractionStage$Companion_instance === null) {
      new HttpResponse$InteractionStage$Companion();
    }
    return HttpResponse$InteractionStage$Companion_instance;
  }
  HttpResponse$InteractionStage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InteractionStage',
    interfaces: [Enum]
  };
  function HttpResponse$InteractionStage$values() {
    return [HttpResponse$InteractionStage$notStarted_getInstance(), HttpResponse$InteractionStage$opened_getInstance(), HttpResponse$InteractionStage$headersReceived_getInstance(), HttpResponse$InteractionStage$loading_getInstance(), HttpResponse$InteractionStage$completed_getInstance()];
  }
  HttpResponse$InteractionStage.values = HttpResponse$InteractionStage$values;
  function HttpResponse$InteractionStage$valueOf(name) {
    switch (name) {
      case 'notStarted':
        return HttpResponse$InteractionStage$notStarted_getInstance();
      case 'opened':
        return HttpResponse$InteractionStage$opened_getInstance();
      case 'headersReceived':
        return HttpResponse$InteractionStage$headersReceived_getInstance();
      case 'loading':
        return HttpResponse$InteractionStage$loading_getInstance();
      case 'completed':
        return HttpResponse$InteractionStage$completed_getInstance();
      default:throwISE('No enum constant org.bh.tools.io.net.HttpResponse.InteractionStage.' + name);
    }
  }
  HttpResponse$InteractionStage.valueOf_61zpoe$ = HttpResponse$InteractionStage$valueOf;
  HttpResponse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpResponse',
    interfaces: []
  };
  function HttpResponse_init(xmlHttpResponse, $this) {
    $this = $this || Object.create(HttpResponse.prototype);
    HttpResponse.call($this, xmlHttpResponse.responseText, xmlHttpResponse.status, xmlHttpResponse.statusText, HttpResponse$InteractionStage$Companion_getInstance().invoke_mq22fl$(xmlHttpResponse.readyState));
    return $this;
  }
  function mostInformative(a, b) {
    if (a == null)
      return b;
    else {
      return get_informativeScore(a) > get_informativeScore(b) ? a : b;
    }
  }
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  function get_informativeScore($receiver) {
    var score = 0.0;
    if ($receiver.status !== toShort(0)) {
      score += $receiver.status === toShort(200) ? 1.5 : 1.0;
    }
    var $receiver_0 = $receiver.statusText;
    if (!($receiver_0 == null || isBlank($receiver_0))) {
      score += 2;
    }
    var $receiver_1 = $receiver.text;
    if (!($receiver_1 == null || isBlank($receiver_1))) {
      score += 3;
    }
    if ($receiver.interactionStage != null) {
      score *= ($receiver.interactionStage.xmlHttpRequestReadyState + 1) / XMLHttpRequest.DONE;
    }
    return score;
  }
  function copy($receiver) {
    return new URL($receiver.toString());
  }
  var deepCopy_0 = defineInlineFunction('Decision Cruncher.org.bh.tools.io.net.deepCopy_wace04$', wrapFunction(function () {
    var copy = _.org.bh.tools.io.net.copy_wace04$;
    return function ($receiver) {
      return copy($receiver);
    };
  }));
  function jsonString($receiver) {
    return JSON.stringify($receiver);
  }
  function get_urlEncoded($receiver) {
    return encodeURIComponent($receiver);
  }
  function get_urlDecoded($receiver) {
    return decodeURIComponent($receiver);
  }
  function TernaryCheckboxTree(children, text, id) {
    this.children = children;
    this.text_kabazs$_0 = text;
    this.id_hn756u$_0 = id;
    this.stateChangeObservers_5dru4n$_0 = ArrayList_init();
    this.shouldUpdateChildrenBasedOnState_uc0g85$_0 = true;
    this.shouldUpdateStateBasedOnChildren_xmc661$_0 = true;
    this.state_anhe36$_0 = observing(Ternary$indeterminate_getInstance(), void 0, void 0, TernaryCheckboxTree$state$lambda(this));
    var tmp$;
    tmp$ = this.children.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.onStateChange_nrmh93$(TernaryCheckboxTree_init$lambda$lambda(this));
    }
    this.updateStateBasedOnChildren_vw7nbo$_0();
  }
  Object.defineProperty(TernaryCheckboxTree.prototype, 'text', {
    get: function () {
      return this.text_kabazs$_0;
    }
  });
  Object.defineProperty(TernaryCheckboxTree.prototype, 'id', {
    get: function () {
      return this.id_hn756u$_0;
    }
  });
  var TernaryCheckboxTree$state_metadata = new PropertyMetadata('state');
  Object.defineProperty(TernaryCheckboxTree.prototype, 'state', {
    get: function () {
      return this.state_anhe36$_0.getValue_lrcp0p$(this, TernaryCheckboxTree$state_metadata);
    },
    set: function (state) {
      this.state_anhe36$_0.setValue_9rddgb$(this, TernaryCheckboxTree$state_metadata, state);
    }
  });
  TernaryCheckboxTree.prototype.onStateChange_nrmh93$ = function (stateChangeObserver) {
    this.stateChangeObservers_5dru4n$_0.add_11rb$(stateChangeObserver);
  };
  TernaryCheckboxTree.prototype.updateChildrenBasedOnState_otg7qq$_0 = function () {
    if (!this.shouldUpdateChildrenBasedOnState_uc0g85$_0) {
      return;
    }
    switch (this.state.name) {
      case 'true':
      case 'false':
        this.shouldUpdateStateBasedOnChildren_xmc661$_0 = false;
        var tmp$;
        tmp$ = this.children.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          element.state = this.state;
        }

        this.shouldUpdateStateBasedOnChildren_xmc661$_0 = true;
        break;
      case 'indeterminate':
        return;
    }
  };
  TernaryCheckboxTree.prototype.updateStateBasedOnChildren_vw7nbo$_0 = function () {
    var tmp$, tmp$_0;
    if (!this.shouldUpdateStateBasedOnChildren_xmc661$_0) {
      return;
    }
    this.shouldUpdateChildrenBasedOnState_uc0g85$_0 = false;
    tmp$ = invoke_3(FiniteAmountSummary$Companion_getInstance(), this.children);
    if (Kotlin.isType(tmp$, FiniteAmountSummary$all))
      tmp$_0 = Ternary$true_getInstance();
    else if (Kotlin.isType(tmp$, FiniteAmountSummary$none))
      tmp$_0 = Ternary$false_getInstance();
    else if (Kotlin.isType(tmp$, FiniteAmountSummary$some))
      tmp$_0 = Ternary$indeterminate_getInstance();
    else
      tmp$_0 = Kotlin.noWhenBranchMatched();
    this.state = tmp$_0;
    this.shouldUpdateChildrenBasedOnState_uc0g85$_0 = true;
  };
  TernaryCheckboxTree.prototype.deinit = function () {
    this.stateChangeObservers_5dru4n$_0.clear();
  };
  function TernaryCheckboxTree$state$lambda(this$TernaryCheckboxTree) {
    return function (oldState, newState) {
      this$TernaryCheckboxTree.updateChildrenBasedOnState_otg7qq$_0();
      var tmp$;
      tmp$ = this$TernaryCheckboxTree.stateChangeObservers_5dru4n$_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element(oldState, newState);
      }
      return Unit;
    };
  }
  function TernaryCheckboxTree_init$lambda$lambda(this$TernaryCheckboxTree) {
    return function (f, f_0) {
      this$TernaryCheckboxTree.updateStateBasedOnChildren_vw7nbo$_0();
      return Unit;
    };
  }
  TernaryCheckboxTree.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TernaryCheckboxTree',
    interfaces: [TernaryCheckbox]
  };
  function invoke$lambda(count, checkbox) {
    var tmp$;
    switch (checkbox.state.name) {
      case 'indeterminate':
        tmp$ = 0.5;
        break;
      case 'true':
        tmp$ = 1.0;
        break;
      case 'false':
        tmp$ = 0.0;
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return count + tmp$;
  }
  function invoke_3($receiver, checkboxes) {
    return invoke_0(FiniteAmountSummary$Companion_getInstance(), reduceTo(checkboxes, 0.0, invoke$lambda), checkboxes.size);
  }
  function AnyCssSelector() {
  }
  AnyCssSelector.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnyCssSelector',
    interfaces: []
  };
  function CssHtmlAttribute() {
  }
  Object.defineProperty(CssHtmlAttribute.prototype, 'cssSelectorString', {
    get: function () {
      return '[' + this.htmlAttributeName + ']';
    }
  });
  CssHtmlAttribute.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CssHtmlAttribute',
    interfaces: [AnyCssSelector]
  };
  function CssHtmlAttributeWithValue() {
  }
  CssHtmlAttributeWithValue.prototype.cssSelectorString_8ij0n9$ = function (parameter) {
    return '[' + this.htmlAttributeName + parameter.operator + '"' + parameter.parameterText + '"' + (parameter.caseInsensitive ? ' i' : '') + ']';
  };
  CssHtmlAttributeWithValue.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CssHtmlAttributeWithValue',
    interfaces: [CssHtmlAttribute]
  };
  function CssParameterForAttributeSelector(parameterText, caseInsensitive) {
    this.parameterText = parameterText;
    this.caseInsensitive = caseInsensitive;
  }
  function CssParameterForAttributeSelector$exactly(parameterText, caseInsensitive) {
    if (caseInsensitive === void 0)
      caseInsensitive = false;
    CssParameterForAttributeSelector.call(this, parameterText, caseInsensitive);
  }
  CssParameterForAttributeSelector$exactly.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'exactly',
    interfaces: [CssParameterForAttributeSelector]
  };
  function CssParameterForAttributeSelector$listContainsExactly(listItem, caseInsensitive) {
    if (caseInsensitive === void 0)
      caseInsensitive = false;
    CssParameterForAttributeSelector.call(this, listItem, caseInsensitive);
  }
  CssParameterForAttributeSelector$listContainsExactly.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'listContainsExactly',
    interfaces: [CssParameterForAttributeSelector]
  };
  function CssParameterForAttributeSelector$languageSubCode(subCode, caseInsensitive) {
    if (caseInsensitive === void 0)
      caseInsensitive = false;
    CssParameterForAttributeSelector.call(this, subCode, caseInsensitive);
  }
  CssParameterForAttributeSelector$languageSubCode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'languageSubCode',
    interfaces: [CssParameterForAttributeSelector]
  };
  function CssParameterForAttributeSelector$startsWith(prefix, caseInsensitive) {
    if (caseInsensitive === void 0)
      caseInsensitive = false;
    CssParameterForAttributeSelector.call(this, prefix, caseInsensitive);
  }
  CssParameterForAttributeSelector$startsWith.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'startsWith',
    interfaces: [CssParameterForAttributeSelector]
  };
  function CssParameterForAttributeSelector$endsWith(suffix, caseInsensitive) {
    if (caseInsensitive === void 0)
      caseInsensitive = false;
    CssParameterForAttributeSelector.call(this, suffix, caseInsensitive);
  }
  CssParameterForAttributeSelector$endsWith.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'endsWith',
    interfaces: [CssParameterForAttributeSelector]
  };
  function CssParameterForAttributeSelector$contains(needle, caseInsensitive) {
    if (caseInsensitive === void 0)
      caseInsensitive = false;
    CssParameterForAttributeSelector.call(this, needle, caseInsensitive);
  }
  CssParameterForAttributeSelector$contains.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'contains',
    interfaces: [CssParameterForAttributeSelector]
  };
  Object.defineProperty(CssParameterForAttributeSelector.prototype, 'operator', {
    get: function () {
      var tmp$;
      if (Kotlin.isType(this, CssParameterForAttributeSelector$exactly))
        tmp$ = '';
      else if (Kotlin.isType(this, CssParameterForAttributeSelector$listContainsExactly))
        tmp$ = '~';
      else if (Kotlin.isType(this, CssParameterForAttributeSelector$languageSubCode))
        tmp$ = '|';
      else if (Kotlin.isType(this, CssParameterForAttributeSelector$startsWith))
        tmp$ = '^';
      else if (Kotlin.isType(this, CssParameterForAttributeSelector$endsWith))
        tmp$ = '$';
      else if (Kotlin.isType(this, CssParameterForAttributeSelector$contains))
        tmp$ = '*';
      else
        tmp$ = Kotlin.noWhenBranchMatched();
      return tmp$ + '=';
    }
  });
  CssParameterForAttributeSelector.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CssParameterForAttributeSelector',
    interfaces: []
  };
  function CssElement(elementName) {
    this.elementName = elementName;
  }
  Object.defineProperty(CssElement.prototype, 'cssSelectorString', {
    get: function () {
      return this.elementName;
    }
  });
  CssElement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CssElement',
    interfaces: [AnyCssSelector]
  };
  function CssClass(className) {
    this.className = className;
    this.htmlAttributeName_ksnhwq$_0 = lazy(CssClass$htmlAttributeName$lambda);
    this.cssSelectorString_8fgjrh$_0 = lazy(CssClass$cssSelectorString$lambda(this));
  }
  Object.defineProperty(CssClass.prototype, 'htmlAttributeName', {
    get: function () {
      return this.htmlAttributeName_ksnhwq$_0.value;
    }
  });
  Object.defineProperty(CssClass.prototype, 'cssSelectorString', {
    get: function () {
      return this.cssSelectorString_8fgjrh$_0.value;
    }
  });
  function CssClass$htmlAttributeName$lambda() {
    return 'class';
  }
  function CssClass$cssSelectorString$lambda(this$CssClass) {
    return function () {
      return '.' + this$CssClass.className;
    };
  }
  CssClass.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CssClass',
    interfaces: [CssHtmlAttribute]
  };
  function CssId(idName) {
    this.idName = idName;
    this.htmlAttributeName_rbfksl$_0 = lazy(CssId$htmlAttributeName$lambda);
    this.cssSelectorString_ehkfic$_0 = lazy(CssId$cssSelectorString$lambda(this));
  }
  Object.defineProperty(CssId.prototype, 'htmlAttributeName', {
    get: function () {
      return this.htmlAttributeName_rbfksl$_0.value;
    }
  });
  Object.defineProperty(CssId.prototype, 'cssSelectorString', {
    get: function () {
      return this.cssSelectorString_ehkfic$_0.value;
    }
  });
  function CssId$htmlAttributeName$lambda() {
    return 'id';
  }
  function CssId$cssSelectorString$lambda(this$CssId) {
    return function () {
      return '#' + this$CssId.idName;
    };
  }
  CssId.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CssId',
    interfaces: [CssHtmlAttribute]
  };
  function DataAttribute(dataName) {
    this.dataName = dataName;
    this.htmlAttributeName_81nimx$_0 = lazy(DataAttribute$htmlAttributeName$lambda(this));
  }
  Object.defineProperty(DataAttribute.prototype, 'htmlAttributeName', {
    get: function () {
      return this.htmlAttributeName_81nimx$_0.value;
    }
  });
  function DataAttribute$htmlAttributeName$lambda(this$DataAttribute) {
    return function () {
      return 'data-' + this$DataAttribute.dataName;
    };
  }
  DataAttribute.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DataAttribute',
    interfaces: [CssHtmlAttributeWithValue]
  };
  function SelectorCombiner(lhs, rhs, cssStringifier) {
    this.lhs = lhs;
    this.rhs = rhs;
    this.cssStringifier = cssStringifier;
  }
  Object.defineProperty(SelectorCombiner.prototype, 'cssSelectorString', {
    get: function () {
      return this.cssStringifier();
    }
  });
  function SelectorCombiner$BinaryCombinator(lhs, rhs, combinator) {
    SelectorCombiner.call(this, lhs, rhs, SelectorCombiner$SelectorCombiner$BinaryCombinator_init$lambda(lhs, combinator, rhs));
  }
  function SelectorCombiner$SelectorCombiner$BinaryCombinator_init$lambda(closure$lhs, closure$combinator, closure$rhs) {
    return function () {
      return closure$lhs.cssSelectorString + closure$combinator + closure$rhs.cssSelectorString;
    };
  }
  SelectorCombiner$BinaryCombinator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BinaryCombinator',
    interfaces: [SelectorCombiner]
  };
  function SelectorCombiner$either(lhs, rhs) {
    SelectorCombiner$BinaryCombinator.call(this, lhs, rhs, ',');
  }
  SelectorCombiner$either.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'either',
    interfaces: [SelectorCombiner$BinaryCombinator]
  };
  function SelectorCombiner$container(parent, child) {
    SelectorCombiner$BinaryCombinator.call(this, parent, child, '>');
  }
  SelectorCombiner$container.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'container',
    interfaces: [SelectorCombiner$BinaryCombinator]
  };
  function SelectorCombiner$sibling(sister, brother) {
    SelectorCombiner$BinaryCombinator.call(this, sister, brother, '~');
  }
  SelectorCombiner$sibling.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'sibling',
    interfaces: [SelectorCombiner$BinaryCombinator]
  };
  function SelectorCombiner$immediateSibling(sister, brother) {
    SelectorCombiner$BinaryCombinator.call(this, sister, brother, '+');
  }
  SelectorCombiner$immediateSibling.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'immediateSibling',
    interfaces: [SelectorCombiner$BinaryCombinator]
  };
  SelectorCombiner.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SelectorCombiner',
    interfaces: [AnyCssSelector]
  };
  var or = defineInlineFunction('Decision Cruncher.RentSplit.or_qxw4fl$', wrapFunction(function () {
    var SelectorCombiner$SelectorCombiner$either_init = _.RentSplit.SelectorCombiner.either;
    return function ($receiver, rhs) {
      return new SelectorCombiner$SelectorCombiner$either_init($receiver, rhs);
    };
  }));
  var containing = defineInlineFunction('Decision Cruncher.RentSplit.containing_qxw4fl$', wrapFunction(function () {
    var SelectorCombiner$SelectorCombiner$container_init = _.RentSplit.SelectorCombiner.container;
    return function ($receiver, child) {
      return new SelectorCombiner$SelectorCombiner$container_init($receiver, child);
    };
  }));
  var justBefore = defineInlineFunction('Decision Cruncher.RentSplit.justBefore_qxw4fl$', wrapFunction(function () {
    var SelectorCombiner$SelectorCombiner$immediateSibling_init = _.RentSplit.SelectorCombiner.immediateSibling;
    return function ($receiver, brother) {
      return new SelectorCombiner$SelectorCombiner$immediateSibling_init($receiver, brother);
    };
  }));
  var before = defineInlineFunction('Decision Cruncher.RentSplit.before_qxw4fl$', wrapFunction(function () {
    var SelectorCombiner$SelectorCombiner$sibling_init = _.RentSplit.SelectorCombiner.sibling;
    return function ($receiver, brother) {
      return new SelectorCombiner$SelectorCombiner$sibling_init($receiver, brother);
    };
  }));
  function TouchBasics() {
    TouchBasics_instance = this;
  }
  TouchBasics.prototype.isTouchSupported = function () {
    return eval("'ontouchstart' in window") || eval('!!navigator.maxTouchPoints');
  };
  TouchBasics.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'TouchBasics',
    interfaces: []
  };
  var TouchBasics_instance = null;
  function TouchBasics_getInstance() {
    if (TouchBasics_instance === null) {
      new TouchBasics();
    }
    return TouchBasics_instance;
  }
  function Checkbox() {
  }
  Checkbox.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Checkbox',
    interfaces: [CheckboxBase]
  };
  function TernaryCheckbox() {
  }
  TernaryCheckbox.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TernaryCheckbox',
    interfaces: [CheckboxBase]
  };
  function CheckboxBase() {
  }
  CheckboxBase.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CheckboxBase',
    interfaces: [Widget]
  };
  function Widget() {
  }
  Widget.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Widget',
    interfaces: []
  };
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  function JSCheckboxController(controlledElement) {
    this.controlledElement = controlledElement;
    this.onStateChangeObservers_0 = LinkedHashSet_init();
    this.controlledElement.onchange = JSCheckboxController_init$lambda(this);
  }
  Object.defineProperty(JSCheckboxController.prototype, 'text', {
    get: function () {
      return this.controlledElement.textContent;
    },
    set: function (value) {
      this.controlledElement.textContent = value;
    }
  });
  Object.defineProperty(JSCheckboxController.prototype, 'id', {
    get: function () {
      return this.controlledElement.id;
    }
  });
  Object.defineProperty(JSCheckboxController.prototype, 'state', {
    get: function () {
      return get_ternaryState(this.controlledElement);
    },
    set: function (value) {
      set_ternaryState(this.controlledElement, value);
    }
  });
  JSCheckboxController.prototype.onStateChange_nrmh93$ = function (stateChangeObserver) {
    this.onStateChangeObservers_0.add_11rb$(stateChangeObserver);
  };
  function JSCheckboxController_init$lambda(this$JSCheckboxController) {
    return function (it) {
      var $receiver = this$JSCheckboxController.onStateChangeObservers_0;
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element(null, this$JSCheckboxController.state);
      }
      return Unit;
    };
  }
  JSCheckboxController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JSCheckboxController',
    interfaces: [TernaryCheckbox]
  };
  function get_ternaryState($receiver) {
    var tmp$;
    tmp$ = $receiver.indeterminate;
    if (tmp$ === true)
      return Ternary$indeterminate_getInstance();
    else if (tmp$ === false)
      return invoke_1(Ternary$Companion_getInstance(), $receiver.checked);
    else
      return Kotlin.noWhenBranchMatched();
  }
  function set_ternaryState($receiver, value) {
    switch (value.name) {
      case 'true':
        $receiver.checked = true;
        $receiver.indeterminate = false;
        break;
      case 'false':
        $receiver.checked = false;
        $receiver.indeterminate = false;
        break;
      case 'indeterminate':
        $receiver.indeterminate = true;
        break;
    }
  }
  function JSTernaryCheckboxTreeController(rootCheckbox, children) {
    JSTernaryCheckboxTreeController$Companion_getInstance();
    tmp$ = rootCheckbox.id;
    var tmp$;
    TernaryCheckboxTree.call(this, children, rootCheckbox.text, tmp$);
    this.rootCheckbox = rootCheckbox;
    this.rootCheckbox.state = this.state;
    this.rootCheckbox.onStateChange_nrmh93$(JSTernaryCheckboxTreeController_init$lambda(this));
    this.onStateChange_nrmh93$(JSTernaryCheckboxTreeController_init$lambda_0(this));
  }
  function JSTernaryCheckboxTreeController$deinit$lambda(f, f_0) {
    return Unit;
  }
  JSTernaryCheckboxTreeController.prototype.deinit = function () {
    this.rootCheckbox.onStateChange_nrmh93$(JSTernaryCheckboxTreeController$deinit$lambda);
    TernaryCheckboxTree.prototype.deinit.call(this);
  };
  function JSTernaryCheckboxTreeController$Companion() {
    JSTernaryCheckboxTreeController$Companion_instance = this;
  }
  JSTernaryCheckboxTreeController$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JSTernaryCheckboxTreeController$Companion_instance = null;
  function JSTernaryCheckboxTreeController$Companion_getInstance() {
    if (JSTernaryCheckboxTreeController$Companion_instance === null) {
      new JSTernaryCheckboxTreeController$Companion();
    }
    return JSTernaryCheckboxTreeController$Companion_instance;
  }
  function JSTernaryCheckboxTreeController_init$lambda(this$JSTernaryCheckboxTreeController) {
    return function (f, newState) {
      this$JSTernaryCheckboxTreeController.state = newState;
      return Unit;
    };
  }
  function JSTernaryCheckboxTreeController_init$lambda_0(this$JSTernaryCheckboxTreeController) {
    return function (f, newState) {
      this$JSTernaryCheckboxTreeController.rootCheckbox.state = newState;
      return Unit;
    };
  }
  JSTernaryCheckboxTreeController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JSTernaryCheckboxTreeController',
    interfaces: [TernaryCheckboxTree]
  };
  function JSTernaryCheckboxTreeController_init(rootCheckbox, children, $this) {
    $this = $this || Object.create(JSTernaryCheckboxTreeController.prototype);
    var tmp$ = new JSCheckboxController(rootCheckbox);
    var destination = ArrayList_init(collectionSizeOrDefault(children, 10));
    var tmp$_0;
    tmp$_0 = children.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(new JSCheckboxController(item));
    }
    JSTernaryCheckboxTreeController.call($this, tmp$, destination);
    return $this;
  }
  var package$DecisionCruncher = _.DecisionCruncher || (_.DecisionCruncher = {});
  package$DecisionCruncher.AppViewController = AppViewController;
  Object.defineProperty(package$DecisionCruncher, 'DecisionCrunchEngine', {
    get: DecisionCrunchEngine_getInstance
  });
  package$DecisionCruncher.main_kand9s$ = main;
  package$DecisionCruncher.Decision = Decision;
  $$importsForInline$$['Decision Cruncher'] = _;
  package$DecisionCruncher.MutableDecision = MutableDecision;
  package$DecisionCruncher.immutableCopy_5rvit3$ = immutableCopy;
  var package$Structures = package$DecisionCruncher.Structures || (package$DecisionCruncher.Structures = {});
  package$Structures.DecisionCruncherState = DecisionCruncherState;
  package$DecisionCruncher.DecisionInput = DecisionInput;
  package$DecisionCruncher.Serializable = Serializable;
  package$DecisionCruncher.s = SerializableDecisionCruncherState;
  package$DecisionCruncher.SerializableOption = SerializableOption;
  package$DecisionCruncher.SerializableRequirement = SerializableRequirement;
  package$DecisionCruncher.Option = Option;
  package$DecisionCruncher.Requirement = Requirement;
  var package$jQueryInterface = _.jQueryInterface || (_.jQueryInterface = {});
  package$jQueryInterface.asList_9ufosi$ = asList;
  package$jQueryInterface.mapNotNull_fo801r$ = mapNotNull;
  package$jQueryInterface.iterator_9ufosi$ = iterator_0;
  package$jQueryInterface.forEach_f8zjg0$ = forEach;
  package$jQueryInterface.forEachIndexed_53xvis$ = forEachIndexed;
  var package$org = _.org || (_.org = {});
  var package$bh = package$org.bh || (package$org.bh = {});
  var package$tools = package$bh.tools || (package$bh.tools = {});
  var package$base = package$tools.base || (package$tools.base = {});
  var package$util = package$base.util || (package$base.util = {});
  package$util.toBooleanOrNull_s8jyvk$ = toBooleanOrNull;
  package$jQueryInterface.booleanAttr_pl09c0$ = booleanAttr;
  package$jQueryInterface.booleanAttr_86h6l4$ = booleanAttr_0;
  package$jQueryInterface.disabled_9ufosi$ = disabled;
  package$jQueryInterface.disabled_5laha2$ = disabled_0;
  package$jQueryInterface.checked_9ufosi$ = checked;
  package$jQueryInterface.checked_5laha2$ = checked_0;
  package$jQueryInterface.indeterminate_9ufosi$ = indeterminate;
  package$jQueryInterface.indeterminate_5laha2$ = indeterminate_0;
  package$jQueryInterface.checkedNotIndeterminate_9ufosi$ = checkedNotIndeterminate;
  package$jQueryInterface.jq_1u92oz$ = jq;
  package$jQueryInterface.jq_3qujwq$ = jq_0;
  package$jQueryInterface.jq_ch0s56$ = jq_1;
  package$jQueryInterface.get_jq_dzaqfo$ = get_jq;
  package$jQueryInterface.jq_5358jw$ = jq_2;
  package$jQueryInterface.addClass_u9bwps$ = addClass;
  package$jQueryInterface.removeClass_u9bwps$ = removeClass;
  package$jQueryInterface.data_b7bhqf$ = data;
  package$jQueryInterface.data_l9wfl1$ = data_0;
  package$jQueryInterface.attr_phnjxj$ = attr;
  package$jQueryInterface.attr_2ul80f$ = attr_0;
  package$jQueryInterface.attr_db73uc$ = attr_1;
  package$jQueryInterface.attr_mpifw4$ = attr_2;
  package$jQueryInterface.onChangeData_x0svav$ = onChangeData;
  package$jQueryInterface.get_parentElement_s15u7w$ = get_parentElement;
  var package$async = package$tools.async || (package$tools.async = {});
  package$async.delay_5jeynf$ = delay;
  package$async.delay_u83pai$ = delay_0;
  var package$collections = package$base.collections || (package$base.collections = {});
  package$collections.indexOfFirstOrNull_dmm9ex$ = indexOfFirstOrNull;
  var package$extensions = package$collections.extensions || (package$collections.extensions = {});
  package$extensions.get_first_4mqhgw$ = get_first;
  package$extensions.get_firstOrNull_4mqhgw$ = get_firstOrNull;
  package$extensions.get_last_4mqhgw$ = get_last;
  package$extensions.get_lastOrNull_4mqhgw$ = get_lastOrNull;
  package$extensions.removeFirst_vvxzk3$ = removeFirst;
  package$extensions.Triad = Triad;
  package$extensions.get_left_1pmd2p$ = get_left;
  package$extensions.get_center_1pmd2p$ = get_center;
  package$extensions.get_right_1pmd2p$ = get_right;
  package$extensions.firstOrNullComparingTriads_csic9r$ = firstOrNullComparingTriads;
  package$extensions.firstOrNullComparingPairs_cf0iqu$ = firstOrNullComparingPairs;
  package$extensions.reduceTo_db6zb0$ = reduceTo;
  package$extensions.reduceInto_8nclxh$ = reduceInto;
  package$extensions.safeReduce_lrrcxv$ = safeReduce;
  package$extensions.safeReduce_w5eg7r$ = safeReduce_0;
  package$extensions.toString_j63yia$ = toString_0;
  package$extensions.nonEmpty_b5o7sk$ = nonEmpty;
  package$extensions.get_nonEmpty_yfwuwe$ = get_nonEmpty;
  var package$func = package$base.func || (package$base.func = {});
  package$func.Observing = Observing;
  package$func.NullWSB_287e2$ = NullWSB;
  package$func.NullSSB_287e2$ = NullSSB;
  package$func.NullDSB_287e2$ = NullDSB;
  package$func.observing_bjs5ud$ = observing;
  var package$jsShim = package$base.jsShim || (package$base.jsShim = {});
  package$jsShim.JsMap = JsMap;
  package$jsShim.asOrNull = as_;
  package$jsShim.toString_798l30$ = toString_1;
  package$jsShim.toString_di2vk2$ = toString_2;
  package$jsShim.toString_dqglrj$ = toString_3;
  package$jsShim.toString_if0zpk$ = toString_4;
  package$jsShim.replace_he2ph6$ = replace;
  var package$math = package$base.math || (package$base.math = {});
  package$math.toBase_z7h088$ = toBase;
  package$math.fromBase_rjktp$ = fromBase;
  var package$strings = package$base.strings || (package$base.strings = {});
  package$strings.isUpperCase_myv2d0$ = isUpperCase;
  package$strings.isLowerCase_myv2d0$ = isLowerCase;
  package$strings.toAbbreviation_b6aurr$ = toAbbreviation;
  package$strings.plusAssign_pgf00o$ = plusAssign;
  package$strings.plus_769w4y$ = plus;
  package$strings.plus_w8y83w$ = plus_0;
  package$strings.concat_byqnqh$ = concat;
  package$strings.containsIgnoreCase_b6aurr$ = containsIgnoreCase;
  package$strings.differingCharacters_b6aurr$ = differingCharacters;
  package$strings.DifferingCharacter = DifferingCharacter;
  package$strings.isNeitherNullNorEmpty_5cw0du$ = isNeitherNullNorEmpty;
  package$strings.isNeitherNullNorBlank_5cw0du$ = isNeitherNullNorBlank;
  FiniteAmountSummary.all = FiniteAmountSummary$all;
  FiniteAmountSummary.some = FiniteAmountSummary$some;
  FiniteAmountSummary.none = FiniteAmountSummary$none;
  Object.defineProperty(FiniteAmountSummary, 'Companion', {
    get: FiniteAmountSummary$Companion_getInstance
  });
  var package$struct = package$base.struct || (package$base.struct = {});
  package$struct.FiniteAmountSummary = FiniteAmountSummary;
  package$struct.invoke_27ruav$ = invoke;
  package$struct.invoke_4xrro1$ = invoke_0;
  Object.defineProperty(Ternary, 'true', {
    get: Ternary$true_getInstance
  });
  Object.defineProperty(Ternary, 'false', {
    get: Ternary$false_getInstance
  });
  Object.defineProperty(Ternary, 'indeterminate', {
    get: Ternary$indeterminate_getInstance
  });
  Object.defineProperty(Ternary, 'Companion', {
    get: Ternary$Companion_getInstance
  });
  package$struct.Ternary = Ternary;
  package$struct.invoke_aa6xk2$ = invoke_1;
  package$struct.invoke_yniobj$ = invoke_2;
  package$util.deepCopy_eoe559$ = deepCopy;
  package$util.safeTry_klfg04$ = safeTry;
  Object.defineProperty(package$util, 'IdManager', {
    get: IdManager_getInstance
  });
  var package$io = package$tools.io || (package$tools.io = {});
  var package$logging = package$io.logging || (package$io.logging = {});
  package$logging.consoleLogString_61zpoe$ = consoleLogString;
  package$logging.log_hyc7mn$ = log;
  package$logging.alsoLog_vxumlc$ = alsoLog;
  package$logging.consoleLog_mh5how$ = consoleLog;
  package$logging.log_7uhc0p$ = log_0;
  Object.defineProperty(HttpRequest$RequestParameters, 'Companion', {
    get: HttpRequest$RequestParameters$Companion_getInstance
  });
  HttpRequest.RequestParameters = HttpRequest$RequestParameters;
  Object.defineProperty(HttpRequest$RequestParameter$Usage, 'urlParameter', {
    get: HttpRequest$RequestParameter$Usage$urlParameter_getInstance
  });
  Object.defineProperty(HttpRequest$RequestParameter$Usage, 'postBodyJson', {
    get: HttpRequest$RequestParameter$Usage$postBodyJson_getInstance
  });
  Object.defineProperty(HttpRequest$RequestParameter$Usage, 'header', {
    get: HttpRequest$RequestParameter$Usage$header_getInstance
  });
  HttpRequest$RequestParameter.Usage = HttpRequest$RequestParameter$Usage;
  HttpRequest$RequestParameter.genericHeader = HttpRequest$RequestParameter$genericHeader;
  HttpRequest.RequestParameter = HttpRequest$RequestParameter;
  var package$net = package$io.net || (package$io.net = {});
  package$net.HttpRequest_init_g3x9lo$ = HttpRequest_init;
  package$net.HttpRequest = HttpRequest;
  Object.defineProperty(HttpResponse$InteractionStage, 'notStarted', {
    get: HttpResponse$InteractionStage$notStarted_getInstance
  });
  Object.defineProperty(HttpResponse$InteractionStage, 'opened', {
    get: HttpResponse$InteractionStage$opened_getInstance
  });
  Object.defineProperty(HttpResponse$InteractionStage, 'headersReceived', {
    get: HttpResponse$InteractionStage$headersReceived_getInstance
  });
  Object.defineProperty(HttpResponse$InteractionStage, 'loading', {
    get: HttpResponse$InteractionStage$loading_getInstance
  });
  Object.defineProperty(HttpResponse$InteractionStage, 'completed', {
    get: HttpResponse$InteractionStage$completed_getInstance
  });
  Object.defineProperty(HttpResponse$InteractionStage, 'Companion', {
    get: HttpResponse$InteractionStage$Companion_getInstance
  });
  HttpResponse.InteractionStage = HttpResponse$InteractionStage;
  package$net.HttpResponse_init_1endcj$ = HttpResponse_init;
  package$net.HttpResponse = HttpResponse;
  package$net.mostInformative_rwjgrz$ = mostInformative;
  package$net.get_informativeScore_yi7m7y$ = get_informativeScore;
  package$net.copy_wace04$ = copy;
  package$net.deepCopy_wace04$ = deepCopy_0;
  var package$serialization = package$io.serialization || (package$io.serialization = {});
  package$serialization.jsonString_s8jyvk$ = jsonString;
  package$serialization.get_urlEncoded_pdl1vz$ = get_urlEncoded;
  package$serialization.get_urlDecoded_pdl1vz$ = get_urlDecoded;
  var package$ui = package$tools.ui || (package$tools.ui = {});
  var package$behavior = package$ui.behavior || (package$ui.behavior = {});
  package$behavior.TernaryCheckboxTree = TernaryCheckboxTree;
  package$behavior.invoke_ujmawj$ = invoke_3;
  var package$RentSplit = _.RentSplit || (_.RentSplit = {});
  package$RentSplit.AnyCssSelector = AnyCssSelector;
  package$RentSplit.CssHtmlAttribute = CssHtmlAttribute;
  package$RentSplit.CssHtmlAttributeWithValue = CssHtmlAttributeWithValue;
  CssParameterForAttributeSelector.exactly = CssParameterForAttributeSelector$exactly;
  CssParameterForAttributeSelector.listContainsExactly = CssParameterForAttributeSelector$listContainsExactly;
  CssParameterForAttributeSelector.languageSubCode = CssParameterForAttributeSelector$languageSubCode;
  CssParameterForAttributeSelector.startsWith = CssParameterForAttributeSelector$startsWith;
  CssParameterForAttributeSelector.endsWith = CssParameterForAttributeSelector$endsWith;
  CssParameterForAttributeSelector.contains = CssParameterForAttributeSelector$contains;
  package$RentSplit.CssParameterForAttributeSelector = CssParameterForAttributeSelector;
  package$RentSplit.CssElement = CssElement;
  package$RentSplit.CssClass = CssClass;
  package$RentSplit.CssId = CssId;
  package$RentSplit.DataAttribute = DataAttribute;
  SelectorCombiner.BinaryCombinator = SelectorCombiner$BinaryCombinator;
  SelectorCombiner.either = SelectorCombiner$either;
  SelectorCombiner.container = SelectorCombiner$container;
  SelectorCombiner.sibling = SelectorCombiner$sibling;
  SelectorCombiner.immediateSibling = SelectorCombiner$immediateSibling;
  package$RentSplit.SelectorCombiner = SelectorCombiner;
  package$RentSplit.or_qxw4fl$ = or;
  package$RentSplit.containing_qxw4fl$ = containing;
  package$RentSplit.justBefore_qxw4fl$ = justBefore;
  package$RentSplit.before_qxw4fl$ = before;
  var package$touch = package$ui.touch || (package$ui.touch = {});
  Object.defineProperty(package$touch, 'TouchBasics', {
    get: TouchBasics_getInstance
  });
  var package$widget = package$ui.widget || (package$ui.widget = {});
  package$widget.Checkbox = Checkbox;
  package$widget.TernaryCheckbox = TernaryCheckbox;
  package$widget.CheckboxBase = CheckboxBase;
  package$widget.Widget = Widget;
  var package$js = package$widget.js || (package$widget.js = {});
  package$js.JSCheckboxController = JSCheckboxController;
  package$js.get_ternaryState_rsvr4l$ = get_ternaryState;
  package$js.set_ternaryState_g8v3lp$ = set_ternaryState;
  Object.defineProperty(JSTernaryCheckboxTreeController, 'Companion', {
    get: JSTernaryCheckboxTreeController$Companion_getInstance
  });
  package$js.JSTernaryCheckboxTreeController_init_cbr6g3$ = JSTernaryCheckboxTreeController_init;
  package$js.JSTernaryCheckboxTreeController = JSTernaryCheckboxTreeController;
  Object.defineProperty(CssHtmlAttributeWithValue.prototype, 'cssSelectorString', Object.getOwnPropertyDescriptor(CssHtmlAttribute.prototype, 'cssSelectorString'));
  DataAttribute.prototype.cssSelectorString_8ij0n9$ = CssHtmlAttributeWithValue.prototype.cssSelectorString_8ij0n9$;
  Object.defineProperty(DataAttribute.prototype, 'cssSelectorString', Object.getOwnPropertyDescriptor(CssHtmlAttributeWithValue.prototype, 'cssSelectorString'));
  shortIds_v1 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_#';
  main([]);
  Kotlin.defineModule('Decision Cruncher', _);
  return _;
}(typeof this['Decision Cruncher'] === 'undefined' ? {} : this['Decision Cruncher'], kotlin);
