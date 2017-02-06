const quantityTemplate = `<div class="{{data.classes.product.quantity}} {{data.quantityClass}}">
            {{#data.contents.quantityDecrement}}
              <button class="{{data.classes.product.quantityButton}} {{data.classes.product.quantityDecrement}}" type="button"><span>-</span><span class="visuallyhidden">Decrement</span></button>
            {{/data.contents.quantityDecrement}}
            {{#data.contents.quantityInput}}
              <input class="{{data.classes.product.quantityInput}}" type="number" min="0" aria-label="Quantity" value="{{data.selectedQuantity}}">
            {{/data.contents.quantityInput}}
            {{#data.contents.quantityIncrement}}
              <button class="{{data.classes.product.quantityButton}} {{data.classes.product.quantityIncrement}}" type="button"><span>+</span><span class="visuallyhidden">Increment</span></button>
            {{/data.contents.quantityIncrement}}
           </div>`;
const buttonTemplate = '<div class="{{data.classes.product.buttonWrapper}}"><button {{#data.buttonDisabled}}disabled{{/data.buttonDisabled}} class="{{data.classes.product.button}} {{data.buttonClass}}">{{data.buttonText}}</button></div>';

const productTemplate = {
  img: '<div class="{{data.classes.product.imgWrapper}}"><img class="{{data.classes.product.img}}" src="{{data.currentImage.src}}" /></div>',
  imgWithCarousel: `<div class="{{data.classes.product.imgWrapper}}">
                      <div class="main-image-wrapper">
                        <button type="button" class="carousel-button carousel-button--previous">L</button>
                        <img class="{{data.classes.product.img}}" src="{{data.currentImage.src}}" />
                        <button type="button" class="carousel-button carousel-button--next">R</button>
                      </div>
                      <div class="{{data.classes.product.carousel}}">
                        {{#data.carouselImages}}
                        <div class="{{data.classes.product.carouselItem}} {{#isSelected}} {{data.classes.product.carouselItemSelected}} {{/isSelected}}" data-image-id="{{id}}" style="background-image: url({{src}})">
                        {{isSelected}}
                        </div>
                        {{/data.carouselImages}}
                      </div>
                    </div>`,
  title: '<h1 class="{{data.classes.product.title}}">{{data.title}}</h1>',
  variantTitle: '{{#data.hasVariants}}<h2 class="{{data.classes.product.variantTitle}}">{{data.selectedVariant.title}}</h2>{{/data.hasVariants}}',
  options: '{{#data.hasVariants}}<div class="{{data.classes.product.options}}">{{{data.optionsHtml}}}</div>{{/data.hasVariants}}',
  price: `<div class="{{data.classes.product.prices}}">
            {{#data.selectedVariant}}
            <span class="{{data.classes.product.price}} {{data.priceClass}}">{{data.formattedPrice}}</span>
            {{#data.selectedVariant.compareAtPrice}}<span class="{{data.classes.product.compareAt}}">{{data.formattedCompareAtPrice}}</span>{{/data.selectedVariant.compareAtPrice}}
            {{/data.selectedVariant}}
          </div>`,
  description: '<div class="{{data.classes.product.description}}">{{{data.description}}}</div>',
  button: buttonTemplate,
  quantity: quantityTemplate,
  buttonWithQuantity: `<div class="{{data.classes.product.buttonWithQuantity}}">${quantityTemplate}${buttonTemplate}</div>`,
};

export default productTemplate;
