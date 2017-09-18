'use strict';

// consts
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

//inputs
// var Na2O = document.querySelector('#Na2O-input');
// var K2O = document.querySelector('#K2O-input').value;
// var Al2O3 = document.querySelector('#Al2O3-input').value;
// var MgO = document.querySelector('#MgO-input').value;
// var FeO = document.querySelector('#FeO-input').value;
// var CaO = document.querySelector('#CaO-input').value;
// var MnO = document.querySelector('#MnO-input').value;
// var TiO2 = document.querySelector('#TiO2-input').value;
// var SiO2 = document.querySelector('#SiO2-input').value;
// var Cl = document.querySelector('#Cl-input').value;

// console.dir(Na2O);

var getMolRatio = function (elem, mol) {
  var molRatio = elem / mol;
  // console.log(molRatio);
  return molRatio;
}

var getAmphiboleFactor =  function () {
  var amphiboleFactor = (getMolRatio(Na2O, NA2O_MOL)*2 + getMolRatio(K2O, K2O_MOL)*2 + getMolRatio(Al2O3, AL2O3_MOL)*2 + getMolRatio(MgO, MGO_MOL) + getMolRatio(FeO, FEO_MOL) + getMolRatio(CaO, CAO_MOL) + getMolRatio(MnO, MNO_MOL) + getMolRatio(TiO2, TIO2_MOL) + getMolRatio(SiO2, SIO2_MOL) + getMolRatio(Cl, CL_MOL)) / 15;
  return console.log(amphiboleFactor);
  // return amphiboleFactor;
}

// getAmphiboleFactor();

var button = document.querySelector('.btn');

button.addEventListener('click', function (evt) {

  var Na2O = document.querySelector('#Na2O-input').value;
  var K2O = document.querySelector('#K2O-input').value;
  var Al2O3 = document.querySelector('#Al2O3-input').value;
  var MgO = document.querySelector('#MgO-input').value;
  var FeO = document.querySelector('#FeO-input').value;
  var CaO = document.querySelector('#CaO-input').value;
  var MnO = document.querySelector('#MnO-input').value;
  var TiO2 = document.querySelector('#TiO2-input').value;
  var SiO2 = document.querySelector('#SiO2-input').value;
  var Cl = document.querySelector('#Cl-input').value;

  evt.preventDefault();

  // console.log(Cl, CL_MOL);

  var getMolRatio = function (elem, mol) {
    var molRatio = elem / mol;
    // console.log(molRatio);
    return molRatio;
  }

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

  // var getAmphiboleFactor =  function () {
  //   var amphiboleFactor = ((getMolRatio(Na2O, NA2O_MOL)*2) + (getMolRatio(K2O, K2O_MOL)*2) + (getMolRatio(Al2O3, AL2O3_MOL)*2) + getMolRatio(MgO, MGO_MOL) + getMolRatio(FeO, FEO_MOL) + getMolRatio(CaO, CAO_MOL) + getMolRatio(MnO, MNO_MOL) + getMolRatio(TiO2, TIO2_MOL) + getMolRatio(SiO2, SIO2_MOL) + getMolRatio(Cl, CL_MOL)) / 15;
  //
  //   return console.log(amphiboleFactor);
  //   return amphiboleFactor;
  // }

  var getAmphiboleFactor =  function () {
    var amphiboleFactor = (Na2O_MolRatio + K2O_MolRatio + Al2O3_MolRatio + MgO_MolRatio + FeO_MolRatio + CaO_MolRatio + MnO_MolRatio + TiO2_MolRatio + SiO2_MolRatio + Cl_MolRatio) / 15;

    console.log(amphiboleFactor);
    return amphiboleFactor;
  }

  // getAmphiboleFactor();

  Na2O = getMolRatio(Na2O, NA2O_MOL) / getAmphiboleFactor();
  K2O = getMolRatio(K2O, K2O_MOL) / getAmphiboleFactor();
  Al2O3 = getMolRatio(Al2O3, AL2O3_MOL) / getAmphiboleFactor();
  MgO = getMolRatio(MgO, MGO_MOL) / getAmphiboleFactor();
  FeO = getMolRatio(FeO, FEO_MOL) / getAmphiboleFactor();
  CaO = getMolRatio(CaO, CAO_MOL) / getAmphiboleFactor();
  MnO = getMolRatio(MnO, MNO_MOL) / getAmphiboleFactor();
  TiO2 = getMolRatio(TiO2, TIO2_MOL) / getAmphiboleFactor();
  SiO2 = getMolRatio(SiO2, SIO2_MOL) / getAmphiboleFactor();
  Cl = getMolRatio(Cl, CL_MOL) / getAmphiboleFactor();

  console.log(Cl);
});
// button.addEventListener('click', getAmphiboleFactor());
