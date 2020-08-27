(function ($) {

  Drupal.behaviors.esi = {
    attach: function (context, settings) {
      var contextualize_urls = (typeof Drupal.settings.ESI !== 'undefined') && Drupal.settings.ESI.contextualize_URLs;
      if (contextualize_urls) {
        $().esiTags().DrupalESIContextualizeURL().handleESI();
      }
      else {
        $().esiTags().handleESI();
      }
    }
  };

  // Add the ESI context from the cookie to the ESI URL.
  $.fn.DrupalESIContextualizeURL = function() {
    // Regex to find the ESI context from an ESI src URL.
    var esi_context_regexp = /\/CACHE%3D([^\/]+)$/;

    $(this).each(function() {
      src = $(this).attr('src');
      
      // Get the context key from the ESI src attribute.
      // Contexts are provided in the last element: e.g. /CACHE=FOO.
      if (match = $(this).attr('src').match(esi_context_regexp)) {
        context_key = match[1];
        context_val = esi_get_user_context(context_key);
        new_src = src.replace(esi_context_regexp, '/CACHE=' + context_val);
        $(this).attr('src', new_src);
      }
    });
    return this;
  }

  // Attach to ajax request, find block that was created and
  // attachBehaviours to it.
  $( document ).ajaxSuccess(function( event, request, settings ) {
    if (event.target.nodeName.toLowerCase() == 'esi:include') {
      var returned = $('<div></div>').html($.trim(request.responseText)).contents();
      if (returned[0] !== undefined) {
        var elem = $('#' + returned[0].id);
        if (elem !== undefined) {
          Drupal.attachBehaviors(elem[0], Drupal.settings);
        }
      }
    }
  });

})(jQuery);

/**
 * Get the value of a particular context.
 */
function esi_get_user_context(context_key) {
  // Transform a context string (e.g. 'USER') into the actual cookie name.
  cookie_name = Drupal.settings.ESI.cookie_prefix + context_key + Drupal.settings.ESI.cookie_suffix;
  return esi_get_value_from_cookie(cookie_name);
}

/**
 * Get the value of a named cookie.
 */
function esi_get_value_from_cookie(cookie_name) {
  var all_cookies = document.cookie.split(';');
  for (var i=0; i < all_cookies.length; i++) {
    if (all_cookies[i].indexOf(cookie_name) === 1) {
      var values = all_cookies[i].split('=');
      return values[1];
    }
  }
  return '';
}
;
/**
 * jQuery ESI Plugin v1.0
 * http://github.com/manarth/jquery_esi
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Usage:
 * $().esiTags().handleESI();
 */

(function ($) {

  // Fetch all ESI tags.
  $.fn.esiTags = function() {
    // Initialise a jQuery collection to return.
    esi_tags = $();

    // The handler can be called as $().esiTags, or $('foo').esiTags().
    // Ensure we have an iterable collection in either instance.
    if (this.length == 0) {
      collection = $('html');
    }
    else {
      collection = this;
    }

    collection.each(function() {
      // Retrieve the base DOM element, in order to access the DOM method
      // getElementsByTagName.
      base_element = $(this).get(0);
      // Discover the <esi:include> tags.
      jQuery.each(base_element.getElementsByTagName('esi:include'), function(i, val) {
        // Some DOMs fail to recognise that the ESI include tag is self-
        // closing, so they treat following tags as child nodes.
        if ($(this).children().length > 0) {
          // Move the child nodes to become siblings.
          children = $(this).children().detach();
          $(this).after(children);
        }
        esi_tags = esi_tags.add($(this));
      });
      // Discover the <esi:remove> tags.
      jQuery.each(base_element.getElementsByTagName('esi:remove'), function(i, val) {
        // ESI remove tags are not self-closing, so no special treatment for
        // child nodes is needed.
        esi_tags = esi_tags.add($(this));
      });
    });
    return esi_tags;
  };

  // Move child nodes to siblings.
  $.fn.handleESIChildren = function() {
    $(this).each(function() {
    });
    return this;
  }

  // Handle ESI tags.
  // Delegates to either .handleESIInclude() or .handleESIRemove() as needed.
  $.fn.handleESI = function() {
    $(this).each(function() {
      switch (this.nodeName.toLowerCase()) {
        case 'esi:include':
          $(this).handleESIInclude();
          break;
      
        case 'esi:remove':
          $(this).handleESIRemove();
          break;
      }
    });

    return this;
  }

  // Handle a single ESI Include tag.
  $.fn.handleESIInclude = function() {
    src = $(this).attr('src');
    jQuery.ajax({
      context: this,
      url: src,
      success: function(data, textStatus, jqXHR) {
        esiElement = $(this);
        esiElement.replaceWith(data);
      }
    });
  }

  // Handle a single ESI Remove tag.
  $.fn.handleESIRemove = function() {
    $(this).replaceWith('');
  }

})(jQuery);
;
(function($) {
    $(document).ready(function() {

        /**************************************************************************
         * [REFACT-1648] Mise en place des événements de tracking sur les produits
         *************************************************************************/

        // Gestion du clic sur un modèle d'une page famille.
        $('.view-family .node-teaser, .view-family .node-mobile-teaser, .view-family .node-model.upselling').click(function() {
            if(!$(this).hasClass('node-supermodel')) {
                if (!(typeof $(this).attr('data-model-title') === 'undefined') && !(typeof $(this).attr('data-model-code') === 'undefined')) {
                    dataLayer.push({
                        'event': 'GACommerceEvent',
                        'eventCategory': 'Commerce',
                        'eventAction': 'Click',
                        'currency': $(this).attr('data-model-currency'),
                        'ecommerce': {
                            'click': {
                                'actionField': {'list': $(this).attr('taxonomy')},
                                'products': [{
                                        'id': $(this).attr('data-model-code'),
                                        'name': $(this).attr('data-model-title'),
                                        'price': parseFloat($(this).attr('data-model-price')),
                                        'category': $(this).attr('data-model-category'),
                                        'variant': $(this).attr('data-model-variant')
                                    }]
                            }
                        },
                    });
                    if($(this).hasClass('upselling-default')) {
                        changeCookieShoppingTools('shoppingTools', $(this).attr('data-model-code'), 'Family_Upsell_Simple');
                    }
                    else if($(this).hasClass('upselling')) {
                        changeCookieShoppingTools('shoppingTools', $(this).attr('data-model-code'), 'Family_Upsell_Advanced');
                    }
                    else {
                        changeCookieShoppingTools('shoppingTools', $(this).attr('data-model-code'), 'Family');
                    }
                }
            }
        });

        // Gestion du clic sur le bouton d'ajout au panier (AJAX).
        $.fn.zyrin_datalayer_add_to_cart_callback = function() {
            $('.node-type-model .node-model[display="default"]').show(function() {
                // On récupère les informations depuis la div du node affiché.
                dataLayer.push({
                    'event': 'GACommerceEvent',
                    'eventCategory': 'Commerce',
                    'eventAction': 'Add to cart',
                    'currency': $(this).attr('data-model-currency'),
                    'ecommerce': {
                        'currencyCode': $(this).attr('data-model-currency'),
                        'add': {
                            'products': [{
                                'id': $(this).attr('data-model-code'),
                                'name': $(this).attr('data-model-title'),
                                'price': parseFloat($(this).attr('data-model-price')),
                                'category': $(this).attr('data-model-category'),
                                'variant': $(this).attr('data-model-variant'),
                                'quantity': parseInt($(this).find('select[id^="edit-quantity"] option:selected').val()),
                                'dimension10': getCookieShoppingToolsById('shoppingTools', $(this).attr('data-model-code'))
                            }]
                        }
                    }
                });
            });
        };

        // Gestion du clic sur le bouton de suppression d'un produit dans la page panier.
        $('.page-cart .delete-line-item').click(function() {
            dataLayer.push({
                'event': 'GACommerceEvent',
                'eventCategory': 'Commerce',
                'eventAction': 'Remove from cart',
                'currency': $(this).attr('data-model-currency'),
                'ecommerce': {
                    'remove': {
                        'products': [{
                            'id': $(this).attr('data-model-code'),
                            'name': $(this).attr('data-model-title'),
                            'price': parseFloat($(this).attr('data-model-price')),
                            'category': $(this).attr('data-model-category'),
                            'variant': $(this).attr('data-model-variant'),
                            'quantity': parseInt($(this).attr('quantity'))
                        }]
                    }
                }
            });
        });

        // Gestion du clic sur le bouton de validation du panier (paiement).
        $('.page-cart input[id^="edit-checkout"]').click(function() {
            var currency;
            var products = [];
            var i = 0;
            var cookie;
            // On construit le tableau d'objets contenant les attributs de
            // chacun des produits du panier.
            $('.page-cart .delete-line-item').each(function() {
                var attributes = {};
                attributes['id'] = $(this).attr('data-model-code');
                attributes['name'] = $(this).attr('data-model-title');
                attributes['price'] = parseFloat($(this).attr('data-model-price'));
                attributes['category'] = $(this).attr('data-model-category');
                attributes['variant'] = $(this).attr('data-model-variant');
                attributes['quantity'] = parseInt($(this).attr('quantity'));
                cookie = getCookieShoppingToolsById('shoppingTools', $(this).attr('data-model-code'));
                if(cookie.length) {
                    attributes['dimension10'] = cookie;
                }
                currency = $(this).attr('data-model-currency');
                products[i] = attributes;
                i++;
            });
            dataLayer.push({
                'event': 'GACommerceEvent',
                'eventCategory': 'Commerce',
                'eventAction': 'Purchase',
                'currency': currency,
                'ecommerce': {
                    'purchase': {
                        'actionField': {
                            'id': $(this).attr('order_id'),
                            'revenue': parseFloat($(this).attr('total_amount'))
                        },
                        'products': products
                    }
                }
            });
        });

        /***********************************************************************
         * [REFACT-1721] Mise en place des événements de tracking sur les médias
         ***********************************************************************/

        // Gestion du click sur une miniature (mode SD).
        $('.prod-medias .prod-thumbnail .slick-slide').click(function() {
            var event = 'ProductImageEvent';
            var eventCategory = 'Media';
            var eventLabel = ($(this).index()+1);

            if($(this).hasClass('prod-thumbnail-video')){
                var eventAction = 'Video SD';
            }else if($(this).hasClass('prod-thumbnail-360')){
                var eventAction = '360 SD';
            }else{
                var eventAction = 'Image SD';
            }
            pushDatalayerEvent(event, eventCategory, eventAction, eventLabel);
        });
 
        // Gestion du click sur une miniature (mode HD).
        $('body').on('mousedown', '.prod-zoom .prod-thumbnail .slick-slide', function() {
            var event = 'ProductImageEvent';
            var eventCategory = 'Media';
            var eventLabel = ($(this).index()+1);

            if($(this).hasClass('prod-thumbnail-video')){
                var eventAction = 'Video HD';
            }else if($(this).hasClass('prod-thumbnail-360')){
                var eventAction = '360 HD';
            }else{
                var eventAction = 'Image HD';
            }
            pushDatalayerEvent(event, eventCategory, eventAction, eventLabel);
        });
        
        // Mobile (click sur une video ou un 360)
        $('.product-slider .video-product > .item-list > .list > li').click(function() {
            var event = 'ProductImageEvent';
            var eventCategory = 'Media';
            var eventLabel = ($(this).index()+1);

            if($(this).find('a').hasClass('view-video')){
                var eventAction = 'Video HD';
            }else if($(this).find('a').hasClass('view-3d')){
                var eventAction = '360 HD';
            }else{
                var eventAction = 'Image HD';
            }
            pushDatalayerEvent(event, eventCategory, eventAction, eventLabel);
        });

        // Gestion du click sur l'image affichée pour agrandir.
        $('.prod-medias #prod-main li.slick-current').on('mousedown', function() {
            var event = 'ProductImageEvent';
            var eventCategory = 'Media';
            var eventAction = 'Image HD';
            var eventLabel = ($(this).index()+1);
            pushDatalayerEvent(event, eventCategory, eventAction, eventLabel);
        });

        // Gestion du click sur le bouton zoom
        $('.prod-medias .btn-zoom').click(function() {
            var event = 'ProductImageEvent';
            var eventCategory = 'Media';
            var cible = $('.prod-medias #prod-main li.active');
            var eventLabel = (cible.index()+1);
            if(cible.hasClass('kameleon-product-media-front-video')){
                var eventAction = 'Video HD';
            }else if(cible.hasClass('kameleon-product-media-front-360')){
                var eventAction = '360 HD';
            }else{
                var eventAction = 'Image HD';
            }
            pushDatalayerEvent(event, eventCategory, eventAction, eventLabel);
        });

        /******************************************************************
         * Mise en place des événements de tracking sur les réseaux sociaux
         ******************************************************************/

        // Gestion du click sur les réseaux sociaux.
        $('#kameleon-share-banner > li > a, #widgets-element-kameleon_profile_socialmedia a').click(function() {
            var event = 'SocialEvent';
            var eventCategory = $(this).attr('data-category');
            var eventAction = $(this).attr('data-action');
            var eventLabel = window.location.href;
            pushDatalayerEvent(event, eventCategory, eventAction, eventLabel);
        });

        /***********************************************************
         * Mise en place des événements de tracking sur les produits
         ***********************************************************/

        // Gestion du click sur les produits similaire.
        $('.field-name-field-model-similar-products > .field-items > .field-item > div, .field-name-field-model-similar-products > .field-items > .field-item > article').click(function() {
            var event = 'GAEvent';
            var eventCategory = 'ShoppingTools';
            var eventAction = 'ClickSimilar | '+($(this).parent().index()+1)+' # '+$(this).parent().parent().find('> .field-item').length;
            var eventLabel = $(this).attr('data-model-title')+' | '+$(this).attr('data-model-code');
            var eventValue = $(this).attr('data-model-price');
            changeCookieShoppingTools('shoppingTools', $(this).attr('data-model-code'), 'Similar');
            pushDatalayerEvent(event, eventCategory, eventAction, eventLabel, eventValue);
        });

        // Gestion du click sur le crosselling de la popin panier.
        $('.commerce-add-to-cart-confirmation .views-field-field-model-crosselling .node-model.node-teaser').click(function() {
            var event = 'GAEvent';
            var eventCategory = 'ShoppingTools';
            var eventAction = 'ClickPopinCart | '+($(this).index()+1)+' # '+$(this).parent().find('.node-model.node-teaser').length;
            var eventLabel = $(this).attr('data-model-title')+' | '+$(this).attr('data-model-code');
            var eventValue = $(this).attr('data-model-price');
            changeCookieShoppingTools('shoppingTools', $(this).attr('data-model-code'), 'Popin_Cart');
            pushDatalayerEvent(event, eventCategory, eventAction, eventLabel, eventValue);
        });

        // Gestion du click sur les panoplies.
        $('.node-type-model .field-name-field-panoplie-produits > .field-items > .field-item > div').click(function() {
            var event = 'GAEvent';
            var eventCategory = 'ShoppingTools';
            var eventAction = 'ClickPanoply | '+($(this).parent().index()+1)+' # '+$(this).parent().parent().find('> .field-item').length;
            var eventLabel = $(this).attr('data-model-title')+' | '+$(this).attr('data-model-code');
            var eventValue = $(this).attr('data-model-price');
            changeCookieShoppingTools('shoppingTools', $(this).attr('data-model-code'), 'Panoply');
            pushDatalayerEvent(event, eventCategory, eventAction, eventLabel, eventValue);
        });

        // Gestion du click sur les déclinaisons.
        $('.declinaisons-model .slick-slide').click(function() {
            var event = 'ColorEvent';
            var eventCategory = 'ShoppingTools';
            var eventAction = 'ClickColor | '+($(this).index()+1)+' # '+$(this).parent().find('.slick-slide').length;
            var eventLabel = $(this).attr('data-model-title')+' | '+$(this).attr('data-model-code');
            var eventValue = $(this).attr('data-model-price');
            changeCookieShoppingTools('shoppingTools', $(this).attr('data-model-code'), 'Product_Colors');
            pushDatalayerEvent(event, eventCategory, eventAction, eventLabel, eventValue);
        });

        $('.declinaisons .declinaisons-all-models li a').click(function() {
            var event = 'ColorEvent';
            var eventCategory = 'ShoppingTools';
            var eventAction = 'ClickColor | '+($(this).parent().index()+1)+' # '+$(this).parent().parent().find('li').length;
            var eventLabel = $(this).attr('data-model-title')+' | '+$(this).attr('data-model-code');
            var eventValue = $(this).attr('data-model-price');
            changeCookieShoppingTools('shoppingTools', $(this).attr('data-model-code'), 'Product_Colors');
            pushDatalayerEvent(event, eventCategory, eventAction, eventLabel, eventValue);
        });

        /***********************************************************
         * Ajouts 7.1
         ***********************************************************/

        // Gestion du click sur teaser dans les éléments associés à un conseil
        $('.content-advice-right .node-teaser').click(function() {
            if(!$(this).hasClass('node-supermodel') && !$(this).hasClass('node-banner')) {
                var event = 'ReferenceEvent';
                var eventAction = 'AdviceReferenceContent';
                var eventValue = '';
                if($(this).attr('data-type') == 'model') {
                    var eventCategory = 'ShoppingTools';
                    var eventLabel = $(this).attr('data-model-title')+' | '+$(this).attr('data-model-code');
                    eventValue = $(this).attr('data-model-price');
                    changeCookieShoppingTools('shoppingTools', $(this).attr('data-model-code'), 'Advice_ReferenceContent');
                }else if($(this).attr('data-type').length) {
                    var eventCategory = 'ContentTools';
                    var eventLabel = $(this).attr('data-type')+' | '+$(this).attr('data-title')+' | '+$(this).attr('data-id');
                    changeCookieShoppingTools('contentTools', $(this).attr('data-id'), 'Advice_ReferenceContent');
                }
                pushDatalayerEvent(event, eventCategory, eventAction, eventLabel, eventValue);
            }
        });

        // Gestion du click sur teaser dans les éléments associés à un article de blog
        $('.content-blog-right .node-teaser').click(function() {
            if(!$(this).hasClass('node-supermodel') && !$(this).hasClass('node-banner')) {
                var event = 'ReferenceEvent';
                var eventAction = 'BlogReferenceContent';
                var eventValue = '';
                if($(this).attr('data-type') == 'model') {
                    var eventCategory = 'ShoppingTools';
                    var eventLabel = $(this).attr('data-model-title')+' | '+$(this).attr('data-model-code');
                    eventValue = $(this).attr('data-model-price');
                    changeCookieShoppingTools('shoppingTools', $(this).attr('data-model-code'), 'Blog_ReferenceContent');
                }else if($(this).attr('data-type').length) {
                    var eventCategory = 'ContentTools';
                    var eventLabel = $(this).attr('data-type')+' | '+$(this).attr('data-title')+' | '+$(this).attr('data-id');
                    changeCookieShoppingTools('contentTools', $(this).attr('data-id'), 'Blog_ReferenceContent');
                }
                pushDatalayerEvent(event, eventCategory, eventAction, eventLabel, eventValue);
            }
        });

        // Gestion du click sur teaser dans page recherche (recherche mélangée)
        $('.group-result .node-teaser, .group-result .node-mobile-teaser').click(function() {
            if(!$(this).hasClass('node-supermodel')) {
                var event = 'SearchEvent';
                var element = $(this).closest('.group-result');
                var eventValue = '';
                if($(this).attr('data-type') == 'model') {
                    var eventCategory = 'ShoppingTools';
                    var eventLabel = $(this).attr('data-model-title')+' | '+$(this).attr('data-model-code');
                    eventValue = $(this).attr('data-model-price');
                    if(element.hasClass('grouped')) {
                        var eventAction = 'ClickGroupSearch';
                        changeCookieShoppingTools('shoppingTools', $(this).attr('data-model-code'), 'Group_Search');
                    }
                    else {
                        var eventAction = 'ClickListSearch';
                        changeCookieShoppingTools('shoppingTools', $(this).attr('data-model-code'), 'List_Search');
                    }
                }else if($(this).attr('data-type').length){
                    var eventCategory = 'ContentTools';
                    var eventLabel = $(this).attr('data-type')+' | '+$(this).attr('data-title')+' | '+$(this).attr('data-id');
                    if(element.hasClass('grouped')) {
                        var eventAction = 'ClickGroupSearch';
                        changeCookieShoppingTools('contentTools', $(this).attr('data-id'), 'Group_Search');
                    }
                    else {
                        var eventAction = 'ClickListSearch';
                        changeCookieShoppingTools('contentTools', $(this).attr('data-id'), 'List_Search');
                    }
                }
                pushDatalayerEvent(event, eventCategory, eventAction, eventLabel, eventValue);
            }
        });

        // Gestion du click sur teaser dans le menu (position left)
        $('.menu .field-name-field-menu-left-item .node-teaser').click(function() {
            if(!$(this).hasClass('node-supermodel') && !$(this).hasClass('node-banner')) {
                var event = 'ReferenceEvent';
                var eventAction = 'ClickMenuItem | Left';
                var eventValue = '';
                if($(this).attr('data-type') == 'model') {
                    var eventCategory = 'ShoppingTools';
                    var eventLabel = $(this).attr('data-model-title')+' | '+$(this).attr('data-model-code');
                    eventValue = $(this).attr('data-model-price');
                    changeCookieShoppingTools('shoppingTools', $(this).attr('data-model-code'), 'Menu_Item');
                }else if($(this).attr('data-type').length){
                    var eventCategory = 'ContentTools';
                    var eventLabel = $(this).attr('data-type')+' | '+$(this).attr('data-title')+' | '+$(this).attr('data-id');
                    changeCookieShoppingTools('contentTools', $(this).attr('data-id'), 'Menu_Item');
                }
                pushDatalayerEvent(event, eventCategory, eventAction, eventLabel, eventValue);
            }
        });

        // Gestion du click sur teaser dans le menu (position right)
        $('.menu .field-name-field-menu-right-item .node-teaser').click(function() {
            if(!$(this).hasClass('node-supermodel') && !$(this).hasClass('node-banner')) {
                var event = 'ReferenceEvent';
                var eventAction = 'ClickMenuItem | Right';
                var eventValue = '';
                if($(this).attr('data-type') == 'model') {
                    var eventCategory = 'ShoppingTools';
                    var eventLabel = $(this).attr('data-model-title')+' | '+$(this).attr('data-model-code');
                    eventValue = $(this).attr('data-model-price');
                    changeCookieShoppingTools('shoppingTools', $(this).attr('data-model-code'), 'Menu_Item');
                }else if($(this).attr('data-type').length) {
                    var eventCategory = 'ContentTools';
                    var eventLabel = $(this).attr('data-type')+' | '+$(this).attr('data-title')+' | '+$(this).attr('data-id');
                    changeCookieShoppingTools('contentTools', $(this).attr('data-id'), 'Menu_Item');
                }
                pushDatalayerEvent(event, eventCategory, eventAction, eventLabel, eventValue);
            }
        });

        // Gestion du click sur teaser dans le menu (position bottom)
        $('.menu .field-name-field-menu-bottom-item .node-teaser').click(function() {
            if(!$(this).hasClass('node-supermodel') && !$(this).hasClass('node-banner')) {
                var event = 'ReferenceEvent';
                var eventAction = 'ClickMenuItem | Bottom';
                var eventValue = '';
                if($(this).attr('data-type') == 'model') {
                    var eventCategory = 'ShoppingTools';
                    var eventLabel = $(this).attr('data-model-title')+' | '+$(this).attr('data-model-code');
                    eventValue = $(this).attr('data-model-price');
                    changeCookieShoppingTools('shoppingTools', $(this).attr('data-model-code'), 'Menu_Item');
                }else if($(this).attr('data-type').length) {
                    var eventCategory = 'ContentTools';
                    var eventLabel = $(this).attr('data-type')+' | '+$(this).attr('data-title')+' | '+$(this).attr('data-id');
                    changeCookieShoppingTools('contentTools', $(this).attr('data-id'), 'Menu_Item');
                }
                pushDatalayerEvent(event, eventCategory, eventAction, eventLabel, eventValue);
            }
        });

        /***********************************************************
         * Ajouts 7.2
         ***********************************************************/

        // Gestion du click sur une banner dans la colonne des familles
        $('.family .field-name-field-secondary-banner .node-banner').click(function() {
            var event = 'BannerEvent';
            var bannerPosition = ($(this).parent().index()+1);
            var eventAction = 'ClickFamilyPromotedContent ' +' | '+bannerPosition;
            var eventValue = '';
            if($(this).attr('data-banner-type') == 'model') {
                var eventCategory = 'ShoppingTools';
                var eventLabel = $(this).attr('data-model-title')+' | '+$(this).attr('data-model-code');
                eventValue = $(this).attr('data-model-price');
                changeCookieShoppingTools('shoppingTools', $(this).attr('data-model-code'), 'Family_Promoted_Content');
            }else if($(this).attr('data-banner-type') == 'url') {
                var eventCategory = 'ContentTools';
                var eventLabel = $(this).attr('data-banner-link');
            }else if($(this).attr('data-banner-type').length) {
                var eventCategory = 'ContentTools';
                var eventLabel = $(this).attr('data-banner-type')+' | '+$(this).attr('data-banner-title')+' | '+$(this).attr('data-banner-id');
                changeCookieShoppingTools('contentTools', $(this).attr('data-banner-id'), 'Family_Promoted_Content');
            }
            pushDatalayerEvent(event, eventCategory, eventAction, eventLabel, eventValue);
         });

        // Gestion du click sur une banner dans le menu (position left)
        $('.menu .field-name-field-menu-left-item .node-banner').click(function() {
            var event = 'BannerEvent';
            var eventAction = 'ClickMenuBanner | Left';
            var eventValue = '';
            if($(this).attr('data-banner-type') == 'model') {
                var eventCategory = 'ShoppingTools';
                var eventLabel = $(this).attr('data-model-title')+' | '+$(this).attr('data-model-code');
                eventValue = $(this).attr('data-model-price');
                changeCookieShoppingTools('shoppingTools', $(this).attr('data-model-code'), 'Menu_Banner');
            }else if($(this).attr('data-banner-type') == 'url') {
                var eventCategory = 'ContentTools';
                var eventLabel = $(this).attr('data-banner-link');
            }else if($(this).attr('data-banner-type').length) {
                var eventCategory = 'ContentTools';
                var eventLabel = $(this).attr('data-banner-type')+' | '+$(this).attr('data-banner-title')+' | '+$(this).attr('data-banner-id');
                changeCookieShoppingTools('contentTools', $(this).attr('data-banner-id'), 'Menu_Banner');
            }
            pushDatalayerEvent(event, eventCategory, eventAction, eventLabel, eventValue);
         });

        // Gestion du click sur une banner dans le menu (position right)
        $('.menu .field-name-field-menu-right-item .node-banner').click(function() {
            var event = 'BannerEvent';
            var eventAction = 'ClickMenuBanner | Right';
            var eventValue = '';
            if($(this).attr('data-banner-type') == 'model') {
                var eventCategory = 'ShoppingTools';
                var eventLabel = $(this).attr('data-model-title')+' | '+$(this).attr('data-model-code');
                eventValue = $(this).attr('data-model-price');
                changeCookieShoppingTools('shoppingTools', $(this).attr('data-model-code'), 'Menu_Banner');
            }else if($(this).attr('data-banner-type') == 'url') {
                var eventCategory = 'ContentTools';
                var eventLabel = $(this).attr('data-banner-link');
            }else if($(this).attr('data-banner-type').length) {
                var eventCategory = 'ContentTools';
                var eventLabel = $(this).attr('data-banner-type')+' | '+$(this).attr('data-banner-title')+' | '+$(this).attr('data-banner-id');
                changeCookieShoppingTools('contentTools', $(this).attr('data-banner-id'), 'Menu_Banner');
            }
            pushDatalayerEvent(event, eventCategory, eventAction, eventLabel, eventValue);
         });

        // Gestion du click sur une banner dans le menu (position bottom)
        $('.menu .field-name-field-menu-bottom-item .node-banner').click(function() {
            var event = 'BannerEvent';
            var eventAction = 'ClickMenuBanner | Bottom';
            var eventValue = '';
            if($(this).attr('data-banner-type') == 'model') {
                var eventCategory = 'ShoppingTools';
                var eventLabel = $(this).attr('data-model-title')+' | '+$(this).attr('data-model-code');
                eventValue = $(this).attr('data-model-price');
                changeCookieShoppingTools('shoppingTools', $(this).attr('data-model-code'), 'Menu_Banner');
            }else if($(this).attr('data-banner-type') == 'url') {
                var eventCategory = 'ContentTools';
                var eventLabel = $(this).attr('data-banner-link');
            }else if($(this).attr('data-banner-type').length) {
                var eventCategory = 'ContentTools';
                var eventLabel = $(this).attr('data-banner-type')+' | '+$(this).attr('data-banner-title')+' | '+$(this).attr('data-banner-id');
                changeCookieShoppingTools('contentTools', $(this).attr('data-banner-id'), 'Menu_Banner');
            }
            pushDatalayerEvent(event, eventCategory, eventAction, eventLabel, eventValue);
         });

        // Gestion du click sur une banner dans la colonne des conseils
        $('.content-advice-right .node-banner').click(function() {
            var event = 'PromotedEvent';
            var eventAction = 'ClickAdviceBanner';
            var eventValue = '';
            if($(this).attr('data-banner-type') == 'model') {
                var eventCategory = 'ShoppingTools';
                var eventLabel = $(this).attr('data-model-title')+' | '+$(this).attr('data-model-code');
                eventValue = $(this).attr('data-model-price');
                changeCookieShoppingTools('shoppingTools', $(this).attr('data-model-code'), 'Advice_Banner');
            }else if($(this).attr('data-banner-type') == 'url') {
                var eventCategory = 'ContentTools';
                var eventLabel = $(this).attr('data-banner-link');
            }else if($(this).attr('data-banner-type').length) {
                var eventCategory = 'ContentTools';
                var eventLabel = $(this).attr('data-banner-type')+' | '+$(this).attr('data-banner-title')+' | '+$(this).attr('data-banner-id');
                changeCookieShoppingTools('contentTools', $(this).attr('data-banner-id'), 'Advice_Banner');
            }
            pushDatalayerEvent(event, eventCategory, eventAction, eventLabel, eventValue);
         });

        // Gestion du click sur une banner dans la colonne des blogs
        $('.content-blog-right .node-banner').click(function() {
            var event = 'PromotedEvent';
            var eventAction = 'ClickBlogBanner';
            var eventValue = '';
            if($(this).attr('data-banner-type') == 'model') {
                var eventCategory = 'ShoppingTools';
                var eventLabel = $(this).attr('data-model-title')+' | '+$(this).attr('data-model-code');
                eventValue = $(this).attr('data-model-price');
                changeCookieShoppingTools('shoppingTools', $(this).attr('data-model-code'), 'Blog_Banner');
            }else if($(this).attr('data-banner-type') == 'url') {
                var eventCategory = 'ContentTools';
                var eventLabel = $(this).attr('data-banner-link');
            }else if($(this).attr('data-banner-type').length) {
                var eventCategory = 'ContentTools';
                var eventLabel = $(this).attr('data-banner-type')+' | '+$(this).attr('data-banner-title')+' | '+$(this).attr('data-banner-id');
                changeCookieShoppingTools('contentTools', $(this).attr('data-banner-id'), 'Blog_Banner');
            }
            pushDatalayerEvent(event, eventCategory, eventAction, eventLabel, eventValue);
         });

         // Gestion du click sur teaser dans la page produit dans retrouvez également
        $('#retrouvez-egalement .node-teaser, #retrouvez-egalement .node-mobile-teaser').click(function() {
            if(!$(this).hasClass('node-banner')) {
                var event = 'ReferenceEvent';
                var eventAction = 'ClickAlsoFind';
                var eventCategory = 'ContentTools';
                var eventLabel = $(this).attr('data-type')+' | '+$(this).attr('data-title')+' | '+$(this).attr('data-id');
                changeCookieShoppingTools('contentTools', $(this).attr('data-id'), 'Also_Find');
                pushDatalayerEvent(event, eventCategory, eventAction, eventLabel);
            }
        });

        // Gestion du click sur conseil dans liste des conseils
        $('.view-advice-listing .node-advice').click(function() {
            var event = 'NavigationEvent';
            var teaserPosition = ($(this).parent().index()+1);
            var eventAction = 'ClickAdviceList | ' +teaserPosition;
            var eventCategory = 'ContentTools';
            var eventLabel = $(this).attr('data-type')+' | '+$(this).attr('data-title')+' | '+$(this).attr('data-id');
            changeCookieShoppingTools('contentTools', $(this).attr('data-id'), 'Advice_List');
            pushDatalayerEvent(event, eventCategory, eventAction, eventLabel);
        });

        // Gestion du click sur blog dans liste des blogs
        $('.view-blog-listing .node-summary, .view-blog-listing .node-mobile-teaser').click(function() {
            var event = 'NavigationEvent';
            var summaryPosition = ($(this).parent().index()+1);
            var eventAction = 'ClickBlogList | ' +summaryPosition;
            var eventCategory = 'ContentTools';
            var eventLabel = $(this).attr('data-type')+' | '+$(this).attr('data-title')+' | '+$(this).attr('data-id');
            changeCookieShoppingTools('contentTools', $(this).attr('data-id'), 'Blog_List');
            pushDatalayerEvent(event, eventCategory, eventAction, eventLabel);
        });

        /***********************************************************
         * Mise en place des événements de tracking sur Tetris
         ***********************************************************/

         // Gestion du click sur la remote
         $('.tetris-remote li').click(function() {
             var position = ($(this).index()+1);
             var event = 'NavigationEvent';
             var eventCategory = 'Navigation';
             var eventAction = 'ClickRemote';
             if($('body').hasClass('front')) {
                eventAction = 'ClickHPRemote';
             }
             var eventLabel = $(this).find('span').text()+' | '+position;
             pushDatalayerEvent(event, eventCategory, eventAction, eventLabel);
         });

         // Gestion du hover sur les hotspots
         $('.node-brick .field-collection-item-field-brick-media-hotspot .icon').mouseover(function() {
             var template = $(this).closest('.node-brick').attr('data-template');
             var event = 'HotspotEvent';
             var eventCategory = 'Navigation';
             var eventAction = 'HotspotOver';
             if($('body').hasClass('front')) {
                 eventAction = 'HotspotHPOver';
             }
             var eventLabel = template;
             if(template == 'slider') {
                 eventLabel += ' | '+(parseInt($(this).parent().attr('data-index'))+1);
             }
             pushDatalayerEvent(event, eventCategory, eventAction, eventLabel);
         });

         // Gestion du click sur les hotspots
         $('.node-brick .field-collection-item-field-brick-media-hotspot .hotspot-content').click(function() {
             var template = $(this).closest('.node-brick').attr('data-template');
             if ($(this).find('> .field').hasClass('field-name-field-brick-hotspot-ref')) {
                 if(!$(this).find('> .field > .field-items > .field-item > .node-banner').length) {
                     var element = $(this).find('> .field > .field-items > .field-item > .node-teaser');
                     var event = 'HotspotEvent';
                     var eventLabel = template;
                     var eventValue = '';
                     var eventAction = 'ClickHotspot';
                     if($('body').hasClass('front')) {
                         eventAction = 'ClickHotspotHP';
                     }
                     if(element.attr('data-type') == 'model') {
                         var eventCategory = 'ShoppingTools';
                         eventLabel += ' | '+element.attr('data-model-title')+' | '+element.attr('data-model-code');
                         eventValue = element.attr('data-model-price');
                         if($('body').hasClass('front')) {
                            changeCookieShoppingTools('shoppingTools', element.attr('data-model-code'), 'Tetris_HP_Hotspot');
                         }
                         else {
                            changeCookieShoppingTools('shoppingTools', element.attr('data-model-code'), 'Tetris_Hotspot');
                         }
                     }
                     else {
                         var eventCategory = 'ContentTools';
                         var typeTeaser = element.attr('data-type');
                         eventLabel += ' | '+typeTeaser+' | '+element.attr('data-title')+' | '+element.attr('data-id');
                         if($('body').hasClass('front')) {
                            changeCookieShoppingTools('contentTools', element.attr('data-id'), 'Tetris_HP_Hotspot');
                         }
                         else {
                            changeCookieShoppingTools('contentTools', element.attr('data-id'), 'Tetris_Hotspot');
                         }
                     }
                     pushDatalayerEvent(event, eventCategory, eventAction, eventLabel, eventValue);
                 }
             }
         });

         // Gestion du click sur les videos
         $('.node-brick .video').on('click touchstart', function() {
             var brick = $(this).closest('.node-brick');
             var brickPosition = ($('.node-brick').index(brick)+1);
             var event = 'NavigationEvent';
             var eventCategory = 'Navigation';
             var eventAction = 'ClickVideo';
             if($('body').hasClass('front')) {
                 eventAction = 'ClickHPVideo';
             }
             var eventLabel = brick.attr('data-template')+' | '+brickPosition;
             pushDatalayerEvent(event, eventCategory, eventAction, eventLabel);
         });

         // Gestion du click sur les videos (miniatures)
         $('.node-brick .thumbnails .item-list > ul > li').click(function() {
             var brick = $(this).closest('.node-brick');
             var template = brick.attr('data-template');
             var brickPosition = ($('.node-brick').index(brick)+1);
             var event = 'NavigationEvent';
             var eventCategory = 'Navigation';
             var eventAction = 'SelectVideo';
             if($('body').hasClass('front')) {
                eventAction = 'SelectHPVideo';
             }
             var eventLabel = 'Videos | '+($(this).index()+1)+' | '+brickPosition;
             pushDatalayerEvent(event, eventCategory, eventAction, eventLabel);
         });

         // Gestion du click sur les liens
         $('.node-brick .links a').click(function() {
             var brick = $(this).closest('.node-brick');
             var template = brick.attr('data-template');
             var brickPosition = ($('.node-brick').index(brick)+1);
             var event = 'NavigationEvent';
             var eventCategory = 'Navigation';
             var eventAction = 'ClickButton';
             if($('body').hasClass('front')) {
                 eventAction = 'ClickHPButton';
             }
             var eventLabel = template+' | '+$(this).attr('href')+' | '+brickPosition;
             pushDatalayerEvent(event, eventCategory, eventAction, eventLabel);
         });

         // Gestion du click sur les teasers
         $('.node-brick .field-name-field-brick-linked-content .node-teaser, .node-brick .field-name-field-brick-linked-content .node-mobile-teaser').click(function() {
             if(!$(this).hasClass('node-panoplies') && !$(this).hasClass('node-banner')) {
                 var event = 'PromotedEvent';
                 var eventAction = 'ClickTeaser';
                 if($('body').hasClass('front')) {
                    eventAction = 'ClickHPTeaser';
                 }
                 var eventLabel = $(this).closest('.node-brick').attr('data-template');
                 if($(this).attr('data-type') == 'model') {
                     var eventCategory = 'ShoppingTools';
                     eventLabel += ' | '+$(this).attr('data-model-title')+' | '+$(this).attr('data-model-code');
                     var eventValue = $(this).attr('data-model-price');
                     if($('body').hasClass('front')) {
                        changeCookieShoppingTools('shoppingTools', $(this).attr('data-model-code'), 'Tetris_HP_Teasers');
                     }
                     else {
                        changeCookieShoppingTools('shoppingTools', $(this).attr('data-model-code'), 'Tetris_Teasers');
                     }
                     pushDatalayerEvent(event, eventCategory, eventAction, eventLabel, eventValue);
                 }
                 else {
                     var eventCategory = 'ContentTools';
                     var typeTeaser = $(this).attr('data-type');
                     eventLabel += ' | '+typeTeaser+' | '+$(this).attr('data-title')+' | '+$(this).attr('data-id');
                     if($('body').hasClass('front')) {
                        changeCookieShoppingTools('contentTools', $(this).attr('data-id'), 'Tetris_HP_Teasers');
                     }
                     else {
                        changeCookieShoppingTools('contentTools', $(this).attr('data-id'), 'Tetris_Teasers');
                     }
                     pushDatalayerEvent(event, eventCategory, eventAction, eventLabel);
                 }
             }
         });

         // Gestion du click sur les banner
         $('.node-brick .field-name-field-brick-linked-content .node-banner').click(function() {
             var event = 'PromotedEvent';
             var eventAction = 'ClickBanner';
             if($('body').hasClass('front')) {
                eventAction = 'ClickHPBanner';
             }
             var eventLabel = $(this).closest('.node-brick').attr('data-template');
             if($(this).attr('data-banner-type') == 'model') {
                 var eventCategory = 'ShoppingTools';
                 eventLabel += ' | '+$(this).attr('data-model-title')+' | '+$(this).attr('data-model-code');
                 var eventValue = $(this).attr('data-model-price');
                 if($('body').hasClass('front')) {
                    changeCookieShoppingTools('shoppingTools', $(this).attr('data-model-code'), 'Tetris_HP_Banner');
                 }
                 else {
                    changeCookieShoppingTools('shoppingTools', $(this).attr('data-model-code'), 'Tetris_Banner');
                 }
                 pushDatalayerEvent(event, eventCategory, eventAction, eventLabel, eventValue);
             }
             else if($(this).attr('data-banner-type') == 'url') {
                 var eventCategory = 'ContentTools';
                 eventLabel += ' | '+$(this).attr('data-banner-link');
                 pushDatalayerEvent(event, eventCategory, eventAction, eventLabel);
             }
             else {
                 var eventCategory = 'ContentTools';
                 var typeTeaser = $(this).attr('data-banner-type');
                 eventLabel += ' | '+typeTeaser+' | '+$(this).attr('data-banner-title')+' | '+$(this).attr('data-banner-id');
                 if($('body').hasClass('front')) {
                    changeCookieShoppingTools('contentTools', $(this).attr('data-banner-id'), 'Tetris_HP_Banner');
                 }
                 else {
                    changeCookieShoppingTools('contentTools', $(this).attr('data-banner-id'), 'Tetris_Banner');
                 }
                 pushDatalayerEvent(event, eventCategory, eventAction, eventLabel);
             }
         });

         // Gestion du click sur les panoplies
         $('.node-brick .field-name-field-panoplie-produits .node-model').click(function() {
             var event = 'PromotedEvent';
             var eventCategory = 'ShoppingTools';
             var eventAction = 'ClickPanoply';
             if($('body').hasClass('front')) {
                eventAction = 'ClickHPPanoply';
             }
             var eventLabel = $(this).closest('.node-brick').attr('data-template')+' | '+$(this).attr('data-model-title')+' | '+$(this).attr('data-model-code');
             var eventValue = $(this).attr('data-model-price');
             if($('body').hasClass('front')) {
                changeCookieShoppingTools('shoppingTools', $(this).attr('data-model-code'), 'Tetris_HP_Panoply');
             }
             else {
                changeCookieShoppingTools('shoppingTools', $(this).attr('data-model-code'), 'Tetris_Panoply');
             }
             pushDatalayerEvent(event, eventCategory, eventAction, eventLabel, eventValue);
         });

         // Gestion du click sur le slider (Next - Prev - Pager)
         $('.node-brick .slick-slider > button, .node-brick .slick-slider .slick-dots').on('mousedown', function() {
             var brick = $(this).closest('.node-brick');
             var slidePosition = (brick.find('.slick-slider .slick-dots .slick-active').index()+1);
             var brickPosition = ($('.node-brick').index(brick)+1);
             var event = 'NavigationEvent';
             var eventCategory = 'Navigation';
             if(brick.hasClass('node-brick-teasers') || brick.hasClass('node-brick-autoteasers')) {
                 if($(this).hasClass('slick-prev')) {
                     var eventAction = 'ClickPreviousTeasers';
                     if($('body').hasClass('front')) {
                        eventAction = 'ClickHPPreviousTeasers';
                     }
                 } else if($(this).hasClass('slick-next')) {
                     var eventAction = 'ClickNextTeasers';
                     if($('body').hasClass('front')) {
                        eventAction = 'ClickHPNextTeasers';
                     }
                 }
                 var eventLabel = brick.attr('data-template')+' | '+brickPosition;
             } else if(brick.hasClass('node-brick-medias')) {
                 if($(this).hasClass('slick-prev')) {
                     var eventAction = 'ClickPreviousSlide';
                     if($('body').hasClass('front')) {
                        eventAction = 'ClickHPPreviousSlide';
                     }
                 } else if($(this).hasClass('slick-next')) {
                     var eventAction = 'ClickNextSlide';
                     if($('body').hasClass('front')) {
                        eventAction = 'ClickHPNextSlide';
                     }
                 } else if($(this).hasClass('slick-dots')) {
                     var eventAction = 'ClickPager';
                     if($('body').hasClass('front')) {
                        eventAction = 'ClickHPPager';
                     }
                 }
                 var eventLabel = 'Slider | '+slidePosition+' | '+brickPosition;
             }
             pushDatalayerEvent(event, eventCategory, eventAction, eventLabel);
         });

         // Gestion du click sur les liens des items
         $('.node-brick-items .field-name-field-brick-items a').click(function() {
             var brick = $(this).closest('.node-brick');
             var template = brick.attr('data-template');
             var brickPosition = ($('.node-brick').index(brick)+1);
             var event = 'NavigationEvent';
             var eventCategory = 'Navigation';
             var eventAction = 'ClickItem';
             if($('body').hasClass('front')) {
                eventAction = 'ClickHPItem';
             }
             var eventLabel = template+' | '+$(this).attr('href')+' | '+brickPosition;
             pushDatalayerEvent(event, eventCategory, eventAction, eventLabel);
         });
    })
})(jQuery);

/**
 * Fonction qui pousse le contenu du datalayer pour les événements MEDIA.
 *
 * @param {string} eventAction
 * @param {string} eventLabel
 * @returns {NULL}
 */
function pushDatalayer(eventAction, eventLabel) {
    if (typeof eventAction === 'undefined' || typeof eventLabel === 'undefined') {
        return;
    }
    dataLayer.push({
        'event': 'GAEvent',
        'eventCategory': 'Media',
        'eventAction': eventAction,
        'eventLabel': addLeadingZero(eventLabel, 2).toString(),
    });
}

/**
 * Fonction qui retourne la chaîne avec les 0 ajoutés devant si nécessaire.
 * @param {string} str
 * @param {int} max
 * @returns {@exp;@exp;@call;addLeadingZerostr|@exp;@call;addLeadingZero}
 */
function addLeadingZero(str, max) {
    str = str.toString();
    return str.length < max ? addLeadingZero("0" + str, max) : str;
}

/**
 * Fonction qui pousse le contenu du datalayer.
 * (devra remplacer la function pushDatalayer ci-dessus)
 *
 * @param {string} event
 * @param {string} eventCategory
 * @param {string} eventAction
 * @param {string} eventLabel
 * @returns {NULL}
 */
function pushDatalayerEvent(event, eventCategory, eventAction, eventLabel, eventValue) {
    if (typeof event === 'undefined' || typeof eventCategory === 'undefined' || typeof eventAction === 'undefined' || typeof eventLabel === 'undefined') {
        return;
    }
    dataLayer.push({
        'event': event,
        'eventCategory': eventCategory,
        'eventAction': eventAction,
        'eventLabel': eventLabel,
        'eventValue': eventValue,
    });
}

/**
 * Fonction qui modifie un cookie
 * @param {int} id
 * @param {string} origin
 * @returns {NULL}
 */
function changeCookieShoppingTools(name, id, origin) {
    var change = 1;
    var shoppingToolsValue = '';
    // On récupère d'abord le cookie
    var shoppingTools = getCookieShoppingTools(name);

    if (shoppingTools != '') {
        var table = shoppingTools.split(",");
        var i = 0;
        if (table.length == 1) {
            table = [table];
        }
        // On cherche si l'id est présent
        while (i < table.length) {
            var tableSplit = table[i].toString().split("=");
            if (tableSplit[0] == id){
                shoppingToolsValue = tableSplit[1];
                break;
            }
            i++;
        }
        // S'il est présent
        if (shoppingToolsValue != '') {
            // s'il est le même, pas de changement
            if (shoppingToolsValue == origin) {
                change = 0;
            }
            else {
                // sinon on le modifie
                table[i] = id + '=' + origin;
            }
        }
        else {
            // il n'est pas présent, on l'ajoute à la fin du tableau
            table.push(id + '=' + origin);
        }
        shoppingTools = table.toString();
    }
    else {
        // le cookie n'existe pas, on le crée
        shoppingTools = id + '=' + origin;
    }

    // S'il y a du changement, on met le cookie à jour
    if (change) {
        document.cookie = name + '=' + shoppingTools + '; expires=; path=/';
    }
}

/**
 * Fonction qui récupère le cookie
 * @param {string} name
 * @returns {string} shoppingTools
 */
function getCookieShoppingTools(name) {
    var name = name + '=';
    var ca = document.cookie.split(';');
    var shoppingTools = '';

    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            shoppingTools = c.substring(name.length,c.length);
        }
    }

    return shoppingTools;
}

/**
 * Fonction qui récupère la valeur du cookie en fonction de l'id
 * @param {string} name
 * @param {int} id
 * @returns {string} shoppingToolsValue
 */
function getCookieShoppingToolsById(name, id) {
    var shoppingToolsValue = '';
    var shoppingTools = getCookieShoppingTools(name);

    if (shoppingTools != '') {
        var table = shoppingTools.split(",");
        var i = 0;
        if (table.length == 1) {
            table = [table];
        }
        while (i < table.length) {
            var tableSplit = table[i].toString().split("=");
            if (tableSplit[0] == id){
                shoppingToolsValue = tableSplit[1];
                break;
            }
            i++;
        }
    }
    return shoppingToolsValue;
}
;
