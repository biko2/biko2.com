# Bitween Suite, the delightful Drupal and React connector

Nuestro modelo para construir webs modernas, enfocadas en el usuario y
el contenido, con el frontend más rápido y seguro, manteniendo la
flexibilidad y el dinamismo que requiere tu actividad digital y la más
deliciosa conexión entre ambas piezas.

[](https://www.biko2.com/bitween/#sites-record)

## Sites más **bellos**, en tiempo **récord** y **sin renunciar** a nada

### ¿Qué es Bitween Suite?

(Delightful connection)

La respuesta de Biko a las necesidades reales de proyectos Jamstack,
aplicadas con éxito en situaciones exigentes y complejas.

Una gestión de contenidos moderna que permite separar el _backend_ del
_frontend_ con una gran experiencia de usuario para los gestores,
ganando en rapidez, posicionamiento, seguridad y evitando innecesarios
costes futuros.

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