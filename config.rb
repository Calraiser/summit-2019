require "lib/webpack_asset_helpers"

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

set :css_dir,     'assets/stylesheets'
set :fonts_dir,   'assets/fonts'
set :images_dir,  'assets/images'
set :js_dir,      'assets/javascripts'

activate :directory_indexes

configure :build do
  activate :relative_assets
end

helpers WebpackAssetHelper
