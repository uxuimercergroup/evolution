//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v2.6 - Base JS Functions
// DATE - January 13, 2015
// AUTHOR - Doug Fraize, Matthew Holmes, Doug Richar, Vinod Bhatt
//--------------------------------------------------------------------------------------------------------

// BUTTONS
//--------------------------------------------------------------------------------------------------------

	// EVO INTERACTIVE BUTTON
	var evoInteractiveButton = function(){
		var interactiveBtnDataAttr = '[data-evo-button="interactive"]';
		var interactiveBtnResetText = jQuery(interactiveBtnDataAttr).html();
		var d = 'disabled';
		jQuery(interactiveBtnDataAttr).click(function(){
			jQuery(interactiveBtnDataAttr).html('loading&hellip;').addClass(d).attr(d, d);
				setTimeout(function () {
					jQuery(interactiveBtnDataAttr).html(interactiveBtnResetText).removeClass(d).removeAttr(d, d);
			}, 3000)
		});
	}

	// Interactive Buttons Init
	evoInteractiveButton();


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

	var evoTextareaExpand = function(){
		jQuery('.js-evo-textarea-expand').textareaExpander();
	}

	// Textarea Expand Init
	evoTextareaExpand();

	// SELECTED CHECKBOX
	var evoSelectedCheckbox = function(){
		jQuery(".js-evo-selected-checkbox input[type='checkbox']").on('change', function() {
			jQuery(this).parent().toggleClass('evo-selected-checkbox-checked', this.checked);
		});
	}

	// Selected Checkbox Init
	evoSelectedCheckbox();


// CONTAINERS
//--------------------------------------------------------------------------------------------------------

	// TILES CONTAINER TOGGLE CHECK	
	var evoTilesContainerToggleCheck = function(){
		var $window = $(window),
			$html = $('.js-evo-width-check');

		$window.resize(function resize() {
			if ($window.width() > 500) {
				return $html.removeClass('js-evo-toggle-content-icon');
			}

		}).trigger('resize');
	}

	// Tiles Container Toggle Check Init
	evoTilesContainerToggleCheck();

	// MESSAGE CONTAINER CLOSE EVENT
	var evoMessageContainerClose = function(){
		jQuery('.js-evo-close-ctn').click(function(){
			jQuery(this).parent().parent().fadeOut(400);
		});
	}

	// Message Container Close Init
	evoMessageContainerClose();
