<?php

/**
 * This is an example module with only the basic
 * setup necessary to get it working.
 *
 * @class BiglinkModule
 */
class BiglinkModule extends FLBuilderModule {

    /** 
     * Constructor function for the module. You must pass the
     * name, description, dir and url in an array to the parent class.
     *
     * @method __construct
     */  
    public function __construct()
    {
        parent::__construct(array(
            'name'          => __('Big Link', 'fl-builder'),
            'description'   => __('Layout to be used for big links.', 'fl-builder'),
            'category'		=> __('Custom Modules', 'fl-builder'),
            'dir'           => CUSTOM_BB_MODULES_DIR . 'modules/biglink/',
            'url'           => CUSTOM_BB_MODULES_URL . 'modules/biglink/',
            'icon'          => 'format-image.svg',
            'editor_export' => true, // Defaults to true and can be omitted.
            'enabled'       => true, // Defaults to true and can be omitted.
        ));
    }
}

/**
 * Register the module and its form settings.
 */
FLBuilder::register_module('BiglinkModule', array(
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
          'link_text'    => array(
            'type'       => 'text',
            'label'      => __( 'Link Text', 'fl-builder' ),
          ),
          'link_url'     => array(
            'type'       => 'link',
            'label'      => __( 'URL', 'fl-builder' ),
          ),
          'body' => array(
            'type'       => 'textarea',
            'label'      => __( 'Body Text (under link)', 'fl-builder' ),
            'default'    => '',
            'rows'       => '6'
          )
        )
      )
    )
  )
));
