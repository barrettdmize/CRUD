$(document).ready(function () {
  page.init();
});

var page = {
  deleteArticle: function (idx) {
  },
  init: function () {
     page.initStyling();
     page.initEvents();
   },
   initStyling: function () {
    //  page.loadTodo(cowboy);
    // page.loadTemplate($('aside'), {}, $('#asideTmpl').html());
   },
   initEvents: function () {
     $('.container').on('click', '.delete', function (event) {
       event.preventDefault();
       var articleId = $(this).closest('article').data('id');
       page.deleteArticle(articleId);
     });





    $('.deputy').on('click', function(event){
      event.preventDefault();
      var newTodo = {
          title: $('input[name="Todo"]').val(),
        };
      var articleId = todoData.indexOf(newTodo);
      newTodo.id = articleId;
      todoData.push(newTodo);
      page.loadTemplate($('.big-container'), newTodo, $('#articleTmpl').html());
      $('aside input').val('');
    });
    // $('.big-container').on('click', 'i', function (){
    //    $(this).toggleClass('fa fa-check-circle');
    //    $(this).toggleClass('fa fa-circle-thin');
    //    $(this).parent().toggleClass('completedText');
    //  });
  },
  loadTemplate: function($el,data,tmpl) {
    var template = _.template(tmpl);
    var html = template(data);
    $el.append(html);
  }
};
