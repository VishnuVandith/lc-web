export default function SectionBlock({ title, subtitle, children, bg = '' }) {
    return (
        <div className={`section-full content-inner ${bg}`}>
            <div className="container">
                {(title || subtitle) && (
                    <div className="section-head text-center" style={{ marginBottom: '36px' }}>
                        {title && <h2 className="main-title text-primary">{title}</h2>}
                        {subtitle && <h3 className="title">{subtitle}</h3>}
                        <div className="dlab-separator"></div>
                    </div>
                )}
                {children}
            </div>
        </div>
    );
}
