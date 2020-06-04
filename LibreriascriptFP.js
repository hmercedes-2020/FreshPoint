/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

  function MostrarPassw(){
  var x = document.getElementById("psw");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
  
 

  //Verifie si le place holder est vide
  $("form .float-label input").each(function () {
    var placeholder = $(this).attr('placeholder');
    console.log(placeholder)
    var label = $(this).parent().find("label").text();
    if (placeholder === undefined || placeholder === "") {
      $(this).attr("placeholder", label);
    }
  });

  //Ajoute ou supprime la class header-label
  $("form .float-label input").bind("input propertychange", function (e) {
    if ($(e.target).val() !== "") {
      $(e.target).parent().find("label").addClass("header-label");
    } else {
      $(e.target).parent().find("label").removeClass("header-label");
    }
  });
  
  

