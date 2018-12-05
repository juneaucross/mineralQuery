'use strict';

// var Chart = require('node_modules/chart.js/dist/Chart.js');

// visibility settings
$('.description-text--more').hide();
$('.main__input-cell--H2O').hide();
$('.main__output-cell--H2O').hide();
$('.main__input-cell--F').hide();
$('.main__output-cell--F').hide();
$('.main__input-cell--Cl').hide();
$('.main__output-cell--Cl').hide();

$('.chart-section').hide();
var isChartOpen = false;
$('.chart-wrap').slideUp();

// media querys options
if ($(window).width() < 600) {
  $('.main__output-area').hide();
}

class Element {
  constructor (name, mol, anionMultiplier = 0, cationMultiplier = 0) {
    this.name = name;
    this.mol = mol;
    this.value = 0;
    this.molRatio = 0;
    this.anionRatio = 0;
    this.anionMultiplier = anionMultiplier;
    this.cationRatio = 0;
    this.cationMultiplier = cationMultiplier;
    this.apfu = 0;
  }
}

var elementsArr = [];
elementsArr.push(new Element('Na2O', 61.979, 0, 2));
elementsArr.push(new Element('K2O', 94.196, 0, 2));
elementsArr.push(new Element('Al2O3', 101.961, 3, 2));
elementsArr.push(new Element('MgO', 40.304));
elementsArr.push(new Element('FeO', 71.846));
elementsArr.push(new Element('Fe2O3', 159.692, 3, 2));
elementsArr.push(new Element('CaO', 56.077));
elementsArr.push(new Element('MnO', 70.938));
elementsArr.push(new Element('TiO2', 79.879, 2));
elementsArr.push(new Element('SiO2', 60.084, 2));
elementsArr.push(new Element('H2O', 18.015, 0, 2));
elementsArr.push(new Element('F', 18.994));
elementsArr.push(new Element('Cl', 35.453));

class ChartElem {
  constructor (label, data) {
    this.label = label;
    this.pointBackgroundColor = 'red';
    this.borderColor = 'green';
    this.borderWidth = 2;
    this.pointRadius = 10;
    this.pointHitRadius = 10;
    this.data = [
      {
        x: data,
        y: data,
      }
    ]
  }
}


// CONSTS
// var MOL_CONSTS = {
//   NA2O: 61.979,
//   K2O: 94.196,
//   AL2O3: 101.961,
//   MGO: 40.304,
//   FEO: 71.846,
//   FE2O3: 159.692,
//   CAO: 56.077,
//   MNO: 70.938,
//   TIO2: 79.879,
//   SIO2: 60.084,
//   H2O: 18.015,
//   F: 18.994,
//   CL: 35.453,
// };

var KEYCODES = {
  ENTER: 13,
  SPACE: 32,
};

// setting element values
// var elementsArr = [
//   {
//     name: 'Na2O',
//     mol: 61.979,
//     value: 0,
//     molRatio: 0,
//     anionRatio: 0,
//     anionMultiplier: 0,
//     cationRatio: 0,
//     cationMultiplier: 2,
//     apfu: 0,
//   },
//   {
//     name: 'K2O',
//     mol: 94.196,
//     value: 0,
//     molRatio: 0,
//     anionRatio: 0,
//     anionMultiplier: 0,
//     cationRatio: 0,
//     cationMultiplier: 2,
//     apfu: 0,
//   },
//   {
//     name: 'Al2O3',
//     mol: 101.961,
//     value: 0,
//     molRatio: 0,
//     anionRatio: 0,
//     anionMultiplier: 3,
//     cationRatio: 0,
//     cationMultiplier: 2,
//     apfu: 0,
//   },
//   {
//     name: 'MgO',
//     mol: 40.304,
//     value: 0,
//     molRatio: 0,
//     anionRatio: 0,
//     anionMultiplier: 0,
//     cationRatio: 0,
//     cationMultiplier: 0,
//     apfu: 0,
//   },
//   {
//     name: 'FeO',
//     mol: 71.846,
//     value: 0,
//     molRatio: 0,
//     anionRatio: 0,
//     anionMultiplier: 0,
//     cationRatio: 0,
//     cationMultiplier: 0,
//     apfu: 0,
//   },
//   {
//     name: 'Fe2O3',
//     mol: 159.692,
//     value: 0,
//     molRatio: 0,
//     anionRatio: 0,
//     anionMultiplier: 3,
//     cationRatio: 0,
//     cationMultiplier: 2,
//     apfu: 0,
//   },
//   {
//     name: 'CaO',
//     mol: 56.077,
//     value: 0,
//     molRatio: 0,
//     anionRatio: 0,
//     anionMultiplier: 0,
//     cationRatio: 0,
//     cationMultiplier: 0,
//     apfu: 0,
//   },
//   {
//     name: 'MnO',
//     mol: 70.938,
//     value: 0,
//     molRatio: 0,
//     anionRatio: 0,
//     anionMultiplier: 0,
//     cationRatio: 0,
//     cationMultiplier: 0,
//     apfu: 0,
//   },
//   {
//     name: 'TiO2',
//     mol: 79.879,
//     value: 0,
//     molRatio: 0,
//     anionRatio: 0,
//     anionMultiplier: 2,
//     cationRatio: 0,
//     cationMultiplier: 0,
//     apfu: 0,
//   },
//   {
//     name: 'SiO2',
//     mol: 60.084,
//     value: 0,
//     molRatio: 0,
//     anionRatio: 0,
//     anionMultiplier: 2,
//     cationRatio: 0,
//     cationMultiplier: 0,
//     apfu: 0,
//   },
//   {
//     name: 'H2O',
//     mol: 18.015,
//     value: 0,
//     molRatio: 0,
//     anionRatio: 0,
//     anionMultiplier: 0,
//     cationRatio: 0,
//     cationMultiplier: 2,
//     apfu: 0,
//   },
//   {
//     name: 'F',
//     mol: 18.994,
//     value: 0,
//     molRatio: 0,
//     anionRatio: 0,
//     anionMultiplier: 0,
//     cationRatio: 0,
//     cationMultiplier: 0,
//     apfu: 0,
//   },
//   {
//     name: 'Cl',
//     mol: 35.453,
//     value: 0,
//     molRatio: 0,
//     anionRatio: 0,
//     anionMultiplier: 0,
//     cationRatio: 0,
//     cationMultiplier: 0,
//     apfu: 0,
//   },
// ];

// var elementValues = {
//   Na2O: 0,
//   K2O: 0,
//   Al2O3: 0,
//   MgO: 0,
//   FeO: 0,
//   Fe2O3: 0,
//   CaO: 0,
//   MnO: 0,
//   TiO2: 0,
//   SiO2: 0,
//   H2O: 0,
//   F: 0,
//   Cl: 0;
// };

// inputs collection
var inputsColl = $('.main__input');

// getting inputs values
inputsColl.each((i, inputEl) => {
  var inputElName = inputEl.id.slice(0, -6);
  elementsArr.forEach((element) => {
    if (element.name == inputElName) {
      $(`#${inputEl.id}`).on('input', function() {
        element.value = this.value;
      });
      // $('#K2O-input').on('input', function() {
      //   elementValues.K2O = this.value;
      // });
      // $('#Al2O3-input').on('input', function() {
      //   elementValues.Al2O3 = this.value;
      // });
      // $('#MgO-input').on('input', function() {
      //   elementValues.MgO = this.value;
      // });
      // $('#FeO-input').on('input', function() {
      //   elementValues.FeO = this.value;
      // });
      // $('#Fe2O3-input').on('input', function() {
      //   elementValues.Fe2O3 = this.value;
      // });
      // $('#CaO-input').on('input', function() {
      //   elementValues.CaO = this.value;
      // });
      // $('#MnO-input').on('input', function() {
      //   elementValues.MnO = this.value;
      // });
      // $('#TiO2-input').on('input', function() {
      //   elementValues.TiO2 = this.value;
      // });
      // $('#SiO2-input').on('input', function() {
      //   elementValues.SiO2 = this.value;
      // });
      // $('#H2O-input').on('input', function() {
      //   elementValues.H2O = this.value;
      // });
      // $('#F-input').on('input', function() {
      //   elementValues.F = this.value;
      // });
      // $('#Cl-input').on('input', function() {
      //   elementValues.Cl = this.value;
      // });
    }
  });
});

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

//calculate function
var calculate = function () {
  // var getMolRatio = function (elem, mol) {
  //   var molRatio = elem / mol;
  //   return molRatio;
  // };

  elementsArr.forEach((elem) => {
    elem.molRatio = elem.value / elem.mol;
  });

  elementsArr.forEach((elem) => {
    if (elem.anionMultiplier) {
      elem.anionRatio = elem.molRatio * elem.anionMultiplier;
    } else {
      elem.anionRatio = elem.molRatio;
    }
  });

  elementsArr.forEach((elem) => {
    if (elem.cationMultiplier) {
      elem.cationRatio = elem.molRatio * elem.cationMultiplier;
    } else {
      elem.cationRatio = elem.molRatio;
    }
  });

  var ostat = 0;
  for (var i = 0; i < elementsArr.length; i++) {
    if (elementsArr[i].name === 'F' || elementsArr[i].name === 'Cl') {
      ostat += elementsArr[i].anionRatio;
    }
  }

  var dudos = -ostat / 2;

  var preAnionRatioFactor = elementsArr.reduce((preAnionRatioFactor, current) => {
    return preAnionRatioFactor + current.anionRatio;
  }, dudos);

  var anionRatioFactor = preAnionRatioFactor / mineralSelectValue;

  elementsArr.forEach((elem) => {
    elem.apfu = elem.cationRatio / anionRatioFactor;
  });

  var outputsColl = $('.main__output');
  outputsColl.each((i, outputEl) => {
    var outputElName = outputEl.id.slice(0, -7);
    elementsArr.forEach((element) => {
      if (element.name == outputElName) {
        $(`#${outputEl.id}`).text(setToFixed(element.apfu));
      }
    });
  });

  // var Na2O_MolRatio = getMolRatio(Na2O, NA2O_MOL);
  // var K2O_MolRatio = getMolRatio(K2O, K2O_MOL);
  // var Al2O3_MolRatio = getMolRatio(Al2O3, AL2O3_MOL);
  // var MgO_MolRatio = getMolRatio(MgO, MGO_MOL);
  // var FeO_MolRatio = getMolRatio(FeO, FEO_MOL);
  // var Fe2O3_MolRatio = getMolRatio(Fe2O3, FE2O3_MOL);
  // var CaO_MolRatio = getMolRatio(CaO, CAO_MOL);
  // var MnO_MolRatio = getMolRatio(MnO, MNO_MOL);
  // var TiO2_MolRatio = getMolRatio(TiO2, TIO2_MOL);
  // var SiO2_MolRatio = getMolRatio(SiO2, SIO2_MOL);
  // var H2O_MolRatio = getMolRatio(H2O, H2O_MOL);
  // var F_MolRatio = getMolRatio(F, F_MOL);
  // var Cl_MolRatio = getMolRatio(Cl, CL_MOL);
  //
  // // anion ratios
  // var Na2O_anionRatio = Na2O_MolRatio;
  // var K2O_anionRatio = K2O_MolRatio;
  // var Al2O3_anionRatio = Al2O3_MolRatio * 3;
  // var MgO_anionRatio = MgO_MolRatio;
  // var FeO_anionRatio = FeO_MolRatio;
  // var Fe2O3_anionRatio = Fe2O3_MolRatio * 3;
  // var CaO_anionRatio = CaO_MolRatio;
  // var MnO_anionRatio = MnO_MolRatio;
  // var TiO2_anionRatio = TiO2_MolRatio * 2;
  // var SiO2_anionRatio = SiO2_MolRatio * 2;
  // var H2O_anionRatio = H2O_MolRatio;
  // var F_anionRatio = F_MolRatio;
  // var Cl_anionRatio = Cl_MolRatio;
  //
  // // cation ratios
  // var Na2O_cationRatio = Na2O_MolRatio * 2;
  // var K2O_cationRatio = K2O_MolRatio * 2;
  // var Al2O3_cationRatio = Al2O3_MolRatio * 2;
  // var MgO_cationRatio = MgO_MolRatio;
  // var FeO_cationRatio = FeO_MolRatio;
  // var Fe2O3_cationRatio = Fe2O3_MolRatio * 2;
  // var CaO_cationRatio = CaO_MolRatio;
  // var MnO_cationRatio = MnO_MolRatio;
  // var TiO2_cationRatio = TiO2_MolRatio;
  // var SiO2_cationRatio = SiO2_MolRatio;
  // var H2O_cationRatio = H2O_MolRatio * 2;
  // var F_cationRatio = F_MolRatio;
  // var Cl_cationRatio = Cl_MolRatio;
  //
  // // prosto anion rating
  // var getAnionRatioFactor = function (divisor) {
  //   return (Na2O_anionRatio + K2O_anionRatio + Al2O3_anionRatio + MgO_anionRatio + FeO_anionRatio + Fe2O3_anionRatio + CaO_anionRatio + MnO_anionRatio + TiO2_anionRatio + SiO2_anionRatio + H2O_anionRatio + F_anionRatio + Cl_anionRatio - ((F_anionRatio + Cl_anionRatio)/2)) / divisor;
  // }
  //
  // var getApfu = function (mineral) {
  //   return mineral / getAnionRatioFactor(mineralSelectValue);
  // }
  //
  // // apfu
  // var Na2O_apfu = getApfu(Na2O_cationRatio);
  // var K2O_apfu = getApfu(K2O_cationRatio);
  // var Al2O3_apfu = getApfu(Al2O3_cationRatio);
  // var MgO_apfu = getApfu(MgO_cationRatio);
  // var FeO_apfu = getApfu(FeO_cationRatio);
  // var Fe2O3_apfu = getApfu(Fe2O3_cationRatio);
  // var CaO_apfu = getApfu(CaO_cationRatio);
  // var MnO_apfu = getApfu(MnO_cationRatio);
  // var TiO2_apfu = getApfu(TiO2_cationRatio);
  // var SiO2_apfu = getApfu(SiO2_cationRatio);
  // var H2O_apfu = getApfu(H2O_cationRatio);
  // var F_apfu = getApfu(F_cationRatio);
  // var Cl_apfu = getApfu(Cl_cationRatio);
  //
  //
  // // setting outputs values
  // $('#Na2O-output').text(setToFixed(Na2O_apfu));
  // $('#K2O-output').text(setToFixed(K2O_apfu));
  // $('#Al2O3-output').text(setToFixed(Al2O3_apfu));
  // $('#MgO-output').text(setToFixed(MgO_apfu));
  // $('#FeO-output').text(setToFixed(FeO_apfu));
  // $('#Fe2O3-output').text(setToFixed(Fe2O3_apfu));
  // $('#CaO-output').text(setToFixed(CaO_apfu));
  // $('#MnO-output').text(setToFixed(MnO_apfu));
  // $('#TiO2-output').text(setToFixed(TiO2_apfu));
  // $('#SiO2-output').text(setToFixed(SiO2_apfu));
  // $('#H2O-output').text(setToFixed(H2O_apfu));
  // $('#F-output').text(setToFixed(F_apfu));
  // $('#Cl-output').text(setToFixed(Cl_apfu));
  //

  $('.chart-section').show('fast');

  //media settings
  if ($(window).width() < 600) {
    $('.main__output-area').slideDown('fast', function () {
      $('html, body').animate({ scrollTop: $(document).height() }, 'fast');
    });
  }

  // var chartData = [];
  // for (var i = 0; i < elementsArr.length; i++) {
  //   var currentElem = elementsArr[i];
  //   if (currentElem.apfu) {
  //     chartData.push(new ChartElem(currentElem.name, currentElem.apfu));
  //   }
  // };

  var chartData = [];
  for (var i = 0; i < elementsArr.length; i++) {
    var currentFirst = elementsArr[i];
    // console.log('outer i', i);
    for (var j = i + 1; j < elementsArr.length; j++) {
      var currentSecond = elementsArr[j];
      // console.log('inner i', i);
      // console.log('inner j', j);
      if (currentFirst.value && currentSecond.value) {
        chartData.push(
          {
            label: `${currentFirst.name}/${currentSecond.name}`,
            backgroundColor: `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`,
            borderColor: `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`,
            borderWidth: 2,
            pointRadius: 10,
            pointHitRadius: 10,
            data: [
              {
                x: setToFixed(currentFirst.apfu),
                y: setToFixed(currentSecond.apfu),
              }
            ]
          }
        );
      }
    }
  };

  console.log(chartData);


  var gar = chartData.map((elem) => {
    return elem;
  });
  console.log(gar);



  if (mineralSelectValue == 8) {
    var myRadarChart = new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: gar,
      }
    });
  } else {
    var myChart = new Chart(ctx, {
      type: 'scatter',
        data: {
            datasets: [
              {
                label: 'Scatter Dataset',
                pointBackgroundColor: 'red',
                borderColor: 'green',
                borderWidth: 2,
                pointRadius: 10,
                pointHitRadius: 10,
                data: [{
                    x: Math.random() * 10,
                    y: Math.random() * 10
                }, {
                    x: Math.random() * 10,
                    y: Math.random() * 10
                }, {
                    x: Math.random() * 10,
                    y: Math.random() * 10
                }]
            },
            {
                label: 'Scatter Dataset 42',
                pointBackgroundColor: 'green',
                borderColor: 'red',
                borderWidth: 2,
                pointRadius: 10,
                pointHitRadius: 10,
                data: [{
                    x: Math.random() * 10,
                    y: Math.random() * 10
                }, {
                    x: Math.random() * 10,
                    y: Math.random() * 10
                }, {
                    x: Math.random() * 10,
                    y: Math.random() * 10
                }]
            }
          ]
        },
        options: {
          scales: {
            xAxes: [{
              type: 'linear',
              position: 'bottom'
            }],
            yAxes: [{
                stacked: true
            }]
          }
        }
    });
  }
};

// getting <select> value
var mineralSelectValue = $('#mineral-select')[0].value;
$('#mineral-select').on('change', function() {
  mineralSelectValue = $('#mineral-select')[0].value;
  if ($('#mineral-select option:selected')[0].className == 'hydrous') {
    $('.main__input-cell--H2O').slideDown('fast');
    $('.main__output-cell--H2O').slideDown('fast');
    $('.main__input-cell--F').slideUp('fast');
    $('.main__output-cell--F').slideUp('fast');
    $('.main__input-cell--Cl').slideUp('fast');
    $('.main__output-cell--Cl').slideUp('fast');
  } else if ($('#mineral-select option:selected')[0].className == 'anhydrous') {
    $('.main__input-cell--H2O').slideUp('fast');
    $('.main__output-cell--H2O').slideUp('fast');
    $('.main__input-cell--F').slideUp('fast');
    $('.main__output-cell--F').slideUp('fast');
    $('.main__input-cell--Cl').slideUp('fast');
    $('.main__output-cell--Cl').slideUp('fast');
  } else if ($('#mineral-select option:selected')[0].className == 'micas') {
    $('.main__input-cell--H2O').slideDown('fast');
    $('.main__output-cell--H2O').slideDown('fast');
    $('.main__input-cell--F').slideDown('fast');
    $('.main__output-cell--F').slideDown('fast');
    $('.main__input-cell--Cl').slideUp('fast');
    $('.main__output-cell--Cl').slideUp('fast');
  } else if ($('#mineral-select option:selected')[0].className == 'hydrousAmphiboles') {
    $('.main__input-cell--H2O').slideDown('fast');
    $('.main__output-cell--H2O').slideDown('fast');
    $('.main__input-cell--F').slideDown('fast');
    $('.main__output-cell--F').slideDown('fast');
    $('.main__input-cell--Cl').slideDown('fast');
    $('.main__output-cell--Cl').slideDown('fast');
  }
})

//clear function
var clear = () => {
  elementsArr.forEach((elem) => {
    elem.value = 0;
    elem.molRatio = 0;
    elem.anionRatio = 0;
    elem.cationRatio = 0;
    elem.apfu = 0;
  });

  $('.main__input').val('');
  $('.main__output').text('');
  inputsArr.length = 0;

  $('.chart-section').hide('fast');

  $('.button--calculate-anion').prop('disabled', true);

  //media settings
  if ($(window).width() < 600) {
    $('.main__output-area').slideUp('fast');
  }
};

// var clear = function () {
//   Na2O = 0;
//   K2O = 0;
//   Al2O3 = 0;
//   MgO = 0;
//   FeO = 0;
//   Fe2O3 = 0;
//   CaO = 0;
//   MnO = 0;
//   TiO2 = 0;
//   SiO2 = 0;
//   H2O = 0;
//   F = 0;
//   Cl = 0;
//   $('.main__input').val('');
//   $('.main__output').text('');
//   inputsArr.length = 0;
//
//   $('.button--calculate-anion').prop('disabled', true);
//
//   //media settings
//   if ($(window).width() < 600) {
//     $('.main__output-area').slideUp('fast');
//   }
//
// };

// setting inputs keypress event
$(document).keydown(function(e) {
  if (e.which == 13 && inputsArr.length >= 2) {
    $('.button--calculate-anion').addClass('button--calculate-anion-active');
  }
});

$(document).keyup(function(e) {
  if (e.which == 13 && inputsArr.length >= 2) {
    $('.button--calculate-anion').removeClass('button--calculate-anion-active');
    calculate();
  }
});

// set buttons events
$('.button--calculate-anion').on('click', function () {
  calculate();
});

$('.button--clear').on('click', function () {
  clear();
});

// description visibility
var descriptionToggle = function () {
  $('.description-text--more').fadeToggle('fast', function() {
    if ($('.description-text--more').is(':hidden'))
    {
      $('.description-toggle').text('Show more.');
    } else if ($('.description-text--more').not(':hidden')) {
      $('.description-toggle').text('Show less.');
    }
  });
};

$('.description-toggle').on('click', descriptionToggle);

$('.description-toggle').on('keyup', function (e) {
  if (e.keyCode === KEYCODES.SPACE || e.keyCode === KEYCODES.ENTER) {
    descriptionToggle();
  }
});

// button disable settings
$('.button--calculate-anion').prop('disabled', true);

var inputsArr = [];
$('.main').on('input', function (e) {

  e.preventDefault();
  inputsArr = Array.prototype.filter.call($('.main__input'), item => {
    return item.value !== '';
  });

  if (inputsArr.length < 2) {
    $('.button--calculate-anion').prop('disabled', true);
  } else if (inputsArr.length >= 2) {
    $('.button--calculate-anion').prop('disabled', false);
  }

});

// chart.js visibility
var chartBtn = $('.button--chart');
chartBtn.on('click', () => {
  $('.chart-wrap').slideToggle('fast');
  $('html, body').animate({ scrollTop: $(document).height() }, 'fast');
  isChartOpen = !isChartOpen;
  if (isChartOpen) {
    $(chartBtn).text('Close chart');
  } else {
    $(chartBtn).text('Open chart');
  }
});

var ctx = $("#myChart");




// thats all, falks
