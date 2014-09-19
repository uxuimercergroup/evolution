//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v2.5 - Base JS Functions
// DATE - June 13, 2014
// AUTHOR - Doug Fraize, Matthew Holmes, Vinod Bhatt
//--------------------------------------------------------------------------------------------------------

// BUTTONS
//--------------------------------------------------------------------------------------------------------

	// MUL INTERACTIVE BUTTONS
	var mulInteractiveButtons = function(){
		var LoadingBtnClass = '.js-mul-btn-loading';
		var LoadingBtnResetText = jQuery(LoadingBtnClass).html();
		var d = 'disabled';
		jQuery(LoadingBtnClass).click(function(){
			jQuery(LoadingBtnClass).html('loading&hellip;').addClass(d).attr(d, d);
				setTimeout(function () {
				jQuery(LoadingBtnClass).html(LoadingBtnResetText).removeClass(d).removeAttr(d, d);
			}, 3000)
		});
	}

	// Interactive Buttons Init
	mulInteractiveButtons();


// FORMS
//--------------------------------------------------------------------------------------------------------

	// TEXTAREA EXPAND
	jQuery.fn.textareaExpander = function(minHeight, maxHeight){

		//initialize
		this.each( function(){

		if( this.nodeName.toLowerCase()!='textarea' )
			return;

		var $this = $(this);
		//set height restrictions
		if( $this.data('textexp-initialized')!==true )
		{
			minHeight = minHeight || 32;
			maxHeight = maxHeight || 300;
				
			$this.data('textexp-initialized', true );
			$this.data('textexp-min', minHeight || this.clientHeight );
			$this.data('textexp-max', maxHeight || this.clientHeight+300 );
			this.style.height = minHeight || this.clientHeight;
					
			this.style.overflow    = 'hidden';
			$(this).bind('keyup', resize).bind('input',resize).bind('focus',resize);
		}
		});
		
		function resize(e)
		{
			e = e.target || e;
			var $e = $(e);
		
			var h = Math.min( e.scrollHeight, $e.data('textexp-max') );
			h = Math.max( h, $e.data('textexp-min') );

			//if( $e.data('h')!=e.style.height )
			if( $e.data('h')!=h )
			{
				e.style.height = ""; // Reset the height
				e.style.height         =  h + "px";
				//e.style.overflow    = (e.scrollHeight > h ? "auto" : "hidden");

				$e.data('h',h);
			 }
			return true;
		 }
	}

	var mulTextareaExpand = function(){
		jQuery('.js-mul-textarea-expand').textareaExpander();
	}

	// Textarea Expand Init
	mulTextareaExpand();

	// SELECTED CHECKBOX
	var mulSelectedCheckbox = function(){
		jQuery(".js-mul-selected-checkbox input[type='checkbox']").on('change', function() {
			jQuery(this).parent().toggleClass('mul-selected-checkbox-checked', this.checked);
		});
	}

	// Selected Checkbox Init
	mulSelectedCheckbox();


// CONTAINERS
//--------------------------------------------------------------------------------------------------------

	// TILES CONTAINER TOGGLE CHECK	
	var mulTilesContainerToggleCheck = function(){
		var $window = $(window),
			$html = $('.js-mul-width-check');

		$window.resize(function resize() {
			if ($window.width() > 500) {
				return $html.removeClass('js-mul-toggle-content-icon');
			}

		}).trigger('resize');
	}

	// Tiles Container Toggle Check Init
	mulTilesContainerToggleCheck();

	// MESSAGE CONTAINER CLOSE EVENT
	var mulMessageContainerClose = function(){
		jQuery('.js-mul-close-ctn').click(function(){
			jQuery(this).parent().parent().fadeOut(400);
		});
	}

	// Message Container Close Init
	mulMessageContainerClose();
