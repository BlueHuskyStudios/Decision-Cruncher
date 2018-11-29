(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Decision-Cruncher'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Decision-Cruncher'.");
    }
    root['Decision-Cruncher'] = factory(typeof this['Decision-Cruncher'] === 'undefined' ? {} : this['Decision-Cruncher'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Annotation = Kotlin.kotlin.Annotation;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var Exception = Kotlin.kotlin.Exception;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var Unit = Kotlin.kotlin.Unit;
  var Pair = Kotlin.kotlin.Pair;
  var getCallableRef = Kotlin.getCallableRef;
  var toIntArray = Kotlin.kotlin.collections.toIntArray_5yd9ji$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var L0 = Kotlin.Long.ZERO;
  var equals = Kotlin.equals;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var sliceArray = Kotlin.kotlin.collections.sliceArray_8r7b3e$;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var downTo = Kotlin.kotlin.ranges.downTo_dqglrj$;
  var elementAt = Kotlin.kotlin.collections.elementAt_ba2ldo$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var toString = Kotlin.toString;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var NoSuchElementException = Kotlin.kotlin.NoSuchElementException;
  var Throwable = Error;
  var Any = Object;
  var ReadWriteProperty = Kotlin.kotlin.properties.ReadWriteProperty;
  var ObservableProperty = Kotlin.kotlin.properties.ObservableProperty;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var Triple = Kotlin.kotlin.Triple;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var throwCCE = Kotlin.throwCCE;
  var contains = Kotlin.kotlin.ranges.contains_8sy4e8$;
  var L2 = Kotlin.Long.fromInt(2);
  var toString_0 = Kotlin.kotlin.text.toString_if0zpk$;
  var toString_1 = Kotlin.kotlin.text.toString_dqglrj$;
  var L1 = Kotlin.Long.ONE;
  var L10 = Kotlin.Long.fromInt(10);
  var L100 = Kotlin.Long.fromInt(100);
  var L1000 = Kotlin.Long.fromInt(1000);
  var L10000 = Kotlin.Long.fromInt(10000);
  var L100000 = Kotlin.Long.fromInt(100000);
  var L1000000 = Kotlin.Long.fromInt(1000000);
  var L10000000 = Kotlin.Long.fromInt(10000000);
  var L100000000 = Kotlin.Long.fromInt(100000000);
  var L1000000000 = Kotlin.Long.fromInt(1000000000);
  var L10000000000 = new Kotlin.Long(1410065408, 2);
  var L100000000000 = new Kotlin.Long(1215752192, 23);
  var L1000000000000 = new Kotlin.Long(-727379968, 232);
  var L10000000000000 = new Kotlin.Long(1316134912, 2328);
  var L100000000000000 = new Kotlin.Long(276447232, 23283);
  var L1000000000000000 = new Kotlin.Long(-1530494976, 232830);
  var L10000000000000000 = new Kotlin.Long(1874919424, 2328306);
  var L100000000000000000 = new Kotlin.Long(1569325056, 23283064);
  var L1000000000000000000 = new Kotlin.Long(-1486618624, 232830643);
  var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var numberToInt = Kotlin.numberToInt;
  var toByte = Kotlin.toByte;
  var toShort = Kotlin.toShort;
  var toChar = Kotlin.toChar;
  var Number_0 = Kotlin.kotlin.Number;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var indexOf = Kotlin.kotlin.text.indexOf_8eortd$;
  var unboxChar = Kotlin.unboxChar;
  var toRawBits = Kotlin.doubleToRawBits;
  var L6910470738111508698 = new Kotlin.Long(-404868902, 1608969349);
  var toRawBits_0 = Kotlin.floatToRawBits;
  var Comparable = Kotlin.kotlin.Comparable;
  var isNaN_0 = Kotlin.kotlin.isNaN_yrwdxr$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var isInfinite = Kotlin.kotlin.isInfinite_yrwdxr$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var hashCode = Kotlin.hashCode;
  var rangeTo = Kotlin.kotlin.ranges.rangeTo_38ydlf$;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var asList = Kotlin.kotlin.collections.asList_us0mfu$;
  var getKClass = Kotlin.getKClass;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var UnsupportedOperationException = Kotlin.kotlin.UnsupportedOperationException;
  var until = Kotlin.kotlin.ranges.until_2p08ub$;
  var until_0 = Kotlin.kotlin.ranges.until_buxqzf$;
  var substringBefore = Kotlin.kotlin.text.substringBefore_8cymmc$;
  var substringAfter = Kotlin.kotlin.text.substringAfter_8cymmc$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var asIterable = Kotlin.kotlin.text.asIterable_gw00vp$;
  var isWhitespace = Kotlin.kotlin.text.isWhitespace_myv2d0$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var contains_0 = Kotlin.kotlin.text.contains_li3zpu$;
  var substring = Kotlin.kotlin.text.substring_fc3b62$;
  var until_1 = Kotlin.kotlin.ranges.until_dqglrj$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var rangeTo_0 = Kotlin.kotlin.ranges.rangeTo_8xshf9$;
  var LongRange = Kotlin.kotlin.ranges.LongRange;
  var toList_0 = Kotlin.kotlin.collections.toList_us0mfu$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var toList_1 = Kotlin.kotlin.collections.toList_abgq59$;
  var Iterator = Kotlin.kotlin.collections.Iterator;
  ArithmeticException.prototype = Object.create(Exception.prototype);
  ArithmeticException.prototype.constructor = ArithmeticException;
  MutableStack.prototype = Object.create(Stack.prototype);
  MutableStack.prototype.constructor = MutableStack;
  Conjunction.prototype = Object.create(Enum.prototype);
  Conjunction.prototype.constructor = Conjunction;
  UnsupportedOperationException_0.prototype = Object.create(Throwable.prototype);
  UnsupportedOperationException_0.prototype.constructor = UnsupportedOperationException_0;
  observing$ObjectLiteral.prototype = Object.create(ObservableProperty.prototype);
  observing$ObjectLiteral.prototype.constructor = observing$ObjectLiteral;
  LoggerLevel.prototype = Object.create(Enum.prototype);
  LoggerLevel.prototype.constructor = LoggerLevel;
  Averager.prototype = Object.create(Number_0.prototype);
  Averager.prototype.constructor = Averager;
  ComparisonResult.prototype = Object.create(Enum.prototype);
  ComparisonResult.prototype.constructor = ComparisonResult;
  RoundingThreshold.prototype = Object.create(Enum.prototype);
  RoundingThreshold.prototype.constructor = RoundingThreshold;
  RoundingDirection.prototype = Object.create(Enum.prototype);
  RoundingDirection.prototype.constructor = RoundingDirection;
  BezierPath.prototype = Object.create(FractionPath.prototype);
  BezierPath.prototype.constructor = BezierPath;
  ComputableLineSegment.prototype = Object.create(LineSegment.prototype);
  ComputableLineSegment.prototype.constructor = ComputableLineSegment;
  FractionLineSegment.prototype = Object.create(ComputableLineSegment.prototype);
  FractionLineSegment.prototype.constructor = FractionLineSegment;
  CubicBezierPathSegment.prototype = Object.create(FractionLineSegment.prototype);
  CubicBezierPathSegment.prototype.constructor = CubicBezierPathSegment;
  ComputableLineSegment$ThreePointOrientation.prototype = Object.create(Enum.prototype);
  ComputableLineSegment$ThreePointOrientation.prototype.constructor = ComputableLineSegment$ThreePointOrientation;
  IntersectionDescription$none.prototype = Object.create(IntersectionDescription.prototype);
  IntersectionDescription$none.prototype.constructor = IntersectionDescription$none;
  IntersectionDescription$leftVertexTouchesRightVertex.prototype = Object.create(IntersectionDescription.prototype);
  IntersectionDescription$leftVertexTouchesRightVertex.prototype.constructor = IntersectionDescription$leftVertexTouchesRightVertex;
  IntersectionDescription$leftVertexTouchesRightEdge.prototype = Object.create(IntersectionDescription.prototype);
  IntersectionDescription$leftVertexTouchesRightEdge.prototype.constructor = IntersectionDescription$leftVertexTouchesRightEdge;
  IntersectionDescription$rightVertexTouchesLeftEdge.prototype = Object.create(IntersectionDescription.prototype);
  IntersectionDescription$rightVertexTouchesLeftEdge.prototype.constructor = IntersectionDescription$rightVertexTouchesLeftEdge;
  IntersectionDescription$edgesCross.prototype = Object.create(IntersectionDescription.prototype);
  IntersectionDescription$edgesCross.prototype.constructor = IntersectionDescription$edgesCross;
  IntersectionDescription$completeOverlap.prototype = Object.create(IntersectionDescription.prototype);
  IntersectionDescription$completeOverlap.prototype.constructor = IntersectionDescription$completeOverlap;
  LineSegmentDirection$yIncreasesMost.prototype = Object.create(LineSegmentDirection.prototype);
  LineSegmentDirection$yIncreasesMost.prototype.constructor = LineSegmentDirection$yIncreasesMost;
  LineSegmentDirection$xDecreasesMost.prototype = Object.create(LineSegmentDirection.prototype);
  LineSegmentDirection$xDecreasesMost.prototype.constructor = LineSegmentDirection$xDecreasesMost;
  LineSegmentDirection$yDecreasesMost.prototype = Object.create(LineSegmentDirection.prototype);
  LineSegmentDirection$yDecreasesMost.prototype.constructor = LineSegmentDirection$yDecreasesMost;
  LineSegmentDirection$xIncreasesMost.prototype = Object.create(LineSegmentDirection.prototype);
  LineSegmentDirection$xIncreasesMost.prototype.constructor = LineSegmentDirection$xIncreasesMost;
  IntegerLineSegment.prototype = Object.create(ComputableLineSegment.prototype);
  IntegerLineSegment.prototype.constructor = IntegerLineSegment;
  OtherSegmentRelationshipToCurrent.prototype = Object.create(Enum.prototype);
  OtherSegmentRelationshipToCurrent.prototype.constructor = OtherSegmentRelationshipToCurrent;
  ComputablePoint.prototype = Object.create(Point.prototype);
  ComputablePoint.prototype.constructor = ComputablePoint;
  PointOperatorUnavailableApology.prototype = Object.create(UnsupportedOperationException.prototype);
  PointOperatorUnavailableApology.prototype.constructor = PointOperatorUnavailableApology;
  IntegerPoint.prototype = Object.create(ComputablePoint.prototype);
  IntegerPoint.prototype.constructor = IntegerPoint;
  FractionPoint.prototype = Object.create(ComputablePoint.prototype);
  FractionPoint.prototype.constructor = FractionPoint;
  Int8Point.prototype = Object.create(ComputablePoint.prototype);
  Int8Point.prototype.constructor = Int8Point;
  ComputableRect.prototype = Object.create(Rect.prototype);
  ComputableRect.prototype.constructor = ComputableRect;
  IntegerRect.prototype = Object.create(ComputableRect.prototype);
  IntegerRect.prototype.constructor = IntegerRect;
  FractionRect.prototype = Object.create(ComputableRect.prototype);
  FractionRect.prototype.constructor = FractionRect;
  ComputableSize.prototype = Object.create(Size.prototype);
  ComputableSize.prototype.constructor = ComputableSize;
  RectangleScanningApproach.prototype = Object.create(Enum.prototype);
  RectangleScanningApproach.prototype.constructor = RectangleScanningApproach;
  SizeOperatorUnavailableApology.prototype = Object.create(Throwable.prototype);
  SizeOperatorUnavailableApology.prototype.constructor = SizeOperatorUnavailableApology;
  IntegerSize.prototype = Object.create(ComputableSize.prototype);
  IntegerSize.prototype.constructor = IntegerSize;
  Int8Size.prototype = Object.create(ComputableSize.prototype);
  Int8Size.prototype.constructor = Int8Size;
  FractionSize.prototype = Object.create(ComputableSize.prototype);
  FractionSize.prototype.constructor = FractionSize;
  BasicResettableStateStore.prototype = Object.create(BasicStateStore.prototype);
  BasicResettableStateStore.prototype.constructor = BasicResettableStateStore;
  FiniteAmountSummary$all.prototype = Object.create(FiniteAmountSummary.prototype);
  FiniteAmountSummary$all.prototype.constructor = FiniteAmountSummary$all;
  FiniteAmountSummary$some.prototype = Object.create(FiniteAmountSummary.prototype);
  FiniteAmountSummary$some.prototype.constructor = FiniteAmountSummary$some;
  FiniteAmountSummary$none.prototype = Object.create(FiniteAmountSummary.prototype);
  FiniteAmountSummary$none.prototype.constructor = FiniteAmountSummary$none;
  ComputableOpenRange.prototype = Object.create(OpenRange.prototype);
  ComputableOpenRange.prototype.constructor = ComputableOpenRange;
  FractionOpenRange.prototype = Object.create(ComputableOpenRange.prototype);
  FractionOpenRange.prototype.constructor = FractionOpenRange;
  FractionOpenRange$Companion$empty.prototype = Object.create(FractionOpenRange.prototype);
  FractionOpenRange$Companion$empty.prototype.constructor = FractionOpenRange$Companion$empty;
  _EmptyOpenRange.prototype = Object.create(OpenRange.prototype);
  _EmptyOpenRange.prototype.constructor = _EmptyOpenRange;
  Ternary.prototype = Object.create(Enum.prototype);
  Ternary.prototype.constructor = Ternary;
  VersionChannel.prototype = Object.create(Enum.prototype);
  VersionChannel.prototype.constructor = VersionChannel;
  TimeUnit.prototype = Object.create(Enum.prototype);
  TimeUnit.prototype.constructor = TimeUnit;
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
  MutableDecision.prototype = Object.create(Decision.prototype);
  MutableDecision.prototype.constructor = MutableDecision;
  Requirement$IdealValue$fullRange.prototype = Object.create(Requirement$IdealValue.prototype);
  Requirement$IdealValue$fullRange.prototype.constructor = Requirement$IdealValue$fullRange;
  Requirement$IdealValue$higherIsBetter.prototype = Object.create(Requirement$IdealValue.prototype);
  Requirement$IdealValue$higherIsBetter.prototype.constructor = Requirement$IdealValue$higherIsBetter;
  Requirement$IdealValue$lowerIsBetter.prototype = Object.create(Requirement$IdealValue.prototype);
  Requirement$IdealValue$lowerIsBetter.prototype.constructor = Requirement$IdealValue$lowerIsBetter;
  Requirement$IdealValue$oneIdealInput.prototype = Object.create(Requirement$IdealValue.prototype);
  Requirement$IdealValue$oneIdealInput.prototype.constructor = Requirement$IdealValue$oneIdealInput;
  Requirement$IdealValue$meaninglessValue.prototype = Object.create(Requirement$IdealValue.prototype);
  Requirement$IdealValue$meaninglessValue.prototype.constructor = Requirement$IdealValue$meaninglessValue;
  function Throws(exceptionClasses) {
    this.exceptionClasses = exceptionClasses;
  }
  Throws.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Throws',
    interfaces: [Annotation]
  };
  function ArithmeticException(message) {
    if (message === void 0)
      message = null;
    Exception_init(message, this);
    this.name = 'ArithmeticException';
  }
  ArithmeticException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArithmeticException',
    interfaces: [Exception]
  };
  function assert(condition, message) {
    Console.assert(condition, message());
  }
  function delay(seconds, then) {
    window.setTimeout(then, roundToInt(seconds * 1000));
  }
  function delay_0(seconds, then) {
    window.setTimeout(then, seconds.multiply(Kotlin.Long.fromInt(1000)));
  }
  function Cloneable() {
  }
  Cloneable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Cloneable',
    interfaces: []
  };
  function a() {
    a_instance = this;
  }
  a.prototype.get_i5x0yv$ = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.collections.a.get_i5x0yv$', function (Element_0, isElement, elements) {
    return elements.slice();
  });
  a.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'a',
    interfaces: []
  };
  var a_instance = null;
  function a_getInstance() {
    if (a_instance === null) {
      new a();
    }
    return a_instance;
  }
  function l() {
    l_instance = this;
  }
  l.prototype.get_i5x0yv$ = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.collections.l.get_i5x0yv$', wrapFunction(function () {
    var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
    return function (Element_0, isElement, elements) {
      return listOf(elements.slice());
    };
  }));
  l.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'l',
    interfaces: []
  };
  var l_instance = null;
  function l_getInstance() {
    if (l_instance === null) {
      new l();
    }
    return l_instance;
  }
  function s() {
    s_instance = this;
  }
  s.prototype.get_i5x0yv$ = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.collections.s.get_i5x0yv$', wrapFunction(function () {
    var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
    return function (Element_0, isElement, elements) {
      return setOf(elements.slice());
    };
  }));
  s.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 's',
    interfaces: []
  };
  var s_instance = null;
  function s_getInstance() {
    if (s_instance === null) {
      new s();
    }
    return s_instance;
  }
  function ms() {
    ms_instance = this;
  }
  ms.prototype.get_i5x0yv$ = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.collections.ms.get_i5x0yv$', wrapFunction(function () {
    var mutableSetOf = Kotlin.kotlin.collections.mutableSetOf_i5x0yv$;
    return function (Element_0, isElement, elements) {
      return mutableSetOf(elements.slice());
    };
  }));
  ms.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ms',
    interfaces: []
  };
  var ms_instance = null;
  function ms_getInstance() {
    if (ms_instance === null) {
      new ms();
    }
    return ms_instance;
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
  function DeltaStack(_originalState) {
    this._originalState_pbftts$_0 = _originalState;
    this._stack_ixyvp4$_0 = new MutableStack();
    this._cachedCurrentState_w2h6ue$_0 = this._originalState_pbftts$_0;
    this._baseState_maajls$_0 = this._originalState_pbftts$_0;
    this.delegate = null;
  }
  Object.defineProperty(DeltaStack.prototype, 'size', {
    get: function () {
      return this._stack_ixyvp4$_0.size;
    }
  });
  DeltaStack.prototype.pushState_hiizht$ = function (newState) {
    var tmp$, tmp$_0;
    this._stack_ixyvp4$_0.push_11rb$(newState);
    this._resetCachedState_o35l2q$_0();
    (tmp$ = this.delegate) != null ? (tmp$.deltaStackDidPushState_1mr95p$(this), Unit) : null;
    if (((tmp$_0 = this.delegate) != null ? tmp$_0.deltaStackShouldFlattenState_1mr95p$(this) : null) === true) {
      this.flattenState();
    }
  };
  DeltaStack.prototype.popState = function () {
    var tmp$;
    if (this._stack_ixyvp4$_0.size > 1) {
      this._stack_ixyvp4$_0.pop();
      this._resetCachedState_o35l2q$_0();
    }
    (tmp$ = this.delegate) != null ? (tmp$.deltaStackDidPopState_1mr95p$(this), Unit) : null;
    return this.currentState();
  };
  DeltaStack.prototype.reset_g14lj2$$default = function (newState) {
    this._baseState_maajls$_0 = newState != null ? newState : this._originalState_pbftts$_0;
    this._stack_ixyvp4$_0.clear();
    this._resetCachedState_o35l2q$_0(newState);
  };
  DeltaStack.prototype._resetCachedState_o35l2q$_0 = function (newState) {
    if (newState === void 0)
      newState = null;
    this._cachedCurrentState_w2h6ue$_0 = newState;
  };
  DeltaStack.prototype._flattenedState_gch22u$_0 = function () {
    var tmp$ = this._baseState_maajls$_0;
    var iterator = this._stack_ixyvp4$_0.iterator();
    if (!iterator.hasNext())
      throw UnsupportedOperationException_init("Empty collection can't be reduced.");
    var accumulator = iterator.next();
    while (iterator.hasNext()) {
      accumulator = accumulator.applyingChange_7t8klb$(iterator.next());
    }
    var flattenedState = tmp$.applyingChange_3vqmlr$(accumulator);
    this._resetCachedState_o35l2q$_0(flattenedState);
    return flattenedState;
  };
  DeltaStack.prototype.currentState = function () {
    var state = this._cachedCurrentState_w2h6ue$_0;
    if (state != null) {
      return state;
    }
     else {
      state = this._flattenedState_gch22u$_0();
      this._resetCachedState_o35l2q$_0(state);
      return state;
    }
  };
  DeltaStack.prototype.flattenState = function () {
    var tmp$;
    var flatState = this.currentState();
    this.reset_g14lj2$(flatState);
    (tmp$ = this.delegate) != null ? (tmp$.deltaStackDidFlattenState_1mr95p$(this), Unit) : null;
    return flatState;
  };
  DeltaStack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DeltaStack',
    interfaces: [ResettableStateStore]
  };
  function DeltaStack_init(baseState, delegate, $this) {
    $this = $this || Object.create(DeltaStack.prototype);
    DeltaStack.call($this, baseState);
    $this.delegate = delegate;
    return $this;
  }
  function DeltaStackDelegate() {
  }
  DeltaStackDelegate.prototype.deltaStackDidPushState_1mr95p$ = function (stack) {
  };
  DeltaStackDelegate.prototype.deltaStackDidPopState_1mr95p$ = function (stack) {
  };
  DeltaStackDelegate.prototype.deltaStackDidFlattenState_1mr95p$ = function (stack) {
  };
  DeltaStackDelegate.prototype.deltaStackShouldFlattenState_1mr95p$ = function (stack) {
    return false;
  };
  DeltaStackDelegate.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DeltaStackDelegate',
    interfaces: []
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function IndexSet() {
    this._ranges = [];
    var $receiver = this._ranges;
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(item.endInclusive - item.start | 0);
    }
    var iterator = destination.iterator();
    if (!iterator.hasNext())
      throw UnsupportedOperationException_init("Empty collection can't be reduced.");
    var accumulator = iterator.next();
    while (iterator.hasNext()) {
      accumulator = accumulator + iterator.next() | 0;
    }
    this._count = accumulator;
  }
  Object.defineProperty(IndexSet.prototype, 'size', {
    get: function () {
      return this._count;
    }
  });
  Object.defineProperty(IndexSet.prototype, 'ranges', {
    get: function () {
      return this._ranges;
    }
  });
  IndexSet.prototype.intersects_za3lpa$ = function (index) {
    var $receiver = this._ranges;
    var any$result;
    any$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (element.contains_mef7kx$(index)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  };
  IndexSet.prototype.union_njz0a3$ = function (other) {
    var newSet = {v: IndexSet_init([])};
    var $receiver = other._ranges;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      newSet.v = newSet.v.union_lntc4a$(element);
    }
    return newSet.v;
  };
  IndexSet.prototype.union_lntc4a$ = function (range) {
    var tmp$;
    var $receiver = this._ranges;
    var any$result;
    any$break: do {
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
        var element = $receiver[tmp$_0];
        if (containsCompletely(element, range)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    if (any$result) {
      return this;
    }
    if ((range.endInclusive - range.start | 0) <= 0) {
      return this;
    }
    var copy = this.clone();
    var addEnd = range.endInclusive;
    var startRangeIndex = (tmp$ = copy._indexOfRangeBeforeOrContainingIndex_kcn2v3$(range.start)) != null ? tmp$ : 0;
    var replacedRangeIndex = null;
    var rangeIndex = startRangeIndex;
    while (rangeIndex < this._ranges.length) {
      var curRange = this._ranges[rangeIndex];
      var curEnd = curRange.endInclusive;
      if (addEnd < curRange.start) {
        copy._insertRange_jimcn9$(range, rangeIndex);
        return this;
      }
       else {
        var tmp$_1 = range.start < curRange.start;
        if (tmp$_1) {
          tmp$_1 = addEnd >= curRange.start;
        }
        if (tmp$_1) {
          if (addEnd > curEnd) {
            copy._replaceRangeAtIndex_w5q0d6$(rangeIndex, range);
          }
           else {
            copy._replaceRangeAtIndex_w5q0d6$(rangeIndex, ClosedRange_1(range.start, curEnd - range.start | 0));
          }
          replacedRangeIndex = rangeIndex;
          break;
        }
         else {
          if (range.start >= curRange.start && addEnd < curEnd) {
            return this;
          }
           else {
            var tmp$_2 = range.start >= curRange.start;
            if (tmp$_2) {
              tmp$_2 = range.start <= curEnd;
            }
            if (tmp$_2 && addEnd > curEnd) {
              copy._replaceRangeAtIndex_w5q0d6$(rangeIndex, ClosedRange_1(curRange.start, addEnd - curRange.start | 0));
              replacedRangeIndex = rangeIndex;
              break;
            }
          }
        }
      }
      rangeIndex = rangeIndex + 1 | 0;
    }
    if (replacedRangeIndex != null) {
      copy._mergeOverlappingRangesStartingAtIndex_kcn2v3$(replacedRangeIndex);
    }
     else {
      copy._insertRange_jimcn9$(range, this._ranges.length);
    }
    return copy;
  };
  IndexSet.prototype.clone = function () {
    return IndexSet_init(this._ranges.slice());
  };
  IndexSet.prototype.union_za3lpa$ = function (index) {
    return this.union_lntc4a$(ClosedRange(index));
  };
  IndexSet.prototype.union_3p81yu$ = function (n) {
    return this.union_3p81yu$(toInt64Checked(n));
  };
  IndexSet.prototype._indexOfRangeBeforeOrContainingIndex_kcn2v3$ = function (idx) {
    var tmp$;
    var tmp$_0 = (tmp$ = this._indexAndRangeAdjacentToOrContainingIndex_kcn2v3$(idx)) != null ? tmp$ : new Pair(null, null);
    var rIdx = tmp$_0.component1()
    , range = tmp$_0.component2();
    if (rIdx != null && range != null) {
      if (range.start <= idx) {
        return rIdx;
      }
       else if (rIdx > 0) {
        return rIdx - 1 | 0;
      }
       else {
        return null;
      }
    }
     else {
      return null;
    }
  };
  IndexSet.prototype._indexAndRangeAdjacentToOrContainingIndex_kcn2v3$ = function (idx) {
    var count = this._ranges.length;
    if (count <= 0) {
      return null;
    }
    var min = 0;
    var max = count - 1 | 0;
    while (min < max) {
      var rIdx = (min + max | 0) / 2 | 0;
      var range = this._ranges[rIdx];
      if (range.start > idx) {
        max = rIdx;
      }
       else {
        if ((range.endInclusive - 1 | 0) < idx) {
          min = rIdx + 1 | 0;
        }
         else {
          return new Pair(rIdx, range);
        }
      }
    }
    return new Pair(min, this._ranges[min]);
  };
  IndexSet.prototype._insertRange_jimcn9$ = function (range, index) {
    this._ranges = inserting(this._ranges, range, index);
    this._count = this._count + (range.endInclusive - range.start | 0) | 0;
  };
  IndexSet.prototype._replaceRangeAtIndex_w5q0d6$ = function (index, range) {
    var oldRange = this._ranges[index];
    if (range != null) {
      this._ranges[index] = range;
      this._count = this._count + ((range.endInclusive - range.start | 0) - (oldRange.endInclusive - oldRange.start | 0)) | 0;
    }
     else {
      this._ranges = removing(this._ranges, index);
      this._count = this._count - (oldRange.endInclusive - oldRange.start | 0) | 0;
    }
  };
  IndexSet.prototype._mergeOverlappingRangesStartingAtIndex_kcn2v3$ = function (index) {
    var rangeIndex = index;
    while (true) {
      var tmp$ = this._ranges.length > 0;
      if (tmp$) {
        tmp$ = rangeIndex < (this._ranges.length - 1 | 0);
      }
      if (!tmp$)
        break;
      var curRange = this._ranges[rangeIndex];
      var nextRange = this._ranges[rangeIndex + 1 | 0];
      var curEnd = curRange.endInclusive;
      var nextEnd = nextRange.endInclusive;
      if (curEnd >= nextRange.start) {
        if (curEnd < nextEnd) {
          this._replaceRangeAtIndex_w5q0d6$(rangeIndex, ClosedRange_1(nextEnd - curRange.start | 0, curRange.endInclusive - curRange.start | 0));
          rangeIndex = rangeIndex + 1 | 0;
        }
        this._replaceRangeAtIndex_w5q0d6$(rangeIndex + 1 | 0, null);
      }
       else {
        break;
      }
    }
  };
  IndexSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IndexSet',
    interfaces: [Cloneable]
  };
  function IndexSet_init(ranges, $this) {
    $this = $this || Object.create(IndexSet.prototype);
    IndexSet.call($this);
    var tmp$;
    for (tmp$ = 0; tmp$ !== ranges.length; ++tmp$) {
      var element = ranges[tmp$];
      $this.union_lntc4a$(element);
    }
    return $this;
  }
  function IndexSet_init_0(integers, $this) {
    $this = $this || Object.create(IndexSet.prototype);
    IndexSet.call($this);
    var tmp$;
    for (tmp$ = 0; tmp$ !== integers.length; ++tmp$) {
      var element = integers[tmp$];
      $this.union_za3lpa$(element);
    }
    return $this;
  }
  function IndexSet_init_1(integers, $this) {
    $this = $this || Object.create(IndexSet.prototype);
    IndexSet.call($this);
    var tmp$;
    tmp$ = integers.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $this.union_za3lpa$(element);
    }
    return $this;
  }
  function IndexSet_init_2(index, $this) {
    $this = $this || Object.create(IndexSet.prototype);
    IndexSet_init([ClosedRange(index)], $this);
    return $this;
  }
  function isWithin($receiver, set) {
    return set.intersects_za3lpa$($receiver);
  }
  function get_indexSetValue($receiver) {
    return IndexSet_init_0($receiver);
  }
  function get_indexSetValue_0($receiver) {
    return IndexSet_init_1($receiver);
  }
  function get_indexSetValue_1($receiver) {
    return IndexSet_init_0(toIntArray($receiver));
  }
  function get_indexSetValue_2($receiver) {
    return IndexSet_init_1($receiver);
  }
  function get_indexSetValue_3($receiver) {
    return IndexSet_init_1(toList($receiver));
  }
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function Queue(backingList) {
    if (backingList === void 0) {
      backingList = ArrayList_init_0();
    }
    this.backingList = backingList;
  }
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_7wnvza$;
  Object.defineProperty(Queue.prototype, 'front', {
    get: function () {
      return firstOrNull(this.backingList);
    }
  });
  Object.defineProperty(Queue.prototype, 'size', {
    get: function () {
      return toInt64Checked(this.backingList.size);
    }
  });
  Object.defineProperty(Queue.prototype, 'isEmpty', {
    get: function () {
      return equals(this.size, L0);
    }
  });
  Queue.prototype.pushOntoBack_11rb$ = function (newElement) {
    this.backingList.add_11rb$(newElement);
    return this;
  };
  Queue.prototype.popFromFront = function () {
    return this.backingList.removeAt_za3lpa$(0);
  };
  Queue.prototype.pumpAll_qlkmfe$ = function (processor) {
    var each = this.popFromFront();
    while (each != null) {
      processor(each);
      each = this.popFromFront();
    }
  };
  Queue.prototype.listValue = function () {
    return toList(this.backingList);
  };
  Queue.prototype.mutableListValue = function () {
    return toMutableList(this.backingList);
  };
  Queue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Queue',
    interfaces: []
  };
  function peekAtFront($receiver) {
    return $receiver.front;
  }
  function Stack(core) {
    if (core === void 0)
      core = List();
    this.core_27u4vk$_0 = core;
  }
  Object.defineProperty(Stack.prototype, 'core', {
    get: function () {
      return this.core_27u4vk$_0;
    }
  });
  Stack.prototype.pushing_11rb$ = function (newElement) {
    return new Stack(adding(this.core, 0, newElement));
  };
  Stack.prototype.popped = function () {
    return new Pair(this.peek(), new Stack(removingAt(this.core, 0)));
  };
  Stack.prototype.peek = function () {
    return firstOrNull(this);
  };
  Object.defineProperty(Stack.prototype, 'size', {
    get: function () {
      return this.core.size;
    }
  });
  Stack.prototype.contains_11rb$ = function (element) {
    return this.core.contains_11rb$(element);
  };
  Stack.prototype.containsAll_brywnq$ = function (elements) {
    return this.core.containsAll_brywnq$(elements);
  };
  Stack.prototype.isEmpty = function () {
    return this.core.isEmpty();
  };
  Stack.prototype.iterator = function () {
    return this.core.iterator();
  };
  Stack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Stack',
    interfaces: [Collection]
  };
  function MutableStack(core) {
    if (core === void 0)
      core = MutableList();
    Stack.call(this, core);
    this.core_9fly44$_0 = core;
  }
  Object.defineProperty(MutableStack.prototype, 'core', {
    get: function () {
      return this.core_9fly44$_0;
    }
  });
  MutableStack.prototype.push_11rb$ = function (newElement) {
    this.core.add_wxm5ur$(0, newElement);
  };
  MutableStack.prototype.pop = function () {
    return this.core.removeAt_za3lpa$(0);
  };
  MutableStack.prototype.clear = function () {
    this.core.clear();
  };
  MutableStack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MutableStack',
    interfaces: [Stack]
  };
  var get_count = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.collections.extensions.get_count_qjns17$', function ($receiver) {
    return $receiver.length;
  });
  var get_length = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.collections.extensions.get_length_qjns17$', function ($receiver) {
    return $receiver.length;
  });
  var get_count_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.collections.extensions.get_count_gzk92b$', function ($receiver) {
    return $receiver.size;
  });
  var get_length_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.collections.extensions.get_length_gzk92b$', function ($receiver) {
    return $receiver.size;
  });
  function inserting($receiver, elements, index) {
    var left = sliceArray($receiver, new IntRange(0, index - 1 | 0));
    var right = sliceArray($receiver, new IntRange(index - 1 | 0, $receiver.length - 1 | 0));
    return left.concat([elements]).concat(right);
  }
  function removing($receiver, index) {
    return removing_0($receiver, ClosedRange(index));
  }
  function removing_0($receiver, range) {
    var left = sliceArray($receiver, new IntRange(0, max(0, range.start - 1 | 0)));
    var right = sliceArray($receiver, new IntRange(min($receiver.length - 1 | 0, range.endInclusive - 1 | 0), $receiver.length - 1 | 0));
    return left.concat(right);
  }
  function removing_1($receiver, indices) {
    var ret = {v: $receiver.slice()};
    var $receiver_0 = indices.ranges;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
      var element = $receiver_0[tmp$];
      ret.v = removing_0(ret.v, element);
    }
    return ret.v;
  }
  function removing_2($receiver, indices) {
    return removing_1($receiver, get_indexSetValue(indices));
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  function filterMap($receiver, predicateTransform) {
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(predicateTransform(item));
    }
    var predicate = getPropertyCallableRef('first', 1, function ($receiver) {
      return $receiver.first;
    });
    var destination_0 = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (predicate(element))
        destination_0.add_11rb$(element);
    }
    var destination_1 = ArrayList_init(collectionSizeOrDefault(destination_0, 10));
    var tmp$_1;
    tmp$_1 = destination_0.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      destination_1.add_11rb$(item_0.second());
    }
    return destination_1;
  }
  var get_first = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.collections.extensions.get_first_4mqhgw$', wrapFunction(function () {
    var first = Kotlin.kotlin.collections.first_7wnvza$;
    return function ($receiver) {
      return first($receiver);
    };
  }));
  var get_firstOrNull = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.collections.extensions.get_firstOrNull_4mqhgw$', wrapFunction(function () {
    var firstOrNull = Kotlin.kotlin.collections.firstOrNull_7wnvza$;
    return function ($receiver) {
      return firstOrNull($receiver);
    };
  }));
  var allButFirst = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.collections.extensions.allButFirst_licpcz$', wrapFunction(function () {
    var get_clampedInt32Value = _.org.bh.tools.base.math.get_clampedInt32Value_mts6qi$;
    var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
    return function ($receiver, badFirstElements) {
      return drop($receiver, get_clampedInt32Value(badFirstElements));
    };
  }));
  var get_allButFirst = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.collections.extensions.get_allButFirst_4mqhgw$', wrapFunction(function () {
    var L1 = Kotlin.Long.ONE;
    var get_clampedInt32Value = _.org.bh.tools.base.math.get_clampedInt32Value_mts6qi$;
    var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
    return function ($receiver) {
      return drop($receiver, get_clampedInt32Value(L1));
    };
  }));
  var get_last = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.collections.extensions.get_last_4mqhgw$', wrapFunction(function () {
    var last = Kotlin.kotlin.collections.last_7wnvza$;
    return function ($receiver) {
      return last($receiver);
    };
  }));
  var get_lastOrNull = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.collections.extensions.get_lastOrNull_4mqhgw$', wrapFunction(function () {
    var lastOrNull = Kotlin.kotlin.collections.lastOrNull_7wnvza$;
    return function ($receiver) {
      return lastOrNull($receiver);
    };
  }));
  var removeFirst = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.collections.extensions.removeFirst_vvxzk3$', function ($receiver) {
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
  var firstOrNullComparingTriads = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.collections.extensions.firstOrNullComparingTriads_csic9r$', wrapFunction(function () {
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
  var firstOrNullComparingPairs = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.collections.extensions.firstOrNullComparingPairs_cf0iqu$', wrapFunction(function () {
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
  var reduceTo = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.collections.extensions.reduceTo_db6zb0$', wrapFunction(function () {
    return function ($receiver, startingValue, reducer) {
      var runningValue = {v: startingValue};
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        runningValue.v = reducer(runningValue.v, element);
      }
      return runningValue.v;
    };
  }));
  function reduceInto($receiver, startingValue, reducer) {
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      reducer(startingValue, element);
    }
    return startingValue;
  }
  var safeReduce = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.collections.extensions.safeReduce_lrrcxv$', wrapFunction(function () {
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
  var safeReduce_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.collections.extensions.safeReduce_w5eg7r$', wrapFunction(function () {
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
  function toString_2($receiver, prefix, glue, suffix) {
    if (prefix === void 0)
      prefix = '';
    if (suffix === void 0)
      suffix = '';
    return joinToString($receiver, glue, prefix, suffix);
  }
  var nonEmpty = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.collections.extensions.nonEmpty_b5o7sk$', wrapFunction(function () {
    var count = Kotlin.kotlin.collections.count_7wnvza$;
    return function ($receiver) {
      return count($receiver) > 0 ? $receiver : null;
    };
  }));
  var get_nonEmpty = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.collections.extensions.get_nonEmpty_yfwuwe$', wrapFunction(function () {
    var count = Kotlin.kotlin.collections.count_7wnvza$;
    return function ($receiver) {
      return count($receiver) > 0 ? $receiver : null;
    };
  }));
  function forEach($receiver, iterator) {
    var tmp$;
    tmp$ = $receiver.first.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      tmp$_0 = $receiver.second.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        iterator(element, element_0);
      }
    }
  }
  function firstMappedOrNull($receiver, mapper) {
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      if ((tmp$_0 = mapper(element)) != null) {
        return tmp$_0;
      }
    }
    return null;
  }
  function forEachReversedIndexed($receiver, processor) {
    var tmp$;
    tmp$ = downTo($receiver.size, 0).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      processor(element, elementAt($receiver, element));
    }
  }
  function forEachReversed$lambda(closure$processor) {
    return function (f, element) {
      closure$processor(element);
      return Unit;
    };
  }
  function forEachReversed($receiver, processor) {
    forEachReversedIndexed($receiver, forEachReversed$lambda(processor));
  }
  function adding($receiver, index, newElement) {
    var newList = toMutableList($receiver);
    newList.add_wxm5ur$(index, newElement);
    return newList;
  }
  function removingAt$lambda(closure$newList, closure$index) {
    return function () {
      return closure$newList.removeAt_za3lpa$(closure$index);
    };
  }
  function removingAt($receiver, index) {
    var newList = toMutableList($receiver);
    safeTry(removingAt$lambda(newList, index));
    return newList;
  }
  function List() {
    return emptyList();
  }
  function List_0(initialElements) {
    return listOf(initialElements.slice());
  }
  function MutableList() {
    return ArrayList_init_0();
  }
  function MutableList_0(initialElements) {
    return mutableListOf(initialElements.slice());
  }
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  function get_0($receiver, index, backup) {
    return index >= 0 && index <= get_lastIndex($receiver) ? $receiver.get_za3lpa$(index) : backup(index);
  }
  function getOrSet($receiver, at, newElement, paddingGenerator) {
    var tmp$;
    var index = at;
    if ((tmp$ = getOrNull($receiver, index)) != null) {
      return tmp$;
    }
    var backupValue = newElement(index);
    if ($receiver.size <= index) {
      while ($receiver.size < index) {
        $receiver.add_11rb$(paddingGenerator(index));
      }
      $receiver.add_11rb$(backupValue);
    }
     else {
      $receiver.set_wxm5ur$(index, backupValue);
    }
    return backupValue;
  }
  function get$lambda(closure$backup) {
    return function (it) {
      return closure$backup;
    };
  }
  function get_1($receiver, index, backup) {
    return get_0($receiver, index, get$lambda(backup));
  }
  var nonEmpty_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.collections.extensions.nonEmpty_imad5s$', function ($receiver) {
    return $receiver.isEmpty() ? null : $receiver;
  });
  var get_nonEmpty_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.collections.extensions.get_nonEmpty_d8o44m$', function ($receiver) {
    return $receiver.isEmpty() ? null : $receiver;
  });
  function indexOrNull($receiver, of) {
    var $receiver_0 = $receiver.indexOf_11rb$(of);
    return $receiver_0 < 0 ? null : $receiver_0;
  }
  function subList($receiver, range) {
    return $receiver.subList_vux9f0$(range.first.toInt(), range.last.toInt());
  }
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_7wnvza$;
  function humanReadableList($receiver, conjunction) {
    var tmp$;
    switch ($receiver.size) {
      case 0:
        tmp$ = '';
        break;
      case 1:
        tmp$ = toString(firstOrNull($receiver));
        break;
      case 2:
        tmp$ = toString($receiver.get_za3lpa$(0)) + ' ' + conjunction + ' ' + toString($receiver.get_za3lpa$(1));
        break;
      default:tmp$ = joinToString($receiver.subList_vux9f0$(0, $receiver.size - 1 | 0), ', ') + ', ' + conjunction + ' ' + toString(lastOrNull($receiver));
        break;
    }
    return tmp$;
  }
  function Conjunction(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Conjunction_initFields() {
    Conjunction_initFields = function () {
    };
    Conjunction$and_instance = new Conjunction('and', 0);
    Conjunction$or_instance = new Conjunction('or', 1);
    Conjunction$andor_instance = new Conjunction('andor', 2);
  }
  var Conjunction$and_instance;
  function Conjunction$and_getInstance() {
    Conjunction_initFields();
    return Conjunction$and_instance;
  }
  var Conjunction$or_instance;
  function Conjunction$or_getInstance() {
    Conjunction_initFields();
    return Conjunction$or_instance;
  }
  var Conjunction$andor_instance;
  function Conjunction$andor_getInstance() {
    Conjunction_initFields();
    return Conjunction$andor_instance;
  }
  Conjunction.prototype.toString = function () {
    var tmp$;
    switch (this.name) {
      case 'and':
        tmp$ = 'and';
        break;
      case 'or':
        tmp$ = 'or';
        break;
      case 'andor':
        tmp$ = 'andor';
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$;
  };
  Conjunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Conjunction',
    interfaces: [Enum]
  };
  function Conjunction$values() {
    return [Conjunction$and_getInstance(), Conjunction$or_getInstance(), Conjunction$andor_getInstance()];
  }
  Conjunction.values = Conjunction$values;
  function Conjunction$valueOf(name) {
    switch (name) {
      case 'and':
        return Conjunction$and_getInstance();
      case 'or':
        return Conjunction$or_getInstance();
      case 'andor':
        return Conjunction$andor_getInstance();
      default:throwISE('No enum constant org.bh.tools.base.collections.extensions.Conjunction.' + name);
    }
  }
  Conjunction.valueOf_61zpoe$ = Conjunction$valueOf;
  function firstOrNull_0($receiver, evaluator) {
    var $receiver_0 = $receiver.keys;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (evaluator(element, $receiver.get_11rb$(element))) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var key = firstOrNull$result;
    if (key != null) {
      var value = $receiver.get_11rb$(key);
      if (value != null) {
        return new Pair(key, value);
      }
    }
    return null;
  }
  function firstOrCrash($receiver, evaluator) {
    var tmp$;
    tmp$ = firstOrNull_0($receiver, evaluator);
    if (tmp$ == null) {
      throw new NoSuchElementException('No element pleases the evaluator');
    }
    return tmp$;
  }
  function removeDuplicates$lambda(this$removeDuplicates) {
    return function (evilIndex) {
      this$removeDuplicates.removeAt_za3lpa$(evilIndex);
      return Unit;
    };
  }
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  function removeDuplicates($receiver) {
    var tracker = LinkedHashSet_init();
    var evilIndices = ArrayList_init_0();
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      if (tracker.contains_11rb$(item)) {
        evilIndices.add_11rb$(index_0);
      }
       else {
        tracker.add_11rb$(item);
      }
    }
    forEachReversed(evilIndices, removeDuplicates$lambda($receiver));
    return $receiver;
  }
  var nonEmpty_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.collections.extensions.nonEmpty_uzyswq$', wrapFunction(function () {
    var count = Kotlin.kotlin.sequences.count_veqyi0$;
    return function ($receiver) {
      return count($receiver) > 0 ? $receiver : null;
    };
  }));
  var get_nonEmpty_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.collections.extensions.get_nonEmpty_y2unvk$', wrapFunction(function () {
    var count = Kotlin.kotlin.sequences.count_veqyi0$;
    return function ($receiver) {
      return count($receiver) > 0 ? $receiver : null;
    };
  }));
  var insert = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.collections.extensions.insert_tag10t$', function ($receiver, newElement) {
    return $receiver.add_11rb$(newElement);
  });
  var inserting_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.collections.extensions.inserting_xfiyik$', wrapFunction(function () {
    var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
    var copyToArray = Kotlin.kotlin.collections.copyToArray;
    return function (Element_0, isElement, $receiver, newElement) {
      return setOf(copyToArray($receiver).concat([newElement]));
    };
  }));
  var notFound;
  var notFoundNumber;
  function shiftBitsLeft($receiver, bitCount) {
    return $receiver.shiftLeft(bitCount);
  }
  function shiftBitsLeft_0($receiver, bitCount) {
    return $receiver << bitCount;
  }
  function shiftBitsLeft_1($receiver, bitCount) {
    return $receiver << bitCount;
  }
  function shiftBitsLeft_2($receiver, bitCount) {
    return $receiver << bitCount;
  }
  function shiftBitsRightCopying($receiver, bitCount) {
    return $receiver.shiftRight(bitCount);
  }
  function shiftBitsRightCopying_0($receiver, bitCount) {
    return $receiver >> bitCount;
  }
  function shiftBitsRightCopying_1($receiver, bitCount) {
    return $receiver >> bitCount;
  }
  function shiftBitsRightCopying_2($receiver, bitCount) {
    return $receiver >> bitCount;
  }
  function shiftBitsRightWithZeroes($receiver, bitCount) {
    return $receiver.shiftRightUnsigned(bitCount);
  }
  function shiftBitsRightWithZeroes_0($receiver, bitCount) {
    return $receiver >>> bitCount;
  }
  function shiftBitsRightWithZeroes_1($receiver, bitCount) {
    return $receiver >>> bitCount;
  }
  function shiftBitsRightWithZeroes_2($receiver, bitCount) {
    return $receiver >>> bitCount;
  }
  function UnsupportedOperationException_0(message, cause) {
    Throwable.call(this);
    this.message_yt80gr$_0 = typeof message === 'undefined' && cause != null ? Kotlin.toString(cause) : message;
    this.cause_108lkp$_0 = cause;
    Kotlin.captureStack(Throwable, this);
    this.name = 'UnsupportedOperationException';
  }
  Object.defineProperty(UnsupportedOperationException_0.prototype, 'message', {
    get: function () {
      return this.message_yt80gr$_0;
    }
  });
  Object.defineProperty(UnsupportedOperationException_0.prototype, 'cause', {
    get: function () {
      return this.cause_108lkp$_0;
    }
  });
  UnsupportedOperationException_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnsupportedOperationException',
    interfaces: [Throwable]
  };
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
  function Single(first) {
    this.first = first;
  }
  Single.prototype.toString = function () {
    return '(' + this.first + ')';
  };
  Single.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Single',
    interfaces: []
  };
  Single.prototype.component1 = function () {
    return this.first;
  };
  Single.prototype.copy_11rb$ = function (first) {
    return new Single(first === void 0 ? this.first : first);
  };
  Single.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.first) | 0;
    return result;
  };
  Single.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.first, other.first))));
  };
  function toList_2($receiver) {
    return listOf_0($receiver.first);
  }
  function tuple(first) {
    return new Single(first);
  }
  function tuple_0(first, second) {
    return new Pair(first, second);
  }
  function tuple_1(first, second, third) {
    return new Triple(first, second, third);
  }
  function TupleConvertible() {
  }
  TupleConvertible.prototype.toTuple = function () {
    return this.tupleValue;
  };
  TupleConvertible.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TupleConvertible',
    interfaces: []
  };
  var transform = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.func.transform_96jf0l$', function ($receiver, transformer) {
    return transformer($receiver);
  });
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
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
  var toString_3 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.jsShim.toString_798l30$', function ($receiver, base) {
    return $receiver.toString(base);
  });
  var toString_4 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.jsShim.toString_di2vk2$', function ($receiver, base) {
    return $receiver.toString(base);
  });
  var toString_5 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.jsShim.toString_dqglrj$', function ($receiver, base) {
    return $receiver.toString(base);
  });
  var toString_6 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.jsShim.toString_if0zpk$', function ($receiver, base) {
    return $receiver.toString(base);
  });
  var replace = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.jsShim.replace_he2ph6$', function ($receiver, regExp, replacer) {
    return $receiver.replace(regExp, replacer);
  });
  function Logger() {
  }
  Logger.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Logger',
    interfaces: []
  };
  var trace = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.logging.trace_bi1eci$', wrapFunction(function () {
    var LoggerLevel = _.org.bh.tools.base.logging.LoggerLevel;
    return function ($receiver, messageGenerator) {
      $receiver.log_rcngj1$(LoggerLevel.trace, messageGenerator);
    };
  }));
  var verbose = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.logging.verbose_bi1eci$', wrapFunction(function () {
    var LoggerLevel = _.org.bh.tools.base.logging.LoggerLevel;
    return function ($receiver, messageGenerator) {
      $receiver.log_rcngj1$(LoggerLevel.Companion.verbose, messageGenerator);
    };
  }));
  var debug = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.logging.debug_bi1eci$', wrapFunction(function () {
    var LoggerLevel = _.org.bh.tools.base.logging.LoggerLevel;
    return function ($receiver, messageGenerator) {
      $receiver.log_rcngj1$(LoggerLevel.debug, messageGenerator);
    };
  }));
  var informational = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.logging.informational_bi1eci$', wrapFunction(function () {
    var LoggerLevel = _.org.bh.tools.base.logging.LoggerLevel;
    return function ($receiver, messageGenerator) {
      $receiver.log_rcngj1$(LoggerLevel.informational, messageGenerator);
    };
  }));
  var info = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.logging.info_bi1eci$', wrapFunction(function () {
    var LoggerLevel = _.org.bh.tools.base.logging.LoggerLevel;
    return function ($receiver, messageGenerator) {
      $receiver.log_rcngj1$(LoggerLevel.Companion.info, messageGenerator);
    };
  }));
  var warning = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.logging.warning_bi1eci$', wrapFunction(function () {
    var LoggerLevel = _.org.bh.tools.base.logging.LoggerLevel;
    return function ($receiver, messageGenerator) {
      $receiver.log_rcngj1$(LoggerLevel.warning, messageGenerator);
    };
  }));
  var warn = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.logging.warn_bi1eci$', wrapFunction(function () {
    var LoggerLevel = _.org.bh.tools.base.logging.LoggerLevel;
    return function ($receiver, messageGenerator) {
      $receiver.log_rcngj1$(LoggerLevel.Companion.warn, messageGenerator);
    };
  }));
  var error_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.logging.error_bi1eci$', wrapFunction(function () {
    var LoggerLevel = _.org.bh.tools.base.logging.LoggerLevel;
    return function ($receiver, messageGenerator) {
      $receiver.log_rcngj1$(LoggerLevel.error, messageGenerator);
    };
  }));
  var fatal = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.logging.fatal_bi1eci$', wrapFunction(function () {
    var LoggerLevel = _.org.bh.tools.base.logging.LoggerLevel;
    return function ($receiver, messageGenerator) {
      $receiver.log_rcngj1$(LoggerLevel.fatal, messageGenerator);
    };
  }));
  function LoggerLevel(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LoggerLevel_initFields() {
    LoggerLevel_initFields = function () {
    };
    LoggerLevel$trace_instance = new LoggerLevel('trace', 0);
    LoggerLevel$debug_instance = new LoggerLevel('debug', 1);
    LoggerLevel$informational_instance = new LoggerLevel('informational', 2);
    LoggerLevel$warning_instance = new LoggerLevel('warning', 3);
    LoggerLevel$error_instance = new LoggerLevel('error', 4);
    LoggerLevel$fatal_instance = new LoggerLevel('fatal', 5);
    LoggerLevel$Companion_getInstance();
  }
  var LoggerLevel$trace_instance;
  function LoggerLevel$trace_getInstance() {
    LoggerLevel_initFields();
    return LoggerLevel$trace_instance;
  }
  var LoggerLevel$debug_instance;
  function LoggerLevel$debug_getInstance() {
    LoggerLevel_initFields();
    return LoggerLevel$debug_instance;
  }
  var LoggerLevel$informational_instance;
  function LoggerLevel$informational_getInstance() {
    LoggerLevel_initFields();
    return LoggerLevel$informational_instance;
  }
  var LoggerLevel$warning_instance;
  function LoggerLevel$warning_getInstance() {
    LoggerLevel_initFields();
    return LoggerLevel$warning_instance;
  }
  var LoggerLevel$error_instance;
  function LoggerLevel$error_getInstance() {
    LoggerLevel_initFields();
    return LoggerLevel$error_instance;
  }
  var LoggerLevel$fatal_instance;
  function LoggerLevel$fatal_getInstance() {
    LoggerLevel_initFields();
    return LoggerLevel$fatal_instance;
  }
  function LoggerLevel$Companion() {
    LoggerLevel$Companion_instance = this;
  }
  Object.defineProperty(LoggerLevel$Companion.prototype, 'verbose', {
    get: function () {
      return LoggerLevel$trace_getInstance();
    }
  });
  Object.defineProperty(LoggerLevel$Companion.prototype, 'info', {
    get: function () {
      return LoggerLevel$informational_getInstance();
    }
  });
  Object.defineProperty(LoggerLevel$Companion.prototype, 'warn', {
    get: function () {
      return LoggerLevel$warning_getInstance();
    }
  });
  LoggerLevel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LoggerLevel$Companion_instance = null;
  function LoggerLevel$Companion_getInstance() {
    LoggerLevel_initFields();
    if (LoggerLevel$Companion_instance === null) {
      new LoggerLevel$Companion();
    }
    return LoggerLevel$Companion_instance;
  }
  LoggerLevel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggerLevel',
    interfaces: [Enum]
  };
  function LoggerLevel$values() {
    return [LoggerLevel$trace_getInstance(), LoggerLevel$debug_getInstance(), LoggerLevel$informational_getInstance(), LoggerLevel$warning_getInstance(), LoggerLevel$error_getInstance(), LoggerLevel$fatal_getInstance()];
  }
  LoggerLevel.values = LoggerLevel$values;
  function LoggerLevel$valueOf(name) {
    switch (name) {
      case 'trace':
        return LoggerLevel$trace_getInstance();
      case 'debug':
        return LoggerLevel$debug_getInstance();
      case 'informational':
        return LoggerLevel$informational_getInstance();
      case 'warning':
        return LoggerLevel$warning_getInstance();
      case 'error':
        return LoggerLevel$error_getInstance();
      case 'fatal':
        return LoggerLevel$fatal_getInstance();
      default:throwISE('No enum constant org.bh.tools.base.logging.LoggerLevel.' + name);
    }
  }
  LoggerLevel.valueOf_61zpoe$ = LoggerLevel$valueOf;
  function Loggers() {
    Loggers_instance = this;
    this.allLoggers_0 = LinkedHashSet_init();
  }
  Loggers.prototype.register_ijhcvf$ = function (newLogger) {
    this.allLoggers_0.add_11rb$(newLogger);
  };
  Loggers.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Loggers',
    interfaces: []
  };
  var Loggers_instance = null;
  function Loggers_getInstance() {
    if (Loggers_instance === null) {
      new Loggers();
    }
    return Loggers_instance;
  }
  function greatestCommonDivisor(a, b) {
    var tmp$;
    tmp$ = abs_1(max(a, b));
    if (contains(new IntRange(0, 100000), tmp$))
      return greatestCommonDivisor_euclid(a, b);
    else
      return greatestCommonDivisor_binaryMethod(a, b);
  }
  function greatestCommonDivisor_euclid(a, b) {
    if (equals(b, L0))
      return a;
    else
      return greatestCommonDivisor_euclid(b, a.modulo(b));
  }
  function greatestCommonDivisor_binaryMethod(a, b) {
    var aVar = a;
    var bVar = b;
    var d = L0;
    while (get_isEven(aVar) & get_isEven(bVar)) {
      aVar = aVar.div(Kotlin.Long.fromInt(2));
      bVar = bVar.div(Kotlin.Long.fromInt(2));
      d = d.add(Kotlin.Long.fromInt(1));
    }
    while (!equals(aVar, bVar)) {
      if (get_isEven(aVar)) {
        aVar = aVar.div(Kotlin.Long.fromInt(2));
      }
       else if (get_isEven(bVar)) {
        bVar = bVar.div(Kotlin.Long.fromInt(2));
      }
       else if (aVar.compareTo_11rb$(bVar) > 0) {
        aVar = aVar.subtract(bVar).div(Kotlin.Long.fromInt(2));
      }
       else {
        bVar = bVar.subtract(aVar).div(Kotlin.Long.fromInt(2));
      }
    }
    var g = aVar;
    return g.multiply(toThePowerOf_0(L2, d));
  }
  var greatestCommonDivisorWith = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.greatestCommonDivisorWith_2p08ub$', wrapFunction(function () {
    var greatestCommonDivisor = _.org.bh.tools.base.math.greatestCommonDivisor_3pjtqy$;
    return function ($receiver, other) {
      return greatestCommonDivisor($receiver, other);
    };
  }));
  var isCoprime = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.isCoprime_3pjtqy$', wrapFunction(function () {
    var greatestCommonDivisor = _.org.bh.tools.base.math.greatestCommonDivisor_3pjtqy$;
    var L1 = Kotlin.Long.ONE;
    var equals = Kotlin.equals;
    return function (a, b) {
      return equals(greatestCommonDivisor(a, b), L1);
    };
  }));
  var isCoprimeWith = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.isCoprimeWith_2p08ub$', wrapFunction(function () {
    var greatestCommonDivisor = _.org.bh.tools.base.math.greatestCommonDivisor_3pjtqy$;
    var L1 = Kotlin.Long.ONE;
    var equals = Kotlin.equals;
    return function ($receiver, other) {
      return equals(greatestCommonDivisor($receiver, other), L1);
    };
  }));
  var Long$Companion$MIN_VALUE = Kotlin.Long.MIN_VALUE;
  function numberOfDigits($receiver, radix) {
    if (radix === void 0)
      radix = 10;
    if (equals($receiver, Long$Companion$MIN_VALUE))
      return 19;
    else {
      return toByte(toString_0(abs_1($receiver), radix).length);
    }
  }
  function numberOfDigits_0($receiver, radix) {
    if (radix === void 0)
      radix = 10;
    if ($receiver === -2147483648)
      return 10;
    else {
      return toByte(toString_1(abs_2($receiver), radix).length);
    }
  }
  var kotlin_js_internal_ShortCompanionObject = Kotlin.kotlin.js.internal.ShortCompanionObject;
  function numberOfDigits_1($receiver, radix) {
    if (radix === void 0)
      radix = 10;
    if ($receiver === kotlin_js_internal_ShortCompanionObject.MIN_VALUE)
      return 5;
    else {
      return toByte(toString_1(abs_3($receiver), radix).length);
    }
  }
  var kotlin_js_internal_ByteCompanionObject = Kotlin.kotlin.js.internal.ByteCompanionObject;
  function numberOfDigits_2($receiver, radix) {
    if (radix === void 0)
      radix = 10;
    if ($receiver === kotlin_js_internal_ByteCompanionObject.MIN_VALUE)
      return 3;
    else {
      return toByte(toString_1(abs_4($receiver), radix).length);
    }
  }
  function get_isPowerOf10($receiver) {
    var tmp$;
    tmp$ = abs_1($receiver);
    if (equals(tmp$, L1) || equals(tmp$, L10) || equals(tmp$, L100) || equals(tmp$, L1000) || equals(tmp$, L10000) || equals(tmp$, L100000) || equals(tmp$, L1000000) || equals(tmp$, L10000000) || equals(tmp$, L100000000) || equals(tmp$, L1000000000) || equals(tmp$, L10000000000) || equals(tmp$, L100000000000) || equals(tmp$, L1000000000000) || equals(tmp$, L10000000000000) || equals(tmp$, L100000000000000) || equals(tmp$, L1000000000000000) || equals(tmp$, L10000000000000000) || equals(tmp$, L100000000000000000) || equals(tmp$, L1000000000000000000))
      return true;
    else
      return false;
  }
  function Averager(startingNumber) {
    if (startingNumber === void 0)
      startingNumber = null;
    Number_0.call(this);
    this._currentAverage_0 = startingNumber != null ? startingNumber : 0.0;
    this.timesAveraged_1gj2fo$_0 = startingNumber != null ? L1 : L0;
  }
  Object.defineProperty(Averager.prototype, 'timesAveraged', {
    get: function () {
      return this.timesAveraged_1gj2fo$_0;
    },
    set: function (timesAveraged) {
      this.timesAveraged_1gj2fo$_0 = timesAveraged;
    }
  });
  Object.defineProperty(Averager.prototype, 'currentAverageOrNaN', {
    get: function () {
      return this.timesAveraged.toNumber() > 0 ? this._currentAverage_0 : kotlin_js_internal_DoubleCompanionObject.NaN;
    }
  });
  Object.defineProperty(Averager.prototype, 'currentAverageOrNull', {
    get: function () {
      return this.timesAveraged.toNumber() > 0 ? this._currentAverage_0 : null;
    }
  });
  Object.defineProperty(Averager.prototype, 'currentAverage', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.Averager.get_currentAverage', function () {
      return this.currentAverageOrNaN;
    })
  });
  Averager.prototype.average_yqxtqz$ = function (newValues) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== newValues.length; ++tmp$) {
      var element = newValues[tmp$];
      this.average_14dthe$(element);
    }
    return this;
  };
  Averager.prototype.average_d3e2cz$ = function (newValues) {
    var tmp$;
    tmp$ = newValues.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.average_14dthe$(element);
    }
    return this;
  };
  Averager.prototype.average_14dthe$ = function (newValue) {
    this._currentAverage_0 = (this._currentAverage_0 * this.timesAveraged.toNumber() + newValue) / (this.timesAveraged = this.timesAveraged.inc(), this.timesAveraged).toNumber();
    return this;
  };
  Averager.prototype.clear = function () {
    this._currentAverage_0 = 0.0;
    this.timesAveraged = L0;
    return this;
  };
  Averager.prototype.toByte = function () {
    return toByte(numberToInt(this.toDouble()));
  };
  Averager.prototype.toShort = function () {
    return toShort(numberToInt(this.toDouble()));
  };
  Averager.prototype.toChar = function () {
    return toChar(numberToInt(this.toDouble()));
  };
  Averager.prototype.toInt = function () {
    return numberToInt(this.toDouble());
  };
  Averager.prototype.toLong = function () {
    return Kotlin.Long.fromNumber(this.toDouble());
  };
  Averager.prototype.toFloat = function () {
    return this.toDouble();
  };
  Averager.prototype.toDouble = function () {
    return this.currentAverageOrNaN;
  };
  Averager.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Averager',
    interfaces: [Number_0]
  };
  function efficientAverage($receiver) {
    return (new Averager()).average_d3e2cz$($receiver).currentAverageOrNaN;
  }
  function toBase($receiver, baseCharacters) {
    var result = '';
    var x = $receiver;
    var b = baseCharacters.length;
    do {
      result = x.modulo(Kotlin.Long.fromInt(b)).toString() + result;
      x = x.div(Kotlin.Long.fromInt(b));
    }
     while (x.toNumber() > 0);
    return result;
  }
  var numberToDouble = Kotlin.numberToDouble;
  var Math_0 = Math;
  function fromBase($receiver, baseCharacters) {
    var tmp$;
    var result = L0;
    var position = $receiver.length;
    tmp$ = iterator($receiver);
    while (tmp$.hasNext()) {
      var ch = unboxChar(tmp$.next());
      var value = indexOf(baseCharacters, ch);
      var tmp$_0 = result;
      var $receiver_0 = numberToDouble(baseCharacters.length);
      var n = (position = position - 1 | 0, position);
      result = tmp$_0.add(Kotlin.Long.fromNumber(value * Math_0.pow($receiver_0, n)));
    }
    return result;
  }
  function get_isEven($receiver) {
    return equals($receiver.modulo(L2), L0);
  }
  function get_isEven_0($receiver) {
    return $receiver % 2 === 0;
  }
  function get_isEven_1($receiver) {
    return $receiver % 2 === 0;
  }
  function get_isEven_2($receiver) {
    return $receiver % 2 === 0;
  }
  var get_isOdd = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_isOdd_mts6qi$', wrapFunction(function () {
    var get_isEven = _.org.bh.tools.base.math.get_isEven_mts6qi$;
    return function ($receiver) {
      return !get_isEven($receiver);
    };
  }));
  var get_isOdd_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_isOdd_s8ev3n$', wrapFunction(function () {
    var get_isEven = _.org.bh.tools.base.math.get_isEven_s8ev3n$;
    return function ($receiver) {
      return !get_isEven($receiver);
    };
  }));
  var get_isOdd_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_isOdd_5vcgdc$', wrapFunction(function () {
    var get_isEven = _.org.bh.tools.base.math.get_isEven_5vcgdc$;
    return function ($receiver) {
      return !get_isEven($receiver);
    };
  }));
  var get_isOdd_2 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_isOdd_mz3mee$', wrapFunction(function () {
    var get_isEven = _.org.bh.tools.base.math.get_isEven_mz3mee$;
    return function ($receiver) {
      return !get_isEven($receiver);
    };
  }));
  function pow(base, exponent) {
    return toThePowerOf(base, exponent);
  }
  function toThePowerOf($receiver, exponent) {
    if ($receiver === 0.0) {
      return exponent <= 0.0 ? kotlin_js_internal_DoubleCompanionObject.NaN : 0.0;
    }
     else {
      return Math_0.pow($receiver, exponent);
    }
  }
  function toThePowerOf_0($receiver, exponent) {
    return get_clampedInt64Value(toThePowerOf(numberToDouble($receiver), numberToDouble(exponent)));
  }
  function toThePowerOf_1($receiver, exponent) {
    return get_clampedInt32Value(toThePowerOf(numberToDouble($receiver), numberToDouble(exponent)));
  }
  function abs(n) {
    return n < 0 ? -n : n;
  }
  function abs_0(n) {
    return n < 0 ? -n : n;
  }
  function abs_1(n) {
    return n.toNumber() < 0 ? n.unaryMinus() : n;
  }
  function abs_2(n) {
    return n < 0 ? -n | 0 : n;
  }
  function abs_3(n) {
    return n < 0 ? toShort(-n) : n;
  }
  function abs_4(n) {
    return n < 0 ? toByte(-n) : n;
  }
  var get_absoluteValue = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_absoluteValue_yrwdxr$', wrapFunction(function () {
    var abs = _.org.bh.tools.base.math.abs_14dthe$;
    return function ($receiver) {
      return abs($receiver);
    };
  }));
  var get_absoluteValue_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_absoluteValue_81szk$', wrapFunction(function () {
    var abs = _.org.bh.tools.base.math.abs_mx4ult$;
    return function ($receiver) {
      return abs($receiver);
    };
  }));
  var get_absoluteValue_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_absoluteValue_mts6qi$', wrapFunction(function () {
    var abs = _.org.bh.tools.base.math.abs_s8cxhz$;
    return function ($receiver) {
      return abs($receiver);
    };
  }));
  var get_absoluteValue_2 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_absoluteValue_s8ev3n$', wrapFunction(function () {
    var abs = _.org.bh.tools.base.math.abs_za3lpa$;
    return function ($receiver) {
      return abs($receiver);
    };
  }));
  var get_absoluteValue_3 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_absoluteValue_5vcgdc$', wrapFunction(function () {
    var abs = _.org.bh.tools.base.math.abs_mq22fl$;
    return function ($receiver) {
      return abs($receiver);
    };
  }));
  var get_absoluteValue_4 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_absoluteValue_mz3mee$', wrapFunction(function () {
    var abs = _.org.bh.tools.base.math.abs_s8j3t7$;
    return function ($receiver) {
      return abs($receiver);
    };
  }));
  var invertedSign = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.invertedSign_yrwdxr$', function ($receiver) {
    return -$receiver;
  });
  var invertedSign_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.invertedSign_81szk$', function ($receiver) {
    return -$receiver;
  });
  var invertedSign_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.invertedSign_mts6qi$', function ($receiver) {
    return $receiver.unaryMinus();
  });
  var invertedSign_2 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.invertedSign_s8ev3n$', function ($receiver) {
    return -$receiver | 0;
  });
  var invertedSign_3 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.invertedSign_5vcgdc$', function ($receiver) {
    return -$receiver;
  });
  var invertedSign_4 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.invertedSign_mz3mee$', function ($receiver) {
    return -$receiver;
  });
  var inverseSquareRoot = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.inverseSquareRoot_14dthe$', wrapFunction(function () {
    var inverseSquareRoot_allInOne_accuracy2 = _.org.bh.tools.base.math.inverseSquareRoot_allInOne_accuracy2_14dthe$;
    return function (x) {
      return inverseSquareRoot_allInOne_accuracy2(x);
    };
  }));
  function _inverseSquareRootUnrefined(x) {
    var i = toRawBits(x);
    i = L6910470738111508698.subtract(i.shiftRight(1));
    var bits = i;
    return Kotlin.doubleFromBits(bits);
  }
  function _inverseSquareRoot_accuracyRefiner(xHalf, unrefined) {
    return unrefined * (1.5 - xHalf * unrefined * unrefined);
  }
  function inverseSquareRoot_functional_accuracy1(x) {
    var tmp$ = 0.5 * x;
    var i = toRawBits(x);
    i = L6910470738111508698.subtract(i.shiftRight(1));
    var bits = i;
    var unrefined = Kotlin.doubleFromBits(bits);
    return unrefined * (1.5 - tmp$ * unrefined * unrefined);
  }
  function inverseSquareRoot_functional_accuracy2(x) {
    var xHalf = 0.5 * x;
    var i = toRawBits(x);
    i = L6910470738111508698.subtract(i.shiftRight(1));
    var bits = i;
    var unrefined = Kotlin.doubleFromBits(bits);
    var unrefined_0 = unrefined * (1.5 - xHalf * unrefined * unrefined);
    return unrefined_0 * (1.5 - xHalf * unrefined_0 * unrefined_0);
  }
  function inverseSquareRoot_functional_accuracy3(x) {
    var xHalf = 0.5 * x;
    var i = toRawBits(x);
    i = L6910470738111508698.subtract(i.shiftRight(1));
    var bits = i;
    var unrefined = Kotlin.doubleFromBits(bits);
    var unrefined_0 = unrefined * (1.5 - xHalf * unrefined * unrefined);
    var unrefined_1 = unrefined_0 * (1.5 - xHalf * unrefined_0 * unrefined_0);
    return unrefined_1 * (1.5 - xHalf * unrefined_1 * unrefined_1);
  }
  function inverseSquareRoot_functional_accuracy4(x) {
    var xHalf = 0.5 * x;
    var i = toRawBits(x);
    i = L6910470738111508698.subtract(i.shiftRight(1));
    var bits = i;
    var unrefined = Kotlin.doubleFromBits(bits);
    var unrefined_0 = unrefined * (1.5 - xHalf * unrefined * unrefined);
    var unrefined_1 = unrefined_0 * (1.5 - xHalf * unrefined_0 * unrefined_0);
    var unrefined_2 = unrefined_1 * (1.5 - xHalf * unrefined_1 * unrefined_1);
    return unrefined_2 * (1.5 - xHalf * unrefined_2 * unrefined_2);
  }
  function inverseSquareRoot_allInOne_accuracy1(x) {
    var x_0 = x;
    var xhalf = 0.5 * x_0;
    var i = toRawBits(x_0);
    i = L6910470738111508698.subtract(i.shiftRight(1));
    var bits = i;
    x_0 = Kotlin.doubleFromBits(bits);
    x_0 *= 1.5 - xhalf * x_0 * x_0;
    return x_0;
  }
  function inverseSquareRoot_allInOne_accuracy2(x) {
    var x_0 = x;
    var xhalf = 0.5 * x_0;
    var i = toRawBits(x_0);
    i = L6910470738111508698.subtract(i.shiftRight(1));
    var bits = i;
    x_0 = Kotlin.doubleFromBits(bits);
    x_0 *= 1.5 - xhalf * x_0 * x_0;
    x_0 *= 1.5 - xhalf * x_0 * x_0;
    return x_0;
  }
  function inverseSquareRoot_allInOne_accuracy3(x) {
    var x_0 = x;
    var xhalf = 0.5 * x_0;
    var i = toRawBits(x_0);
    i = L6910470738111508698.subtract(i.shiftRight(1));
    var bits = i;
    x_0 = Kotlin.doubleFromBits(bits);
    x_0 *= 1.5 - xhalf * x_0 * x_0;
    x_0 *= 1.5 - xhalf * x_0 * x_0;
    x_0 *= 1.5 - xhalf * x_0 * x_0;
    return x_0;
  }
  function inverseSquareRoot_allInOne_accuracy4(x) {
    var x_0 = x;
    var xhalf = 0.5 * x_0;
    var i = toRawBits(x_0);
    i = L6910470738111508698.subtract(i.shiftRight(1));
    var bits = i;
    x_0 = Kotlin.doubleFromBits(bits);
    x_0 *= 1.5 - xhalf * x_0 * x_0;
    x_0 *= 1.5 - xhalf * x_0 * x_0;
    x_0 *= 1.5 - xhalf * x_0 * x_0;
    x_0 *= 1.5 - xhalf * x_0 * x_0;
    return x_0;
  }
  function inverseSquareRoot_0(x) {
    var x_0 = x;
    var xhalf = 0.5 * x_0;
    var i = toRawBits_0(x_0);
    i = 1597463007 - (i >> 1) | 0;
    var bits = i;
    x_0 = Kotlin.floatFromBits(bits);
    x_0 *= 1.5 - xhalf * x_0 * x_0;
    return x_0;
  }
  function Comparable64() {
  }
  Comparable64.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Comparable64',
    interfaces: [Comparable]
  };
  function min(lhs, rhs) {
    return Kotlin.compareTo(lhs, rhs) < 0 ? lhs : rhs;
  }
  function min_0(a, b, n) {
    if (n.length === 0)
      return min(a, b);
    else
      return min(a, min(b, min_1(n)));
  }
  var get_lastIndex_0 = Kotlin.kotlin.collections.get_lastIndex_m7z4lg$;
  function min_1($receiver) {
    switch ($receiver.length) {
      case 1:
        return $receiver[0];
      case 2:
        return min($receiver[0], $receiver[1]);
      default:var tmp$;
        if ($receiver.length === 0)
          throw UnsupportedOperationException_init("Empty array can't be reduced.");
        var accumulator = $receiver[0];
        tmp$ = get_lastIndex_0($receiver);
        for (var index = 1; index <= tmp$; index++) {
          accumulator = min(accumulator, $receiver[index]);
        }

        return accumulator;
    }
  }
  function max(lhs, rhs) {
    return Kotlin.compareTo(rhs, lhs) < 0 ? lhs : rhs;
  }
  function max_0(a, b, n) {
    if (n.length === 0)
      return max(a, b);
    else
      return max(a, max(b, max_1(n)));
  }
  function max_1($receiver) {
    switch ($receiver.length) {
      case 1:
        return $receiver[0];
      case 2:
        return max($receiver[0], $receiver[1]);
      default:var tmp$;
        if ($receiver.length === 0)
          throw UnsupportedOperationException_init("Empty array can't be reduced.");
        var accumulator = $receiver[0];
        tmp$ = get_lastIndex_0($receiver);
        for (var index = 1; index <= tmp$; index++) {
          accumulator = max(accumulator, $receiver[index]);
        }

        return accumulator;
    }
  }
  function clamp(low, value, high) {
    return max(low, min(value, high));
  }
  function clamp_0(low, value, high) {
    if (isNaN_0(value))
      return value;
    else
      return clamp(low, value, high);
  }
  function ComparableComparator() {
  }
  ComparableComparator.prototype.compare_xwzc9q$ = function (lhs, rhs) {
    return ComparisonResult$Companion_getInstance().invoke_3p81yu$(Kotlin.compareTo(lhs, rhs));
  };
  ComparableComparator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ComparableComparator',
    interfaces: [Comparator]
  };
  function Comparator() {
  }
  Comparator.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Comparator',
    interfaces: []
  };
  function ComparisonResult(name, ordinal, intValue) {
    Enum.call(this);
    this.intValue = intValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ComparisonResult_initFields() {
    ComparisonResult_initFields = function () {
    };
    ComparisonResult$ascending_instance = new ComparisonResult('ascending', 0, -1);
    ComparisonResult$same_instance = new ComparisonResult('same', 1, 0);
    ComparisonResult$descending_instance = new ComparisonResult('descending', 2, 1);
    ComparisonResult$Companion_getInstance();
  }
  var ComparisonResult$ascending_instance;
  function ComparisonResult$ascending_getInstance() {
    ComparisonResult_initFields();
    return ComparisonResult$ascending_instance;
  }
  var ComparisonResult$same_instance;
  function ComparisonResult$same_getInstance() {
    ComparisonResult_initFields();
    return ComparisonResult$same_instance;
  }
  var ComparisonResult$descending_instance;
  function ComparisonResult$descending_getInstance() {
    ComparisonResult_initFields();
    return ComparisonResult$descending_instance;
  }
  Object.defineProperty(ComparisonResult.prototype, 'nativeValue', {
    get: function () {
      return this.intValue;
    }
  });
  function ComparisonResult$Companion() {
    ComparisonResult$Companion_instance = this;
  }
  ComparisonResult$Companion.prototype.invoke_3p81yu$ = function (raw) {
    return this.from_3p81yu$(raw);
  };
  function ComparisonResult$Companion$from$ObjectLiteral(closure$raw) {
    this.closure$raw = closure$raw;
  }
  ComparisonResult$Companion$from$ObjectLiteral.prototype.compareTo_11rb$ = function (other) {
    var backupResult;
    var $receiver = this.closure$raw;
    var get_isNativeInteger$result;
    if (typeof $receiver === 'number' || typeof $receiver === 'number' || typeof $receiver === 'number' || Kotlin.isType($receiver, Kotlin.Long)) {
      get_isNativeInteger$result = true;
    }
     else {
      get_isNativeInteger$result = false;
    }
    if (get_isNativeInteger$result) {
      var rawInt = toInt64Checked(this.closure$raw);
      var get_isNativeInteger$result_0;
      if (typeof other === 'number' || typeof other === 'number' || typeof other === 'number' || Kotlin.isType(other, Kotlin.Long)) {
        get_isNativeInteger$result_0 = true;
      }
       else {
        get_isNativeInteger$result_0 = false;
      }
      if (get_isNativeInteger$result_0) {
        return get_clampedInt32Value_0(toInt64Checked(other).subtract(rawInt));
      }
       else {
        var get_isNativeFraction$result;
        if (typeof other === 'number' || typeof other === 'number') {
          get_isNativeFraction$result = true;
        }
         else {
          get_isNativeFraction$result = false;
        }
        if (get_isNativeFraction$result) {
          return get_clampedInt32Value(numberToDouble(other) - rawInt.toNumber());
        }
         else {
          backupResult = get_clampedInt32Value(numberToDouble(other) - rawInt.toNumber());
        }
      }
    }
     else {
      var $receiver_0 = this.closure$raw;
      var get_isNativeFraction$result_0;
      if (typeof $receiver_0 === 'number' || typeof $receiver_0 === 'number') {
        get_isNativeFraction$result_0 = true;
      }
       else {
        get_isNativeFraction$result_0 = false;
      }
      if (get_isNativeFraction$result_0) {
        var rawFloat = numberToDouble(this.closure$raw);
        var get_isNativeInteger$result_1;
        if (typeof other === 'number' || typeof other === 'number' || typeof other === 'number' || Kotlin.isType(other, Kotlin.Long)) {
          get_isNativeInteger$result_1 = true;
        }
         else {
          get_isNativeInteger$result_1 = false;
        }
        if (get_isNativeInteger$result_1) {
          return get_clampedInt32Value(toInt64Checked(other).toNumber() - rawFloat);
        }
         else {
          var get_isNativeFraction$result_1;
          if (typeof other === 'number' || typeof other === 'number') {
            get_isNativeFraction$result_1 = true;
          }
           else {
            get_isNativeFraction$result_1 = false;
          }
          if (get_isNativeFraction$result_1) {
            return get_clampedInt32Value(numberToDouble(other) - rawFloat);
          }
           else {
            backupResult = get_clampedInt32Value(numberToDouble(other) - rawFloat);
          }
        }
      }
       else {
        backupResult = get_clampedInt32Value(numberToDouble(other) - numberToDouble(this.closure$raw));
      }
    }
    println("Sorry; I hadn't thought about subtracting a " + toString(Kotlin.getKClassFromExpression(other).simpleName) + ' from a ' + toString(Kotlin.getKClassFromExpression(this.closure$raw).simpleName) + '...');
    println("I'll attempt to convert them to fractions and do the math from there!");
    return backupResult;
  };
  ComparisonResult$Companion$from$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Comparable]
  };
  ComparisonResult$Companion.prototype.from_3p81yu$ = function (raw) {
    return this.from_egsuo0$(new ComparisonResult$Companion$from$ObjectLiteral(raw));
  };
  ComparisonResult$Companion.prototype.from_egsuo0$ = function (comparable) {
    return Kotlin.compareTo(comparable, 0) < 0 ? ComparisonResult$ascending_getInstance() : Kotlin.compareTo(comparable, 0) > 0 ? ComparisonResult$descending_getInstance() : this.equal;
  };
  Object.defineProperty(ComparisonResult$Companion.prototype, 'left', {
    get: function () {
      return ComparisonResult$descending_getInstance();
    }
  });
  Object.defineProperty(ComparisonResult$Companion.prototype, 'equal', {
    get: function () {
      return ComparisonResult$same_getInstance();
    }
  });
  Object.defineProperty(ComparisonResult$Companion.prototype, 'right', {
    get: function () {
      return ComparisonResult$ascending_getInstance();
    }
  });
  Object.defineProperty(ComparisonResult$Companion.prototype, 'greaterThan', {
    get: function () {
      return ComparisonResult$descending_getInstance();
    }
  });
  Object.defineProperty(ComparisonResult$Companion.prototype, 'lessThan', {
    get: function () {
      return ComparisonResult$ascending_getInstance();
    }
  });
  Object.defineProperty(ComparisonResult$Companion.prototype, 'indeterminate', {
    get: function () {
      return ComparisonResult$same_getInstance();
    }
  });
  ComparisonResult$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ComparisonResult$Companion_instance = null;
  function ComparisonResult$Companion_getInstance() {
    ComparisonResult_initFields();
    if (ComparisonResult$Companion_instance === null) {
      new ComparisonResult$Companion();
    }
    return ComparisonResult$Companion_instance;
  }
  ComparisonResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ComparisonResult',
    interfaces: [Enum]
  };
  function ComparisonResult$values() {
    return [ComparisonResult$ascending_getInstance(), ComparisonResult$same_getInstance(), ComparisonResult$descending_getInstance()];
  }
  ComparisonResult.values = ComparisonResult$values;
  function ComparisonResult$valueOf(name) {
    switch (name) {
      case 'ascending':
        return ComparisonResult$ascending_getInstance();
      case 'same':
        return ComparisonResult$same_getInstance();
      case 'descending':
        return ComparisonResult$descending_getInstance();
      default:throwISE('No enum constant org.bh.tools.base.math.ComparisonResult.' + name);
    }
  }
  ComparisonResult.valueOf_61zpoe$ = ComparisonResult$valueOf;
  function SemanticComparable() {
  }
  SemanticComparable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SemanticComparable',
    interfaces: []
  };
  function compare($receiver, to) {
    return ComparisonResult$Companion_getInstance().invoke_3p81yu$(Kotlin.compareTo($receiver, to));
  }
  var defaultFloat32CalculationTolerance;
  var defaultFloat64CalculationTolerance;
  var defaultFractionCalculationTolerance;
  var defaultIntegerCalculationTolerance;
  var get_defaultCalculationTolerance = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_defaultCalculationTolerance', wrapFunction(function () {
    var math = _.org.bh.tools.base.math;
    return function () {
      return math.defaultFractionCalculationTolerance;
    };
  }));
  function TolerableEquality() {
  }
  TolerableEquality.prototype.equals_ri9j6v$ = function (other, tolerance, callback$default) {
    if (tolerance === void 0) {
      tolerance = package$math.defaultFractionCalculationTolerance;
    }
    return callback$default ? callback$default(other, tolerance) : this.equals_ri9j6v$$default(other, tolerance);
  };
  TolerableEquality.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TolerableEquality',
    interfaces: []
  };
  function isApproximately($receiver, other, tolerance) {
    if (tolerance === void 0) {
      tolerance = package$math.defaultFractionCalculationTolerance;
    }
    return $receiver.equals_ri9j6v$(other, tolerance);
  }
  function equals_0($receiver, rhs, tolerance) {
    if (tolerance === void 0)
      tolerance = defaultFloat64CalculationTolerance;
    if (tolerance === 0.0)
      return $receiver === rhs;
    else {
      var tmp$ = $receiver > kotlin_js_internal_DoubleCompanionObject.MAX_VALUE;
      if (tmp$) {
        tmp$ = rhs > kotlin_js_internal_DoubleCompanionObject.MAX_VALUE;
      }
      if (tmp$)
        return true;
      else {
        var tmp$_0 = $receiver < -kotlin_js_internal_DoubleCompanionObject.MAX_VALUE && rhs < 0;
        if (tmp$_0) {
          tmp$_0 = isInfinite(rhs);
        }
        if (tmp$_0)
          return true;
        else {
          return abs(rhs - $receiver) <= tolerance;
        }
      }
    }
  }
  function isApproximately_0($receiver, rhs, tolerance) {
    if (tolerance === void 0)
      tolerance = defaultFloat64CalculationTolerance;
    return equals_0($receiver, rhs, tolerance);
  }
  var kotlin_js_internal_FloatCompanionObject = Kotlin.kotlin.js.internal.FloatCompanionObject;
  var isInfinite_0 = Kotlin.kotlin.isInfinite_81szk$;
  function equals_1($receiver, rhs, tolerance) {
    if (tolerance === void 0)
      tolerance = defaultFloat32CalculationTolerance;
    if (tolerance === 0.0)
      return $receiver === rhs;
    else {
      var tmp$ = $receiver > kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
      if (tmp$) {
        tmp$ = rhs > kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
      }
      if (tmp$)
        return true;
      else {
        var tmp$_0 = $receiver < -kotlin_js_internal_FloatCompanionObject.MAX_VALUE && rhs < 0;
        if (tmp$_0) {
          tmp$_0 = isInfinite_0(rhs);
        }
        if (tmp$_0)
          return true;
        else {
          return abs_0(rhs - $receiver) <= tolerance;
        }
      }
    }
  }
  function isApproximately_1($receiver, rhs, tolerance) {
    if (tolerance === void 0)
      tolerance = defaultFloat32CalculationTolerance;
    return equals_1($receiver, rhs, tolerance);
  }
  function equals_2($receiver, rhs, tolerance) {
    if (tolerance === void 0) {
      tolerance = package$math.defaultFractionCalculationTolerance;
    }
    if (tolerance === 0.0)
      return $receiver === rhs;
    else {
      var tmp$ = $receiver > kotlin_js_internal_FloatCompanionObject.MAX_VALUE && rhs > 0;
      if (tmp$) {
        tmp$ = isInfinite_0(rhs);
      }
      if (tmp$)
        return true;
      else {
        var tmp$_0 = $receiver < -kotlin_js_internal_FloatCompanionObject.MAX_VALUE && rhs < 0;
        if (tmp$_0) {
          tmp$_0 = isInfinite_0(rhs);
        }
        if (tmp$_0)
          return true;
        else
          return abs(rhs - $receiver) <= tolerance;
      }
    }
  }
  function isApproximately_2($receiver, rhs, tolerance) {
    if (tolerance === void 0) {
      tolerance = package$math.defaultFractionCalculationTolerance;
    }
    return equals_2($receiver, rhs, tolerance);
  }
  function equals_3($receiver, rhs, tolerance) {
    if (tolerance === void 0) {
      tolerance = package$math.defaultFractionCalculationTolerance;
    }
    return equals_3(rhs, $receiver, tolerance);
  }
  function isApproximately_3($receiver, rhs, tolerance) {
    if (tolerance === void 0) {
      tolerance = package$math.defaultFractionCalculationTolerance;
    }
    return equals_3($receiver, rhs, tolerance);
  }
  function equals_4($receiver, rhs, tolerance) {
    if (tolerance === void 0) {
      tolerance = package$math.defaultFractionCalculationTolerance;
    }
    return abs_2(rhs - $receiver) <= tolerance;
  }
  function equals_5($receiver, rhs, tolerance) {
    if (tolerance === void 0) {
      tolerance = package$math.defaultFractionCalculationTolerance;
    }
    return abs_2(rhs - $receiver) <= tolerance;
  }
  function equals_6($receiver, rhs, tolerance) {
    if (tolerance === void 0) {
      tolerance = package$math.defaultFractionCalculationTolerance;
    }
    return abs_2(rhs - $receiver | 0) <= tolerance;
  }
  function equals_7($receiver, rhs, tolerance) {
    if (tolerance === void 0) {
      tolerance = package$math.defaultFractionCalculationTolerance;
    }
    return abs_1(rhs.subtract($receiver)).toNumber() <= tolerance;
  }
  function isLessThanOrEqualTo($receiver, rhs, tolerance) {
    if (tolerance === void 0)
      tolerance = defaultFractionCalculationTolerance;
    return $receiver - tolerance <= rhs;
  }
  function isGreaterThanOrEqualTo($receiver, rhs, tolerance) {
    if (tolerance === void 0)
      tolerance = defaultFractionCalculationTolerance;
    return $receiver + tolerance >= rhs;
  }
  function isLessThan($receiver, rhs, tolerance) {
    if (tolerance === void 0)
      tolerance = defaultFractionCalculationTolerance;
    return !equals_0($receiver, rhs, tolerance) && $receiver - tolerance < rhs;
  }
  function isGreaterThan($receiver, rhs, tolerance) {
    if (tolerance === void 0)
      tolerance = defaultFractionCalculationTolerance;
    return !equals_0($receiver, rhs, tolerance) && $receiver + tolerance > rhs;
  }
  function isLessThanOrEqualTo_0($receiver, rhs, tolerance) {
    if (tolerance === void 0)
      tolerance = defaultIntegerCalculationTolerance;
    return $receiver.subtract(tolerance).compareTo_11rb$(rhs) <= 0;
  }
  function isGreaterThanOrEqualTo_0($receiver, rhs, tolerance) {
    if (tolerance === void 0)
      tolerance = defaultIntegerCalculationTolerance;
    return $receiver.add(tolerance).compareTo_11rb$(rhs) >= 0;
  }
  function isLessThan_0($receiver, rhs, tolerance) {
    if (tolerance === void 0)
      tolerance = defaultIntegerCalculationTolerance;
    return $receiver.subtract(tolerance).compareTo_11rb$(rhs) < 0;
  }
  function isGreaterThan_0($receiver, rhs, tolerance) {
    if (tolerance === void 0)
      tolerance = defaultIntegerCalculationTolerance;
    return $receiver.add(tolerance).compareTo_11rb$(rhs) > 0;
  }
  function isBetween($receiver, a, b, tolerance) {
    if (tolerance === void 0)
      tolerance = defaultIntegerCalculationTolerance;
    var largest = max(a, b);
    var smallest = min(a, b);
    return $receiver.add(tolerance).compareTo_11rb$(smallest) > 0 && $receiver.subtract(tolerance).compareTo_11rb$(largest) < 0;
  }
  function isBetween_0($receiver, a, b, tolerance) {
    if (tolerance === void 0)
      tolerance = defaultFractionCalculationTolerance;
    var largest = max(a, b);
    var smallest = min(a, b);
    return $receiver + tolerance > smallest && $receiver - tolerance < largest;
  }
  var Float64_e;
  var Float64_log2_e;
  var Float64_log10_e;
  var Float64_ln_2;
  var Float64_ln_10;
  var Float64_quarter_pi;
  var Float64_half_pi;
  var Float64_3_quarter_pi;
  var Float64_pi;
  var Float64_5_quarter_pi;
  var Float64_7_quarter_pi;
  var Float64_double_pi;
  var Float64_quadruple_pi;
  var Float64_inverse_pi;
  var Float64_2_over_pi;
  var Float64_2_over_sqrt_pi;
  var Float64_sqrt_2;
  var Float64_inverse_sqrt_2;
  var Float32_e;
  var Float32_log2_e;
  var Float32_log10_e;
  var Float32_ln_2;
  var Float32_ln_10;
  var Float32_pi;
  var Float32_half_pi;
  var Float32_quarter_pi;
  var Float32_3_quarter_pi;
  var Float32_5_quarter_pi;
  var Float32_7_quarter_pi;
  var Float32_double_pi;
  var Float32_quadruple_pi;
  var Float32_inverse_pi;
  var Float32_2_over_pi;
  var Float32_2_over_sqrt_pi;
  var Float32_sqrt_2;
  var Float32_inverse_sqrt_2;
  function get_e($receiver) {
    return Float64_e;
  }
  function get_log2_e($receiver) {
    return Float64_log2_e;
  }
  function get_log10_e($receiver) {
    return Float64_log10_e;
  }
  function get_ln_2($receiver) {
    return Float64_ln_2;
  }
  function get_ln_10($receiver) {
    return Float64_ln_10;
  }
  function get_pi($receiver) {
    return Float64_pi;
  }
  var get_π = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_\u03C0_6a53gt$', wrapFunction(function () {
    var get_pi = _.org.bh.tools.base.math.get_pi_6a53gt$;
    return function ($receiver) {
      return get_pi($receiver);
    };
  }));
  function get_half_pi($receiver) {
    return Float64_half_pi;
  }
  var get_half_π = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_half_\u03C0_6a53gt$', wrapFunction(function () {
    var get_half_pi = _.org.bh.tools.base.math.get_half_pi_6a53gt$;
    return function ($receiver) {
      return get_half_pi($receiver);
    };
  }));
  function get_quarter_pi($receiver) {
    return Float64_quarter_pi;
  }
  var get_quarter_π = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_quarter_\u03C0_6a53gt$', wrapFunction(function () {
    var get_quarter_pi = _.org.bh.tools.base.math.get_quarter_pi_6a53gt$;
    return function ($receiver) {
      return get_quarter_pi($receiver);
    };
  }));
  function get_three_quarter_pi($receiver) {
    return Float64_3_quarter_pi;
  }
  var get_three_quarter_π = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_three_quarter_\u03C0_6a53gt$', wrapFunction(function () {
    var get_three_quarter_pi = _.org.bh.tools.base.math.get_three_quarter_pi_6a53gt$;
    return function ($receiver) {
      return get_three_quarter_pi($receiver);
    };
  }));
  function get_five_quarter_pi($receiver) {
    return Float64_5_quarter_pi;
  }
  var get_five_quarter_π = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_five_quarter_\u03C0_6a53gt$', wrapFunction(function () {
    var get_five_quarter_pi = _.org.bh.tools.base.math.get_five_quarter_pi_6a53gt$;
    return function ($receiver) {
      return get_five_quarter_pi($receiver);
    };
  }));
  function get_seven_quarter_pi($receiver) {
    return Float64_7_quarter_pi;
  }
  var get_seven_quarter_π = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_seven_quarter_\u03C0_6a53gt$', wrapFunction(function () {
    var get_seven_quarter_pi = _.org.bh.tools.base.math.get_seven_quarter_pi_6a53gt$;
    return function ($receiver) {
      return get_seven_quarter_pi($receiver);
    };
  }));
  function get_double_pi($receiver) {
    return Float64_double_pi;
  }
  var get_double_π = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_double_\u03C0_6a53gt$', wrapFunction(function () {
    var get_double_pi = _.org.bh.tools.base.math.get_double_pi_6a53gt$;
    return function ($receiver) {
      return get_double_pi($receiver);
    };
  }));
  function get_quadruple_pi($receiver) {
    return Float64_quadruple_pi;
  }
  var get_quadruple_π = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_quadruple_\u03C0_6a53gt$', wrapFunction(function () {
    var get_quadruple_pi = _.org.bh.tools.base.math.get_quadruple_pi_6a53gt$;
    return function ($receiver) {
      return get_quadruple_pi($receiver);
    };
  }));
  function get_inverse_pi($receiver) {
    return Float64_inverse_pi;
  }
  var get_inverse_π = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_inverse_\u03C0_6a53gt$', wrapFunction(function () {
    var get_inverse_pi = _.org.bh.tools.base.math.get_inverse_pi_6a53gt$;
    return function ($receiver) {
      return get_inverse_pi($receiver);
    };
  }));
  function get_two_over_pi($receiver) {
    return Float64_2_over_pi;
  }
  var get_two_over_π = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_two_over_\u03C0_6a53gt$', wrapFunction(function () {
    var get_two_over_pi = _.org.bh.tools.base.math.get_two_over_pi_6a53gt$;
    return function ($receiver) {
      return get_two_over_pi($receiver);
    };
  }));
  function get_two_over_sqrt_pi($receiver) {
    return Float64_2_over_sqrt_pi;
  }
  var get_two_over_sqrt_π = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_two_over_sqrt_\u03C0_6a53gt$', wrapFunction(function () {
    var get_two_over_sqrt_pi = _.org.bh.tools.base.math.get_two_over_sqrt_pi_6a53gt$;
    return function ($receiver) {
      return get_two_over_sqrt_pi($receiver);
    };
  }));
  function get_sqrt_2($receiver) {
    return Float64_sqrt_2;
  }
  function get_inverse_sqrt_2($receiver) {
    return Float64_inverse_sqrt_2;
  }
  function get_e_0($receiver) {
    return Float32_e;
  }
  function get_log2_e_0($receiver) {
    return Float32_log2_e;
  }
  function get_log10_e_0($receiver) {
    return Float32_log10_e;
  }
  function get_ln_2_0($receiver) {
    return Float32_ln_2;
  }
  function get_ln_10_0($receiver) {
    return Float32_ln_10;
  }
  function get_pi_0($receiver) {
    return Float32_pi;
  }
  var get_π_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_\u03C0_y9phqa$', wrapFunction(function () {
    var get_pi = _.org.bh.tools.base.math.get_pi_y9phqa$;
    return function ($receiver) {
      return get_pi($receiver);
    };
  }));
  function get_half_pi_0($receiver) {
    return Float32_half_pi;
  }
  var get_half_π_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_half_\u03C0_y9phqa$', wrapFunction(function () {
    var get_half_pi = _.org.bh.tools.base.math.get_half_pi_y9phqa$;
    return function ($receiver) {
      return get_half_pi($receiver);
    };
  }));
  function get_quarter_pi_0($receiver) {
    return Float32_quarter_pi;
  }
  var get_quarter_π_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_quarter_\u03C0_y9phqa$', wrapFunction(function () {
    var get_quarter_pi = _.org.bh.tools.base.math.get_quarter_pi_y9phqa$;
    return function ($receiver) {
      return get_quarter_pi($receiver);
    };
  }));
  function get_three_quarter_pi_0($receiver) {
    return Float32_3_quarter_pi;
  }
  var get_three_quarter_π_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_three_quarter_\u03C0_y9phqa$', wrapFunction(function () {
    var get_three_quarter_pi = _.org.bh.tools.base.math.get_three_quarter_pi_y9phqa$;
    return function ($receiver) {
      return get_three_quarter_pi($receiver);
    };
  }));
  function get_five_quarter_pi_0($receiver) {
    return Float32_5_quarter_pi;
  }
  var get_five_quarter_π_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_five_quarter_\u03C0_y9phqa$', wrapFunction(function () {
    var get_five_quarter_pi = _.org.bh.tools.base.math.get_five_quarter_pi_y9phqa$;
    return function ($receiver) {
      return get_five_quarter_pi($receiver);
    };
  }));
  function get_seven_quarter_pi_0($receiver) {
    return Float32_7_quarter_pi;
  }
  var get_seven_quarter_π_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_seven_quarter_\u03C0_y9phqa$', wrapFunction(function () {
    var get_seven_quarter_pi = _.org.bh.tools.base.math.get_seven_quarter_pi_y9phqa$;
    return function ($receiver) {
      return get_seven_quarter_pi($receiver);
    };
  }));
  function get_double_pi_0($receiver) {
    return Float32_double_pi;
  }
  var get_double_π_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_double_\u03C0_y9phqa$', wrapFunction(function () {
    var get_double_pi = _.org.bh.tools.base.math.get_double_pi_y9phqa$;
    return function ($receiver) {
      return get_double_pi($receiver);
    };
  }));
  function get_quadruple_pi_0($receiver) {
    return Float32_quadruple_pi;
  }
  var get_quadruple_π_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_quadruple_\u03C0_y9phqa$', wrapFunction(function () {
    var get_quadruple_pi = _.org.bh.tools.base.math.get_quadruple_pi_y9phqa$;
    return function ($receiver) {
      return get_quadruple_pi($receiver);
    };
  }));
  function get_inverse_pi_0($receiver) {
    return Float32_inverse_pi;
  }
  var get_inverse_π_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_inverse_\u03C0_y9phqa$', wrapFunction(function () {
    var get_inverse_pi = _.org.bh.tools.base.math.get_inverse_pi_y9phqa$;
    return function ($receiver) {
      return get_inverse_pi($receiver);
    };
  }));
  function get_two_over_pi_0($receiver) {
    return Float32_2_over_pi;
  }
  var get_two_over_π_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_two_over_\u03C0_y9phqa$', wrapFunction(function () {
    var get_two_over_pi = _.org.bh.tools.base.math.get_two_over_pi_y9phqa$;
    return function ($receiver) {
      return get_two_over_pi($receiver);
    };
  }));
  function get_two_over_sqrt_pi_0($receiver) {
    return Float32_2_over_sqrt_pi;
  }
  var get_two_over_sqrt_π_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_two_over_sqrt_\u03C0_y9phqa$', wrapFunction(function () {
    var get_two_over_sqrt_pi = _.org.bh.tools.base.math.get_two_over_sqrt_pi_y9phqa$;
    return function ($receiver) {
      return get_two_over_sqrt_pi($receiver);
    };
  }));
  function get_sqrt_2_0($receiver) {
    return Float32_sqrt_2;
  }
  function get_inverse_sqrt_2_0($receiver) {
    return Float32_inverse_sqrt_2;
  }
  function integerComponent($receiver) {
    var tmp$;
    var tmp$_0 = isInfinite($receiver);
    if (!tmp$_0) {
      tmp$_0 = isNaN_0($receiver);
    }
    if (tmp$_0)
      tmp$ = $receiver;
    else {
      tmp$ = numberToDouble(toInt64Checked($receiver));
    }
    return tmp$;
  }
  var floor = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.floor_yrwdxr$', wrapFunction(function () {
    var Math_0 = Math;
    return function ($receiver) {
      return Math_0.floor($receiver);
    };
  }));
  function roundUp_truncating($receiver) {
    var tmp$;
    var inum = toInt64Checked($receiver);
    var fnum = numberToDouble(inum);
    if (fnum === $receiver)
      tmp$ = fnum;
    else {
      tmp$ = numberToDouble(inum.add(Kotlin.Long.fromInt($receiver < 0 ? -1 : 1)));
    }
    return tmp$;
  }
  function ceil_truncating2($receiver) {
    return get_hasFractionComponent($receiver) ? integerComponent($receiver) + ($receiver > 0 ? 1 : -1) : $receiver;
  }
  var ceil = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.ceil_yrwdxr$', wrapFunction(function () {
    var Math_0 = Math;
    return function ($receiver) {
      return Math_0.ceil($receiver);
    };
  }));
  function get_hasFractionComponent($receiver) {
    return $receiver !== numberToDouble(toInt64Checked($receiver));
  }
  function get_components($receiver) {
    var iPart = toInt64Checked($receiver);
    var fPart = $receiver - iPart.toNumber();
    return new RadixNumberParts(iPart, fPart);
  }
  function RadixNumberParts(integerPart, fractionPart) {
    this.integerPart = integerPart;
    this.fractionPart = fractionPart;
  }
  RadixNumberParts.prototype.equals_ri9j6v$$default = function (other, tolerance) {
    return equals_7(this.integerPart, other.integerPart, tolerance) && equals_0(this.fractionPart, other.fractionPart, tolerance);
  };
  RadixNumberParts.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RadixNumberParts',
    interfaces: [TolerableEquality]
  };
  RadixNumberParts.prototype.component1 = function () {
    return this.integerPart;
  };
  RadixNumberParts.prototype.component2 = function () {
    return this.fractionPart;
  };
  RadixNumberParts.prototype.copy_hauwsl$ = function (integerPart, fractionPart) {
    return new RadixNumberParts(integerPart === void 0 ? this.integerPart : integerPart, fractionPart === void 0 ? this.fractionPart : fractionPart);
  };
  RadixNumberParts.prototype.toString = function () {
    return 'RadixNumberParts(integerPart=' + Kotlin.toString(this.integerPart) + (', fractionPart=' + Kotlin.toString(this.fractionPart)) + ')';
  };
  RadixNumberParts.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.integerPart) | 0;
    result = result * 31 + Kotlin.hashCode(this.fractionPart) | 0;
    return result;
  };
  RadixNumberParts.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.integerPart, other.integerPart) && Kotlin.equals(this.fractionPart, other.fractionPart)))));
  };
  function rounded($receiver, direction, threshold) {
    if (direction === void 0)
      direction = RoundingDirection$Companion_getInstance().default;
    if (threshold === void 0)
      threshold = RoundingThreshold$Companion_getInstance().default;
    if (!get_hasFractionComponent($receiver) || isNaN_0($receiver) || isInfinite($receiver))
      return $receiver;
    else {
      switch (threshold.name) {
        case 'halfway':
          switch (direction.name) {
            case 'up':
              var $receiver_0 = $receiver + 0.5;
              return Math_0.floor($receiver_0);
            case 'down':
              var $receiver_1 = $receiver - 0.5;
              return Math_0.ceil($receiver_1);
            case 'towardZero':
              var tmp$;
              if ($receiver > 0) {
                var $receiver_2 = $receiver - 0.5;
                tmp$ = Math_0.ceil($receiver_2);
              }
               else {
                var $receiver_3 = $receiver + 0.5;
                tmp$ = Math_0.floor($receiver_3);
              }

              return tmp$;
            case 'awayFromZero':
              var tmp$_0;
              if ($receiver > 0) {
                var $receiver_4 = $receiver + 0.5;
                tmp$_0 = Math_0.floor($receiver_4);
              }
               else {
                var $receiver_5 = $receiver - 0.5;
                tmp$_0 = Math_0.ceil($receiver_5);
              }

              return tmp$_0;
            default:return Kotlin.noWhenBranchMatched();
          }

        case 'integer':
          switch (direction.name) {
            case 'up':
              return Math_0.ceil($receiver);
            case 'down':
              return Math_0.floor($receiver);
            case 'awayFromZero':
              return $receiver > 0 ? Math_0.ceil($receiver) : Math_0.floor($receiver);
            case 'towardZero':
              return $receiver > 0 ? Math_0.floor($receiver) : Math_0.ceil($receiver);
            default:return Kotlin.noWhenBranchMatched();
          }

        default:return Kotlin.noWhenBranchMatched();
      }
    }
  }
  var ceilForRoundingUp = wrapFunction(function () {
    var Math_0 = Math;
    return function ($receiver) {
      return get_hasFractionComponent($receiver) ? Math_0.ceil($receiver) : Math_0.ceil($receiver) + 1;
    };
  });
  var floorForRoundingUp = wrapFunction(function () {
    var Math_0 = Math;
    return function ($receiver) {
      return get_hasFractionComponent($receiver) ? Math_0.floor($receiver) : Math_0.floor($receiver) + 1;
    };
  });
  var get_roundedInt8Value = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_roundedInt8Value_yrwdxr$', wrapFunction(function () {
    var rounded = _.org.bh.tools.base.math.rounded_rrddsp$;
    var toInt8Checked = _.org.bh.tools.base.math.toInt8Checked_rtoihn$;
    return function ($receiver) {
      return toInt8Checked(rounded($receiver));
    };
  }));
  var get_roundedInt16Value = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_roundedInt16Value_yrwdxr$', wrapFunction(function () {
    var rounded = _.org.bh.tools.base.math.rounded_rrddsp$;
    var toInt16Checked = _.org.bh.tools.base.math.toInt16Checked_rtoihn$;
    return function ($receiver) {
      return toInt16Checked(rounded($receiver));
    };
  }));
  var get_roundedInt32Value = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_roundedInt32Value_yrwdxr$', wrapFunction(function () {
    var rounded = _.org.bh.tools.base.math.rounded_rrddsp$;
    var numberToInt = Kotlin.numberToInt;
    return function ($receiver) {
      return numberToInt(rounded($receiver));
    };
  }));
  var get_roundedInt64Value = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_roundedInt64Value_yrwdxr$', wrapFunction(function () {
    var rounded = _.org.bh.tools.base.math.rounded_rrddsp$;
    var toInt64Checked = _.org.bh.tools.base.math.toInt64Checked_rtoihn$;
    return function ($receiver) {
      return toInt64Checked(rounded($receiver));
    };
  }));
  var get_roundedIntegerValue = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_roundedIntegerValue_yrwdxr$', wrapFunction(function () {
    var rounded = _.org.bh.tools.base.math.rounded_rrddsp$;
    var toInt64Checked = _.org.bh.tools.base.math.toInt64Checked_rtoihn$;
    return function ($receiver) {
      return toInt64Checked(rounded($receiver));
    };
  }));
  function RoundingThreshold(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function RoundingThreshold_initFields() {
    RoundingThreshold_initFields = function () {
    };
    RoundingThreshold$halfway_instance = new RoundingThreshold('halfway', 0);
    RoundingThreshold$integer_instance = new RoundingThreshold('integer', 1);
    RoundingThreshold$Companion_getInstance();
  }
  var RoundingThreshold$halfway_instance;
  function RoundingThreshold$halfway_getInstance() {
    RoundingThreshold_initFields();
    return RoundingThreshold$halfway_instance;
  }
  var RoundingThreshold$integer_instance;
  function RoundingThreshold$integer_getInstance() {
    RoundingThreshold_initFields();
    return RoundingThreshold$integer_instance;
  }
  function RoundingThreshold$Companion() {
    RoundingThreshold$Companion_instance = this;
    this.default = RoundingThreshold$halfway_getInstance();
  }
  RoundingThreshold$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RoundingThreshold$Companion_instance = null;
  function RoundingThreshold$Companion_getInstance() {
    RoundingThreshold_initFields();
    if (RoundingThreshold$Companion_instance === null) {
      new RoundingThreshold$Companion();
    }
    return RoundingThreshold$Companion_instance;
  }
  RoundingThreshold.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RoundingThreshold',
    interfaces: [Enum]
  };
  function RoundingThreshold$values() {
    return [RoundingThreshold$halfway_getInstance(), RoundingThreshold$integer_getInstance()];
  }
  RoundingThreshold.values = RoundingThreshold$values;
  function RoundingThreshold$valueOf(name) {
    switch (name) {
      case 'halfway':
        return RoundingThreshold$halfway_getInstance();
      case 'integer':
        return RoundingThreshold$integer_getInstance();
      default:throwISE('No enum constant org.bh.tools.base.math.RoundingThreshold.' + name);
    }
  }
  RoundingThreshold.valueOf_61zpoe$ = RoundingThreshold$valueOf;
  function RoundingDirection(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function RoundingDirection_initFields() {
    RoundingDirection_initFields = function () {
    };
    RoundingDirection$up_instance = new RoundingDirection('up', 0);
    RoundingDirection$down_instance = new RoundingDirection('down', 1);
    RoundingDirection$awayFromZero_instance = new RoundingDirection('awayFromZero', 2);
    RoundingDirection$towardZero_instance = new RoundingDirection('towardZero', 3);
    RoundingDirection$Companion_getInstance();
  }
  var RoundingDirection$up_instance;
  function RoundingDirection$up_getInstance() {
    RoundingDirection_initFields();
    return RoundingDirection$up_instance;
  }
  var RoundingDirection$down_instance;
  function RoundingDirection$down_getInstance() {
    RoundingDirection_initFields();
    return RoundingDirection$down_instance;
  }
  var RoundingDirection$awayFromZero_instance;
  function RoundingDirection$awayFromZero_getInstance() {
    RoundingDirection_initFields();
    return RoundingDirection$awayFromZero_instance;
  }
  var RoundingDirection$towardZero_instance;
  function RoundingDirection$towardZero_getInstance() {
    RoundingDirection_initFields();
    return RoundingDirection$towardZero_instance;
  }
  function RoundingDirection$Companion() {
    RoundingDirection$Companion_instance = this;
    this.default = RoundingDirection$awayFromZero_getInstance();
  }
  RoundingDirection$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RoundingDirection$Companion_instance = null;
  function RoundingDirection$Companion_getInstance() {
    RoundingDirection_initFields();
    if (RoundingDirection$Companion_instance === null) {
      new RoundingDirection$Companion();
    }
    return RoundingDirection$Companion_instance;
  }
  RoundingDirection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RoundingDirection',
    interfaces: [Enum]
  };
  function RoundingDirection$values() {
    return [RoundingDirection$up_getInstance(), RoundingDirection$down_getInstance(), RoundingDirection$awayFromZero_getInstance(), RoundingDirection$towardZero_getInstance()];
  }
  RoundingDirection.values = RoundingDirection$values;
  function RoundingDirection$valueOf(name) {
    switch (name) {
      case 'up':
        return RoundingDirection$up_getInstance();
      case 'down':
        return RoundingDirection$down_getInstance();
      case 'awayFromZero':
        return RoundingDirection$awayFromZero_getInstance();
      case 'towardZero':
        return RoundingDirection$towardZero_getInstance();
      default:throwISE('No enum constant org.bh.tools.base.math.RoundingDirection.' + name);
    }
  }
  RoundingDirection.valueOf_61zpoe$ = RoundingDirection$valueOf;
  var get_isNaN = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_isNaN_rcaex3$', wrapFunction(function () {
    var isNaN_0 = Kotlin.kotlin.isNaN_yrwdxr$;
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver) {
      var get_isNativeFraction$result;
      if (typeof $receiver === 'number' || typeof $receiver === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      var tmp$ = get_isNativeFraction$result;
      if (tmp$) {
        tmp$ = isNaN_0(numberToDouble($receiver));
      }
      return tmp$;
    };
  }));
  var get_isNaN_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_isNaN_81szk$', wrapFunction(function () {
    var isNaN_0 = Kotlin.kotlin.isNaN_81szk$;
    return function ($receiver) {
      return isNaN_0($receiver);
    };
  }));
  var get_isNaN_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_isNaN_yrwdxr$', wrapFunction(function () {
    var isNaN_0 = Kotlin.kotlin.isNaN_yrwdxr$;
    return function ($receiver) {
      return isNaN_0($receiver);
    };
  }));
  var get_isInfinite = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_isInfinite_rcaex3$', wrapFunction(function () {
    var isInfinite = Kotlin.kotlin.isInfinite_yrwdxr$;
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver) {
      var get_isNativeFraction$result;
      if (typeof $receiver === 'number' || typeof $receiver === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      var tmp$ = get_isNativeFraction$result;
      if (tmp$) {
        tmp$ = isInfinite(numberToDouble($receiver));
      }
      return tmp$;
    };
  }));
  var get_isInfinite_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_isInfinite_81szk$', wrapFunction(function () {
    var isInfinite = Kotlin.kotlin.isInfinite_81szk$;
    return function ($receiver) {
      return isInfinite($receiver);
    };
  }));
  var get_isInfinite_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_isInfinite_yrwdxr$', wrapFunction(function () {
    var isInfinite = Kotlin.kotlin.isInfinite_yrwdxr$;
    return function ($receiver) {
      return isInfinite($receiver);
    };
  }));
  var get_isNegativeInfinity = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_isNegativeInfinity_rcaex3$', wrapFunction(function () {
    var isInfinite = Kotlin.kotlin.isInfinite_yrwdxr$;
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver) {
      var get_isNativeFraction$result;
      if (typeof $receiver === 'number' || typeof $receiver === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      var tmp$ = get_isNativeFraction$result;
      if (tmp$) {
        tmp$ = isInfinite(numberToDouble($receiver));
      }
      var tmp$_0 = tmp$;
      if (tmp$_0) {
        tmp$_0 = numberToDouble($receiver) < 0.0;
      }
      return tmp$_0;
    };
  }));
  var get_isNegativeInfinity_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_isNegativeInfinity_81szk$', wrapFunction(function () {
    var isInfinite = Kotlin.kotlin.isInfinite_81szk$;
    return function ($receiver) {
      return isInfinite($receiver) && $receiver < 0.0;
    };
  }));
  var get_isNegativeInfinity_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_isNegativeInfinity_yrwdxr$', wrapFunction(function () {
    var isInfinite = Kotlin.kotlin.isInfinite_yrwdxr$;
    return function ($receiver) {
      return isInfinite($receiver) && $receiver < 0.0;
    };
  }));
  var get_isPositiveInfinity = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_isPositiveInfinity_rcaex3$', wrapFunction(function () {
    var isInfinite = Kotlin.kotlin.isInfinite_yrwdxr$;
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver) {
      var get_isNativeFraction$result;
      if (typeof $receiver === 'number' || typeof $receiver === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      var tmp$ = get_isNativeFraction$result;
      if (tmp$) {
        tmp$ = isInfinite(numberToDouble($receiver));
      }
      var tmp$_0 = tmp$;
      if (tmp$_0) {
        tmp$_0 = numberToDouble($receiver) > 0.0;
      }
      return tmp$_0;
    };
  }));
  var get_isPositiveInfinity_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_isPositiveInfinity_81szk$', wrapFunction(function () {
    var isInfinite = Kotlin.kotlin.isInfinite_81szk$;
    return function ($receiver) {
      return isInfinite($receiver) && $receiver > 0.0;
    };
  }));
  var get_isPositiveInfinity_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_isPositiveInfinity_yrwdxr$', wrapFunction(function () {
    var isInfinite = Kotlin.kotlin.isInfinite_yrwdxr$;
    return function ($receiver) {
      return isInfinite($receiver) && $receiver > 0.0;
    };
  }));
  var get_infinity = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_infinity_y9phqa$', function ($receiver) {
    return $receiver.POSITIVE_INFINITY;
  });
  var get_infinity_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_infinity_6a53gt$', function ($receiver) {
    return $receiver.POSITIVE_INFINITY;
  });
  var get_nan = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_nan_y9phqa$', function ($receiver) {
    return $receiver.NaN;
  });
  var get_nan_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_nan_6a53gt$', function ($receiver) {
    return $receiver.NaN;
  });
  function NumberConvertible() {
  }
  NumberConvertible.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'NumberConvertible',
    interfaces: []
  };
  var get_float32Value = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_float32Value_rtoihn$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver) {
      return numberToDouble($receiver);
    };
  }));
  var get_float32Value_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_float32Value_81szk$', function ($receiver) {
    return $receiver;
  });
  var get_float64Value = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_float64Value_rtoihn$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver) {
      return numberToDouble($receiver);
    };
  }));
  var get_float64Value_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_float64Value_yrwdxr$', function ($receiver) {
    return $receiver;
  });
  var get_fractionValue = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_fractionValue_rtoihn$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver) {
      return numberToDouble($receiver);
    };
  }));
  var get_fractionValue_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_fractionValue_yrwdxr$', function ($receiver) {
    return $receiver;
  });
  var numberToByte = Kotlin.numberToByte;
  function toInt8Checked($receiver) {
    checkNaN($receiver);
    return numberToByte($receiver);
  }
  var numberToShort = Kotlin.numberToShort;
  function toInt16Checked($receiver) {
    checkNaN($receiver);
    return numberToShort($receiver);
  }
  function toInt32Checked($receiver) {
    checkNaN($receiver);
    return numberToInt($receiver);
  }
  var numberToLong = Kotlin.numberToLong;
  function toInt64Checked($receiver) {
    checkNaN($receiver);
    return numberToLong($receiver);
  }
  var toInt8 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInt8_rtoihn$', wrapFunction(function () {
    var numberToByte = Kotlin.numberToByte;
    return function ($receiver) {
      return numberToByte($receiver);
    };
  }));
  var toInt8_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInt8_mz3mee$', function ($receiver) {
    return $receiver;
  });
  var toInt8_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInt8_5vcgdc$', wrapFunction(function () {
    var toByte = Kotlin.toByte;
    return function ($receiver) {
      return toByte($receiver);
    };
  }));
  var toInt8_2 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInt8_s8ev3n$', wrapFunction(function () {
    var toByte = Kotlin.toByte;
    return function ($receiver) {
      return toByte($receiver);
    };
  }));
  var toInt8_3 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInt8_mts6qi$', wrapFunction(function () {
    var toByte = Kotlin.toByte;
    return function ($receiver) {
      return toByte($receiver.toInt());
    };
  }));
  var toInt16 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInt16_rtoihn$', wrapFunction(function () {
    var numberToShort = Kotlin.numberToShort;
    return function ($receiver) {
      return numberToShort($receiver);
    };
  }));
  var toInt16_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInt16_5vcgdc$', function ($receiver) {
    return $receiver;
  });
  var toInt16_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInt16_mz3mee$', function ($receiver) {
    return $receiver;
  });
  var toInt16_2 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInt16_s8ev3n$', wrapFunction(function () {
    var toShort = Kotlin.toShort;
    return function ($receiver) {
      return toShort($receiver);
    };
  }));
  var toInt16_3 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInt16_mts6qi$', wrapFunction(function () {
    var toShort = Kotlin.toShort;
    return function ($receiver) {
      return toShort($receiver.toInt());
    };
  }));
  var toInt32 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInt32_rtoihn$', wrapFunction(function () {
    var numberToInt = Kotlin.numberToInt;
    return function ($receiver) {
      return numberToInt($receiver);
    };
  }));
  var toInt32_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInt32_s8ev3n$', function ($receiver) {
    return $receiver;
  });
  var toInt32_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInt32_mz3mee$', function ($receiver) {
    return $receiver;
  });
  var toInt32_2 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInt32_5vcgdc$', function ($receiver) {
    return $receiver;
  });
  var toInt32_3 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInt32_mts6qi$', function ($receiver) {
    return $receiver.toInt();
  });
  var toInt64 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInt64_rtoihn$', wrapFunction(function () {
    var numberToLong = Kotlin.numberToLong;
    return function ($receiver) {
      return numberToLong($receiver);
    };
  }));
  var toInt64_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInt64_mts6qi$', function ($receiver) {
    return $receiver;
  });
  var toInt64_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInt64_mz3mee$', function ($receiver) {
    return Kotlin.Long.fromInt($receiver);
  });
  var toInt64_2 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInt64_5vcgdc$', function ($receiver) {
    return Kotlin.Long.fromInt($receiver);
  });
  var toInt64_3 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInt64_s8ev3n$', function ($receiver) {
    return Kotlin.Long.fromInt($receiver);
  });
  var toInteger = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInteger_rtoihn$', wrapFunction(function () {
    var numberToLong = Kotlin.numberToLong;
    return function ($receiver) {
      return numberToLong($receiver);
    };
  }));
  var toFloat32 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toFloat32_rtoihn$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver) {
      return numberToDouble($receiver);
    };
  }));
  var toFloat64 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toFloat64_rtoihn$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver) {
      return numberToDouble($receiver);
    };
  }));
  var toFraction = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toFraction_rtoihn$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver) {
      return numberToDouble($receiver);
    };
  }));
  var toIntegerChecked = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toIntegerChecked_rtoihn$', wrapFunction(function () {
    var toInt64Checked = _.org.bh.tools.base.math.toInt64Checked_rtoihn$;
    return function ($receiver) {
      return toInt64Checked($receiver);
    };
  }));
  var toInt8_4 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInt8_baug4k$', wrapFunction(function () {
    var toByte = Kotlin.kotlin.text.toByte_6ic1pp$;
    return function ($receiver, radix) {
      if (radix === void 0)
        radix = 10;
      return toByte($receiver, radix);
    };
  }));
  var toInt16_4 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInt16_baug4k$', wrapFunction(function () {
    var toShort = Kotlin.kotlin.text.toShort_6ic1pp$;
    return function ($receiver, radix) {
      if (radix === void 0)
        radix = 10;
      return toShort($receiver, radix);
    };
  }));
  var toInt32_4 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInt32_baug4k$', wrapFunction(function () {
    var toInt = Kotlin.kotlin.text.toInt_6ic1pp$;
    return function ($receiver, radix) {
      if (radix === void 0)
        radix = 10;
      return toInt($receiver, radix);
    };
  }));
  var toInt64_4 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInt64_baug4k$', wrapFunction(function () {
    var toLong = Kotlin.kotlin.text.toLong_6ic1pp$;
    return function ($receiver, radix) {
      if (radix === void 0)
        radix = 10;
      return toLong($receiver, radix);
    };
  }));
  var toInteger_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInteger_baug4k$', wrapFunction(function () {
    var toLong = Kotlin.kotlin.text.toLong_6ic1pp$;
    return function ($receiver, radix) {
      if (radix === void 0)
        radix = 10;
      return toLong($receiver, radix);
    };
  }));
  var toFloat32_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toFloat32_pdl1vz$', wrapFunction(function () {
    var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
    return function ($receiver) {
      return toDouble($receiver);
    };
  }));
  var toFloat64_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toFloat64_pdl1vz$', wrapFunction(function () {
    var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
    return function ($receiver) {
      return toDouble($receiver);
    };
  }));
  var toFraction_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toFraction_pdl1vz$', wrapFunction(function () {
    var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
    return function ($receiver) {
      return toDouble($receiver);
    };
  }));
  function checkBeforeConversionToNativeInteger($receiver) {
    checkNaN($receiver);
  }
  function checkNaN($receiver) {
    var get_isNativeFraction$result;
    if (typeof $receiver === 'number' || typeof $receiver === 'number') {
      get_isNativeFraction$result = true;
    }
     else {
      get_isNativeFraction$result = false;
    }
    var tmp$ = get_isNativeFraction$result;
    if (tmp$) {
      tmp$ = isNaN_0(numberToDouble($receiver));
    }
    if (tmp$) {
      throw new ArithmeticException('NaN cannot be converted to an integer');
    }
  }
  function checkInfinite($receiver) {
    var get_isNativeFraction$result;
    if (typeof $receiver === 'number' || typeof $receiver === 'number') {
      get_isNativeFraction$result = true;
    }
     else {
      get_isNativeFraction$result = false;
    }
    var tmp$ = get_isNativeFraction$result;
    if (tmp$) {
      tmp$ = isInfinite(numberToDouble($receiver));
    }
    if (tmp$) {
      throw new ArithmeticException('Infinity cannot be converted to an integer');
    }
  }
  var get_int8Value = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int8Value_rtoihn$', wrapFunction(function () {
    var toInt8Checked = _.org.bh.tools.base.math.toInt8Checked_rtoihn$;
    return function ($receiver) {
      return toInt8Checked($receiver);
    };
  }));
  var get_int8Value_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int8Value_mz3mee$', function ($receiver) {
    return $receiver;
  });
  var get_int8Value_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int8Value_5vcgdc$', wrapFunction(function () {
    var toByte = Kotlin.toByte;
    return function ($receiver) {
      return toByte($receiver);
    };
  }));
  var get_int8Value_2 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int8Value_s8ev3n$', wrapFunction(function () {
    var toByte = Kotlin.toByte;
    return function ($receiver) {
      return toByte($receiver);
    };
  }));
  var get_int8Value_3 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int8Value_mts6qi$', wrapFunction(function () {
    var toByte = Kotlin.toByte;
    return function ($receiver) {
      return toByte($receiver.toInt());
    };
  }));
  var get_int16Value = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int16Value_rtoihn$', wrapFunction(function () {
    var toInt16Checked = _.org.bh.tools.base.math.toInt16Checked_rtoihn$;
    return function ($receiver) {
      return toInt16Checked($receiver);
    };
  }));
  var get_int16Value_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int16Value_81szk$', wrapFunction(function () {
    var toInt16Checked = _.org.bh.tools.base.math.toInt16Checked_rtoihn$;
    return function ($receiver) {
      return toInt16Checked($receiver);
    };
  }));
  var get_int16Value_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int16Value_5vcgdc$', function ($receiver) {
    return $receiver;
  });
  var get_int16Value_2 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int16Value_mz3mee$', function ($receiver) {
    return $receiver;
  });
  var get_int16Value_3 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int16Value_s8ev3n$', wrapFunction(function () {
    var toShort = Kotlin.toShort;
    return function ($receiver) {
      return toShort($receiver);
    };
  }));
  var get_int16Value_4 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int16Value_mts6qi$', wrapFunction(function () {
    var toShort = Kotlin.toShort;
    return function ($receiver) {
      return toShort($receiver.toInt());
    };
  }));
  var get_int32Value = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int32Value_rtoihn$', wrapFunction(function () {
    var toInt32Checked = _.org.bh.tools.base.math.toInt32Checked_rtoihn$;
    return function ($receiver) {
      return toInt32Checked($receiver);
    };
  }));
  var get_int32Value_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int32Value_81szk$', wrapFunction(function () {
    var numberToInt = Kotlin.numberToInt;
    return function ($receiver) {
      return numberToInt($receiver);
    };
  }));
  var get_int32Value_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int32Value_yrwdxr$', wrapFunction(function () {
    var numberToInt = Kotlin.numberToInt;
    return function ($receiver) {
      return numberToInt($receiver);
    };
  }));
  var get_int32Value_2 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int32Value_mz3mee$', function ($receiver) {
    return $receiver;
  });
  var get_int32Value_3 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int32Value_5vcgdc$', function ($receiver) {
    return $receiver;
  });
  var get_int32Value_4 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int32Value_s8ev3n$', function ($receiver) {
    return $receiver;
  });
  var get_int32Value_5 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int32Value_mts6qi$', function ($receiver) {
    return $receiver.toInt();
  });
  var get_int64Value = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int64Value_rtoihn$', wrapFunction(function () {
    var toInt64Checked = _.org.bh.tools.base.math.toInt64Checked_rtoihn$;
    return function ($receiver) {
      return toInt64Checked($receiver);
    };
  }));
  var get_int64Value_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int64Value_mts6qi$', function ($receiver) {
    return $receiver;
  });
  var get_integerValue = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_integerValue_rtoihn$', wrapFunction(function () {
    var toInt64Checked = _.org.bh.tools.base.math.toInt64Checked_rtoihn$;
    return function ($receiver) {
      return toInt64Checked($receiver);
    };
  }));
  var get_integerValue_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_integerValue_mts6qi$', function ($receiver) {
    return $receiver;
  });
  function integerValue($receiver, rounded_0) {
    if (rounded_0 === void 0)
      rounded_0 = RoundingDirection$Companion_getInstance().default;
    var get_isNativeInteger$result;
    if (typeof $receiver === 'number' || typeof $receiver === 'number' || typeof $receiver === 'number' || Kotlin.isType($receiver, Kotlin.Long)) {
      get_isNativeInteger$result = true;
    }
     else {
      get_isNativeInteger$result = false;
    }
    if (get_isNativeInteger$result) {
      return toInt64Checked($receiver);
    }
     else {
      return toInt64Checked(rounded(numberToDouble($receiver), rounded_0));
    }
  }
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  function integerValue_0($receiver, rounded) {
    throw IllegalStateException_init('Not implemented on-purpose'.toString());
  }
  function integerValue_1($receiver, rounded) {
    throw IllegalStateException_init('Not implemented on-purpose'.toString());
  }
  function integerValue_2($receiver, rounded) {
    throw IllegalStateException_init('Not implemented on-purpose'.toString());
  }
  function integerValue_3($receiver, rounded) {
    throw IllegalStateException_init('Not implemented on-purpose'.toString());
  }
  var get_isNativeInteger = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_isNativeInteger_rtoihn$', function ($receiver) {
    if (typeof $receiver === 'number' || typeof $receiver === 'number' || typeof $receiver === 'number' || Kotlin.isType($receiver, Kotlin.Long))
      return true;
    else
      return false;
  });
  var get_isNativeFraction = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_isNativeFraction_rtoihn$', function ($receiver) {
    if (typeof $receiver === 'number' || typeof $receiver === 'number')
      return true;
    else
      return false;
  });
  var Long$Companion$MAX_VALUE = Kotlin.Long.MAX_VALUE;
  function get_clampedIntegerValue($receiver) {
    if (isInfinite($receiver) && $receiver > 0.0) {
      return Long$Companion$MAX_VALUE;
    }
     else {
      if (isInfinite($receiver) && $receiver < 0.0) {
        return Long$Companion$MIN_VALUE;
      }
       else {
        return toInt64Checked($receiver);
      }
    }
  }
  function get_clampedInt64Value($receiver) {
    if (isInfinite($receiver) && $receiver > 0.0) {
      return Long$Companion$MAX_VALUE;
    }
     else {
      if (isInfinite($receiver) && $receiver < 0.0) {
        return Long$Companion$MIN_VALUE;
      }
       else {
        return toInt64Checked($receiver);
      }
    }
  }
  function get_clampedInt32Value($receiver) {
    if (isInfinite($receiver) && $receiver > 0.0) {
      return 2147483647;
    }
     else {
      if (isInfinite($receiver) && $receiver < 0.0) {
        return -2147483648;
      }
       else {
        return numberToInt($receiver);
      }
    }
  }
  function get_clampedInt162Value($receiver) {
    if (isInfinite($receiver) && $receiver > 0.0) {
      return kotlin_js_internal_ShortCompanionObject.MAX_VALUE;
    }
     else {
      if (isInfinite($receiver) && $receiver < 0.0) {
        return kotlin_js_internal_ShortCompanionObject.MIN_VALUE;
      }
       else {
        return toInt16Checked($receiver);
      }
    }
  }
  function get_clampedInt8Value($receiver) {
    if (isInfinite($receiver) && $receiver > 0.0) {
      return kotlin_js_internal_ByteCompanionObject.MAX_VALUE;
    }
     else {
      if (isInfinite($receiver) && $receiver < 0.0) {
        return kotlin_js_internal_ByteCompanionObject.MIN_VALUE;
      }
       else {
        return toInt8Checked($receiver);
      }
    }
  }
  function get_clampedInt32Value_0($receiver) {
    return clamp(toInt64Checked(-2147483648), $receiver, toInt64Checked(2147483647)).toInt();
  }
  function get_clampedInt16Value($receiver) {
    return toShort(clamp(toInt64Checked(kotlin_js_internal_ShortCompanionObject.MIN_VALUE), $receiver, toInt64Checked(kotlin_js_internal_ShortCompanionObject.MAX_VALUE)).toInt());
  }
  function get_clampedInt8Value_0($receiver) {
    return toByte(clamp(toInt64Checked(kotlin_js_internal_ByteCompanionObject.MIN_VALUE), $receiver, toInt64Checked(kotlin_js_internal_ByteCompanionObject.MAX_VALUE)).toInt());
  }
  var get_clampToPositive = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_clampToPositive_mz3mee$', function ($receiver) {
    return $receiver < 0 ? 0 : $receiver;
  });
  var get_clampToPositive_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_clampToPositive_5vcgdc$', function ($receiver) {
    return $receiver < 0 ? 0 : $receiver;
  });
  var get_clampToPositive_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_clampToPositive_s8ev3n$', function ($receiver) {
    return $receiver < 0 ? 0 : $receiver;
  });
  var get_clampToPositive_2 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_clampToPositive_mts6qi$', wrapFunction(function () {
    var L0 = Kotlin.Long.ZERO;
    return function ($receiver) {
      return $receiver.toNumber() < 0 ? L0 : $receiver;
    };
  }));
  var get_clampToPositive_3 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_clampToPositive_81szk$', function ($receiver) {
    return $receiver < 0.0 ? 0.0 : $receiver;
  });
  var get_clampToPositive_4 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_clampToPositive_yrwdxr$', function ($receiver) {
    return $receiver < 0.0 ? 0.0 : $receiver;
  });
  var get_positiveOrNull = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_positiveOrNull_mz3mee$', function ($receiver) {
    return $receiver < 0 ? null : $receiver;
  });
  var get_positiveOrNull_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_positiveOrNull_5vcgdc$', function ($receiver) {
    return $receiver < 0 ? null : $receiver;
  });
  var get_positiveOrNull_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_positiveOrNull_s8ev3n$', function ($receiver) {
    return $receiver < 0 ? null : $receiver;
  });
  var get_positiveOrNull_2 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_positiveOrNull_mts6qi$', function ($receiver) {
    return $receiver.toNumber() < 0 ? null : $receiver;
  });
  var get_positiveOrNull_3 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_positiveOrNull_81szk$', function ($receiver) {
    return $receiver < 0.0 ? null : $receiver;
  });
  var get_positiveOrNull_4 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_positiveOrNull_yrwdxr$', function ($receiver) {
    return $receiver < 0.0 ? null : $receiver;
  });
  var Integer = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.Integer_4wadjb$', wrapFunction(function () {
    var toLong = Kotlin.kotlin.text.toLong_6ic1pp$;
    return function (from, radix) {
      if (radix === void 0)
        radix = 10;
      return toLong(from, radix);
    };
  }));
  var int8ArrayOf = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.int8ArrayOf_wcry4u$', function (int8) {
    return int8.slice();
  });
  var int16ArrayOf = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.int16ArrayOf_yd0neo$', function (int16) {
    return int16.slice();
  });
  var int32ArrayOf = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.int32ArrayOf_pmhfmb$', function (int32) {
    return int32.slice();
  });
  var int64ArrayOf = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.int64ArrayOf_2muz52$', function (int64) {
    return int64.slice();
  });
  var integerArrayOf = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.integerArrayOf_2muz52$', function (integers) {
    return integers.slice().slice();
  });
  var float32ArrayOf = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.float32ArrayOf_8cqhcw$', function (float32s) {
    return float32s.slice();
  });
  var float64ArrayOf = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.float64ArrayOf_yqxtqz$', function (float64s) {
    return float64s.slice();
  });
  var fractionArrayOf = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.fractionArrayOf_yqxtqz$', function (fractions) {
    return fractions.slice().slice();
  });
  var toInt8Array = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInt8Array_kdx1v$', wrapFunction(function () {
    var toByteArray = Kotlin.kotlin.collections.toByteArray_kdx1v$;
    return function ($receiver) {
      return toByteArray($receiver);
    };
  }));
  var toInt16Array = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInt16Array_p5z1wt$', wrapFunction(function () {
    var toShortArray = Kotlin.kotlin.collections.toShortArray_p5z1wt$;
    return function ($receiver) {
      return toShortArray($receiver);
    };
  }));
  var toInt32Array = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInt32Array_fx3nzu$', wrapFunction(function () {
    var toIntArray = Kotlin.kotlin.collections.toIntArray_fx3nzu$;
    return function ($receiver) {
      return toIntArray($receiver);
    };
  }));
  var toInt64Array = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toInt64Array_558emf$', wrapFunction(function () {
    var toLongArray = Kotlin.kotlin.collections.toLongArray_558emf$;
    return function ($receiver) {
      return toLongArray($receiver);
    };
  }));
  var toIntegerArray = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toIntegerArray_558emf$', wrapFunction(function () {
    var toLongArray = Kotlin.kotlin.collections.toLongArray_558emf$;
    return function ($receiver) {
      return toLongArray($receiver);
    };
  }));
  var toFloat32Array = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toFloat32Array_zwy31$', wrapFunction(function () {
    var toFloatArray = Kotlin.kotlin.collections.toFloatArray_zwy31$;
    return function ($receiver) {
      return toFloatArray($receiver);
    };
  }));
  var toFloat64Array = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toFloat64Array_tcduak$', wrapFunction(function () {
    var toDoubleArray = Kotlin.kotlin.collections.toDoubleArray_tcduak$;
    return function ($receiver) {
      return toDoubleArray($receiver);
    };
  }));
  var toFractionArray = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.toFractionArray_tcduak$', wrapFunction(function () {
    var toDoubleArray = Kotlin.kotlin.collections.toDoubleArray_tcduak$;
    return function ($receiver) {
      return toDoubleArray($receiver);
    };
  }));
  var get_int8Value_4 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int8Value_964n91$', function ($receiver) {
    return $receiver;
  });
  var get_int8Value_5 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int8Value_i2lc79$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var get_int8Value$lambda = wrapFunction(function () {
      var toByte = Kotlin.toByte;
      return function (it) {
        return toByte(it);
      };
    });
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var toByte = Kotlin.toByte;
    var toByteArray = Kotlin.kotlin.collections.toByteArray_kdx1v$;
    return function ($receiver) {
      var destination = ArrayList_init($receiver.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var item = $receiver[tmp$];
        destination.add_11rb$(toByte(item));
      }
      return toByteArray(destination);
    };
  }));
  var get_int8Value_6 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int8Value_tmsbgo$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var get_int8Value$lambda = wrapFunction(function () {
      var toByte = Kotlin.toByte;
      return function (it) {
        return toByte(it);
      };
    });
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var toByte = Kotlin.toByte;
    var toByteArray = Kotlin.kotlin.collections.toByteArray_kdx1v$;
    return function ($receiver) {
      var destination = ArrayList_init($receiver.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var item = $receiver[tmp$];
        destination.add_11rb$(toByte(item));
      }
      return toByteArray(destination);
    };
  }));
  var get_int8Value_7 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int8Value_se6h4x$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var get_int8Value$lambda = wrapFunction(function () {
      var toByte = Kotlin.toByte;
      return function (it) {
        return toByte(it.toInt());
      };
    });
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var toByte = Kotlin.toByte;
    var toByteArray = Kotlin.kotlin.collections.toByteArray_kdx1v$;
    return function ($receiver) {
      var destination = ArrayList_init($receiver.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var item = $receiver[tmp$];
        destination.add_11rb$(toByte(item.toInt()));
      }
      return toByteArray(destination);
    };
  }));
  var get_int16Value_5 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int16Value_964n91$', wrapFunction(function () {
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var toShortArray = Kotlin.kotlin.collections.toShortArray_p5z1wt$;
    return function ($receiver) {
      var destination = ArrayList_init($receiver.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var item = $receiver[tmp$];
        destination.add_11rb$(item);
      }
      return toShortArray(destination);
    };
  }));
  var get_int16Value_6 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int16Value_i2lc79$', function ($receiver) {
    return $receiver;
  });
  var get_int16Value_7 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int16Value_tmsbgo$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var get_int16Value$lambda = wrapFunction(function () {
      var toShort = Kotlin.toShort;
      return function (it) {
        return toShort(it);
      };
    });
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var toShort = Kotlin.toShort;
    var toShortArray = Kotlin.kotlin.collections.toShortArray_p5z1wt$;
    return function ($receiver) {
      var destination = ArrayList_init($receiver.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var item = $receiver[tmp$];
        destination.add_11rb$(toShort(item));
      }
      return toShortArray(destination);
    };
  }));
  var get_int16Value_8 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int16Value_se6h4x$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var get_int16Value$lambda = wrapFunction(function () {
      var toShort = Kotlin.toShort;
      return function (it) {
        return toShort(it.toInt());
      };
    });
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var toShort = Kotlin.toShort;
    var toShortArray = Kotlin.kotlin.collections.toShortArray_p5z1wt$;
    return function ($receiver) {
      var destination = ArrayList_init($receiver.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var item = $receiver[tmp$];
        destination.add_11rb$(toShort(item.toInt()));
      }
      return toShortArray(destination);
    };
  }));
  var get_int32Value_6 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int32Value_964n91$', wrapFunction(function () {
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var toIntArray = Kotlin.kotlin.collections.toIntArray_fx3nzu$;
    return function ($receiver) {
      var destination = ArrayList_init($receiver.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var item = $receiver[tmp$];
        destination.add_11rb$(item);
      }
      return toIntArray(destination);
    };
  }));
  var get_int32Value_7 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int32Value_i2lc79$', wrapFunction(function () {
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var toIntArray = Kotlin.kotlin.collections.toIntArray_fx3nzu$;
    return function ($receiver) {
      var destination = ArrayList_init($receiver.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var item = $receiver[tmp$];
        destination.add_11rb$(item);
      }
      return toIntArray(destination);
    };
  }));
  var get_int32Value_8 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int32Value_tmsbgo$', function ($receiver) {
    return $receiver;
  });
  var get_int32Value_9 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int32Value_se6h4x$', wrapFunction(function () {
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var toIntArray = Kotlin.kotlin.collections.toIntArray_fx3nzu$;
    return function ($receiver) {
      var destination = ArrayList_init($receiver.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var item = $receiver[tmp$];
        destination.add_11rb$(item.toInt());
      }
      return toIntArray(destination);
    };
  }));
  var get_int64Value_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int64Value_964n91$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var get_int64Value$lambda = wrapFunction(function () {
      var toInt64Checked = _.org.bh.tools.base.math.toInt64Checked_rtoihn$;
      return function (it) {
        return toInt64Checked(it);
      };
    });
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var toInt64Checked = _.org.bh.tools.base.math.toInt64Checked_rtoihn$;
    var toLongArray = Kotlin.kotlin.collections.toLongArray_558emf$;
    return function ($receiver) {
      var destination = ArrayList_init($receiver.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var item = $receiver[tmp$];
        destination.add_11rb$(toInt64Checked(item));
      }
      return toLongArray(destination);
    };
  }));
  var get_int64Value_2 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int64Value_i2lc79$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var get_int64Value$lambda = wrapFunction(function () {
      var toInt64Checked = _.org.bh.tools.base.math.toInt64Checked_rtoihn$;
      return function (it) {
        return toInt64Checked(it);
      };
    });
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var toInt64Checked = _.org.bh.tools.base.math.toInt64Checked_rtoihn$;
    var toLongArray = Kotlin.kotlin.collections.toLongArray_558emf$;
    return function ($receiver) {
      var destination = ArrayList_init($receiver.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var item = $receiver[tmp$];
        destination.add_11rb$(toInt64Checked(item));
      }
      return toLongArray(destination);
    };
  }));
  var get_int64Value_3 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int64Value_tmsbgo$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var get_int64Value$lambda = wrapFunction(function () {
      var toInt64Checked = _.org.bh.tools.base.math.toInt64Checked_rtoihn$;
      return function (it) {
        return toInt64Checked(it);
      };
    });
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var toInt64Checked = _.org.bh.tools.base.math.toInt64Checked_rtoihn$;
    var toLongArray = Kotlin.kotlin.collections.toLongArray_558emf$;
    return function ($receiver) {
      var destination = ArrayList_init($receiver.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var item = $receiver[tmp$];
        destination.add_11rb$(toInt64Checked(item));
      }
      return toLongArray(destination);
    };
  }));
  var get_int64Value_4 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_int64Value_se6h4x$', function ($receiver) {
    return $receiver;
  });
  var get_integerValue_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_integerValue_964n91$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var get_int64Value$lambda = wrapFunction(function () {
      var toInt64Checked = _.org.bh.tools.base.math.toInt64Checked_rtoihn$;
      return function (it) {
        return toInt64Checked(it);
      };
    });
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var toInt64Checked = _.org.bh.tools.base.math.toInt64Checked_rtoihn$;
    var toLongArray = Kotlin.kotlin.collections.toLongArray_558emf$;
    return function ($receiver) {
      var destination = ArrayList_init($receiver.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var item = $receiver[tmp$];
        destination.add_11rb$(toInt64Checked(item));
      }
      return toLongArray(destination);
    };
  }));
  var get_integerValue_2 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_integerValue_i2lc79$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var get_int64Value$lambda = wrapFunction(function () {
      var toInt64Checked = _.org.bh.tools.base.math.toInt64Checked_rtoihn$;
      return function (it) {
        return toInt64Checked(it);
      };
    });
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var toInt64Checked = _.org.bh.tools.base.math.toInt64Checked_rtoihn$;
    var toLongArray = Kotlin.kotlin.collections.toLongArray_558emf$;
    return function ($receiver) {
      var destination = ArrayList_init($receiver.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var item = $receiver[tmp$];
        destination.add_11rb$(toInt64Checked(item));
      }
      return toLongArray(destination);
    };
  }));
  var get_integerValue_3 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_integerValue_tmsbgo$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var get_int64Value$lambda = wrapFunction(function () {
      var toInt64Checked = _.org.bh.tools.base.math.toInt64Checked_rtoihn$;
      return function (it) {
        return toInt64Checked(it);
      };
    });
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var toInt64Checked = _.org.bh.tools.base.math.toInt64Checked_rtoihn$;
    var toLongArray = Kotlin.kotlin.collections.toLongArray_558emf$;
    return function ($receiver) {
      var destination = ArrayList_init($receiver.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var item = $receiver[tmp$];
        destination.add_11rb$(toInt64Checked(item));
      }
      return toLongArray(destination);
    };
  }));
  var get_integerValue_4 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_integerValue_se6h4x$', function ($receiver) {
    return $receiver;
  });
  var get_float32Value_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_float32Value_rjqryz$', function ($receiver) {
    return $receiver;
  });
  var get_float32Value_2 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_float32Value_bvy38s$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var get_float32Value$lambda = wrapFunction(function () {
      var numberToDouble = Kotlin.numberToDouble;
      return function (it) {
        return numberToDouble(it);
      };
    });
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var numberToDouble = Kotlin.numberToDouble;
    var toFloatArray = Kotlin.kotlin.collections.toFloatArray_zwy31$;
    return function ($receiver) {
      var destination = ArrayList_init($receiver.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var item = $receiver[tmp$];
        destination.add_11rb$(numberToDouble(item));
      }
      return toFloatArray(destination);
    };
  }));
  var get_float64Value_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_float64Value_rjqryz$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var get_float64Value$lambda = wrapFunction(function () {
      var numberToDouble = Kotlin.numberToDouble;
      return function (it) {
        return numberToDouble(it);
      };
    });
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var numberToDouble = Kotlin.numberToDouble;
    var toDoubleArray = Kotlin.kotlin.collections.toDoubleArray_tcduak$;
    return function ($receiver) {
      var destination = ArrayList_init($receiver.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var item = $receiver[tmp$];
        destination.add_11rb$(numberToDouble(item));
      }
      return toDoubleArray(destination);
    };
  }));
  var get_float64Value_2 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_float64Value_bvy38s$', function ($receiver) {
    return $receiver;
  });
  var get_fractionValue_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_fractionValue_rjqryz$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var get_float64Value$lambda = wrapFunction(function () {
      var numberToDouble = Kotlin.numberToDouble;
      return function (it) {
        return numberToDouble(it);
      };
    });
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var numberToDouble = Kotlin.numberToDouble;
    var toDoubleArray = Kotlin.kotlin.collections.toDoubleArray_tcduak$;
    return function ($receiver) {
      var destination = ArrayList_init($receiver.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var item = $receiver[tmp$];
        destination.add_11rb$(numberToDouble(item));
      }
      return toDoubleArray(destination);
    };
  }));
  var get_fractionValue_2 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_fractionValue_bvy38s$', function ($receiver) {
    return $receiver;
  });
  var get_min = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_min_k5zfx8$', wrapFunction(function () {
    var kotlin_js_internal_ByteCompanionObject = Kotlin.kotlin.js.internal.ByteCompanionObject;
    return function ($receiver) {
      return kotlin_js_internal_ByteCompanionObject.MIN_VALUE;
    };
  }));
  var get_max = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_max_k5zfx8$', wrapFunction(function () {
    var kotlin_js_internal_ByteCompanionObject = Kotlin.kotlin.js.internal.ByteCompanionObject;
    return function ($receiver) {
      return kotlin_js_internal_ByteCompanionObject.MAX_VALUE;
    };
  }));
  var get_min_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_min_qetqea$', wrapFunction(function () {
    var kotlin_js_internal_ShortCompanionObject = Kotlin.kotlin.js.internal.ShortCompanionObject;
    return function ($receiver) {
      return kotlin_js_internal_ShortCompanionObject.MIN_VALUE;
    };
  }));
  var get_max_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_max_qetqea$', wrapFunction(function () {
    var kotlin_js_internal_ShortCompanionObject = Kotlin.kotlin.js.internal.ShortCompanionObject;
    return function ($receiver) {
      return kotlin_js_internal_ShortCompanionObject.MAX_VALUE;
    };
  }));
  var get_min_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_min_qn7glr$', function ($receiver) {
    return -2147483648;
  });
  var get_max_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_max_qn7glr$', function ($receiver) {
    return 2147483647;
  });
  var get_min_2 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_min_vbrujs$', wrapFunction(function () {
    var Long$Companion$MIN_VALUE = Kotlin.Long.MIN_VALUE;
    return function ($receiver) {
      return Long$Companion$MIN_VALUE;
    };
  }));
  var get_max_2 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_max_vbrujs$', wrapFunction(function () {
    var Long$Companion$MAX_VALUE = Kotlin.Long.MAX_VALUE;
    return function ($receiver) {
      return Long$Companion$MAX_VALUE;
    };
  }));
  var get_leastNonzeroMagnitude = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_leastNonzeroMagnitude_y9phqa$', wrapFunction(function () {
    var kotlin_js_internal_FloatCompanionObject = Kotlin.kotlin.js.internal.FloatCompanionObject;
    return function ($receiver) {
      return kotlin_js_internal_FloatCompanionObject.MIN_VALUE;
    };
  }));
  var get_min_3 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_min_y9phqa$', wrapFunction(function () {
    var kotlin_js_internal_FloatCompanionObject = Kotlin.kotlin.js.internal.FloatCompanionObject;
    return function ($receiver) {
      return kotlin_js_internal_FloatCompanionObject.MIN_VALUE;
    };
  }));
  var get_greatestFiniteMagnitude = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_greatestFiniteMagnitude_y9phqa$', wrapFunction(function () {
    var kotlin_js_internal_FloatCompanionObject = Kotlin.kotlin.js.internal.FloatCompanionObject;
    return function ($receiver) {
      return kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
    };
  }));
  var get_max_3 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_max_y9phqa$', wrapFunction(function () {
    var kotlin_js_internal_FloatCompanionObject = Kotlin.kotlin.js.internal.FloatCompanionObject;
    return function ($receiver) {
      return kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
    };
  }));
  var get_leastNonzeroMagnitude_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_leastNonzeroMagnitude_6a53gt$', wrapFunction(function () {
    var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
    return function ($receiver) {
      return kotlin_js_internal_DoubleCompanionObject.MIN_VALUE;
    };
  }));
  var get_min_4 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_min_6a53gt$', wrapFunction(function () {
    var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
    return function ($receiver) {
      return kotlin_js_internal_DoubleCompanionObject.MIN_VALUE;
    };
  }));
  var get_greatestFiniteMagnitude_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_greatestFiniteMagnitude_6a53gt$', wrapFunction(function () {
    var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
    return function ($receiver) {
      return kotlin_js_internal_DoubleCompanionObject.MAX_VALUE;
    };
  }));
  var get_max_4 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.get_max_6a53gt$', wrapFunction(function () {
    var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
    return function ($receiver) {
      return kotlin_js_internal_DoubleCompanionObject.MAX_VALUE;
    };
  }));
  function BezierPath(segments) {
    BezierPath$Companion_getInstance();
    FractionPath.call(this, segments);
    this.segments_cuaqsu$_0 = segments;
  }
  Object.defineProperty(BezierPath.prototype, 'segments', {
    get: function () {
      return this.segments_cuaqsu$_0;
    }
  });
  function BezierPath$get_BezierPath$points$lambda(acc, cubicBezierPathSegment) {
    acc.add_11rb$(cubicBezierPathSegment.start);
    acc.add_11rb$(cubicBezierPathSegment.end);
    return Unit;
  }
  Object.defineProperty(BezierPath.prototype, 'points', {
    get: function () {
      return removeDuplicates(reduceInto(this.segments, ArrayList_init_0(), BezierPath$get_BezierPath$points$lambda));
    }
  });
  function BezierPath$Companion() {
    BezierPath$Companion_instance = this;
  }
  BezierPath$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BezierPath$Companion_instance = null;
  function BezierPath$Companion_getInstance() {
    if (BezierPath$Companion_instance === null) {
      new BezierPath$Companion();
    }
    return BezierPath$Companion_instance;
  }
  BezierPath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BezierPath',
    interfaces: [FractionPath]
  };
  BezierPath.prototype.component1 = function () {
    return this.segments;
  };
  BezierPath.prototype.copy_x2oukc$ = function (segments) {
    return new BezierPath(segments === void 0 ? this.segments : segments);
  };
  BezierPath.prototype.toString = function () {
    return 'BezierPath(segments=' + Kotlin.toString(this.segments) + ')';
  };
  BezierPath.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.segments) | 0;
    return result;
  };
  BezierPath.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.segments, other.segments))));
  };
  function CubicBezierPathSegment(start, startControlPoint, endControlPoint, end) {
    CubicBezierPathSegment$Companion_getInstance();
    FractionLineSegment.call(this, start, end);
    this.start_y4spzz$_0 = start;
    this.startControlPoint = startControlPoint;
    this.endControlPoint = endControlPoint;
    this.end_9q7ke2$_0 = end;
  }
  Object.defineProperty(CubicBezierPathSegment.prototype, 'start', {
    get: function () {
      return this.start_y4spzz$_0;
    }
  });
  Object.defineProperty(CubicBezierPathSegment.prototype, 'end', {
    get: function () {
      return this.end_9q7ke2$_0;
    }
  });
  Object.defineProperty(CubicBezierPathSegment.prototype, 'startAnchorPoint', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.geometry.CubicBezierPathSegment.get_startAnchorPoint', function () {
      return this.start;
    })
  });
  Object.defineProperty(CubicBezierPathSegment.prototype, 'nonNullStartControlPoint', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.geometry.CubicBezierPathSegment.get_nonNullStartControlPoint', function () {
      var tmp$;
      return (tmp$ = this.startControlPoint) != null ? tmp$ : this.start;
    })
  });
  Object.defineProperty(CubicBezierPathSegment.prototype, 'endAnchorPoint', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.geometry.CubicBezierPathSegment.get_endAnchorPoint', function () {
      return this.end;
    })
  });
  Object.defineProperty(CubicBezierPathSegment.prototype, 'nonNullEndControlPoint', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.geometry.CubicBezierPathSegment.get_nonNullEndControlPoint', function () {
      var tmp$;
      return (tmp$ = this.endControlPoint) != null ? tmp$ : this.end;
    })
  });
  CubicBezierPathSegment.prototype.contains_5eviog$ = function (point, tolerance) {
    return FractionLineSegment.prototype.contains_5eviog$.call(this, point, tolerance);
  };
  function CubicBezierPathSegment$Companion() {
    CubicBezierPathSegment$Companion_instance = this;
  }
  CubicBezierPathSegment$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CubicBezierPathSegment$Companion_instance = null;
  function CubicBezierPathSegment$Companion_getInstance() {
    if (CubicBezierPathSegment$Companion_instance === null) {
      new CubicBezierPathSegment$Companion();
    }
    return CubicBezierPathSegment$Companion_instance;
  }
  CubicBezierPathSegment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CubicBezierPathSegment',
    interfaces: [FractionLineSegment]
  };
  CubicBezierPathSegment.prototype.component1 = function () {
    return this.start;
  };
  CubicBezierPathSegment.prototype.component2 = function () {
    return this.startControlPoint;
  };
  CubicBezierPathSegment.prototype.component3 = function () {
    return this.endControlPoint;
  };
  CubicBezierPathSegment.prototype.component4 = function () {
    return this.end;
  };
  CubicBezierPathSegment.prototype.copy_49k4zw$ = function (start, startControlPoint, endControlPoint, end) {
    return new CubicBezierPathSegment(start === void 0 ? this.start : start, startControlPoint === void 0 ? this.startControlPoint : startControlPoint, endControlPoint === void 0 ? this.endControlPoint : endControlPoint, end === void 0 ? this.end : end);
  };
  CubicBezierPathSegment.prototype.toString = function () {
    return 'CubicBezierPathSegment(start=' + Kotlin.toString(this.start) + (', startControlPoint=' + Kotlin.toString(this.startControlPoint)) + (', endControlPoint=' + Kotlin.toString(this.endControlPoint)) + (', end=' + Kotlin.toString(this.end)) + ')';
  };
  CubicBezierPathSegment.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.start) | 0;
    result = result * 31 + Kotlin.hashCode(this.startControlPoint) | 0;
    result = result * 31 + Kotlin.hashCode(this.endControlPoint) | 0;
    result = result * 31 + Kotlin.hashCode(this.end) | 0;
    return result;
  };
  CubicBezierPathSegment.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.start, other.start) && Kotlin.equals(this.startControlPoint, other.startControlPoint) && Kotlin.equals(this.endControlPoint, other.endControlPoint) && Kotlin.equals(this.end, other.end)))));
  };
  function BezierPathConvertible() {
  }
  Object.defineProperty(BezierPathConvertible.prototype, 'b\xE9zierPathValue', {
    get: function () {
      return this.bezierPathValue;
    }
  });
  BezierPathConvertible.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BezierPathConvertible',
    interfaces: []
  };
  function get_p1($receiver) {
    return $receiver.start;
  }
  function get_p2($receiver) {
    var tmp$;
    return (tmp$ = $receiver.startControlPoint) != null ? tmp$ : $receiver.start;
  }
  function get_p3($receiver) {
    var tmp$;
    return (tmp$ = $receiver.endControlPoint) != null ? tmp$ : $receiver.end;
  }
  function get_p4($receiver) {
    return $receiver.end;
  }
  function y($receiver, time) {
    return pow(1 - time, 3.0) * get_p1($receiver).y + 3 * time * pow(1 - time, 2.0) * get_p2($receiver).y + 3 * pow(time, 2.0) * (1 - time) * get_p3($receiver).y + pow(time, 3.0) * get_p4($receiver).y;
  }
  function anyRadiansToNormalizedRadians(radians) {
    if (radians >= 0) {
      return radians % get_double_pi(kotlin_js_internal_DoubleCompanionObject);
    }
     else {
      return radians % get_double_pi(kotlin_js_internal_DoubleCompanionObject) + get_double_pi(kotlin_js_internal_DoubleCompanionObject);
    }
  }
  function LineSegment(start, end) {
    this.start_5hdx6f$_0 = start;
    this.end_rfn9lc$_0 = end;
    this.tupleValue_3cor7k$_0 = lazy(LineSegment$tupleValue$lambda(this));
  }
  Object.defineProperty(LineSegment.prototype, 'start', {
    get: function () {
      return this.start_5hdx6f$_0;
    }
  });
  Object.defineProperty(LineSegment.prototype, 'end', {
    get: function () {
      return this.end_rfn9lc$_0;
    }
  });
  Object.defineProperty(LineSegment.prototype, 'x1', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.geometry.LineSegment.get_x1', function () {
      return this.start.x;
    })
  });
  Object.defineProperty(LineSegment.prototype, 'y1', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.geometry.LineSegment.get_y1', function () {
      return this.start.y;
    })
  });
  Object.defineProperty(LineSegment.prototype, 'x2', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.geometry.LineSegment.get_x2', function () {
      return this.end.x;
    })
  });
  Object.defineProperty(LineSegment.prototype, 'y2', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.geometry.LineSegment.get_y2', function () {
      return this.end.y;
    })
  });
  LineSegment.prototype.toString = function () {
    return '{start: ' + this.start + ', end: ' + this.end + '}';
  };
  Object.defineProperty(LineSegment.prototype, 'stringValue', {
    get: function () {
      return this.toString();
    }
  });
  LineSegment.prototype.clone = function () {
    return new LineSegment(this.start.clone(), this.end.clone());
  };
  Object.defineProperty(LineSegment.prototype, 'tupleValue', {
    get: function () {
      return this.tupleValue_3cor7k$_0.value;
    }
  });
  function LineSegment$tupleValue$lambda(this$LineSegment) {
    return function () {
      return tuple_0(this$LineSegment.start, this$LineSegment.end);
    };
  }
  LineSegment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LineSegment',
    interfaces: [TupleConvertible, Cloneable]
  };
  function ComputableLineSegment(start, end) {
    LineSegment.call(this, start, end);
    this.flipped_10ewtr$_0 = lazy(ComputableLineSegment$flipped$lambda(end, start, this));
  }
  Object.defineProperty(ComputableLineSegment.prototype, 'flipped', {
    get: function () {
      return this.flipped_10ewtr$_0.value;
    }
  });
  ComputableLineSegment.prototype.copy_ttjijp$ = function (start, end, callback$default) {
    var tmp$, tmp$_0;
    if (start === void 0)
      start = Kotlin.isType(tmp$ = this.start.copy_foso30$(), ComputablePoint) ? tmp$ : throwCCE();
    if (end === void 0)
      end = Kotlin.isType(tmp$_0 = this.end.copy_foso30$(), ComputablePoint) ? tmp$_0 : throwCCE();
    return callback$default ? callback$default(start, end) : this.copy_ttjijp$$default(start, end);
  };
  function ComputableLineSegment$ThreePointOrientation(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ComputableLineSegment$ThreePointOrientation_initFields() {
    ComputableLineSegment$ThreePointOrientation_initFields = function () {
    };
    ComputableLineSegment$ThreePointOrientation$collinear_instance = new ComputableLineSegment$ThreePointOrientation('collinear', 0);
    ComputableLineSegment$ThreePointOrientation$clockwise_instance = new ComputableLineSegment$ThreePointOrientation('clockwise', 1);
    ComputableLineSegment$ThreePointOrientation$counterclockwise_instance = new ComputableLineSegment$ThreePointOrientation('counterclockwise', 2);
  }
  var ComputableLineSegment$ThreePointOrientation$collinear_instance;
  function ComputableLineSegment$ThreePointOrientation$collinear_getInstance() {
    ComputableLineSegment$ThreePointOrientation_initFields();
    return ComputableLineSegment$ThreePointOrientation$collinear_instance;
  }
  var ComputableLineSegment$ThreePointOrientation$clockwise_instance;
  function ComputableLineSegment$ThreePointOrientation$clockwise_getInstance() {
    ComputableLineSegment$ThreePointOrientation_initFields();
    return ComputableLineSegment$ThreePointOrientation$clockwise_instance;
  }
  var ComputableLineSegment$ThreePointOrientation$counterclockwise_instance;
  function ComputableLineSegment$ThreePointOrientation$counterclockwise_getInstance() {
    ComputableLineSegment$ThreePointOrientation_initFields();
    return ComputableLineSegment$ThreePointOrientation$counterclockwise_instance;
  }
  ComputableLineSegment$ThreePointOrientation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ThreePointOrientation',
    interfaces: [Enum]
  };
  function ComputableLineSegment$ThreePointOrientation$values() {
    return [ComputableLineSegment$ThreePointOrientation$collinear_getInstance(), ComputableLineSegment$ThreePointOrientation$clockwise_getInstance(), ComputableLineSegment$ThreePointOrientation$counterclockwise_getInstance()];
  }
  ComputableLineSegment$ThreePointOrientation.values = ComputableLineSegment$ThreePointOrientation$values;
  function ComputableLineSegment$ThreePointOrientation$valueOf(name) {
    switch (name) {
      case 'collinear':
        return ComputableLineSegment$ThreePointOrientation$collinear_getInstance();
      case 'clockwise':
        return ComputableLineSegment$ThreePointOrientation$clockwise_getInstance();
      case 'counterclockwise':
        return ComputableLineSegment$ThreePointOrientation$counterclockwise_getInstance();
      default:throwISE('No enum constant org.bh.tools.base.math.geometry.ComputableLineSegment.ThreePointOrientation.' + name);
    }
  }
  ComputableLineSegment$ThreePointOrientation.valueOf_61zpoe$ = ComputableLineSegment$ThreePointOrientation$valueOf;
  ComputableLineSegment.prototype.describeIntersection_eu7yk7$ = function (other, tolerance) {
    var tmp$;
    if (this.equals_ri9j6v$(other, tolerance)) {
      return new IntersectionDescription$completeOverlap(false);
    }
     else if (this.equals_ri9j6v$(other.flipped, tolerance)) {
      return new IntersectionDescription$completeOverlap(true);
    }
    tmp$ = this.rawIntersection_eu7yk7$(other, tolerance);
    if (tmp$ == null) {
      return IntersectionDescription$none_getInstance();
    }
    var rawIntersection = tmp$;
    if (this.start.equals_ri9j6v$(other.start, tolerance)) {
      return new IntersectionDescription$leftVertexTouchesRightVertex(this.start, true, true);
    }
    if (this.start.equals_ri9j6v$(other.end, tolerance)) {
      return new IntersectionDescription$leftVertexTouchesRightVertex(this.start, true, false);
    }
    if (this.end.equals_ri9j6v$(other.start, tolerance)) {
      return new IntersectionDescription$leftVertexTouchesRightVertex(this.end, false, true);
    }
    if (this.end.equals_ri9j6v$(other.end, tolerance)) {
      return new IntersectionDescription$leftVertexTouchesRightVertex(this.end, false, false);
    }
    if (other.contains_5eviog$(this.start, tolerance)) {
      return new IntersectionDescription$leftVertexTouchesRightEdge(this.start, true);
    }
    if (other.contains_5eviog$(this.end, tolerance)) {
      return new IntersectionDescription$leftVertexTouchesRightEdge(this.end, false);
    }
    if (this.contains_5eviog$(other.start, tolerance)) {
      return new IntersectionDescription$rightVertexTouchesLeftEdge(other.start, true);
    }
    if (this.contains_5eviog$(other.end, tolerance)) {
      return new IntersectionDescription$rightVertexTouchesLeftEdge(other.end, false);
    }
    return new IntersectionDescription$edgesCross(rawIntersection);
  };
  ComputableLineSegment.prototype.intersects_eu7yk7$ = function (other, tolerance) {
    return this.rawIntersection_eu7yk7$(other, tolerance) != null;
  };
  function ComputableLineSegment$flipped$lambda(closure$end, closure$start, this$ComputableLineSegment) {
    return function () {
      return this$ComputableLineSegment.copy_ttjijp$(closure$end, closure$start);
    };
  }
  ComputableLineSegment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ComputableLineSegment',
    interfaces: [TolerableEquality, LineSegment]
  };
  function IntersectionDescription() {
  }
  IntersectionDescription.prototype.integerValue_i07jsf$ = function (rounding, callback$default) {
    if (rounding === void 0)
      rounding = RoundingDirection$Companion_getInstance().default;
    return callback$default ? callback$default(rounding) : this.integerValue_i07jsf$$default(rounding);
  };
  function IntersectionDescription$none() {
    IntersectionDescription$none_instance = this;
    IntersectionDescription.call(this);
  }
  Object.defineProperty(IntersectionDescription$none.prototype, 'fractionValue', {
    get: function () {
      return this;
    }
  });
  IntersectionDescription$none.prototype.integerValue_i07jsf$$default = function (rounding) {
    return this;
  };
  IntersectionDescription$none.prototype.equals = function (other) {
    return other === this;
  };
  IntersectionDescription$none.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'none',
    interfaces: [IntersectionDescription]
  };
  var IntersectionDescription$none_instance = null;
  function IntersectionDescription$none_getInstance() {
    if (IntersectionDescription$none_instance === null) {
      new IntersectionDescription$none();
    }
    return IntersectionDescription$none_instance;
  }
  function IntersectionDescription$leftVertexTouchesRightVertex(verticesLocation, isLeftStartVertex, isRightStartVertex) {
    IntersectionDescription.call(this);
    this.verticesLocation = verticesLocation;
    this.isLeftStartVertex = isLeftStartVertex;
    this.isRightStartVertex = isRightStartVertex;
  }
  Object.defineProperty(IntersectionDescription$leftVertexTouchesRightVertex.prototype, 'fractionValue', {
    get: function () {
      return new IntersectionDescription$leftVertexTouchesRightVertex(get_fractionValue_4(this.verticesLocation), this.isLeftStartVertex, this.isRightStartVertex);
    }
  });
  IntersectionDescription$leftVertexTouchesRightVertex.prototype.integerValue_i07jsf$$default = function (rounding) {
    return new IntersectionDescription$leftVertexTouchesRightVertex(integerValue_5(this.verticesLocation, rounding), this.isLeftStartVertex, this.isRightStartVertex);
  };
  IntersectionDescription$leftVertexTouchesRightVertex.prototype.equals = function (other) {
    var tmp$;
    return Kotlin.isType(other, IntersectionDescription$leftVertexTouchesRightVertex) && ((tmp$ = this.verticesLocation) != null ? tmp$.equals(other.verticesLocation) : null) && this.isLeftStartVertex === other.isLeftStartVertex && this.isRightStartVertex === other.isRightStartVertex;
  };
  IntersectionDescription$leftVertexTouchesRightVertex.prototype.hashCode = function () {
    return hashCode(this) ^ this.verticesLocation.hashCode() ^ hashCode(this.isLeftStartVertex) ^ hashCode(this.isRightStartVertex);
  };
  IntersectionDescription$leftVertexTouchesRightVertex.prototype.toString = function () {
    return '{ leftVertexTouchesRightVertex: { verticesLocation: ' + this.verticesLocation + ', isLeftStartVertex: ' + this.isLeftStartVertex + ', isRightStartVertex: ' + this.isRightStartVertex + ' } }';
  };
  IntersectionDescription$leftVertexTouchesRightVertex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'leftVertexTouchesRightVertex',
    interfaces: [IntersectionDescription]
  };
  function IntersectionDescription$leftVertexTouchesRightEdge(leftVertexLocation, isLeftStartVertex) {
    IntersectionDescription.call(this);
    this.leftVertexLocation = leftVertexLocation;
    this.isLeftStartVertex = isLeftStartVertex;
  }
  Object.defineProperty(IntersectionDescription$leftVertexTouchesRightEdge.prototype, 'fractionValue', {
    get: function () {
      return new IntersectionDescription$leftVertexTouchesRightEdge(get_fractionValue_4(this.leftVertexLocation), this.isLeftStartVertex);
    }
  });
  IntersectionDescription$leftVertexTouchesRightEdge.prototype.integerValue_i07jsf$$default = function (rounding) {
    return new IntersectionDescription$leftVertexTouchesRightEdge(integerValue_5(this.leftVertexLocation, rounding), this.isLeftStartVertex);
  };
  IntersectionDescription$leftVertexTouchesRightEdge.prototype.equals = function (other) {
    return Kotlin.isType(other, IntersectionDescription$leftVertexTouchesRightEdge) && this.isLeftStartVertex === other.isLeftStartVertex;
  };
  IntersectionDescription$leftVertexTouchesRightEdge.prototype.hashCode = function () {
    return hashCode(this) ^ this.leftVertexLocation.hashCode() ^ hashCode(this.isLeftStartVertex);
  };
  IntersectionDescription$leftVertexTouchesRightEdge.prototype.toString = function () {
    return '{ leftVertexTouchesRightEdge: { leftVertexLocation: ' + this.leftVertexLocation + ', isLeftStartVertex: ' + this.isLeftStartVertex + ' } }';
  };
  IntersectionDescription$leftVertexTouchesRightEdge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'leftVertexTouchesRightEdge',
    interfaces: [IntersectionDescription]
  };
  function IntersectionDescription$rightVertexTouchesLeftEdge(rightVertexLocation, isRightStartVertex) {
    IntersectionDescription.call(this);
    this.rightVertexLocation = rightVertexLocation;
    this.isRightStartVertex = isRightStartVertex;
  }
  Object.defineProperty(IntersectionDescription$rightVertexTouchesLeftEdge.prototype, 'fractionValue', {
    get: function () {
      return new IntersectionDescription$rightVertexTouchesLeftEdge(get_fractionValue_4(this.rightVertexLocation), this.isRightStartVertex);
    }
  });
  IntersectionDescription$rightVertexTouchesLeftEdge.prototype.integerValue_i07jsf$$default = function (rounding) {
    return new IntersectionDescription$rightVertexTouchesLeftEdge(integerValue_5(this.rightVertexLocation, rounding), this.isRightStartVertex);
  };
  IntersectionDescription$rightVertexTouchesLeftEdge.prototype.equals = function (other) {
    return Kotlin.isType(other, IntersectionDescription$rightVertexTouchesLeftEdge) && this.isRightStartVertex === other.isRightStartVertex;
  };
  IntersectionDescription$rightVertexTouchesLeftEdge.prototype.hashCode = function () {
    return hashCode(this) ^ this.rightVertexLocation.hashCode() ^ hashCode(this.isRightStartVertex);
  };
  IntersectionDescription$rightVertexTouchesLeftEdge.prototype.toString = function () {
    return '{ rightVertexTouchesLeftEdge: { rightVertexLocation: ' + this.rightVertexLocation + ' isRightStartVertex: ' + this.isRightStartVertex + ' } }';
  };
  IntersectionDescription$rightVertexTouchesLeftEdge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'rightVertexTouchesLeftEdge',
    interfaces: [IntersectionDescription]
  };
  function IntersectionDescription$edgesCross(crossingLocation) {
    IntersectionDescription.call(this);
    this.crossingLocation = crossingLocation;
  }
  Object.defineProperty(IntersectionDescription$edgesCross.prototype, 'fractionValue', {
    get: function () {
      return new IntersectionDescription$edgesCross(get_fractionValue_4(this.crossingLocation));
    }
  });
  IntersectionDescription$edgesCross.prototype.integerValue_i07jsf$$default = function (rounding) {
    return new IntersectionDescription$edgesCross(integerValue_5(this.crossingLocation, rounding));
  };
  IntersectionDescription$edgesCross.prototype.equals = function (other) {
    var tmp$;
    return Kotlin.isType(other, IntersectionDescription$edgesCross) && ((tmp$ = this.crossingLocation) != null ? tmp$.equals(other.crossingLocation) : null);
  };
  IntersectionDescription$edgesCross.prototype.hashCode = function () {
    return hashCode(this) ^ this.crossingLocation.hashCode();
  };
  IntersectionDescription$edgesCross.prototype.toString = function () {
    return '{ edgesCross: { crossingLocation: ' + this.crossingLocation + ' } }';
  };
  IntersectionDescription$edgesCross.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'edgesCross',
    interfaces: [IntersectionDescription]
  };
  function IntersectionDescription$completeOverlap(isStartAndEndFlipped) {
    IntersectionDescription.call(this);
    this.isStartAndEndFlipped = isStartAndEndFlipped;
  }
  Object.defineProperty(IntersectionDescription$completeOverlap.prototype, 'fractionValue', {
    get: function () {
      return this;
    }
  });
  IntersectionDescription$completeOverlap.prototype.integerValue_i07jsf$$default = function (rounding) {
    return this;
  };
  IntersectionDescription$completeOverlap.prototype.equals = function (other) {
    return Kotlin.isType(other, IntersectionDescription$completeOverlap) && this.isStartAndEndFlipped === other.isStartAndEndFlipped;
  };
  IntersectionDescription$completeOverlap.prototype.hashCode = function () {
    return hashCode(this) ^ hashCode(this.isStartAndEndFlipped);
  };
  IntersectionDescription$completeOverlap.prototype.toString = function () {
    return '{ completeOverlap: { isStartAndEndFlipped: ' + this.isStartAndEndFlipped + ' } }';
  };
  IntersectionDescription$completeOverlap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'completeOverlap',
    interfaces: [IntersectionDescription]
  };
  IntersectionDescription.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntersectionDescription',
    interfaces: []
  };
  function LineSegmentDirection(exactRadians) {
    LineSegmentDirection$Companion_getInstance();
    this.exactRadians = exactRadians;
  }
  function LineSegmentDirection$yIncreasesMost(exactRadians) {
    LineSegmentDirection.call(this, exactRadians);
  }
  LineSegmentDirection$yIncreasesMost.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'yIncreasesMost',
    interfaces: [LineSegmentDirection]
  };
  function LineSegmentDirection$xDecreasesMost(exactRadians) {
    LineSegmentDirection.call(this, exactRadians);
  }
  LineSegmentDirection$xDecreasesMost.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'xDecreasesMost',
    interfaces: [LineSegmentDirection]
  };
  function LineSegmentDirection$yDecreasesMost(exactRadians) {
    LineSegmentDirection.call(this, exactRadians);
  }
  LineSegmentDirection$yDecreasesMost.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'yDecreasesMost',
    interfaces: [LineSegmentDirection]
  };
  function LineSegmentDirection$xIncreasesMost(exactRadians) {
    LineSegmentDirection.call(this, exactRadians);
  }
  LineSegmentDirection$xIncreasesMost.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'xIncreasesMost',
    interfaces: [LineSegmentDirection]
  };
  function LineSegmentDirection$Companion() {
    LineSegmentDirection$Companion_instance = this;
  }
  LineSegmentDirection$Companion.prototype.fromRadians_14dthe$ = function (radians) {
    var tmp$;
    tmp$ = anyRadiansToNormalizedRadians(radians);
    if (rangeTo(get_quarter_pi(kotlin_js_internal_DoubleCompanionObject), get_three_quarter_pi(kotlin_js_internal_DoubleCompanionObject)).contains_mef7kx$(tmp$))
      return new LineSegmentDirection$yIncreasesMost(radians);
    else if (rangeTo(get_three_quarter_pi(kotlin_js_internal_DoubleCompanionObject), get_five_quarter_pi(kotlin_js_internal_DoubleCompanionObject)).contains_mef7kx$(tmp$))
      return new LineSegmentDirection$xDecreasesMost(radians);
    else if (rangeTo(get_five_quarter_pi(kotlin_js_internal_DoubleCompanionObject), get_seven_quarter_pi(kotlin_js_internal_DoubleCompanionObject)).contains_mef7kx$(tmp$))
      return new LineSegmentDirection$yDecreasesMost(radians);
    else
      return new LineSegmentDirection$xIncreasesMost(radians);
  };
  LineSegmentDirection$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LineSegmentDirection$Companion_instance = null;
  function LineSegmentDirection$Companion_getInstance() {
    if (LineSegmentDirection$Companion_instance === null) {
      new LineSegmentDirection$Companion();
    }
    return LineSegmentDirection$Companion_instance;
  }
  LineSegmentDirection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LineSegmentDirection',
    interfaces: []
  };
  function IntegerLineSegment(start, end) {
    IntegerLineSegment$Companion_getInstance();
    ComputableLineSegment.call(this, start, end);
    this.bounds_1wwpx6$_0 = lazy(IntegerLineSegment$bounds$lambda(start, this));
  }
  Object.defineProperty(IntegerLineSegment.prototype, 'bounds', {
    get: function () {
      return this.bounds_1wwpx6$_0.value;
    }
  });
  Object.defineProperty(IntegerLineSegment.prototype, 'direction', {
    get: function () {
      var normalized = this.end.minus_tnufs7$(this.start);
      var tmp$ = LineSegmentDirection$Companion_getInstance();
      var tmp$_0 = numberToDouble(normalized.y);
      var x = numberToDouble(normalized.x);
      return tmp$.fromRadians_14dthe$(Math_0.atan2(tmp$_0, x));
    }
  });
  IntegerLineSegment.prototype.contains_keqjwe$ = function (point) {
    return this.contains_5eviog$(point, package$math.defaultFractionCalculationTolerance);
  };
  IntegerLineSegment.prototype.contains_5eviog$ = function (point, tolerance) {
    var tmp$;
    var integerPoint = get_integerValue_7(point);
    if (this.start.equals_ri9j6v$(integerPoint, tolerance) || this.end.equals_ri9j6v$(integerPoint, tolerance)) {
      return true;
    }
    if (equals_7(this.start.x, this.end.x, tolerance)) {
      var tmp$_0 = equals_7(point.x, this.start.x, tolerance);
      if (tmp$_0) {
        tmp$_0 = isBetween(point.y, this.start.y, this.end.y, toInt64Checked(rounded(tolerance)));
      }
      tmp$ = tmp$_0;
    }
     else if (equals_7(this.start.y, this.end.y, tolerance)) {
      var tmp$_1 = equals_7(point.y, this.start.y, tolerance);
      if (tmp$_1) {
        tmp$_1 = isBetween(point.x, this.start.x, this.end.x, toInt64Checked(rounded(tolerance)));
      }
      tmp$ = tmp$_1;
    }
     else {
      var m = this.end.y.subtract(this.start.y).div(this.end.x.subtract(this.start.x));
      var b = this.start.y.subtract(m.multiply(this.start.x));
      tmp$ = equals_7(point.y, m.multiply(point.x).add(b), tolerance);
    }
    return tmp$;
  };
  IntegerLineSegment.prototype.orientation_mfi1nt$ = function (p, q, r) {
    var tmp$;
    var ret = q.y.subtract(p.y).multiply(r.x.subtract(q.x)).subtract(q.x.subtract(p.x).multiply(r.y.subtract(q.y)));
    if (equals(ret, defaultIntegerCalculationTolerance))
      tmp$ = ComputableLineSegment$ThreePointOrientation$collinear_getInstance();
    else if (ret.toNumber() > 0)
      tmp$ = ComputableLineSegment$ThreePointOrientation$clockwise_getInstance();
    else
      tmp$ = ComputableLineSegment$ThreePointOrientation$counterclockwise_getInstance();
    return tmp$;
  };
  IntegerLineSegment.prototype.equals_ukksij$ = function (other) {
    return this.equals_ri9j6v$(other, package$math.defaultFractionCalculationTolerance);
  };
  IntegerLineSegment.prototype.equals_ri9j6v$$default = function (other, tolerance) {
    return this.start.equals_ri9j6v$(other.start, tolerance) && this.end.equals_ri9j6v$(other.end, tolerance);
  };
  IntegerLineSegment.prototype.copy_ttjijp$$default = function (start, end) {
    return new IntegerLineSegment(start, end);
  };
  IntegerLineSegment.prototype.intersects_ukksij$ = function (other) {
    return this.intersects_eu7yk7$(other, package$math.defaultFractionCalculationTolerance);
  };
  IntegerLineSegment.prototype.describeIntersection_ukksij$ = function (other) {
    return this.describeIntersection_eu7yk7$(other, package$math.defaultFractionCalculationTolerance);
  };
  IntegerLineSegment.prototype.rawIntersection_ukksij$ = function (other) {
    return this.rawIntersection_eu7yk7$(other, package$math.defaultFractionCalculationTolerance);
  };
  IntegerLineSegment.prototype.rawIntersection_eu7yk7$ = function (other, tolerance) {
    return IntegerLineSegment$Companion_getInstance().findLineIntersection_3akoz3$(this, other);
  };
  function IntegerLineSegment$Companion() {
    IntegerLineSegment$Companion_instance = this;
  }
  IntegerLineSegment$Companion.prototype.findLineIntersection_3akoz3$ = function (line1, line2, tolerance) {
    if (tolerance === void 0)
      tolerance = defaultIntegerCalculationTolerance;
    var tmp$;
    return (tmp$ = get_fractionValue_3(line1).rawIntersection_eu7yk7$(get_fractionValue_3(line2), numberToDouble(tolerance))) != null ? get_integerValue_7(tmp$) : null;
  };
  IntegerLineSegment$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var IntegerLineSegment$Companion_instance = null;
  function IntegerLineSegment$Companion_getInstance() {
    if (IntegerLineSegment$Companion_instance === null) {
      new IntegerLineSegment$Companion();
    }
    return IntegerLineSegment$Companion_instance;
  }
  function IntegerLineSegment$bounds$lambda(closure$start, this$IntegerLineSegment) {
    return function () {
      return new IntegerRect(closure$start, new IntegerSize(this$IntegerLineSegment.end.x.subtract(this$IntegerLineSegment.start.x), this$IntegerLineSegment.end.y.subtract(this$IntegerLineSegment.start.y)));
    };
  }
  IntegerLineSegment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntegerLineSegment',
    interfaces: [ComputableLineSegment]
  };
  function get_integerValue_5($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, IntegerLineSegment) ? tmp$ : null) != null ? tmp$_0 : new IntegerLineSegment(get_integerValue_7($receiver.start), get_integerValue_7($receiver.end));
  }
  function integerValue_4($receiver, rounding) {
    if (rounding === void 0)
      rounding = RoundingDirection$Companion_getInstance().default;
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, IntegerLineSegment) ? tmp$ : null) != null ? tmp$_0 : new IntegerLineSegment(integerValue_5($receiver.start, rounding), integerValue_5($receiver.end, rounding));
  }
  function FractionLineSegment(start, end) {
    FractionLineSegment$Companion_getInstance();
    ComputableLineSegment.call(this, start, end);
    this.bounds_fidfpq$_0 = lazy(FractionLineSegment$bounds$lambda(this));
  }
  FractionLineSegment.prototype.contains_keqjwe$ = function (point) {
    return this.contains_5eviog$(point, defaultFractionCalculationTolerance);
  };
  FractionLineSegment.prototype.contains_5eviog$ = function (point, tolerance) {
    var tmp$;
    var fractionPoint = get_fractionValue_4(point);
    if (this.start.equals_ri9j6v$(fractionPoint, tolerance) || this.end.equals_ri9j6v$(fractionPoint, tolerance)) {
      return true;
    }
    if (equals_0(this.start.x, this.end.x, tolerance))
      tmp$ = (equals_0(point.x, this.start.x, tolerance) && isBetween_0(point.y, this.start.y, this.end.y, tolerance));
    else if (equals_0(this.start.y, this.end.y, tolerance))
      tmp$ = (equals_0(point.y, this.start.y, tolerance) && isBetween_0(point.x, this.start.x, this.end.x, tolerance));
    else {
      var m = (this.end.y - this.start.y) / (this.end.x - this.start.x);
      var b = this.start.y - m * this.start.x;
      tmp$ = equals_0(point.y, m * point.x + b, tolerance);
    }
    return tmp$;
  };
  Object.defineProperty(FractionLineSegment.prototype, 'bounds', {
    get: function () {
      return this.bounds_fidfpq$_0.value;
    }
  });
  FractionLineSegment.prototype.orientation_mfi1nt$ = function (p, q, r) {
    var tmp$;
    var ret = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
    if (abs(ret) <= defaultFractionCalculationTolerance)
      tmp$ = ComputableLineSegment$ThreePointOrientation$collinear_getInstance();
    else if (ret > 0)
      tmp$ = ComputableLineSegment$ThreePointOrientation$clockwise_getInstance();
    else
      tmp$ = ComputableLineSegment$ThreePointOrientation$counterclockwise_getInstance();
    return tmp$;
  };
  FractionLineSegment.prototype.equals_ukksij$ = function (other) {
    return this.equals_ri9j6v$(other, defaultFractionCalculationTolerance);
  };
  FractionLineSegment.prototype.equals_ri9j6v$$default = function (other, tolerance) {
    return this.start.equals_ri9j6v$(other.start, tolerance) && this.end.equals_ri9j6v$(other.end, tolerance);
  };
  FractionLineSegment.prototype.copy_ttjijp$$default = function (start, end) {
    return new FractionLineSegment(start, end);
  };
  FractionLineSegment.prototype.intersects_ukksij$ = function (other) {
    return this.intersects_eu7yk7$(other, defaultFractionCalculationTolerance);
  };
  FractionLineSegment.prototype.describeIntersection_ukksij$ = function (other) {
    return this.describeIntersection_eu7yk7$(other, defaultFractionCalculationTolerance);
  };
  FractionLineSegment.prototype.rawIntersection_ukksij$ = function (other) {
    return this.rawIntersection_eu7yk7$(other, defaultFractionCalculationTolerance);
  };
  FractionLineSegment.prototype.rawIntersection_eu7yk7$ = function (other, tolerance) {
    return FractionLineSegment$Companion_getInstance().findLineIntersection_kts6n2$(this, other);
  };
  function FractionLineSegment$Companion() {
    FractionLineSegment$Companion_instance = this;
  }
  FractionLineSegment$Companion.prototype.findLineIntersection_kts6n2$ = function (line1, line2, tolerance) {
    if (tolerance === void 0) {
      tolerance = package$math.defaultFractionCalculationTolerance;
    }
    var tmp$;
    if (line1.equals_ri9j6v$(line2, tolerance)) {
      return line1.start;
    }
     else if (line1.start.equals_ri9j6v$(line2.start, tolerance) || line1.start.equals_ri9j6v$(line2.end, tolerance)) {
      return line1.start;
    }
     else if (line1.end.equals_ri9j6v$(line2.start, tolerance) || line1.end.equals_ri9j6v$(line2.end, tolerance)) {
      return line1.end;
    }
     else if (!line1.bounds.intersects_rv3yws$(line2.bounds)) {
      return null;
    }
    var line1XDelta = line1.start.x - line1.end.x;
    var line1YDelta = line1.end.y - line1.start.y;
    var line1Delta = line1XDelta * line1.start.y + line1YDelta * line1.start.x;
    var line2XDelta = line2.start.x - line2.end.x;
    var line2YDelta = line2.end.y - line2.start.y;
    var line2Delta = line2XDelta * line2.start.y + line2YDelta * line2.start.x;
    var angularDifference = abs(line2XDelta * line1YDelta - line1XDelta * line2YDelta);
    var areParallel = angularDifference <= tolerance;
    if (areParallel) {
      if (equals(line1.start, line2.start) || equals(line1.start, line2.end)) {
        tmp$ = line1.start;
      }
       else if (equals(line1.end, line2.start) || equals(line1.end, line2.end)) {
        tmp$ = line1.end;
      }
       else {
        tmp$ = null;
      }
    }
     else {
      var x = (line2XDelta * line1Delta - line1XDelta * line2Delta) / angularDifference;
      var y = (line1YDelta * line2Delta - line2YDelta * line1Delta) / angularDifference;
      if (isNaN_0(x) || isNaN_0(y)) {
        tmp$ = null;
      }
       else {
        tmp$ = new FractionPoint(x, y);
      }
    }
    return tmp$;
  };
  FractionLineSegment$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FractionLineSegment$Companion_instance = null;
  function FractionLineSegment$Companion_getInstance() {
    if (FractionLineSegment$Companion_instance === null) {
      new FractionLineSegment$Companion();
    }
    return FractionLineSegment$Companion_instance;
  }
  function FractionLineSegment$bounds$lambda(this$FractionLineSegment) {
    return function () {
      return new FractionRect(new FractionPoint(this$FractionLineSegment.start.x, this$FractionLineSegment.start.y), new FractionSize(this$FractionLineSegment.end.x - this$FractionLineSegment.start.x, this$FractionLineSegment.end.y - this$FractionLineSegment.start.y));
    };
  }
  FractionLineSegment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FractionLineSegment',
    interfaces: [ComputableLineSegment]
  };
  function FractionLineSegment_init(x1, y1, x2, y2, $this) {
    $this = $this || Object.create(FractionLineSegment.prototype);
    FractionLineSegment.call($this, new FractionPoint(x1, y1), new FractionPoint(x2, y2));
    return $this;
  }
  function get_fractionValue_3($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, FractionLineSegment) ? tmp$ : null) != null ? tmp$_0 : new FractionLineSegment(get_fractionValue_4($receiver.start), get_fractionValue_4($receiver.end));
  }
  function Path() {
  }
  Path.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Path',
    interfaces: []
  };
  function OtherSegmentRelationshipToCurrent(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function OtherSegmentRelationshipToCurrent_initFields() {
    OtherSegmentRelationshipToCurrent_initFields = function () {
    };
    OtherSegmentRelationshipToCurrent$otherIsLeftNeighborOfCurrent_instance = new OtherSegmentRelationshipToCurrent('otherIsLeftNeighborOfCurrent', 0);
    OtherSegmentRelationshipToCurrent$otherIsCurrent_instance = new OtherSegmentRelationshipToCurrent('otherIsCurrent', 1);
    OtherSegmentRelationshipToCurrent$otherIsRightNeighborOfCurrent_instance = new OtherSegmentRelationshipToCurrent('otherIsRightNeighborOfCurrent', 2);
    OtherSegmentRelationshipToCurrent$otherDoesNotTouchCurrent_instance = new OtherSegmentRelationshipToCurrent('otherDoesNotTouchCurrent', 3);
    OtherSegmentRelationshipToCurrent$Companion_getInstance();
  }
  var OtherSegmentRelationshipToCurrent$otherIsLeftNeighborOfCurrent_instance;
  function OtherSegmentRelationshipToCurrent$otherIsLeftNeighborOfCurrent_getInstance() {
    OtherSegmentRelationshipToCurrent_initFields();
    return OtherSegmentRelationshipToCurrent$otherIsLeftNeighborOfCurrent_instance;
  }
  var OtherSegmentRelationshipToCurrent$otherIsCurrent_instance;
  function OtherSegmentRelationshipToCurrent$otherIsCurrent_getInstance() {
    OtherSegmentRelationshipToCurrent_initFields();
    return OtherSegmentRelationshipToCurrent$otherIsCurrent_instance;
  }
  var OtherSegmentRelationshipToCurrent$otherIsRightNeighborOfCurrent_instance;
  function OtherSegmentRelationshipToCurrent$otherIsRightNeighborOfCurrent_getInstance() {
    OtherSegmentRelationshipToCurrent_initFields();
    return OtherSegmentRelationshipToCurrent$otherIsRightNeighborOfCurrent_instance;
  }
  var OtherSegmentRelationshipToCurrent$otherDoesNotTouchCurrent_instance;
  function OtherSegmentRelationshipToCurrent$otherDoesNotTouchCurrent_getInstance() {
    OtherSegmentRelationshipToCurrent_initFields();
    return OtherSegmentRelationshipToCurrent$otherDoesNotTouchCurrent_instance;
  }
  function OtherSegmentRelationshipToCurrent$Companion() {
    OtherSegmentRelationshipToCurrent$Companion_instance = this;
  }
  OtherSegmentRelationshipToCurrent$Companion.prototype.from_vux9f0$ = function (currentSegmentIndex, otherSegmentIndex) {
    var tmp$;
    switch (currentSegmentIndex - otherSegmentIndex | 0) {
      case -1:
        tmp$ = OtherSegmentRelationshipToCurrent$otherIsLeftNeighborOfCurrent_getInstance();
        break;
      case 0:
        tmp$ = OtherSegmentRelationshipToCurrent$otherIsCurrent_getInstance();
        break;
      case 1:
        tmp$ = OtherSegmentRelationshipToCurrent$otherIsRightNeighborOfCurrent_getInstance();
        break;
      default:tmp$ = OtherSegmentRelationshipToCurrent$otherDoesNotTouchCurrent_getInstance();
        break;
    }
    return tmp$;
  };
  OtherSegmentRelationshipToCurrent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var OtherSegmentRelationshipToCurrent$Companion_instance = null;
  function OtherSegmentRelationshipToCurrent$Companion_getInstance() {
    OtherSegmentRelationshipToCurrent_initFields();
    if (OtherSegmentRelationshipToCurrent$Companion_instance === null) {
      new OtherSegmentRelationshipToCurrent$Companion();
    }
    return OtherSegmentRelationshipToCurrent$Companion_instance;
  }
  OtherSegmentRelationshipToCurrent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OtherSegmentRelationshipToCurrent',
    interfaces: [Enum]
  };
  function OtherSegmentRelationshipToCurrent$values() {
    return [OtherSegmentRelationshipToCurrent$otherIsLeftNeighborOfCurrent_getInstance(), OtherSegmentRelationshipToCurrent$otherIsCurrent_getInstance(), OtherSegmentRelationshipToCurrent$otherIsRightNeighborOfCurrent_getInstance(), OtherSegmentRelationshipToCurrent$otherDoesNotTouchCurrent_getInstance()];
  }
  OtherSegmentRelationshipToCurrent.values = OtherSegmentRelationshipToCurrent$values;
  function OtherSegmentRelationshipToCurrent$valueOf(name) {
    switch (name) {
      case 'otherIsLeftNeighborOfCurrent':
        return OtherSegmentRelationshipToCurrent$otherIsLeftNeighborOfCurrent_getInstance();
      case 'otherIsCurrent':
        return OtherSegmentRelationshipToCurrent$otherIsCurrent_getInstance();
      case 'otherIsRightNeighborOfCurrent':
        return OtherSegmentRelationshipToCurrent$otherIsRightNeighborOfCurrent_getInstance();
      case 'otherDoesNotTouchCurrent':
        return OtherSegmentRelationshipToCurrent$otherDoesNotTouchCurrent_getInstance();
      default:throwISE('No enum constant org.bh.tools.base.math.geometry.OtherSegmentRelationshipToCurrent.' + name);
    }
  }
  OtherSegmentRelationshipToCurrent.valueOf_61zpoe$ = OtherSegmentRelationshipToCurrent$valueOf;
  function ComputablePath() {
    ComputablePath$Companion_getInstance();
  }
  ComputablePath.prototype.anyTwoSegments_wfe1ij$ = function (comparator) {
    var tmp$, tmp$_0;
    if (this.segments.size < 2) {
      return false;
    }
    tmp$ = this.segments.size;
    for (var currentSegmentIndex = 0; currentSegmentIndex < tmp$; currentSegmentIndex++) {
      var currentSegment = this.segments.get_za3lpa$(currentSegmentIndex);
      tmp$_0 = this.segments.size;
      for (var otherSegmentIndex = 0; otherSegmentIndex < tmp$_0; otherSegmentIndex++) {
        var otherSegment = this.segments.get_za3lpa$(otherSegmentIndex);
        if (comparator(currentSegment, otherSegment, OtherSegmentRelationshipToCurrent$Companion_getInstance().from_vux9f0$(currentSegmentIndex, otherSegmentIndex))) {
          return true;
        }
      }
    }
    return false;
  };
  function ComputablePath$Companion() {
    ComputablePath$Companion_instance = this;
  }
  ComputablePath$Companion.prototype.doSegmentsIntersect_fttyj5$ = function (left, right) {
    var tmp$;
    tmp$ = left.describeIntersection_ukksij$(right);
    if (Kotlin.isType(tmp$, IntersectionDescription$none) || Kotlin.isType(tmp$, IntersectionDescription$leftVertexTouchesRightVertex))
      return false;
    else if (Kotlin.isType(tmp$, IntersectionDescription$completeOverlap) || Kotlin.isType(tmp$, IntersectionDescription$leftVertexTouchesRightEdge) || Kotlin.isType(tmp$, IntersectionDescription$rightVertexTouchesLeftEdge) || Kotlin.isType(tmp$, IntersectionDescription$edgesCross))
      return true;
    else
      return Kotlin.noWhenBranchMatched();
  };
  ComputablePath$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ComputablePath$Companion_instance = null;
  function ComputablePath$Companion_getInstance() {
    if (ComputablePath$Companion_instance === null) {
      new ComputablePath$Companion();
    }
    return ComputablePath$Companion_instance;
  }
  ComputablePath.prototype.contains_keqjwe$ = function (point) {
    var $receiver = this.segments;
    var any$result;
    any$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.contains_keqjwe$(point)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  };
  ComputablePath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ComputablePath',
    interfaces: [Path]
  };
  function IntegerPath(segments) {
    IntegerPath$Companion_getInstance();
    if (segments === void 0) {
      segments = emptyList();
    }
    this.segments_h1vcgj$_0 = segments;
    this.points_8m0362$_0 = lazy(IntegerPath$points$lambda(this));
    this.isClosed_em0dav$_0 = lazy(IntegerPath$isClosed$lambda(this));
    this.intersectsSelf_jfvdhv$_0 = lazy(IntegerPath$intersectsSelf$lambda(this));
  }
  Object.defineProperty(IntegerPath.prototype, 'segments', {
    get: function () {
      return this.segments_h1vcgj$_0;
    }
  });
  function IntegerPath$Companion() {
    IntegerPath$Companion_instance = this;
  }
  var last = Kotlin.kotlin.collections.last_7wnvza$;
  function IntegerPath$Companion$segmentsFromGenericPoints$lambda(previousSegments, currentPoint) {
    previousSegments.add_11rb$(new IntegerLineSegment(last(previousSegments).end, get_integerValue_7(currentPoint)));
    return previousSegments;
  }
  var first = Kotlin.kotlin.collections.first_7wnvza$;
  IntegerPath$Companion.prototype.segmentsFromGenericPoints_58xfhi$ = function (points, isClosed) {
    if (points.size < 2) {
      return emptyList();
    }
    var allButFirstTwoPoints = points.subList_vux9f0$(2, points.size);
    var runningValue = {v: mutableListOf([new IntegerLineSegment(get_integerValue_7(points.get_za3lpa$(0)), get_integerValue_7(points.get_za3lpa$(1)))])};
    var tmp$;
    tmp$ = allButFirstTwoPoints.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      runningValue.v = IntegerPath$Companion$segmentsFromGenericPoints$lambda(runningValue.v, element);
    }
    var segments = runningValue.v;
    if (isClosed) {
      var element_0 = new IntegerLineSegment(get_integerValue_7(last(points)), get_integerValue_7(first(points)));
      segments.add_11rb$(element_0);
    }
    return segments;
  };
  function IntegerPath$Companion$pathFromGenericSegments$lambda(translatedSegments, currentSegment) {
    var integerSegment = get_integerValue_5(currentSegment);
    translatedSegments.add_11rb$(integerSegment);
    return translatedSegments;
  }
  IntegerPath$Companion.prototype.pathFromGenericSegments_ojuucy$ = function (segments) {
    var runningValue = {v: ArrayList_init_0()};
    var tmp$;
    tmp$ = segments.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      runningValue.v = IntegerPath$Companion$pathFromGenericSegments$lambda(runningValue.v, element);
    }
    return new IntegerPath(runningValue.v);
  };
  IntegerPath$Companion.prototype.pathFromGenericPoints_58xfhi$ = function (points, isClosed) {
    return this.pathFromGenericSegments_ojuucy$(this.segmentsFromGenericPoints_58xfhi$(points, isClosed));
  };
  IntegerPath$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var IntegerPath$Companion_instance = null;
  function IntegerPath$Companion_getInstance() {
    if (IntegerPath$Companion_instance === null) {
      new IntegerPath$Companion();
    }
    return IntegerPath$Companion_instance;
  }
  function IntegerPath$getAllPoints$lambda(previousPoints, currentSegment) {
    previousPoints.add_11rb$(currentSegment.end);
    return previousPoints;
  }
  IntegerPath.prototype.getAllPoints = function () {
    var tmp$;
    if (this.segments.isEmpty()) {
      tmp$ = emptyList();
    }
     else {
      var tmp$_0 = this.segments;
      var runningValue = {v: mutableListOf([first(this.segments).start])};
      var tmp$_1;
      tmp$_1 = tmp$_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        runningValue.v = IntegerPath$getAllPoints$lambda(runningValue.v, element);
      }
      tmp$ = runningValue.v;
    }
    return tmp$;
  };
  Object.defineProperty(IntegerPath.prototype, 'points', {
    get: function () {
      return this.points_8m0362$_0.value;
    }
  });
  Object.defineProperty(IntegerPath.prototype, 'startPoint', {
    get: function () {
      var tmp$;
      return (tmp$ = firstOrNull(this.segments)) != null ? tmp$.start : null;
    }
  });
  Object.defineProperty(IntegerPath.prototype, 'endPoint', {
    get: function () {
      var tmp$;
      return (tmp$ = lastOrNull(this.segments)) != null ? tmp$.end : null;
    }
  });
  function IntegerPath$findIsClosed$lambda(f) {
    var previous = f.component1()
    , current = f.component2();
    return !equals(previous.end, current.start);
  }
  IntegerPath.prototype.findIsClosed = function () {
    var $receiver = this.segments;
    var firstOrNullComparingPairs$result;
    firstOrNullComparingPairs$break: do {
      var iterator = $receiver.iterator();
      if (!iterator.hasNext()) {
        firstOrNullComparingPairs$result = null;
        break firstOrNullComparingPairs$break;
      }
      var previousRight = iterator.next();
      while (iterator.hasNext()) {
        var left = previousRight;
        var right = iterator.next();
        var pair = new Pair(left, right);
        if (IntegerPath$findIsClosed$lambda(pair)) {
          firstOrNullComparingPairs$result = pair;
          break firstOrNullComparingPairs$break;
        }
         else {
          previousRight = right;
        }
      }
      firstOrNullComparingPairs$result = null;
    }
     while (false);
    return firstOrNullComparingPairs$result != null;
  };
  Object.defineProperty(IntegerPath.prototype, 'isClosed', {
    get: function () {
      return this.isClosed_em0dav$_0.value;
    }
  });
  Object.defineProperty(IntegerPath.prototype, 'intersectsSelf', {
    get: function () {
      return this.intersectsSelf_jfvdhv$_0.value;
    }
  });
  IntegerPath.prototype.plus_2aye5d$ = function (rhs) {
    return new IntegerPath(plus(this.segments, new IntegerLineSegment(last(this.segments).end, rhs)));
  };
  function IntegerPath$points$lambda(this$IntegerPath) {
    return function () {
      return this$IntegerPath.getAllPoints();
    };
  }
  function IntegerPath$isClosed$lambda(this$IntegerPath) {
    return function () {
      return this$IntegerPath.findIsClosed();
    };
  }
  function IntegerPath$intersectsSelf$lambda$lambda(currentSegment, otherSegment, relationship) {
    var tmp$;
    switch (relationship.name) {
      case 'otherIsCurrent':
        return false;
      case 'otherIsLeftNeighborOfCurrent':
      case 'otherIsRightNeighborOfCurrent':
        var intersection = currentSegment.describeIntersection_ukksij$(otherSegment);
        if (Kotlin.isType(intersection, IntersectionDescription$none))
          return false;
        else if (Kotlin.isType(intersection, IntersectionDescription$leftVertexTouchesRightVertex))
          tmp$ = intersection.isLeftStartVertex === intersection.isRightStartVertex;
        else if (Kotlin.isType(intersection, IntersectionDescription$leftVertexTouchesRightEdge) || Kotlin.isType(intersection, IntersectionDescription$rightVertexTouchesLeftEdge) || Kotlin.isType(intersection, IntersectionDescription$edgesCross) || Kotlin.isType(intersection, IntersectionDescription$completeOverlap))
          tmp$ = true;
        else
          tmp$ = Kotlin.noWhenBranchMatched();
        break;
      case 'otherDoesNotTouchCurrent':
        var intersection_0 = currentSegment.describeIntersection_ukksij$(otherSegment);
        if (Kotlin.isType(intersection_0, IntersectionDescription$none))
          tmp$ = false;
        else if (Kotlin.isType(intersection_0, IntersectionDescription$leftVertexTouchesRightVertex) || Kotlin.isType(intersection_0, IntersectionDescription$leftVertexTouchesRightEdge) || Kotlin.isType(intersection_0, IntersectionDescription$rightVertexTouchesLeftEdge) || Kotlin.isType(intersection_0, IntersectionDescription$edgesCross) || Kotlin.isType(intersection_0, IntersectionDescription$completeOverlap))
          tmp$ = true;
        else
          tmp$ = Kotlin.noWhenBranchMatched();
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$;
  }
  function IntegerPath$intersectsSelf$lambda(this$IntegerPath) {
    return function () {
      return this$IntegerPath.anyTwoSegments_wfe1ij$(IntegerPath$intersectsSelf$lambda$lambda);
    };
  }
  IntegerPath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntegerPath',
    interfaces: [ComputablePath]
  };
  function IntegerPath_init(points, isClosed, $this) {
    $this = $this || Object.create(IntegerPath.prototype);
    IntegerPath.call($this, IntegerPath$Companion_getInstance().segmentsFromGenericPoints_58xfhi$(points, isClosed));
    return $this;
  }
  function IntegerPath_init_0(points, isClosed, $this) {
    $this = $this || Object.create(IntegerPath.prototype);
    IntegerPath_init(asList(points), isClosed, $this);
    return $this;
  }
  function get_integerValue_6($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, IntegerPath) ? tmp$ : null) != null ? tmp$_0 : IntegerPath$Companion_getInstance().pathFromGenericSegments_ojuucy$($receiver.segments);
  }
  function FractionPath(segments) {
    FractionPath$Companion_getInstance();
    if (segments === void 0) {
      segments = emptyList();
    }
    this.segments_bxrh9x$_0 = segments;
    this.points_acaec2$_0 = lazy(FractionPath$points$lambda(this));
    this.isClosed_rfguxt$_0 = lazy(FractionPath$isClosed$lambda(this));
  }
  Object.defineProperty(FractionPath.prototype, 'segments', {
    get: function () {
      return this.segments_bxrh9x$_0;
    }
  });
  function FractionPath$Companion() {
    FractionPath$Companion_instance = this;
  }
  function FractionPath$Companion$segmentsFromPoints$lambda(previousSegments, currentPoint) {
    previousSegments.add_11rb$(new FractionLineSegment(last(previousSegments).end, currentPoint));
    return previousSegments;
  }
  FractionPath$Companion.prototype.segmentsFromPoints_wa4q3i$ = function (points, isClosed) {
    if (points.size < 2) {
      return emptyList();
    }
    var allButFirstPoint = points.subList_vux9f0$(1, points.size);
    var runningValue = {v: mutableListOf([new FractionLineSegment(points.get_za3lpa$(0), points.get_za3lpa$(1))])};
    var tmp$;
    tmp$ = allButFirstPoint.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      runningValue.v = FractionPath$Companion$segmentsFromPoints$lambda(runningValue.v, element);
    }
    var segments = runningValue.v;
    if (isClosed) {
      var element_0 = new FractionLineSegment(last(points), first(points));
      segments.add_11rb$(element_0);
    }
    return segments;
  };
  FractionPath$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FractionPath$Companion_instance = null;
  function FractionPath$Companion_getInstance() {
    if (FractionPath$Companion_instance === null) {
      new FractionPath$Companion();
    }
    return FractionPath$Companion_instance;
  }
  function FractionPath$getAllPoints$lambda(previousPoints, currentSegment) {
    previousPoints.add_11rb$(currentSegment.end);
    return previousPoints;
  }
  FractionPath.prototype.getAllPoints = function () {
    var tmp$ = this.segments;
    var runningValue = {v: mutableListOf([first(this.segments).start])};
    var tmp$_0;
    tmp$_0 = tmp$.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      runningValue.v = FractionPath$getAllPoints$lambda(runningValue.v, element);
    }
    return runningValue.v;
  };
  Object.defineProperty(FractionPath.prototype, 'points', {
    get: function () {
      return this.points_acaec2$_0.value;
    }
  });
  Object.defineProperty(FractionPath.prototype, 'startPoint', {
    get: function () {
      var tmp$;
      return (tmp$ = firstOrNull(this.segments)) != null ? tmp$.start : null;
    }
  });
  Object.defineProperty(FractionPath.prototype, 'endPoint', {
    get: function () {
      var tmp$;
      return (tmp$ = lastOrNull(this.segments)) != null ? tmp$.end : null;
    }
  });
  function FractionPath$findIsClosed$lambda(f) {
    var previous = f.component1()
    , current = f.component2();
    return !equals(previous.end, current.start);
  }
  FractionPath.prototype.findIsClosed = function () {
    var $receiver = this.segments;
    var firstOrNullComparingPairs$result;
    firstOrNullComparingPairs$break: do {
      var iterator = $receiver.iterator();
      if (!iterator.hasNext()) {
        firstOrNullComparingPairs$result = null;
        break firstOrNullComparingPairs$break;
      }
      var previousRight = iterator.next();
      while (iterator.hasNext()) {
        var left = previousRight;
        var right = iterator.next();
        var pair = new Pair(left, right);
        if (FractionPath$findIsClosed$lambda(pair)) {
          firstOrNullComparingPairs$result = pair;
          break firstOrNullComparingPairs$break;
        }
         else {
          previousRight = right;
        }
      }
      firstOrNullComparingPairs$result = null;
    }
     while (false);
    return firstOrNullComparingPairs$result != null;
  };
  Object.defineProperty(FractionPath.prototype, 'isClosed', {
    get: function () {
      return this.isClosed_rfguxt$_0.value;
    }
  });
  function FractionPath$get_FractionPath$intersectsSelf$lambda(f) {
    var left = f.component1()
    , current = f.component2()
    , right = f.component3();
    var tmp$;
    if (Kotlin.isType((new FractionLineSegment(left, current)).describeIntersection_ukksij$(new FractionLineSegment(current, right)), IntersectionDescription$none))
      tmp$ = false;
    else
      tmp$ = true;
    return tmp$;
  }
  Object.defineProperty(FractionPath.prototype, 'intersectsSelf', {
    get: function () {
      var $receiver = this.points;
      var firstOrNullComparingTriads$result;
      firstOrNullComparingTriads$break: do {
        var iterator = $receiver.iterator();
        if (!iterator.hasNext()) {
          firstOrNullComparingTriads$result = null;
          break firstOrNullComparingTriads$break;
        }
        var previousCenter = iterator.next();
        if (!iterator.hasNext()) {
          firstOrNullComparingTriads$result = null;
          break firstOrNullComparingTriads$break;
        }
        var previousRight = iterator.next();
        while (iterator.hasNext()) {
          var left = previousCenter;
          var center = previousRight;
          var right = iterator.next();
          var triad = new Triad(left, center, right);
          if (FractionPath$get_FractionPath$intersectsSelf$lambda(triad)) {
            firstOrNullComparingTriads$result = triad;
            break firstOrNullComparingTriads$break;
          }
           else {
            previousCenter = center;
            previousRight = right;
          }
        }
        firstOrNullComparingTriads$result = null;
      }
       while (false);
      return firstOrNullComparingTriads$result != null;
    }
  });
  FractionPath.prototype.plus_2aye5d$ = function (rhs) {
    return new FractionPath(plus(this.segments, new FractionLineSegment(last(this.segments).end, rhs)));
  };
  function FractionPath$points$lambda(this$FractionPath) {
    return function () {
      return this$FractionPath.getAllPoints();
    };
  }
  function FractionPath$isClosed$lambda(this$FractionPath) {
    return function () {
      return this$FractionPath.findIsClosed();
    };
  }
  FractionPath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FractionPath',
    interfaces: [ComputablePath]
  };
  function FractionPath_init(points, isClosed, $this) {
    $this = $this || Object.create(FractionPath.prototype);
    FractionPath.call($this, FractionPath$Companion_getInstance().segmentsFromPoints_wa4q3i$(points, isClosed));
    return $this;
  }
  function Point(x, y) {
    Point$Companion_getInstance();
    this.x = x;
    this.y = y;
    this.tupleValue_g5iq8f$_0 = lazy(Point$tupleValue$lambda(this));
  }
  function Point$Companion() {
    Point$Companion_instance = this;
    this.zero = new Point(0, 0);
  }
  Point$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Point$Companion_instance = null;
  function Point$Companion_getInstance() {
    if (Point$Companion_instance === null) {
      new Point$Companion();
    }
    return Point$Companion_instance;
  }
  Object.defineProperty(Point.prototype, 'stringValue', {
    get: function () {
      return this.toString();
    }
  });
  Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
  };
  Point.prototype.clone = function () {
    return new Point(this.x, this.y);
  };
  Point.prototype.equals = function (other) {
    return Kotlin.isType(other, Point) && equals(this.x, other.x) && equals(this.y, other.y);
  };
  Point.prototype.hashCode = function () {
    return hashCode(this) ^ hashCode(this.x) ^ hashCode(this.y);
  };
  Point.prototype.toTuple = function () {
    return this.tupleValue;
  };
  Object.defineProperty(Point.prototype, 'tupleValue', {
    get: function () {
      return this.tupleValue_g5iq8f$_0.value;
    }
  });
  Point.prototype.component1 = function () {
    return this.x;
  };
  Point.prototype.component2 = function () {
    return this.y;
  };
  function Point$tupleValue$lambda(this$Point) {
    return function () {
      return tuple_0(this$Point.x, this$Point.y);
    };
  }
  Point.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Point',
    interfaces: [Cloneable]
  };
  function Point_init(from, $this) {
    $this = $this || Object.create(Point.prototype);
    Point.call($this, from.x, from.y);
    return $this;
  }
  var get_row = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.geometry.get_row_sy81v1$', function ($receiver) {
    return $receiver.y;
  });
  var get_column = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.geometry.get_column_sy81v1$', function ($receiver) {
    return $receiver.x;
  });
  function get_pairValue($receiver) {
    return new Pair($receiver.x, $receiver.y);
  }
  function get_integerValue_7($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, IntegerPoint) ? tmp$ : null) != null ? tmp$_0 : new IntegerPoint(toInt64Checked($receiver.x), toInt64Checked($receiver.y));
  }
  function integerValue_5($receiver, rounding) {
    if (rounding === void 0)
      rounding = RoundingDirection$Companion_getInstance().default;
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, IntegerPoint) ? tmp$ : null) != null ? tmp$_0 : new IntegerPoint(integerValue($receiver.x, rounding), integerValue($receiver.y, rounding));
  }
  function get_fractionValue_4($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, FractionPoint) ? tmp$ : null) != null ? tmp$_0 : new FractionPoint(numberToDouble($receiver.x), numberToDouble($receiver.y));
  }
  function ComputablePoint(x, y) {
    Point.call(this, x, y);
  }
  ComputablePoint.prototype.copy_foso30$ = function (x, y, callback$default) {
    if (x === void 0)
      x = this.x;
    if (y === void 0)
      y = this.y;
    return callback$default ? callback$default(x, y) : this.copy_foso30$$default(x, y);
  };
  ComputablePoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ComputablePoint',
    interfaces: [TolerableEquality, Point]
  };
  function PointOperatorUnavailableApology(operator, widthType, heightType, otherMainType, otherTypeA, otherTypeAType, otherTypeB, otherTypeBType) {
    if (otherMainType === void 0)
      otherMainType = getKClass(Point);
    if (otherTypeA === void 0)
      otherTypeA = widthType;
    if (otherTypeAType === void 0)
      otherTypeAType = 'x';
    if (otherTypeB === void 0)
      otherTypeB = heightType;
    if (otherTypeBType === void 0)
      otherTypeBType = 'y';
    UnsupportedOperationException_init('Sorry, but because of JVM signature nonsense, ' + operator + ' extensions ' + ("operators have to be done very explicitly, and I didn't think of points with " + toString(widthType.simpleName) + ' x ') + ('and ' + toString(heightType.simpleName) + ' y combined with ' + toString(otherMainType.simpleName) + ' having ') + (toString(otherTypeA.simpleName) + ' ' + otherTypeAType + ' and ' + toString(otherTypeB.simpleName) + ' ' + otherTypeBType + ' when I wrote it.'), this);
    this.name = 'PointOperatorUnavailableApology';
  }
  PointOperatorUnavailableApology.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PointOperatorUnavailableApology',
    interfaces: [UnsupportedOperationException]
  };
  function apology($receiver, type, otherMainType, otherTypeA, otherTypeAType, otherTypeB, otherTypeBType) {
    if (otherMainType === void 0)
      otherMainType = getKClass(Point);
    if (otherTypeA === void 0)
      otherTypeA = Kotlin.getKClassFromExpression($receiver.x);
    if (otherTypeAType === void 0)
      otherTypeAType = 'x';
    if (otherTypeB === void 0)
      otherTypeB = Kotlin.getKClassFromExpression($receiver.y);
    if (otherTypeBType === void 0)
      otherTypeBType = 'y';
    return new PointOperatorUnavailableApology(type, Kotlin.getKClassFromExpression($receiver.x), Kotlin.getKClassFromExpression($receiver.y), otherMainType, otherTypeA, otherTypeAType, otherTypeB, otherTypeBType);
  }
  function IntegerPoint(x, y) {
    IntegerPoint$Companion_getInstance();
    ComputablePoint.call(this, x, y);
  }
  IntegerPoint.prototype.plus_tnufs7$ = function (rhs) {
    return this.plus_3tdsbd$(new Pair(rhs.x, rhs.y));
  };
  IntegerPoint.prototype.minus_tnufs7$ = function (rhs) {
    return this.minus_3tdsbd$(new Pair(rhs.x, rhs.y));
  };
  IntegerPoint.prototype.times_tnufs7$ = function (rhs) {
    return this.times_3tdsbd$(new Pair(rhs.x, rhs.y));
  };
  IntegerPoint.prototype.div_tnufs7$ = function (rhs) {
    return this.div_3tdsbd$(new Pair(rhs.x, rhs.y));
  };
  IntegerPoint.prototype.plus_bfiemw$ = function (rhs) {
    return this.plus_3tdsbd$(new Pair(rhs, rhs));
  };
  IntegerPoint.prototype.minus_bfiemw$ = function (rhs) {
    return this.minus_3tdsbd$(new Pair(rhs, rhs));
  };
  IntegerPoint.prototype.times_bfiemw$ = function (rhs) {
    return this.times_3tdsbd$(new Pair(rhs, rhs));
  };
  IntegerPoint.prototype.div_bfiemw$ = function (rhs) {
    return this.div_3tdsbd$(new Pair(rhs, rhs));
  };
  IntegerPoint.prototype.plus_3tdsbd$ = function (rhs) {
    var $receiver = rhs.first;
    var get_isNativeInteger$result;
    if (typeof $receiver === 'number' || typeof $receiver === 'number' || typeof $receiver === 'number' || Kotlin.isType($receiver, Kotlin.Long)) {
      get_isNativeInteger$result = true;
    }
     else {
      get_isNativeInteger$result = false;
    }
    if (get_isNativeInteger$result) {
      return new IntegerPoint(this.x.add(toInt64Checked(rhs.first)), this.y.add(toInt64Checked(rhs.second)));
    }
     else {
      var $receiver_0 = rhs.first;
      var get_isNativeFraction$result;
      if (typeof $receiver_0 === 'number' || typeof $receiver_0 === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      if (get_isNativeFraction$result) {
        return new IntegerPoint(get_clampedIntegerValue(this.x.toNumber() + numberToDouble(rhs.first)), get_clampedIntegerValue(this.y.toNumber() + numberToDouble(rhs.second)));
      }
       else
        throw apology(this, 'addition', getKClass(Pair), Kotlin.getKClassFromExpression(rhs.first), void 0, Kotlin.getKClassFromExpression(rhs.second));
    }
  };
  IntegerPoint.prototype.minus_3tdsbd$ = function (rhs) {
    var $receiver = rhs.first;
    var get_isNativeInteger$result;
    if (typeof $receiver === 'number' || typeof $receiver === 'number' || typeof $receiver === 'number' || Kotlin.isType($receiver, Kotlin.Long)) {
      get_isNativeInteger$result = true;
    }
     else {
      get_isNativeInteger$result = false;
    }
    if (get_isNativeInteger$result) {
      return new IntegerPoint(this.x.subtract(toInt64Checked(rhs.first)), this.y.subtract(toInt64Checked(rhs.second)));
    }
     else {
      var $receiver_0 = rhs.first;
      var get_isNativeFraction$result;
      if (typeof $receiver_0 === 'number' || typeof $receiver_0 === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      if (get_isNativeFraction$result) {
        return new IntegerPoint(get_clampedIntegerValue(this.x.toNumber() - numberToDouble(rhs.first)), get_clampedIntegerValue(this.y.toNumber() - numberToDouble(rhs.second)));
      }
       else
        throw apology(this, 'subtraction', getKClass(Pair), Kotlin.getKClassFromExpression(rhs.first), void 0, Kotlin.getKClassFromExpression(rhs.second));
    }
  };
  IntegerPoint.prototype.times_3tdsbd$ = function (rhs) {
    var $receiver = rhs.first;
    var get_isNativeInteger$result;
    if (typeof $receiver === 'number' || typeof $receiver === 'number' || typeof $receiver === 'number' || Kotlin.isType($receiver, Kotlin.Long)) {
      get_isNativeInteger$result = true;
    }
     else {
      get_isNativeInteger$result = false;
    }
    if (get_isNativeInteger$result) {
      return new IntegerPoint(this.x.multiply(toInt64Checked(rhs.first)), this.y.multiply(toInt64Checked(rhs.second)));
    }
     else {
      var $receiver_0 = rhs.first;
      var get_isNativeFraction$result;
      if (typeof $receiver_0 === 'number' || typeof $receiver_0 === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      if (get_isNativeFraction$result) {
        return new IntegerPoint(get_clampedIntegerValue(this.x.toNumber() * numberToDouble(rhs.first)), get_clampedIntegerValue(this.y.toNumber() * numberToDouble(rhs.second)));
      }
       else
        throw apology(this, 'multiplication', getKClass(Pair), Kotlin.getKClassFromExpression(rhs.first), void 0, Kotlin.getKClassFromExpression(rhs.second));
    }
  };
  IntegerPoint.prototype.div_3tdsbd$ = function (rhs) {
    var $receiver = rhs.first;
    var get_isNativeInteger$result;
    if (typeof $receiver === 'number' || typeof $receiver === 'number' || typeof $receiver === 'number' || Kotlin.isType($receiver, Kotlin.Long)) {
      get_isNativeInteger$result = true;
    }
     else {
      get_isNativeInteger$result = false;
    }
    if (get_isNativeInteger$result) {
      return new IntegerPoint(this.x.div(toInt64Checked(rhs.first)), this.y.div(toInt64Checked(rhs.second)));
    }
     else {
      var $receiver_0 = rhs.first;
      var get_isNativeFraction$result;
      if (typeof $receiver_0 === 'number' || typeof $receiver_0 === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      if (get_isNativeFraction$result) {
        return new IntegerPoint(get_clampedIntegerValue(this.x.toNumber() / numberToDouble(rhs.first)), get_clampedIntegerValue(this.y.toNumber() / numberToDouble(rhs.second)));
      }
       else
        throw apology(this, 'division', getKClass(Pair), Kotlin.getKClassFromExpression(rhs.first), void 0, Kotlin.getKClassFromExpression(rhs.second));
    }
  };
  IntegerPoint.prototype.equals_i11du1$ = function (rhs) {
    return this.equals_ri9j6v$(rhs, package$math.defaultFractionCalculationTolerance);
  };
  IntegerPoint.prototype.equals_ri9j6v$$default = function (other, tolerance) {
    return equals_7(this.x, other.x, tolerance) && equals_7(this.y, other.y, tolerance);
  };
  IntegerPoint.prototype.copy_foso30$$default = function (x, y) {
    return new IntegerPoint(x, y);
  };
  function IntegerPoint$Companion() {
    IntegerPoint$Companion_instance = this;
    this.zero = new IntegerPoint(L0, L0);
  }
  IntegerPoint$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var IntegerPoint$Companion_instance = null;
  function IntegerPoint$Companion_getInstance() {
    if (IntegerPoint$Companion_instance === null) {
      new IntegerPoint$Companion();
    }
    return IntegerPoint$Companion_instance;
  }
  IntegerPoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntegerPoint',
    interfaces: [ComputablePoint]
  };
  function FractionPoint(x, y) {
    FractionPoint$Companion_getInstance();
    ComputablePoint.call(this, x, y);
  }
  FractionPoint.prototype.plus_tnufs7$ = function (rhs) {
    return this.plus_3tdsbd$(new Pair(rhs.x, rhs.y));
  };
  FractionPoint.prototype.minus_tnufs7$ = function (rhs) {
    return this.minus_3tdsbd$(new Pair(rhs.x, rhs.y));
  };
  FractionPoint.prototype.times_tnufs7$ = function (rhs) {
    return this.times_3tdsbd$(new Pair(rhs.x, rhs.y));
  };
  FractionPoint.prototype.div_tnufs7$ = function (rhs) {
    return this.div_3tdsbd$(new Pair(rhs.x, rhs.y));
  };
  FractionPoint.prototype.plus_bfiemw$ = function (rhs) {
    return this.plus_3tdsbd$(new Pair(rhs, rhs));
  };
  FractionPoint.prototype.minus_bfiemw$ = function (rhs) {
    return this.minus_3tdsbd$(new Pair(rhs, rhs));
  };
  FractionPoint.prototype.times_bfiemw$ = function (rhs) {
    return this.times_3tdsbd$(new Pair(rhs, rhs));
  };
  FractionPoint.prototype.div_bfiemw$ = function (rhs) {
    return this.div_3tdsbd$(new Pair(rhs, rhs));
  };
  FractionPoint.prototype.plus_3tdsbd$ = function (rhs) {
    var $receiver = rhs.first;
    var get_isNativeInteger$result;
    if (typeof $receiver === 'number' || typeof $receiver === 'number' || typeof $receiver === 'number' || Kotlin.isType($receiver, Kotlin.Long)) {
      get_isNativeInteger$result = true;
    }
     else {
      get_isNativeInteger$result = false;
    }
    if (get_isNativeInteger$result) {
      return new FractionPoint(this.x + toInt64Checked(rhs.first).toNumber(), this.y + toInt64Checked(rhs.second).toNumber());
    }
     else {
      var $receiver_0 = rhs.first;
      var get_isNativeFraction$result;
      if (typeof $receiver_0 === 'number' || typeof $receiver_0 === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      if (get_isNativeFraction$result) {
        return new FractionPoint(this.x + numberToDouble(rhs.first), this.y + numberToDouble(rhs.second));
      }
       else {
        throw apology(this, 'addition', getKClass(Pair), Kotlin.getKClassFromExpression(rhs.first), void 0, Kotlin.getKClassFromExpression(rhs.second));
      }
    }
  };
  FractionPoint.prototype.minus_3tdsbd$ = function (rhs) {
    var $receiver = rhs.first;
    var get_isNativeInteger$result;
    if (typeof $receiver === 'number' || typeof $receiver === 'number' || typeof $receiver === 'number' || Kotlin.isType($receiver, Kotlin.Long)) {
      get_isNativeInteger$result = true;
    }
     else {
      get_isNativeInteger$result = false;
    }
    if (get_isNativeInteger$result) {
      return new FractionPoint(this.x - toInt64Checked(rhs.first).toNumber(), this.y - toInt64Checked(rhs.second).toNumber());
    }
     else {
      var $receiver_0 = rhs.first;
      var get_isNativeFraction$result;
      if (typeof $receiver_0 === 'number' || typeof $receiver_0 === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      if (get_isNativeFraction$result) {
        return new FractionPoint(this.x - numberToDouble(rhs.first), this.y - numberToDouble(rhs.second));
      }
       else {
        throw apology(this, 'subtraction', getKClass(Pair), Kotlin.getKClassFromExpression(rhs.first), void 0, Kotlin.getKClassFromExpression(rhs.second));
      }
    }
  };
  FractionPoint.prototype.times_3tdsbd$ = function (rhs) {
    var $receiver = rhs.first;
    var get_isNativeInteger$result;
    if (typeof $receiver === 'number' || typeof $receiver === 'number' || typeof $receiver === 'number' || Kotlin.isType($receiver, Kotlin.Long)) {
      get_isNativeInteger$result = true;
    }
     else {
      get_isNativeInteger$result = false;
    }
    if (get_isNativeInteger$result) {
      return new FractionPoint(this.x * toInt64Checked(rhs.first).toNumber(), this.y * toInt64Checked(rhs.second).toNumber());
    }
     else {
      var $receiver_0 = rhs.first;
      var get_isNativeFraction$result;
      if (typeof $receiver_0 === 'number' || typeof $receiver_0 === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      if (get_isNativeFraction$result) {
        return new FractionPoint(this.x * numberToDouble(rhs.first), this.y * numberToDouble(rhs.second));
      }
       else {
        throw apology(this, 'multiplication', getKClass(Pair), Kotlin.getKClassFromExpression(rhs.first), void 0, Kotlin.getKClassFromExpression(rhs.second));
      }
    }
  };
  FractionPoint.prototype.div_3tdsbd$ = function (rhs) {
    var $receiver = rhs.first;
    var get_isNativeInteger$result;
    if (typeof $receiver === 'number' || typeof $receiver === 'number' || typeof $receiver === 'number' || Kotlin.isType($receiver, Kotlin.Long)) {
      get_isNativeInteger$result = true;
    }
     else {
      get_isNativeInteger$result = false;
    }
    if (get_isNativeInteger$result) {
      return new FractionPoint(this.x / toInt64Checked(rhs.first).toNumber(), this.y / toInt64Checked(rhs.second).toNumber());
    }
     else {
      var $receiver_0 = rhs.first;
      var get_isNativeFraction$result;
      if (typeof $receiver_0 === 'number' || typeof $receiver_0 === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      if (get_isNativeFraction$result) {
        return new FractionPoint(this.x / numberToDouble(rhs.first), this.y / numberToDouble(rhs.second));
      }
       else {
        throw apology(this, 'division', getKClass(Pair), Kotlin.getKClassFromExpression(rhs.first), void 0, Kotlin.getKClassFromExpression(rhs.second));
      }
    }
  };
  FractionPoint.prototype.equals_i11du1$ = function (rhs) {
    return this.equals_ri9j6v$(rhs, defaultFractionCalculationTolerance);
  };
  FractionPoint.prototype.equals_ri9j6v$$default = function (other, tolerance) {
    return equals_0(this.x, other.x, tolerance) && equals_0(this.y, other.y, tolerance);
  };
  FractionPoint.prototype.copy_foso30$$default = function (x, y) {
    return new FractionPoint(x, y);
  };
  function FractionPoint$Companion() {
    FractionPoint$Companion_instance = this;
    this.zero = FractionPoint_init_0(0, 0);
  }
  FractionPoint$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FractionPoint$Companion_instance = null;
  function FractionPoint$Companion_getInstance() {
    if (FractionPoint$Companion_instance === null) {
      new FractionPoint$Companion();
    }
    return FractionPoint$Companion_instance;
  }
  FractionPoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FractionPoint',
    interfaces: [ComputablePoint]
  };
  function FractionPoint_init(x, y, $this) {
    $this = $this || Object.create(FractionPoint.prototype);
    FractionPoint.call($this, numberToDouble(x), numberToDouble(y));
    return $this;
  }
  function FractionPoint_init_0(x, y, $this) {
    $this = $this || Object.create(FractionPoint.prototype);
    FractionPoint.call($this, numberToDouble(x), numberToDouble(y));
    return $this;
  }
  function Int8Point(x, y) {
    Int8Point$Companion_getInstance();
    ComputablePoint.call(this, x, y);
  }
  Int8Point.prototype.plus_tnufs7$ = function (rhs) {
    return this.plus_3tdsbd$(new Pair(rhs.x, rhs.y));
  };
  Int8Point.prototype.minus_tnufs7$ = function (rhs) {
    return this.minus_3tdsbd$(new Pair(rhs.x, rhs.y));
  };
  Int8Point.prototype.times_tnufs7$ = function (rhs) {
    return this.times_3tdsbd$(new Pair(rhs.x, rhs.y));
  };
  Int8Point.prototype.div_tnufs7$ = function (rhs) {
    return this.div_3tdsbd$(new Pair(rhs.x, rhs.y));
  };
  Int8Point.prototype.plus_bfiemw$ = function (rhs) {
    return this.plus_3tdsbd$(new Pair(rhs, rhs));
  };
  Int8Point.prototype.minus_bfiemw$ = function (rhs) {
    return this.minus_3tdsbd$(new Pair(rhs, rhs));
  };
  Int8Point.prototype.times_bfiemw$ = function (rhs) {
    return this.times_3tdsbd$(new Pair(rhs, rhs));
  };
  Int8Point.prototype.div_bfiemw$ = function (rhs) {
    return this.div_3tdsbd$(new Pair(rhs, rhs));
  };
  Int8Point.prototype.plus_3tdsbd$ = function (rhs) {
    var $receiver = rhs.first;
    var get_isNativeInteger$result;
    if (typeof $receiver === 'number' || typeof $receiver === 'number' || typeof $receiver === 'number' || Kotlin.isType($receiver, Kotlin.Long)) {
      get_isNativeInteger$result = true;
    }
     else {
      get_isNativeInteger$result = false;
    }
    if (get_isNativeInteger$result) {
      return new Int8Point(toByte(this.x + toInt8Checked(rhs.first)), toByte(this.y + toInt8Checked(rhs.second)));
    }
     else {
      var $receiver_0 = rhs.first;
      var get_isNativeFraction$result;
      if (typeof $receiver_0 === 'number' || typeof $receiver_0 === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      if (get_isNativeFraction$result) {
        return new Int8Point(get_clampedInt8Value(this.x + numberToDouble(rhs.first)), get_clampedInt8Value(this.y + numberToDouble(rhs.second)));
      }
       else
        throw apology(this, 'addition', getKClass(Pair), Kotlin.getKClassFromExpression(rhs.first), void 0, Kotlin.getKClassFromExpression(rhs.second));
    }
  };
  Int8Point.prototype.minus_3tdsbd$ = function (rhs) {
    var $receiver = rhs.first;
    var get_isNativeInteger$result;
    if (typeof $receiver === 'number' || typeof $receiver === 'number' || typeof $receiver === 'number' || Kotlin.isType($receiver, Kotlin.Long)) {
      get_isNativeInteger$result = true;
    }
     else {
      get_isNativeInteger$result = false;
    }
    if (get_isNativeInteger$result) {
      return new Int8Point(toByte(this.x - toInt8Checked(rhs.first)), toByte(this.y - toInt8Checked(rhs.second)));
    }
     else {
      var $receiver_0 = rhs.first;
      var get_isNativeFraction$result;
      if (typeof $receiver_0 === 'number' || typeof $receiver_0 === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      if (get_isNativeFraction$result) {
        return new Int8Point(get_clampedInt8Value(this.x - numberToDouble(rhs.first)), get_clampedInt8Value(this.y - numberToDouble(rhs.second)));
      }
       else
        throw apology(this, 'subtraction', getKClass(Pair), Kotlin.getKClassFromExpression(rhs.first), void 0, Kotlin.getKClassFromExpression(rhs.second));
    }
  };
  Int8Point.prototype.times_3tdsbd$ = function (rhs) {
    var $receiver = rhs.first;
    var get_isNativeInteger$result;
    if (typeof $receiver === 'number' || typeof $receiver === 'number' || typeof $receiver === 'number' || Kotlin.isType($receiver, Kotlin.Long)) {
      get_isNativeInteger$result = true;
    }
     else {
      get_isNativeInteger$result = false;
    }
    if (get_isNativeInteger$result) {
      return new Int8Point(toByte(this.x * toInt8Checked(rhs.first) | 0), toByte(this.y * toInt8Checked(rhs.second) | 0));
    }
     else {
      var $receiver_0 = rhs.first;
      var get_isNativeFraction$result;
      if (typeof $receiver_0 === 'number' || typeof $receiver_0 === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      if (get_isNativeFraction$result) {
        return new Int8Point(get_clampedInt8Value(this.x * numberToDouble(rhs.first)), get_clampedInt8Value(this.y * numberToDouble(rhs.second)));
      }
       else
        throw apology(this, 'multiplication', getKClass(Pair), Kotlin.getKClassFromExpression(rhs.first), void 0, Kotlin.getKClassFromExpression(rhs.second));
    }
  };
  Int8Point.prototype.div_3tdsbd$ = function (rhs) {
    var $receiver = rhs.first;
    var get_isNativeInteger$result;
    if (typeof $receiver === 'number' || typeof $receiver === 'number' || typeof $receiver === 'number' || Kotlin.isType($receiver, Kotlin.Long)) {
      get_isNativeInteger$result = true;
    }
     else {
      get_isNativeInteger$result = false;
    }
    if (get_isNativeInteger$result) {
      return new Int8Point(toByte(this.x / toInt8Checked(rhs.first) | 0), toByte(this.y / toInt8Checked(rhs.second) | 0));
    }
     else {
      var $receiver_0 = rhs.first;
      var get_isNativeFraction$result;
      if (typeof $receiver_0 === 'number' || typeof $receiver_0 === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      if (get_isNativeFraction$result) {
        return new Int8Point(get_clampedInt8Value(this.x / numberToDouble(rhs.first)), get_clampedInt8Value(this.y / numberToDouble(rhs.second)));
      }
       else
        throw apology(this, 'division', getKClass(Pair), Kotlin.getKClassFromExpression(rhs.first), void 0, Kotlin.getKClassFromExpression(rhs.second));
    }
  };
  Int8Point.prototype.equals_i11du1$ = function (rhs) {
    return this.equals_ri9j6v$(rhs, package$math.defaultFractionCalculationTolerance);
  };
  Int8Point.prototype.equals_ri9j6v$$default = function (other, tolerance) {
    return equals_4(this.x, other.x, tolerance) && equals_4(this.y, other.y, tolerance);
  };
  Int8Point.prototype.copy_foso30$$default = function (x, y) {
    return new Int8Point(x, y);
  };
  function Int8Point$Companion() {
    Int8Point$Companion_instance = this;
    this.zero = Int8Point_init(0, 0);
  }
  Int8Point$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Int8Point$Companion_instance = null;
  function Int8Point$Companion_getInstance() {
    if (Int8Point$Companion_instance === null) {
      new Int8Point$Companion();
    }
    return Int8Point$Companion_instance;
  }
  Int8Point.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Int8Point',
    interfaces: [ComputablePoint]
  };
  function Int8Point_init(x, y, $this) {
    $this = $this || Object.create(Int8Point.prototype);
    Int8Point.call($this, toByte(x), toByte(y));
    return $this;
  }
  function Rect(origin, size) {
    this.origin = origin;
    this.size = size;
  }
  Object.defineProperty(Rect.prototype, 'x', {
    get: function () {
      return this.origin.x;
    }
  });
  Object.defineProperty(Rect.prototype, 'y', {
    get: function () {
      return this.origin.y;
    }
  });
  Object.defineProperty(Rect.prototype, 'width', {
    get: function () {
      return this.size.width;
    }
  });
  Object.defineProperty(Rect.prototype, 'height', {
    get: function () {
      return this.size.height;
    }
  });
  Rect.prototype.toString = function () {
    return '{origin: ' + this.origin + ', size: ' + this.size + '}';
  };
  Object.defineProperty(Rect.prototype, 'stringValue', {
    get: function () {
      return this.toString();
    }
  });
  Rect.prototype.copy_iy8smh$ = function (newOrigin, newSize, callback$default) {
    if (newOrigin === void 0)
      newOrigin = this.origin;
    if (newSize === void 0)
      newSize = this.size;
    return callback$default ? callback$default(newOrigin, newSize) : this.copy_iy8smh$$default(newOrigin, newSize);
  };
  Rect.prototype.copy_jan4et$ = function (newX, newY, newWidth, newHeight, callback$default) {
    if (newX === void 0)
      newX = this.x;
    if (newY === void 0)
      newY = this.y;
    if (newWidth === void 0)
      newWidth = this.width;
    if (newHeight === void 0)
      newHeight = this.height;
    return callback$default ? callback$default(newX, newY, newWidth, newHeight) : this.copy_jan4et$$default(newX, newY, newWidth, newHeight);
  };
  Rect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rect',
    interfaces: []
  };
  function ComputableRect(origin, size) {
    Rect.call(this, origin, size);
  }
  Object.defineProperty(ComputableRect.prototype, 'isEmpty', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.geometry.ComputableRect.get_isEmpty', function () {
      return this.size.isEmpty;
    })
  });
  ComputableRect.prototype.offset_2aye5d$ = function (offset) {
    return this.offset_foso30$(offset.x, offset.y);
  };
  ComputableRect.prototype.copyWithExtremes_ee08pu$ = function (newMinX, newMinY, newMaxX, newMaxY, callback$default) {
    if (newMinX === void 0)
      newMinX = this.minX;
    if (newMinY === void 0)
      newMinY = this.minY;
    if (newMaxX === void 0)
      newMaxX = this.maxX;
    if (newMaxY === void 0)
      newMaxY = this.maxY;
    return callback$default ? callback$default(newMinX, newMinY, newMaxX, newMaxY) : this.copyWithExtremes_ee08pu$$default(newMinX, newMinY, newMaxX, newMaxY);
  };
  ComputableRect.prototype.expanded_2aye5d$ = function (toInclude) {
    var includedPoint = toInclude;
    var newMinX;
    var newMinY;
    var newMaxX;
    var newMaxY;
    newMinX = Kotlin.compareTo(includedPoint.x, this.minX) < 0 ? includedPoint.x : this.minX;
    newMinY = Kotlin.compareTo(includedPoint.y, this.minY) < 0 ? includedPoint.y : this.minY;
    newMaxX = Kotlin.compareTo(includedPoint.x, this.maxX) > 0 ? includedPoint.x : this.maxX;
    newMaxY = Kotlin.compareTo(includedPoint.y, this.maxY) > 0 ? includedPoint.y : this.maxY;
    return this.copyWithExtremes_ee08pu$(newMinX, newMinY, newMaxX, newMaxY);
  };
  ComputableRect.prototype.forEach_82u1ml$ = function (scanningApproach, iterator, callback$default) {
    if (scanningApproach === void 0) {
      scanningApproach = RectangleScanningApproach.columnsAscendingThenRowsAscending;
    }
    callback$default ? callback$default(scanningApproach, iterator) : this.forEach_82u1ml$$default(scanningApproach, iterator);
  };
  ComputableRect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ComputableRect',
    interfaces: [TolerableEquality, Rect]
  };
  function IntegerRect(origin, size) {
    IntegerRect$Companion_getInstance();
    ComputableRect.call(this, origin, size);
    this.minX_s9zrd2$_0 = lazy(IntegerRect$minX$lambda(this));
    this.midX_s9zjy4$_0 = lazy(IntegerRect$midX$lambda(this));
    this.maxX_s9uuvs$_0 = lazy(IntegerRect$maxX$lambda(this));
    this.minY_s9zrdx$_0 = lazy(IntegerRect$minY$lambda(this));
    this.midY_s9zjyz$_0 = lazy(IntegerRect$midY$lambda(this));
    this.maxY_s9uuwn$_0 = lazy(IntegerRect$maxY$lambda(this));
    this.minXminY_ci0rfj$_0 = lazy(IntegerRect$minXminY$lambda(this));
    this.minXmidY_ci0k0l$_0 = lazy(IntegerRect$minXmidY$lambda(this));
    this.minXmaxY_chvuy9$_0 = lazy(IntegerRect$minXmaxY$lambda(this));
    this.midXminY_7sa15h$_0 = lazy(IntegerRect$midXminY$lambda(this));
    this.midXmidY_7s9tqj$_0 = lazy(IntegerRect$midXmidY$lambda(this));
    this.midXmaxY_7s54o7$_0 = lazy(IntegerRect$midXmaxY$lambda(this));
    this.maxXminY_9w4un$_0 = lazy(IntegerRect$maxXminY$lambda(this));
    this.maxXmidY_9wc9l$_0 = lazy(IntegerRect$maxXmidY$lambda(this));
    this.maxXmaxY_a11bx$_0 = lazy(IntegerRect$maxXmaxY$lambda(this));
  }
  function IntegerRect$Companion() {
    IntegerRect$Companion_instance = this;
    this.zero_nq3qou$_0 = lazy(IntegerRect$Companion$zero$lambda);
  }
  Object.defineProperty(IntegerRect$Companion.prototype, 'zero', {
    get: function () {
      return this.zero_nq3qou$_0.value;
    }
  });
  function IntegerRect$Companion$zero$lambda() {
    return new IntegerRect(IntegerPoint$Companion_getInstance().zero, IntegerSize$Companion_getInstance().zero);
  }
  IntegerRect$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var IntegerRect$Companion_instance = null;
  function IntegerRect$Companion_getInstance() {
    if (IntegerRect$Companion_instance === null) {
      new IntegerRect$Companion();
    }
    return IntegerRect$Companion_instance;
  }
  Object.defineProperty(IntegerRect.prototype, 'minX', {
    get: function () {
      return this.minX_s9zrd2$_0.value;
    }
  });
  Object.defineProperty(IntegerRect.prototype, 'midX', {
    get: function () {
      return this.midX_s9zjy4$_0.value;
    }
  });
  Object.defineProperty(IntegerRect.prototype, 'maxX', {
    get: function () {
      return this.maxX_s9uuvs$_0.value;
    }
  });
  Object.defineProperty(IntegerRect.prototype, 'minY', {
    get: function () {
      return this.minY_s9zrdx$_0.value;
    }
  });
  Object.defineProperty(IntegerRect.prototype, 'midY', {
    get: function () {
      return this.midY_s9zjyz$_0.value;
    }
  });
  Object.defineProperty(IntegerRect.prototype, 'maxY', {
    get: function () {
      return this.maxY_s9uuwn$_0.value;
    }
  });
  Object.defineProperty(IntegerRect.prototype, 'minXminY', {
    get: function () {
      return this.minXminY_ci0rfj$_0.value;
    }
  });
  Object.defineProperty(IntegerRect.prototype, 'minXmidY', {
    get: function () {
      return this.minXmidY_ci0k0l$_0.value;
    }
  });
  Object.defineProperty(IntegerRect.prototype, 'minXmaxY', {
    get: function () {
      return this.minXmaxY_chvuy9$_0.value;
    }
  });
  Object.defineProperty(IntegerRect.prototype, 'midXminY', {
    get: function () {
      return this.midXminY_7sa15h$_0.value;
    }
  });
  Object.defineProperty(IntegerRect.prototype, 'midXmidY', {
    get: function () {
      return this.midXmidY_7s9tqj$_0.value;
    }
  });
  Object.defineProperty(IntegerRect.prototype, 'midXmaxY', {
    get: function () {
      return this.midXmaxY_7s54o7$_0.value;
    }
  });
  Object.defineProperty(IntegerRect.prototype, 'maxXminY', {
    get: function () {
      return this.maxXminY_9w4un$_0.value;
    }
  });
  Object.defineProperty(IntegerRect.prototype, 'maxXmidY', {
    get: function () {
      return this.maxXmidY_9wc9l$_0.value;
    }
  });
  Object.defineProperty(IntegerRect.prototype, 'maxXmaxY', {
    get: function () {
      return this.maxXmaxY_a11bx$_0.value;
    }
  });
  IntegerRect.prototype.contains_rv3yws$ = function (other) {
    return this.contains_6gvwl3$(other, defaultIntegerCalculationTolerance);
  };
  IntegerRect.prototype.contains_6gvwl3$ = function (other, tolerance) {
    return isLessThanOrEqualTo_0(this.minX, this.x, tolerance) && isLessThanOrEqualTo_0(this.minY, this.y, tolerance) && isGreaterThanOrEqualTo_0(this.maxX, this.x, tolerance) && isGreaterThanOrEqualTo_0(this.maxY, this.y, tolerance);
  };
  IntegerRect.prototype.intersects_rv3yws$ = function (other) {
    return this.intersection_rv3yws$(other) != null;
  };
  IntegerRect.prototype.intersects_6gvwl3$ = function (other, tolerance) {
    return this.intersection_6gvwl3$(other, tolerance) != null;
  };
  IntegerRect.prototype.union_rv3yws$ = function (other) {
    var isEmptyFirstRect = this.size.isEmpty;
    var isEmptySecondRect = other.size.isEmpty;
    if (isEmptyFirstRect && isEmptySecondRect) {
      return IntegerRect$Companion_getInstance().zero;
    }
     else if (isEmptyFirstRect) {
      return other;
    }
     else if (isEmptySecondRect) {
      return this;
    }
    var x = min(this.minX, other.minX);
    var y = min(this.minY, other.minY);
    var width = max(this.maxX, other.maxX).subtract(x);
    var height = max(this.maxY, other.maxY).subtract(y);
    return IntegerRect_init(x, y, width, height);
  };
  IntegerRect.prototype.intersection_rv3yws$ = function (other) {
    return this.intersection_6gvwl3$(other, L0);
  };
  IntegerRect.prototype.intersection_6gvwl3$ = function (other, tolerance) {
    if (isLessThanOrEqualTo_0(this.maxX, other.minX, tolerance) || isLessThanOrEqualTo_0(other.maxX, this.minX, tolerance) || isLessThanOrEqualTo_0(this.maxY, other.minY, tolerance) || isLessThanOrEqualTo_0(other.maxY, this.minY, tolerance)) {
      return null;
    }
    var x = max(this.minX, other.minX);
    var y = max(this.minY, other.minY);
    var width = min(this.maxX, other.maxX).subtract(x);
    var height = min(this.maxY, other.maxY).subtract(y);
    return IntegerRect_init(x, y, width, height);
  };
  IntegerRect.prototype.offset_foso30$ = function (xOffset, yOffset) {
    return IntegerRect_init(this.x.add(xOffset), this.y.add(yOffset), this.width, this.height);
  };
  IntegerRect.prototype.copy_iy8smh$$default = function (newOrigin, newSize) {
    return new IntegerRect(newOrigin, newSize);
  };
  IntegerRect.prototype.copy_jan4et$$default = function (newX, newY, newWidth, newHeight) {
    return IntegerRect_init(newX, newY, newWidth, newHeight);
  };
  IntegerRect.prototype.copyWithExtremes_ee08pu$$default = function (newMinX, newMinY, newMaxX, newMaxY) {
    return new IntegerRect(new IntegerPoint(newMinX, newMinY), new IntegerSize(newMaxX.subtract(newMinX), newMaxY.subtract(newMinY)));
  };
  IntegerRect.prototype.expanded_2aye5d$ = function (toInclude) {
    return get_integerValue_8(ComputableRect.prototype.expanded_2aye5d$.call(this, toInclude));
  };
  IntegerRect.prototype.equals_ri9j6v$$default = function (other, tolerance) {
    return this.origin.equals_ri9j6v$(other.origin, tolerance);
  };
  Object.defineProperty(IntegerRect.prototype, 'integerValue', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.geometry.IntegerRect.get_integerValue', function () {
      return this;
    })
  });
  IntegerRect.prototype.forEach_82u1ml$$default = function (scanningApproach, iterator) {
    var tmp$;
    tmp$ = until(this.minY, this.maxY);
    rectangularIteratorTemplate(scanningApproach, until(this.minX, this.maxX), tmp$, getCallableRef('IntegerPoint', function (x, y) {
      return new IntegerPoint(x, y);
    }), iterator);
  };
  function IntegerRect$minX$lambda(this$IntegerRect) {
    return function () {
      return this$IntegerRect.width.toNumber() < 0 ? this$IntegerRect.x.add(this$IntegerRect.width) : this$IntegerRect.x;
    };
  }
  function IntegerRect$midX$lambda(this$IntegerRect) {
    return function () {
      return this$IntegerRect.minX.add(this$IntegerRect.maxX).div(Kotlin.Long.fromInt(2));
    };
  }
  function IntegerRect$maxX$lambda(this$IntegerRect) {
    return function () {
      return this$IntegerRect.width.toNumber() < 0 ? this$IntegerRect.x : this$IntegerRect.x.add(this$IntegerRect.width);
    };
  }
  function IntegerRect$minY$lambda(this$IntegerRect) {
    return function () {
      return this$IntegerRect.height.toNumber() < 0 ? this$IntegerRect.y.add(this$IntegerRect.height) : this$IntegerRect.y;
    };
  }
  function IntegerRect$midY$lambda(this$IntegerRect) {
    return function () {
      return this$IntegerRect.minY.add(this$IntegerRect.maxY).div(Kotlin.Long.fromInt(2));
    };
  }
  function IntegerRect$maxY$lambda(this$IntegerRect) {
    return function () {
      return this$IntegerRect.height.toNumber() < 0 ? this$IntegerRect.y : this$IntegerRect.y.add(this$IntegerRect.height);
    };
  }
  function IntegerRect$minXminY$lambda(this$IntegerRect) {
    return function () {
      return new IntegerPoint(this$IntegerRect.minX, this$IntegerRect.minY);
    };
  }
  function IntegerRect$minXmidY$lambda(this$IntegerRect) {
    return function () {
      return new IntegerPoint(this$IntegerRect.minX, this$IntegerRect.midY);
    };
  }
  function IntegerRect$minXmaxY$lambda(this$IntegerRect) {
    return function () {
      return new IntegerPoint(this$IntegerRect.minX, this$IntegerRect.maxY);
    };
  }
  function IntegerRect$midXminY$lambda(this$IntegerRect) {
    return function () {
      return new IntegerPoint(this$IntegerRect.midX, this$IntegerRect.minY);
    };
  }
  function IntegerRect$midXmidY$lambda(this$IntegerRect) {
    return function () {
      return new IntegerPoint(this$IntegerRect.midX, this$IntegerRect.midY);
    };
  }
  function IntegerRect$midXmaxY$lambda(this$IntegerRect) {
    return function () {
      return new IntegerPoint(this$IntegerRect.midX, this$IntegerRect.maxY);
    };
  }
  function IntegerRect$maxXminY$lambda(this$IntegerRect) {
    return function () {
      return new IntegerPoint(this$IntegerRect.maxX, this$IntegerRect.minY);
    };
  }
  function IntegerRect$maxXmidY$lambda(this$IntegerRect) {
    return function () {
      return new IntegerPoint(this$IntegerRect.maxX, this$IntegerRect.midY);
    };
  }
  function IntegerRect$maxXmaxY$lambda(this$IntegerRect) {
    return function () {
      return new IntegerPoint(this$IntegerRect.maxX, this$IntegerRect.maxY);
    };
  }
  IntegerRect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntegerRect',
    interfaces: [ComputableRect]
  };
  function IntegerRect_init(x, y, width, height, $this) {
    $this = $this || Object.create(IntegerRect.prototype);
    IntegerRect.call($this, new IntegerPoint(x, y), new IntegerSize(width, height));
    return $this;
  }
  function get_integerValue_8($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, IntegerRect) ? tmp$ : null) != null ? tmp$_0 : IntegerRect_init(toInt64Checked($receiver.x), toInt64Checked($receiver.y), toInt64Checked($receiver.width), toInt64Checked($receiver.height));
  }
  function FractionRect(origin, size) {
    FractionRect$Companion_getInstance();
    ComputableRect.call(this, origin, size);
    this.minX_twliku$_0 = lazy(FractionRect$minX$lambda(this));
    this.midX_twlb5w$_0 = lazy(FractionRect$midX$lambda(this));
    this.maxX_twgm3k$_0 = lazy(FractionRect$maxX$lambda(this));
    this.minY_twlilp$_0 = lazy(FractionRect$minY$lambda(this));
    this.midY_twlb6r$_0 = lazy(FractionRect$midY$lambda(this));
    this.maxY_twgm4f$_0 = lazy(FractionRect$maxY$lambda(this));
    this.minXminY_tjggt5$_0 = lazy(FractionRect$minXminY$lambda(this));
    this.minXmidY_tjgo83$_0 = lazy(FractionRect$minXmidY$lambda(this));
    this.minXmaxY_tjldaf$_0 = lazy(FractionRect$minXmaxY$lambda(this));
    this.midXminY_y97737$_0 = lazy(FractionRect$midXminY$lambda(this));
    this.midXmidY_y97ei5$_0 = lazy(FractionRect$midXmidY$lambda(this));
    this.midXmaxY_y9c3kh$_0 = lazy(FractionRect$midXmaxY$lambda(this));
    this.maxXminY_spqovt$_0 = lazy(FractionRect$maxXminY$lambda(this));
    this.maxXmidY_spqhgv$_0 = lazy(FractionRect$maxXmidY$lambda(this));
    this.maxXmaxY_splsej$_0 = lazy(FractionRect$maxXmaxY$lambda(this));
  }
  function FractionRect$Companion() {
    FractionRect$Companion_instance = this;
    this.zero = new FractionRect(FractionPoint$Companion_getInstance().zero, FractionSize$Companion_getInstance().zero);
  }
  FractionRect$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FractionRect$Companion_instance = null;
  function FractionRect$Companion_getInstance() {
    if (FractionRect$Companion_instance === null) {
      new FractionRect$Companion();
    }
    return FractionRect$Companion_instance;
  }
  Object.defineProperty(FractionRect.prototype, 'minX', {
    get: function () {
      return this.minX_twliku$_0.value;
    }
  });
  Object.defineProperty(FractionRect.prototype, 'midX', {
    get: function () {
      return this.midX_twlb5w$_0.value;
    }
  });
  Object.defineProperty(FractionRect.prototype, 'maxX', {
    get: function () {
      return this.maxX_twgm3k$_0.value;
    }
  });
  Object.defineProperty(FractionRect.prototype, 'minY', {
    get: function () {
      return this.minY_twlilp$_0.value;
    }
  });
  Object.defineProperty(FractionRect.prototype, 'midY', {
    get: function () {
      return this.midY_twlb6r$_0.value;
    }
  });
  Object.defineProperty(FractionRect.prototype, 'maxY', {
    get: function () {
      return this.maxY_twgm4f$_0.value;
    }
  });
  Object.defineProperty(FractionRect.prototype, 'minXminY', {
    get: function () {
      return this.minXminY_tjggt5$_0.value;
    }
  });
  Object.defineProperty(FractionRect.prototype, 'minXmidY', {
    get: function () {
      return this.minXmidY_tjgo83$_0.value;
    }
  });
  Object.defineProperty(FractionRect.prototype, 'minXmaxY', {
    get: function () {
      return this.minXmaxY_tjldaf$_0.value;
    }
  });
  Object.defineProperty(FractionRect.prototype, 'midXminY', {
    get: function () {
      return this.midXminY_y97737$_0.value;
    }
  });
  Object.defineProperty(FractionRect.prototype, 'midXmidY', {
    get: function () {
      return this.midXmidY_y97ei5$_0.value;
    }
  });
  Object.defineProperty(FractionRect.prototype, 'midXmaxY', {
    get: function () {
      return this.midXmaxY_y9c3kh$_0.value;
    }
  });
  Object.defineProperty(FractionRect.prototype, 'maxXminY', {
    get: function () {
      return this.maxXminY_spqovt$_0.value;
    }
  });
  Object.defineProperty(FractionRect.prototype, 'maxXmidY', {
    get: function () {
      return this.maxXmidY_spqhgv$_0.value;
    }
  });
  Object.defineProperty(FractionRect.prototype, 'maxXmaxY', {
    get: function () {
      return this.maxXmaxY_splsej$_0.value;
    }
  });
  FractionRect.prototype.contains_rv3yws$ = function (other) {
    return this.contains_6gvwl3$(other, defaultFractionCalculationTolerance);
  };
  FractionRect.prototype.contains_6gvwl3$ = function (other, tolerance) {
    return isLessThanOrEqualTo(this.minX, this.x, tolerance) && isLessThanOrEqualTo(this.minY, this.y, tolerance) && isGreaterThanOrEqualTo(this.maxX, this.x, tolerance) && isGreaterThanOrEqualTo(this.maxY, this.y, tolerance);
  };
  FractionRect.prototype.intersects_rv3yws$ = function (other) {
    return this.intersection_rv3yws$(other) != null;
  };
  FractionRect.prototype.intersects_6gvwl3$ = function (other, tolerance) {
    return this.intersection_6gvwl3$(other, tolerance) != null;
  };
  FractionRect.prototype.union_rv3yws$ = function (other) {
    var isEmptyFirstRect = this.size.isEmpty;
    var isEmptySecondRect = other.size.isEmpty;
    if (isEmptyFirstRect && isEmptySecondRect) {
      return FractionRect$Companion_getInstance().zero;
    }
     else if (isEmptyFirstRect) {
      return other;
    }
     else if (isEmptySecondRect) {
      return this;
    }
    var x = min(this.minX, other.minX);
    var y = min(this.minY, other.minY);
    var width = max(this.maxX, other.maxX) - x;
    var height = max(this.maxY, other.maxY) - y;
    return FractionRect_init(x, y, width, height);
  };
  FractionRect.prototype.intersection_rv3yws$ = function (other) {
    return this.intersection_6gvwl3$(other, -defaultFractionCalculationTolerance);
  };
  FractionRect.prototype.intersection_6gvwl3$ = function (other, tolerance) {
    if (isLessThan(this.maxX, other.minX, tolerance) || isLessThan(other.maxX, this.minX, tolerance) || isLessThan(this.maxY, other.minY, tolerance) || isLessThan(other.maxY, this.minY, tolerance)) {
      return null;
    }
    var x = max(this.minX, other.minX);
    var y = max(this.minY, other.minY);
    var width = min(this.maxX, other.maxX) - x;
    var height = min(this.maxY, other.maxY) - y;
    return FractionRect_init(x, y, width, height);
  };
  FractionRect.prototype.offset_foso30$ = function (xOffset, yOffset) {
    return FractionRect_init(this.x + xOffset, this.y + yOffset, this.width, this.height);
  };
  FractionRect.prototype.copy_iy8smh$$default = function (newOrigin, newSize) {
    return new FractionRect(newOrigin, newSize);
  };
  FractionRect.prototype.copy_jan4et$$default = function (newX, newY, newWidth, newHeight) {
    return FractionRect_init(newX, newY, newWidth, newHeight);
  };
  FractionRect.prototype.copyWithExtremes_ee08pu$$default = function (newMinX, newMinY, newMaxX, newMaxY) {
    return new FractionRect(new FractionPoint(newMinX, newMinY), new FractionSize(newMaxX - newMinX, newMaxY - newMinY));
  };
  FractionRect.prototype.expanded_2aye5d$ = function (toInclude) {
    return get_fractionValue_5(ComputableRect.prototype.expanded_2aye5d$.call(this, toInclude));
  };
  FractionRect.prototype.equals_ri9j6v$$default = function (other, tolerance) {
    return this.origin.equals_ri9j6v$(other.origin, tolerance);
  };
  Object.defineProperty(FractionRect.prototype, 'fractionValue', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.geometry.FractionRect.get_fractionValue', function () {
      return this;
    })
  });
  FractionRect.prototype.forEach_82u1ml$$default = function (scanningApproach, iterator) {
    var tmp$;
    tmp$ = until(toInt64Checked(rounded(this.minY)), toInt64Checked(rounded(this.maxY)));
    rectangularIteratorTemplate(scanningApproach, until(toInt64Checked(rounded(this.minX)), toInt64Checked(rounded(this.maxX))), tmp$, getCallableRef('FractionPoint', function (x, y) {
      return FractionPoint_init(x, y);
    }), iterator);
  };
  function FractionRect$minX$lambda(this$FractionRect) {
    return function () {
      return this$FractionRect.width < 0 ? this$FractionRect.x + this$FractionRect.width : this$FractionRect.x;
    };
  }
  function FractionRect$midX$lambda(this$FractionRect) {
    return function () {
      return (this$FractionRect.minX + this$FractionRect.maxX) / 2;
    };
  }
  function FractionRect$maxX$lambda(this$FractionRect) {
    return function () {
      return this$FractionRect.width < 0 ? this$FractionRect.x : this$FractionRect.x + this$FractionRect.width;
    };
  }
  function FractionRect$minY$lambda(this$FractionRect) {
    return function () {
      return this$FractionRect.height < 0 ? this$FractionRect.y + this$FractionRect.height : this$FractionRect.y;
    };
  }
  function FractionRect$midY$lambda(this$FractionRect) {
    return function () {
      return (this$FractionRect.minY + this$FractionRect.maxY) / 2;
    };
  }
  function FractionRect$maxY$lambda(this$FractionRect) {
    return function () {
      return this$FractionRect.height < 0 ? this$FractionRect.y : this$FractionRect.y + this$FractionRect.height;
    };
  }
  function FractionRect$minXminY$lambda(this$FractionRect) {
    return function () {
      return new FractionPoint(this$FractionRect.minX, this$FractionRect.minY);
    };
  }
  function FractionRect$minXmidY$lambda(this$FractionRect) {
    return function () {
      return new FractionPoint(this$FractionRect.minX, this$FractionRect.midY);
    };
  }
  function FractionRect$minXmaxY$lambda(this$FractionRect) {
    return function () {
      return new FractionPoint(this$FractionRect.minX, this$FractionRect.maxY);
    };
  }
  function FractionRect$midXminY$lambda(this$FractionRect) {
    return function () {
      return new FractionPoint(this$FractionRect.midX, this$FractionRect.minY);
    };
  }
  function FractionRect$midXmidY$lambda(this$FractionRect) {
    return function () {
      return new FractionPoint(this$FractionRect.midX, this$FractionRect.midY);
    };
  }
  function FractionRect$midXmaxY$lambda(this$FractionRect) {
    return function () {
      return new FractionPoint(this$FractionRect.midX, this$FractionRect.maxY);
    };
  }
  function FractionRect$maxXminY$lambda(this$FractionRect) {
    return function () {
      return new FractionPoint(this$FractionRect.maxX, this$FractionRect.minY);
    };
  }
  function FractionRect$maxXmidY$lambda(this$FractionRect) {
    return function () {
      return new FractionPoint(this$FractionRect.maxX, this$FractionRect.midY);
    };
  }
  function FractionRect$maxXmaxY$lambda(this$FractionRect) {
    return function () {
      return new FractionPoint(this$FractionRect.maxX, this$FractionRect.maxY);
    };
  }
  FractionRect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FractionRect',
    interfaces: [ComputableRect]
  };
  function FractionRect_init(x, y, width, height, $this) {
    $this = $this || Object.create(FractionRect.prototype);
    FractionRect.call($this, new FractionPoint(x, y), new FractionSize(width, height));
    return $this;
  }
  function FractionRect_init_0(x, y, width, height, $this) {
    $this = $this || Object.create(FractionRect.prototype);
    FractionRect.call($this, FractionPoint_init(x, y), FractionSize_init(width, height));
    return $this;
  }
  function FractionRect_init_1(x, y, width, height, $this) {
    $this = $this || Object.create(FractionRect.prototype);
    FractionRect.call($this, FractionPoint_init_0(x, y), FractionSize_init_0(width, height));
    return $this;
  }
  function get_fractionValue_5($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, FractionRect) ? tmp$ : null) != null ? tmp$_0 : FractionRect_init(numberToDouble($receiver.x), numberToDouble($receiver.y), numberToDouble($receiver.width), numberToDouble($receiver.height));
  }
  function times($receiver, size) {
    return FractionRect_init($receiver.x * size.width, $receiver.y * size.height, $receiver.width * size.width, $receiver.height * size.height);
  }
  function Size(width, height) {
    this.width = width;
    this.height = height;
  }
  Object.defineProperty(Size.prototype, 'pairValue', {
    get: function () {
      return new Pair(this.width, this.height);
    }
  });
  Size.prototype.equals = function (other) {
    var tmp$;
    if (this === other)
      tmp$ = true;
    else if (!Kotlin.isType(other, Size))
      tmp$ = false;
    else if (!equals(other.height, this.height))
      tmp$ = false;
    else if (!equals(other.width, this.width))
      tmp$ = false;
    else
      tmp$ = true;
    return tmp$;
  };
  Size.prototype.hashCode = function () {
    return (31 * hashCode(this.width) | 0) + hashCode(this.height) | 0;
  };
  Size.prototype.toString = function () {
    return this.width.toString() + ' \xD7 ' + this.height;
  };
  Size.prototype.component1 = function () {
    return this.width;
  };
  Size.prototype.component2 = function () {
    return this.height;
  };
  Size.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Size',
    interfaces: []
  };
  function ComputableSize(width, height) {
    Size.call(this, width, height);
  }
  ComputableSize.prototype.forEach_fc9za5$ = function (scanningApproach, iterator, callback$default) {
    if (scanningApproach === void 0) {
      scanningApproach = RectangleScanningApproach.columnsAscendingThenRowsAscending;
    }
    callback$default ? callback$default(scanningApproach, iterator) : this.forEach_fc9za5$$default(scanningApproach, iterator);
  };
  ComputableSize.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ComputableSize',
    interfaces: [Size]
  };
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  function rectangularIteratorTemplate(scanningApproach, xIterator, yIterator, pointGenerator, iterator) {
    if (equals(scanningApproach, RectangleScanningApproach.columnsAscendingThenRowsAscending)) {
      var didRollOver = {v: null};
      var tmp$;
      tmp$ = yIterator.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        didRollOver.v = true;
        var tmp$_0;
        tmp$_0 = xIterator.iterator();
        while (tmp$_0.hasNext()) {
          var element_0 = tmp$_0.next();
          iterator(pointGenerator(element_0, element), didRollOver.v);
          didRollOver.v = false;
        }
      }
    }
     else {
      throw new NotImplementedError_init('An operation is not implemented: ' + 'Scanning approaches other than CARA are not yet supported');
    }
  }
  function contains_1($receiver, point) {
    return Kotlin.compareTo($receiver.minX, point.x) <= 0 && Kotlin.compareTo($receiver.minY, point.y) <= 0 && Kotlin.compareTo($receiver.maxX, point.x) >= 0 && Kotlin.compareTo($receiver.maxY, point.y) >= 0;
  }
  function RectangleScanningApproach(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function RectangleScanningApproach_initFields() {
    RectangleScanningApproach_initFields = function () {
    };
    RectangleScanningApproach$columnsAscendingThenRowsAscending_instance = new RectangleScanningApproach('columnsAscendingThenRowsAscending', 0);
    RectangleScanningApproach$rowsAscendingThenColumnsAscending_instance = new RectangleScanningApproach('rowsAscendingThenColumnsAscending', 1);
    RectangleScanningApproach$columnsAscendingThenRowsDescending_instance = new RectangleScanningApproach('columnsAscendingThenRowsDescending', 2);
    RectangleScanningApproach$rowsAscendingThenColumnsDescending_instance = new RectangleScanningApproach('rowsAscendingThenColumnsDescending', 3);
    RectangleScanningApproach$columnsDescendingThenRowsAscending_instance = new RectangleScanningApproach('columnsDescendingThenRowsAscending', 4);
    RectangleScanningApproach$rowsDescendingThenColumnsAscending_instance = new RectangleScanningApproach('rowsDescendingThenColumnsAscending', 5);
    RectangleScanningApproach$columnsDescendingThenRowsDescending_instance = new RectangleScanningApproach('columnsDescendingThenRowsDescending', 6);
    RectangleScanningApproach$rowsDescendingThenColumnsDescending_instance = new RectangleScanningApproach('rowsDescendingThenColumnsDescending', 7);
    RectangleScanningApproach$Companion_getInstance();
  }
  var RectangleScanningApproach$columnsAscendingThenRowsAscending_instance;
  function RectangleScanningApproach$columnsAscendingThenRowsAscending_getInstance() {
    RectangleScanningApproach_initFields();
    return RectangleScanningApproach$columnsAscendingThenRowsAscending_instance;
  }
  var RectangleScanningApproach$rowsAscendingThenColumnsAscending_instance;
  function RectangleScanningApproach$rowsAscendingThenColumnsAscending_getInstance() {
    RectangleScanningApproach_initFields();
    return RectangleScanningApproach$rowsAscendingThenColumnsAscending_instance;
  }
  var RectangleScanningApproach$columnsAscendingThenRowsDescending_instance;
  function RectangleScanningApproach$columnsAscendingThenRowsDescending_getInstance() {
    RectangleScanningApproach_initFields();
    return RectangleScanningApproach$columnsAscendingThenRowsDescending_instance;
  }
  var RectangleScanningApproach$rowsAscendingThenColumnsDescending_instance;
  function RectangleScanningApproach$rowsAscendingThenColumnsDescending_getInstance() {
    RectangleScanningApproach_initFields();
    return RectangleScanningApproach$rowsAscendingThenColumnsDescending_instance;
  }
  var RectangleScanningApproach$columnsDescendingThenRowsAscending_instance;
  function RectangleScanningApproach$columnsDescendingThenRowsAscending_getInstance() {
    RectangleScanningApproach_initFields();
    return RectangleScanningApproach$columnsDescendingThenRowsAscending_instance;
  }
  var RectangleScanningApproach$rowsDescendingThenColumnsAscending_instance;
  function RectangleScanningApproach$rowsDescendingThenColumnsAscending_getInstance() {
    RectangleScanningApproach_initFields();
    return RectangleScanningApproach$rowsDescendingThenColumnsAscending_instance;
  }
  var RectangleScanningApproach$columnsDescendingThenRowsDescending_instance;
  function RectangleScanningApproach$columnsDescendingThenRowsDescending_getInstance() {
    RectangleScanningApproach_initFields();
    return RectangleScanningApproach$columnsDescendingThenRowsDescending_instance;
  }
  var RectangleScanningApproach$rowsDescendingThenColumnsDescending_instance;
  function RectangleScanningApproach$rowsDescendingThenColumnsDescending_getInstance() {
    RectangleScanningApproach_initFields();
    return RectangleScanningApproach$rowsDescendingThenColumnsDescending_instance;
  }
  function RectangleScanningApproach$Companion() {
    RectangleScanningApproach$Companion_instance = this;
  }
  Object.defineProperty(RectangleScanningApproach$Companion.prototype, 'default', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.geometry.RectangleScanningApproach.Companion.get_default', wrapFunction(function () {
      var RectangleScanningApproach = _.org.bh.tools.base.math.geometry.RectangleScanningApproach;
      return function () {
        return RectangleScanningApproach.columnsAscendingThenRowsAscending;
      };
    }))
  });
  Object.defineProperty(RectangleScanningApproach$Companion.prototype, 'breadthFirst', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.geometry.RectangleScanningApproach.Companion.get_breadthFirst', wrapFunction(function () {
      var RectangleScanningApproach = _.org.bh.tools.base.math.geometry.RectangleScanningApproach;
      return function () {
        return RectangleScanningApproach.columnsAscendingThenRowsAscending;
      };
    }))
  });
  Object.defineProperty(RectangleScanningApproach$Companion.prototype, 'depthFirst', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.geometry.RectangleScanningApproach.Companion.get_depthFirst', wrapFunction(function () {
      var RectangleScanningApproach = _.org.bh.tools.base.math.geometry.RectangleScanningApproach;
      return function () {
        return RectangleScanningApproach.rowsAscendingThenColumnsAscending;
      };
    }))
  });
  Object.defineProperty(RectangleScanningApproach$Companion.prototype, 'xThenY', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.geometry.RectangleScanningApproach.Companion.get_xThenY', wrapFunction(function () {
      var RectangleScanningApproach = _.org.bh.tools.base.math.geometry.RectangleScanningApproach;
      return function () {
        return RectangleScanningApproach.columnsAscendingThenRowsAscending;
      };
    }))
  });
  Object.defineProperty(RectangleScanningApproach$Companion.prototype, 'yThenX', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.geometry.RectangleScanningApproach.Companion.get_yThenX', wrapFunction(function () {
      var RectangleScanningApproach = _.org.bh.tools.base.math.geometry.RectangleScanningApproach;
      return function () {
        return RectangleScanningApproach.rowsAscendingThenColumnsAscending;
      };
    }))
  });
  Object.defineProperty(RectangleScanningApproach$Companion.prototype, 'xUpThenYUp', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.geometry.RectangleScanningApproach.Companion.get_xUpThenYUp', wrapFunction(function () {
      var RectangleScanningApproach = _.org.bh.tools.base.math.geometry.RectangleScanningApproach;
      return function () {
        return RectangleScanningApproach.columnsAscendingThenRowsAscending;
      };
    }))
  });
  Object.defineProperty(RectangleScanningApproach$Companion.prototype, 'yUpThenXUp', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.geometry.RectangleScanningApproach.Companion.get_yUpThenXUp', wrapFunction(function () {
      var RectangleScanningApproach = _.org.bh.tools.base.math.geometry.RectangleScanningApproach;
      return function () {
        return RectangleScanningApproach.rowsAscendingThenColumnsAscending;
      };
    }))
  });
  Object.defineProperty(RectangleScanningApproach$Companion.prototype, 'xUpThenYDown', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.geometry.RectangleScanningApproach.Companion.get_xUpThenYDown', wrapFunction(function () {
      var RectangleScanningApproach = _.org.bh.tools.base.math.geometry.RectangleScanningApproach;
      return function () {
        return RectangleScanningApproach.columnsAscendingThenRowsDescending;
      };
    }))
  });
  Object.defineProperty(RectangleScanningApproach$Companion.prototype, 'yUpThenXDown', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.geometry.RectangleScanningApproach.Companion.get_yUpThenXDown', wrapFunction(function () {
      var RectangleScanningApproach = _.org.bh.tools.base.math.geometry.RectangleScanningApproach;
      return function () {
        return RectangleScanningApproach.rowsAscendingThenColumnsDescending;
      };
    }))
  });
  Object.defineProperty(RectangleScanningApproach$Companion.prototype, 'xDownThenYUp', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.geometry.RectangleScanningApproach.Companion.get_xDownThenYUp', wrapFunction(function () {
      var RectangleScanningApproach = _.org.bh.tools.base.math.geometry.RectangleScanningApproach;
      return function () {
        return RectangleScanningApproach.columnsDescendingThenRowsAscending;
      };
    }))
  });
  Object.defineProperty(RectangleScanningApproach$Companion.prototype, 'yDownThenXUp', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.geometry.RectangleScanningApproach.Companion.get_yDownThenXUp', wrapFunction(function () {
      var RectangleScanningApproach = _.org.bh.tools.base.math.geometry.RectangleScanningApproach;
      return function () {
        return RectangleScanningApproach.rowsDescendingThenColumnsAscending;
      };
    }))
  });
  Object.defineProperty(RectangleScanningApproach$Companion.prototype, 'xDownThenYDown', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.geometry.RectangleScanningApproach.Companion.get_xDownThenYDown', wrapFunction(function () {
      var RectangleScanningApproach = _.org.bh.tools.base.math.geometry.RectangleScanningApproach;
      return function () {
        return RectangleScanningApproach.columnsDescendingThenRowsDescending;
      };
    }))
  });
  Object.defineProperty(RectangleScanningApproach$Companion.prototype, 'yDownThenXDown', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.geometry.RectangleScanningApproach.Companion.get_yDownThenXDown', wrapFunction(function () {
      var RectangleScanningApproach = _.org.bh.tools.base.math.geometry.RectangleScanningApproach;
      return function () {
        return RectangleScanningApproach.rowsDescendingThenColumnsDescending;
      };
    }))
  });
  RectangleScanningApproach$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RectangleScanningApproach$Companion_instance = null;
  function RectangleScanningApproach$Companion_getInstance() {
    RectangleScanningApproach_initFields();
    if (RectangleScanningApproach$Companion_instance === null) {
      new RectangleScanningApproach$Companion();
    }
    return RectangleScanningApproach$Companion_instance;
  }
  RectangleScanningApproach.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RectangleScanningApproach',
    interfaces: [Enum]
  };
  function RectangleScanningApproach$values() {
    return [RectangleScanningApproach$columnsAscendingThenRowsAscending_getInstance(), RectangleScanningApproach$rowsAscendingThenColumnsAscending_getInstance(), RectangleScanningApproach$columnsAscendingThenRowsDescending_getInstance(), RectangleScanningApproach$rowsAscendingThenColumnsDescending_getInstance(), RectangleScanningApproach$columnsDescendingThenRowsAscending_getInstance(), RectangleScanningApproach$rowsDescendingThenColumnsAscending_getInstance(), RectangleScanningApproach$columnsDescendingThenRowsDescending_getInstance(), RectangleScanningApproach$rowsDescendingThenColumnsDescending_getInstance()];
  }
  RectangleScanningApproach.values = RectangleScanningApproach$values;
  function RectangleScanningApproach$valueOf(name) {
    switch (name) {
      case 'columnsAscendingThenRowsAscending':
        return RectangleScanningApproach$columnsAscendingThenRowsAscending_getInstance();
      case 'rowsAscendingThenColumnsAscending':
        return RectangleScanningApproach$rowsAscendingThenColumnsAscending_getInstance();
      case 'columnsAscendingThenRowsDescending':
        return RectangleScanningApproach$columnsAscendingThenRowsDescending_getInstance();
      case 'rowsAscendingThenColumnsDescending':
        return RectangleScanningApproach$rowsAscendingThenColumnsDescending_getInstance();
      case 'columnsDescendingThenRowsAscending':
        return RectangleScanningApproach$columnsDescendingThenRowsAscending_getInstance();
      case 'rowsDescendingThenColumnsAscending':
        return RectangleScanningApproach$rowsDescendingThenColumnsAscending_getInstance();
      case 'columnsDescendingThenRowsDescending':
        return RectangleScanningApproach$columnsDescendingThenRowsDescending_getInstance();
      case 'rowsDescendingThenColumnsDescending':
        return RectangleScanningApproach$rowsDescendingThenColumnsDescending_getInstance();
      default:throwISE('No enum constant org.bh.tools.base.math.geometry.RectangleScanningApproach.' + name);
    }
  }
  RectangleScanningApproach.valueOf_61zpoe$ = RectangleScanningApproach$valueOf;
  function SizeOperatorUnavailableApology(operator, widthType, heightType, otherMainType, otherTypeA, otherTypeAType, otherTypeB, otherTypeBType) {
    if (otherMainType === void 0)
      otherMainType = getKClass(Size);
    if (otherTypeA === void 0)
      otherTypeA = widthType;
    if (otherTypeAType === void 0)
      otherTypeAType = 'width';
    if (otherTypeB === void 0)
      otherTypeB = heightType;
    if (otherTypeBType === void 0)
      otherTypeBType = 'height';
    Throwable.call(this);
    this.message_wgf4cr$_0 = 'Sorry, but because of JVM signature nonsense, ' + operator + ' extensions ' + ("operators have to be done very explicitly, and I didn't think of sizes with " + toString(widthType.simpleName) + ' width ') + ('and ' + toString(heightType.simpleName) + ' height combined with ' + toString(otherMainType.simpleName) + ' having ') + (toString(otherTypeA.simpleName) + ' ' + otherTypeAType + ' and ' + toString(otherTypeB.simpleName) + ' ' + otherTypeBType + ' when I wrote it.');
    this.cause_kf9zl9$_0 = null;
    Kotlin.captureStack(Throwable, this);
    this.name = 'SizeOperatorUnavailableApology';
  }
  Object.defineProperty(SizeOperatorUnavailableApology.prototype, 'message', {
    get: function () {
      return this.message_wgf4cr$_0;
    }
  });
  Object.defineProperty(SizeOperatorUnavailableApology.prototype, 'cause', {
    get: function () {
      return this.cause_kf9zl9$_0;
    }
  });
  SizeOperatorUnavailableApology.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SizeOperatorUnavailableApology',
    interfaces: [Throwable]
  };
  function apology_0($receiver, type, otherMainType, otherTypeA, otherTypeAType, otherTypeB, otherTypeBType) {
    if (otherMainType === void 0)
      otherMainType = getKClass(Size);
    if (otherTypeA === void 0)
      otherTypeA = Kotlin.getKClassFromExpression($receiver.width);
    if (otherTypeAType === void 0)
      otherTypeAType = 'width';
    if (otherTypeB === void 0)
      otherTypeB = Kotlin.getKClassFromExpression($receiver.height);
    if (otherTypeBType === void 0)
      otherTypeBType = 'height';
    return new SizeOperatorUnavailableApology(type, Kotlin.getKClassFromExpression($receiver.width), Kotlin.getKClassFromExpression($receiver.height), otherMainType, otherTypeA, otherTypeAType, otherTypeB, otherTypeBType);
  }
  function IntegerSize(width, height) {
    IntegerSize$Companion_getInstance();
    ComputableSize.call(this, width, height);
    this.isEmpty_btrzm0$_0 = this != null ? this.equals(IntegerSize$Companion_getInstance().zero) : null;
    this.minX_6xlxel$_0 = lazy(IntegerSize$minX$lambda);
    this.midX_6xm4tj$_0 = lazy(IntegerSize$midX$lambda(width));
    this.maxX_6xqtvv$_0 = lazy(IntegerSize$maxX$lambda(width));
    this.minY_6xlxdq$_0 = lazy(IntegerSize$minY$lambda);
    this.midY_6xm4so$_0 = lazy(IntegerSize$midY$lambda(height));
    this.maxY_6xqtv0$_0 = lazy(IntegerSize$maxY$lambda(height));
    this.minXminY_hm0mro$_0 = lazy(IntegerSize$minXminY$lambda(this));
    this.minXmidY_hm0u6m$_0 = lazy(IntegerSize$minXmidY$lambda(this));
    this.minXmaxY_hm5j8y$_0 = lazy(IntegerSize$minXmaxY$lambda(this));
    this.midXminY_mbrd1q$_0 = lazy(IntegerSize$midXminY$lambda(this));
    this.midXmidY_mbrkgo$_0 = lazy(IntegerSize$midXmidY$lambda(this));
    this.midXmaxY_mbw9j0$_0 = lazy(IntegerSize$midXmaxY$lambda(this));
    this.maxXminY_udxj1u$_0 = lazy(IntegerSize$maxXminY$lambda(this));
    this.maxXmidY_udxqgs$_0 = lazy(IntegerSize$maxXmidY$lambda(this));
    this.maxXmaxY_ue2fj4$_0 = lazy(IntegerSize$maxXmaxY$lambda(this));
    this.minDimension_bwvf5h$_0 = lazy(IntegerSize$minDimension$lambda(width, height));
    this.maxDimension_i82xa1$_0 = lazy(IntegerSize$maxDimension$lambda(width, height));
  }
  function IntegerSize$Companion() {
    IntegerSize$Companion_instance = this;
    this.zero = IntegerSize_init(0, 0);
  }
  IntegerSize$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var IntegerSize$Companion_instance = null;
  function IntegerSize$Companion_getInstance() {
    if (IntegerSize$Companion_instance === null) {
      new IntegerSize$Companion();
    }
    return IntegerSize$Companion_instance;
  }
  Object.defineProperty(IntegerSize.prototype, 'isEmpty', {
    get: function () {
      return this.isEmpty_btrzm0$_0;
    }
  });
  Object.defineProperty(IntegerSize.prototype, 'minX', {
    get: function () {
      return this.minX_6xlxel$_0.value;
    }
  });
  Object.defineProperty(IntegerSize.prototype, 'midX', {
    get: function () {
      return this.midX_6xm4tj$_0.value;
    }
  });
  Object.defineProperty(IntegerSize.prototype, 'maxX', {
    get: function () {
      return this.maxX_6xqtvv$_0.value;
    }
  });
  Object.defineProperty(IntegerSize.prototype, 'minY', {
    get: function () {
      return this.minY_6xlxdq$_0.value;
    }
  });
  Object.defineProperty(IntegerSize.prototype, 'midY', {
    get: function () {
      return this.midY_6xm4so$_0.value;
    }
  });
  Object.defineProperty(IntegerSize.prototype, 'maxY', {
    get: function () {
      return this.maxY_6xqtv0$_0.value;
    }
  });
  Object.defineProperty(IntegerSize.prototype, 'minXminY', {
    get: function () {
      return this.minXminY_hm0mro$_0.value;
    }
  });
  Object.defineProperty(IntegerSize.prototype, 'minXmidY', {
    get: function () {
      return this.minXmidY_hm0u6m$_0.value;
    }
  });
  Object.defineProperty(IntegerSize.prototype, 'minXmaxY', {
    get: function () {
      return this.minXmaxY_hm5j8y$_0.value;
    }
  });
  Object.defineProperty(IntegerSize.prototype, 'midXminY', {
    get: function () {
      return this.midXminY_mbrd1q$_0.value;
    }
  });
  Object.defineProperty(IntegerSize.prototype, 'midXmidY', {
    get: function () {
      return this.midXmidY_mbrkgo$_0.value;
    }
  });
  Object.defineProperty(IntegerSize.prototype, 'midXmaxY', {
    get: function () {
      return this.midXmaxY_mbw9j0$_0.value;
    }
  });
  Object.defineProperty(IntegerSize.prototype, 'maxXminY', {
    get: function () {
      return this.maxXminY_udxj1u$_0.value;
    }
  });
  Object.defineProperty(IntegerSize.prototype, 'maxXmidY', {
    get: function () {
      return this.maxXmidY_udxqgs$_0.value;
    }
  });
  Object.defineProperty(IntegerSize.prototype, 'maxXmaxY', {
    get: function () {
      return this.maxXmaxY_ue2fj4$_0.value;
    }
  });
  IntegerSize.prototype.plus_w7wpzj$ = function (rhs) {
    return this.plus_9y93xr$(new Pair(rhs.width, rhs.height));
  };
  IntegerSize.prototype.minus_w7wpzj$ = function (rhs) {
    return this.minus_9y93xr$(new Pair(rhs.width, rhs.height));
  };
  IntegerSize.prototype.times_w7wpzj$ = function (rhs) {
    return this.times_9y93xr$(new Pair(rhs.width, rhs.height));
  };
  IntegerSize.prototype.div_w7wpzj$ = function (rhs) {
    return this.div_9y93xr$(new Pair(rhs.width, rhs.height));
  };
  IntegerSize.prototype.plus_atzj8u$ = function (rhs) {
    return this.plus_9y93xr$(new Pair(rhs, rhs));
  };
  IntegerSize.prototype.minus_atzj8u$ = function (rhs) {
    return this.minus_9y93xr$(new Pair(rhs, rhs));
  };
  IntegerSize.prototype.times_atzj8u$ = function (rhs) {
    return this.times_9y93xr$(new Pair(rhs, rhs));
  };
  IntegerSize.prototype.div_atzj8u$ = function (rhs) {
    return this.div_9y93xr$(new Pair(rhs, rhs));
  };
  IntegerSize.prototype.plus_9y93xr$ = function (rhs) {
    var $receiver = rhs.first;
    var get_isNativeInteger$result;
    if (typeof $receiver === 'number' || typeof $receiver === 'number' || typeof $receiver === 'number' || Kotlin.isType($receiver, Kotlin.Long)) {
      get_isNativeInteger$result = true;
    }
     else {
      get_isNativeInteger$result = false;
    }
    if (get_isNativeInteger$result) {
      return new IntegerSize(this.width.add(toInt64Checked(rhs.first)), this.height.add(toInt64Checked(rhs.second)));
    }
     else {
      var $receiver_0 = rhs.first;
      var get_isNativeFraction$result;
      if (typeof $receiver_0 === 'number' || typeof $receiver_0 === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      if (get_isNativeFraction$result) {
        return new IntegerSize(get_clampedIntegerValue(this.width.toNumber() + numberToDouble(rhs.first)), get_clampedIntegerValue(this.height.toNumber() + numberToDouble(rhs.second)));
      }
       else
        throw apology_0(this, 'addition', getKClass(Pair), Kotlin.getKClassFromExpression(rhs.first), void 0, Kotlin.getKClassFromExpression(rhs.second));
    }
  };
  IntegerSize.prototype.minus_9y93xr$ = function (rhs) {
    var $receiver = rhs.first;
    var get_isNativeInteger$result;
    if (typeof $receiver === 'number' || typeof $receiver === 'number' || typeof $receiver === 'number' || Kotlin.isType($receiver, Kotlin.Long)) {
      get_isNativeInteger$result = true;
    }
     else {
      get_isNativeInteger$result = false;
    }
    if (get_isNativeInteger$result) {
      return new IntegerSize(this.width.subtract(toInt64Checked(rhs.first)), this.height.subtract(toInt64Checked(rhs.second)));
    }
     else {
      var $receiver_0 = rhs.first;
      var get_isNativeFraction$result;
      if (typeof $receiver_0 === 'number' || typeof $receiver_0 === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      if (get_isNativeFraction$result) {
        return new IntegerSize(get_clampedIntegerValue(this.width.toNumber() - numberToDouble(rhs.first)), get_clampedIntegerValue(this.height.toNumber() - numberToDouble(rhs.second)));
      }
       else
        throw apology_0(this, 'subtraction', getKClass(Pair), Kotlin.getKClassFromExpression(rhs.first), void 0, Kotlin.getKClassFromExpression(rhs.second));
    }
  };
  IntegerSize.prototype.times_9y93xr$ = function (rhs) {
    var $receiver = rhs.first;
    var get_isNativeInteger$result;
    if (typeof $receiver === 'number' || typeof $receiver === 'number' || typeof $receiver === 'number' || Kotlin.isType($receiver, Kotlin.Long)) {
      get_isNativeInteger$result = true;
    }
     else {
      get_isNativeInteger$result = false;
    }
    if (get_isNativeInteger$result) {
      return new IntegerSize(this.width.multiply(toInt64Checked(rhs.first)), this.height.multiply(toInt64Checked(rhs.second)));
    }
     else {
      var $receiver_0 = rhs.first;
      var get_isNativeFraction$result;
      if (typeof $receiver_0 === 'number' || typeof $receiver_0 === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      if (get_isNativeFraction$result) {
        return new IntegerSize(get_clampedIntegerValue(this.width.toNumber() * numberToDouble(rhs.first)), get_clampedIntegerValue(this.height.toNumber() * numberToDouble(rhs.second)));
      }
       else
        throw apology_0(this, 'multiplication', getKClass(Pair), Kotlin.getKClassFromExpression(rhs.first), void 0, Kotlin.getKClassFromExpression(rhs.second));
    }
  };
  IntegerSize.prototype.div_9y93xr$ = function (rhs) {
    var $receiver = rhs.first;
    var get_isNativeInteger$result;
    if (typeof $receiver === 'number' || typeof $receiver === 'number' || typeof $receiver === 'number' || Kotlin.isType($receiver, Kotlin.Long)) {
      get_isNativeInteger$result = true;
    }
     else {
      get_isNativeInteger$result = false;
    }
    if (get_isNativeInteger$result) {
      return new IntegerSize(this.width.div(toInt64Checked(rhs.first)), this.height.div(toInt64Checked(rhs.second)));
    }
     else {
      var $receiver_0 = rhs.first;
      var get_isNativeFraction$result;
      if (typeof $receiver_0 === 'number' || typeof $receiver_0 === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      if (get_isNativeFraction$result) {
        return new IntegerSize(get_clampedIntegerValue(this.width.toNumber() / numberToDouble(rhs.first)), get_clampedIntegerValue(this.height.toNumber() / numberToDouble(rhs.second)));
      }
       else
        throw apology_0(this, 'division', getKClass(Pair), Kotlin.getKClassFromExpression(rhs.first), void 0, Kotlin.getKClassFromExpression(rhs.second));
    }
  };
  Object.defineProperty(IntegerSize.prototype, 'minDimension', {
    get: function () {
      return this.minDimension_bwvf5h$_0.value;
    }
  });
  Object.defineProperty(IntegerSize.prototype, 'maxDimension', {
    get: function () {
      return this.maxDimension_i82xa1$_0.value;
    }
  });
  IntegerSize.prototype.forEach_fc9za5$$default = function (scanningApproach, iterator) {
    var tmp$;
    tmp$ = until(this.minY, this.maxY);
    rectangularIteratorTemplate(scanningApproach, until(this.minX, this.maxX), tmp$, getCallableRef('IntegerPoint', function (x, y) {
      return new IntegerPoint(x, y);
    }), iterator);
  };
  function IntegerSize$minX$lambda() {
    return L0;
  }
  function IntegerSize$midX$lambda(closure$width) {
    return function () {
      return closure$width.div(Kotlin.Long.fromInt(2));
    };
  }
  function IntegerSize$maxX$lambda(closure$width) {
    return function () {
      return closure$width;
    };
  }
  function IntegerSize$minY$lambda() {
    return L0;
  }
  function IntegerSize$midY$lambda(closure$height) {
    return function () {
      return closure$height.div(Kotlin.Long.fromInt(2));
    };
  }
  function IntegerSize$maxY$lambda(closure$height) {
    return function () {
      return closure$height;
    };
  }
  function IntegerSize$minXminY$lambda(this$IntegerSize) {
    return function () {
      return new IntegerPoint(this$IntegerSize.minX, this$IntegerSize.minY);
    };
  }
  function IntegerSize$minXmidY$lambda(this$IntegerSize) {
    return function () {
      return new IntegerPoint(this$IntegerSize.minX, this$IntegerSize.midY);
    };
  }
  function IntegerSize$minXmaxY$lambda(this$IntegerSize) {
    return function () {
      return new IntegerPoint(this$IntegerSize.minX, this$IntegerSize.maxY);
    };
  }
  function IntegerSize$midXminY$lambda(this$IntegerSize) {
    return function () {
      return new IntegerPoint(this$IntegerSize.midX, this$IntegerSize.minY);
    };
  }
  function IntegerSize$midXmidY$lambda(this$IntegerSize) {
    return function () {
      return new IntegerPoint(this$IntegerSize.midX, this$IntegerSize.midY);
    };
  }
  function IntegerSize$midXmaxY$lambda(this$IntegerSize) {
    return function () {
      return new IntegerPoint(this$IntegerSize.midX, this$IntegerSize.maxY);
    };
  }
  function IntegerSize$maxXminY$lambda(this$IntegerSize) {
    return function () {
      return new IntegerPoint(this$IntegerSize.maxX, this$IntegerSize.minY);
    };
  }
  function IntegerSize$maxXmidY$lambda(this$IntegerSize) {
    return function () {
      return new IntegerPoint(this$IntegerSize.maxX, this$IntegerSize.midY);
    };
  }
  function IntegerSize$maxXmaxY$lambda(this$IntegerSize) {
    return function () {
      return new IntegerPoint(this$IntegerSize.maxX, this$IntegerSize.maxY);
    };
  }
  function IntegerSize$minDimension$lambda(closure$width, closure$height) {
    return function () {
      return min(closure$width, closure$height);
    };
  }
  function IntegerSize$maxDimension$lambda(closure$width, closure$height) {
    return function () {
      return max(closure$width, closure$height);
    };
  }
  IntegerSize.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntegerSize',
    interfaces: [ComputableSize]
  };
  function IntegerSize_init(width, height, $this) {
    $this = $this || Object.create(IntegerSize.prototype);
    IntegerSize.call($this, toInt64Checked(width), toInt64Checked(height));
    return $this;
  }
  function IntegerSize_init_0(squareSide, $this) {
    $this = $this || Object.create(IntegerSize.prototype);
    IntegerSize.call($this, squareSide, squareSide);
    return $this;
  }
  function Int8Size(width, height) {
    Int8Size$Companion_getInstance();
    ComputableSize.call(this, width, height);
    this.isEmpty_yyle0p$_0 = this != null ? this.equals(Int8Size$Companion_getInstance().zero) : null;
    this.minX_3fab6a$_0 = lazy(Int8Size$minX$lambda);
    this.midX_3fa3rc$_0 = lazy(Int8Size$midX$lambda(width));
    this.maxX_3f5ep0$_0 = lazy(Int8Size$maxX$lambda(width));
    this.minY_3fab75$_0 = lazy(Int8Size$minY$lambda);
    this.midY_3fa3s7$_0 = lazy(Int8Size$midY$lambda(height));
    this.maxY_3f5epv$_0 = lazy(Int8Size$maxY$lambda(height));
    this.minXminY_artrv9$_0 = lazy(Int8Size$minXminY$lambda(this));
    this.minXmidY_artza7$_0 = lazy(Int8Size$minXmidY$lambda(this));
    this.minXmaxY_aryocj$_0 = lazy(Int8Size$minXmaxY$lambda(this));
    this.midXminY_fhki5b$_0 = lazy(Int8Size$midXminY$lambda(this));
    this.midXmidY_fhkpk9$_0 = lazy(Int8Size$midXmidY$lambda(this));
    this.midXmaxY_fhpeml$_0 = lazy(Int8Size$midXmaxY$lambda(this));
    this.maxXminY_njqo5f$_0 = lazy(Int8Size$maxXminY$lambda(this));
    this.maxXmidY_njqvkd$_0 = lazy(Int8Size$maxXmidY$lambda(this));
    this.maxXmaxY_njvkmp$_0 = lazy(Int8Size$maxXmaxY$lambda(this));
    this.minDimension_g2cizg$_0 = lazy(Int8Size$minDimension$lambda(width, height));
    this.maxDimension_ott6k6$_0 = lazy(Int8Size$maxDimension$lambda(width, height));
  }
  function Int8Size$Companion() {
    Int8Size$Companion_instance = this;
    this.zero = Int8Size_init(0, 0);
  }
  Int8Size$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Int8Size$Companion_instance = null;
  function Int8Size$Companion_getInstance() {
    if (Int8Size$Companion_instance === null) {
      new Int8Size$Companion();
    }
    return Int8Size$Companion_instance;
  }
  Object.defineProperty(Int8Size.prototype, 'isEmpty', {
    get: function () {
      return this.isEmpty_yyle0p$_0;
    }
  });
  Object.defineProperty(Int8Size.prototype, 'minX', {
    get: function () {
      return this.minX_3fab6a$_0.value;
    }
  });
  Object.defineProperty(Int8Size.prototype, 'midX', {
    get: function () {
      return this.midX_3fa3rc$_0.value;
    }
  });
  Object.defineProperty(Int8Size.prototype, 'maxX', {
    get: function () {
      return this.maxX_3f5ep0$_0.value;
    }
  });
  Object.defineProperty(Int8Size.prototype, 'minY', {
    get: function () {
      return this.minY_3fab75$_0.value;
    }
  });
  Object.defineProperty(Int8Size.prototype, 'midY', {
    get: function () {
      return this.midY_3fa3s7$_0.value;
    }
  });
  Object.defineProperty(Int8Size.prototype, 'maxY', {
    get: function () {
      return this.maxY_3f5epv$_0.value;
    }
  });
  Object.defineProperty(Int8Size.prototype, 'minXminY', {
    get: function () {
      return this.minXminY_artrv9$_0.value;
    }
  });
  Object.defineProperty(Int8Size.prototype, 'minXmidY', {
    get: function () {
      return this.minXmidY_artza7$_0.value;
    }
  });
  Object.defineProperty(Int8Size.prototype, 'minXmaxY', {
    get: function () {
      return this.minXmaxY_aryocj$_0.value;
    }
  });
  Object.defineProperty(Int8Size.prototype, 'midXminY', {
    get: function () {
      return this.midXminY_fhki5b$_0.value;
    }
  });
  Object.defineProperty(Int8Size.prototype, 'midXmidY', {
    get: function () {
      return this.midXmidY_fhkpk9$_0.value;
    }
  });
  Object.defineProperty(Int8Size.prototype, 'midXmaxY', {
    get: function () {
      return this.midXmaxY_fhpeml$_0.value;
    }
  });
  Object.defineProperty(Int8Size.prototype, 'maxXminY', {
    get: function () {
      return this.maxXminY_njqo5f$_0.value;
    }
  });
  Object.defineProperty(Int8Size.prototype, 'maxXmidY', {
    get: function () {
      return this.maxXmidY_njqvkd$_0.value;
    }
  });
  Object.defineProperty(Int8Size.prototype, 'maxXmaxY', {
    get: function () {
      return this.maxXmaxY_njvkmp$_0.value;
    }
  });
  Int8Size.prototype.plus_w7wpzj$ = function (rhs) {
    return this.plus_9y93xr$(new Pair(rhs.width, rhs.height));
  };
  Int8Size.prototype.minus_w7wpzj$ = function (rhs) {
    return this.minus_9y93xr$(new Pair(rhs.width, rhs.height));
  };
  Int8Size.prototype.times_w7wpzj$ = function (rhs) {
    return this.times_9y93xr$(new Pair(rhs.width, rhs.height));
  };
  Int8Size.prototype.div_w7wpzj$ = function (rhs) {
    return this.div_9y93xr$(new Pair(rhs.width, rhs.height));
  };
  Int8Size.prototype.plus_atzj8u$ = function (rhs) {
    return this.plus_9y93xr$(new Pair(rhs, rhs));
  };
  Int8Size.prototype.minus_atzj8u$ = function (rhs) {
    return this.minus_9y93xr$(new Pair(rhs, rhs));
  };
  Int8Size.prototype.times_atzj8u$ = function (rhs) {
    return this.times_9y93xr$(new Pair(rhs, rhs));
  };
  Int8Size.prototype.div_atzj8u$ = function (rhs) {
    return this.div_9y93xr$(new Pair(rhs, rhs));
  };
  Int8Size.prototype.plus_9y93xr$ = function (rhs) {
    var $receiver = rhs.first;
    var get_isNativeInteger$result;
    if (typeof $receiver === 'number' || typeof $receiver === 'number' || typeof $receiver === 'number' || Kotlin.isType($receiver, Kotlin.Long)) {
      get_isNativeInteger$result = true;
    }
     else {
      get_isNativeInteger$result = false;
    }
    if (get_isNativeInteger$result) {
      return Int8Size_init(this.width + toInt8Checked(rhs.first), this.height + toInt8Checked(rhs.second));
    }
     else {
      var $receiver_0 = rhs.first;
      var get_isNativeFraction$result;
      if (typeof $receiver_0 === 'number' || typeof $receiver_0 === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      if (get_isNativeFraction$result) {
        return new Int8Size(get_clampedInt8Value(this.width + numberToDouble(rhs.first)), get_clampedInt8Value(this.height + numberToDouble(rhs.second)));
      }
       else
        throw apology_0(this, 'addition', getKClass(Pair), Kotlin.getKClassFromExpression(rhs.first), void 0, Kotlin.getKClassFromExpression(rhs.second));
    }
  };
  Int8Size.prototype.minus_9y93xr$ = function (rhs) {
    var $receiver = rhs.first;
    var get_isNativeInteger$result;
    if (typeof $receiver === 'number' || typeof $receiver === 'number' || typeof $receiver === 'number' || Kotlin.isType($receiver, Kotlin.Long)) {
      get_isNativeInteger$result = true;
    }
     else {
      get_isNativeInteger$result = false;
    }
    if (get_isNativeInteger$result) {
      return Int8Size_init(this.width - toInt8Checked(rhs.first), this.height - toInt8Checked(rhs.second));
    }
     else {
      var $receiver_0 = rhs.first;
      var get_isNativeFraction$result;
      if (typeof $receiver_0 === 'number' || typeof $receiver_0 === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      if (get_isNativeFraction$result) {
        return new Int8Size(get_clampedInt8Value(this.width - numberToDouble(rhs.first)), get_clampedInt8Value(this.height - numberToDouble(rhs.second)));
      }
       else
        throw apology_0(this, 'subtraction', getKClass(Pair), Kotlin.getKClassFromExpression(rhs.first), void 0, Kotlin.getKClassFromExpression(rhs.second));
    }
  };
  Int8Size.prototype.times_9y93xr$ = function (rhs) {
    var $receiver = rhs.first;
    var get_isNativeInteger$result;
    if (typeof $receiver === 'number' || typeof $receiver === 'number' || typeof $receiver === 'number' || Kotlin.isType($receiver, Kotlin.Long)) {
      get_isNativeInteger$result = true;
    }
     else {
      get_isNativeInteger$result = false;
    }
    if (get_isNativeInteger$result) {
      return Int8Size_init(this.width * toInt8Checked(rhs.first) | 0, this.height * toInt8Checked(rhs.second) | 0);
    }
     else {
      var $receiver_0 = rhs.first;
      var get_isNativeFraction$result;
      if (typeof $receiver_0 === 'number' || typeof $receiver_0 === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      if (get_isNativeFraction$result) {
        return new Int8Size(get_clampedInt8Value(this.width * numberToDouble(rhs.first)), get_clampedInt8Value(this.height * numberToDouble(rhs.second)));
      }
       else
        throw apology_0(this, 'multiplication', getKClass(Pair), Kotlin.getKClassFromExpression(rhs.first), void 0, Kotlin.getKClassFromExpression(rhs.second));
    }
  };
  Int8Size.prototype.div_9y93xr$ = function (rhs) {
    var $receiver = rhs.first;
    var get_isNativeInteger$result;
    if (typeof $receiver === 'number' || typeof $receiver === 'number' || typeof $receiver === 'number' || Kotlin.isType($receiver, Kotlin.Long)) {
      get_isNativeInteger$result = true;
    }
     else {
      get_isNativeInteger$result = false;
    }
    if (get_isNativeInteger$result) {
      return Int8Size_init(this.width / toInt8Checked(rhs.first) | 0, this.height / toInt8Checked(rhs.second) | 0);
    }
     else {
      var $receiver_0 = rhs.first;
      var get_isNativeFraction$result;
      if (typeof $receiver_0 === 'number' || typeof $receiver_0 === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      if (get_isNativeFraction$result) {
        return new Int8Size(get_clampedInt8Value(this.width / numberToDouble(rhs.first)), get_clampedInt8Value(this.height / numberToDouble(rhs.second)));
      }
       else
        throw apology_0(this, 'division', getKClass(Pair), Kotlin.getKClassFromExpression(rhs.first), void 0, Kotlin.getKClassFromExpression(rhs.second));
    }
  };
  Object.defineProperty(Int8Size.prototype, 'minDimension', {
    get: function () {
      return this.minDimension_g2cizg$_0.value;
    }
  });
  Object.defineProperty(Int8Size.prototype, 'maxDimension', {
    get: function () {
      return this.maxDimension_ott6k6$_0.value;
    }
  });
  Int8Size.prototype.forEach_fc9za5$$default = function (scanningApproach, iterator) {
    rectangularIteratorTemplate(scanningApproach, until_0(this.minX, this.maxX), until_0(this.minY, this.maxY), getCallableRef('Int8Point', function (x, y) {
      return Int8Point_init(x, y);
    }), iterator);
  };
  function Int8Size$minX$lambda() {
    return toByte(0);
  }
  function Int8Size$midX$lambda(closure$width) {
    return function () {
      return toByte(closure$width / 2 | 0);
    };
  }
  function Int8Size$maxX$lambda(closure$width) {
    return function () {
      return closure$width;
    };
  }
  function Int8Size$minY$lambda() {
    return toByte(0);
  }
  function Int8Size$midY$lambda(closure$height) {
    return function () {
      return toByte(closure$height / 2 | 0);
    };
  }
  function Int8Size$maxY$lambda(closure$height) {
    return function () {
      return closure$height;
    };
  }
  function Int8Size$minXminY$lambda(this$Int8Size) {
    return function () {
      return new Int8Point(this$Int8Size.minX, this$Int8Size.minY);
    };
  }
  function Int8Size$minXmidY$lambda(this$Int8Size) {
    return function () {
      return new Int8Point(this$Int8Size.minX, this$Int8Size.midY);
    };
  }
  function Int8Size$minXmaxY$lambda(this$Int8Size) {
    return function () {
      return new Int8Point(this$Int8Size.minX, this$Int8Size.maxY);
    };
  }
  function Int8Size$midXminY$lambda(this$Int8Size) {
    return function () {
      return new Int8Point(this$Int8Size.midX, this$Int8Size.minY);
    };
  }
  function Int8Size$midXmidY$lambda(this$Int8Size) {
    return function () {
      return new Int8Point(this$Int8Size.midX, this$Int8Size.midY);
    };
  }
  function Int8Size$midXmaxY$lambda(this$Int8Size) {
    return function () {
      return new Int8Point(this$Int8Size.midX, this$Int8Size.maxY);
    };
  }
  function Int8Size$maxXminY$lambda(this$Int8Size) {
    return function () {
      return new Int8Point(this$Int8Size.maxX, this$Int8Size.minY);
    };
  }
  function Int8Size$maxXmidY$lambda(this$Int8Size) {
    return function () {
      return new Int8Point(this$Int8Size.maxX, this$Int8Size.midY);
    };
  }
  function Int8Size$maxXmaxY$lambda(this$Int8Size) {
    return function () {
      return new Int8Point(this$Int8Size.maxX, this$Int8Size.maxY);
    };
  }
  function Int8Size$minDimension$lambda(closure$width, closure$height) {
    return function () {
      return min(closure$width, closure$height);
    };
  }
  function Int8Size$maxDimension$lambda(closure$width, closure$height) {
    return function () {
      return max(closure$width, closure$height);
    };
  }
  Int8Size.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Int8Size',
    interfaces: [ComputableSize]
  };
  function Int8Size_init(width, height, $this) {
    $this = $this || Object.create(Int8Size.prototype);
    Int8Size.call($this, toByte(width), toByte(height));
    return $this;
  }
  function Int8Size_init_0(squareSide, $this) {
    $this = $this || Object.create(Int8Size.prototype);
    Int8Size.call($this, squareSide, squareSide);
    return $this;
  }
  function FractionSize(width, height) {
    FractionSize$Companion_getInstance();
    ComputableSize.call(this, width, height);
    this.isEmpty_5kgg74$_0 = lazy(FractionSize$isEmpty$lambda(this));
    this.minX_5b066t$_0 = lazy(FractionSize$minX$lambda);
    this.midX_5b0dlr$_0 = lazy(FractionSize$midX$lambda(width));
    this.maxX_5b52o3$_0 = lazy(FractionSize$maxX$lambda(width));
    this.minY_5b065y$_0 = lazy(FractionSize$minY$lambda);
    this.midY_5b0dkw$_0 = lazy(FractionSize$midY$lambda(height));
    this.maxY_5b52n8$_0 = lazy(FractionSize$maxY$lambda(height));
    this.minXminY_bdm6ys$_0 = lazy(FractionSize$minXminY$lambda(this));
    this.minXmidY_bdlzju$_0 = lazy(FractionSize$minXmidY$lambda(this));
    this.minXmaxY_bdhahi$_0 = lazy(FractionSize$minXmaxY$lambda(this));
    this.midXminY_6nvgoq$_0 = lazy(FractionSize$midXminY$lambda(this));
    this.midXmidY_6nv99s$_0 = lazy(FractionSize$midXmidY$lambda(this));
    this.midXmaxY_6nqk7g$_0 = lazy(FractionSize$midXmaxY$lambda(this));
    this.maxXminY_1eapbe$_0 = lazy(FractionSize$maxXminY$lambda(this));
    this.maxXmidY_1eawqc$_0 = lazy(FractionSize$maxXmidY$lambda(this));
    this.maxXmaxY_1eflso$_0 = lazy(FractionSize$maxXmaxY$lambda(this));
    this.minDimension_n0oadf$_0 = lazy(FractionSize$minDimension$lambda(width, height));
    this.maxDimension_hvhf67$_0 = lazy(FractionSize$maxDimension$lambda(width, height));
  }
  function FractionSize$Companion() {
    FractionSize$Companion_instance = this;
    this.zero = FractionSize_init_0(0, 0);
  }
  FractionSize$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FractionSize$Companion_instance = null;
  function FractionSize$Companion_getInstance() {
    if (FractionSize$Companion_instance === null) {
      new FractionSize$Companion();
    }
    return FractionSize$Companion_instance;
  }
  Object.defineProperty(FractionSize.prototype, 'isEmpty', {
    get: function () {
      return this.isEmpty_5kgg74$_0.value;
    }
  });
  Object.defineProperty(FractionSize.prototype, 'minX', {
    get: function () {
      return this.minX_5b066t$_0.value;
    }
  });
  Object.defineProperty(FractionSize.prototype, 'midX', {
    get: function () {
      return this.midX_5b0dlr$_0.value;
    }
  });
  Object.defineProperty(FractionSize.prototype, 'maxX', {
    get: function () {
      return this.maxX_5b52o3$_0.value;
    }
  });
  Object.defineProperty(FractionSize.prototype, 'minY', {
    get: function () {
      return this.minY_5b065y$_0.value;
    }
  });
  Object.defineProperty(FractionSize.prototype, 'midY', {
    get: function () {
      return this.midY_5b0dkw$_0.value;
    }
  });
  Object.defineProperty(FractionSize.prototype, 'maxY', {
    get: function () {
      return this.maxY_5b52n8$_0.value;
    }
  });
  Object.defineProperty(FractionSize.prototype, 'minXminY', {
    get: function () {
      return this.minXminY_bdm6ys$_0.value;
    }
  });
  Object.defineProperty(FractionSize.prototype, 'minXmidY', {
    get: function () {
      return this.minXmidY_bdlzju$_0.value;
    }
  });
  Object.defineProperty(FractionSize.prototype, 'minXmaxY', {
    get: function () {
      return this.minXmaxY_bdhahi$_0.value;
    }
  });
  Object.defineProperty(FractionSize.prototype, 'midXminY', {
    get: function () {
      return this.midXminY_6nvgoq$_0.value;
    }
  });
  Object.defineProperty(FractionSize.prototype, 'midXmidY', {
    get: function () {
      return this.midXmidY_6nv99s$_0.value;
    }
  });
  Object.defineProperty(FractionSize.prototype, 'midXmaxY', {
    get: function () {
      return this.midXmaxY_6nqk7g$_0.value;
    }
  });
  Object.defineProperty(FractionSize.prototype, 'maxXminY', {
    get: function () {
      return this.maxXminY_1eapbe$_0.value;
    }
  });
  Object.defineProperty(FractionSize.prototype, 'maxXmidY', {
    get: function () {
      return this.maxXmidY_1eawqc$_0.value;
    }
  });
  Object.defineProperty(FractionSize.prototype, 'maxXmaxY', {
    get: function () {
      return this.maxXmaxY_1eflso$_0.value;
    }
  });
  FractionSize.prototype.plus_w7wpzj$ = function (rhs) {
    return this.plus_9y93xr$(new Pair(rhs.width, rhs.height));
  };
  FractionSize.prototype.minus_w7wpzj$ = function (rhs) {
    return this.minus_9y93xr$(new Pair(rhs.width, rhs.height));
  };
  FractionSize.prototype.times_w7wpzj$ = function (rhs) {
    return this.times_9y93xr$(new Pair(rhs.width, rhs.height));
  };
  FractionSize.prototype.div_w7wpzj$ = function (rhs) {
    return this.div_9y93xr$(new Pair(rhs.width, rhs.height));
  };
  FractionSize.prototype.plus_atzj8u$ = function (rhs) {
    return this.plus_9y93xr$(new Pair(rhs, rhs));
  };
  FractionSize.prototype.minus_atzj8u$ = function (rhs) {
    return this.minus_9y93xr$(new Pair(rhs, rhs));
  };
  FractionSize.prototype.times_atzj8u$ = function (rhs) {
    return this.times_9y93xr$(new Pair(rhs, rhs));
  };
  FractionSize.prototype.div_atzj8u$ = function (rhs) {
    return this.div_9y93xr$(new Pair(rhs, rhs));
  };
  FractionSize.prototype.plus_9y93xr$ = function (rhs) {
    var $receiver = rhs.first;
    var get_isNativeInteger$result;
    if (typeof $receiver === 'number' || typeof $receiver === 'number' || typeof $receiver === 'number' || Kotlin.isType($receiver, Kotlin.Long)) {
      get_isNativeInteger$result = true;
    }
     else {
      get_isNativeInteger$result = false;
    }
    if (get_isNativeInteger$result) {
      return new FractionSize(this.width + toInt64Checked(rhs.first).toNumber(), this.height + toInt64Checked(rhs.second).toNumber());
    }
     else {
      var $receiver_0 = rhs.first;
      var get_isNativeFraction$result;
      if (typeof $receiver_0 === 'number' || typeof $receiver_0 === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      if (get_isNativeFraction$result) {
        return new FractionSize(this.width + numberToDouble(rhs.first), this.height + numberToDouble(rhs.second));
      }
       else
        throw apology_0(this, 'addition', getKClass(Pair), Kotlin.getKClassFromExpression(rhs.first), void 0, Kotlin.getKClassFromExpression(rhs.second));
    }
  };
  FractionSize.prototype.minus_9y93xr$ = function (rhs) {
    var $receiver = rhs.first;
    var get_isNativeInteger$result;
    if (typeof $receiver === 'number' || typeof $receiver === 'number' || typeof $receiver === 'number' || Kotlin.isType($receiver, Kotlin.Long)) {
      get_isNativeInteger$result = true;
    }
     else {
      get_isNativeInteger$result = false;
    }
    if (get_isNativeInteger$result) {
      return new FractionSize(this.width - toInt64Checked(rhs.first).toNumber(), this.height - toInt64Checked(rhs.second).toNumber());
    }
     else {
      var $receiver_0 = rhs.first;
      var get_isNativeFraction$result;
      if (typeof $receiver_0 === 'number' || typeof $receiver_0 === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      if (get_isNativeFraction$result) {
        return new FractionSize(this.width - numberToDouble(rhs.first), this.height - numberToDouble(rhs.second));
      }
       else
        throw apology_0(this, 'subtraction', getKClass(Pair), Kotlin.getKClassFromExpression(rhs.first), void 0, Kotlin.getKClassFromExpression(rhs.second));
    }
  };
  FractionSize.prototype.times_9y93xr$ = function (rhs) {
    var $receiver = rhs.first;
    var get_isNativeInteger$result;
    if (typeof $receiver === 'number' || typeof $receiver === 'number' || typeof $receiver === 'number' || Kotlin.isType($receiver, Kotlin.Long)) {
      get_isNativeInteger$result = true;
    }
     else {
      get_isNativeInteger$result = false;
    }
    if (get_isNativeInteger$result) {
      return new FractionSize(this.width * toInt64Checked(rhs.first).toNumber(), this.height * toInt64Checked(rhs.second).toNumber());
    }
     else {
      var $receiver_0 = rhs.first;
      var get_isNativeFraction$result;
      if (typeof $receiver_0 === 'number' || typeof $receiver_0 === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      if (get_isNativeFraction$result) {
        return new FractionSize(this.width * numberToDouble(rhs.first), this.height * numberToDouble(rhs.second));
      }
       else
        throw apology_0(this, 'multiplication', getKClass(Pair), Kotlin.getKClassFromExpression(rhs.first), void 0, Kotlin.getKClassFromExpression(rhs.second));
    }
  };
  FractionSize.prototype.div_9y93xr$ = function (rhs) {
    var $receiver = rhs.first;
    var get_isNativeInteger$result;
    if (typeof $receiver === 'number' || typeof $receiver === 'number' || typeof $receiver === 'number' || Kotlin.isType($receiver, Kotlin.Long)) {
      get_isNativeInteger$result = true;
    }
     else {
      get_isNativeInteger$result = false;
    }
    if (get_isNativeInteger$result) {
      return new FractionSize(this.width / toInt64Checked(rhs.first).toNumber(), this.height / toInt64Checked(rhs.second).toNumber());
    }
     else {
      var $receiver_0 = rhs.first;
      var get_isNativeFraction$result;
      if (typeof $receiver_0 === 'number' || typeof $receiver_0 === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      if (get_isNativeFraction$result) {
        return new FractionSize(this.width / numberToDouble(rhs.first), this.height / numberToDouble(rhs.second));
      }
       else
        throw apology_0(this, 'division', getKClass(Pair), Kotlin.getKClassFromExpression(rhs.first), void 0, Kotlin.getKClassFromExpression(rhs.second));
    }
  };
  Object.defineProperty(FractionSize.prototype, 'minDimension', {
    get: function () {
      return this.minDimension_n0oadf$_0.value;
    }
  });
  Object.defineProperty(FractionSize.prototype, 'maxDimension', {
    get: function () {
      return this.maxDimension_hvhf67$_0.value;
    }
  });
  FractionSize.prototype.forEach_fc9za5$$default = function (scanningApproach, iterator) {
    var tmp$;
    tmp$ = until(toInt64Checked(rounded(this.minY)), toInt64Checked(rounded(this.maxY)));
    rectangularIteratorTemplate(scanningApproach, until(toInt64Checked(rounded(this.minX)), toInt64Checked(rounded(this.maxX))), tmp$, getCallableRef('FractionPoint', function (x, y) {
      return FractionPoint_init(x, y);
    }), iterator);
  };
  function FractionSize$isEmpty$lambda(this$FractionSize) {
    return function () {
      return this$FractionSize != null ? this$FractionSize.equals(FractionSize$Companion_getInstance().zero) : null;
    };
  }
  function FractionSize$minX$lambda() {
    return 0.0;
  }
  function FractionSize$midX$lambda(closure$width) {
    return function () {
      return closure$width / 2;
    };
  }
  function FractionSize$maxX$lambda(closure$width) {
    return function () {
      return closure$width;
    };
  }
  function FractionSize$minY$lambda() {
    return 0.0;
  }
  function FractionSize$midY$lambda(closure$height) {
    return function () {
      return closure$height / 2;
    };
  }
  function FractionSize$maxY$lambda(closure$height) {
    return function () {
      return closure$height;
    };
  }
  function FractionSize$minXminY$lambda(this$FractionSize) {
    return function () {
      return new FractionPoint(this$FractionSize.minX, this$FractionSize.minY);
    };
  }
  function FractionSize$minXmidY$lambda(this$FractionSize) {
    return function () {
      return new FractionPoint(this$FractionSize.minX, this$FractionSize.midY);
    };
  }
  function FractionSize$minXmaxY$lambda(this$FractionSize) {
    return function () {
      return new FractionPoint(this$FractionSize.minX, this$FractionSize.maxY);
    };
  }
  function FractionSize$midXminY$lambda(this$FractionSize) {
    return function () {
      return new FractionPoint(this$FractionSize.midX, this$FractionSize.minY);
    };
  }
  function FractionSize$midXmidY$lambda(this$FractionSize) {
    return function () {
      return new FractionPoint(this$FractionSize.midX, this$FractionSize.midY);
    };
  }
  function FractionSize$midXmaxY$lambda(this$FractionSize) {
    return function () {
      return new FractionPoint(this$FractionSize.midX, this$FractionSize.maxY);
    };
  }
  function FractionSize$maxXminY$lambda(this$FractionSize) {
    return function () {
      return new FractionPoint(this$FractionSize.maxX, this$FractionSize.minY);
    };
  }
  function FractionSize$maxXmidY$lambda(this$FractionSize) {
    return function () {
      return new FractionPoint(this$FractionSize.maxX, this$FractionSize.midY);
    };
  }
  function FractionSize$maxXmaxY$lambda(this$FractionSize) {
    return function () {
      return new FractionPoint(this$FractionSize.maxX, this$FractionSize.maxY);
    };
  }
  function FractionSize$minDimension$lambda(closure$width, closure$height) {
    return function () {
      return min(closure$width, closure$height);
    };
  }
  function FractionSize$maxDimension$lambda(closure$width, closure$height) {
    return function () {
      return max(closure$width, closure$height);
    };
  }
  FractionSize.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FractionSize',
    interfaces: [ComputableSize]
  };
  function FractionSize_init(width, height, $this) {
    $this = $this || Object.create(FractionSize.prototype);
    FractionSize.call($this, numberToDouble(width), numberToDouble(height));
    return $this;
  }
  function FractionSize_init_0(width, height, $this) {
    $this = $this || Object.create(FractionSize.prototype);
    FractionSize.call($this, numberToDouble(width), numberToDouble(height));
    return $this;
  }
  function FractionSize_init_1(squareSide, $this) {
    $this = $this || Object.create(FractionSize.prototype);
    FractionSize.call($this, squareSide, squareSide);
    return $this;
  }
  function FractionSize_init_2(squareSide, $this) {
    $this = $this || Object.create(FractionSize.prototype);
    FractionSize_init_1(numberToDouble(squareSide), $this);
    return $this;
  }
  function get_integerValue_9($receiver) {
    return new IntegerSize(toInt64Checked($receiver.width), toInt64Checked($receiver.height));
  }
  var get_fractionValue_6 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.math.geometry.get_fractionValue_6z9w7d$', wrapFunction(function () {
    var FractionSize = _.org.bh.tools.base.math.geometry.FractionSize;
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver) {
      return Kotlin.isType($receiver, FractionSize) ? $receiver : new FractionSize(numberToDouble($receiver.width), numberToDouble($receiver.height));
    };
  }));
  function State() {
  }
  State.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'State',
    interfaces: []
  };
  function ChangeableState() {
  }
  ChangeableState.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ChangeableState',
    interfaces: [State]
  };
  function StateChange() {
  }
  StateChange.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StateChange',
    interfaces: []
  };
  function StateController() {
  }
  StateController.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StateController',
    interfaces: []
  };
  function StateMutationListener() {
  }
  StateMutationListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StateMutationListener',
    interfaces: []
  };
  function StateMutator() {
  }
  StateMutator.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StateMutator',
    interfaces: []
  };
  function StateStore() {
  }
  StateStore.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StateStore',
    interfaces: []
  };
  function BasicStateStore(baseState) {
    this._stateStack_8be2vx$ = new DeltaStack(baseState);
  }
  BasicStateStore.prototype.pushState_hiizht$ = function (newState) {
    this._stateStack_8be2vx$.pushState_hiizht$(newState);
  };
  BasicStateStore.prototype.popState = function () {
    return this._stateStack_8be2vx$.popState();
  };
  BasicStateStore.prototype.currentState = function () {
    return this._stateStack_8be2vx$.currentState();
  };
  BasicStateStore.prototype.flattenState = function () {
    return this._stateStack_8be2vx$.flattenState();
  };
  BasicStateStore.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BasicStateStore',
    interfaces: [StateStore]
  };
  function ResettableStateStore() {
  }
  ResettableStateStore.prototype.reset_g14lj2$ = function (newState, callback$default) {
    if (newState === void 0)
      newState = null;
    callback$default ? callback$default(newState) : this.reset_g14lj2$$default(newState);
  };
  ResettableStateStore.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ResettableStateStore',
    interfaces: [StateStore]
  };
  function BasicResettableStateStore(baseState) {
    BasicStateStore.call(this, baseState);
  }
  BasicResettableStateStore.prototype.reset_g14lj2$$default = function (newState) {
    this._stateStack_8be2vx$.reset_g14lj2$(newState);
  };
  BasicResettableStateStore.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BasicResettableStateStore',
    interfaces: [ResettableStateStore, BasicStateStore]
  };
  function contains_2($receiver, mask) {
    return 0 !== ($receiver & mask);
  }
  var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
  function toString_7($receiver, fractionDigits, roundingDirection, roundingThreshold) {
    if (roundingDirection === void 0)
      roundingDirection = RoundingDirection$Companion_getInstance().default;
    if (roundingThreshold === void 0)
      roundingThreshold = RoundingThreshold$Companion_getInstance().default;
    var multiplier = toThePowerOf_1(10, fractionDigits);
    var shifted = $receiver * multiplier;
    var rounded_0 = rounded(shifted, roundingDirection, roundingThreshold);
    var reshifted = rounded_0 / multiplier;
    var rawString = reshifted.toString();
    var digitsBeforeRadix = substringBefore(rawString, 46);
    if (0 === fractionDigits) {
      return digitsBeforeRadix;
    }
    var digitsAfterRadix = substringAfter(rawString, 46);
    var missingDigits = fractionDigits - digitsAfterRadix.length | 0;
    if (missingDigits > 0) {
      digitsAfterRadix += repeat('0', missingDigits < 0 ? 0 : missingDigits);
    }
    return digitsBeforeRadix + '.' + digitsAfterRadix;
  }
  function toString_8($receiver, fractionDigits, roundingDirection, roundingThreshold) {
    if (roundingDirection === void 0)
      roundingDirection = RoundingDirection$Companion_getInstance().default;
    if (roundingThreshold === void 0)
      roundingThreshold = RoundingThreshold$Companion_getInstance().default;
    return toString_7(numberToDouble($receiver), fractionDigits, roundingDirection, roundingThreshold);
  }
  function decimalSeparatorRegex(groupSize) {
    return Regex_init('^(' + '\\' + 'd{1,' + groupSize + '}?)(' + '\\' + 'd{' + groupSize + '})*' + '$');
  }
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  function toString_9($receiver, separator, groupSize) {
    if (groupSize === void 0)
      groupSize = 3;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (numberOfDigits($receiver) <= groupSize) {
      return $receiver.toString();
    }
     else {
      return (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = decimalSeparatorRegex(groupSize).find_905azu$($receiver.toString())) != null ? tmp$.groupValues : null) != null ? drop(tmp$_0, get_clampedInt32Value_0(L1)) : null) != null ? joinToString(tmp$_1, separator) : null) != null ? tmp$_2 : $receiver.toString();
    }
  }
  var toString_10 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.strings.toString_unfl2e$', wrapFunction(function () {
    var toString = _.org.bh.tools.base.strings.toString_30um8v$;
    var toInt64Checked = _.org.bh.tools.base.math.toInt64Checked_rtoihn$;
    return function ($receiver, separator, groupSize) {
      if (groupSize === void 0)
        groupSize = 3;
      return toString(toInt64Checked($receiver), separator, groupSize);
    };
  }));
  function isUpperCase($receiver) {
    return unboxChar(String.fromCharCode($receiver).toLowerCase().charCodeAt(0)) !== $receiver;
  }
  function isLowerCase($receiver) {
    return unboxChar(String.fromCharCode($receiver).toUpperCase().charCodeAt(0)) !== $receiver;
  }
  function toAbbreviation($receiver, delimiter) {
    if (delimiter === void 0)
      delimiter = '';
    var ret = {v: ''};
    var shouldAdd = {v: false};
    var tmp$;
    tmp$ = asIterable($receiver).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (isWhitespace(unboxChar(element))) {
        shouldAdd.v = true;
      }
       else if (shouldAdd.v || isUpperCase(unboxChar(element))) {
        var $receiver_0 = unboxChar(element);
        ret.v += plus_1(toBoxedChar(unboxChar(String.fromCharCode($receiver_0).toUpperCase().charCodeAt(0))), delimiter);
        shouldAdd.v = false;
      }
    }
    return ret.v;
  }
  function plus_0($receiver, rhs) {
    return $receiver.toString() + rhs;
  }
  function plus_1($receiver, rhs) {
    return concat($receiver, rhs);
  }
  function concat(lhs, rhs) {
    if (typeof lhs === 'string')
      return lhs + toString(rhs);
    else
      return lhs.toString() + rhs;
  }
  function containsIgnoreCase($receiver, cs) {
    return contains_0($receiver.toString().toLowerCase(), cs.toString().toLowerCase());
  }
  var repeat_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.strings.repeat_bb0mfs$', wrapFunction(function () {
    var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
    return function ($receiver, rhs) {
      return repeat($receiver, rhs.toInt());
    };
  }));
  var times_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.strings.times_bb0mfs$', wrapFunction(function () {
    var L0 = Kotlin.Long.ZERO;
    var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
    return function ($receiver, rhs) {
      return repeat($receiver, (rhs.toNumber() < 0 ? L0 : rhs).toInt());
    };
  }));
  var times_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.strings.times_6ic1pp$', wrapFunction(function () {
    var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
    return function ($receiver, rhs) {
      return repeat($receiver, rhs < 0 ? 0 : rhs);
    };
  }));
  function times$lambda(this$times) {
    return function (concatenatedString, f) {
      return concatenatedString + this$times;
    };
  }
  function times_2($receiver, rhs) {
    var tmp$;
    if (!get_hasFractionComponent(rhs)) {
      var rhs_0 = toInt64Checked(rhs);
      return repeat($receiver, (rhs_0.toNumber() < 0 ? L0 : rhs_0).toInt());
    }
    if (rhs <= 0) {
      return '';
    }
    var $receiver_0 = Kotlin.Long.fromInt(1).rangeTo(toInt64Checked(rhs).subtract(Kotlin.Long.fromInt(1)));
    var runningValue = {v: $receiver};
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      runningValue.v = times$lambda($receiver)(runningValue.v, element);
    }
    var partialRepeatingString = runningValue.v;
    var remainingCharacterCount = toInt64Checked(rounded(get_components(rhs).fractionPart * $receiver.length));
    if (remainingCharacterCount.compareTo_11rb$(L0) <= 0 || remainingCharacterCount.toNumber() >= $receiver.length) {
      tmp$ = $receiver;
    }
     else {
      tmp$ = substring($receiver, get_int32Value_10(Kotlin.Long.fromInt(0).rangeTo(remainingCharacterCount)));
    }
    return partialRepeatingString + tmp$;
  }
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  function differingCharacters($receiver, other) {
    if (equals($receiver, other)) {
      return emptyList();
    }
    var endList = ArrayList_init_0();
    var tmp$;
    tmp$ = until_1(0, min($receiver.length, other.length)).iterator();
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
    var tmp$, tmp$_0;
    var description = '{index: ' + this.index;
    if (unboxChar(this.left) != null)
      description += ", left: '" + ((tmp$ = unboxChar(this.left)) === null ? null : String.fromCharCode(tmp$)) + "'";
    if (unboxChar(this.right) != null)
      description += ", right: '" + ((tmp$_0 = unboxChar(this.right)) === null ? null : String.fromCharCode(tmp$_0)) + "'";
    return description + '}';
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
  var isNeitherNullNorEmpty = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.strings.isNeitherNullNorEmpty_5cw0du$', function ($receiver) {
    return !($receiver == null || $receiver.length === 0);
  });
  var isNeitherNullNorBlank = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.strings.isNeitherNullNorBlank_5cw0du$', wrapFunction(function () {
    var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
    return function ($receiver) {
      return !($receiver == null || isBlank($receiver));
    };
  }));
  function UIView() {
  }
  UIView.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'UIView',
    interfaces: []
  };
  function UIViewController() {
  }
  UIViewController.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'UIViewController',
    interfaces: []
  };
  function UIWindow() {
  }
  UIWindow.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'UIWindow',
    interfaces: [Presentable]
  };
  function UIWindowController() {
  }
  UIWindowController.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'UIWindowController',
    interfaces: []
  };
  function DataViewController() {
  }
  DataViewController.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DataViewController',
    interfaces: []
  };
  function DataView() {
  }
  DataView.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DataView',
    interfaces: []
  };
  function Data() {
  }
  Data.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Data',
    interfaces: []
  };
  function DataAccessor() {
  }
  DataAccessor.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DataAccessor',
    interfaces: []
  };
  function Presentable() {
  }
  Presentable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Presentable',
    interfaces: []
  };
  function show($receiver) {
    $receiver.present();
  }
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
  function OpenRange(startInclusive, endInclusive) {
    OpenRange$Companion_getInstance();
    this.startInclusive = null;
    this.endInclusive = null;
    this.isEmpty_1irppb$_0 = false;
    this.isLeftOpen_d4p6p5$_0 = startInclusive == null;
    this.isRightOpen_xwkn2e$_0 = endInclusive == null;
    if (startInclusive != null && endInclusive != null && Kotlin.compareTo(startInclusive, endInclusive) > 0) {
      this.startInclusive = endInclusive;
      this.endInclusive = startInclusive;
    }
     else {
      this.startInclusive = startInclusive;
      this.endInclusive = endInclusive;
    }
    this.isOpen_4dnvc2$_0 = lazy(OpenRange$isOpen$lambda(this));
    this.isStartOpen_uu4pc0$_0 = lazy(OpenRange$isStartOpen$lambda(startInclusive));
    this.isEndOpen_l66dqx$_0 = lazy(OpenRange$isEndOpen$lambda(endInclusive));
    this.isInfinite_nxvilo$_0 = lazy(OpenRange$isInfinite$lambda(this));
    this.isPoint_6r8jr0$_0 = lazy(OpenRange$isPoint$lambda(this, startInclusive, endInclusive));
  }
  Object.defineProperty(OpenRange.prototype, 'isEmpty', {
    get: function () {
      return this.isEmpty_1irppb$_0;
    }
  });
  Object.defineProperty(OpenRange.prototype, 'isOpen', {
    get: function () {
      return this.isOpen_4dnvc2$_0.value;
    }
  });
  Object.defineProperty(OpenRange.prototype, 'isStartOpen', {
    get: function () {
      return this.isStartOpen_uu4pc0$_0.value;
    }
  });
  Object.defineProperty(OpenRange.prototype, 'isEndOpen', {
    get: function () {
      return this.isEndOpen_l66dqx$_0.value;
    }
  });
  Object.defineProperty(OpenRange.prototype, 'isInfinite', {
    get: function () {
      return this.isInfinite_nxvilo$_0.value;
    }
  });
  Object.defineProperty(OpenRange.prototype, 'isPoint', {
    get: function () {
      return this.isPoint_6r8jr0$_0.value;
    }
  });
  OpenRange.prototype.contains_mef7kx$ = function (value) {
    var tmp$;
    if (Kotlin.isNumber(value)) {
      var get_isNativeFraction$result;
      if (typeof value === 'number' || typeof value === 'number') {
        get_isNativeFraction$result = true;
      }
       else {
        get_isNativeFraction$result = false;
      }
      var tmp$_0 = get_isNativeFraction$result;
      if (tmp$_0) {
        tmp$_0 = isNaN_0(numberToDouble(value));
      }
      if (tmp$_0)
        return false;
      else {
        var get_isNativeFraction$result_0;
        if (typeof value === 'number' || typeof value === 'number') {
          get_isNativeFraction$result_0 = true;
        }
         else {
          get_isNativeFraction$result_0 = false;
        }
        var tmp$_1 = get_isNativeFraction$result_0;
        if (tmp$_1) {
          tmp$_1 = isInfinite(numberToDouble(value));
        }
        var tmp$_2 = tmp$_1;
        if (tmp$_2) {
          tmp$_2 = numberToDouble(value) < 0.0;
        }
        if (tmp$_2)
          return this.startInclusive == null;
        else {
          var get_isNativeFraction$result_1;
          if (typeof value === 'number' || typeof value === 'number') {
            get_isNativeFraction$result_1 = true;
          }
           else {
            get_isNativeFraction$result_1 = false;
          }
          var tmp$_3 = get_isNativeFraction$result_1;
          if (tmp$_3) {
            tmp$_3 = isInfinite(numberToDouble(value));
          }
          var tmp$_4 = tmp$_3;
          if (tmp$_4) {
            tmp$_4 = numberToDouble(value) > 0.0;
          }
          if (tmp$_4)
            return this.endInclusive == null;
        }
      }
    }
    if (this.startInclusive != null && Kotlin.compareTo(value, this.startInclusive) < 0)
      tmp$ = false;
    else if (this.endInclusive != null && Kotlin.compareTo(value, this.endInclusive) > 0)
      tmp$ = false;
    else
      tmp$ = true;
    return tmp$;
  };
  OpenRange.prototype.intersects_ivq33t$ = function (other) {
    if (other.isEmpty) {
      return false;
    }
    if (this.startInclusive == null) {
      if (this.endInclusive == null) {
        return true;
      }
       else {
        if (other.startInclusive == null) {
          return true;
        }
         else {
          return Kotlin.compareTo(other.startInclusive, this.endInclusive) <= 0;
        }
      }
    }
     else {
      if (this.endInclusive == null) {
        if (other.startInclusive == null) {
          if (other.endInclusive == null) {
            return true;
          }
           else {
            return Kotlin.compareTo(this.startInclusive, other.endInclusive) <= 0;
          }
        }
         else {
          if (other.endInclusive == null) {
            return true;
          }
           else {
            return Kotlin.compareTo(this.startInclusive, other.endInclusive) <= 0;
          }
        }
      }
       else {
        if (other.startInclusive == null) {
          if (other.endInclusive == null) {
            return true;
          }
           else {
            return Kotlin.compareTo(this.startInclusive, other.endInclusive) <= 0;
          }
        }
         else {
          if (other.endInclusive == null) {
            return Kotlin.compareTo(other.startInclusive, this.endInclusive) <= 0;
          }
           else {
            return Kotlin.compareTo(this.startInclusive, other.endInclusive) <= 0 && Kotlin.compareTo(other.startInclusive, this.endInclusive) <= 0;
          }
        }
      }
    }
  };
  OpenRange.prototype.union_ivq33t$ = function (other) {
    var newStart = this.startInclusive != null && other.startInclusive != null ? min(this.startInclusive, other.startInclusive) : null;
    var newEnd = this.endInclusive != null && other.endInclusive != null ? max(this.endInclusive, other.endInclusive) : null;
    return new OpenRange(newStart, newEnd);
  };
  OpenRange.prototype.intersection_ivq33t$ = function (other) {
    var tmp$, tmp$_0;
    if (!this.intersects_ivq33t$(other)) {
      return OpenRange$Companion_getInstance().emptyRange_dahdeg$();
    }
    var newStart = this.startInclusive != null && other.startInclusive != null ? max(this.startInclusive, other.startInclusive) : (tmp$ = this.startInclusive) != null ? tmp$ : other.startInclusive;
    var newEnd = this.endInclusive != null && other.endInclusive != null ? min(this.endInclusive, other.endInclusive) : (tmp$_0 = this.endInclusive) != null ? tmp$_0 : other.endInclusive;
    return new OpenRange(newStart, newEnd);
  };
  OpenRange.prototype.containsCompletely_ivq33t$ = function (other) {
    if (this.isLeftOpen_d4p6p5$_0)
      if (this.isRightOpen_xwkn2e$_0)
        return true;
      else if (other.isRightOpen_xwkn2e$_0)
        return false;
      else
        return Kotlin.compareTo(ensureNotNull(other.endInclusive), ensureNotNull(this.endInclusive)) <= 0;
    else if (this.isRightOpen_xwkn2e$_0)
      if (other.isLeftOpen_d4p6p5$_0)
        return false;
      else
        return Kotlin.compareTo(ensureNotNull(other.startInclusive), ensureNotNull(this.startInclusive)) >= 0;
    else if (other.isLeftOpen_d4p6p5$_0 || other.isRightOpen_xwkn2e$_0)
      return false;
    else
      return this.contains_mef7kx$(ensureNotNull(other.startInclusive)) && this.contains_mef7kx$(ensureNotNull(other.endInclusive));
  };
  OpenRange.prototype.equals = function (other) {
    if (Kotlin.isType(other, OpenRange)) {
      return equals(other.startInclusive, this.startInclusive) && equals(other.endInclusive, this.endInclusive);
    }
     else {
      return false;
    }
  };
  OpenRange.prototype.hashCode = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var result = (tmp$_0 = (tmp$ = this.startInclusive) != null ? hashCode(tmp$) : null) != null ? tmp$_0 : -2147483648;
    result = (31 * result | 0) + ((tmp$_2 = (tmp$_1 = this.endInclusive) != null ? hashCode(tmp$_1) : null) != null ? tmp$_2 : 2147483647) | 0;
    return result;
  };
  OpenRange.prototype.toString = function () {
    var tmp$, tmp$_0;
    return '(' + ((tmp$ = this.startInclusive) != null ? tmp$ : '-\u221E').toString() + ', ' + ((tmp$_0 = this.endInclusive) != null ? tmp$_0 : '\u221E').toString() + ')';
  };
  function OpenRange$Companion() {
    OpenRange$Companion_instance = this;
  }
  Object.defineProperty(OpenRange$Companion.prototype, 'openStart', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.struct.OpenRange.Companion.get_openStart', function () {
      return null;
    })
  });
  Object.defineProperty(OpenRange$Companion.prototype, 'openEnd', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.struct.OpenRange.Companion.get_openEnd', function () {
      return null;
    })
  });
  OpenRange$Companion.prototype.infiniteRange_dahdeg$ = function () {
    return new OpenRange(null, null);
  };
  OpenRange$Companion.prototype.emptyRange_dahdeg$ = function () {
    return new _EmptyOpenRange();
  };
  OpenRange$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var OpenRange$Companion_instance = null;
  function OpenRange$Companion_getInstance() {
    if (OpenRange$Companion_instance === null) {
      new OpenRange$Companion();
    }
    return OpenRange$Companion_instance;
  }
  function OpenRange$isOpen$lambda(this$OpenRange) {
    return function () {
      return this$OpenRange.isStartOpen || this$OpenRange.isEndOpen;
    };
  }
  function OpenRange$isStartOpen$lambda(closure$startInclusive) {
    return function () {
      return closure$startInclusive == null;
    };
  }
  function OpenRange$isEndOpen$lambda(closure$endInclusive) {
    return function () {
      return closure$endInclusive == null;
    };
  }
  function OpenRange$isInfinite$lambda(this$OpenRange) {
    return function () {
      return this$OpenRange.isStartOpen && this$OpenRange.isEndOpen;
    };
  }
  function OpenRange$isPoint$lambda(this$OpenRange, closure$startInclusive, closure$endInclusive) {
    return function () {
      return !this$OpenRange.isOpen && equals(closure$startInclusive, closure$endInclusive);
    };
  }
  OpenRange.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OpenRange',
    interfaces: []
  };
  function OpenRange_init(onlyValue, $this) {
    $this = $this || Object.create(OpenRange.prototype);
    OpenRange.call($this, onlyValue, onlyValue);
    return $this;
  }
  var get_start = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.struct.get_start_u0ql2x$', function ($receiver) {
    return $receiver.startInclusive;
  });
  var get_end = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.struct.get_end_u0ql2x$', function ($receiver) {
    return $receiver.endInclusive;
  });
  function ComputableOpenRange(startInclusive, endInclusive) {
    OpenRange.call(this, startInclusive, endInclusive);
  }
  ComputableOpenRange.prototype.equals_kuwc22$ = function (other, tolerance) {
    var tmp$, tmp$_0;
    if (this.startInclusive == null)
      tmp$ = other.startInclusive == null;
    else {
      if (other.startInclusive == null)
        return false;
      else
        tmp$ = this.isEqual_bvgpbd$(this.startInclusive, other.startInclusive, tolerance);
    }
    var startEquals = tmp$;
    if (!startEquals) {
      return false;
    }
    if (this.endInclusive == null)
      tmp$_0 = other.endInclusive == null;
    else {
      if (other.endInclusive == null)
        return false;
      else
        tmp$_0 = this.isEqual_bvgpbd$(this.endInclusive, other.endInclusive, tolerance);
    }
    var endEquals = tmp$_0;
    return endEquals;
  };
  ComputableOpenRange.prototype.intersects_kuwc22$ = function (other, tolerance) {
    if (this.startInclusive == null) {
      if (this.endInclusive == null) {
        return true;
      }
       else {
        if (other.startInclusive == null) {
          return true;
        }
         else {
          return this.isLessThanOrEqual_bvgpbd$(other.startInclusive, this.endInclusive, tolerance);
        }
      }
    }
     else {
      if (this.endInclusive == null) {
        if (other.startInclusive == null) {
          if (other.endInclusive == null) {
            return true;
          }
           else {
            return this.isLessThanOrEqual_bvgpbd$(this.startInclusive, other.endInclusive, tolerance);
          }
        }
         else {
          if (other.endInclusive == null) {
            return true;
          }
           else {
            return this.isLessThanOrEqual_bvgpbd$(this.startInclusive, other.endInclusive, tolerance);
          }
        }
      }
       else {
        if (other.startInclusive == null) {
          if (other.endInclusive == null) {
            return true;
          }
           else {
            return this.isLessThanOrEqual_bvgpbd$(this.startInclusive, other.endInclusive, tolerance);
          }
        }
         else {
          if (other.endInclusive == null) {
            return this.isLessThanOrEqual_bvgpbd$(other.startInclusive, this.endInclusive, tolerance);
          }
           else {
            return this.isLessThanOrEqual_bvgpbd$(this.startInclusive, other.endInclusive, tolerance) && this.isLessThanOrEqual_bvgpbd$(other.startInclusive, this.endInclusive, tolerance);
          }
        }
      }
    }
  };
  ComputableOpenRange.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ComputableOpenRange',
    interfaces: [OpenRange]
  };
  function FractionOpenRange(startInclusive, endInclusive) {
    FractionOpenRange$Companion_getInstance();
    ComputableOpenRange.call(this, startInclusive, endInclusive);
    this.isPoint_qfse5a$_0 = lazy(FractionOpenRange$isPoint$lambda(this));
  }
  Object.defineProperty(FractionOpenRange.prototype, 'isPoint', {
    get: function () {
      return this.isPoint_qfse5a$_0.value;
    }
  });
  FractionOpenRange.prototype.isPoint_mef7kx$ = function (tolerance) {
    return this.startInclusive != null && this.endInclusive != null && equals_0(this.startInclusive, this.endInclusive, tolerance);
  };
  FractionOpenRange.prototype.equals_ot8f73$ = function (other) {
    return this.equals_kuwc22$(other, defaultFractionCalculationTolerance);
  };
  FractionOpenRange.prototype.isEqual_bvgpbd$ = function (lhs, rhs, tolerance) {
    return equals_0(lhs, rhs, tolerance);
  };
  FractionOpenRange.prototype.intersects_ot8f73$ = function (other) {
    return this.intersects_kuwc22$(other, defaultFractionCalculationTolerance);
  };
  FractionOpenRange.prototype.isLessThanOrEqual_bvgpbd$ = function (lhs, rhs, tolerance) {
    return isLessThanOrEqualTo(lhs, rhs, tolerance);
  };
  FractionOpenRange.prototype.intersection_ot8f73$ = function (other) {
    return FractionOpenRange$Companion_getInstance().from_99cuja$(ComputableOpenRange.prototype.intersection_ivq33t$.call(this, other));
  };
  function FractionOpenRange$Companion() {
    FractionOpenRange$Companion_instance = this;
  }
  FractionOpenRange$Companion.prototype.from_99cuja$ = function (other) {
    if (other.isEmpty) {
      return this.emptyRange();
    }
     else {
      return new FractionOpenRange(other.startInclusive, other.endInclusive);
    }
  };
  FractionOpenRange$Companion.prototype.emptyRange = function () {
    return FractionOpenRange$Companion$empty_getInstance();
  };
  function FractionOpenRange$Companion$empty() {
    FractionOpenRange$Companion$empty_instance = this;
    FractionOpenRange.call(this, null, null);
  }
  Object.defineProperty(FractionOpenRange$Companion$empty.prototype, 'isOpen', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.struct.FractionOpenRange.Companion.empty.get_isOpen', function () {
      return false;
    })
  });
  Object.defineProperty(FractionOpenRange$Companion$empty.prototype, 'isEmpty', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.struct.FractionOpenRange.Companion.empty.get_isEmpty', function () {
      return true;
    })
  });
  FractionOpenRange$Companion$empty.prototype.contains_mef7kx$ = function (value) {
    return false;
  };
  FractionOpenRange$Companion$empty.prototype.intersects_ivq33t$ = function (other) {
    return false;
  };
  FractionOpenRange$Companion$empty.prototype.intersects_ot8f73$ = function (other) {
    return false;
  };
  FractionOpenRange$Companion$empty.prototype.intersects_kuwc22$ = function (other, tolerance) {
    return false;
  };
  FractionOpenRange$Companion$empty.prototype.intersection_ivq33t$ = function (other) {
    return this;
  };
  FractionOpenRange$Companion$empty.prototype.intersection_ot8f73$ = function (other) {
    return this;
  };
  Object.defineProperty(FractionOpenRange$Companion$empty.prototype, 'isStartOpen', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.struct.FractionOpenRange.Companion.empty.get_isStartOpen', function () {
      return false;
    })
  });
  Object.defineProperty(FractionOpenRange$Companion$empty.prototype, 'isEndOpen', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.struct.FractionOpenRange.Companion.empty.get_isEndOpen', function () {
      return false;
    })
  });
  Object.defineProperty(FractionOpenRange$Companion$empty.prototype, 'isInfinite', {
    get: function () {
      return false;
    }
  });
  Object.defineProperty(FractionOpenRange$Companion$empty.prototype, 'isPoint', {
    get: function () {
      return false;
    }
  });
  FractionOpenRange$Companion$empty.prototype.equals = function (other) {
    return Kotlin.isType(other, OpenRange) && other.isEmpty;
  };
  FractionOpenRange$Companion$empty.prototype.equals_ot8f73$ = function (other) {
    return other.isEmpty;
  };
  FractionOpenRange$Companion$empty.prototype.hashCode = function () {
    return 1;
  };
  FractionOpenRange$Companion$empty.prototype.isPoint_mef7kx$ = function (tolerance) {
    return false;
  };
  FractionOpenRange$Companion$empty.prototype.toString = function () {
    return '(empty)';
  };
  FractionOpenRange$Companion$empty.prototype.union_ivq33t$ = function (other) {
    return other;
  };
  FractionOpenRange$Companion$empty.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'empty',
    interfaces: [FractionOpenRange]
  };
  var FractionOpenRange$Companion$empty_instance = null;
  function FractionOpenRange$Companion$empty_getInstance() {
    if (FractionOpenRange$Companion$empty_instance === null) {
      new FractionOpenRange$Companion$empty();
    }
    return FractionOpenRange$Companion$empty_instance;
  }
  FractionOpenRange$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FractionOpenRange$Companion_instance = null;
  function FractionOpenRange$Companion_getInstance() {
    if (FractionOpenRange$Companion_instance === null) {
      new FractionOpenRange$Companion();
    }
    return FractionOpenRange$Companion_instance;
  }
  function FractionOpenRange$isPoint$lambda(this$FractionOpenRange) {
    return function () {
      return this$FractionOpenRange.isPoint_mef7kx$(defaultFractionCalculationTolerance);
    };
  }
  FractionOpenRange.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FractionOpenRange',
    interfaces: [ComputableOpenRange]
  };
  function FractionOpenRange_init(onlyValue, $this) {
    $this = $this || Object.create(FractionOpenRange.prototype);
    FractionOpenRange.call($this, onlyValue, onlyValue);
    return $this;
  }
  function get_fractionValue_7($receiver) {
    var tmp$, tmp$_0;
    if (Kotlin.isType($receiver, FractionOpenRange))
      return $receiver;
    else {
      return new FractionOpenRange((tmp$ = $receiver.startInclusive) != null ? numberToDouble(tmp$) : null, (tmp$_0 = $receiver.endInclusive) != null ? numberToDouble(tmp$_0) : null);
    }
  }
  var get_location = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.struct.get_location_fesz6v$', function ($receiver) {
    return $receiver.start;
  });
  var get_size = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.struct.get_size_w88xvb$', function ($receiver) {
    return $receiver.endInclusive - $receiver.start | 0;
  });
  var get_length_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.struct.get_length_w88xvb$', function ($receiver) {
    return $receiver.endInclusive - $receiver.start | 0;
  });
  var get_count_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.struct.get_count_w88xvb$', function ($receiver) {
    return $receiver.endInclusive - $receiver.start | 0;
  });
  var get_min_5 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.struct.get_min_fesz6v$', function ($receiver) {
    return $receiver.start;
  });
  var get_max_5 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.struct.get_max_fesz6v$', function ($receiver) {
    return $receiver.endInclusive;
  });
  function containsCompletely($receiver, other) {
    return $receiver.contains_mef7kx$(other.start) && $receiver.contains_mef7kx$(other.endInclusive);
  }
  function isWithin_0($receiver, range) {
    return range.contains_mef7kx$($receiver);
  }
  function _EmptyOpenRange() {
    OpenRange.call(this, null, null);
  }
  Object.defineProperty(_EmptyOpenRange.prototype, 'isOpen', {
    get: function () {
      return false;
    }
  });
  Object.defineProperty(_EmptyOpenRange.prototype, 'isEmpty', {
    get: function () {
      return true;
    }
  });
  _EmptyOpenRange.prototype.contains_mef7kx$ = function (value) {
    return false;
  };
  _EmptyOpenRange.prototype.intersects_ivq33t$ = function (other) {
    return false;
  };
  _EmptyOpenRange.prototype.intersection_ivq33t$ = function (other) {
    return this;
  };
  Object.defineProperty(_EmptyOpenRange.prototype, 'isStartOpen', {
    get: function () {
      return false;
    }
  });
  Object.defineProperty(_EmptyOpenRange.prototype, 'isEndOpen', {
    get: function () {
      return false;
    }
  });
  Object.defineProperty(_EmptyOpenRange.prototype, 'isInfinite', {
    get: function () {
      return false;
    }
  });
  Object.defineProperty(_EmptyOpenRange.prototype, 'isPoint', {
    get: function () {
      return false;
    }
  });
  _EmptyOpenRange.prototype.equals = function (other) {
    return Kotlin.isType(other, OpenRange) && other.isEmpty;
  };
  _EmptyOpenRange.prototype.hashCode = function () {
    return 0;
  };
  _EmptyOpenRange.prototype.toString = function () {
    return '(empty)';
  };
  _EmptyOpenRange.prototype.union_ivq33t$ = function (other) {
    return other;
  };
  _EmptyOpenRange.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: '_EmptyOpenRange',
    interfaces: [OpenRange]
  };
  function ClosedRange(onlyValue) {
    return rangeTo_0(onlyValue, onlyValue);
  }
  function ClosedRange_0(start, endInclusive) {
    return Kotlin.compareTo(start, endInclusive) > 0 ? rangeTo_0(endInclusive, start) : rangeTo_0(start, endInclusive);
  }
  function ClosedRange_1(location, length) {
    return length < 0 ? new IntRange(location + length | 0, location) : new IntRange(location, location + length | 0);
  }
  function get_lowerBound($receiver) {
    return min($receiver.start, $receiver.endInclusive);
  }
  function get_upperBound($receiver) {
    return max($receiver.start, $receiver.endInclusive);
  }
  function compareTo($receiver, other) {
    if (equals($receiver.start, other.start)) {
      if (equals($receiver.endInclusive, other.endInclusive)) {
        return 0;
      }
       else {
        return Kotlin.compareTo($receiver.endInclusive, other.endInclusive) < 0 ? -1 : 1;
      }
    }
     else {
      return Kotlin.compareTo($receiver.start, other.start) < 0 ? -1 : 1;
    }
  }
  function get_size_0($receiver) {
    return $receiver.endInclusive.subtract($receiver.start);
  }
  function get_size_1($receiver) {
    return $receiver.endInclusive - $receiver.start;
  }
  function get_fractionValue_8($receiver) {
    return ClosedRange_0(numberToDouble($receiver.start), numberToDouble($receiver.endInclusive));
  }
  function SortClosedRanges() {
  }
  SortClosedRanges.prototype.compare_xwzc9q$ = function (lhs, rhs) {
    return ComparisonResult$Companion_getInstance().invoke_3p81yu$(compareTo(lhs, rhs));
  };
  SortClosedRanges.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SortClosedRanges',
    interfaces: [Comparator]
  };
  function get_int32Value_10($receiver) {
    return Kotlin.isType($receiver, IntRange) ? $receiver : new IntRange(toInt32Checked($receiver.start), toInt32Checked($receiver.endInclusive));
  }
  function get_integerValue_10($receiver) {
    return Kotlin.isType($receiver, LongRange) ? $receiver : new LongRange(toInt64Checked($receiver.start), toInt64Checked($receiver.endInclusive));
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
  function Version(stages, channel) {
    if (channel === void 0)
      channel = VersionChannel$stable_getInstance();
    this.stages = stages;
    this.channel = channel;
    this.cachedStringValue_uaanwh$_0 = lazy(Version$cachedStringValue$lambda(this));
  }
  Object.defineProperty(Version.prototype, 'cachedStringValue_0', {
    get: function () {
      return this.cachedStringValue_uaanwh$_0.value;
    }
  });
  Version.prototype.toString = function () {
    return this.cachedStringValue_0;
  };
  Version.prototype.compareTo_11rb$ = function (other) {
    return this.compareTo64_11rb$(other).toInt();
  };
  Version.prototype.compareTo64_11rb$ = function (otherComparable) {
    var tmp$, tmp$_0, tmp$_1;
    if (this.equals(otherComparable))
      tmp$_1 = L0;
    else if (this.channel !== otherComparable.channel)
      tmp$_1 = Kotlin.Long.fromInt(this.channel.ordinal - otherComparable.channel.ordinal | 0);
    else {
      var l = min(this.stages.size, otherComparable.stages.size);
      var $receiver = until_1(0, l);
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_2;
        tmp$_2 = $receiver.iterator();
        while (tmp$_2.hasNext()) {
          var element = tmp$_2.next();
          if (!equals(this.stages.get_za3lpa$(element), otherComparable.stages.get_za3lpa$(element))) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }
        }
        firstOrNull$result = null;
      }
       while (false);
      tmp$_1 = (tmp$_0 = (tmp$ = firstOrNull$result) != null ? this.stages.get_za3lpa$(tmp$).subtract(otherComparable.stages.get_za3lpa$(tmp$)) : null) != null ? tmp$_0 : toInt64Checked(this.stages.size - otherComparable.stages.size | 0);
    }
    return tmp$_1;
  };
  function Version$cachedStringValue$lambda(this$Version) {
    return function () {
      return toString_2(this$Version.stages, void 0, '.') + String.fromCharCode(unboxChar(this$Version.channel.unicode));
    };
  }
  Version.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Version',
    interfaces: [Comparable64]
  };
  function Version_init(stages, channel, $this) {
    if (channel === void 0)
      channel = VersionChannel$stable_getInstance();
    $this = $this || Object.create(Version.prototype);
    Version.call($this, asList(stages), channel);
    return $this;
  }
  Version.prototype.component1 = function () {
    return this.stages;
  };
  Version.prototype.component2 = function () {
    return this.channel;
  };
  Version.prototype.copy_fnvqtw$ = function (stages, channel) {
    return new Version(stages === void 0 ? this.stages : stages, channel === void 0 ? this.channel : channel);
  };
  Version.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.stages) | 0;
    result = result * 31 + Kotlin.hashCode(this.channel) | 0;
    return result;
  };
  Version.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.stages, other.stages) && Kotlin.equals(this.channel, other.channel)))));
  };
  function v(versionStage) {
    return Version_init(versionStage.slice());
  }
  function v_0(versionStage, channel) {
    return Version_init(versionStage.slice(), channel);
  }
  function VersionChannel(name, ordinal, ascii, unicode, html) {
    Enum.call(this);
    this.ascii = toBoxedChar(ascii);
    this.unicode = toBoxedChar(unicode);
    this.html = html;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function VersionChannel_initFields() {
    VersionChannel_initFields = function () {
    };
    VersionChannel$λ_instance = new VersionChannel('\u03BB', 0, 108, 955, '&lambda;');
    VersionChannel$α_instance = new VersionChannel('\u03B1', 1, 97, 945, '&alpha;');
    VersionChannel$β_instance = new VersionChannel('\u03B2', 2, 98, 946, '&beta;');
    VersionChannel$stable_instance = new VersionChannel('stable', 3, 32, toChar(8204), '');
    VersionChannel$Companion_getInstance();
  }
  var VersionChannel$λ_instance;
  function VersionChannel$λ_getInstance() {
    VersionChannel_initFields();
    return VersionChannel$λ_instance;
  }
  var VersionChannel$α_instance;
  function VersionChannel$α_getInstance() {
    VersionChannel_initFields();
    return VersionChannel$α_instance;
  }
  var VersionChannel$β_instance;
  function VersionChannel$β_getInstance() {
    VersionChannel_initFields();
    return VersionChannel$β_instance;
  }
  var VersionChannel$stable_instance;
  function VersionChannel$stable_getInstance() {
    VersionChannel_initFields();
    return VersionChannel$stable_instance;
  }
  function VersionChannel$Companion() {
    VersionChannel$Companion_instance = this;
  }
  Object.defineProperty(VersionChannel$Companion.prototype, 'lambda', {
    get: function () {
      return VersionChannel$λ_getInstance();
    }
  });
  Object.defineProperty(VersionChannel$Companion.prototype, 'alpha', {
    get: function () {
      return VersionChannel$α_getInstance();
    }
  });
  Object.defineProperty(VersionChannel$Companion.prototype, 'beta', {
    get: function () {
      return VersionChannel$β_getInstance();
    }
  });
  VersionChannel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var VersionChannel$Companion_instance = null;
  function VersionChannel$Companion_getInstance() {
    VersionChannel_initFields();
    if (VersionChannel$Companion_instance === null) {
      new VersionChannel$Companion();
    }
    return VersionChannel$Companion_instance;
  }
  VersionChannel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VersionChannel',
    interfaces: [Enum]
  };
  function VersionChannel$values() {
    return [VersionChannel$λ_getInstance(), VersionChannel$α_getInstance(), VersionChannel$β_getInstance(), VersionChannel$stable_getInstance()];
  }
  VersionChannel.values = VersionChannel$values;
  function VersionChannel$valueOf(name) {
    switch (name) {
      case '\u03BB':
        return VersionChannel$λ_getInstance();
      case '\u03B1':
        return VersionChannel$α_getInstance();
      case '\u03B2':
        return VersionChannel$β_getInstance();
      case 'stable':
        return VersionChannel$stable_getInstance();
      default:throwISE('No enum constant org.bh.tools.base.struct.VersionChannel.' + name);
    }
  }
  VersionChannel.valueOf_61zpoe$ = VersionChannel$valueOf;
  var isDebugBuild;
  function assert$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  function assert_0(condition, message) {
    if (message === void 0)
      message = '';
    if (isDebugBuild && condition) {
      assert(false, assert$lambda(message));
    }
  }
  var assertionFailure = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.util.assertionFailure_61zpoe$', wrapFunction(function () {
    var assert = _.org.bh.tools.base.util.assert_8kj6y5$;
    return function (message) {
      if (message === void 0)
        message = '';
      assert(false, message);
    };
  }));
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
    this.lastShortIdBasis_0 = L0;
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
  var get_timeIntervalValue = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.util.get_timeIntervalValue_mz3mee$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver) {
      return numberToDouble($receiver);
    };
  }));
  var get_timeIntervalValue_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.util.get_timeIntervalValue_5vcgdc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver) {
      return numberToDouble($receiver);
    };
  }));
  var get_timeIntervalValue_1 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.util.get_timeIntervalValue_s8ev3n$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver) {
      return numberToDouble($receiver);
    };
  }));
  var get_timeIntervalValue_2 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.util.get_timeIntervalValue_mts6qi$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver) {
      return numberToDouble($receiver);
    };
  }));
  var get_timeIntervalValue_3 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.util.get_timeIntervalValue_81szk$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver) {
      return numberToDouble($receiver);
    };
  }));
  var get_timeIntervalValue_4 = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.util.get_timeIntervalValue_yrwdxr$', function ($receiver) {
    return $receiver;
  });
  function TimeConversion() {
    TimeConversion_instance = this;
    this.daysPerWeek = 7.0;
    this.daysPerYear = 365.242189;
    this.weeksPerYear = this.daysPerYear / this.daysPerWeek;
    this.hoursPerDay = 24.0;
    this.hoursPerWeek = this.hoursPerDay * this.daysPerWeek;
    this.hoursPerYear = this.hoursPerDay * this.daysPerYear;
    this.minutesPerHour = 60.0;
    this.minutesPerDay = this.minutesPerHour * this.hoursPerDay;
    this.minutesPerWeek = this.minutesPerDay * this.daysPerWeek;
    this.minutesPerYear = this.minutesPerDay * this.daysPerYear;
    this.secondsPerMinute = 60.0;
    this.secondsPerHour = this.secondsPerMinute * this.minutesPerHour;
    this.secondsPerDay = this.secondsPerHour * this.hoursPerDay;
    this.secondsPerWeek = this.secondsPerDay * this.daysPerWeek;
    this.secondsPerYear = this.secondsPerDay * this.daysPerYear;
    this.millisecondsPerSecond = 1000.0;
    this.millisecondsPerMinute = this.millisecondsPerSecond * this.secondsPerMinute;
    this.millisecondsPerHour = this.millisecondsPerSecond * this.secondsPerHour;
    this.millisecondsPerDay = this.millisecondsPerSecond * this.secondsPerDay;
    this.millisecondsPerWeek = this.millisecondsPerSecond * this.secondsPerWeek;
    this.millisecondsPerYear = this.millisecondsPerSecond * this.secondsPerYear;
    this.microsecondsPerMillisecond = 1000.0;
    this.microsecondsPerSecond = 1000000.0;
    this.microsecondsPerMinute = this.microsecondsPerSecond * this.secondsPerMinute;
    this.microsecondsPerHour = this.microsecondsPerSecond * this.secondsPerHour;
    this.microsecondsPerDay = this.microsecondsPerSecond * this.secondsPerDay;
    this.microsecondsPerWeek = this.microsecondsPerSecond * this.secondsPerWeek;
    this.microsecondsPerYear = this.microsecondsPerSecond * this.secondsPerYear;
    this.nanosecondsPerMicrosecond = 1000.0;
    this.nanosecondsPerMillisecond = 1000000.0;
    this.nanosecondsPerSecond = 1.0E9;
    this.nanosecondsPerMinute = this.nanosecondsPerSecond * this.secondsPerMinute;
    this.nanosecondsPerHour = this.nanosecondsPerSecond * this.secondsPerHour;
    this.nanosecondsPerDay = this.nanosecondsPerSecond * this.secondsPerDay;
    this.nanosecondsPerWeek = this.nanosecondsPerSecond * this.secondsPerWeek;
    this.nanosecondsPerYear = this.nanosecondsPerSecond * this.secondsPerYear;
    this.yearsPerNanosecond = 1.0 / this.nanosecondsPerYear;
    this.yearsPerMicrosecond = 1.0 / this.microsecondsPerYear;
    this.yearsPerMillisecond = 1.0 / this.millisecondsPerYear;
    this.yearsPerSecond = 1.0 / this.secondsPerYear;
    this.yearsPerMinute = 1.0 / this.minutesPerYear;
    this.yearsPerHour = 1.0 / this.hoursPerYear;
    this.yearsPerDay = 1.0 / this.daysPerYear;
    this.yearsPerWeek = 1.0 / this.weeksPerYear;
    this.weeksPerNanosecond = 1.0 / this.nanosecondsPerWeek;
    this.weeksPerMicrosecond = 1.0 / this.microsecondsPerWeek;
    this.weeksPerMillisecond = 1.0 / this.millisecondsPerWeek;
    this.weeksPerSecond = 1.0 / this.secondsPerWeek;
    this.weeksPerMinute = 1.0 / this.minutesPerWeek;
    this.weeksPerHour = 1.0 / this.hoursPerWeek;
    this.weeksPerDay = 1.0 / this.daysPerWeek;
    this.daysPerNanosecond = 1.0 / this.nanosecondsPerDay;
    this.daysPerMicrosecond = 1.0 / this.microsecondsPerDay;
    this.daysPerMillisecond = 1.0 / this.millisecondsPerDay;
    this.daysPerSecond = 1.0 / this.secondsPerDay;
    this.daysPerMinute = 1.0 / this.minutesPerDay;
    this.daysPerHour = 1.0 / this.hoursPerDay;
    this.hoursPerNanosecond = 1.0 / this.nanosecondsPerHour;
    this.hoursPerMicrosecond = 1.0 / this.microsecondsPerHour;
    this.hoursPerMillisecond = 1.0 / this.millisecondsPerHour;
    this.hoursPerSecond = 1.0 / this.secondsPerHour;
    this.hoursPerMinute = 1.0 / this.minutesPerHour;
    this.minutesPerNanosecond = 1.0 / this.nanosecondsPerMinute;
    this.minutesPerMicrosecond = 1.0 / this.microsecondsPerMinute;
    this.minutesPerMillisecond = 1.0 / this.millisecondsPerMinute;
    this.minutesPerSecond = 1.0 / this.secondsPerMinute;
    this.secondsPerNanosecond = 1.0 / this.nanosecondsPerSecond;
    this.secondsPerMicrosecond = 1.0 / this.microsecondsPerSecond;
    this.secondsPerMillisecond = 1.0 / this.millisecondsPerSecond;
    this.millisecondsPerNanosecond = 1.0 / this.nanosecondsPerMillisecond;
    this.millisecondsPerMicrosecond = 1.0 / this.microsecondsPerMillisecond;
    this.microsecondsPerNanosecond = 1.0 / this.nanosecondsPerMicrosecond;
  }
  TimeConversion.prototype.nanosecondsToTimeInterval_s8cxhz$ = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.util.TimeConversion.nanosecondsToTimeInterval_s8cxhz$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (nanoseconds) {
      return numberToDouble(nanoseconds) / this.nanosecondsPerSecond;
    };
  }));
  TimeConversion.prototype.nanosecondsToTimeInterval_14dthe$ = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.util.TimeConversion.nanosecondsToTimeInterval_14dthe$', function (nanoseconds) {
    return nanoseconds / this.nanosecondsPerSecond;
  });
  TimeConversion.prototype.millisecondsToTimeInterval_s8cxhz$ = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.util.TimeConversion.millisecondsToTimeInterval_s8cxhz$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (milliseconds) {
      return numberToDouble(milliseconds) / this.millisecondsPerSecond;
    };
  }));
  TimeConversion.prototype.millisecondsToTimeInterval_14dthe$ = defineInlineFunction('Decision-Cruncher.org.bh.tools.base.util.TimeConversion.millisecondsToTimeInterval_14dthe$', function (milliseconds) {
    return milliseconds / this.millisecondsPerSecond;
  });
  TimeConversion.prototype.convert_xvp9di$ = function (oldAmount, newUnit) {
    return new TimeAmount(oldAmount.amount * newUnit.per_luwu33$(oldAmount.unit), newUnit);
  };
  TimeConversion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'TimeConversion',
    interfaces: []
  };
  var TimeConversion_instance = null;
  function TimeConversion_getInstance() {
    if (TimeConversion_instance === null) {
      new TimeConversion();
    }
    return TimeConversion_instance;
  }
  function TimeUnit(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TimeUnit_initFields() {
    TimeUnit_initFields = function () {
    };
    TimeUnit$nanoseconds_instance = new TimeUnit('nanoseconds', 0);
    TimeUnit$microseconds_instance = new TimeUnit('microseconds', 1);
    TimeUnit$milliseconds_instance = new TimeUnit('milliseconds', 2);
    TimeUnit$seconds_instance = new TimeUnit('seconds', 3);
    TimeUnit$minutes_instance = new TimeUnit('minutes', 4);
    TimeUnit$hours_instance = new TimeUnit('hours', 5);
    TimeUnit$days_instance = new TimeUnit('days', 6);
    TimeUnit$weeks_instance = new TimeUnit('weeks', 7);
    TimeUnit$years_instance = new TimeUnit('years', 8);
    TimeUnit$Companion_getInstance();
  }
  var TimeUnit$nanoseconds_instance;
  function TimeUnit$nanoseconds_getInstance() {
    TimeUnit_initFields();
    return TimeUnit$nanoseconds_instance;
  }
  var TimeUnit$microseconds_instance;
  function TimeUnit$microseconds_getInstance() {
    TimeUnit_initFields();
    return TimeUnit$microseconds_instance;
  }
  var TimeUnit$milliseconds_instance;
  function TimeUnit$milliseconds_getInstance() {
    TimeUnit_initFields();
    return TimeUnit$milliseconds_instance;
  }
  var TimeUnit$seconds_instance;
  function TimeUnit$seconds_getInstance() {
    TimeUnit_initFields();
    return TimeUnit$seconds_instance;
  }
  var TimeUnit$minutes_instance;
  function TimeUnit$minutes_getInstance() {
    TimeUnit_initFields();
    return TimeUnit$minutes_instance;
  }
  var TimeUnit$hours_instance;
  function TimeUnit$hours_getInstance() {
    TimeUnit_initFields();
    return TimeUnit$hours_instance;
  }
  var TimeUnit$days_instance;
  function TimeUnit$days_getInstance() {
    TimeUnit_initFields();
    return TimeUnit$days_instance;
  }
  var TimeUnit$weeks_instance;
  function TimeUnit$weeks_getInstance() {
    TimeUnit_initFields();
    return TimeUnit$weeks_instance;
  }
  var TimeUnit$years_instance;
  function TimeUnit$years_getInstance() {
    TimeUnit_initFields();
    return TimeUnit$years_instance;
  }
  TimeUnit.prototype.per_luwu33$ = function (other) {
    switch (this.name) {
      case 'nanoseconds':
        switch (other.name) {
          case 'nanoseconds':
            return 1.0;
          case 'microseconds':
            return TimeConversion_getInstance().nanosecondsPerMicrosecond;
          case 'milliseconds':
            return TimeConversion_getInstance().nanosecondsPerMillisecond;
          case 'seconds':
            return TimeConversion_getInstance().nanosecondsPerSecond;
          case 'minutes':
            return TimeConversion_getInstance().nanosecondsPerMinute;
          case 'hours':
            return TimeConversion_getInstance().nanosecondsPerHour;
          case 'days':
            return TimeConversion_getInstance().nanosecondsPerDay;
          case 'weeks':
            return TimeConversion_getInstance().nanosecondsPerWeek;
          case 'years':
            return TimeConversion_getInstance().nanosecondsPerYear;
          default:return Kotlin.noWhenBranchMatched();
        }

      case 'microseconds':
        switch (other.name) {
          case 'nanoseconds':
            return TimeConversion_getInstance().microsecondsPerNanosecond;
          case 'microseconds':
            return 1.0;
          case 'milliseconds':
            return TimeConversion_getInstance().microsecondsPerMillisecond;
          case 'seconds':
            return TimeConversion_getInstance().microsecondsPerSecond;
          case 'minutes':
            return TimeConversion_getInstance().microsecondsPerMinute;
          case 'hours':
            return TimeConversion_getInstance().microsecondsPerHour;
          case 'days':
            return TimeConversion_getInstance().microsecondsPerDay;
          case 'weeks':
            return TimeConversion_getInstance().microsecondsPerWeek;
          case 'years':
            return TimeConversion_getInstance().microsecondsPerYear;
          default:return Kotlin.noWhenBranchMatched();
        }

      case 'milliseconds':
        switch (other.name) {
          case 'nanoseconds':
            return TimeConversion_getInstance().millisecondsPerNanosecond;
          case 'microseconds':
            return TimeConversion_getInstance().millisecondsPerMicrosecond;
          case 'milliseconds':
            return 1.0;
          case 'seconds':
            return TimeConversion_getInstance().millisecondsPerSecond;
          case 'minutes':
            return TimeConversion_getInstance().millisecondsPerMinute;
          case 'hours':
            return TimeConversion_getInstance().millisecondsPerHour;
          case 'days':
            return TimeConversion_getInstance().millisecondsPerDay;
          case 'weeks':
            return TimeConversion_getInstance().millisecondsPerWeek;
          case 'years':
            return TimeConversion_getInstance().millisecondsPerYear;
          default:return Kotlin.noWhenBranchMatched();
        }

      case 'seconds':
        switch (other.name) {
          case 'nanoseconds':
            return TimeConversion_getInstance().secondsPerNanosecond;
          case 'microseconds':
            return TimeConversion_getInstance().secondsPerMicrosecond;
          case 'milliseconds':
            return TimeConversion_getInstance().secondsPerMillisecond;
          case 'seconds':
            return 1.0;
          case 'minutes':
            return TimeConversion_getInstance().secondsPerMinute;
          case 'hours':
            return TimeConversion_getInstance().secondsPerHour;
          case 'days':
            return TimeConversion_getInstance().secondsPerDay;
          case 'weeks':
            return TimeConversion_getInstance().secondsPerWeek;
          case 'years':
            return TimeConversion_getInstance().secondsPerYear;
          default:return Kotlin.noWhenBranchMatched();
        }

      case 'minutes':
        switch (other.name) {
          case 'nanoseconds':
            return TimeConversion_getInstance().minutesPerNanosecond;
          case 'microseconds':
            return TimeConversion_getInstance().minutesPerMicrosecond;
          case 'milliseconds':
            return TimeConversion_getInstance().minutesPerMillisecond;
          case 'seconds':
            return TimeConversion_getInstance().minutesPerSecond;
          case 'minutes':
            return 1.0;
          case 'hours':
            return TimeConversion_getInstance().minutesPerHour;
          case 'days':
            return TimeConversion_getInstance().minutesPerDay;
          case 'weeks':
            return TimeConversion_getInstance().minutesPerWeek;
          case 'years':
            return TimeConversion_getInstance().minutesPerYear;
          default:return Kotlin.noWhenBranchMatched();
        }

      case 'hours':
        switch (other.name) {
          case 'nanoseconds':
            return TimeConversion_getInstance().hoursPerNanosecond;
          case 'microseconds':
            return TimeConversion_getInstance().hoursPerMicrosecond;
          case 'milliseconds':
            return TimeConversion_getInstance().hoursPerMillisecond;
          case 'seconds':
            return TimeConversion_getInstance().hoursPerSecond;
          case 'minutes':
            return TimeConversion_getInstance().hoursPerMinute;
          case 'hours':
            return 1.0;
          case 'days':
            return TimeConversion_getInstance().hoursPerDay;
          case 'weeks':
            return TimeConversion_getInstance().hoursPerWeek;
          case 'years':
            return TimeConversion_getInstance().hoursPerYear;
          default:return Kotlin.noWhenBranchMatched();
        }

      case 'days':
        switch (other.name) {
          case 'nanoseconds':
            return TimeConversion_getInstance().daysPerNanosecond;
          case 'microseconds':
            return TimeConversion_getInstance().daysPerMicrosecond;
          case 'milliseconds':
            return TimeConversion_getInstance().daysPerMillisecond;
          case 'seconds':
            return TimeConversion_getInstance().daysPerSecond;
          case 'minutes':
            return TimeConversion_getInstance().daysPerMinute;
          case 'hours':
            return TimeConversion_getInstance().daysPerHour;
          case 'days':
            return 1.0;
          case 'weeks':
            return TimeConversion_getInstance().daysPerWeek;
          case 'years':
            return TimeConversion_getInstance().daysPerYear;
          default:return Kotlin.noWhenBranchMatched();
        }

      case 'weeks':
        switch (other.name) {
          case 'nanoseconds':
            return TimeConversion_getInstance().weeksPerNanosecond;
          case 'microseconds':
            return TimeConversion_getInstance().weeksPerMicrosecond;
          case 'milliseconds':
            return TimeConversion_getInstance().weeksPerMillisecond;
          case 'seconds':
            return TimeConversion_getInstance().weeksPerSecond;
          case 'minutes':
            return TimeConversion_getInstance().weeksPerMinute;
          case 'hours':
            return TimeConversion_getInstance().weeksPerHour;
          case 'days':
            return TimeConversion_getInstance().weeksPerDay;
          case 'weeks':
            return 1.0;
          case 'years':
            return TimeConversion_getInstance().weeksPerYear;
          default:return Kotlin.noWhenBranchMatched();
        }

      case 'years':
        switch (other.name) {
          case 'nanoseconds':
            return TimeConversion_getInstance().yearsPerNanosecond;
          case 'microseconds':
            return TimeConversion_getInstance().yearsPerMicrosecond;
          case 'milliseconds':
            return TimeConversion_getInstance().yearsPerMillisecond;
          case 'seconds':
            return TimeConversion_getInstance().yearsPerSecond;
          case 'minutes':
            return TimeConversion_getInstance().yearsPerMinute;
          case 'hours':
            return TimeConversion_getInstance().yearsPerHour;
          case 'days':
            return TimeConversion_getInstance().yearsPerDay;
          case 'weeks':
            return TimeConversion_getInstance().yearsPerWeek;
          case 'years':
            return 1.0;
          default:return Kotlin.noWhenBranchMatched();
        }

      default:return Kotlin.noWhenBranchMatched();
    }
  };
  function TimeUnit$Companion() {
    TimeUnit$Companion_instance = this;
  }
  Object.defineProperty(TimeUnit$Companion.prototype, 'nanosecond', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.util.TimeUnit.Companion.get_nanosecond', wrapFunction(function () {
      var TimeUnit = _.org.bh.tools.base.util.TimeUnit;
      return function () {
        return TimeUnit.nanoseconds;
      };
    }))
  });
  Object.defineProperty(TimeUnit$Companion.prototype, 'microsecond', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.util.TimeUnit.Companion.get_microsecond', wrapFunction(function () {
      var TimeUnit = _.org.bh.tools.base.util.TimeUnit;
      return function () {
        return TimeUnit.microseconds;
      };
    }))
  });
  Object.defineProperty(TimeUnit$Companion.prototype, 'millisecond', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.util.TimeUnit.Companion.get_millisecond', wrapFunction(function () {
      var TimeUnit = _.org.bh.tools.base.util.TimeUnit;
      return function () {
        return TimeUnit.milliseconds;
      };
    }))
  });
  Object.defineProperty(TimeUnit$Companion.prototype, 'second', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.util.TimeUnit.Companion.get_second', wrapFunction(function () {
      var TimeUnit = _.org.bh.tools.base.util.TimeUnit;
      return function () {
        return TimeUnit.seconds;
      };
    }))
  });
  Object.defineProperty(TimeUnit$Companion.prototype, 'minute', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.util.TimeUnit.Companion.get_minute', wrapFunction(function () {
      var TimeUnit = _.org.bh.tools.base.util.TimeUnit;
      return function () {
        return TimeUnit.minutes;
      };
    }))
  });
  Object.defineProperty(TimeUnit$Companion.prototype, 'hour', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.util.TimeUnit.Companion.get_hour', wrapFunction(function () {
      var TimeUnit = _.org.bh.tools.base.util.TimeUnit;
      return function () {
        return TimeUnit.hours;
      };
    }))
  });
  Object.defineProperty(TimeUnit$Companion.prototype, 'day', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.util.TimeUnit.Companion.get_day', wrapFunction(function () {
      var TimeUnit = _.org.bh.tools.base.util.TimeUnit;
      return function () {
        return TimeUnit.days;
      };
    }))
  });
  Object.defineProperty(TimeUnit$Companion.prototype, 'week', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.util.TimeUnit.Companion.get_week', wrapFunction(function () {
      var TimeUnit = _.org.bh.tools.base.util.TimeUnit;
      return function () {
        return TimeUnit.weeks;
      };
    }))
  });
  Object.defineProperty(TimeUnit$Companion.prototype, 'year', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.util.TimeUnit.Companion.get_year', wrapFunction(function () {
      var TimeUnit = _.org.bh.tools.base.util.TimeUnit;
      return function () {
        return TimeUnit.years;
      };
    }))
  });
  Object.defineProperty(TimeUnit$Companion.prototype, 'interval', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.util.TimeUnit.Companion.get_interval', wrapFunction(function () {
      var TimeUnit = _.org.bh.tools.base.util.TimeUnit;
      return function () {
        return TimeUnit.seconds;
      };
    }))
  });
  Object.defineProperty(TimeUnit$Companion.prototype, 'timeInterval', {
    get: defineInlineFunction('Decision-Cruncher.org.bh.tools.base.util.TimeUnit.Companion.get_timeInterval', wrapFunction(function () {
      var TimeUnit = _.org.bh.tools.base.util.TimeUnit;
      return function () {
        return TimeUnit.seconds;
      };
    }))
  });
  TimeUnit$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TimeUnit$Companion_instance = null;
  function TimeUnit$Companion_getInstance() {
    TimeUnit_initFields();
    if (TimeUnit$Companion_instance === null) {
      new TimeUnit$Companion();
    }
    return TimeUnit$Companion_instance;
  }
  TimeUnit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeUnit',
    interfaces: [Enum, Comparable]
  };
  function TimeUnit$values() {
    return [TimeUnit$nanoseconds_getInstance(), TimeUnit$microseconds_getInstance(), TimeUnit$milliseconds_getInstance(), TimeUnit$seconds_getInstance(), TimeUnit$minutes_getInstance(), TimeUnit$hours_getInstance(), TimeUnit$days_getInstance(), TimeUnit$weeks_getInstance(), TimeUnit$years_getInstance()];
  }
  TimeUnit.values = TimeUnit$values;
  function TimeUnit$valueOf(name) {
    switch (name) {
      case 'nanoseconds':
        return TimeUnit$nanoseconds_getInstance();
      case 'microseconds':
        return TimeUnit$microseconds_getInstance();
      case 'milliseconds':
        return TimeUnit$milliseconds_getInstance();
      case 'seconds':
        return TimeUnit$seconds_getInstance();
      case 'minutes':
        return TimeUnit$minutes_getInstance();
      case 'hours':
        return TimeUnit$hours_getInstance();
      case 'days':
        return TimeUnit$days_getInstance();
      case 'weeks':
        return TimeUnit$weeks_getInstance();
      case 'years':
        return TimeUnit$years_getInstance();
      default:throwISE('No enum constant org.bh.tools.base.util.TimeUnit.' + name);
    }
  }
  TimeUnit.valueOf_61zpoe$ = TimeUnit$valueOf;
  function TimeAmount(amount, unit) {
    this.amount = amount;
    this.unit = unit;
  }
  TimeAmount.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeAmount',
    interfaces: []
  };
  TimeAmount.prototype.component1 = function () {
    return this.amount;
  };
  TimeAmount.prototype.component2 = function () {
    return this.unit;
  };
  TimeAmount.prototype.copy_f5iv0d$ = function (amount, unit) {
    return new TimeAmount(amount === void 0 ? this.amount : amount, unit === void 0 ? this.unit : unit);
  };
  TimeAmount.prototype.toString = function () {
    return 'TimeAmount(amount=' + Kotlin.toString(this.amount) + (', unit=' + Kotlin.toString(this.unit)) + ')';
  };
  TimeAmount.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.amount) | 0;
    result = result * 31 + Kotlin.hashCode(this.unit) | 0;
    return result;
  };
  TimeAmount.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.amount, other.amount) && Kotlin.equals(this.unit, other.unit)))));
  };
  function get_asMilliseconds($receiver) {
    return new TimeAmount($receiver, TimeUnit$milliseconds_getInstance());
  }
  function get_asNanoseconds($receiver) {
    return new TimeAmount($receiver, TimeUnit$nanoseconds_getInstance());
  }
  function get_seconds($receiver) {
    return convert($receiver, TimeUnit$seconds_getInstance());
  }
  function get_timeIntervalValue_5($receiver) {
    return convert($receiver, TimeUnit.seconds).amount;
  }
  function convert($receiver, to) {
    return TimeConversion_getInstance().convert_xvp9di$($receiver, to);
  }
  var alsoLog = defineInlineFunction('Decision-Cruncher.org.bh.tools.io.logging.alsoLog_vxumlc$', wrapFunction(function () {
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
  var log = defineInlineFunction('Decision-Cruncher.org.bh.tools.io.logging.log_hyc7mn$', wrapFunction(function () {
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
  var log_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.io.logging.log_7uhc0p$', wrapFunction(function () {
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
  var consoleLogString = defineInlineFunction('Decision-Cruncher.org.bh.tools.io.logging.consoleLogString_61zpoe$', function (message) {
    console.log(message);
  });
  var consoleLog = defineInlineFunction('Decision-Cruncher.org.bh.tools.io.logging.consoleLog_mh5how$', function (object) {
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
      var $receiver = this.allParameters;
      var runningValue = {v: json([])};
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        runningValue.v = HttpRequest$RequestParameters$toRequestJson$lambda(runningValue.v, element);
      }
      return runningValue.v;
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
      var destination = ArrayList_init_0();
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
      var destination = ArrayList_init_0();
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
      var destination = ArrayList_init_0();
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
  var deepCopy_0 = defineInlineFunction('Decision-Cruncher.org.bh.tools.io.net.deepCopy_wace04$', wrapFunction(function () {
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
    this.id_hn756u$_0 = id;
    this.representedObject_uz25h5$_0 = observing(new TernaryCheckboxData(text, this.generateStateBasedOnChildren_xoe7k0$_0()), void 0, void 0, TernaryCheckboxTree$representedObject$lambda(this));
    this.representedObjectChangeObservers_q3w1hq$_0 = ArrayList_init_0();
    this.shouldUpdateChildrenBasedOnState_uc0g85$_0 = true;
    this.shouldUpdateStateBasedOnChildren_xmc661$_0 = true;
    var tmp$;
    tmp$ = this.children.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.onRepresentedObjectDidChange_nrmh93$(TernaryCheckboxTree_init$lambda$lambda(this));
    }
    this.updateStateBasedOnChildren_vw7nbo$_0();
  }
  Object.defineProperty(TernaryCheckboxTree.prototype, 'id', {
    get: function () {
      return this.id_hn756u$_0;
    }
  });
  var TernaryCheckboxTree$representedObject_metadata = new PropertyMetadata('representedObject');
  Object.defineProperty(TernaryCheckboxTree.prototype, 'representedObject', {
    get: function () {
      return this.representedObject_uz25h5$_0.getValue_lrcp0p$(this, TernaryCheckboxTree$representedObject_metadata);
    },
    set: function (representedObject) {
      this.representedObject_uz25h5$_0.setValue_9rddgb$(this, TernaryCheckboxTree$representedObject_metadata, representedObject);
    }
  });
  TernaryCheckboxTree.prototype.onRepresentedObjectDidChange_nrmh93$ = function (onRepresentedObjectChange) {
    this.representedObjectChangeObservers_q3w1hq$_0.add_11rb$(onRepresentedObjectChange);
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
    if (!this.shouldUpdateStateBasedOnChildren_xmc661$_0) {
      return;
    }
    this.shouldUpdateChildrenBasedOnState_uc0g85$_0 = false;
    this.state = this.generateStateBasedOnChildren_xoe7k0$_0();
    this.shouldUpdateChildrenBasedOnState_uc0g85$_0 = true;
  };
  TernaryCheckboxTree.prototype.generateStateBasedOnChildren_xoe7k0$_0 = function () {
    var tmp$;
    tmp$ = invoke_3(FiniteAmountSummary$Companion_getInstance(), this.children);
    if (Kotlin.isType(tmp$, FiniteAmountSummary$all))
      return Ternary$true_getInstance();
    else if (Kotlin.isType(tmp$, FiniteAmountSummary$none))
      return Ternary$false_getInstance();
    else if (Kotlin.isType(tmp$, FiniteAmountSummary$some))
      return Ternary$indeterminate_getInstance();
    else
      return Kotlin.noWhenBranchMatched();
  };
  TernaryCheckboxTree.prototype.deinit = function () {
    this.representedObjectChangeObservers_q3w1hq$_0.clear();
  };
  function TernaryCheckboxTree$representedObject$lambda(this$TernaryCheckboxTree) {
    return function (old, new_0) {
      var tmp$;
      tmp$ = this$TernaryCheckboxTree.representedObjectChangeObservers_q3w1hq$_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element(old, new_0);
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
    var tmp$ = FiniteAmountSummary$Companion_getInstance();
    var runningValue = {v: 0.0};
    var tmp$_0;
    tmp$_0 = checkboxes.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      runningValue.v = invoke$lambda(runningValue.v, element);
    }
    return invoke_0(tmp$, runningValue.v, checkboxes.size);
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
  var or = defineInlineFunction('Decision-Cruncher.RentSplit.or_qxw4fl$', wrapFunction(function () {
    var SelectorCombiner$SelectorCombiner$either_init = _.RentSplit.SelectorCombiner.either;
    return function ($receiver, rhs) {
      return new SelectorCombiner$SelectorCombiner$either_init($receiver, rhs);
    };
  }));
  var containing = defineInlineFunction('Decision-Cruncher.RentSplit.containing_qxw4fl$', wrapFunction(function () {
    var SelectorCombiner$SelectorCombiner$container_init = _.RentSplit.SelectorCombiner.container;
    return function ($receiver, child) {
      return new SelectorCombiner$SelectorCombiner$container_init($receiver, child);
    };
  }));
  var justBefore = defineInlineFunction('Decision-Cruncher.RentSplit.justBefore_qxw4fl$', wrapFunction(function () {
    var SelectorCombiner$SelectorCombiner$immediateSibling_init = _.RentSplit.SelectorCombiner.immediateSibling;
    return function ($receiver, brother) {
      return new SelectorCombiner$SelectorCombiner$immediateSibling_init($receiver, brother);
    };
  }));
  var before = defineInlineFunction('Decision-Cruncher.RentSplit.before_qxw4fl$', wrapFunction(function () {
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
  function CheckboxData(text, state) {
    this.text_gkk1l9$_0 = text;
    this.state_g89mcp$_0 = state;
  }
  Object.defineProperty(CheckboxData.prototype, 'text', {
    get: function () {
      return this.text_gkk1l9$_0;
    },
    set: function (text) {
      this.text_gkk1l9$_0 = text;
    }
  });
  Object.defineProperty(CheckboxData.prototype, 'state', {
    get: function () {
      return this.state_g89mcp$_0;
    },
    set: function (state) {
      this.state_g89mcp$_0 = state;
    }
  });
  CheckboxData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CheckboxData',
    interfaces: [CheckboxDataBase]
  };
  CheckboxData.prototype.component1 = function () {
    return this.text;
  };
  CheckboxData.prototype.component2 = function () {
    return this.state;
  };
  CheckboxData.prototype.copy_4mavae$ = function (text, state) {
    return new CheckboxData(text === void 0 ? this.text : text, state === void 0 ? this.state : state);
  };
  CheckboxData.prototype.toString = function () {
    return 'CheckboxData(text=' + Kotlin.toString(this.text) + (', state=' + Kotlin.toString(this.state)) + ')';
  };
  CheckboxData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
    return result;
  };
  CheckboxData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.text, other.text) && Kotlin.equals(this.state, other.state)))));
  };
  function TernaryCheckbox() {
  }
  TernaryCheckbox.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TernaryCheckbox',
    interfaces: [CheckboxBase]
  };
  function TernaryCheckboxData(text, state) {
    this.text_9wrsiu$_0 = text;
    this.state_mu9z74$_0 = state;
  }
  Object.defineProperty(TernaryCheckboxData.prototype, 'text', {
    get: function () {
      return this.text_9wrsiu$_0;
    },
    set: function (text) {
      this.text_9wrsiu$_0 = text;
    }
  });
  Object.defineProperty(TernaryCheckboxData.prototype, 'state', {
    get: function () {
      return this.state_mu9z74$_0;
    },
    set: function (state) {
      this.state_mu9z74$_0 = state;
    }
  });
  TernaryCheckboxData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TernaryCheckboxData',
    interfaces: [CheckboxDataBase]
  };
  TernaryCheckboxData.prototype.component1 = function () {
    return this.text;
  };
  TernaryCheckboxData.prototype.component2 = function () {
    return this.state;
  };
  TernaryCheckboxData.prototype.copy_gcy96h$ = function (text, state) {
    return new TernaryCheckboxData(text === void 0 ? this.text : text, state === void 0 ? this.state : state);
  };
  TernaryCheckboxData.prototype.toString = function () {
    return 'TernaryCheckboxData(text=' + Kotlin.toString(this.text) + (', state=' + Kotlin.toString(this.state)) + ')';
  };
  TernaryCheckboxData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
    return result;
  };
  TernaryCheckboxData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.text, other.text) && Kotlin.equals(this.state, other.state)))));
  };
  function CheckboxBase() {
  }
  Object.defineProperty(CheckboxBase.prototype, 'state', {
    get: function () {
      return this.representedObject.state;
    },
    set: function (newValue) {
      this.representedObject.state = newValue;
    }
  });
  Object.defineProperty(CheckboxBase.prototype, 'text', {
    get: function () {
      return this.representedObject.text;
    },
    set: function (value) {
      this.representedObject.text = value;
    }
  });
  CheckboxBase.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CheckboxBase',
    interfaces: [Widget]
  };
  function get_state($receiver) {
    return $receiver.representedObject.state;
  }
  function set_state($receiver, newValue) {
    $receiver.representedObject.state = newValue;
  }
  function get_text($receiver) {
    return $receiver.representedObject.text;
  }
  function set_text($receiver, newValue) {
    $receiver.representedObject.text = newValue;
  }
  function CheckboxDataBase() {
  }
  CheckboxDataBase.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CheckboxDataBase',
    interfaces: [Data]
  };
  function Widget() {
  }
  Widget.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Widget',
    interfaces: [UIView]
  };
  function JSCheckboxController(controlledElement) {
    this.controlledElement = controlledElement;
    this.onStateChangeObservers_0 = LinkedHashSet_init();
    this.controlledElement.onchange = JSCheckboxController_init$lambda(this);
  }
  Object.defineProperty(JSCheckboxController.prototype, 'id', {
    get: function () {
      return this.controlledElement.id;
    }
  });
  function JSCheckboxController$set_JSCheckboxController$representedObject$lambda(this$JSCheckboxController) {
    return function () {
      return new TernaryCheckboxData(this$JSCheckboxController.controlledElement.textContent, get_ternaryState(this$JSCheckboxController.controlledElement));
    };
  }
  Object.defineProperty(JSCheckboxController.prototype, 'representedObject', {
    get: function () {
      return new TernaryCheckboxData(this.controlledElement.textContent, get_ternaryState(this.controlledElement));
    },
    set: function (newValue) {
      var oldValue = lazy(JSCheckboxController$set_JSCheckboxController$representedObject$lambda(this));
      this.controlledElement.textContent = newValue.text;
      set_ternaryState(this.controlledElement, newValue.state);
      var tmp$;
      tmp$ = this.onStateChangeObservers_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element(oldValue.value, newValue);
      }
    }
  });
  JSCheckboxController.prototype.onRepresentedObjectDidChange_nrmh93$ = function (onRepresentedObjectChange) {
    this.onStateChangeObservers_0.add_11rb$(onRepresentedObjectChange);
  };
  function JSCheckboxController_init$lambda(this$JSCheckboxController) {
    return function (it) {
      var $receiver = this$JSCheckboxController.onStateChangeObservers_0;
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element(null, this$JSCheckboxController.representedObject);
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
    this.rootCheckbox.onRepresentedObjectDidChange_nrmh93$(JSTernaryCheckboxTreeController_init$lambda(this));
    this.onRepresentedObjectDidChange_nrmh93$(JSTernaryCheckboxTreeController_init$lambda_0(this));
  }
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
    return function (f, newValue) {
      this$JSTernaryCheckboxTreeController.representedObject = newValue;
      return Unit;
    };
  }
  function JSTernaryCheckboxTreeController_init$lambda_0(this$JSTernaryCheckboxTreeController) {
    return function (f, newValue) {
      this$JSTernaryCheckboxTreeController.rootCheckbox.representedObject = newValue;
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
      return fitness + requirement.idealValue.rawWeightFunction_14dthe$(conformance.value) * requirement.importance;
    };
  }
  DecisionCrunchEngine.prototype.fitness_0 = function ($receiver, allRequirements) {
    var $receiver_0 = $receiver.requirementConformance.entries;
    var runningValue = {v: 0.0};
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      runningValue.v = DecisionCrunchEngine$fitness$lambda(allRequirements)(runningValue.v, element);
    }
    return runningValue.v;
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
  function main$lambda() {
    var requirements = listOf([new Requirement('c', 'Financial', 'Cost', 1.0, new Requirement$IdealValue$fullRange(1000.0, 1800.0, 1400.0, void 0, '$')), new Requirement('d', 'QoL', 'Distance to QT', 0.6, new Requirement$IdealValue$lowerIsBetter(5.0, void 0, 'miles'))]);
    var options = listOf([new Option('Century Skyline', mapOf([to('c', new RequirementConformance(0.5)), to('d', new RequirementConformance(0.9))])), new Option('Somewhere Else A', mapOf([to('c', new RequirementConformance(0.7)), to('d', new RequirementConformance(0.7))])), new Option('Somewhere Else B', mapOf([to('c', new RequirementConformance(1.0)), to('d', new RequirementConformance(0.4))]))]);
    console.log(copyToArray(toList_1(DecisionCrunchEngine_getInstance().crunch_n1qnm0$(requirements, options).pieChart)));
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
  var immutableCopy = defineInlineFunction('Decision-Cruncher.DecisionCruncher.immutableCopy_5rvit3$', wrapFunction(function () {
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
    Serializable$Companion_getInstance();
  }
  function Serializable$Companion() {
    Serializable$Companion_instance = this;
    this.idSerializedName = 'i';
  }
  Serializable$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Serializable$Companion_instance = null;
  function Serializable$Companion_getInstance() {
    if (Serializable$Companion_instance === null) {
      new Serializable$Companion();
    }
    return Serializable$Companion_instance;
  }
  Serializable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Serializable',
    interfaces: []
  };
  function SerializableDecisionCruncherState(id, allOptions, allRequirements) {
    SerializableDecisionCruncherState$Companion_getInstance();
    this.i_smazkr$_0 = id;
    this.o = allOptions;
    this.r = allRequirements;
  }
  Object.defineProperty(SerializableDecisionCruncherState.prototype, 'i', {
    get: function () {
      return this.i_smazkr$_0;
    }
  });
  function SerializableDecisionCruncherState$Companion() {
    SerializableDecisionCruncherState$Companion_instance = this;
    this.allOptionsSerializedName = 'o';
    this.allRequirementsSerializedName = 'r';
  }
  SerializableDecisionCruncherState$Companion.prototype.invoke_qk3xy8$ = function (json) {
    var tmp$, tmp$_0, tmp$_1;
    if ((typeof (tmp$ = json[Serializable$Companion_getInstance().idSerializedName]) === 'string' ? tmp$ : null) == null) {
      return null;
    }
    tmp$_1 = Kotlin.isArray(tmp$_0 = json[this.allOptionsSerializedName]) ? tmp$_0 : null;
    if (tmp$_1 == null) {
      return null;
    }
    var destination = ArrayList_init(tmp$_1.length);
    var tmp$_2;
    for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
      var item = tmp$_1[tmp$_2];
      var tmp$_3 = destination.add_11rb$;
      var tmp$_4, tmp$_5, tmp$_6, tmp$_7;
      tmp$_6 = SerializableOption$Companion_getInstance();
      tmp$_5 = Kotlin.isType(tmp$_4 = item, Object) ? tmp$_4 : null;
      if (tmp$_5 == null) {
        return null;
      }
      tmp$_7 = tmp$_6.invoke_qk3xy8$(tmp$_5);
      if (tmp$_7 == null) {
        return null;
      }
      tmp$_3.call(destination, tmp$_7);
    }
    throw new NotImplementedError_init();
  };
  SerializableDecisionCruncherState$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SerializableDecisionCruncherState$Companion_instance = null;
  function SerializableDecisionCruncherState$Companion_getInstance() {
    if (SerializableDecisionCruncherState$Companion_instance === null) {
      new SerializableDecisionCruncherState$Companion();
    }
    return SerializableDecisionCruncherState$Companion_instance;
  }
  SerializableDecisionCruncherState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerializableDecisionCruncherState',
    interfaces: [Serializable]
  };
  function SerializableOption(id, name, requirementConformance) {
    SerializableOption$Companion_getInstance();
    this.i_xuvh0z$_0 = id;
    this.n = name;
    this.c = requirementConformance;
  }
  Object.defineProperty(SerializableOption.prototype, 'i', {
    get: function () {
      return this.i_xuvh0z$_0;
    }
  });
  function SerializableOption$Companion() {
    SerializableOption$Companion_instance = this;
  }
  SerializableOption$Companion.prototype.invoke_qk3xy8$ = function (json) {
    throw new NotImplementedError_init();
  };
  SerializableOption$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SerializableOption$Companion_instance = null;
  function SerializableOption$Companion_getInstance() {
    if (SerializableOption$Companion_instance === null) {
      new SerializableOption$Companion();
    }
    return SerializableOption$Companion_instance;
  }
  SerializableOption.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerializableOption',
    interfaces: [Serializable]
  };
  function SerializableRequirement(id, name) {
    this.i_1fuv9p$_0 = id;
    this.n = name;
  }
  Object.defineProperty(SerializableRequirement.prototype, 'i', {
    get: function () {
      return this.i_1fuv9p$_0;
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
  function RequirementConformance(value) {
    this.value = value;
  }
  RequirementConformance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RequirementConformance',
    interfaces: []
  };
  function Requirement(id, category, name, importance, idealValue) {
    if (id === void 0)
      id = IdManager_getInstance().generateNewShortId();
    this.id = id;
    this.category = category;
    this.name_tyzx70$_0 = name;
    this.importance = importance;
    this.idealValue = idealValue;
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
    var tmp$, tmp$_0, tmp$_1;
    if (!(this === other)) {
      tmp$_0 = Kotlin.isType(tmp$ = other, Requirement) ? tmp$ : null;
      if (tmp$_0 == null) {
        return false;
      }
      tmp$_1 = equals(tmp$_0.id, other.id);
    }
     else
      tmp$_1 = true;
    return tmp$_1;
  };
  function Requirement$IdealValue(minimumOutput, unit) {
    this.unit = unit;
    this.minimumOutput = minimumOutput != null ? minimumOutput : 0.0;
  }
  function Requirement$IdealValue$fullRange(lowestAcceptableInput, highestAcceptableInput, idealValue, minimumOutput, unit) {
    if (minimumOutput === void 0)
      minimumOutput = null;
    Requirement$IdealValue.call(this, minimumOutput, unit);
    this.lowestAcceptableInput = lowestAcceptableInput;
    this.highestAcceptableInput = highestAcceptableInput;
    this.idealValue = idealValue != null ? idealValue : 0.5;
    this.leftCurve = new CubicBezierPathSegment(new FractionPoint(0.0, this.minimumOutput), new FractionPoint(this.idealValue / 2, this.minimumOutput), new FractionPoint(this.idealValue / 2, 1.0), new FractionPoint(this.idealValue, 1.0));
    this.rightCurve = new CubicBezierPathSegment(new FractionPoint(this.idealValue, 1.0), new FractionPoint((1 + this.idealValue) / 2, 1.0), new FractionPoint((1 + this.idealValue) / 2, this.minimumOutput), new FractionPoint(1.0, this.minimumOutput));
  }
  Requirement$IdealValue$fullRange.prototype.rawWeightFunction_14dthe$ = function (actualInput) {
    var tmp$;
    var distortedInput;
    if (actualInput < this.idealValue) {
      distortedInput = actualInput / this.idealValue;
      tmp$ = y(this.leftCurve, distortedInput);
    }
     else {
      distortedInput = (actualInput - this.idealValue) / (1 - this.idealValue);
      tmp$ = y(this.rightCurve, distortedInput);
    }
    return tmp$;
  };
  Requirement$IdealValue$fullRange.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'fullRange',
    interfaces: [Requirement$IdealValue]
  };
  function Requirement$IdealValue$higherIsBetter(lowstAcceptableValue, minimumOutput, unit) {
    if (minimumOutput === void 0)
      minimumOutput = null;
    Requirement$IdealValue.call(this, minimumOutput, unit);
    this.lowstAcceptableValue = lowstAcceptableValue;
    this.curve = new CubicBezierPathSegment(new FractionPoint(0.0, this.minimumOutput), new FractionPoint(0.5, this.minimumOutput), new FractionPoint(0.5, 1.0), new FractionPoint(1.0, 1.0));
  }
  Requirement$IdealValue$higherIsBetter.prototype.rawWeightFunction_14dthe$ = function (actualInput) {
    return y(this.curve, actualInput);
  };
  Requirement$IdealValue$higherIsBetter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'higherIsBetter',
    interfaces: [Requirement$IdealValue]
  };
  function Requirement$IdealValue$lowerIsBetter(highestAcceptableInput, minimumOutput, unit) {
    if (minimumOutput === void 0)
      minimumOutput = null;
    Requirement$IdealValue.call(this, minimumOutput, unit);
    this.highestAcceptableInput = highestAcceptableInput;
    this.curve = new CubicBezierPathSegment(new FractionPoint(0.0, 1.0), new FractionPoint(0.5, 1.0), new FractionPoint(0.5, this.minimumOutput), new FractionPoint(1.0, this.minimumOutput));
  }
  Requirement$IdealValue$lowerIsBetter.prototype.rawWeightFunction_14dthe$ = function (actualInput) {
    return y(this.curve, actualInput);
  };
  Requirement$IdealValue$lowerIsBetter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'lowerIsBetter',
    interfaces: [Requirement$IdealValue]
  };
  function Requirement$IdealValue$oneIdealInput(idealInput, tolerance, minimumOutput, unit) {
    if (minimumOutput === void 0)
      minimumOutput = null;
    Requirement$IdealValue.call(this, minimumOutput, unit);
    this.idealInput = idealInput;
    this.tolerance = tolerance;
  }
  Requirement$IdealValue$oneIdealInput.prototype.rawWeightFunction_14dthe$ = function (actualInput) {
    var tmp$;
    return this.idealInput === actualInput || this.idealInput >= actualInput - this.tolerance || this.idealInput <= actualInput + this.tolerance ? 1.0 : (tmp$ = this.minimumOutput) != null ? tmp$ : 0.0;
  };
  Requirement$IdealValue$oneIdealInput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'oneIdealInput',
    interfaces: [Requirement$IdealValue]
  };
  function Requirement$IdealValue$meaninglessValue() {
    Requirement$IdealValue$meaninglessValue_instance = this;
    Requirement$IdealValue.call(this, null, null);
  }
  Requirement$IdealValue$meaninglessValue.prototype.rawWeightFunction_14dthe$ = function (actualInput) {
    return 0.5;
  };
  Requirement$IdealValue$meaninglessValue.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'meaninglessValue',
    interfaces: [Requirement$IdealValue]
  };
  var Requirement$IdealValue$meaninglessValue_instance = null;
  function Requirement$IdealValue$meaninglessValue_getInstance() {
    if (Requirement$IdealValue$meaninglessValue_instance === null) {
      new Requirement$IdealValue$meaninglessValue();
    }
    return Requirement$IdealValue$meaninglessValue_instance;
  }
  Requirement$IdealValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IdealValue',
    interfaces: []
  };
  Requirement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Requirement',
    interfaces: [DecisionInput]
  };
  var asList_0 = defineInlineFunction('Decision-Cruncher.jQueryInterface.asList_9ufosi$', wrapFunction(function () {
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
  function forEach_0($receiver, iterator) {
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
  var booleanAttr = defineInlineFunction('Decision-Cruncher.jQueryInterface.booleanAttr_pl09c0$', wrapFunction(function () {
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
  var disabled = defineInlineFunction('Decision-Cruncher.jQueryInterface.disabled_9ufosi$', wrapFunction(function () {
    var toBooleanOrNull = _.org.bh.tools.base.util.toBooleanOrNull_s8jyvk$;
    return function ($receiver) {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = $receiver.prop('disabled')) != null ? toBooleanOrNull(tmp$) : null) != null ? tmp$_0 : false;
    };
  }));
  var disabled_0 = defineInlineFunction('Decision-Cruncher.jQueryInterface.disabled_5laha2$', wrapFunction(function () {
    var booleanAttr = _.jQueryInterface.booleanAttr_86h6l4$;
    return function ($receiver, newValue) {
      return booleanAttr($receiver, 'disabled', newValue);
    };
  }));
  var checked = defineInlineFunction('Decision-Cruncher.jQueryInterface.checked_9ufosi$', wrapFunction(function () {
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
  var indeterminate = defineInlineFunction('Decision-Cruncher.jQueryInterface.indeterminate_9ufosi$', wrapFunction(function () {
    var toBooleanOrNull = _.org.bh.tools.base.util.toBooleanOrNull_s8jyvk$;
    return function ($receiver) {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = $receiver.prop('indeterminate')) != null ? toBooleanOrNull(tmp$) : null) != null ? tmp$_0 : false;
    };
  }));
  var indeterminate_0 = defineInlineFunction('Decision-Cruncher.jQueryInterface.indeterminate_5laha2$', function ($receiver, newValue) {
    return $receiver.prop('indeterminate', newValue);
  });
  var checkedNotIndeterminate = defineInlineFunction('Decision-Cruncher.jQueryInterface.checkedNotIndeterminate_9ufosi$', wrapFunction(function () {
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
  var jq = defineInlineFunction('Decision-Cruncher.jQueryInterface.jq_1u92oz$', wrapFunction(function () {
    var jq = $;
    return function (cssSelector) {
      return jq(cssSelector.cssSelectorString);
    };
  }));
  var jq_0 = defineInlineFunction('Decision-Cruncher.jQueryInterface.jq_3qujwq$', wrapFunction(function () {
    var jq = $;
    return function (cssSelector, context) {
      return jq(cssSelector.cssSelectorString, context);
    };
  }));
  var jq_1 = defineInlineFunction('Decision-Cruncher.jQueryInterface.jq_ch0s56$', wrapFunction(function () {
    var jq = $;
    return function (cssSelector, context) {
      return jq(cssSelector.cssSelectorString, context);
    };
  }));
  var jq_2 = defineInlineFunction('Decision-Cruncher.jQueryInterface.jq_5358jw$', wrapFunction(function () {
    var jq = $;
    return function (cssSelector, context) {
      var context_0 = jq(context.cssSelectorString);
      return jq(cssSelector.cssSelectorString, context_0);
    };
  }));
  var get_jq = defineInlineFunction('Decision-Cruncher.jQueryInterface.get_jq_dzaqfo$', wrapFunction(function () {
    var jq = $;
    return function ($receiver) {
      return jq($receiver.cssSelectorString);
    };
  }));
  var addClass = defineInlineFunction('Decision-Cruncher.jQueryInterface.addClass_u9bwps$', function ($receiver, class_0) {
    return $receiver.addClass(class_0.className);
  });
  var removeClass = defineInlineFunction('Decision-Cruncher.jQueryInterface.removeClass_u9bwps$', function ($receiver, class_0) {
    return $receiver.removeClass(class_0.className);
  });
  var data = defineInlineFunction('Decision-Cruncher.jQueryInterface.data_b7bhqf$', function ($receiver, data) {
    return $receiver.data(data.dataName);
  });
  var data_0 = defineInlineFunction('Decision-Cruncher.jQueryInterface.data_l9wfl1$', function ($receiver, data, value) {
    return $receiver.data(data.dataName, value);
  });
  var attr = defineInlineFunction('Decision-Cruncher.jQueryInterface.attr_phnjxj$', function ($receiver, attribute) {
    return $receiver.attr(attribute.htmlAttributeName);
  });
  var attr_0 = defineInlineFunction('Decision-Cruncher.jQueryInterface.attr_2ul80f$', function ($receiver, attribute, value) {
    return $receiver.attr(attribute.htmlAttributeName, value);
  });
  var attr_1 = defineInlineFunction('Decision-Cruncher.jQueryInterface.attr_db73uc$', function ($receiver, attribute, value) {
    return $receiver.attr(attribute.htmlAttributeName, value);
  });
  var attr_2 = defineInlineFunction('Decision-Cruncher.jQueryInterface.attr_mpifw4$', function ($receiver, attribute, value) {
    return $receiver.attr(attribute.htmlAttributeName, value);
  });
  var onChangeData = defineInlineFunction('Decision-Cruncher.jQueryInterface.onChangeData_x0svav$', function ($receiver, action) {
    $receiver.on('changeData', void 0, action);
  });
  var get_parentElement = defineInlineFunction('Decision-Cruncher.jQueryInterface.get_parentElement_s15u7w$', function ($receiver) {
    return $receiver.parentElement;
  });
  var package$org = _.org || (_.org = {});
  var package$bh = package$org.bh || (package$org.bh = {});
  var package$tools = package$bh.tools || (package$bh.tools = {});
  var package$base = package$tools.base || (package$tools.base = {});
  var package$annotations = package$base.annotations || (package$base.annotations = {});
  package$annotations.Throws = Throws;
  package$annotations.ArithmeticException = ArithmeticException;
  package$annotations.assert_87ejdh$ = assert;
  var package$async = package$tools.async || (package$tools.async = {});
  package$async.delay_5jeynf$ = delay;
  package$async.delay_u83pai$ = delay_0;
  var package$basics = package$base.basics || (package$base.basics = {});
  package$basics.Cloneable = Cloneable;
  var package$collections = package$base.collections || (package$base.collections = {});
  Object.defineProperty(package$collections, 'a', {
    get: a_getInstance
  });
  Object.defineProperty(package$collections, 'l', {
    get: l_getInstance
  });
  Object.defineProperty(package$collections, 's', {
    get: s_getInstance
  });
  Object.defineProperty(package$collections, 'ms', {
    get: ms_getInstance
  });
  package$collections.indexOfFirstOrNull_dmm9ex$ = indexOfFirstOrNull;
  package$collections.DeltaStack_init_nvyzvu$ = DeltaStack_init;
  package$collections.DeltaStack = DeltaStack;
  package$collections.DeltaStackDelegate = DeltaStackDelegate;
  $$importsForInline$$['Decision-Cruncher'] = _;
  package$collections.IndexSet_init_tgv2mb$ = IndexSet_init;
  package$collections.IndexSet_init_q5rwfd$ = IndexSet_init_0;
  package$collections.IndexSet_init_ampky3$ = IndexSet_init_1;
  package$collections.IndexSet_init_za3lpa$ = IndexSet_init_2;
  package$collections.IndexSet = IndexSet;
  package$collections.isWithin_ksuioy$ = isWithin;
  package$collections.get_indexSetValue_tmsbgo$ = get_indexSetValue;
  package$collections.get_indexSetValue_4x7if6$ = get_indexSetValue_0;
  package$collections.get_indexSetValue_eko7cz$ = get_indexSetValue_1;
  package$collections.get_indexSetValue_gn9c92$ = get_indexSetValue_2;
  package$collections.get_indexSetValue_plj8ka$ = get_indexSetValue_3;
  package$collections.Queue = Queue;
  package$collections.peekAtFront_t58qzz$ = peekAtFront;
  package$collections.Stack = Stack;
  package$collections.MutableStack = MutableStack;
  var package$extensions = package$collections.extensions || (package$collections.extensions = {});
  package$extensions.get_count_qjns17$ = get_count;
  package$extensions.get_length_qjns17$ = get_length;
  package$extensions.get_count_gzk92b$ = get_count_0;
  package$extensions.get_length_gzk92b$ = get_length_0;
  package$extensions.inserting_vkbvuh$ = inserting;
  package$extensions.removing_r20n03$ = removing;
  package$extensions.removing_guj6x5$ = removing_0;
  package$extensions.removing_e5j7xi$ = removing_1;
  package$extensions.removing_dh2jie$ = removing_2;
  package$extensions.filterMap_bt4qmd$ = filterMap;
  package$extensions.get_first_4mqhgw$ = get_first;
  package$extensions.get_firstOrNull_4mqhgw$ = get_firstOrNull;
  var package$math = package$base.math || (package$base.math = {});
  package$math.get_clampedInt32Value_mts6qi$ = get_clampedInt32Value_0;
  package$extensions.allButFirst_licpcz$ = allButFirst;
  package$extensions.get_allButFirst_4mqhgw$ = get_allButFirst;
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
  package$extensions.toString_j63yia$ = toString_2;
  package$extensions.nonEmpty_b5o7sk$ = nonEmpty;
  package$extensions.get_nonEmpty_yfwuwe$ = get_nonEmpty;
  package$extensions.forEach_po0gd6$ = forEach;
  package$extensions.firstMappedOrNull_lw3jhl$ = firstMappedOrNull;
  package$extensions.forEachReversedIndexed_i1t98f$ = forEachReversedIndexed;
  package$extensions.forEachReversed_60ukez$ = forEachReversed;
  package$extensions.adding_g8jm4q$ = adding;
  package$extensions.removingAt_yzln2o$ = removingAt;
  package$extensions.List_287e2$ = List;
  package$extensions.List_i5x0yv$ = List_0;
  package$extensions.MutableList_287e2$ = MutableList;
  package$extensions.MutableList_i5x0yv$ = MutableList_0;
  package$extensions.get_q7vxk6$ = get_0;
  package$extensions.getOrSet_pdprmj$ = getOrSet;
  package$extensions.get_g8jm4q$ = get_1;
  package$extensions.nonEmpty_imad5s$ = nonEmpty_0;
  package$extensions.get_nonEmpty_d8o44m$ = get_nonEmpty_0;
  package$extensions.indexOrNull_bv23uc$ = indexOrNull;
  package$extensions.subList_7qcdzw$ = subList;
  package$extensions.humanReadableList_kcae0s$ = humanReadableList;
  Object.defineProperty(Conjunction, 'and', {
    get: Conjunction$and_getInstance
  });
  Object.defineProperty(Conjunction, 'or', {
    get: Conjunction$or_getInstance
  });
  Object.defineProperty(Conjunction, 'andor', {
    get: Conjunction$andor_getInstance
  });
  package$extensions.Conjunction = Conjunction;
  package$extensions.firstOrNull_lrucxe$ = firstOrNull_0;
  package$extensions.firstOrCrash_lrucxe$ = firstOrCrash;
  package$extensions.removeDuplicates_z6s21h$ = removeDuplicates;
  package$extensions.nonEmpty_uzyswq$ = nonEmpty_1;
  package$extensions.get_nonEmpty_y2unvk$ = get_nonEmpty_1;
  package$extensions.insert_tag10t$ = insert;
  Object.defineProperty(_, 'notFound', {
    get: function () {
      return notFound;
    }
  });
  Object.defineProperty(_, 'notFoundNumber', {
    get: function () {
      return notFoundNumber;
    }
  });
  var package$disambiguation = package$base.disambiguation || (package$base.disambiguation = {});
  package$disambiguation.shiftBitsLeft_2ou2j3$ = shiftBitsLeft;
  package$disambiguation.shiftBitsLeft_ehttk$ = shiftBitsLeft_0;
  package$disambiguation.shiftBitsLeft_7mbe97$ = shiftBitsLeft_1;
  package$disambiguation.shiftBitsLeft_buxqzf$ = shiftBitsLeft_2;
  package$disambiguation.shiftBitsRightCopying_2ou2j3$ = shiftBitsRightCopying;
  package$disambiguation.shiftBitsRightCopying_ehttk$ = shiftBitsRightCopying_0;
  package$disambiguation.shiftBitsRightCopying_7mbe97$ = shiftBitsRightCopying_1;
  package$disambiguation.shiftBitsRightCopying_buxqzf$ = shiftBitsRightCopying_2;
  package$disambiguation.shiftBitsRightWithZeroes_2ou2j3$ = shiftBitsRightWithZeroes;
  package$disambiguation.shiftBitsRightWithZeroes_ehttk$ = shiftBitsRightWithZeroes_0;
  package$disambiguation.shiftBitsRightWithZeroes_7mbe97$ = shiftBitsRightWithZeroes_1;
  package$disambiguation.shiftBitsRightWithZeroes_buxqzf$ = shiftBitsRightWithZeroes_2;
  var package$errors = package$base.errors || (package$base.errors = {});
  package$errors.UnsupportedOperationException = UnsupportedOperationException_0;
  var package$func = package$base.func || (package$base.func = {});
  package$func.Observing = Observing;
  package$func.NullWSB_287e2$ = NullWSB;
  package$func.NullSSB_287e2$ = NullSSB;
  package$func.NullDSB_287e2$ = NullDSB;
  package$func.observing_bjs5ud$ = observing;
  package$func.Single = Single;
  package$func.toList_ux95po$ = toList_2;
  package$func.tuple_mh5how$ = tuple;
  package$func.tuple_o5fpdy$ = tuple_0;
  package$func.tuple_uzi532$ = tuple_1;
  package$func.TupleConvertible = TupleConvertible;
  package$func.transform_96jf0l$ = transform;
  var package$jsShim = package$base.jsShim || (package$base.jsShim = {});
  package$jsShim.JsMap = JsMap;
  package$jsShim.asOrNull = as_;
  package$jsShim.toString_798l30$ = toString_3;
  package$jsShim.toString_di2vk2$ = toString_4;
  package$jsShim.toString_dqglrj$ = toString_5;
  package$jsShim.toString_if0zpk$ = toString_6;
  package$jsShim.replace_he2ph6$ = replace;
  var package$logging = package$base.logging || (package$base.logging = {});
  package$logging.Logger = Logger;
  package$logging.LoggerLevel = LoggerLevel;
  package$logging.trace_bi1eci$ = trace;
  package$logging.verbose_bi1eci$ = verbose;
  package$logging.debug_bi1eci$ = debug;
  package$logging.informational_bi1eci$ = informational;
  package$logging.info_bi1eci$ = info;
  package$logging.warning_bi1eci$ = warning;
  package$logging.warn_bi1eci$ = warn;
  package$logging.error_bi1eci$ = error_0;
  package$logging.fatal_bi1eci$ = fatal;
  Object.defineProperty(LoggerLevel, 'trace', {
    get: LoggerLevel$trace_getInstance
  });
  Object.defineProperty(LoggerLevel, 'debug', {
    get: LoggerLevel$debug_getInstance
  });
  Object.defineProperty(LoggerLevel, 'informational', {
    get: LoggerLevel$informational_getInstance
  });
  Object.defineProperty(LoggerLevel, 'warning', {
    get: LoggerLevel$warning_getInstance
  });
  Object.defineProperty(LoggerLevel, 'error', {
    get: LoggerLevel$error_getInstance
  });
  Object.defineProperty(LoggerLevel, 'fatal', {
    get: LoggerLevel$fatal_getInstance
  });
  Object.defineProperty(LoggerLevel, 'Companion', {
    get: LoggerLevel$Companion_getInstance
  });
  Object.defineProperty(package$logging, 'Loggers', {
    get: Loggers_getInstance
  });
  package$math.greatestCommonDivisor_3pjtqy$ = greatestCommonDivisor;
  package$math.greatestCommonDivisor_euclid_3pjtqy$ = greatestCommonDivisor_euclid;
  package$math.greatestCommonDivisor_binaryMethod_3pjtqy$ = greatestCommonDivisor_binaryMethod;
  package$math.greatestCommonDivisorWith_2p08ub$ = greatestCommonDivisorWith;
  package$math.isCoprime_3pjtqy$ = isCoprime;
  package$math.isCoprimeWith_2p08ub$ = isCoprimeWith;
  package$math.numberOfDigits_if0zpk$ = numberOfDigits;
  package$math.numberOfDigits_dqglrj$ = numberOfDigits_0;
  package$math.numberOfDigits_di2vk2$ = numberOfDigits_1;
  package$math.numberOfDigits_798l30$ = numberOfDigits_2;
  package$math.get_isPowerOf10_mts6qi$ = get_isPowerOf10;
  package$math.Averager = Averager;
  package$math.efficientAverage_k9kan8$ = efficientAverage;
  package$math.toBase_z7h088$ = toBase;
  package$math.fromBase_rjktp$ = fromBase;
  package$math.get_isEven_mts6qi$ = get_isEven;
  package$math.get_isEven_s8ev3n$ = get_isEven_0;
  package$math.get_isEven_5vcgdc$ = get_isEven_1;
  package$math.get_isEven_mz3mee$ = get_isEven_2;
  package$math.get_isOdd_mts6qi$ = get_isOdd;
  package$math.get_isOdd_s8ev3n$ = get_isOdd_0;
  package$math.get_isOdd_5vcgdc$ = get_isOdd_1;
  package$math.get_isOdd_mz3mee$ = get_isOdd_2;
  package$math.pow_lu1900$ = pow;
  package$math.toThePowerOf_38ydlf$ = toThePowerOf;
  package$math.toThePowerOf_2p08ub$ = toThePowerOf_0;
  package$math.toThePowerOf_dqglrj$ = toThePowerOf_1;
  package$math.abs_14dthe$ = abs;
  package$math.abs_mx4ult$ = abs_0;
  package$math.abs_s8cxhz$ = abs_1;
  package$math.abs_za3lpa$ = abs_2;
  package$math.abs_mq22fl$ = abs_3;
  package$math.abs_s8j3t7$ = abs_4;
  package$math.get_absoluteValue_yrwdxr$ = get_absoluteValue;
  package$math.get_absoluteValue_81szk$ = get_absoluteValue_0;
  package$math.get_absoluteValue_mts6qi$ = get_absoluteValue_1;
  package$math.get_absoluteValue_s8ev3n$ = get_absoluteValue_2;
  package$math.get_absoluteValue_5vcgdc$ = get_absoluteValue_3;
  package$math.get_absoluteValue_mz3mee$ = get_absoluteValue_4;
  package$math.invertedSign_yrwdxr$ = invertedSign;
  package$math.invertedSign_81szk$ = invertedSign_0;
  package$math.invertedSign_mts6qi$ = invertedSign_1;
  package$math.invertedSign_s8ev3n$ = invertedSign_2;
  package$math.invertedSign_5vcgdc$ = invertedSign_3;
  package$math.invertedSign_mz3mee$ = invertedSign_4;
  package$math.inverseSquareRoot_allInOne_accuracy2_14dthe$ = inverseSquareRoot_allInOne_accuracy2;
  package$math.inverseSquareRoot_14dthe$ = inverseSquareRoot;
  package$math.inverseSquareRoot_functional_accuracy1_14dthe$ = inverseSquareRoot_functional_accuracy1;
  package$math.inverseSquareRoot_functional_accuracy2_14dthe$ = inverseSquareRoot_functional_accuracy2;
  package$math.inverseSquareRoot_functional_accuracy3_14dthe$ = inverseSquareRoot_functional_accuracy3;
  package$math.inverseSquareRoot_functional_accuracy4_14dthe$ = inverseSquareRoot_functional_accuracy4;
  package$math.inverseSquareRoot_allInOne_accuracy1_14dthe$ = inverseSquareRoot_allInOne_accuracy1;
  package$math.inverseSquareRoot_allInOne_accuracy3_14dthe$ = inverseSquareRoot_allInOne_accuracy3;
  package$math.inverseSquareRoot_allInOne_accuracy4_14dthe$ = inverseSquareRoot_allInOne_accuracy4;
  package$math.inverseSquareRoot_mx4ult$ = inverseSquareRoot_0;
  package$math.Comparable64 = Comparable64;
  package$math.min_sdesaw$ = min;
  package$math.min_hy1sfd$ = min_0;
  package$math.min_j2hqw1$ = min_1;
  package$math.max_sdesaw$ = max;
  package$math.max_hy1sfd$ = max_0;
  package$math.max_j2hqw1$ = max_1;
  package$math.clamp_73gzaq$ = clamp;
  package$math.clamp_yvo9jy$ = clamp_0;
  package$math.ComparableComparator = ComparableComparator;
  package$math.Comparator = Comparator;
  Object.defineProperty(ComparisonResult, 'ascending', {
    get: ComparisonResult$ascending_getInstance
  });
  Object.defineProperty(ComparisonResult, 'same', {
    get: ComparisonResult$same_getInstance
  });
  Object.defineProperty(ComparisonResult, 'descending', {
    get: ComparisonResult$descending_getInstance
  });
  Object.defineProperty(ComparisonResult, 'Companion', {
    get: ComparisonResult$Companion_getInstance
  });
  package$math.ComparisonResult = ComparisonResult;
  package$math.SemanticComparable = SemanticComparable;
  package$math.compare_fir3sf$ = compare;
  Object.defineProperty(package$math, 'defaultFloat32CalculationTolerance', {
    get: function () {
      return defaultFloat32CalculationTolerance;
    }
  });
  Object.defineProperty(package$math, 'defaultFloat64CalculationTolerance', {
    get: function () {
      return defaultFloat64CalculationTolerance;
    }
  });
  Object.defineProperty(package$math, 'defaultFractionCalculationTolerance', {
    get: function () {
      return defaultFractionCalculationTolerance;
    }
  });
  Object.defineProperty(package$math, 'defaultIntegerCalculationTolerance', {
    get: function () {
      return defaultIntegerCalculationTolerance;
    }
  });
  Object.defineProperty(package$math, 'defaultCalculationTolerance', {
    get: get_defaultCalculationTolerance
  });
  package$math.TolerableEquality = TolerableEquality;
  package$math.isApproximately_js09hr$ = isApproximately;
  package$math.equals_nig4hr$ = equals_0;
  package$math.isApproximately_nig4hr$ = isApproximately_0;
  package$math.equals_wj6e7o$ = equals_1;
  package$math.isApproximately_wj6e7o$ = isApproximately_1;
  package$math.equals_10nt4e$ = equals_2;
  package$math.isApproximately_10nt4e$ = isApproximately_2;
  package$math.equals_ez9hen$ = equals_3;
  package$math.isApproximately_ez9hen$ = isApproximately_3;
  package$math.equals_yielil$ = equals_4;
  package$math.equals_xmjb1d$ = equals_5;
  package$math.equals_tywtvj$ = equals_6;
  package$math.equals_p7zwkr$ = equals_7;
  package$math.isLessThanOrEqualTo_nig4hr$ = isLessThanOrEqualTo;
  package$math.isGreaterThanOrEqualTo_nig4hr$ = isGreaterThanOrEqualTo;
  package$math.isLessThan_nig4hr$ = isLessThan;
  package$math.isGreaterThan_nig4hr$ = isGreaterThan;
  package$math.isLessThanOrEqualTo_ekzx8g$ = isLessThanOrEqualTo_0;
  package$math.isGreaterThanOrEqualTo_ekzx8g$ = isGreaterThanOrEqualTo_0;
  package$math.isLessThan_ekzx8g$ = isLessThan_0;
  package$math.isGreaterThan_ekzx8g$ = isGreaterThan_0;
  package$math.isBetween_fspuwt$ = isBetween;
  package$math.isBetween_d3mtsh$ = isBetween_0;
  package$math.get_e_6a53gt$ = get_e;
  package$math.get_log2_e_6a53gt$ = get_log2_e;
  package$math.get_log10_e_6a53gt$ = get_log10_e;
  package$math.get_ln_2_6a53gt$ = get_ln_2;
  package$math.get_ln_10_6a53gt$ = get_ln_10;
  package$math.get_pi_6a53gt$ = get_pi;
  package$math.get_π_6a53gt$ = get_π;
  package$math.get_half_pi_6a53gt$ = get_half_pi;
  package$math.get_half_π_6a53gt$ = get_half_π;
  package$math.get_quarter_pi_6a53gt$ = get_quarter_pi;
  package$math.get_quarter_π_6a53gt$ = get_quarter_π;
  package$math.get_three_quarter_pi_6a53gt$ = get_three_quarter_pi;
  package$math.get_three_quarter_π_6a53gt$ = get_three_quarter_π;
  package$math.get_five_quarter_pi_6a53gt$ = get_five_quarter_pi;
  package$math.get_five_quarter_π_6a53gt$ = get_five_quarter_π;
  package$math.get_seven_quarter_pi_6a53gt$ = get_seven_quarter_pi;
  package$math.get_seven_quarter_π_6a53gt$ = get_seven_quarter_π;
  package$math.get_double_pi_6a53gt$ = get_double_pi;
  package$math.get_double_π_6a53gt$ = get_double_π;
  package$math.get_quadruple_pi_6a53gt$ = get_quadruple_pi;
  package$math.get_quadruple_π_6a53gt$ = get_quadruple_π;
  package$math.get_inverse_pi_6a53gt$ = get_inverse_pi;
  package$math.get_inverse_π_6a53gt$ = get_inverse_π;
  package$math.get_two_over_pi_6a53gt$ = get_two_over_pi;
  package$math.get_two_over_π_6a53gt$ = get_two_over_π;
  package$math.get_two_over_sqrt_pi_6a53gt$ = get_two_over_sqrt_pi;
  package$math.get_two_over_sqrt_π_6a53gt$ = get_two_over_sqrt_π;
  package$math.get_sqrt_2_6a53gt$ = get_sqrt_2;
  package$math.get_inverse_sqrt_2_6a53gt$ = get_inverse_sqrt_2;
  package$math.get_e_y9phqa$ = get_e_0;
  package$math.get_log2_e_y9phqa$ = get_log2_e_0;
  package$math.get_log10_e_y9phqa$ = get_log10_e_0;
  package$math.get_ln_2_y9phqa$ = get_ln_2_0;
  package$math.get_ln_10_y9phqa$ = get_ln_10_0;
  package$math.get_pi_y9phqa$ = get_pi_0;
  package$math.get_π_y9phqa$ = get_π_0;
  package$math.get_half_pi_y9phqa$ = get_half_pi_0;
  package$math.get_half_π_y9phqa$ = get_half_π_0;
  package$math.get_quarter_pi_y9phqa$ = get_quarter_pi_0;
  package$math.get_quarter_π_y9phqa$ = get_quarter_π_0;
  package$math.get_three_quarter_pi_y9phqa$ = get_three_quarter_pi_0;
  package$math.get_three_quarter_π_y9phqa$ = get_three_quarter_π_0;
  package$math.get_five_quarter_pi_y9phqa$ = get_five_quarter_pi_0;
  package$math.get_five_quarter_π_y9phqa$ = get_five_quarter_π_0;
  package$math.get_seven_quarter_pi_y9phqa$ = get_seven_quarter_pi_0;
  package$math.get_seven_quarter_π_y9phqa$ = get_seven_quarter_π_0;
  package$math.get_double_pi_y9phqa$ = get_double_pi_0;
  package$math.get_double_π_y9phqa$ = get_double_π_0;
  package$math.get_quadruple_pi_y9phqa$ = get_quadruple_pi_0;
  package$math.get_quadruple_π_y9phqa$ = get_quadruple_π_0;
  package$math.get_inverse_pi_y9phqa$ = get_inverse_pi_0;
  package$math.get_inverse_π_y9phqa$ = get_inverse_π_0;
  package$math.get_two_over_pi_y9phqa$ = get_two_over_pi_0;
  package$math.get_two_over_π_y9phqa$ = get_two_over_π_0;
  package$math.get_two_over_sqrt_pi_y9phqa$ = get_two_over_sqrt_pi_0;
  package$math.get_two_over_sqrt_π_y9phqa$ = get_two_over_sqrt_π_0;
  package$math.get_sqrt_2_y9phqa$ = get_sqrt_2_0;
  package$math.get_inverse_sqrt_2_y9phqa$ = get_inverse_sqrt_2_0;
  package$math.integerComponent_yrwdxr$ = integerComponent;
  package$math.floor_yrwdxr$ = floor;
  package$math.roundUp_truncating_yrwdxr$ = roundUp_truncating;
  package$math.ceil_truncating2_yrwdxr$ = ceil_truncating2;
  package$math.ceil_yrwdxr$ = ceil;
  package$math.get_hasFractionComponent_yrwdxr$ = get_hasFractionComponent;
  package$math.get_components_yrwdxr$ = get_components;
  package$math.RadixNumberParts = RadixNumberParts;
  package$math.rounded_rrddsp$ = rounded;
  package$math.get_int8Value_rtoihn$ = get_int8Value;
  package$math.get_roundedInt8Value_yrwdxr$ = get_roundedInt8Value;
  package$math.get_int16Value_rtoihn$ = get_int16Value;
  package$math.get_roundedInt16Value_yrwdxr$ = get_roundedInt16Value;
  package$math.get_int32Value_yrwdxr$ = get_int32Value_1;
  package$math.get_roundedInt32Value_yrwdxr$ = get_roundedInt32Value;
  package$math.get_int64Value_rtoihn$ = get_int64Value;
  package$math.get_roundedInt64Value_yrwdxr$ = get_roundedInt64Value;
  package$math.get_roundedIntegerValue_yrwdxr$ = get_roundedIntegerValue;
  Object.defineProperty(RoundingThreshold, 'halfway', {
    get: RoundingThreshold$halfway_getInstance
  });
  Object.defineProperty(RoundingThreshold, 'integer', {
    get: RoundingThreshold$integer_getInstance
  });
  Object.defineProperty(RoundingThreshold, 'Companion', {
    get: RoundingThreshold$Companion_getInstance
  });
  package$math.RoundingThreshold = RoundingThreshold;
  Object.defineProperty(RoundingDirection, 'up', {
    get: RoundingDirection$up_getInstance
  });
  Object.defineProperty(RoundingDirection, 'down', {
    get: RoundingDirection$down_getInstance
  });
  Object.defineProperty(RoundingDirection, 'awayFromZero', {
    get: RoundingDirection$awayFromZero_getInstance
  });
  Object.defineProperty(RoundingDirection, 'towardZero', {
    get: RoundingDirection$towardZero_getInstance
  });
  Object.defineProperty(RoundingDirection, 'Companion', {
    get: RoundingDirection$Companion_getInstance
  });
  package$math.RoundingDirection = RoundingDirection;
  package$math.get_isNativeFraction_rtoihn$ = get_isNativeFraction;
  package$math.get_fractionValue_rtoihn$ = get_fractionValue;
  package$math.get_isNaN_rcaex3$ = get_isNaN;
  package$math.get_isNaN_81szk$ = get_isNaN_0;
  package$math.get_isNaN_yrwdxr$ = get_isNaN_1;
  package$math.get_isInfinite_rcaex3$ = get_isInfinite;
  package$math.get_isInfinite_81szk$ = get_isInfinite_0;
  package$math.get_isInfinite_yrwdxr$ = get_isInfinite_1;
  package$math.get_isNegativeInfinity_rcaex3$ = get_isNegativeInfinity;
  package$math.get_isNegativeInfinity_81szk$ = get_isNegativeInfinity_0;
  package$math.get_isNegativeInfinity_yrwdxr$ = get_isNegativeInfinity_1;
  package$math.get_isPositiveInfinity_rcaex3$ = get_isPositiveInfinity;
  package$math.get_isPositiveInfinity_81szk$ = get_isPositiveInfinity_0;
  package$math.get_isPositiveInfinity_yrwdxr$ = get_isPositiveInfinity_1;
  package$math.get_infinity_y9phqa$ = get_infinity;
  package$math.get_infinity_6a53gt$ = get_infinity_0;
  package$math.get_nan_y9phqa$ = get_nan;
  package$math.get_nan_6a53gt$ = get_nan_0;
  package$math.NumberConvertible = NumberConvertible;
  package$math.get_float32Value_rtoihn$ = get_float32Value;
  package$math.get_float32Value_81szk$ = get_float32Value_0;
  package$math.get_float64Value_rtoihn$ = get_float64Value;
  package$math.get_float64Value_yrwdxr$ = get_float64Value_0;
  package$math.get_fractionValue_yrwdxr$ = get_fractionValue_0;
  package$math.toInt8Checked_rtoihn$ = toInt8Checked;
  package$math.toInt16Checked_rtoihn$ = toInt16Checked;
  package$math.toInt32Checked_rtoihn$ = toInt32Checked;
  package$math.toInt64Checked_rtoihn$ = toInt64Checked;
  package$math.toInt8_rtoihn$ = toInt8;
  package$math.toInt8_mz3mee$ = toInt8_0;
  package$math.toInt8_5vcgdc$ = toInt8_1;
  package$math.toInt8_s8ev3n$ = toInt8_2;
  package$math.toInt8_mts6qi$ = toInt8_3;
  package$math.toInt16_rtoihn$ = toInt16;
  package$math.toInt16_5vcgdc$ = toInt16_0;
  package$math.toInt16_mz3mee$ = toInt16_1;
  package$math.toInt16_s8ev3n$ = toInt16_2;
  package$math.toInt16_mts6qi$ = toInt16_3;
  package$math.toInt32_rtoihn$ = toInt32;
  package$math.toInt32_s8ev3n$ = toInt32_0;
  package$math.toInt32_mz3mee$ = toInt32_1;
  package$math.toInt32_5vcgdc$ = toInt32_2;
  package$math.toInt32_mts6qi$ = toInt32_3;
  package$math.toInt64_rtoihn$ = toInt64;
  package$math.toInt64_mts6qi$ = toInt64_0;
  package$math.toInt64_mz3mee$ = toInt64_1;
  package$math.toInt64_5vcgdc$ = toInt64_2;
  package$math.toInt64_s8ev3n$ = toInt64_3;
  package$math.toInteger_rtoihn$ = toInteger;
  package$math.toFloat32_rtoihn$ = toFloat32;
  package$math.toFloat64_rtoihn$ = toFloat64;
  package$math.toFraction_rtoihn$ = toFraction;
  package$math.toIntegerChecked_rtoihn$ = toIntegerChecked;
  package$math.get_int32Value_mz3mee$ = get_int32Value_2;
  package$math.toInt8_baug4k$ = toInt8_4;
  package$math.toInt16_baug4k$ = toInt16_4;
  package$math.toInt32_baug4k$ = toInt32_4;
  package$math.toInt64_baug4k$ = toInt64_4;
  package$math.toInteger_baug4k$ = toInteger_0;
  package$math.toFloat32_pdl1vz$ = toFloat32_0;
  package$math.toFloat64_pdl1vz$ = toFloat64_0;
  package$math.toFraction_pdl1vz$ = toFraction_0;
  package$math.get_int8Value_mz3mee$ = get_int8Value_0;
  package$math.get_int8Value_5vcgdc$ = get_int8Value_1;
  package$math.get_int8Value_s8ev3n$ = get_int8Value_2;
  package$math.get_int8Value_mts6qi$ = get_int8Value_3;
  package$math.get_int16Value_81szk$ = get_int16Value_0;
  package$math.get_int16Value_5vcgdc$ = get_int16Value_1;
  package$math.get_int16Value_mz3mee$ = get_int16Value_2;
  package$math.get_int16Value_s8ev3n$ = get_int16Value_3;
  package$math.get_int16Value_mts6qi$ = get_int16Value_4;
  package$math.get_int32Value_rtoihn$ = get_int32Value;
  package$math.get_int32Value_81szk$ = get_int32Value_0;
  package$math.get_int32Value_5vcgdc$ = get_int32Value_3;
  package$math.get_int32Value_s8ev3n$ = get_int32Value_4;
  package$math.get_int32Value_mts6qi$ = get_int32Value_5;
  package$math.get_int64Value_mts6qi$ = get_int64Value_0;
  package$math.get_integerValue_rtoihn$ = get_integerValue;
  package$math.get_integerValue_mts6qi$ = get_integerValue_0;
  package$math.integerValue_lt49qk$ = integerValue;
  package$math.integerValue_qll82d$ = integerValue_0;
  package$math.integerValue_m147bj$ = integerValue_1;
  package$math.integerValue_abkzxe$ = integerValue_2;
  package$math.integerValue_iqw0eh$ = integerValue_3;
  package$math.get_isNativeInteger_rtoihn$ = get_isNativeInteger;
  package$math.get_clampedIntegerValue_yrwdxr$ = get_clampedIntegerValue;
  package$math.get_clampedInt64Value_yrwdxr$ = get_clampedInt64Value;
  package$math.get_clampedInt32Value_yrwdxr$ = get_clampedInt32Value;
  package$math.get_clampedInt162Value_yrwdxr$ = get_clampedInt162Value;
  package$math.get_clampedInt8Value_yrwdxr$ = get_clampedInt8Value;
  package$math.get_clampedInt16Value_mts6qi$ = get_clampedInt16Value;
  package$math.get_clampedInt8Value_mts6qi$ = get_clampedInt8Value_0;
  package$math.get_clampToPositive_mz3mee$ = get_clampToPositive;
  package$math.get_clampToPositive_5vcgdc$ = get_clampToPositive_0;
  package$math.get_clampToPositive_s8ev3n$ = get_clampToPositive_1;
  package$math.get_clampToPositive_mts6qi$ = get_clampToPositive_2;
  package$math.get_clampToPositive_81szk$ = get_clampToPositive_3;
  package$math.get_clampToPositive_yrwdxr$ = get_clampToPositive_4;
  package$math.get_positiveOrNull_mz3mee$ = get_positiveOrNull;
  package$math.get_positiveOrNull_5vcgdc$ = get_positiveOrNull_0;
  package$math.get_positiveOrNull_s8ev3n$ = get_positiveOrNull_1;
  package$math.get_positiveOrNull_mts6qi$ = get_positiveOrNull_2;
  package$math.get_positiveOrNull_81szk$ = get_positiveOrNull_3;
  package$math.get_positiveOrNull_yrwdxr$ = get_positiveOrNull_4;
  package$math.Integer_4wadjb$ = Integer;
  package$math.int8ArrayOf_wcry4u$ = int8ArrayOf;
  package$math.int16ArrayOf_yd0neo$ = int16ArrayOf;
  package$math.int32ArrayOf_pmhfmb$ = int32ArrayOf;
  package$math.int64ArrayOf_2muz52$ = int64ArrayOf;
  package$math.integerArrayOf_2muz52$ = integerArrayOf;
  package$math.float32ArrayOf_8cqhcw$ = float32ArrayOf;
  package$math.float64ArrayOf_yqxtqz$ = float64ArrayOf;
  package$math.fractionArrayOf_yqxtqz$ = fractionArrayOf;
  package$math.toInt8Array_kdx1v$ = toInt8Array;
  package$math.toInt16Array_p5z1wt$ = toInt16Array;
  package$math.toInt32Array_fx3nzu$ = toInt32Array;
  package$math.toInt64Array_558emf$ = toInt64Array;
  package$math.toIntegerArray_558emf$ = toIntegerArray;
  package$math.toFloat32Array_zwy31$ = toFloat32Array;
  package$math.toFloat64Array_tcduak$ = toFloat64Array;
  package$math.toFractionArray_tcduak$ = toFractionArray;
  package$math.get_int8Value_964n91$ = get_int8Value_4;
  package$math.get_int8Value_i2lc79$ = get_int8Value_5;
  package$math.get_int8Value_tmsbgo$ = get_int8Value_6;
  package$math.get_int8Value_se6h4x$ = get_int8Value_7;
  package$math.get_int16Value_964n91$ = get_int16Value_5;
  package$math.get_int16Value_i2lc79$ = get_int16Value_6;
  package$math.get_int16Value_tmsbgo$ = get_int16Value_7;
  package$math.get_int16Value_se6h4x$ = get_int16Value_8;
  package$math.get_int32Value_964n91$ = get_int32Value_6;
  package$math.get_int32Value_i2lc79$ = get_int32Value_7;
  package$math.get_int32Value_tmsbgo$ = get_int32Value_8;
  package$math.get_int32Value_se6h4x$ = get_int32Value_9;
  package$math.get_int64Value_964n91$ = get_int64Value_1;
  package$math.get_int64Value_i2lc79$ = get_int64Value_2;
  package$math.get_int64Value_tmsbgo$ = get_int64Value_3;
  package$math.get_int64Value_se6h4x$ = get_int64Value_4;
  package$math.get_integerValue_964n91$ = get_integerValue_1;
  package$math.get_integerValue_i2lc79$ = get_integerValue_2;
  package$math.get_integerValue_tmsbgo$ = get_integerValue_3;
  package$math.get_integerValue_se6h4x$ = get_integerValue_4;
  package$math.get_float32Value_rjqryz$ = get_float32Value_1;
  package$math.get_float32Value_bvy38s$ = get_float32Value_2;
  package$math.get_float64Value_rjqryz$ = get_float64Value_1;
  package$math.get_float64Value_bvy38s$ = get_float64Value_2;
  package$math.get_fractionValue_rjqryz$ = get_fractionValue_1;
  package$math.get_fractionValue_bvy38s$ = get_fractionValue_2;
  package$math.get_min_k5zfx8$ = get_min;
  package$math.get_max_k5zfx8$ = get_max;
  package$math.get_min_qetqea$ = get_min_0;
  package$math.get_max_qetqea$ = get_max_0;
  package$math.get_min_qn7glr$ = get_min_1;
  package$math.get_max_qn7glr$ = get_max_1;
  package$math.get_min_vbrujs$ = get_min_2;
  package$math.get_max_vbrujs$ = get_max_2;
  package$math.get_leastNonzeroMagnitude_y9phqa$ = get_leastNonzeroMagnitude;
  package$math.get_min_y9phqa$ = get_min_3;
  package$math.get_greatestFiniteMagnitude_y9phqa$ = get_greatestFiniteMagnitude;
  package$math.get_max_y9phqa$ = get_max_3;
  package$math.get_leastNonzeroMagnitude_6a53gt$ = get_leastNonzeroMagnitude_0;
  package$math.get_min_6a53gt$ = get_min_4;
  package$math.get_greatestFiniteMagnitude_6a53gt$ = get_greatestFiniteMagnitude_0;
  package$math.get_max_6a53gt$ = get_max_4;
  Object.defineProperty(BezierPath, 'Companion', {
    get: BezierPath$Companion_getInstance
  });
  var package$geometry = package$math.geometry || (package$math.geometry = {});
  package$geometry.BezierPath = BezierPath;
  Object.defineProperty(CubicBezierPathSegment, 'Companion', {
    get: CubicBezierPathSegment$Companion_getInstance
  });
  package$geometry.CubicBezierPathSegment = CubicBezierPathSegment;
  package$geometry.BezierPathConvertible = BezierPathConvertible;
  package$geometry.y_dy6dsa$ = y;
  package$geometry.anyRadiansToNormalizedRadians_14dthe$ = anyRadiansToNormalizedRadians;
  package$geometry.LineSegment = LineSegment;
  Object.defineProperty(ComputableLineSegment$ThreePointOrientation, 'collinear', {
    get: ComputableLineSegment$ThreePointOrientation$collinear_getInstance
  });
  Object.defineProperty(ComputableLineSegment$ThreePointOrientation, 'clockwise', {
    get: ComputableLineSegment$ThreePointOrientation$clockwise_getInstance
  });
  Object.defineProperty(ComputableLineSegment$ThreePointOrientation, 'counterclockwise', {
    get: ComputableLineSegment$ThreePointOrientation$counterclockwise_getInstance
  });
  ComputableLineSegment.ThreePointOrientation = ComputableLineSegment$ThreePointOrientation;
  package$geometry.ComputableLineSegment = ComputableLineSegment;
  Object.defineProperty(IntersectionDescription, 'none', {
    get: IntersectionDescription$none_getInstance
  });
  IntersectionDescription.leftVertexTouchesRightVertex = IntersectionDescription$leftVertexTouchesRightVertex;
  IntersectionDescription.leftVertexTouchesRightEdge = IntersectionDescription$leftVertexTouchesRightEdge;
  IntersectionDescription.rightVertexTouchesLeftEdge = IntersectionDescription$rightVertexTouchesLeftEdge;
  IntersectionDescription.edgesCross = IntersectionDescription$edgesCross;
  IntersectionDescription.completeOverlap = IntersectionDescription$completeOverlap;
  package$geometry.IntersectionDescription = IntersectionDescription;
  LineSegmentDirection.yIncreasesMost = LineSegmentDirection$yIncreasesMost;
  LineSegmentDirection.xDecreasesMost = LineSegmentDirection$xDecreasesMost;
  LineSegmentDirection.yDecreasesMost = LineSegmentDirection$yDecreasesMost;
  LineSegmentDirection.xIncreasesMost = LineSegmentDirection$xIncreasesMost;
  Object.defineProperty(LineSegmentDirection, 'Companion', {
    get: LineSegmentDirection$Companion_getInstance
  });
  package$geometry.LineSegmentDirection = LineSegmentDirection;
  Object.defineProperty(IntegerLineSegment, 'Companion', {
    get: IntegerLineSegment$Companion_getInstance
  });
  package$geometry.IntegerLineSegment = IntegerLineSegment;
  package$geometry.get_integerValue_7lawu2$ = get_integerValue_5;
  package$geometry.integerValue_mm6051$ = integerValue_4;
  Object.defineProperty(FractionLineSegment, 'Companion', {
    get: FractionLineSegment$Companion_getInstance
  });
  package$geometry.FractionLineSegment_init_6y0v78$ = FractionLineSegment_init;
  package$geometry.FractionLineSegment = FractionLineSegment;
  package$geometry.get_fractionValue_7lawu2$ = get_fractionValue_3;
  package$geometry.Path = Path;
  Object.defineProperty(OtherSegmentRelationshipToCurrent, 'otherIsLeftNeighborOfCurrent', {
    get: OtherSegmentRelationshipToCurrent$otherIsLeftNeighborOfCurrent_getInstance
  });
  Object.defineProperty(OtherSegmentRelationshipToCurrent, 'otherIsCurrent', {
    get: OtherSegmentRelationshipToCurrent$otherIsCurrent_getInstance
  });
  Object.defineProperty(OtherSegmentRelationshipToCurrent, 'otherIsRightNeighborOfCurrent', {
    get: OtherSegmentRelationshipToCurrent$otherIsRightNeighborOfCurrent_getInstance
  });
  Object.defineProperty(OtherSegmentRelationshipToCurrent, 'otherDoesNotTouchCurrent', {
    get: OtherSegmentRelationshipToCurrent$otherDoesNotTouchCurrent_getInstance
  });
  Object.defineProperty(OtherSegmentRelationshipToCurrent, 'Companion', {
    get: OtherSegmentRelationshipToCurrent$Companion_getInstance
  });
  package$geometry.OtherSegmentRelationshipToCurrent = OtherSegmentRelationshipToCurrent;
  Object.defineProperty(ComputablePath, 'Companion', {
    get: ComputablePath$Companion_getInstance
  });
  package$geometry.ComputablePath = ComputablePath;
  Object.defineProperty(IntegerPath, 'Companion', {
    get: IntegerPath$Companion_getInstance
  });
  package$geometry.IntegerPath_init_qvnths$ = IntegerPath_init;
  package$geometry.IntegerPath_init_fi1o2m$ = IntegerPath_init_0;
  package$geometry.IntegerPath = IntegerPath;
  package$geometry.get_integerValue_vrtnvu$ = get_integerValue_6;
  Object.defineProperty(FractionPath, 'Companion', {
    get: FractionPath$Companion_getInstance
  });
  package$geometry.FractionPath_init_wa4q3i$ = FractionPath_init;
  package$geometry.FractionPath = FractionPath;
  Object.defineProperty(Point, 'Companion', {
    get: Point$Companion_getInstance
  });
  package$geometry.Point_init_tnufs7$ = Point_init;
  package$geometry.Point = Point;
  package$geometry.get_row_sy81v1$ = get_row;
  package$geometry.get_column_sy81v1$ = get_column;
  package$geometry.get_pairValue_or5298$ = get_pairValue;
  package$geometry.get_integerValue_or5298$ = get_integerValue_7;
  package$geometry.integerValue_q2vt5p$ = integerValue_5;
  package$geometry.get_fractionValue_or5298$ = get_fractionValue_4;
  package$geometry.ComputablePoint = ComputablePoint;
  Object.defineProperty(IntegerPoint, 'Companion', {
    get: IntegerPoint$Companion_getInstance
  });
  package$geometry.IntegerPoint = IntegerPoint;
  Object.defineProperty(FractionPoint, 'Companion', {
    get: FractionPoint$Companion_getInstance
  });
  package$geometry.FractionPoint_init_3pjtqy$ = FractionPoint_init;
  package$geometry.FractionPoint_init_vux9f0$ = FractionPoint_init_0;
  package$geometry.FractionPoint = FractionPoint;
  Object.defineProperty(Int8Point, 'Companion', {
    get: Int8Point$Companion_getInstance
  });
  package$geometry.Int8Point_init_vux9f0$ = Int8Point_init;
  package$geometry.Int8Point = Int8Point;
  package$geometry.Rect = Rect;
  package$geometry.ComputableRect = ComputableRect;
  Object.defineProperty(IntegerRect, 'Companion', {
    get: IntegerRect$Companion_getInstance
  });
  package$geometry.IntegerRect_init_9xn71c$ = IntegerRect_init;
  package$geometry.IntegerRect = IntegerRect;
  package$geometry.get_integerValue_jjbd33$ = get_integerValue_8;
  Object.defineProperty(FractionRect, 'Companion', {
    get: FractionRect$Companion_getInstance
  });
  package$geometry.FractionRect_init_6y0v78$ = FractionRect_init;
  package$geometry.FractionRect_init_9xn71c$ = FractionRect_init_0;
  package$geometry.FractionRect_init_tjonv8$ = FractionRect_init_1;
  package$geometry.FractionRect = FractionRect;
  package$geometry.get_fractionValue_jjbd33$ = get_fractionValue_5;
  package$geometry.times_f62570$ = times;
  package$geometry.Size = Size;
  package$geometry.ComputableSize = ComputableSize;
  package$geometry.rectangularIteratorTemplate_fizdg8$ = rectangularIteratorTemplate;
  package$geometry.contains_7bmbwc$ = contains_1;
  Object.defineProperty(RectangleScanningApproach, 'columnsAscendingThenRowsAscending', {
    get: RectangleScanningApproach$columnsAscendingThenRowsAscending_getInstance
  });
  Object.defineProperty(RectangleScanningApproach, 'rowsAscendingThenColumnsAscending', {
    get: RectangleScanningApproach$rowsAscendingThenColumnsAscending_getInstance
  });
  Object.defineProperty(RectangleScanningApproach, 'columnsAscendingThenRowsDescending', {
    get: RectangleScanningApproach$columnsAscendingThenRowsDescending_getInstance
  });
  Object.defineProperty(RectangleScanningApproach, 'rowsAscendingThenColumnsDescending', {
    get: RectangleScanningApproach$rowsAscendingThenColumnsDescending_getInstance
  });
  Object.defineProperty(RectangleScanningApproach, 'columnsDescendingThenRowsAscending', {
    get: RectangleScanningApproach$columnsDescendingThenRowsAscending_getInstance
  });
  Object.defineProperty(RectangleScanningApproach, 'rowsDescendingThenColumnsAscending', {
    get: RectangleScanningApproach$rowsDescendingThenColumnsAscending_getInstance
  });
  Object.defineProperty(RectangleScanningApproach, 'columnsDescendingThenRowsDescending', {
    get: RectangleScanningApproach$columnsDescendingThenRowsDescending_getInstance
  });
  Object.defineProperty(RectangleScanningApproach, 'rowsDescendingThenColumnsDescending', {
    get: RectangleScanningApproach$rowsDescendingThenColumnsDescending_getInstance
  });
  package$geometry.RectangleScanningApproach = RectangleScanningApproach;
  Object.defineProperty(RectangleScanningApproach, 'Companion', {
    get: RectangleScanningApproach$Companion_getInstance
  });
  Object.defineProperty(IntegerSize, 'Companion', {
    get: IntegerSize$Companion_getInstance
  });
  package$geometry.IntegerSize_init_vux9f0$ = IntegerSize_init;
  package$geometry.IntegerSize_init_s8cxhz$ = IntegerSize_init_0;
  package$geometry.IntegerSize = IntegerSize;
  Object.defineProperty(Int8Size, 'Companion', {
    get: Int8Size$Companion_getInstance
  });
  package$geometry.Int8Size_init_vux9f0$ = Int8Size_init;
  package$geometry.Int8Size_init_s8j3t7$ = Int8Size_init_0;
  package$geometry.Int8Size = Int8Size;
  Object.defineProperty(FractionSize, 'Companion', {
    get: FractionSize$Companion_getInstance
  });
  package$geometry.FractionSize_init_3pjtqy$ = FractionSize_init;
  package$geometry.FractionSize_init_vux9f0$ = FractionSize_init_0;
  package$geometry.FractionSize_init_14dthe$ = FractionSize_init_1;
  package$geometry.FractionSize_init_s8cxhz$ = FractionSize_init_2;
  package$geometry.FractionSize = FractionSize;
  package$geometry.get_integerValue_s6phli$ = get_integerValue_9;
  package$geometry.get_fractionValue_6z9w7d$ = get_fractionValue_6;
  var package$state = package$base.state || (package$base.state = {});
  package$state.State = State;
  package$state.ChangeableState = ChangeableState;
  package$state.StateChange = StateChange;
  package$state.StateController = StateController;
  package$state.StateMutationListener = StateMutationListener;
  package$state.StateMutator = StateMutator;
  package$state.StateStore = StateStore;
  package$state.BasicStateStore = BasicStateStore;
  package$state.ResettableStateStore = ResettableStateStore;
  package$state.BasicResettableStateStore = BasicResettableStateStore;
  var package$strings = package$base.strings || (package$base.strings = {});
  package$strings.contains_dqglrj$ = contains_2;
  package$strings.toString_c3hn6p$ = toString_7;
  package$strings.toString_ku60lu$ = toString_8;
  package$strings.toString_30um8v$ = toString_9;
  package$strings.toString_unfl2e$ = toString_10;
  package$strings.isUpperCase_myv2d0$ = isUpperCase;
  package$strings.isLowerCase_myv2d0$ = isLowerCase;
  package$strings.toAbbreviation_b6aurr$ = toAbbreviation;
  package$strings.plus_769w4y$ = plus_0;
  package$strings.plus_w8y83w$ = plus_1;
  package$strings.concat_byqnqh$ = concat;
  package$strings.containsIgnoreCase_b6aurr$ = containsIgnoreCase;
  package$strings.repeat_bb0mfs$ = repeat_0;
  package$strings.times_bb0mfs$ = times_0;
  package$strings.times_6ic1pp$ = times_1;
  package$strings.times_6etyc3$ = times_2;
  package$strings.differingCharacters_b6aurr$ = differingCharacters;
  package$strings.DifferingCharacter = DifferingCharacter;
  package$strings.isNeitherNullNorEmpty_5cw0du$ = isNeitherNullNorEmpty;
  package$strings.isNeitherNullNorBlank_5cw0du$ = isNeitherNullNorBlank;
  var package$struct = package$base.struct || (package$base.struct = {});
  package$struct.UIView = UIView;
  package$struct.UIViewController = UIViewController;
  package$struct.UIWindow = UIWindow;
  package$struct.UIWindowController = UIWindowController;
  package$struct.DataViewController = DataViewController;
  package$struct.DataView = DataView;
  package$struct.Data = Data;
  package$struct.DataAccessor = DataAccessor;
  package$struct.Presentable = Presentable;
  package$struct.show_wrj9x5$ = show;
  FiniteAmountSummary.all = FiniteAmountSummary$all;
  FiniteAmountSummary.some = FiniteAmountSummary$some;
  FiniteAmountSummary.none = FiniteAmountSummary$none;
  Object.defineProperty(FiniteAmountSummary, 'Companion', {
    get: FiniteAmountSummary$Companion_getInstance
  });
  package$struct.FiniteAmountSummary = FiniteAmountSummary;
  package$struct.invoke_27ruav$ = invoke;
  package$struct.invoke_4xrro1$ = invoke_0;
  Object.defineProperty(OpenRange, 'Companion', {
    get: OpenRange$Companion_getInstance
  });
  package$struct.OpenRange_init_f1zjgi$ = OpenRange_init;
  package$struct.OpenRange = OpenRange;
  package$struct.get_start_u0ql2x$ = get_start;
  package$struct.get_end_u0ql2x$ = get_end;
  package$struct.ComputableOpenRange = ComputableOpenRange;
  Object.defineProperty(FractionOpenRange$Companion.prototype, 'empty', {
    get: FractionOpenRange$Companion$empty_getInstance
  });
  Object.defineProperty(FractionOpenRange, 'Companion', {
    get: FractionOpenRange$Companion_getInstance
  });
  package$struct.FractionOpenRange_init_14dthe$ = FractionOpenRange_init;
  package$struct.FractionOpenRange = FractionOpenRange;
  package$struct.get_fractionValue_spb447$ = get_fractionValue_7;
  package$struct.get_location_fesz6v$ = get_location;
  package$struct.get_size_w88xvb$ = get_size;
  package$struct.get_length_w88xvb$ = get_length_1;
  package$struct.get_count_w88xvb$ = get_count_1;
  package$struct.get_min_fesz6v$ = get_min_5;
  package$struct.get_max_fesz6v$ = get_max_5;
  package$struct.containsCompletely_h4y4nt$ = containsCompletely;
  package$struct.isWithin_l9q0e5$ = isWithin_0;
  package$struct.ClosedRange_f1zjgi$ = ClosedRange;
  package$struct.ClosedRange_sdesaw$ = ClosedRange_0;
  package$struct.ClosedRange_vux9f0$ = ClosedRange_1;
  package$struct.get_lowerBound_fesz6v$ = get_lowerBound;
  package$struct.get_upperBound_fesz6v$ = get_upperBound;
  package$struct.compareTo_h4y4nt$ = compareTo;
  package$struct.get_size_38ipng$ = get_size_0;
  package$struct.get_size_p6y9l$ = get_size_1;
  package$struct.get_fractionValue_566i2f$ = get_fractionValue_8;
  package$struct.SortClosedRanges = SortClosedRanges;
  package$struct.get_int32Value_566i2f$ = get_int32Value_10;
  package$struct.get_integerValue_566i2f$ = get_integerValue_10;
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
  package$struct.Version_init_haxa4a$ = Version_init;
  package$struct.Version = Version;
  package$struct.v_2muz52$ = v;
  package$struct.v_haxa4a$ = v_0;
  Object.defineProperty(VersionChannel, '\u03BB', {
    get: VersionChannel$λ_getInstance
  });
  Object.defineProperty(VersionChannel, '\u03B1', {
    get: VersionChannel$α_getInstance
  });
  Object.defineProperty(VersionChannel, '\u03B2', {
    get: VersionChannel$β_getInstance
  });
  Object.defineProperty(VersionChannel, 'stable', {
    get: VersionChannel$stable_getInstance
  });
  Object.defineProperty(VersionChannel, 'Companion', {
    get: VersionChannel$Companion_getInstance
  });
  package$struct.VersionChannel = VersionChannel;
  var package$util = package$base.util || (package$base.util = {});
  Object.defineProperty(package$util, 'isDebugBuild', {
    get: function () {
      return isDebugBuild;
    },
    set: function (value) {
      isDebugBuild = value;
    }
  });
  package$util.assert_8kj6y5$ = assert_0;
  package$util.assertionFailure_61zpoe$ = assertionFailure;
  package$util.toBooleanOrNull_s8jyvk$ = toBooleanOrNull;
  package$util.deepCopy_eoe559$ = deepCopy;
  package$util.safeTry_klfg04$ = safeTry;
  Object.defineProperty(package$util, 'IdManager', {
    get: IdManager_getInstance
  });
  package$util.get_timeIntervalValue_mz3mee$ = get_timeIntervalValue;
  package$util.get_timeIntervalValue_5vcgdc$ = get_timeIntervalValue_0;
  package$util.get_timeIntervalValue_s8ev3n$ = get_timeIntervalValue_1;
  package$util.get_timeIntervalValue_mts6qi$ = get_timeIntervalValue_2;
  package$util.get_timeIntervalValue_81szk$ = get_timeIntervalValue_3;
  package$util.get_timeIntervalValue_yrwdxr$ = get_timeIntervalValue_4;
  Object.defineProperty(package$util, 'TimeConversion', {
    get: TimeConversion_getInstance
  });
  Object.defineProperty(TimeUnit, 'nanoseconds', {
    get: TimeUnit$nanoseconds_getInstance
  });
  Object.defineProperty(TimeUnit, 'microseconds', {
    get: TimeUnit$microseconds_getInstance
  });
  Object.defineProperty(TimeUnit, 'milliseconds', {
    get: TimeUnit$milliseconds_getInstance
  });
  Object.defineProperty(TimeUnit, 'seconds', {
    get: TimeUnit$seconds_getInstance
  });
  Object.defineProperty(TimeUnit, 'minutes', {
    get: TimeUnit$minutes_getInstance
  });
  Object.defineProperty(TimeUnit, 'hours', {
    get: TimeUnit$hours_getInstance
  });
  Object.defineProperty(TimeUnit, 'days', {
    get: TimeUnit$days_getInstance
  });
  Object.defineProperty(TimeUnit, 'weeks', {
    get: TimeUnit$weeks_getInstance
  });
  Object.defineProperty(TimeUnit, 'years', {
    get: TimeUnit$years_getInstance
  });
  package$util.TimeUnit = TimeUnit;
  Object.defineProperty(TimeUnit, 'Companion', {
    get: TimeUnit$Companion_getInstance
  });
  package$util.TimeAmount = TimeAmount;
  package$util.get_asMilliseconds_yrwdxr$ = get_asMilliseconds;
  package$util.get_asNanoseconds_yrwdxr$ = get_asNanoseconds;
  package$util.get_seconds_9x1022$ = get_seconds;
  package$util.get_timeIntervalValue_9x1022$ = get_timeIntervalValue_5;
  package$util.convert_8g8cfb$ = convert;
  var package$io = package$tools.io || (package$tools.io = {});
  var package$logging_0 = package$io.logging || (package$io.logging = {});
  package$logging_0.consoleLogString_61zpoe$ = consoleLogString;
  package$logging_0.log_hyc7mn$ = log;
  package$logging_0.alsoLog_vxumlc$ = alsoLog;
  package$logging_0.consoleLog_mh5how$ = consoleLog;
  package$logging_0.log_7uhc0p$ = log_0;
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
  package$widget.CheckboxData = CheckboxData;
  package$widget.TernaryCheckbox = TernaryCheckbox;
  package$widget.TernaryCheckboxData = TernaryCheckboxData;
  package$widget.CheckboxBase = CheckboxBase;
  package$widget.get_state_iwirhj$ = get_state;
  package$widget.set_state_wqs4ip$ = set_state;
  package$widget.get_text_1f5rzv$ = get_text;
  package$widget.set_text_ba23jn$ = set_text;
  package$widget.CheckboxDataBase = CheckboxDataBase;
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
  var package$DecisionCruncher = _.DecisionCruncher || (_.DecisionCruncher = {});
  package$DecisionCruncher.AppViewController = AppViewController;
  Object.defineProperty(package$DecisionCruncher, 'DecisionCrunchEngine', {
    get: DecisionCrunchEngine_getInstance
  });
  package$DecisionCruncher.main_kand9s$ = main;
  package$DecisionCruncher.Decision = Decision;
  package$DecisionCruncher.MutableDecision = MutableDecision;
  package$DecisionCruncher.immutableCopy_5rvit3$ = immutableCopy;
  var package$Structures = package$DecisionCruncher.Structures || (package$DecisionCruncher.Structures = {});
  package$Structures.DecisionCruncherState = DecisionCruncherState;
  package$DecisionCruncher.DecisionInput = DecisionInput;
  Object.defineProperty(Serializable, 'Companion', {
    get: Serializable$Companion_getInstance
  });
  package$DecisionCruncher.Serializable = Serializable;
  Object.defineProperty(SerializableDecisionCruncherState, 'Companion', {
    get: SerializableDecisionCruncherState$Companion_getInstance
  });
  package$DecisionCruncher.S = SerializableDecisionCruncherState;
  Object.defineProperty(SerializableOption, 'Companion', {
    get: SerializableOption$Companion_getInstance
  });
  package$DecisionCruncher.SerializableOption = SerializableOption;
  package$DecisionCruncher.SerializableRequirement = SerializableRequirement;
  package$DecisionCruncher.Option = Option;
  package$DecisionCruncher.RequirementConformance = RequirementConformance;
  Requirement$IdealValue.fullRange = Requirement$IdealValue$fullRange;
  Requirement$IdealValue.higherIsBetter = Requirement$IdealValue$higherIsBetter;
  Requirement$IdealValue.lowerIsBetter = Requirement$IdealValue$lowerIsBetter;
  Requirement$IdealValue.oneIdealInput = Requirement$IdealValue$oneIdealInput;
  Object.defineProperty(Requirement$IdealValue, 'meaninglessValue', {
    get: Requirement$IdealValue$meaninglessValue_getInstance
  });
  Requirement.IdealValue = Requirement$IdealValue;
  package$DecisionCruncher.Requirement = Requirement;
  var package$jQueryInterface = _.jQueryInterface || (_.jQueryInterface = {});
  package$jQueryInterface.asList_9ufosi$ = asList_0;
  package$jQueryInterface.mapNotNull_fo801r$ = mapNotNull;
  package$jQueryInterface.iterator_9ufosi$ = iterator_0;
  package$jQueryInterface.forEach_f8zjg0$ = forEach_0;
  package$jQueryInterface.forEachIndexed_53xvis$ = forEachIndexed;
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
  DeltaStack.prototype.reset_g14lj2$ = ResettableStateStore.prototype.reset_g14lj2$;
  RadixNumberParts.prototype.equals_ri9j6v$ = TolerableEquality.prototype.equals_ri9j6v$;
  FractionPath.prototype.anyTwoSegments_wfe1ij$ = ComputablePath.prototype.anyTwoSegments_wfe1ij$;
  FractionPath.prototype.contains_keqjwe$ = ComputablePath.prototype.contains_keqjwe$;
  LineSegment.prototype.toTuple = TupleConvertible.prototype.toTuple;
  ComputableLineSegment.prototype.equals_ri9j6v$ = TolerableEquality.prototype.equals_ri9j6v$;
  IntegerPath.prototype.anyTwoSegments_wfe1ij$ = ComputablePath.prototype.anyTwoSegments_wfe1ij$;
  IntegerPath.prototype.contains_keqjwe$ = ComputablePath.prototype.contains_keqjwe$;
  ComputablePoint.prototype.equals_ri9j6v$ = TolerableEquality.prototype.equals_ri9j6v$;
  ComputableRect.prototype.equals_ri9j6v$ = TolerableEquality.prototype.equals_ri9j6v$;
  BasicResettableStateStore.prototype.reset_g14lj2$ = ResettableStateStore.prototype.reset_g14lj2$;
  Object.defineProperty(TernaryCheckbox.prototype, 'state', Object.getOwnPropertyDescriptor(CheckboxBase.prototype, 'state'));
  Object.defineProperty(TernaryCheckbox.prototype, 'text', Object.getOwnPropertyDescriptor(CheckboxBase.prototype, 'text'));
  Object.defineProperty(TernaryCheckboxTree.prototype, 'state', Object.getOwnPropertyDescriptor(TernaryCheckbox.prototype, 'state'));
  Object.defineProperty(TernaryCheckboxTree.prototype, 'text', Object.getOwnPropertyDescriptor(TernaryCheckbox.prototype, 'text'));
  Object.defineProperty(CssHtmlAttributeWithValue.prototype, 'cssSelectorString', Object.getOwnPropertyDescriptor(CssHtmlAttribute.prototype, 'cssSelectorString'));
  DataAttribute.prototype.cssSelectorString_8ij0n9$ = CssHtmlAttributeWithValue.prototype.cssSelectorString_8ij0n9$;
  Object.defineProperty(DataAttribute.prototype, 'cssSelectorString', Object.getOwnPropertyDescriptor(CssHtmlAttributeWithValue.prototype, 'cssSelectorString'));
  Object.defineProperty(Checkbox.prototype, 'state', Object.getOwnPropertyDescriptor(CheckboxBase.prototype, 'state'));
  Object.defineProperty(Checkbox.prototype, 'text', Object.getOwnPropertyDescriptor(CheckboxBase.prototype, 'text'));
  Object.defineProperty(JSCheckboxController.prototype, 'state', Object.getOwnPropertyDescriptor(TernaryCheckbox.prototype, 'state'));
  Object.defineProperty(JSCheckboxController.prototype, 'text', Object.getOwnPropertyDescriptor(TernaryCheckbox.prototype, 'text'));
  notFound = null;
  notFoundNumber = Long$Companion$MIN_VALUE;
  defaultFloat32CalculationTolerance = 1.0E-4;
  defaultFloat64CalculationTolerance = 1.0E-4;
  defaultFractionCalculationTolerance = 1.0E-4;
  defaultIntegerCalculationTolerance = L0;
  Float64_e = 2.718281828459045;
  Float64_log2_e = 1.4426950408889634;
  Float64_log10_e = 0.4342944819032518;
  Float64_ln_2 = 0.6931471805599453;
  Float64_ln_10 = 2.302585092994046;
  Float64_quarter_pi = 0.7853981633974483;
  Float64_half_pi = 1.5707963267948966;
  Float64_3_quarter_pi = 2.356194490192345;
  Float64_pi = 3.141592653589793;
  Float64_5_quarter_pi = 3.9269908169872414;
  Float64_7_quarter_pi = 5.497787143782138;
  Float64_double_pi = 6.283185307179586;
  Float64_quadruple_pi = 12.566370614359172;
  Float64_inverse_pi = 0.3183098861837907;
  Float64_2_over_pi = 0.6366197723675814;
  Float64_2_over_sqrt_pi = 1.1283791670955126;
  Float64_sqrt_2 = 1.4142135623730951;
  Float64_inverse_sqrt_2 = 0.7071067811865476;
  Float32_e = 2.7182817;
  Float32_log2_e = 1.442695;
  Float32_log10_e = 0.4342945;
  Float32_ln_2 = 0.6931472;
  Float32_ln_10 = 2.3025851;
  Float32_pi = 3.1415927;
  Float32_half_pi = 1.5707964;
  Float32_quarter_pi = 0.7853982;
  Float32_3_quarter_pi = 2.3561945;
  Float32_5_quarter_pi = 3.9269907;
  Float32_7_quarter_pi = 5.497787;
  Float32_double_pi = 6.2831855;
  Float32_quadruple_pi = 12.566371;
  Float32_inverse_pi = 0.31830987;
  Float32_2_over_pi = 0.63661975;
  Float32_2_over_sqrt_pi = 1.1283792;
  Float32_sqrt_2 = 1.4142135;
  Float32_inverse_sqrt_2 = 0.70710677;
  isDebugBuild = false;
  shortIds_v1 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_#';
  main([]);
  Kotlin.defineModule('Decision-Cruncher', _);
  return _;
}));

//# sourceMappingURL=Decision-Cruncher.js.map
