$( function(){
  $( document ).mousedown( function( e ){
    if( e.which == 2 ){
      
      let media = $( '#print-css' ).attr( 'media' );

      if( media == 'print' ){
        $( '#print-css' ).attr( 'media', 'all' );
        $( '#screen-css' ).attr( 'media', 'none' );
      }else {
        $( '#print-css' ).attr( 'media', 'print' );
        $( '#screen-css' ).attr( 'media', 'screen' );
      }

    }
  } );
} );