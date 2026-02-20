import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
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

    const blockProps = useBlockProps.save({ className: 'media' });

    const imageElement = imageUrl ? (
        <img src={imageUrl} alt={imageAlt || ''} className="image" />
    ) : null;

    return (
        <div {...blockProps}>
            {imageElement && (
                <div className="media--image">
                    <div className="inner">
                        {linkUrl ? (
                            <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                                {imageElement}
                            </a>
                        ) : (
                            imageElement
                        )}
                    </div>
                </div>
            )}

            <div className="media--info">
                <div className="inner">
                    <div className="info-header">
                        {title && (
                            <div className="media--title">
                                <h3>
                                    {linkUrl ? (
                                        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                                            <RichText.Content tagName="span" value={title} />
                                        </a>
                                    ) : (
                                        <RichText.Content tagName="span" value={title} />
                                    )}
                                </h3>
                            </div>
                        )}

                        {subtitle && (
                            <div className="media--subtitle">
                                <RichText.Content tagName="h4" value={subtitle} />
                            </div>
                        )}

                        {date && (
                            <div className="media--date">
                                <RichText.Content tagName="h4" value={date} />
                            </div>
                        )}
                    </div>

                    <div className="info-body">
                        {description && (
                            <div className="media--description">
                                <RichText.Content tagName="div" value={description} />
                            </div>
                        )}

                        {length && (
                            <div className="media--length">
                                <RichText.Content tagName="div" value={length} />
                            </div>
                        )}

                        {linkUrl && linkText && (
                            <div className="media--link">
                                <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                                    <RichText.Content tagName="span" value={linkText} />
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
