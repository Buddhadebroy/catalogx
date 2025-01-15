import { __ } from '@wordpress/i18n';

export default [
    {
        id: 'catalog',
        name: __("Catalog Showcase", "catalogx"),
        desc: __("Ideal for showcasing products by hiding prices, disabling purchases, and restricting cart/checkout access.", "catalogx"),
        icon: 'adminLib-catalog',
        doc_link: 'https://catalogx.com/docs/catalog/',
        settings_link: appLocalizer.site_url,
        pro_module: true,
    },
    {
        id: 'enquiry',
        name: __("Enquiry & Communication", "catalogx"),
        desc: __("<span class='highlight'>Free:</span> Add enquiry button for single product email enquiries to admin.<br><br> <span class='highlight'>Pro:</span> Full messaging hub with two-way communication, multi-product enquiries, and centralized management.", "catalogx"),
        icon: 'adminLib-inquiry',
        doc_link: 'https://catalogx.com/docs/enquiry-communication/',
        settings_link: appLocalizer.site_url,
        pro_module: false
    },
    {
        id: 'quote',
        name: __("Quotation", "catalogx"),
        desc: __("<span class='highlight'>Free:</span> Add quotation button for customers to request product quotes via email.<br><br> <span class='highlight'>Pro:</span> Manage quotations with dedicated list views, generate and monitor quotes from admin panel, offer PDF downloads, and set expiry dates.", "catalogx"),
        icon: 'adminLib-price-quote-icon',
        doc_link: 'https://catalogx.com/docs/quotation/',
        settings_link: appLocalizer.site_url,
        pro_module: false
    },
    {
        id: 'wholesale',
        name: __("Wholesale Pricing", "catalogx"),
        desc: __("Custom wholesale registration forms builder, admin approval, wholesale order lists, and coupon restrictions for wholesale users."),
        icon: 'adminLib-warehousing-icon',
        doc_link: 'https://catalogx.com/docs/wholesale-pricing/',
        settings_link: appLocalizer.wholesale_settings_url,
        pro_module: true
    },
    {
        id: 'rules',
        name: __("Dynamic Pricing Rules", "catalogx"),
        desc: __("You can set up various rules to modify the prices of different categories and products in bulk, targeting specific customers and user roles."),
        icon: 'adminLib-dynamic-pricing',
        doc_link: 'https://catalogx.com/docs/dynamic-pricing-rules/',
        settings_link: appLocalizer.site_url,
        pro_module: true
    },
]