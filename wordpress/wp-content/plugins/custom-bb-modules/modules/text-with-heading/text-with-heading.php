<?php

/**
 * This is an example module with only the basic
 * setup necessary to get it working.
 *
 * @class TextWithHeadingModule
 */
class TextWithHeadingModule extends FLBuilderModule {

    /** 
     * Constructor function for the module. You must pass the
     * name, description, dir and url in an array to the parent class.
     *
     * @method __construct
     */  
    public function __construct()
    {
        parent::__construct(array(
            'name'          => __('Text with Heading', 'fl-builder'),
            'description'   => __('Layout to be used for text with heading.', 'fl-builder'),
            'category'		=> __('Custom Modules', 'fl-builder'),
            'dir'           => CUSTOM_BB_MODULES_DIR . 'modules/text-with-heading/',
            'url'           => CUSTOM_BB_MODULES_URL . 'modules/text-with-heading/',
            'icon'          => 'format-image.svg',
            'editor_export' => true, // Defaults to true and can be omitted.
            'enabled'       => true, // Defaults to true and can be omitted.
        ));
    }
}

/**
 * Register the module and its form settings.
 */
FLBuilder::register_module('TextWithHeadingModule', array(
  'content-tab'          => array(
    'title'              => __( 'Content', 'fl-builder' ),
    'sections'           => array(
      'section--content' => array(
        'title'          => __( 'Content', 'fl-builder' ),
        'fields'         => array(
          'title'        => array(
            'type'       => 'text',
            'label'      => __( 'Title', 'fl-builder' ),
          ),
          'subtitle'     => array(
            'type'       => 'text',
            'label'      => __( 'Subtitle', 'fl-builder' ),
          ),
          'body' => array(
            'type'          => 'editor',
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
          )
        )
      )
    )
  )
));
