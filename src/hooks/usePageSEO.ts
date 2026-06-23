import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    ogImage?: string;
    ogType?: 'website' | 'profile' | 'article';
    keywords?: string;
    noIndex?: boolean;
}

const BASE_URL = 'https://www.drvandui.com.br';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-cover.png`;
const SITE_NAME = 'Dr. Vandui — Cardiologista em Santos, Santo André e Vila Mariana';

export function usePageSEO({
    title,
    description,
    canonical,
    ogImage = DEFAULT_OG_IMAGE,
    ogType = 'website',
    keywords,
    noIndex = false,
}: SEOProps) {
    useEffect(() => {
    const hasBrandInTitle = /Dr\.?\s*Vandui/i.test(title);
        const fullTitle = hasBrandInTitle ? title : `${title} | ${SITE_NAME}`;

        // Título
        document.title = fullTitle;

        // Helper para criar/atualizar meta tags
        const setMeta = (selector: string, content: string, attr = 'content') => {
            let el = document.querySelector(selector) as HTMLMetaElement | null;
            if (!el) {
                el = document.createElement('meta');
                const attrName = selector.includes('name=')
                    ? 'name'
                    : selector.includes('property=')
                        ? 'property'
                        : 'name';
                const attrValue = selector.match(/["']([^"']+)["']/)?.[1] ?? '';
                el.setAttribute(attrName, attrValue);
                document.head.appendChild(el);
            }
            el.setAttribute(attr, content);
        };

        const setLink = (rel: string, href: string) => {
            let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
            if (!el) {
                el = document.createElement('link');
                el.rel = rel;
                document.head.appendChild(el);
            }
            el.href = href;
        };

        // Meta básicas
        setMeta('meta[name="description"]', description);
        if (keywords) setMeta('meta[name="keywords"]', keywords);
        setMeta('meta[name="robots"]', noIndex ? 'noindex,nofollow' : 'index,follow');
        setMeta('meta[name="author"]', 'Dr. Vandui da Silva dos Santos');

        // Canonical
        const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
        setLink('canonical', canonicalUrl);

        // Open Graph
        setMeta('meta[property="og:title"]', fullTitle);
        setMeta('meta[property="og:description"]', description);
        setMeta('meta[property="og:type"]', ogType);
        setMeta('meta[property="og:url"]', canonicalUrl);
        setMeta('meta[property="og:image"]', ogImage);
        setMeta('meta[property="og:image:width"]', '1200');
        setMeta('meta[property="og:image:height"]', '630');
        setMeta('meta[property="og:image:alt"]', 'Dr. Vandui — Cardiologista em Santos, Santo André e Vila Mariana');
        setMeta('meta[property="og:site_name"]', 'Dr. Vandui — Cardiologista');
        setMeta('meta[property="og:locale"]', 'pt_BR');

        // Twitter Card
        setMeta('meta[name="twitter:card"]', 'summary_large_image');
        setMeta('meta[name="twitter:title"]', fullTitle);
        setMeta('meta[name="twitter:description"]', description);
        setMeta('meta[name="twitter:image"]', ogImage);

        document.dispatchEvent(new Event('dr-vandui-prerender-ready'));

        return () => {
            // Restaura título padrão ao desmontar (opcional)
        };
    }, [title, description, canonical, ogImage, ogType, keywords, noIndex]);
}
