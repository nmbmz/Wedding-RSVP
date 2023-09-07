/*global $, jQuery, console, alert, prompt */
$(function() {
    "use strict";
    // All Variable ==========================================================================
    var parallex = $(".parent > .parallex");
    // Scroll ================================================================================
  
    $(window).on('scroll', function() {
      parallex.css({
        "transform": "translate(0, " + $(window).scrollTop() + "px)"
      });
      if ($('.parent > div').offset.top() >= $(window).scrollTop()) {
        parallex = $(".parent > .parallex, .parent > div");
      }
    });
  
  });


  document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
    document.querySelector(".rsvping").style.display = "none";
}) 

  document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
    document.querySelector(".rsvping").style.display = "none";
})

document.getElementById("close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".rsvping").style.display = "inline-block";
})


function postToGoogle() {
  var field1 = $("#name1").val();
  var field2 = $("#groom").is(":checked") ? $("#groom").val() : "";
  var field3 = $("#bride").is(":checked") ? $("#bride").val() : "";
  var field4 = $("#guest").val();
  var field5 = $("#yes").is(":checked") ? $("#yes").val() : "";
  var field6 = $("#no").is(":checked") ? $("#no").val() : "";
   


  

  $.ajax({
      url: "https://docs.google.com/forms/d/e/1FAIpQLSd9b-6U8esoE7-WihtD3gj8cIPXfCZ3JgCeE_Uhm6JDMTKbvQ/formResponse?",
      data: {"entry.877086558": field1, "entry.1460693819": field2, "entry.2117734519": field3, "entry.1498135098": field4, "entry.393842320":
      field5, "entry.419177863":
      field6},
      type: "POST",
      dataType: "xml",
      success: function(d)
      {
      },
      error: function(x, y, z)
          {

              $('#success-msg').show();
              $('#form').hide();
              
          }
  });
  return false;
}
