<?php

/**
 * This is an example module with only the basic
 * setup necessary to get it working.
 *
 * @class TeaserModule
 */
class TeaserModule extends FLBuilderModule {

    /** 
     * Constructor function for the module. You must pass the
     * name, description, dir and url in an array to the parent class.
     *
     * @method __construct
     */  
    public function __construct()
    {
        parent::__construct(array(
            'name'          => __('Teaser', 'fl-builder'),
            'description'   => __('Layout to be used for content teasers.', 'fl-builder'),
            'category'		=> __('Custom Modules', 'fl-builder'),
            'dir'           => CUSTOM_BB_MODULES_DIR . 'modules/teaser/',
            'url'           => CUSTOM_BB_MODULES_URL . 'modules/teaser/',
            'icon'          => 'format-image.svg',
            'editor_export' => true, // Defaults to true and can be omitted.
            'enabled'       => true, // Defaults to true and can be omitted.
        ));
    }
}

/**
 * Register the module and its form settings.
 */
FLBuilder::register_module('TeaserModule', array(
  'content-tab'      => array(
    'title'         => __( 'Content', 'fl-builder' ),
    'sections'      => array(
      'section--image'  => array(
        'title'            => __( 'Image', 'fl-builder' ),
        'fields'        => array(
          'image' => array(
            'type'          => 'photo',
            'label'         => __('Image Field', 'fl-builder'),
            'show_remove'   => false,
          )
        )
      ),
      'section--text'  => array(
        'title'            => __( 'Text', 'fl-builder' ),
        'fields'        => array(
          'title'     => array(
            'type'          => 'text',
            'label'         => __( 'Title', 'fl-builder' ),
          ),
          'subtitle'     => array(
            'type'          => 'text',
            'label'         => __( 'Subtitle', 'fl-builder' ),
          ),
          'body' => array(
            'type'          => 'editor',
            'media_buttons' => false,
            'wpautop'       => true,
            'label'         => __( 'Body Text', 'fl-builder' ),
            'default'       => ''
          )
        )
      ),
      'section--link' => array(
        'title'       => __( 'Link', 'fl-builder' ),
        'fields'      => array(
          'link_text' => array(
            'type'    => 'text',
            'label'   => __( 'Link Text', 'fl-builder' ),
          ),
          'link_url' => array(
            'type'    => 'link',
            'label'   => __( 'URL', 'fl-builder' ),
          )
        )
      )
    )
  )
));
