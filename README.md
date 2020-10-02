# About interviewprep.tiffanylea.com

## Tech Used

- **Site generation** via [Gatsby](https://www.gatsbyjs.com/)
- **Version control** via Github [interviewprep-tiffanylea-com](https://github.com/tiffyzsmile/interviewprep-tiffanylea-com)
- **Hosting** with AWS Amplify Console
- **Continuous integration** via merge to master
- **AWS region** us-west-2 aka US West (Oregon)
- **AWS profile** none... only uses console no CLI or hosting

## Why it's own site?

Originally I combined all docs in docs.tiffanylea.com but quickly realized I was dealing with 2 completely different use cases.

- Interview Prep
  - detailed docs to refresh before interviews
  - different material set specifically geared towards interviews
  - more technical wording for better communication
- Daily KB (docs)
  - more of a quick reference for daily stuff
  - much broader subject list
  - layman's terms for quick absorption

### Issues

- a lot of needed but slight duplication
  - made maintenance confusing
  - made navigating to find content confusing
  - loosing track of content between quick reference and more detailed versions

Thus this site was born!

## Why a different site generator?

### Docz:

- Pros
  - has a good UI
- Cons
  - was slowish
  - not as streamlined as I needed
  - adding functionality was too time consuming
    - googling both Gatsby and Docz was annoying
    - syntax highlighting
    - 3 tiers of nav

So I went with the underlying tech of Gatsby in hopes to get less issues and easier implementation.

### Gatsby - gatsby-gitbook-starter:

- Cons
  - The UI isn't as nice...
  - responsive implementation needs serious adjustments
  - search has to be setup
  - not a fan of the file structure
- Pros
  - UI is enough as is... I can hold off for now
  - out of the box functionality I need
  - works for now...

# Specific Use Cases

## Codeblocks

The following is a code block with JavaScript language syntax highlighting.

```javascript
import React from 'react';
```

Supports multiple languages.

The following is a code block with diff. Lines with `+` highlighted in green shade indicating an addition. Lines with `-` highlighted in red shade indicating a deletion.

```javascript
- const data = ['1','2'];
+ const data = [1,2];
```

### Live Editing example

```javascript react-live=true
<button className={'btn btn-default'}>Change my text</button>
```
