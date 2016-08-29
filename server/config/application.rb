require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Server
  class Application < Rails::Application
    config.time_zone = 'Tokyo'
    config.active_record.default_timezone = :local

    I18n.enforce_available_locales = false
    config.i18n.default_locale = :ja

    config.generators do |g|
      g.test_framework :rspec, helper: false, assets: false, controller_specs: false, view: false, integration_tool: false, fixture: true
      g.fixture_replacement :factory_girl, dir: 'spec/factories'
    end

    config.autoload_paths += %W(#{config.root}/lib)
    if ENV['RAILS_ENV'] == 'test'
      system('bundle exec prmd combine --meta docs/schema/meta.yml docs/schema/schemata/ > docs/schema/schema.json')
      str = File.read("#{Rails.root}/docs/schema/schema.json")
      schema = JSON.parse(str)

      config.middleware.use Rack::JsonSchema::ErrorHandler
      config.middleware.use Rack::JsonSchema::ResponseValidation, schema: schema
    end

    # Do not swallow errors in after_commit/after_rollback callbacks.
    config.active_record.raise_in_transactional_callbacks = true

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
