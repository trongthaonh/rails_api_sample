## <a name="resource-fav">Fav</a>

Stability: `prototype`

Fav API


### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **albumId** | *string* | unique id of album | `"120954021"` |
| **artistId** | *string* | id of artist | `"909253"` |
| **artistName** | *string* | Artist Name of fav | `"Jack Johnson"` |
| **artworkUrl400** | *string* | 400*400 Artwork URL of fav | `"http://a1.itunes.apple.com/r10/Music/3b/6a/33/mzi.qzdqwsel.400x400-75.jpg"` |
| **collectionId** | *string* | unique id of collection | `"120954021"` |
| **collectionName** | *string* | Collection Name of fav | `"Sing-a-Longs and Lullabies for the Film Curious George"` |
| **collectionViewUrl** | *string* | iTunes URL of fav | `"https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewAlbum?i=120954025&id=120954021&s=143441"` |
| **id** | *integer* | unique identifier of user | `1` |
| **primaryGenreName** | *string* | Primary Genre Name of fav | `"Rock"` |
| **releaseDate** | *string* | Release Date of fav | `"2013-01-02T08:00:00Z"` |



### Fav List

List existing favs.

```
GET /api/favs
```

#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "list": [
    {
      "id": "120954021",
      "albumId": "120954021",
      "collectionId": "120954021",
      "artistId": "909253",
      "artistName": "Jack Johnson",
      "collectionName": "Sing-a-Longs and Lullabies for the Film Curious George",
      "collectionViewUrl": "https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewAlbum?i=120954025&id=120954021&s=143441",
      "artworkUrl400": "http://a1.itunes.apple.com/r10/Music/3b/6a/33/mzi.qzdqwsel.400x400-75.jpg",
      "releaseDate": "2013-01-02T08:00:00Z",
      "primaryGenreName": "Rock"
    },
    {
      "id": "120954022",
      "albumId": "120954022",
      "collectionId": "120954022",
      "artistId": "909253",
      "artistName": "Jack Johnson",
      "collectionName": "Sing-a-Longs and Lullabies for the Film Curious George2",
      "collectionViewUrl": "https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewAlbum?i=120954025&id=120954021&s=143441",
      "artworkUrl400": "http://a1.itunes.apple.com/r10/Music/3b/6a/33/mzi.qzdqwsel.400x400-75.jpg",
      "releaseDate": "2013-01-02T08:00:00Z",
      "primaryGenreName": "Rock"
    }
  ]
}
```


### Fav Info

Info for existing fav.

```
GET /api/favs/{fav_id}
```

#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "id": "120954021",
  "albumId": "120954021",
  "collectionId": "120954021",
  "artistId": "909253",
  "artistName": "Jack Johnson",
  "collectionName": "Sing-a-Longs and Lullabies for the Film Curious George",
  "collectionViewUrl": "https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewAlbum?i=120954025&id=120954021&s=143441",
  "artworkUrl400": "http://a1.itunes.apple.com/r10/Music/3b/6a/33/mzi.qzdqwsel.400x400-75.jpg",
  "releaseDate": "2013-01-02T08:00:00Z",
  "primaryGenreName": "Rock"
}
```

### Fav Create

Create a new fav.

```
POST /api/favs
```

#### Response Example

```
HTTP/1.1 201 Created
```



### Fav Update

Update an existing fav.

```
PATCH /api/favs/{fav_id}
```

#### Response Example

```
HTTP/1.1 204 No Content
```



### Fav Delete

Delete an existing fav.

```
DELETE /api/favs/{fav_id}
```

#### Response Example

```
HTTP/1.1 204 No Content
```
