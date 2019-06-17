( function( wp ) {
    var MyCustomButton = function( props ) {
        return wp.element.createElement(
            wp.editor.RichTextToolbarButton, {
                icon: 'image-flip-horizontal',
                title: 'Special tag',
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