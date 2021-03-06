odoo.define('website_user_wishlist.wishlist', function (require) {
"use strict";
	var website = require('website.website');
	var ajax = require('web.ajax');
    $('a.js_add_wish_list_json').on('click', function (ev) {
    	ev.preventDefault();
        var $link = $(ev.currentTarget);
        var href = $link.attr("href");
        var add_cart = href.match(/add_to_wishlist\/([0-9]+)/);
        var product_id = add_cart && +add_cart[1] || false;
        ajax.jsonRpc("/profile/add_to_wishlist/", 'call', {
                'product_id': product_id
                })
       $('#added_wishlist_hide').show();
       $('#on_click_change_lable').hide();
    });
    
});
