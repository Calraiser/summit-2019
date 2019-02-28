activate :livereload

activate :external_pipeline,
   name: :webpack,
   command: build? ?  "yarn run build" : "yarn run start",
   source: ".tmp/dist",
   latency: 1

activate :sprockets

set :css_dir,      'assets/stylesheets'
set :js_dir,       'assets/javascript'
set :images_dir,   'assets/images'
set :fonts_dir,    'assets/fonts'

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false


configure :build do
  activate :minify_css
  activate :minify_html, remove_input_attributes: false
  activate :minify_javascript
  activate :gzip
  activate :asset_hash
  activate :relative_assets

  set :relative_links, true
end
