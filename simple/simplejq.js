'use strict';

// CONSTS
var NA2O_MOL = 61.979;
var K2O_MOL = 94.196;
var AL2O3_MOL = 101.961;
var MGO_MOL = 40.304;
var FEO_MOL = 71.846;
var FE2O3_MOL = 159.692; // new
var CAO_MOL = 56.077;
var MNO_MOL = 70.938;
var TIO2_MOL = 79.879;
var SIO2_MOL = 60.084;
var H2O_MOL = 18.015;

// setting element values
var Na2O = 0, K2O = 0, Al2O3 = 0, MgO = 0, FeO = 0, Fe2O3 = 0, CaO = 0, MnO = 0, TiO2 = 0, SiO2 = 0, H2O = 0;

// setting inputs keypress event
$('.main__input').keypress(function(e) {
  if (e.which == 13) {
    calculate();
  }
});

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
$('#Fe2O3-input').on('input', function() {
  Fe2O3 = this.value;
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
$('#H2O-input').on('input', function() {
  H2O = this.value;
});

//calculate function
var calculate = function () {

  var getMolRatio = function (elem, mol) {
    var molRatio = elem / mol;
    return molRatio;
  };

  // mol ratios
  var Na2O_MolRatio = getMolRatio(Na2O, NA2O_MOL);
  var K2O_MolRatio = getMolRatio(K2O, K2O_MOL);
  var Al2O3_MolRatio = getMolRatio(Al2O3, AL2O3_MOL);
  var MgO_MolRatio = getMolRatio(MgO, MGO_MOL);
  var FeO_MolRatio = getMolRatio(FeO, FEO_MOL);
  var Fe2O3_MolRatio = getMolRatio(Fe2O3, FE2O3_MOL);
  var CaO_MolRatio = getMolRatio(CaO, CAO_MOL);
  var MnO_MolRatio = getMolRatio(MnO, MNO_MOL);
  var TiO2_MolRatio = getMolRatio(TiO2, TIO2_MOL);
  var SiO2_MolRatio = getMolRatio(SiO2, SIO2_MOL);
  var H2O_MolRatio = getMolRatio(H2O, H2O_MOL);

  // anion ratios
  var Na2O_anionRatio = Na2O_MolRatio;
  var K2O_anionRatio = K2O_MolRatio;
  var Al2O3_anionRatio = Al2O3_MolRatio * 3;
  var MgO_anionRatio = MgO_MolRatio;
  var FeO_anionRatio = FeO_MolRatio;
  var Fe2O3_anionRatio = Fe2O3_MolRatio * 3;
  var CaO_anionRatio = CaO_MolRatio;
  var MnO_anionRatio = MnO_MolRatio;
  var TiO2_anionRatio = TiO2_MolRatio * 2;
  var SiO2_anionRatio = SiO2_MolRatio * 2;
  var H2O_anionRatio = H2O_MolRatio;

  // cation ratios
  var Na2O_cationRatio = Na2O_MolRatio * 2;
  var K2O_cationRatio = K2O_MolRatio * 2;
  var Al2O3_cationRatio = Al2O3_MolRatio * 2;
  var MgO_cationRatio = MgO_MolRatio;
  var FeO_cationRatio = FeO_MolRatio;
  var Fe2O3_cationRatio = Fe2O3_MolRatio * 2;
  var CaO_cationRatio = CaO_MolRatio;
  var MnO_cationRatio = MnO_MolRatio;
  var TiO2_cationRatio = TiO2_MolRatio;
  var SiO2_cationRatio = SiO2_MolRatio;
  var H2O_cationRatio = H2O_MolRatio * 2;

  var getAnionRatioFactor = function (divisor) {
    // prosto anion rating
    return (Na2O_anionRatio + K2O_anionRatio + Al2O3_anionRatio + MgO_anionRatio + FeO_anionRatio + Fe2O3_anionRatio + CaO_anionRatio + MnO_anionRatio + TiO2_anionRatio + SiO2_anionRatio + H2O_anionRatio) / divisor;
  }

  var getApfu = function (mineral) {
    return mineral / getAnionRatioFactor(mineralSelect);
  }

console.log(mineralSelect);

  // apfu
  var Na2O_apfu = getApfu(Na2O_cationRatio);
  var K2O_apfu = getApfu(K2O_cationRatio);
  var Al2O3_apfu = getApfu(Al2O3_cationRatio);
  var MgO_apfu = getApfu(MgO_cationRatio);
  var FeO_apfu = getApfu(FeO_cationRatio);
  var Fe2O3_apfu = getApfu(Fe2O3_cationRatio);
  var CaO_apfu = getApfu(CaO_cationRatio);
  var MnO_apfu = getApfu(MnO_cationRatio);
  var TiO2_apfu = getApfu(TiO2_cationRatio);
  var SiO2_apfu = getApfu(SiO2_cationRatio);
  var H2O_apfu = getApfu(H2O_cationRatio);

  var setToFixed = function (elem) {
    if (elem === 0) {
      return elem;
    } else if (elem.toFixed(2) < 0.0001) {
      return 0;
    } else if (isNaN(elem)) {
      return 0;
    } else {
      return elem.toFixed(2);
    }
  }

  // setting outputs values
  $('#Na2O-output').text(setToFixed(Na2O_apfu));
  $('#K2O-output').text(setToFixed(K2O_apfu));
  $('#Al2O3-output').text(setToFixed(Al2O3_apfu));
  $('#MgO-output').text(setToFixed(MgO_apfu));
  $('#FeO-output').text(setToFixed(FeO_apfu));
  $('#Fe2O3-output').text(setToFixed(Fe2O3_apfu));
  $('#CaO-output').text(setToFixed(CaO_apfu));
  $('#MnO-output').text(setToFixed(MnO_apfu));
  $('#TiO2-output').text(setToFixed(TiO2_apfu));
  $('#SiO2-output').text(setToFixed(SiO2_apfu));
  $('#H2O-output').text(setToFixed(H2O_apfu));

};

// set buttons events
$('.button--calculate').on('click', function () {
  calculate();
});
$('.button--clear').on('click', function () {
  clear();
});

var mineralSelect = $('#mineral-select')[0].value;
$('#mineral-select').on('change', function() {
  mineralSelect = $('#mineral-select')[0].value;
  console.log(mineralSelect);
});
// var mineralSelect = document.querySelector('.mineral-select');


//clear function
var clear = function () {
  Na2O = 0;
  K2O = 0;
  Al2O3 = 0;
  MgO = 0;
  FeO = 0;
  Fe2O3 = 0;
  CaO = 0;
  MnO = 0;
  TiO2 = 0;
  SiO2 = 0;
  H2O = 0;
  $('.main__input').val('');
  $('.main__output').text('');
};

// buttonCalculate.addEventListener('click', function (evt) {
//
//   evt.preventDefault();
//
//
//
//
//
//
//
//   // // prost outputy dlya prilojeniya
//   // document.querySelector('#Na2O-output').innerText = setToFixed(Na2O_apfu);
//   // document.querySelector('#K2O-output').innerText = setToFixed(K2O_apfu);
//   // document.querySelector('#Al2O3-output').innerText = setToFixed(Al2O3_apfu);
//   // document.querySelector('#MgO-output').innerText = setToFixed(MgO_apfu);
//   // document.querySelector('#FeO-output').innerText = setToFixed(FeO_apfu);
//   // document.querySelector('#Fe2O3-output').innerText = setToFixed(Fe2O3_apfu);
//   // document.querySelector('#CaO-output').innerText = setToFixed(CaO_apfu);
//   // document.querySelector('#MnO-output').innerText = setToFixed(MnO_apfu);
//   // document.querySelector('#TiO2-output').innerText = setToFixed(TiO2_apfu);
//   // document.querySelector('#SiO2-output').innerText = setToFixed(SiO2_apfu);
//   // document.querySelector('#Cl-output').innerText = setToFixed(Cl_apfu);
//
// });

// set buttons events
$('.button--calculate').on('click', function () {
  calculate();
});
$('.button--clear').on('click', function () {
  clear();
});

// buttonClear.addEventListener('click', function (evt) {
//
//   // output clear
//   document.querySelector('#Na2O-output').innerText = '';
//   document.querySelector('#K2O-output').innerText = '';
//   document.querySelector('#Al2O3-output').innerText = '';
//   document.querySelector('#MgO-output').innerText = '';
//   document.querySelector('#FeO-output').innerText = '';
//   document.querySelector('#Fe2O3-output').innerText = '';
//   document.querySelector('#CaO-output').innerText = '';
//   document.querySelector('#MnO-output').innerText = '';
//   document.querySelector('#TiO2-output').innerText = '';
//   document.querySelector('#SiO2-output').innerText = '';
//   document.querySelector('#Cl-output').innerText = '';
//
//   // input clear
//   document.querySelector('#Na2O-input').value = '';
//   document.querySelector('#K2O-input').value = '';
//   document.querySelector('#Al2O3-input').value = '';
//   document.querySelector('#MgO-input').value = '';
//   document.querySelector('#FeO-input').value = '';
//   document.querySelector('#Fe2O3-input').value = '';
//   document.querySelector('#CaO-input').value = '';
//   document.querySelector('#MnO-input').value = '';
//   document.querySelector('#TiO2-input').value = '';
//   document.querySelector('#SiO2-input').value = '';
//   document.querySelector('#Cl-input').value = '';
//
// });


// thats all, falks
