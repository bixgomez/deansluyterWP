<?php

/**
 * This is an example module with only the basic
 * setup necessary to get it working.
 *
 * @class ImageWithTextModule
 */
class ImageWithTextModule extends FLBuilderModule {

    /** 
     * Constructor function for the module. You must pass the
     * name, description, dir and url in an array to the parent class.
     *
     * @method __construct
     */  
    public function __construct()
    {
        parent::__construct(array(
            'name'          => __('Image with Text', 'fl-builder'),
            'description'   => __('An basic example for coding new modules.', 'fl-builder'),
            'category'		=> __('Custom Modules', 'fl-builder'),
            'dir'           => CUSTOM_BB_MODULES_DIR . 'modules/image-with-text/',
            'url'           => CUSTOM_BB_MODULES_URL . 'modules/image-with-text/',
            'icon'          => 'format-image.svg',
            'editor_export' => true, // Defaults to true and can be omitted.
            'enabled'       => true, // Defaults to true and can be omitted.
        ));
    }
}

/**
 * Register the module and its form settings.
 */
FLBuilder::register_module('ImageWithTextModule', array(
  'content-tab'      => array(
    'title'         => __( 'Content', 'fl-builder' ),
    'sections'      => array(
      'section--image'  => array(
        'title'            => __( 'Image', 'fl-builder' ),
        'fields'        => array(
          'image_text_config'   => array(
            'type'       => 'button-group',
            'label'      => 'Image/Text Config',
            'default'    => 'image_above',
            'options'    => array(
              'image_above'    => 'Image above text',
              'image_below'    => 'Image below text',
              'image_left'      => 'Image to the left',
              'image_right'      => 'Image to the right'
            ),
          ),
          'image' => array(
            'type'          => 'photo',
            'label'         => __('Photo Field', 'fl-builder'),
            'show_remove'   => false,
          )
        )
      ),
      'section--text'  => array(
        'title'            => __( 'Text', 'fl-builder' ),
        'fields'        => array(
          'title'     => array(
            'type'    => 'text',
            'label'   => __( 'Title', 'fl-builder' ),
          ),
          'subtitle'     => array(
            'type'       => 'text',
            'label'      => __( 'Subtitle', 'fl-builder' ),
          ),
          'body' => array(
            'type'       => 'editor',
            'media_buttons' => false,
            'wpautop'       => true,
            'label'      => __( 'Body Text', 'fl-builder' ),
            'default'    => ''
          ),
          'link_text'    => array(
            'type'       => 'text',
            'label'      => __( 'Link Text (under body text)', 'fl-builder' ),
          ),
          'link_url'     => array(
            'type'       => 'link',
            'label'      => __( 'URL', 'fl-builder' ),
          ),
        )
      )
    )
  )
));
