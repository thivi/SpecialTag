<?php
/**
 * Plugin Name: Special Tag
 */
 
function my_custom_format_script_register() {
    wp_register_script(
        'special-tag-js',
        plugins_url( 'specialtag.js', __FILE__ ),
        array( 'wp-rich-text' )
    );
}
add_action( 'init', 'my_custom_format_script_register' );
 
function my_custom_format_enqueue_assets_editor() {
    wp_enqueue_script( 'special-tag-js' );
    wp_enqueue_style("special-tag-css","specialtag.css");
}
add_action( 'enqueue_block_editor_assets', 'my_custom_format_enqueue_assets_editor' );

function st_enqueue_script(){
    wp_enqueue_style("special-tag-css",plugins_url("SpecialTag/specialtag.css"),array(),'1.0.0','all');
}
add_action('wp_enqueue_scripts','st_enqueue_script');