import Link from 'next/link';

export default function PlaceholderSection({ title, items = [], links = [] }) {
    return (
        <div className="section-full content-inner bg-pink-light">
            <div className="container">
                {title && (
                    <div className="section-head text-center" style={{ marginBottom: '36px' }}>
                        <h2 className="main-title text-primary">{title}</h2>
                        <div className="dlab-separator"></div>
                    </div>
                )}
                <div className="row">
                    {items.map((item, idx) => {
                        const label = typeof item === 'string' ? item : item.label;
                        const desc = typeof item === 'string' ? null : item.desc;
                        const icon = typeof item === 'string' ? null : item.icon;
                        const href = links[idx] || null;

                        const card = (
                            <div className="placeholder-card">
                                {icon && <div style={{ fontSize: '36px', marginBottom: '12px' }}>{icon}</div>}
                                <h4 className="title">{label}</h4>
                                {desc && <p className="text-muted">{desc}</p>}
                            </div>
                        );

                        return (
                            <div key={idx} className="col-lg-4 col-md-6 col-12 m-b30">
                                {href ? <Link href={href} style={{ textDecoration: 'none', color: 'inherit' }}>{card}</Link> : card}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
