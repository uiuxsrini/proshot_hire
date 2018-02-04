(function( $ ) {
	var cData = [];
	$.Shop = function( element ) {
		var taht = this, cartCount = 0;
		this.$element = $( element );
		var cam_canon = [], cam_nikon = [], lens_canon=[], lens_nikon=[], accessories=[], divC = $("#productsC"), divN = $("#productsN"), divlc = $("#lensC"), divln = $("#lensN"), divAcc = $("#accessories");
		$.getJSON('/js/data.json', function(data) {  
			cData = data;   
			cam_canon = data.cameras.canon;
			cam_nikon = data.cameras.nikon;
			lens_canon = data.lens.canon;
			lens_nikon = data.lens.nikon;
			accessories = data.accessories.items;
		}).done(function(){
	      // iterate over the array and build the list
	      for (var i = 0, l = cam_canon.length; i < l; ++i) {
	      	divC.append('<div class="col-lg-3 col-md-4 col-sm-6"><div class="item text-center"><div data-name="' + cam_canon[i].modelName + '" data-price="' + cam_canon[i].cost.one + '"><div class="product-image"><img src="' + cam_canon[i].imgUrl + '" alt="camera"></div><h4 >"' + cam_canon[i].modelName + '"</h4><input type="text" name="qty-1" id="qty-1" class="qty" hidden value="1" /><form class="add-to-cart" action="#" method="post" ><table class="table table-sm table-hover table-default table-cart"><tbody><tr><td ><span class="duration">1 day</span></td><td ><span class="price">' + cam_canon[i].cost.one + ' &#8377;</span></td></tr><tr><td ><span class="duration">3+ days</span></td><td ><span class="price">' + cam_canon[i].cost.three + ' &#8377;</span></td></tr><tr><td ><span class="duration">7+ days</span></td><td ><span class="price">' + cam_canon[i].cost.seven + ' &#8377;</span></td></tr></tbody></table><input type="submit" value="Add To Cart" class="btn btn-unique"/></form></div></div>');
	      }
	      for (var j = 0, l = cam_nikon.length; j < l; ++j) {
	      	divN.append('<div class="col-lg-3 col-md-4 col-sm-6"><div class="item text-center"><div data-name="' + cam_nikon[j].modelName + '" data-price="' + cam_nikon[j].cost.one + '"><div class="product-image"><img src="' + cam_nikon[j].imgUrl + '" alt="camera"></div><h4  class="product-name">"' + cam_nikon[j].modelName + '"</h4><input type="text" name="qty-1" id="qty-1" class="qty" hidden value="1" /><form class="add-to-cart" action="#" method="post"><table class="table table-sm table-hover table-default table-cart"><tbody><tr><td ><span class="duration">1 day</span></td><td ><span class="price">' + cam_nikon[j].cost.one + ' &#8377;</span></td></tr><tr><td ><span class="duration">3+ days</span></td><td ><span class="price">' + cam_nikon[j].cost.three + ' &#8377;</span></td></tr><tr><td ><span class="duration">7+ days</span></td><td ><span class="price">' + cam_nikon[j].cost.seven + ' &#8377;</span></td></tr></tbody></table><input type="submit" value="Add To Cart" class="btn btn-unique"/></form></div></div>');
	      }

	      for (var k = 0, l = lens_canon.length; k < l; ++k) {
	      	divlc.append('<div class="col-lg-3 col-md-4 col-sm-6"><div class="item text-center"><div data-name="' + lens_canon[k].modelName + '" data-price="' + lens_canon[k].cost.one + '"><div class="product-image"><img src="' + lens_canon[k].imgUrl + '" alt="camera"></div><h4 >"' + lens_canon[k].modelName + '"</h4><input type="text" name="qty-1" id="qty-1" class="qty" hidden value="1" /><form class="add-to-cart" action="#" method="post" ><table class="table table-sm table-hover table-default table-cart"><tbody><tr><td ><span class="duration">1 day</span></td><td ><span class="price">' + lens_canon[k].cost.one + ' &#8377;</span></td></tr><tr><td ><span class="duration">3+ days</span></td><td ><span class="price">' + lens_canon[k].cost.three + ' &#8377;</span></td></tr><tr><td ><span class="duration">7+ days</span></td><td ><span class="price">' + lens_canon[k].cost.seven + ' &#8377;</span></td></tr></tbody></table><input type="submit" value="Add To Cart" class="btn btn-unique"/></form></div></div>');
	      }

	      for (var p = 0, l = lens_nikon.length; p < l; ++p) {
	      	divln.append('<div class="col-lg-3 col-md-4 col-sm-6"><div class="item text-center"><div data-name="' + lens_nikon[p].modelName + '" data-price="' + lens_nikon[p].cost.one + '"><div class="product-image"><img src="' + lens_nikon[p].imgUrl + '" alt="camera"></div><h4  class="product-name">"' + lens_nikon[p].modelName + '"</h4><input type="text" name="qty-1" id="qty-1" class="qty" hidden value="1" /><form class="add-to-cart" action="#" method="post"><table class="table table-sm table-hover table-default table-cart"><tbody><tr><td ><span class="duration">1 day</span></td><td ><span class="price">' + lens_nikon[p].cost.one + ' &#8377;</span></td></tr><tr><td ><span class="duration">3+ days</span></td><td ><span class="price">' + lens_nikon[p].cost.three + ' &#8377;</span></td></tr><tr><td ><span class="duration">7+ days</span></td><td ><span class="price">' + lens_nikon[p].cost.seven + ' &#8377;</span></td></tr></tbody></table><input type="submit" value="Add To Cart" class="btn btn-unique"/></form></div></div>');
	      }

	      for (var w = 0, l = accessories.length; w < l; ++w) {
	      	divAcc.append('<div class="col-lg-3 col-md-4 col-sm-6"><div class="item text-center"><div data-name="' + accessories[w].modelName + '" data-price="' + accessories[w].cost.one + '"><div class="product-image"><img src="' + accessories[w].imgUrl + '" alt="camera"></div><h4  class="product-name">"' + accessories[w].modelName + '"</h4><input type="text" name="qty-1" id="qty-1" class="qty" hidden value="1" /><form class="add-to-cart" action="#" method="post"><table class="table table-sm table-hover table-default table-cart"><tbody><tr><td ><span class="duration">1 day</span></td><td ><span class="price">' + accessories[w].cost.one + ' &#8377;</span></td></tr><tr><td ><span class="duration">3+ days</span></td><td ><span class="price">' + accessories[w].cost.three + ' &#8377;</span></td></tr><tr><td ><span class="duration">7+ days</span></td><td ><span class="price">' + accessories[w].cost.seven + ' &#8377;</span></td></tr></tbody></table><input type="submit" value="Add To Cart" class="btn btn-unique"/></form></div></div>');
	      }

	      taht.init();

	  });

};




$.Shop.prototype = {
	init: function() {

		    // Properties
			this.cartPrefix = "proshot-"; // Prefix string to be prepended to the cart's name in the session storage
			this.cartName = this.cartPrefix + "cart"; // Cart name in the session storage
			this.shippingRates = this.cartPrefix + "shipping-rates"; // Shipping rates key in the session storage
			this.total = this.cartPrefix + "total"; // Total key in the session storage
			this.storage = sessionStorage; // shortcut to the sessionStorage object

			this.$myCartCount = $("#myCart");
			this.$myCartCount.text(this.storage.getItem('count'));
			this.$formAddToCart = this.$element.find( "form.add-to-cart" ); // Forms for adding items to the cart
			this.$formCart = this.$element.find( "#shopping-cart" ); // Shopping cart form
			this.$checkoutCart = this.$element.find( "#checkout-cart" ); // Checkout form cart
			this.$checkoutOrderForm = this.$element.find( "#checkout-order-form" ); // Checkout user details form
			this.$shipping = this.$element.find( "#sshipping" ); // Element that displays the shipping rates
			this.$subTotal = this.$element.find( "#stotal" ); // Element that displays the subtotal charges
			this.$shoppingCartActions = this.$element.find( "#shopping-cart-actions" ); // Cart actions links
			this.$updateCartBtn = this.$shoppingCartActions.find( "#update-cart" ); // Update cart button
			this.$emptyCartBtn = this.$shoppingCartActions.find( "#empty-cart" ); // Empty cart button
			this.currency = "&#8377;"; // HTML entity of the currency to be displayed in the layout
			// Object containing patterns for form validation
			this.requiredFields = {
				expression: {
					value: /^([\w-\.]+)@((?:[\w]+\.)+)([a-z]){2,4}$/
				},
				
				str: {
					value: ""
				}
				
			};
			
			// Method invocation
			
			this.createCart();
			this.handleAddToCartForm();
			//this.handleCheckoutOrderForm();
			this.emptyCart();
			this.updateCart();
			this.displayCart();
			this.deleteProduct();
		},
		
		// Public methods
		
		// Creates the cart keys in the session storage
		createCart: function() {
			if( this.storage.getItem( this.cartName ) == null ) {

				var cart = {};
				cart.items = [];

				this.storage.setItem( this.cartName, this._toJSONString( cart ) );
				this.storage.setItem( this.shippingRates, "0" );
				this.storage.setItem( this.total, "0" );
				this.storage.setItem( "count", 0);
			}
		},

		
		
		// Displays the shopping cart
		
		displayCart: function() {
			if( this.$formCart.length ) {
				var cart = this._toJSONObject( this.storage.getItem( this.cartName ) );
				var items = cart.items;
				this.$myCartCount.text(items.length);
				var $tableCart = this.$formCart.find( ".shopping-cart" );
				var $tableCartBody = $tableCart.find( "tbody" );

				if( items.length == 0 ) {
					$tableCartBody.html( "" );	
				} 
				else {
					for( var i = 0; i < items.length; ++i ) {
						var item = items[i];
						var product = item.product;
						var price = this.currency + " " + item.price;
						var qty = item.qty;
						var id = 'datepicker-' + i ;
						var html = "<tr><td class='pname'>" + product + "</td>" + "<td class='pdays'><input id='"+id+"' name='daterange' data-provide='datepicker'/></td><td class='pqty'><input type='text' value='" + qty + "' class='qty'/></td>";
						html += "<td class='pprice'>" + price + "</td><td class='pdelete'><a href='' data-product='" + product + "'> <strong>X</strong></a></td></tr>";
						$tableCartBody.html( $tableCartBody.html() + html );
					}
					$('[id^="datepicker-"]').daterangepicker();
					for( var j = 0; j < items.length; ++j ) {
						var splitDate = items[j].dateRange.split("-");
						$('#datepicker-'+j).data('daterangepicker').setStartDate(splitDate[0]);
						$('#datepicker-'+j).data('daterangepicker').setEndDate(splitDate[1]);
					}
					this.initializeDatePickerEvent();
				}

				if( items.length == 0 ) {
					this.$subTotal[0].innerHTML = this.currency + " " + 0.00;
				} else {	

					var total = this.storage.getItem( this.total );
					this.$subTotal[0].innerHTML = this.currency + " " + total;
				}
			} else if( this.$checkoutCart.length ) {
				var checkoutCart = this._toJSONObject( this.storage.getItem( this.cartName ) );
				var cartItems = checkoutCart.items;
				var $cartBody = this.$checkoutCart.find( "tbody" );

				if( cartItems.length > 0 ) {

					for( var j = 0; j < cartItems.length; ++j ) {
						var cartItem = cartItems[j];
						var cartProduct = cartItem.product;
						var cartPrice = this.currency + " " + cartItem.price;
						var cartQty = cartItem.qty;
						var cartHTML = "<tr><td class='pname'>" + cartProduct + "</td>" + "<td class='pqty'>" + cartQty + "</td>" + "<td class='pprice'>" + cartPrice + "</td></tr>";

						$cartBody.html( $cartBody.html() + cartHTML );
					}
				} else {
					$cartBody.html( "" );	
				}

				if( cartItems.length > 0 ) {

					var cartTotal = this.storage.getItem( this.total );
					var cartShipping = this.storage.getItem( this.shippingRates );
					var subTot = this._convertString( cartTotal ) + this._convertString( cartShipping );

					this.$subTotal[0].innerHTML = this.currency + " " + this._convertNumber( subTot );
					this.$shipping[0].innerHTML = this.currency + " " + cartShipping;
				} else {
					this.$subTotal[0].innerHTML = this.currency + " " + 0.00;
					this.$shipping[0].innerHTML = this.currency + " " + 0.00;	
				}

			}
		},

		initializeDatePickerEvent : function(){
			$('[id^="datepicker-"]').on('apply.daterangepicker',
				function(event, picker) {
					var $form = $( this );
					var days = moment(picker.endDate).diff(picker.startDate, 'days') + 1;
					alert("Days difference :" + days);
					$(event.target).attr('day-diff',days);
				});
		},

		// Adds items to the shopping cart
		
		handleAddToCartForm: function() {
			var self = this;
			self.$formAddToCart.each(function() {
				var $form = $( this );
				var $product = $form.parent();
				var price = self._convertString( $product.data( "price" ) );
				var name =  $product.data( "name" );
				//var date =  $product.data( "daterange" );
				
				$form.on( "submit", function() { 
					if(self.storage.userInfo){
						var qty = 1;
						var date = new Date();
						var daterange = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
						var subTotal = qty * price;
						var total = self._convertString( self.storage.getItem( self.total ) );
						var sTotal = total + subTotal;
						self.storage.setItem( self.total, sTotal );
						self._addToCart({
							product: name,
							price: price,
							qty: qty,
							dateRange: daterange,
							days: qty
						});
						var shipping = self._convertString( self.storage.getItem( self.shippingRates ) );
						var shippingRates = self._calculateShipping( qty );
						var totalShipping = shipping + shippingRates;

						self.storage.setItem( self.shippingRates, totalShipping );
					} else {
						alert('Please login before you add to cart!!');
					}
					
				});
			});
		},

		// Updates the cart
		
		updateCart: function() {
			var self = this;
			if( self.$updateCartBtn.length ) {
				self.$updateCartBtn.on( "click", function() {
					var $rows = self.$formCart.find( "tbody tr" );
					var cart = self.storage.getItem( self.cartName );
					var shippingRates = self.storage.getItem( self.shippingRates );
					var total = self.storage.getItem( self.total );

					var updatedTotal = 0;
					var totalQty = 0;
					var updatedCart = {};
					updatedCart.items = [];

					$rows.each(function() {
						var $row = $( this );
						var pname = $.trim( $row.find( ".pname" ).text() );
						//var currentItem = $.grep(cData, function(obj){return obj.modelName === pname;})[0];
						var currentItem = self._getCurrentItem(pname);
						var days = parseInt($row.find( "input[name='daterange']" ).attr('day-diff'));//$row.find( "input[name='daterange']" ).val();
						var calculatedPrice = self._calculatePriceByDates(days, currentItem);
						var dateRange = $row.find( "input[name='daterange']" ).val();
						$row.find( "input[name='daterange']" ).attr('day-diff',days);
						$row.find( "input[class='qty']" ).val(days);
						$row.find( ".pprice" ).text(calculatedPrice);
						if(isNaN(days)){
							var date = $row.find( "input[name='daterange']" ).data('daterangepicker');
							days = moment(date.endDate).diff(date.startDate, 'days') + 1;
							calculatedPrice = self._calculatePriceByDates(days, currentItem);
							$row.find( "input[name='daterange']" ).attr('day-diff',days);
							$row.find( "input[class='qty']" ).val(days);
							$row.find( ".pprice" ).text(calculatedPrice);
						}
						var pqty = self._convertString( $row.find( ".pqty > .qty" ).val() );
						var pprice = self._convertString( self._extractPrice( $row.find( ".pprice" ) ) );
						var cartObj = {
							product: pname,
							price: pprice,
							qty: pqty,
							dateRange: dateRange
						};

						updatedCart.items.push( cartObj );

						var subTotal = calculatedPrice;
						updatedTotal += subTotal;
						//totalQty += pqty;
					});
					
					self.storage.setItem( self.total, self._convertNumber( updatedTotal ) );
					self.storage.setItem( self.shippingRates, self._convertNumber( self._calculateShipping( totalQty ) ) );
					self.storage.setItem( self.cartName, self._toJSONString( updatedCart ) );

				});
			}
		},

		
		// Empties the cart by calling the _emptyCart() method
		// @see $.Shop._emptyCart()
		
		emptyCart: function() {
			var self = this;
			if( self.$emptyCartBtn.length ) {
				self.$emptyCartBtn.on( "click", function() {
					self._emptyCart();
				});
			}
		},


		// Delete a product from the shopping cart

		deleteProduct: function() {
			var self = this;
			if( self.$formCart.length ) {
				var cart = this._toJSONObject( this.storage.getItem( this.cartName ) );
				var items = cart.items;

				$( document ).on( "click", ".pdelete a", function( e ) {
					e.preventDefault();
					
					var productName = $( this ).data( "product" );
					var newItems = [];
					for( var i = 0; i < items.length; ++i ) {
						var item = items[i];
						var product = item.product;	
						if( product == productName ) {
							items.splice( i, 1 );
						}
					}
					self.storage.setItem( "count", items.length);
					self.$myCartCount.text( items.length );
					newItems = items;
					var updatedCart = {};
					updatedCart.items = newItems;

					var updatedTotal = 0;
					var totalQty = 0;
					if( newItems.length == 0 ) {
						updatedTotal = 0;
						totalQty = 0;
					} else {
						for( var j = 0; j < newItems.length; ++j ) {
							var prod = newItems[j];
							var sub = prod.price;
							updatedTotal += sub;
							//totalQty += prod.qty;
						}
					}

					self.storage.setItem( self.total, self._convertNumber( updatedTotal ) );
					self.storage.setItem( self.shippingRates, self._convertNumber( self._calculateShipping( totalQty ) ) );

					self.storage.setItem( self.cartName, self._toJSONString( updatedCart ) );
					$( this ).parents( "tr" ).remove();
					self.$subTotal[0].innerHTML = self.currency + " " + self.storage.getItem( self.total );
				});
			}
		},

		// Private methods
		
		
		// Empties the session storage
		
		_emptyCart: function() {
			this.storage.clear();
		},
		
		/* Format a number by decimal places
		 * @param num Number the number to be formatted
		 * @param places Number the decimal places
		 * @returns n Number the formatted number
		 */
		 
		 

		 _formatNumber: function( num, places ) {
		 	var n = num.toFixed( places );
		 	return n;
		 },

		/* Extract the numeric portion from a string
		 * @param element Object the jQuery element that contains the relevant string
		 * @returns price String the numeric string
		 */


		 _extractPrice: function( element ) {
		 	var self = this;
		 	var text = element.text();
		 	var price = parseInt(text.replace(/^\D+/g,''));
		 	//var price = text.replace( self.currencyString, "" ).replace( " ", "" );
		 	return price;
		 },

		/* Converts a numeric string into a number
		 * @param numStr String the numeric string to be converted
		 * @returns num Number the number
		 */

		 _convertString: function( numStr ) {
		 	var num;
		 	if( /^[-+]?[0-9]+\.[0-9]+$/.test( numStr ) ) {
		 		num = parseFloat( numStr );
		 	} else if( /^\d+$/.test( numStr ) ) {
		 		num = parseInt( numStr, 10 );
		 	} else {
		 		num = Number( numStr );
		 	}

		 	if( !isNaN( num ) ) {
		 		return num;
		 	} else {
		 		console.warn( numStr + " cannot be converted into a number" );
		 		return false;
		 	}
		 },

		/* Converts a number to a string
		 * @param n Number the number to be converted
		 * @returns str String the string returned
		 */

		 _convertNumber: function( n ) {
		 	var str = n.toString();
		 	return str;
		 },

		/* Converts a JSON string to a JavaScript object
		 * @param str String the JSON string
		 * @returns obj Object the JavaScript object
		 */

		 _toJSONObject: function( str ) {
		 	var obj = JSON.parse( str );
		 	return obj;
		 },

		/* Converts a JavaScript object to a JSON string
		 * @param obj Object the JavaScript object
		 * @returns str String the JSON string
		 */


		 _toJSONString: function( obj ) {
		 	var str = JSON.stringify( obj );
		 	return str;
		 },


		/* Add an object to the cart as a JSON string
		 * @param values Object the object to be added to the cart
		 * @returns void
		 */


		 _addToCart: function( values ) {
		 	var cart = this.storage.getItem( this.cartName );

		 	var cartObject = this._toJSONObject( cart );
		 	var cartCopy = cartObject;
		 	var items = cartCopy.items;
		 	items.push( values );

		 	this.storage.setItem( this.cartName, this._toJSONString( cartCopy ) );
		 	this.storage.setItem( "count", items.length);
		 	this.$myCartCount.text(items.length);
		 },

		/* Custom shipping rates calculation based on the total quantity of items in the cart
		 * @param qty Number the total quantity of items
		 * @returns shipping Number the shipping rates
		 */

		 _calculateShipping: function( qty ) {
		 	var shipping = 0;
		 	if( qty >= 6 ) {
		 		shipping = 10;
		 	}
		 	if( qty >= 12 && qty <= 30 ) {
		 		shipping = 20;	
		 	}

		 	if( qty >= 30 && qty <= 60 ) {
		 		shipping = 30;	
		 	}

		 	if( qty > 60 ) {
		 		shipping = 0;
		 	}

		 	return shipping;

		 },

		 _getCurrentItem: function(pname){
		 	var currentItem = $.grep(cData.cameras.canon, function(obj){return obj.modelName === pname;})[0];
		 	if(currentItem){
		 		return currentItem;
		 	} else {
		 		currentItem = $.grep(cData.cameras.nikon, function(obj){return obj.modelName === pname;})[0];
		 		if(currentItem) {
		 			return currentItem;
		 		} else {
		 			currentItem = $.grep(cData.lens.canon, function(obj){return obj.modelName === pname;})[0];
		 			if(currentItem){
		 				return currentItem;
		 			} else {
		 				currentItem = $.grep(cData.lens.nikon, function(obj){return obj.modelName === pname;})[0];
		 				if(currentItem){
		 					return currentItem;
		 				} else {
		 					currentItem = $.grep(cData.accessories, function(obj){return obj.modelName === pname;})[0];
		 				}
		 			}
		 		}
		 	} 
		 	return currentItem;
		 },

		 _calculatePriceByDates: function( daysNum, productObj ) {
		 	var price = 0;
		 	if( daysNum == 1 ) {
		 		price = productObj.cost.one;
		 	}
		 	if( daysNum >= 3 && daysNum <=6) {
		 		price = productObj.cost.three;	
		 	}

		 	if( daysNum >= 7) {
		 		price = productObj.cost.seven;		
		 	}

		 	return price;

		 }

		};

		$(function() {
			var shop = new $.Shop( "#site" );
		});





	})( jQuery );