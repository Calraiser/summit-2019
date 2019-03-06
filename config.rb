require "lib/webpack_asset_helpers"

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

set :css_dir,     'assets/stylesheets'
set :fonts_dir,   'assets/fonts'
set :images_dir,  'assets/images'
set :js_dir,      'assets/javascripts'
set :data_dir,    'data'

activate :directory_indexes

configure :build do
  activate :gzip
  activate :asset_hash
  activate :relative_assets

  set :relative_links, true
end

helpers WebpackAssetHelper
