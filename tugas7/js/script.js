$(document).ready(function () {
    $('.card').each(function () {
      $(this).click(function () {
        let hewan = $(this).find('h5').attr('id');
        $('#suara').remove();
        $('#gambar').remove();
        if (hewan == 'Ayam') {
          $(this).prepend(`<img id="gambar" src="./gambar/ayam.jpg" class="card-img-top">`);
          $(this).find('.audio').append(`<audio src="./Audio/ayam.mp3" autoplay id="suara"></audio>`);
        } else if (hewan == 'Bebek') {
          $(this).prepend(`<img id="gambar" src="./gambar/bebek.jpg" class="card-img-top">`);
          $(this).find('.audio').append(`<audio src="Audio/bebek.mp3" autoplay id="suara"></audio>`);
        } else if (hewan == 'flamingo') {
          $(this).prepend(`<img id="gambar" src="img/flamingo.png" class="card-img-top">`);
          $(this).find('.audio').append(`<audio src="audio/flamingo.mp3" autoplay id="suara"></audio>`);
        } else if (hewan == 'angsa') {
          $(this).prepend(`<img id="gambar" src="img/angsa.png" class="card-img-top">`);
          $(this).find('.audio').append(`<audio src="audio/angsa.mp3" autoplay id="suara"></audio>`);
        } else if (hewan == 'ayam') {
          $(this).prepend(`<img id="gambar" src="img/ayam.png" class="card-img-top">`);
          $(this).find('.audio').append(`<audio src="audio/ayam (1).mp3" autoplay id="suara"></audio>`);
        } else if (hewan == 'sapi') {
          $(this).prepend(`<img id="gambar" src="img/sapi.png" class="card-img-top">`);
          $(this).find('.audio').append(`<audio src="audio/sapi.mp3" autoplay id="suara"></audio>`);
        } else if (hewan == 'kambing') {
          $(this).prepend(`<img id="gambar" src="img/kambing.png" class="card-img-top">`);
          $(this).find('.audio').append(`<audio src="audio/kambing.mp3" autoplay id="suara"></audio>`);
        } else if (hewan == 'babi') {
          $(this).prepend(`<img id="gambar" src="img/babi.png" class="card-img-top">`);
          $(this).find('.audio').append(`<audio src="audio/babi (1).mp3" autoplay id="suara"></audio>`);
        } else if (hewan == 'bebek') {
          $(this).prepend(`<img id="gambar" src="img/bebek.png" class="card-img-top">`);
          $(this).find('.audio').append(`<audio src="audio/bebek.mp3" autoplay id="suara"></audio>`);
        } else if (hewan == 'kerbau') {
          $(this).prepend(`<img id="gambar" src="img/kerbau.png" class="card-img-top">`);
          $(this).find('.audio').append(`<audio src="audio/kerbau.mp3" autoplay id="suara"></audio>`);
        } else if (hewan == 'rubah') {
          $(this).prepend(`<img id="gambar" src="img/rubah.png" class="card-img-top">`);
          $(this).find('.audio').append(`<audio src="audio/rubah.mp3" autoplay id="suara"></audio>`);
        } else if (hewan == 'singa') {
          $(this).prepend(`<img id="gambar" src="img/singa.png" class="card-img-top">`);
          $(this).find('.audio').append(`<audio src="audio/singa.mp3" autoplay id="suara"></audio>`);
        } else if (hewan == 'gorila') {
          $(this).prepend(`<img id="gambar" src="img/gorila.png" class="card-img-top">`);
          $(this).find('.audio').append(`<audio src="audio/gorila.mp3" autoplay id="suara"></audio>`);
        } else if (hewan == 'harimau') {
          $(this).prepend(`<img id="gambar" src="img/harimau.png" class="card-img-top">`);
          $(this).find('.audio').append(`<audio src="audio/harimau.mp3" autoplay id="suara"></audio>`);
        } else {
          $(this).prepend(`<img id="gambar" src="img/beruang.png" class="card-img-top">`);
          $(this).find('.audio').append(`<audio src="audio/beruang.mp3" autoplay id="suara"></audio>`);
        }
      });
    });
  });
  