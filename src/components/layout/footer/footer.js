import React from 'react';

import config from "../../../../site.config"

const albumMailto = process.env.ALBUM_MAILTO || '';
const bottomText = config.text.home.footer.bottom;
const contactText = config.text.home.footer.contact;
const githubUrl = config.layout.footer.github.url;
const vendors = config.layout.footer.vendors;

import './footer.css';

const Footer = () => {
    return (
        <>
            <div className={`footer`}>
                <div className={`footer-section footer-section__links`}>
                    <h3>Thank You!</h3>
                    <h4>{contactText.label}</h4>
                    <span>💌&nbsp;<a
                        href={`mailto:${albumMailto}`}>{contactText.linkText}</a>&nbsp;{contactText.linkFollowup}</span>
                    <h4>Code</h4>
                    <span>🖥️ Wanna read my code? Check it out on my&nbsp;<a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={githubUrl}>
                            GitHub
                    </a>.</span>
                </div>
                <div className={`footer-section footer-section__vendors`}>
                    <h3>Vendors</h3>
                    {vendors.length && vendors.map((vendor, key) =>
                        <div id={`vendor__${vendor.id}`} className={`vendor-details`} key={key}>
                            <h4>{vendor.emoji}&nbsp;{vendor.description}</h4>
                            <a href={vendor.url} target="_blank" rel="noopener noreferrer">{vendor.linkText}</a>
                        </div>
                    )}
                </div>
                <div className={`footer-section footer-section__bottom footer-section__wide text-centered`}>
                    {bottomText.length && bottomText.map((text, index) =>
                        <div className={`text-small text-centered`} key={index}>{text}</div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Footer;