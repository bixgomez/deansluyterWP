( function( wp, blocks, editor, components, i18n, element ) {
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
	var registerBlockType = wp.blocks.registerBlockType
	var RichText = wp.editor.RichText
	var BlockControls = wp.editor.BlockControls
	var AlignmentToolbar = wp.editor.AlignmentToolbar
	var MediaUpload = wp.editor.MediaUpload
	var InspectorControls = wp.editor.InspectorControls
	var TextControl = components.TextControl
	
	
	/**
	 * Retrieves the translation of text.
	 * @see https://github.com/WordPress/gutenberg/tree/master/i18n#api
	 */
	var __ = wp.i18n.__;

	/**
	 * Every block starts by registering a new block type definition.
	 * @see https://wordpress.org/gutenberg/handbook/block-api/
	 */
	registerBlockType( 'plants/plant-block', {
		/**
		 * This is the display title for your block, which can be translated with `i18n` functions.
		 * The block inserter will show this name.
		 */
		title: __( 'Plant', 'plants' ),		

		/**
		 * Blocks are grouped into categories to help users browse and discover them.
		 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
		 */
		category: 'widgets',

		icon: 'tag',

		/**
		 * Optional block extended support features.
		 */
		supports: {
			// Removes support for an HTML mode.
			html: false,
		},
		attributes: {
			latinName: {
				type: 'array',
				source: 'children',
				selector: 'h2',
			},
			details: {
				type: 'array',
				source: 'children',
				selector: '.details'
			  },
			description: {
				type: 'array',
				source: 'children',
				selector: 'p'
			  },
			mediaID: {
				type: 'number'
			  },
			mediaURL: {
				type: 'string',
				source: 'attribute',
				selector: 'img',
				attribute: 'src'
			  },
			mediaCaption: {
				type: 'string',
				source: 'attribute',
				src: 'caption',
			},
			alignment: {
				type: 'string',
				default: 'left'
			  },
		},
		/**
		 * The edit function describes the structure of your block in the context of the editor.
		 * This represents what the editor will render when the block is used.
		 * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#edit
		 *
		 * @param {Object} [props] Properties passed from the editor.
		 * @return {Element}       Element to render.
		 */
		edit: function( props ) {
			var attributes = props.attributes
			var alignment = props.attributes.alignment
			
			var onSelectImage = function (media) {
				return props.setAttributes({
				  mediaURL: media.url,
				  mediaID: media.id,
				  caption: media.caption
				})
			  }

			function onChangeAlignment (newAlignment) {
			props.setAttributes({ alignment: newAlignment })
			}
		
			return [
				el(BlockControls, { key: 'controls' }, // Display controls when the block is clicked on.
					el('div', { className: 'components-toolbar' },	
						el(MediaUpload, {
						onSelect: onSelectImage,
						type: 'image',
						render: function (obj) {
						  return el(components.Button, {
							className: 'components-icon-button components-toolbar__control',
							onClick: obj.open
						  },
						  // Add Dashicon for media upload button.
						  el('svg', { className: 'dashicon dashicons-edit', width: '20', height: '20' },
							el('path', { d: 'M2.25 1h15.5c.69 0 1.25.56 1.25 1.25v15.5c0 .69-.56 1.25-1.25 1.25H2.25C1.56 19 1 18.44 1 17.75V2.25C1 1.56 1.56 1 2.25 1zM17 17V3H3v14h14zM10 6c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm3 5s0-6 3-6v10c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V8c2 0 3 4 3 4s1-3 3-3 3 2 3 2z' })
						  ))
						}
					  })
					),
					// Display alignment toolbar within block controls.
					el(AlignmentToolbar, {
					  value: alignment,
					  onChange: onChangeAlignment
					})
				),	
				el('div', { className: 'wp-block-columns has-2-columns' },
				el('div', { className: 'wp-block-column' },
				//el('figure', { className: 'wp-block-image' }, 
					el('figure', {
					className: attributes.mediaID ? 'wp-block-image image-active' : 'wp-block-image image-inactive',
					style: attributes.mediaID ? { backgroundImage: 'url(' + attributes.mediaURL + ')' } : {}
				  },
				 
			
					el(MediaUpload, {
						onSelect: onSelectImage,
						type: 'image',
						value: attributes.mediaID,
						render: function (obj) {
						 	return el(components.Button, {
								className: attributes.mediaID ? 'image-button' : 'button button-large',
								onClick: obj.open
							},
							!attributes.mediaID ? i18n.__('Upload Image') : el('img', { src: attributes.mediaURL })
							)
						}
					})
				  ),
				  el( 'figcaption', {}, i18n.__( attributes.caption ) ),
				),				
				el('div', { className: 'wp-block-column plant-content', style: { textAlign: alignment } },
					el(RichText, {
						key: 'editable',
						tagName: 'p',
						placeholder: i18n.__('Write a description...'),
						keepPlaceholderOnFocus: true,
						value: attributes.description,
						onChange: function (newDescription) {
							props.setAttributes({ description: newDescription })
						}
					})					
				)	
				)	
			]				
		},

		/**
		 * The save function defines the way in which the different attributes should be combined
		 * into the final markup, which is then serialized by Gutenberg into `post_content`.
		 * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save
		 *
		 * @return {Element}       Element to render.
		 */
		save: function(props) {
			var attributes = props.attributes;
			return (
				el('div', { className: 'wp-block-columns has-2-columns' },  
				el('div', { className: 'wp-block-column' },  
				//el('figure', { className: 'wp-block-image' }, 
				el('figure', { className: 'wp-block-image', style: { backgroundImage: 'url(' + attributes.mediaURL + ')' } },
						el('img', { src: attributes.mediaURL })
					  ),
				 el( 'figcaption', {}, i18n.__( attributes.caption ) ),	
				),
														
					el('div', { className: 'wp-block-column plant-content', style: { textAlign: attributes.alignment } },
					  el(RichText.Content, {
						tagName: 'h2',
						value: attributes.latinName
					  }),
					  el( 'h3', {}, i18n.__( 'Details: ' ) ),
					  el(RichText.Content, {
						tagName: 'ul',
						className: 'details',
						value: attributes.details
					  }),
					  el( 'h3', {}, i18n.__( 'Description: ' ) ),
					  el(RichText.Content, {
						tagName: 'p',
						value: attributes.description
					  }),
					)
				)
			)	
		}
	}); 
})(
	window.wp,	
	window.wp.blocks,
	window.wp.editor,
	window.wp.components,
	window.wp.i18n,
	window.wp.element
);
