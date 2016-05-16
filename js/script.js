function GoogleCallback(jqueryObj, data) {

	var resultObj = data.results;
	console.log('data', resultObj);
	$('.js-result').find('li').remove();

	for (var i = 0; i < resultObj.length; i++) {
		console.log(resultObj[i]);
		var item = '<li class="item">' +
			'<a class="title" href="' + resultObj[i].url + '" target="_blank">' + resultObj[i].title + '</a>' +
			'<p class="contentBox">' + resultObj[i].content + '</p>' +
			'</li>';

		$('.js-result').append(item);
	}
}

$(function() {
	function search() {
		var inputTxt = $('.js-input').val();

		$.ajax({
			// AJAX-specified URL
			url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&rsz=large&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q=' + inputTxt + '&callback=GoogleCallback&context=?',
			dataType: "jsonp",
			// Handle the success event
			success: function(data) {
			}
		});
	}

	$('body').on('click', '.js-btn', function() {
		search();
	});
	$(document).keypress(function(e) {
		if (e.which == 13) {
			e.preventDefault();
			search();
		}
	});

// prototype
var human = {
  name:'name',
  age : 28,
  sex : 'male',
  height : 200,
  weight : 60,
};

var student={
  education:'Student',
  grant: 'grunt',
  watchShow:function () {
    this.weight++;
    this.grant--;
  }
};

var worker={
  education:'Worker',
  salary: '1000$',
  work:function () {
    this.weight--;
    this.salary++;
  }
};

student.__proto__ = human;
worker.__proto__ = human;

console.log('Worker', worker.name, worker.education);
console.log('Student', student.name,student.education );

for (var i=0;i<5;i++){
  worker.work();
  student.watchShow();

};


console.log('Weight and slasry after working', worker.weight, worker.salary);
console.log('Weight an salary after wacthing show', student.weight, student.grant);

console.log(worker);
console.log(student);

});