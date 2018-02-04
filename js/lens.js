// Dynamically create list of cameras and lens 
var cData = [], lens_canon = [], lens_nikon = [], lens_canon=[], lens_nikon=[], accessories=[], divC = $("#lensC"), divN = $("#lensN");
$.getJSON('./js/data.json', function(data) {       

  lens_canon = data.lens.canon;
  lens_nikon = data.lens.nikon;
  accessories = data.accessories.items
}).done(function(){
      // iterate over the array and build the list
      for (var i = 0, l = lens_canon.length; i < l; ++i) {
      // div.append('<div class="col-lg-3 col-md-4 col-sm-6"><div class="item text-center"><div class="product-image"><img src="' + cData[i].imgUrl + '" alt="camera"></div><h4 class="product-name">"' + cData[i].modelName + '"</h4><form class="add-to-cart" action="#" method="post"><table class="table table-sm table-hover table-default table-cart"><tbody><tr><td><label class="contai"><input type="radio" name="days" value="' + cData[i].cost.one + '"/><span class="checkmark"></span></label></td><td ><span class="duration">1 day</span></td><td ><span class="price">' + cData[i].cost.one + ' &#8377;</span></td></tr><tr><td><label class="contai"><input type="radio" name="days" value="' + cData[i].cost.three + '"/><span class="checkmark"></span></label></td><td ><span class="duration">3+ days</span></td><td ><span class="price">' + cData[i].cost.three + ' &#8377;</span></td></tr><tr><td><label class="contai"><input type="radio" name="days" value="' + cData[i].cost.seven + '"/><span class="checkmark"></span></label></td><td ><span class="duration">7+ days</span></td><td ><span class="price">' + cData[i].cost.seven + ' &#8377;</span></td></tr></tbody></table><input type="submit" value="Add To Cart" class="btn btn-unique" disabled="" onclick="myFunction()"  /></form><div></div>');
      divC.append('<div class="col-lg-3 col-md-4 col-sm-6"><div class="item text-center"><div class="product-image"><img src="' + lens_canon[i].imgUrl + '" alt="camera"></div><h4 class="product-name">"' + lens_canon[i].modelName + '"</h4><form class="add-to-cart" action="#" method="post"><table class="table table-sm table-hover table-default table-cart"><tbody><tr><td ><span class="duration">1 day</span></td><td ><span class="price">' + lens_canon[i].cost.one + ' &#8377;</span></td></tr><tr><td ><span class="duration">3+ days</span></td><td ><span class="price">' + lens_canon[i].cost.three + ' &#8377;</span></td></tr><tr><td ><span class="duration">7+ days</span></td><td ><span class="price">' + lens_canon[i].cost.seven + ' &#8377;</span></td></tr></tbody></table><input type="submit" value="Add To Cart" class="btn btn-unique" disabled="" onclick="myFunction()" /></form><div></div>');
    }
    for (var j = 0, l = lens_nikon.length; j < l; ++j) {
     divN.append('<div class="col-lg-3 col-md-4 col-sm-6"><div class="item text-center"><div class="product-image"><img src="' + lens_nikon[j].imgUrl + '" alt="camera"></div><h4 class="product-name">"' + lens_nikon[j].modelName + '"</h4><form class="add-to-cart" action="#" method="post"><table class="table table-sm table-hover table-default table-cart"><tbody><tr><td ><span class="duration">1 day</span></td><td ><span class="price">' + lens_nikon[j].cost.one + ' &#8377;</span></td></tr><tr><td ><span class="duration">3+ days</span></td><td ><span class="price">' + lens_nikon[j].cost.three + ' &#8377;</span></td></tr><tr><td ><span class="duration">7+ days</span></td><td ><span class="price">' + lens_nikon[j].cost.seven + ' &#8377;</span></td></tr></tbody></table><input type="submit" value="Add To Cart" class="btn btn-unique" disabled="" onclick="myFunction()" /></form><div></div>');
   }
 });


//slect brand from drop down 
$("select").change(function(){
  $(this).find("option:selected").each(function(){
    var optionValue = $(this).attr("value");
    if(optionValue){
      $(".box").not("." + optionValue).hide();
      $("." + optionValue).show();
    } else{
      $(".box").hide();
    }
  });
}).change();