'use strict';
window.onload = function(){
// modal window funtion 
(function() {
  // list out the vars
  var varOverlay = findId('modal'),
      varOpen = findId('modalOpen'),
      varClose = findId('modalClose'),
      modal = findId('modal'),
	  selectid=findId('selectid'),
      allNodes = document.querySelectorAll("*"),
      varModalOpen = false,
      lastFocus,
      i;


  // function to find  element id
  function findId ( id ) {
    return document.getElementById(id);
  }


  // open the modal
  function modalShow (event) {
    lastFocus = document.activeElement;
    varOverlay.setAttribute('aria-hidden', 'false');
    varModalOpen = true;
    modal.setAttribute('tabindex', '0');
    modal.focus(); 
	
	
  }


  // funtion to close modal on button click and the escape key 
  // but only if modalOpen is set to true
  function modalClose ( event ) {
	 // alert("ggg");
	  //event.preventDefault();
       //    event.stopPropagation();
    if (varModalOpen && ( !event.keyCode || event.keyCode === 27 ) ) {
      varOverlay.setAttribute('aria-hidden', 'true');
      modal.setAttribute('tabindex', '-1');
      varModalOpen = false;
      lastFocus.focus();
	  
	 
    }
	//	event.stopPropagation();
  }


  // Restrict focus to the modal window when it's open.
  // Tabbing will just loop through the whole modal.
  // Shift + Tab will allow backup to the top of the modal,
  // and then stop.
  function tabfocusRestrict ( event ) {
    if ( varModalOpen && !modal.contains( event.target ) ) {
    
      modal.focus();
    }
  }


  // Close modal window by clicking on the overlay
  /*varOverlay.addEventListener('click', function( e ) {
 alert("here overlay");
    modalClose( e );
	alert(modal.parentNode);
    if (e.target == modal.parentNode) {
       modalClose( e );
	   event.stopPropagation();
     }
	
  }, true);*/


  // open modal by btn click/hit
  varOpen.addEventListener('click', modalShow);
 // elem = document.getElementById("tbl1");
 // elem.addEventListener("click", stopEvent, false);
   selectid.addEventListener('click', selectbubble,false);
  // close modal by btn click
  varClose.addEventListener('click', modalClose);

  // close modal by keydown, but only if modal is open
  document.addEventListener('keydown', modalClose);

  // restricting   focus on tab for all elements only inside modal window
  for (i = 0; i < allNodes.length; i++) {
    allNodes.item(i).addEventListener('focus', tabfocusRestrict);
  }
  
    function selectbubble(event) {
		     alert("hello");
			   //    event.preventDefault();
              if (event.stopPropagation) {    // standard
                   event.stopPropagation();
               } else {    // IE6-8
                    event.cancelBubble = true;
               }
          }

})();
}
