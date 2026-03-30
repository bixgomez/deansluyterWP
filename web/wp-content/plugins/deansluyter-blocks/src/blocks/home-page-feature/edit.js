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
        body,
        linkUrl,
        linkText,
    } = attributes;

    const blockProps = useBlockProps({
        className: 'item home-page-feature image-position--first',
    });

    const onSelectImage = (media) => {
        const previewUrl =
            media?.sizes?.['homepage feature mobile']?.url ??
            media?.sizes?.['homepage-feature-mobile']?.url ??
            media?.sizes?.medium_large?.url ??
            media?.sizes?.medium?.url ??
            media?.url ??
            '';

        setAttributes({
            imageId: media?.id ?? 0,
            imageUrl: previewUrl,
            imageAlt: media?.alt ?? media?.alt_text ?? '',
        });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Link', 'deansluyter-blocks')}>
                    <TextControl
                        label={__('Link text', 'deansluyter-blocks')}
                        value={linkText}
                        onChange={(nextLinkText) => setAttributes({ linkText: nextLinkText })}
                        placeholder={__('Learn more', 'deansluyter-blocks')}
                    />
                    <TextControl
                        label={__('URL', 'deansluyter-blocks')}
                        value={linkUrl}
                        onChange={(nextLinkUrl) => setAttributes({ linkUrl: nextLinkUrl })}
                        placeholder="https://example.com"
                    />
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                <div className="home-page-feature--featured-image">
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

                    {imageUrl && (
                        <p className="home-page-feature--image-actions">
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={onSelectImage}
                                    allowedTypes={['image']}
                                    render={({ open }) => (
                                        <Button variant="secondary" size="compact" onClick={open}>
                                            {__('Replace image', 'deansluyter-blocks')}
                                        </Button>
                                    )}
                                />
                            </MediaUploadCheck>
                            <Button
                                variant="secondary"
                                size="compact"
                                onClick={() =>
                                    setAttributes({ imageId: 0, imageUrl: '', imageAlt: '' })
                                }
                            >
                                {__('Remove image', 'deansluyter-blocks')}
                            </Button>
                        </p>
                    )}
                </div>

                <div className="home-page-feature--title">
                    <RichText
                        tagName="h3"
                        value={title}
                        onChange={(nextTitle) => setAttributes({ title: nextTitle })}
                        placeholder={__('Title', 'deansluyter-blocks')}
                        allowedFormats={[]}
                    />

                    <RichText
                        tagName="p"
                        value={subtitle}
                        onChange={(nextSubtitle) => setAttributes({ subtitle: nextSubtitle })}
                        placeholder={__('Subtitle', 'deansluyter-blocks')}
                        allowedFormats={[]}
                        className="home-page-feature--subtitle"
                    />
                </div>

                <div className="home-page-feature--body">
                    <RichText
                        tagName="div"
                        value={body}
                        onChange={(nextBody) => setAttributes({ body: nextBody })}
                        placeholder={__('Body text...', 'deansluyter-blocks')}
                    />
                </div>

                <div className="home-page-feature--link-text">
                    <RichText
                        tagName="span"
                        value={linkText}
                        onChange={(nextLinkText) => setAttributes({ linkText: nextLinkText })}
                        placeholder={__('Link text', 'deansluyter-blocks')}
                        allowedFormats={[]}
                    />
                </div>
            </div>
        </>
    );
}
