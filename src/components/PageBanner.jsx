import Link from 'next/link';

export default function PageBanner({ title, subtitle, breadcrumbs = [] }) {
    return (
        <div
            className="dlab-bnr-inr overlay-black-light"
            style={{ backgroundImage: 'url(/images/banner/bnr1.jpg)', backgroundPosition: 'bottom right' }}
        >
            <div className="container">
                <div className="dlab-bnr-inr-entry">
                    <h1 className="text-white">{title}</h1>
                    {subtitle && <p className="sub-title">{subtitle}</p>}
                    <nav aria-label="breadcrumb" className="breadcrumb-row">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            {breadcrumbs.map((crumb, idx) => (
                                <li
                                    key={idx}
                                    className={`breadcrumb-item${idx === breadcrumbs.length - 1 ? ' active' : ''}`}
                                    aria-current={idx === breadcrumbs.length - 1 ? 'page' : undefined}
                                >
                                    {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : crumb.label}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
