// $("document").ready(function() {

	// Adds task to list when button is clicked
	$("#taskButton").click(function() {

		var taskHTML = '<div class="form-check d-flex w-100 justify-content-between p-1 m-0 border border-info listItem">'; 
		taskHTML += '<label class="custom-control custom-checkbox">';
		taskHTML += '<input type="checkbox" class="custom-control-input">';
		taskHTML += '<span class="custom-control-indicator"></span>';
		taskHTML += '<span class="custom-control-description">'
		taskHTML += $("#taskInput").val() + '</span>';
		taskHTML += '</label>';
		taskHTML += '<a href="#" class="delete"><i id="removeTask" class="fa fa-times fa-lg" aria-hidden="true"></i></a></div>'

		// Insert task into list
 		if ($("div .listItem").hasClass("complete")) {
 			$(".complete:first").before(taskHTML);
 		} else {
			$("#taskList").append(taskHTML);
		}


		// Reset input value
		$("#taskInput").val("");
		
		enableSubmitEvent();

	}); //End event - add task to list

	// Delete Task from List

	$(document).on('click', 'a', function(event) {
		$(this).parent().remove();
		event.preventDefault();
	});

	// // Change task completion status
	$(document).on('click', "input[type='checkbox']", function() {
     	$(this).siblings(".custom-control-description").toggleClass("complete");
     	$(this).parents("div .listItem").toggleClass("complete");

     	//event when marking task complete
     	if ( $(this).siblings(".listItem").hasClass("complete") ) {
     		var $p = $(this).parents("div .listItem").detach();
     		if ($("div .listItem").hasClass("complete")) {
     			$(".complete:first").before($p);
     		} else {
     		$(".listItem:last").after($p);
	     	}
	    //event when marking task to not complete
     	} else {
     		var $p = $(this).parents("div .listItem").detach();
     		if ($("div .listItem").hasClass("complete")) {
     			$(".complete:first").before($p);
     		} else {
     		$(".listItem:last").after($p);
	     	}
     	}
	});

	function canSubmit() {
		return ($("#taskInput").val().length > 0);
	};

	function enableSubmitEvent () {
		$("#submitButton").prop( "disabled", !canSubmit() );
	};

	// Checks if there is input while typing
	// $("#taskInput").focus(enableSubmitEvent).keyup(enableSubmitEvent);
	$("#taskInput").keyup(enableSubmitEvent);

	enableSubmitEvent();



// });