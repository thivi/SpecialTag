( function( wp ) {
    var MyCustomButton = function( props ) {
        return wp.element.createElement(
            wp.editor.RichTextToolbarButton, {
                icon: 'editor-code',
                title: 'Special Tag',
                onClick: function() {
                    props.onChange( wp.richText.toggleFormat(
                        props.value,
                        { type: 'special-tag/output' }
                    ) );
                },
                isActive: props.isActive,
            }
        );
    }
    wp.richText.registerFormatType(
        'special-tag/output', {
            title: 'Special Tag',
            tagName: 'span',
            className: 'special-tag',
            edit: MyCustomButton,
        }
    );
} )( window.wp );