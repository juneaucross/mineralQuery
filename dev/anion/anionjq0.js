'use strict';

// visibility settings
$('.description-text--more').hide();
$('.main__input-cell--H2O').hide();
$('.main__output-cell--H2O').hide();
$('.main__input-cell--F').hide();
$('.main__output-cell--F').hide();
$('.main__input-cell--Cl').hide();
$('.main__output-cell--Cl').hide();

// media querys options
if ($(window).width() < 600) {
  $('.main__output-area').hide();
}

var KEYCODES = {
  ENTER: 13,
  SPACE: 32,
};

// setting element values
var elementsArr = [
  {
    name: 'Na2O',
    mol: 61.979,
    value: 0,
    molRatio: 0,
    anionRatio: 0,
    anionMultiplier: 0,
    cationRatio: 0,
    cationMultiplier: 2,
    apfu: 0,
  },
  {
    name: 'K2O',
    mol: 94.196,
    value: 0,
    molRatio: 0,
    anionRatio: 0,
    anionMultiplier: 0,
    cationRatio: 0,
    cationMultiplier: 2,
    apfu: 0,
  },
  {
    name: 'Al2O3',
    mol: 101.961,
    value: 0,
    molRatio: 0,
    anionRatio: 0,
    anionMultiplier: 3,
    cationRatio: 0,
    cationMultiplier: 2,
    apfu: 0,
  },
  {
    name: 'MgO',
    mol: 40.304,
    value: 0,
    molRatio: 0,
    anionRatio: 0,
    anionMultiplier: 0,
    cationRatio: 0,
    cationMultiplier: 0,
    apfu: 0,
  },
  {
    name: 'FeO',
    mol: 71.846,
    value: 0,
    molRatio: 0,
    anionRatio: 0,
    anionMultiplier: 0,
    cationRatio: 0,
    cationMultiplier: 0,
    apfu: 0,
  },
  {
    name: 'Fe2O3',
    mol: 159.692,
    value: 0,
    molRatio: 0,
    anionRatio: 0,
    anionMultiplier: 3,
    cationRatio: 0,
    cationMultiplier: 2,
    apfu: 0,
  },
  {
    name: 'CaO',
    mol: 56.077,
    value: 0,
    molRatio: 0,
    anionRatio: 0,
    anionMultiplier: 0,
    cationRatio: 0,
    cationMultiplier: 0,
    apfu: 0,
  },
  {
    name: 'MnO',
    mol: 70.938,
    value: 0,
    molRatio: 0,
    anionRatio: 0,
    anionMultiplier: 0,
    cationRatio: 0,
    cationMultiplier: 0,
    apfu: 0,
  },
  {
    name: 'TiO2',
    mol: 79.879,
    value: 0,
    molRatio: 0,
    anionRatio: 0,
    anionMultiplier: 2,
    cationRatio: 0,
    cationMultiplier: 0,
    apfu: 0,
  },
  {
    name: 'SiO2',
    mol: 60.084,
    value: 0,
    molRatio: 0,
    anionRatio: 0,
    anionMultiplier: 2,
    cationRatio: 0,
    cationMultiplier: 0,
    apfu: 0,
  },
  {
    name: 'H2O',
    mol: 18.015,
    value: 0,
    molRatio: 0,
    anionRatio: 0,
    anionMultiplier: 0,
    cationRatio: 0,
    cationMultiplier: 2,
    apfu: 0,
  },
  {
    name: 'F',
    mol: 18.994,
    value: 0,
    molRatio: 0,
    anionRatio: 0,
    anionMultiplier: 0,
    cationRatio: 0,
    cationMultiplier: 0,
    apfu: 0,
  },
  {
    name: 'Cl',
    mol: 35.453,
    value: 0,
    molRatio: 0,
    anionRatio: 0,
    anionMultiplier: 0,
    cationRatio: 0,
    cationMultiplier: 0,
    apfu: 0,
  },
];

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

  //media settings
  if ($(window).width() < 600) {
    $('.main__output-area').slideDown('fast', function () {
      $('html, body').animate({ scrollTop: $(document).height() }, 'fast');
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

  $('.button--calculate-anion').prop('disabled', true);

  //media settings
  if ($(window).width() < 600) {
    $('.main__output-area').slideUp('fast');
  }
};

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

// thats all, falks
