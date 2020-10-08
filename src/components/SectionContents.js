import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

const SectionContents = ({ path }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx(sort: { fields: fields___slug }) {
          edges {
            node {
              fields {
                title
                slug
              }
              frontmatter {
                metaDescription
              }
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      let navItems = [];
      const isIndex = path === '/';
      if (allMdx.edges !== undefined && allMdx.edges.length > 0) {
        navItems = allMdx.edges.map((item, index) => {
          // does item exist, and exclude current page
          if (item !== undefined && path !== item.node.fields.slug) {
            // is item part of this section
            if (item.node.fields.slug.startsWith(path)) {
              // remove first matching part of url, then split it into paths (levels)
              const pathArray = item.node.fields.slug.slice(path.length + 1).split('/');
              if (pathArray.length === 1) {
                // we only want to show immediate children
                return (
                  <li key={index}>
                    <Link to={item.node.fields.slug}>
                      <strong>{item.node.fields.title}</strong>
                    </Link>
                    {isIndex && <p>{item.node.frontmatter.metaDescription}</p>}
                  </li>
                );
              }
            }
          }
          return false;
        });
      }

      if (navItems && navItems.length) {
        return <ul>{navItems}</ul>;
      } else {
        return false;
      }
    }}
  />
);

export default SectionContents;
