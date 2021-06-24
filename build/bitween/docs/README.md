# Bitween Suite, the delightful Drupal and React connector

Our model for building up modern websites, focused on users and content,
with the fastest and safest frontend, keeping up flexibility and dynamism
needed on your digital activity and the most delightful connection between both sides.

[](https://www.biko2.com/bitween/#sites-record)

## The most **beautiful** sites, in **record** time and **without giving up** anything

### What is Bitween Suite?

(Delightful connection)

Biko’s answer to the real needs of Jamstack projects, successfully
applied for demanding and complex situations.

A modern content management that allows separating _backend_ and _frontend_,
with a great user experience for managers, gaining speed, positioning,
security and avoiding unnecessary future costs.

## Getting started

Bitween Suite is a mix of different pieces that interact together to achieve
the same UX as of a traditional Drupal system. Mainly, it's a suite of Drupal
modules plus a SSG recipe to make both worlds communicate seamlessly.

### Drupal

A [suite of modules](https://www.drupal.org/project/static_suite) to decouple
Drupal and turn it into a static site, built by a Static Site Generator like
Gatsby or Next.js. It exports data to static files (JSON, XML, etc), runs a
build process on them (Gatsby, Next.js, Eleventy, Hugo, etc), and deploys the
result to any hosting service (AWS S3, Netlify, etc). **It also provides an
instant preview system for Gatsby.**

It includes several modules:

- Static Export: exports Drupal data to static files (JSON, XML, etc) using
  GraphQL, JSON:API, or any other resolver.
- Static Build: it uses a Static Site Generator (Gatsby, Eleventy, Hugo, etc)
  to build a static site
- Static Deploy: deploys the above site to any kind of hosting service (AWS
  S3, Netlify, etc)
- Static Preview: enables previewing content without building the whole site.
  There is also an instant preview system for Gatsby.

This suite is completely extensible, configurable and adaptable to multiple
scenarios, but it's been extensively tested with JSON files, Gatsby and AWS S3.
It allows getting the same features as Gatsby Cloud (previews, fast builds and
incremental builds) but fully integrated into your Drupal installation.

All those features are achieved without using any external service: this suite
of modules is not a wrapper over Gatsby Cloud, but a complete implementation
of their features in a "Drupal way".

This suite of modules is the result of several years of working with decoupled
Drupal and Gatsby, and all you can find here is the response to real needs in
our projects. Most of them are sites with thousands of pages, so expect some
features to be focused on performance and scalability.

Documentation about each module can be found inside each one's folder.

#### Installation

Run `composer require drupal/static_suite`.

Enable the following modules to get a basic working functionality with Gatsby and AWS S3:

##### Export

- static_suite
- static_export
- static_export_data_resolver_graphql
- static_export_output_formatter_json
- static_export_stream_wrapper_local

##### Build

- static_build
- static_builder_gatsby

##### Deploy

- static_deploy
- static_deployer_s3

##### Preview

- static_preview
- static_preview_gatsby_instant

### SSG Recipe

Work in progress. Please refer to the preview documentation to see a glimpse of this recipe.
