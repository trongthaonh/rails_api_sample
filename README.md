Rails-API/React&Redux Sample
==========

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
client/...        - クライントサイドフォルダ
server/...        - サーバサイドフォルダ
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
bin/...                     - 各種コマンド
config/                     - Rails設定ファイル
  ├─enviroments/...
  ├─initializers/...
  ├─locales/...
  ├─database.yml            - データベースの設定ファイル
  ├─enviroment.rb
  ├─routes.rb               - Routesの設定ファイル
  └─secrets.yml
db/                         - DB管理ディレクトリ
  ├─migrate
  │	  └─2...create_favs.rb  - マイグレートのSchemaテンプレート
  ├─schema.rb               - Scheema定義ファイル
  └─seeds.rb
docs/                       - APIドキュメントディレクトリ
  └─schema/
	  ├─schemata/
	  │	   └─fav.yml          - favのSchema
	  ├─meta.yml
 	  ├─schema.json           - JSON Hyper-Schema
	  └─schema.md             - APIドキュメント
lib/...                     - ライブラリディレクトリ（使わない）
log/...
public/...                  - 公開ファイル
spec/                       - テストコードディレクトリ
  ├─controllers/...
  ├─factories/...
  ├─models/...
  ├─requests/...
  │	  └─favs_spec.rb        - favs APIテストコード
  ├─routing/...
  ├─support/
  │	  └─factory_girl.rb     - factory_girlの設定ファイル
  ├─example.txt             - テストlogファイル
  ├─rails_helper.rb         - RailsのSpecの設定ファイル
  └─spec_helper.rb          - Specの設定ファイル
temp/                       - 一時ファイルディレクトリ（使わない）
config.ru
Gemfile                     - Gemの管理ファイル
Gemfile.lock                - Gemの管理ファイル
Rakefile                    - Rakeのタスク定義（使わない）
README.md
```
