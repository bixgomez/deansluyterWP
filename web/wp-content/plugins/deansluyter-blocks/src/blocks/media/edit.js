import { __ } from '@wordpress/i18n';
import {
    InspectorControls,
    MediaUpload,
    MediaUploadCheck,
    RichText,
    useBlockProps,
} from '@wordpress/block-editor';
import { Button, PanelBody, TextControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const {
        imageUrl,
        imageAlt,
        title,
        subtitle,
        date,
        description,
        length,
        linkUrl,
        linkText,
    } = attributes;

    const blockProps = useBlockProps({ className: 'media' });

    const onSelectImage = (media) => {
        setAttributes({
            imageId: media?.id ?? 0,
            imageUrl: media?.url ?? '',
            imageAlt: media?.alt ?? '',
        });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Media settings', 'deansluyter-blocks')}>
                    <TextControl
                        label={__('Media link URL', 'deansluyter-blocks')}
                        value={linkUrl}
                        onChange={(nextUrl) => setAttributes({ linkUrl: nextUrl })}
                        placeholder="https://example.com"
                    />
                    <TextControl
                        label={__('Link text', 'deansluyter-blocks')}
                        value={linkText}
                        onChange={(nextLinkText) => setAttributes({ linkText: nextLinkText })}
                        placeholder={__('Read more', 'deansluyter-blocks')}
                    />
                    <TextControl
                        label={__('Date', 'deansluyter-blocks')}
                        value={date}
                        onChange={(nextDate) => setAttributes({ date: nextDate })}
                        placeholder={__('February 20, 2026', 'deansluyter-blocks')}
                    />
                    <TextControl
                        label={__('Length', 'deansluyter-blocks')}
                        value={length}
                        onChange={(nextLength) => setAttributes({ length: nextLength })}
                        placeholder={__('42:15', 'deansluyter-blocks')}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                <div className="media--image">
                    <div className="inner">
                        {imageUrl ? (
                            <img src={imageUrl} alt={imageAlt || ''} className="image" />
                        ) : (
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={onSelectImage}
                                    allowedTypes={['image']}
                                    render={({ open }) => (
                                        <Button variant="secondary" onClick={open}>
                                            {__('Select image', 'deansluyter-blocks')}
                                        </Button>
                                    )}
                                />
                            </MediaUploadCheck>
                        )}
                    </div>
                </div>

                {imageUrl && (
                    <p className="media--image-actions">
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onSelectImage}
                                allowedTypes={['image']}
                                render={({ open }) => (
                                    <Button variant="secondary" onClick={open}>
                                        {__('Replace image', 'deansluyter-blocks')}
                                    </Button>
                                )}
                            />
                        </MediaUploadCheck>
                        <Button
                            variant="tertiary"
                            onClick={() =>
                                setAttributes({ imageId: 0, imageUrl: '', imageAlt: '' })
                            }
                        >
                            {__('Remove image', 'deansluyter-blocks')}
                        </Button>
                    </p>
                )}

                <div className="media--info">
                    <div className="inner">
                        <div className="info-header">
                            <div className="media--title">
                                <RichText
                                    tagName="h3"
                                    value={title}
                                    onChange={(nextTitle) => setAttributes({ title: nextTitle })}
                                    placeholder={__('Media title...', 'deansluyter-blocks')}
                                    allowedFormats={[]}
                                />
                            </div>

                            <div className="media--subtitle">
                                <RichText
                                    tagName="h4"
                                    value={subtitle}
                                    onChange={(nextSubtitle) =>
                                        setAttributes({ subtitle: nextSubtitle })
                                    }
                                    placeholder={__('Media subtitle...', 'deansluyter-blocks')}
                                    allowedFormats={[]}
                                />
                            </div>

                            <div className="media--date">
                                <RichText
                                    tagName="h4"
                                    value={date}
                                    onChange={(nextDate) => setAttributes({ date: nextDate })}
                                    placeholder={__('Media date...', 'deansluyter-blocks')}
                                    allowedFormats={[]}
                                />
                            </div>
                        </div>

                        <div className="info-body">
                            <div className="media--description">
                                <RichText
                                    tagName="div"
                                    value={description}
                                    onChange={(nextDescription) =>
                                        setAttributes({ description: nextDescription })
                                    }
                                    placeholder={__('Media description...', 'deansluyter-blocks')}
                                />
                            </div>

                            <div className="media--length">
                                <RichText
                                    tagName="div"
                                    value={length}
                                    onChange={(nextLength) =>
                                        setAttributes({ length: nextLength })
                                    }
                                    placeholder={__('Length...', 'deansluyter-blocks')}
                                    allowedFormats={[]}
                                />
                            </div>

                            <div className="media--link">
                                <RichText
                                    tagName="span"
                                    value={linkText}
                                    onChange={(nextLinkText) =>
                                        setAttributes({ linkText: nextLinkText })
                                    }
                                    placeholder={__('Link text...', 'deansluyter-blocks')}
                                    allowedFormats={[]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
