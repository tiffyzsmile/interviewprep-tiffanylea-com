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
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      let navItems = [];
      if (allMdx.edges !== undefined && allMdx.edges.length > 0) {
        navItems = allMdx.edges.map((item, index) => {
          // does item exist, and exclude current page
          if (item !== undefined && path !== item.node.fields.slug) {
            // is item part of this section
            if (item.node.fields.slug.startsWith(path)) {
              // remove first '/' then split path into array
              const pathArray = item.node.fields.slug.split(path)[1].split('/');
              if (pathArray.length === 2) {
                // we only want to show on base pages
                return (
                  <li key={index}>
                    <Link to={item.node.fields.slug}>
                      <strong>{item.node.fields.title}</strong>
                    </Link>
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
