import React from 'react';

import config from "../../../../site.config"

const vendors = config.layout.footer.vendors;

import './footer.css';

const Footer = () => {
    return (
        <>
            <div className={`footer`}>
                <div className={`footer-section footer-section__vendors`}>
                    <h3>Vendors</h3>
                    { vendors.length && vendors.map((vendor, key) =>
                        <div id={`vendor__${vendor.id}`} className={`vendor-details`} key={key}>
                            <h4>{vendor.emoji}&nbsp;{vendor.description}</h4>
                            <a href={vendor.url} target="_blank" rel="noopener noreferrer">{vendor.linkText}</a>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Footer;