Rail-API
==========

## Usage

```
$ gem install bundler
```

Bundle install

```
bundle install --path vendor/bundle
```

DB migrate

```
$ bin/rake db:migrate
```

Start Server

```
bin/rails s
```


## favs

お気に入り管理用REST API

### GET

#### Request

```javascript
// GET Favs
GET /api/favs/

// GET Faved Album
GET /api/favs/:collectionId
```

#### Responce

```javascript
// Favs
{
  fuserId: String,
  list: [
    {
      albumId: String,
      collectionId: String,
      artistId: String,
      artistName: String,
      collectionName: String,
      collectionViewUrl: String,
      artworkUrl400: String,
      releaseDate: String,
      primaryGenreName: String
    }
  ]
}

// Faved Album
{
  albumId: String,
  collectionId: String,
  artistId: String,
  artistName: String,
  collectionName: String,
  collectionViewUrl: String,
  artworkUrl400: String,
  releaseDate: String,
  primaryGenreName: String
}
```

### POST

#### Request

```javascript
POST /api/favs/
// body
{
  albumId: String,
  artistId: String,
  collectionId: String,
  artistName: String,
  collectionName: String,
  collectionViewUrl: String,
  artworkUrl400: String,
  releaseDate: String,
  primaryGenreName: String
};
```

#### Responce

```javascript
{
  fuserId: String,
  list: [
    {
      albumId: String,
      collectionId: String,
      artistId: String,
      artistName: String,
      collectionName: String,
      collectionViewUrl: String,
      artworkUrl400: String,
      releaseDate: String,
      primaryGenreName: String
    }
  ]
}
```

### PUT

#### Request

```javascript
PUT /api/favs/:collectionId
// body
{
  albumId: String,
  artistId: String,
  collectionId: String,
  artistName: String,
  collectionName: String,
  collectionViewUrl: String,
  artworkUrl400: String,
  releaseDate: String,
  primaryGenreName: String
};
```

#### Responce

```javascript
{
  fuserId: String,
  list: [
    {
      albumId: String,
      collectionId: String,
      artistId: String,
      artistName: String,
      collectionName: String,
      collectionViewUrl: String,
      artworkUrl400: String,
      releaseDate: String,
      primaryGenreName: String
    }
  ]
}
```

### DELETE

#### Request

```javascript
DELETE /api/favs/:collectionId
```
