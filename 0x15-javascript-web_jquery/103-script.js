// A JavaScript script that fetches and prints how to say “Hello” depending on the language
// You should use this API service: https://www.fourtonfish.com/hellosalut/hello/
// The language code will be the value entered in the tag INPUT#language_code (ex: es, fr, en etc.)
// The translation must be fetched when the user clicks on INPUT#btn_translate OR
// presses ENTER when the focus is on INPUT#language_code
// The translation of “Hello” must be displayed in the HTML tag DIV#hello

$('document').ready(function () {
    $('INPUT#btn_translate').click(translate);
    $('INPUT#language_code').focus(function () {
      $(this).keydown(function (e) {
        if (e.keyCode === 13) {
          translate();
        }
      });
    });
  });
  
  function translate () {
    const url = 'https://www.fourtonfish.com/hellosalut/?';
    $.get(url + $.param({ lang: $('INPUT#language_code').val() }), function (data) {
      $('DIV#hello').html(data.hello);
    });
  }
