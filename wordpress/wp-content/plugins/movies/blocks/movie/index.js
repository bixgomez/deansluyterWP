( function( wp ) {
	/**
	 * Registers a new block provided a unique name and an object defining its behavior.
	 * @see https://github.com/WordPress/gutenberg/tree/master/blocks#api
	 */
	var registerBlockType = wp.blocks.registerBlockType;
	/**
	 * Returns a new element of given type. Element is an abstraction layer atop React.
	 * @see https://github.com/WordPress/gutenberg/tree/master/element#element
	 */
	var el = wp.element.createElement;
	/**
	 * Retrieves the translation of text.
	 * @see https://github.com/WordPress/gutenberg/tree/master/i18n#api
	 */
	var __ = wp.i18n.__;

	/**
	 * Every block starts by registering a new block type definition.
	 * @see https://wordpress.org/gutenberg/handbook/block-api/
	 */
	registerBlockType( 'movies/movie', {
		/**
		 * This is the display title for your block, which can be translated with `i18n` functions.
		 * The block inserter will show this name.
		 */
		title: __( 'My movie block', 'movies' ),
    icon: 'heart',

		/**
		 * Blocks are grouped into categories to help users browse and discover them.
		 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
		 */
		category: 'common',

		/**
		 * Optional block extended support features.
		 */
		supports: {
			// Removes support for an HTML mode.
			html: false,
		},

    attributes: {
      title: {
        source: 'text',
        selector: '.movie__title'
      },
      body: {
        type: 'array',
        source: 'children',
        selector: '.movie__body'
      },
      imageAlt: {
        attribute: 'alt',
        selector: '.movie__image'
      },
      imageUrl: {
        attribute: 'src',
        selector: '.movie__image'
      }
    },

		/**
		 * The edit function describes the structure of your block in the context of the editor.
		 * This represents what the editor will render when the block is used.
		 * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#edit
		 *
		 * @param {Object} [props] Properties passed from the editor.
		 * @return {Element}       Element to render.
		 */
    edit({ attributes, className, setAttributes }) {

      const getImageButton = (openEvent) => {
        if(attributes.imageUrl) {
          return (
              <img
                  src={ attributes.imageUrl }
                  onClick={ openEvent }
                  className="image"
              />
          );
        }
        else {
          return (
              <div className="button-container">
                <Button
                    onClick={ openEvent }
                    className="button button-large"
                >
                  Pick an image
                </Button>
              </div>
          );
        }
      };

      return (
          <div className="container">
            <MediaUpload
                onSelect={ media => { setAttributes({ imageAlt: media.alt, imageUrl: media.url }); } }
                type="image"
                value={ attributes.imageID }
                render={ ({ open }) => getImageButton(open) }
            />
            <PlainText
                onChange={ content => setAttributes({ title: content }) }
                value={ attributes.title }
                placeholder="Your movie title"
                className="heading"
            />
            <RichText
                onChange={ content => setAttributes({ body: content }) }
                value={ attributes.body }
                multiline="p"
                placeholder="Your movie text"
            />
          </div>
      );

    },

		/**
		 * The save function defines the way in which the different attributes should be combined
		 * into the final markup, which is then serialized by Gutenberg into `post_content`.
		 * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save
		 *
		 * @return {Element}       Element to render.
		 */
    save({ attributes }) {

      const movieImage = (src, alt) => {
        if(!src) return null;

        if(alt) {
          return (
              <img
                  className="movie__image"
                  src={ src }
                  alt={ alt }
              />
          );
        }

        // No alt set, so let's hide it from screen readers
        return (
            <img
                className="movie__image"
                src={ src }
                alt=""
                aria-hidden="true"
            />
        );
      };

      return (
          <div className="movie">
            { movieImage(attributes.imageUrl, attributes.imageAlt) }
            <div className="movie__content">
              <h3 className="movie__title">{ attributes.title }</h3>
              <div className="movie__body">
                { attributes.body }
              </div>
            </div>
          </div>
      );
    }

	} );
} )(
	window.wp
);
