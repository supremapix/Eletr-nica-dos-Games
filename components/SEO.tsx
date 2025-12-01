import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical }) => {
  useEffect(() => {
    document.title = title;
    
    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update Canonical Link
    if (canonical) {
      let linkCanon = document.querySelector('link[rel="canonical"]');
      if (!linkCanon) {
        linkCanon = document.createElement('link');
        linkCanon.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanon);
      }
      linkCanon.setAttribute('href', canonical);
    }
  }, [title, description, canonical]);

  return null;
};

export default SEO;