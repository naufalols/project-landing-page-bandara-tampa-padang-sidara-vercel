// Centralized link list for index.html
// Add keys here to control all anchors with `data-link-key` attribute.
const LINKS = {
    // internal anchors
    'hero': '#hero',
    'fast-access': '#fast-access',
    'data-fasilitas': '#data-fasilitas',
    'tentang': '#tentang',
    'organisasi': '#organisasi',
    'contact': '#contact',

    // resources / files
    'kk-transportation': 'kk-transportation.png',

    // external
    'maps-app': 'https://maps.app.goo.gl/vgpnQg19zhia3GXJA',
    'instagram': 'https://instagram.com/bandara_mamuju',
    'tiktok': '#',

    // email
    'email': 'mailto:bandaratampapadangmamuju@gmail.com',

    // convenience aliases used in the page
    'lihat-selengkapnya': '#data-fasilitas',
    'lihat-regulasi': '#tentang',
    'lihat-fasilitas': '#data-fasilitas',
    'akses-dokumen': '#tentang',
    'lihat-personel': '#organisasi',
    'unduh-data': '#fast-access'
};

// Optional metadata per key (target, rel)
const LINK_META = {
    'maps-app': {
        target: '_blank',
        rel: 'noopener'
    },
    'instagram': {
        target: '_blank',
        rel: 'noopener'
    },
    'kk-transportation': {
        target: '_blank',
        rel: 'noopener'
    },
    'email': {
        target: '_self'
    }
};

function applyLinks() {
    document.querySelectorAll('a[data-link-key]').forEach(a => {
        const key = a.getAttribute('data-link-key');
        const url = LINKS.hasOwnProperty(key) ? LINKS[key] : null;
        if (url) {
            a.setAttribute('href', url);
            const meta = LINK_META[key];
            if (meta && meta.target) a.setAttribute('target', meta.target);
            if (meta && meta.rel) a.setAttribute('rel', meta.rel);
        } else {
            // if mapping not found, keep existing href or set to '#'
            if (!a.getAttribute('href')) a.setAttribute('href', '#');
        }
    });
}

// Run immediately — this file should be included after the DOM anchors are present
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyLinks);
} else {
    applyLinks();
}