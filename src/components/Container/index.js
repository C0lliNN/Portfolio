import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const Container = (props) => {
  const { children } = props;
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <React.Fragment>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Raphael Collin Developer Portfolio' },
              {
                name: 'keywords',
                content: 'Raphael Collin, Developer, Software Developer, Web Developer'
              }
            ]}
          />
          <div className={'main-body'}>{children}</div>
        </React.Fragment>
      )}
    />
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired
};

export default Container;
