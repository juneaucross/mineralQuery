'use strict';

// visibility settings
$('.description-text--more').hide();

// media querys options
if ($(window).width() < 600) {
  $('.main__output-area').hide();
}

//Обычный анионный метод без разделения железа

// CONSTS
var NA2O_MOL = 61.979;
var K2O_MOL = 94.196;
var AL2O3_MOL = 101.961;
var MGO_MOL = 40.304;
var FEO_MOL = 71.846;
var CAO_MOL = 56.077;
var MNO_MOL = 70.938;
var TIO2_MOL = 79.879;
var SIO2_MOL = 60.084;
var CL_MOL = 35.453;

// setting element values
var Na2O = 0, K2O = 0, Al2O3 = 0, MgO = 0, FeO = 0, CaO = 0, MnO = 0, TiO2 = 0, SiO2 = 0, Cl = 0;

// getting inputs values
$('#Na2O-input').on('input', function() {
  Na2O = this.value;
});
$('#K2O-input').on('input', function() {
  K2O = this.value;
});
$('#Al2O3-input').on('input', function() {
  Al2O3 = this.value;
});
$('#MgO-input').on('input', function() {
  MgO = this.value;
});
$('#FeO-input').on('input', function() {
  FeO = this.value;
});
$('#CaO-input').on('input', function() {
  CaO = this.value;
});
$('#MnO-input').on('input', function() {
  MnO = this.value;
});
$('#TiO2-input').on('input', function() {
  TiO2 = this.value;
});
$('#SiO2-input').on('input', function() {
  SiO2 = this.value;
});
$('#Cl-input').on('input', function() {
  Cl = this.value;
});

//calculate function
var calculate = function () {

  var getMolRatio = function (elem, mol) {
    var molRatio = elem / mol;
    return molRatio;
  };

  var Na2O_MolRatio = getMolRatio(Na2O, NA2O_MOL) * 2;
  var K2O_MolRatio = getMolRatio(K2O, K2O_MOL) * 2;
  var Al2O3_MolRatio = getMolRatio(Al2O3, AL2O3_MOL) * 2;
  var MgO_MolRatio = getMolRatio(MgO, MGO_MOL);
  var FeO_MolRatio = getMolRatio(FeO, FEO_MOL);
  var CaO_MolRatio = getMolRatio(CaO, CAO_MOL);
  var MnO_MolRatio = getMolRatio(MnO, MNO_MOL);
  var TiO2_MolRatio = getMolRatio(TiO2, TIO2_MOL);
  var SiO2_MolRatio = getMolRatio(SiO2, SIO2_MOL);
  var Cl_MolRatio = getMolRatio(Cl, CL_MOL);

  var getAmphiboleFactor =  function () {

    var amphiboleFactor = (Na2O_MolRatio + K2O_MolRatio + Al2O3_MolRatio + MgO_MolRatio + FeO_MolRatio + CaO_MolRatio + MnO_MolRatio + TiO2_MolRatio + SiO2_MolRatio + Cl_MolRatio) / 15;
    return amphiboleFactor;
  }

  var Na2O_final = Na2O_MolRatio / getAmphiboleFactor();
  var K2O_final = K2O_MolRatio / getAmphiboleFactor();
  var Al2O3_final = Al2O3_MolRatio / getAmphiboleFactor();
  var MgO_final = MgO_MolRatio / getAmphiboleFactor();
  var FeO_final = FeO_MolRatio / getAmphiboleFactor();
  var CaO_final = CaO_MolRatio / getAmphiboleFactor();
  var MnO_final = MnO_MolRatio / getAmphiboleFactor();
  var TiO2_final = TiO2_MolRatio / getAmphiboleFactor();
  var SiO2_final = SiO2_MolRatio / getAmphiboleFactor();
  var Cl_final = Cl_MolRatio / getAmphiboleFactor();

  var setToFixed = function (elem) {
    if (elem === 0) {
      return elem;
    } else if (isNaN(elem)){
      return 0;
    } else {
      return elem.toFixed(2);
    }
  };

  // setting outputs values
  $('#Na2O-output').text(setToFixed(Na2O_final));
  $('#K2O-output').text(setToFixed(K2O_final));
  $('#Al2O3-output').text(setToFixed(Al2O3_final));
  $('#MgO-output').text(setToFixed(MgO_final));
  $('#FeO-output').text(setToFixed(FeO_final));
  $('#CaO-output').text(setToFixed(CaO_final));
  $('#MnO-output').text(setToFixed(MnO_final));
  $('#TiO2-output').text(setToFixed(TiO2_final));
  $('#SiO2-output').text(setToFixed(SiO2_final));
  $('#Cl-output').text(setToFixed(Cl_final));

  //media settings
  if ($(window).width() < 600) {
    $('.main__output-area').slideDown('fast', function () {
      $('html, body').animate({ scrollTop: $(document).height() }, 'fast');
    });
  }
};

//clear function
var clear = function () {
  Na2O = 0;
  K2O = 0;
  Al2O3 = 0;
  MgO = 0;
  FeO = 0;
  CaO = 0;
  MnO = 0;
  TiO2 = 0;
  SiO2 = 0;
  Cl = 0;
  $('.main__input').val('');
  $('.main__output').text('');
  inputsArr.length = 0;

  $('.button--calculate').prop('disabled', true);

  //media settings
  if ($(window).width() < 600) {
    $('.main__output-area').slideUp('fast', function () {});
  }

};

// setting inputs keypress event
$(document).keydown(function(e) {
  if (e.which == 13 && inputsArr.length >= 2) {
    $('.button--calculate').addClass('button--calculate--active');
  }
});

$(document).keyup(function(e) {
  if (e.which == 13 && inputsArr.length >= 2) {
    $('.button--calculate').removeClass('button--calculate--active');
    calculate();
  }
});

// set buttons events
$('.button--calculate').on('click', function () {
  calculate();
});

$('.button--clear').on('click', function () {
  clear();
});

// description visibility
$('.description-toggle').on('click', function () {
  $('.description-text--more').fadeToggle('fast', function() {
    if ($('.description-text--more').is(':hidden'))
    {
      $('.description-toggle').text('Show more.');
    } else if ($('.description-text--more').not(':hidden')) {
      $('.description-toggle').text('Show less.');
    }
  });
});

// button disable settings
  $('.button--calculate').prop('disabled', true);

var inputsArr = [];
$('.main').on('input', function (e) {
e.preventDefault();
inputsArr = Array.prototype.filter.call($('.main__input'), item => {
  return item.value !== '';
});

if (inputsArr.length < 2) {
  $('.button--calculate').prop('disabled', true);
} else if (inputsArr.length >= 2) {
  $('.button--calculate').prop('disabled', false);
}

});
