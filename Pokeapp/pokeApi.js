let count = 1;

function getData(num) {
  $.get(`https://pokeapi.co/api/v1/pokemon/${num}/`, function(data) {
    $.each(data, function(key, value) {
      $('#dataview').append(`<p><strong>${key}</strong>: ${value}</p>`);
    });
    $('#counter').text(`Poke: ${count}`);
    console.log(data)
  });
}



$(function() {
  getData(count);

  $('#next').on('click', function() {
    getData(++count);
  });

  $('#prev').on('click', function() {
    if(count > 1) getData(--count);
  });


});
