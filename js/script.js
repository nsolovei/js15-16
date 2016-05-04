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
	function Human() {
		this.name = 'name',
		this.age = 28,
		this.sex = 'male',
		this.height = 200,
		this.weight = 60,
		// this.say = function() {
		// 	console.log('olololo');
		}
	}

	function Worker() {
		this.job = 'It company',
		this.salary = 1000$,
		this.age = 23,
		this.working = function() {
			console.log('work');
		}

	}

	function Student(_education, _grant) {
		this.education = _education,
		this.grant = _grant,
		this.watch = function() {
			console.log('watch');
		}
	}

	Worker.prototype = new Human();
	Student.prototype = new Human();
	Student.prototype = new Worker();

	var newStudent1 = new Student('KAI', 787);
	var newStudent2 = new Student('KPI', 467);
	var newStudent3 = new Student('KNUBA', 39658);
	//newStudent.working();
	console.log('newStudent1', newStudent1.education);
	console.log('newStudent2', newStudent2.education);
	console.log('newStudent3', newStudent3.education);
});