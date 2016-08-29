# Rails REST API + client(React&Redux) Sample


## Overview

Sample SPA for Rails REST API.


## Usage

### Client Setting

```
cd/client
npm install
```

### Server Setting

```
cd/server
bundle install --path vendor/bundle
bin/rake db:migrate
```



# Directory

```
client/...
server/...
README.md
```


## client

```
assets/
  └─pc/
    ├─imgSprites/...
    ├─img/...
    ├─scripts/
    │  ├─models/...
    │  ├─modules/...
    │  ├─routers/...
    │  ├─templates/...
    │  ├─views/...
    │  ├─home.js
    │  └─index.js
    ├─spec/...
    └─stylus/...
coverage/
gulp/
gulpfile.js
karma.conf
package.json
README.md
webpack.config.js
```


## server

```
app/
  ├─assets/...
  ├─controllers/
  │	   ├─api/
  │	   │  └─favs_controller.rb
  │	   ├─concerns/...
  │	   └─application_controller.rb
  ├─mailers/...
  ├─models/
  │	   ├─concerns/...
  │	   └─fav.rb
  └─selializers/
      └─fav_serializer.rb
bin/...
config/
  ├─enviroments/...
  ├─initializers/...
  ├─locales/...
  ├─database.yml
  ├─enviroment.rb
  ├─routes.rb
  └─secrets.yml
db/
  ├─migrate
  │	  └─2...create_favs.rb
  ├─schema.rb
  └─seeds.rb
docs/
  └─schema/
	  ├─schemata/
	  │	   └─fav.yml
	  ├─meta.yml
 	  ├─schema.json
	  └─schema.md
lib/...
log/...
public/...
spec/
  ├─controllers/...
  ├─factories/...
  ├─models/...
  ├─requests/...
  │	  └─favs_spec.rb
  ├─routing/...
  ├─support/
  │	  └─factory_girl.rb
  ├─example.txt
  ├─rails_helper.rb
  └─spec_helper.rb
temp/
config.ru
Gemfile
Gemfile.lock
Rakefile
README.md
```
