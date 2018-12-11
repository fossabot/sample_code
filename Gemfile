# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |_repo| 'https://github.com/#{repo}.git' }

ruby '2.5.1'

gem 'mysql2', '>= 0.4.4', '< 0.6.0'
gem 'puma', '~> 3.11'
gem 'rails', '~> 5.2.0'
# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.1.0', require: false

# ====================================
# rails default gems above this line
# ====================================

gem 'bcrypt', '~> 3.1.7'

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS)
gem 'rack-cors'

gem 'browser'

gem 'batch-loader'
gem 'batch-loader-active-record'
gem 'geocoder'
gem 'google_places_autocomplete'
gem 'graphql'
gem 'graphql-pundit'
gem 'kaminari'
gem 'pundit'
gem 'search_object', '1.2.1'
gem 'creds'

gem 'sentry-raven'

gem 'sidekiq'
gem 'httparty'
gem 'sidekiq-scheduler'

# state machine
gem 'aasm'

gem 'elasticsearch-model'
gem 'mini_magick'
gem 'aws-sdk-s3', '~> 1'
gem 'streamio-ffmpeg'

gem 'parallel'

# ====================================
# functional and static libs below
# ====================================
# Static typing
# gem 'rdl'
# OR
# gem 'contracts'

# better structs
# gem 'immutable-struct'
# OR
# gem 'dry-struct' # POROs not structs
gem 'dry-monads' # maybe, fmap, result, try
gem 'immutable-ruby'
gem 'qo' # pattern matching
# gem 'dry-transaction'
# gem 'dry-validation'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'database_cleaner'
  gem 'factory_bot_rails'
  gem 'faker', git: 'https://github.com/stympy/faker', branch: 'master'
  gem 'inch', require: false # hints to improve documentation
  gem 'rspec-rails'
  gem 'timecop'
  gem 'vcr'
  gem 'webmock'
  # gem 'yard', require: false # generate documentation
end


group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'rubocop', require: false
  # Spring speeds up development by keeping your application running in the bg
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  # gem 'cucumber-rails'
  gem 'rails-controller-testing'
  gem 'simplecov', require: false
end
